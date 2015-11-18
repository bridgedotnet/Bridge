// @source Task.js

Bridge.define("Bridge.Task", {
    constructor: function (action, state) {
        this.action = action;
        this.state = state;
        this.error = null;
        this.status = Bridge.TaskStatus.created;
        this.callbacks = [];
        this.result = null;
    },

    statics: {
        delay: function (delay, state) {
            var task = new Bridge.Task();

            setTimeout(function () {
                task.setResult(state);
            }, delay);

            return task;
        },

        fromResult: function (result) {
            var t = new Bridge.Task();

            t.status = Bridge.TaskStatus.ranToCompletion;
            t.result = result;

            return t;
        },

        run: function (fn) {
            var task = new Bridge.Task();

            setTimeout(function () {
                try {
                    task.setResult(fn());
                } catch (e) {
                    task.setError(e);
                }
            }, 0);

            return task;
        },

        whenAll: function (tasks) {
            var task = new Bridge.Task(),
                result,
                executing = tasks.length,
                cancelled = false,
                errors = [],
                i;

            if (Bridge.is(tasks, Bridge.IEnumerable)) {
                tasks = Bridge.toArray(tasks);
            }
            else if (!Bridge.isArray(tasks)) {
                tasks = Array.prototype.slice.call(arguments, 0);
            }

            if (tasks.length === 0) {
                task.setResult([]);

                return task;
            }

            result = new Array(tasks.length);

            for (i = 0; i < tasks.length; i++) {
                tasks[i].$index = i;
                tasks[i].continueWith(function (t) {
                    switch (t.status) {
                        case Bridge.TaskStatus.ranToCompletion:
                            result[t.$index] = t.getResult();
                            break;
                        case Bridge.TaskStatus.canceled:
                            cancelled = true;
                            break;
                        case Bridge.TaskStatus.faulted:
                            errors.push(t.error);
                            break;
                        default:
                            throw new Bridge.InvalidOperationException("Invalid task status: " + t.status);
                    }

                    executing--;

                    if (!executing) {
                        if (errors.length > 0) {
                            task.setError(errors);
                        } else if (cancelled) {
                            task.setCanceled();
                        } else {
                            task.setResult(result);
                        }
                    }
                });
            }

            return task;
        },

        whenAny: function (tasks) {
            if (Bridge.is(tasks, Bridge.IEnumerable)) {
                tasks = Bridge.toArray(tasks);
            }
            else if (!Bridge.isArray(tasks)) {
                tasks = Array.prototype.slice.call(arguments, 0);
            }

            if (!tasks.length) {
                throw new Bridge.ArgumentException("At least one task is required");
            }

            var task = new Bridge.Task(),
                i;

            for (i = 0; i < tasks.length; i++) {
                tasks[i].continueWith(function (t) {
                    switch (t.status) {
                        case Bridge.TaskStatus.ranToCompletion:
                            task.complete(t);
                            break;
                        case Bridge.TaskStatus.canceled:
                            task.cancel();
                            break;
                        case Bridge.TaskStatus.faulted:
                            task.fail(t.error);
                            break;
                        default:
                            throw new Bridge.InvalidOperationException("Invalid task status: " + t.status);
                    }
                });
            }

            return task;
        },

        fromCallback: function (target, method) {
            var task = new Bridge.Task(),
                args = Array.prototype.slice.call(arguments, 2),
                callback;

            callback = function (value) {
                task.setResult(value);
            };

            args.push(callback);

            target[method].apply(target, args);

            return task;
        },

        fromCallbackResult: function (target, method, resultHandler) {
            var task = new Bridge.Task(),
                args = Array.prototype.slice.call(arguments, 3),
                callback;

            callback = function (value) {
                task.setResult(value);
            };

            resultHandler(args, callback);

            target[method].apply(target, args);

            return task;
        },

        fromCallbackOptions: function (target, method, name) {
            var task = new Bridge.Task(),
                args = Array.prototype.slice.call(arguments, 3),
                callback;

            callback = function (value) {
                task.setResult(value);
            };

            args[0] = args[0] || { };
            args[0][name] = callback;

            target[method].apply(target, args);

            return task;
        },

        fromPromise: function (promise, handler, errorHandler) {
            var task = new Bridge.Task();

            if (!promise.then) {
                promise = promise.promise();
            }

            promise.then(function () {
                task.setResult(handler ? handler.apply(null, arguments) : arguments);
            }, function () {
                task.setError(errorHandler ? errorHandler.apply(null, arguments) : new Error(Array.prototype.slice.call(arguments, 0)));
            });

            return task;
        }
    },

    continueWith: function (continuationAction, raise) {
        var task = new Bridge.Task(),
            me = this,
            fn = raise ? function () {
                task.setResult(continuationAction(me));
            } : function () {
                try {
                    task.setResult(continuationAction(me));
                }
                catch (e) {
                    task.setError(e);
                }
            };

        if (this.isCompleted()) {
            setTimeout(fn, 0);
        } else {
            this.callbacks.push(fn);
        }

        return task;
    },

    start: function () {
        if (this.status !== Bridge.TaskStatus.created) {
            throw new Error("Task was already started.");
        }

        var me = this;

        this.status = Bridge.TaskStatus.running;

        setTimeout(function () {
            try {
                var result = me.action(me.state);
                delete me.action;
                delete me.state;
                me.complete(result);
            } catch (e) {
                me.fail(e);
            }
        }, 0);
    },

    runCallbacks: function () {
        var me = this;

        setTimeout(function () {
            for (var i = 0; i < me.callbacks.length; i++) {
                me.callbacks[i](me);
            }

            delete me.callbacks;
        }, 0);
    },

    complete: function (result) {
        if (this.isCompleted()) {
            return false;
        }

        this.result = result;
        this.status = Bridge.TaskStatus.ranToCompletion;
        this.runCallbacks();

        return true;
    },

    fail: function (error) {
        if (this.isCompleted()) {
            return false;
        }

        this.error = error;
        this.status = Bridge.TaskStatus.faulted;
        this.runCallbacks();

        return true;
    },

    cancel: function () {
        if (this.isCompleted()) {
            return false;
        }

        this.status = Bridge.TaskStatus.canceled;
        this.runCallbacks();

        return true;
    },

    isCanceled: function () {
        return this.status === Bridge.TaskStatus.canceled;
    },

    isCompleted: function () {
        return this.status === Bridge.TaskStatus.ranToCompletion || this.status === Bridge.TaskStatus.canceled || this.status === Bridge.TaskStatus.faulted;
    },

    isFaulted: function () {
        return this.status === Bridge.TaskStatus.faulted;
    },

    getResult: function () {
        switch (this.status) {
            case Bridge.TaskStatus.ranToCompletion:
                return this.result;
            case Bridge.TaskStatus.canceled:
                throw new Error("Task was cancelled.");
            case Bridge.TaskStatus.faulted:
                throw this.error;
            default:
                throw new Error("Task is not yet completed.");
        }
    },

    setCanceled: function () {
        if (!this.cancel()) {
            throw new Error("Task was already completed.");
        }
    },

    setResult: function (result) {
        if (!this.complete(result)) {
            throw new Error("Task was already completed.");
        }
    },

    setError: function (error) {
        if (!this.fail(error)) {
            throw new Error("Task was already completed.");
        }
    },

    dispose: function () {
    },

    getAwaiter: function () {
        return this;
    }
});

Bridge.define("Bridge.TaskStatus", {
    $statics: {
        created: 0,
        waitingForActivation: 1,
        waitingToRun: 2,
        running: 3,
        waitingForChildrenToComplete: 4,
        ranToCompletion: 5,
        canceled: 6,
        faulted: 7
    }
});
