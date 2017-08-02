    Bridge.define("System.Threading.Tasks.Task", {
        inherits: [System.IDisposable],

        config: {
            alias: [
                "dispose", "System$IDisposable$dispose"
            ]
        },

        ctor: function (action, state) {
            this.$initialize();
            this.action = action;
            this.state = state;
            this.exception = null;
            this.status = System.Threading.Tasks.TaskStatus.created;
            this.callbacks = [];
            this.result = null;
        },

        statics: {
            delay: function (delay, state) {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();

                setTimeout(function () {
                    tcs.setResult(state);
                }, delay);

                return tcs.task;
            },

            fromResult: function (result) {
                var t = new System.Threading.Tasks.Task();

                t.status = System.Threading.Tasks.TaskStatus.ranToCompletion;
                t.result = result;

                return t;
            },

            run: function (fn) {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();

                setTimeout(function () {
                    try {
                        tcs.setResult(fn());
                    } catch (e) {
                        tcs.setException(System.Exception.create(e));
                    }
                }, 0);

                return tcs.task;
            },

            whenAll: function (tasks) {
                var tcs = new System.Threading.Tasks.TaskCompletionSource(),
                    result,
                    executing,
                    cancelled = false,
                    exceptions = [],
                    i;

                if (Bridge.is(tasks, System.Collections.IEnumerable)) {
                    tasks = Bridge.toArray(tasks);
                } else if (!Bridge.isArray(tasks)) {
                    tasks = Array.prototype.slice.call(arguments, 0);
                }

                if (tasks.length === 0) {
                    tcs.setResult([]);

                    return tcs.task;
                }

                executing = tasks.length;
                result = new Array(tasks.length);

                for (i = 0; i < tasks.length; i++) {
                    (function (i) {
                        tasks[i].continueWith(function (t) {
                            switch (t.status) {
                                case System.Threading.Tasks.TaskStatus.ranToCompletion:
                                    result[i] = t.getResult();
                                    break;
                                case System.Threading.Tasks.TaskStatus.canceled:
                                    cancelled = true;
                                    break;
                                case System.Threading.Tasks.TaskStatus.faulted:
                                    System.Array.addRange(exceptions, t.exception.innerExceptions);
                                    break;
                                default:
                                    throw new System.InvalidOperationException("Invalid task status: " + t.status);
                            }

                            if (--executing === 0) {
                                if (exceptions.length > 0) {
                                    tcs.setException(exceptions);
                                } else if (cancelled) {
                                    tcs.setCanceled();
                                } else {
                                    tcs.setResult(result);
                                }
                            }
                        });
                    })(i);
                }

                return tcs.task;
            },

            whenAny: function (tasks) {
                if (Bridge.is(tasks, System.Collections.IEnumerable)) {
                    tasks = Bridge.toArray(tasks);
                } else if (!Bridge.isArray(tasks)) {
                    tasks = Array.prototype.slice.call(arguments, 0);
                }

                if (!tasks.length) {
                    throw new System.ArgumentException("At least one task is required");
                }

                var tcs = new System.Threading.Tasks.TaskCompletionSource(),
                    i;

                for (i = 0; i < tasks.length; i++) {
                    tasks[i].continueWith(function (t) {
                        switch (t.status) {
                            case System.Threading.Tasks.TaskStatus.ranToCompletion:
                                tcs.trySetResult(t);
                                break;
                            case System.Threading.Tasks.TaskStatus.canceled:
                                tcs.trySetCanceled();
                                break;
                            case System.Threading.Tasks.TaskStatus.faulted:
                                tcs.trySetException(t.exception.innerExceptions);
                                break;
                            default:
                                throw new System.InvalidOperationException("Invalid task status: " + t.status);
                        }
                    });
                }

                return tcs.task;
            },

            fromCallback: function (target, method) {
                var tcs = new System.Threading.Tasks.TaskCompletionSource(),
                    args = Array.prototype.slice.call(arguments, 2),
                    callback;

                callback = function (value) {
                    tcs.setResult(value);
                };

                args.push(callback);

                target[method].apply(target, args);

                return tcs.task;
            },

            fromCallbackResult: function (target, method, resultHandler) {
                var tcs = new System.Threading.Tasks.TaskCompletionSource(),
                    args = Array.prototype.slice.call(arguments, 3),
                    callback;

                callback = function (value) {
                    tcs.setResult(value);
                };

                resultHandler(args, callback);

                target[method].apply(target, args);

                return tcs.task;
            },

            fromCallbackOptions: function (target, method, name) {
                var tcs = new System.Threading.Tasks.TaskCompletionSource(),
                    args = Array.prototype.slice.call(arguments, 3),
                    callback;

                callback = function (value) {
                    tcs.setResult(value);
                };

                args[0] = args[0] || {};
                args[0][name] = callback;

                target[method].apply(target, args);

                return tcs.task;
            },

            fromPromise: function (promise, handler, errorHandler, progressHandler) {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();

                if (!promise.then) {
                    promise = promise.promise();
                }

                if (typeof (handler) === 'number') {
                    handler = (function (i) {
                        return function () {
                            return arguments[i >= 0 ? i : (arguments.length + i)];
                        };
                    })(handler);
                } else if (typeof (handler) !== 'function') {
                    handler = function () {
                        return Array.prototype.slice.call(arguments, 0);
                    };
                }

                promise.then(function () {
                    tcs.setResult(handler ? handler.apply(null, arguments) : Array.prototype.slice.call(arguments, 0));
                }, function () {
                    tcs.setException(errorHandler ? errorHandler.apply(null, arguments) : new Bridge.PromiseException(Array.prototype.slice.call(arguments, 0)));
                }, progressHandler);

                return tcs.task;
            }
        },

        continueWith: function (continuationAction, raise) {
            var tcs = new System.Threading.Tasks.TaskCompletionSource(),
                me = this,
                fn = raise ? function () {
                    tcs.setResult(continuationAction(me));
                } : function () {
                    try {
                        tcs.setResult(continuationAction(me));
                    } catch (e) {
                        tcs.setException(System.Exception.create(e));
                    }
                };

            if (this.isCompleted()) {
                setTimeout(fn, 0);
            } else {
                this.callbacks.push(fn);
            }

            return tcs.task;
        },

        start: function () {
            if (this.status !== System.Threading.Tasks.TaskStatus.created) {
                throw new System.InvalidOperationException("Task was already started.");
            }

            var me = this;

            this.status = System.Threading.Tasks.TaskStatus.running;

            setTimeout(function () {
                try {
                    var result = me.action(me.state);

                    delete me.action;
                    delete me.state;

                    me.complete(result);
                } catch (e) {
                    me.fail(new System.AggregateException(null, [System.Exception.create(e)]));
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
            this.status = System.Threading.Tasks.TaskStatus.ranToCompletion;
            this.runCallbacks();

            return true;
        },

        fail: function (error) {
            if (this.isCompleted()) {
                return false;
            }

            this.exception = error;
            this.status = System.Threading.Tasks.TaskStatus.faulted;
            this.runCallbacks();

            return true;
        },

        cancel: function () {
            if (this.isCompleted()) {
                return false;
            }

            this.status = System.Threading.Tasks.TaskStatus.canceled;
            this.runCallbacks();

            return true;
        },

        isCanceled: function () {
            return this.status === System.Threading.Tasks.TaskStatus.canceled;
        },

        isCompleted: function () {
            return this.status === System.Threading.Tasks.TaskStatus.ranToCompletion || this.status === System.Threading.Tasks.TaskStatus.canceled || this.status === System.Threading.Tasks.TaskStatus.faulted;
        },

        isFaulted: function () {
            return this.status === System.Threading.Tasks.TaskStatus.faulted;
        },

        _getResult: function (awaiting) {
            switch (this.status) {
                case System.Threading.Tasks.TaskStatus.ranToCompletion:
                    return this.result;
                case System.Threading.Tasks.TaskStatus.canceled:
                    var ex = new System.Threading.Tasks.TaskCanceledException(null, this);

                    throw awaiting ? ex : new System.AggregateException(null, [ex]);
                case System.Threading.Tasks.TaskStatus.faulted:
                    throw awaiting ? (this.exception.innerExceptions.getCount() > 0 ? this.exception.innerExceptions.get(0) : null) : this.exception;
                default:
                    throw new System.InvalidOperationException("Task is not yet completed.");
            }
        },

        getResult: function () {
            return this._getResult(false);
        },

        dispose: function () {},

        getAwaiter: function () {
            return this;
        },

        getAwaitedResult: function () {
            return this._getResult(true);
        }
    });

    Bridge.define("System.Threading.Tasks.Task$1", function (T) {
        return {
            inherits: [System.Threading.Tasks.Task],
            ctor: function(action, state) {
                this.$initialize();
                System.Threading.Tasks.Task.ctor.call(this, action, state);
            }
        };
    });

    Bridge.define("System.Threading.Tasks.TaskStatus", {
        $kind: "enum",
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

    Bridge.define("System.Threading.Tasks.TaskCompletionSource", {
        ctor: function () {
            this.$initialize();
            this.task = new System.Threading.Tasks.Task();
            this.task.status = System.Threading.Tasks.TaskStatus.running;
        },

        setCanceled: function () {
            if (!this.task.cancel()) {
                throw new System.InvalidOperationException("Task was already completed.");
            }
        },

        setResult: function (result) {
            if (!this.task.complete(result)) {
                throw new System.InvalidOperationException("Task was already completed.");
            }
        },

        setException: function (exception) {
            if (!this.trySetException(exception)) {
                throw new System.InvalidOperationException("Task was already completed.");
            }
        },

        trySetCanceled: function () {
            return this.task.cancel();
        },

        trySetResult: function (result) {
            return this.task.complete(result);
        },

        trySetException: function (exception) {
            if (Bridge.is(exception, System.Exception)) {
                exception = [exception];
            }

            return this.task.fail(new System.AggregateException(null, exception));
        }
    });

    Bridge.define("System.Threading.CancellationTokenSource", {
        inherits: [System.IDisposable],

        config: {
            alias: [
                "dispose", "System$IDisposable$dispose"
            ]
        },

        ctor: function (delay) {
            this.$initialize();
            this.timeout = typeof delay === "number" && delay >= 0 ? setTimeout(Bridge.fn.bind(this, this.cancel), delay, -1) : null;
            this.isCancellationRequested = false;
            this.token = new System.Threading.CancellationToken(this);
            this.handlers = [];
        },

        cancel: function (throwFirst) {
            if (this.isCancellationRequested) {
                return;
            }

            this.isCancellationRequested = true;

            var x = [],
                h = this.handlers;

            this.clean();

            for (var i = 0; i < h.length; i++) {
                try {
                    h[i].f(h[i].s);
                } catch (ex) {
                    if (throwFirst && throwFirst !== -1) {
                        throw ex;
                    }

                    x.push(ex);
                }
            }

            if (x.length > 0 && throwFirst !== -1) {
                throw new System.AggregateException(null, x);
            }
        },

        cancelAfter: function (delay) {
            if (this.isCancellationRequested) {
                return;
            }

            if (this.timeout) {
                clearTimeout(this.timeout);
            }

            this.timeout = setTimeout(Bridge.fn.bind(this, this.cancel), delay, -1);
        },

        register: function (f, s) {
            if (this.isCancellationRequested) {
                f(s);

                return new System.Threading.CancellationTokenRegistration();
            } else {
                var o = {
                    f: f,
                    s: s
                };
                this.handlers.push(o);

                return new System.Threading.CancellationTokenRegistration(this, o);
            }
        },

        deregister: function (o) {
            var ix = this.handlers.indexOf(o);

            if (ix >= 0) {
                this.handlers.splice(ix, 1);
            }
        },

        dispose: function () {
            this.clean();
        },

        clean: function () {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }

            this.timeout = null;
            this.handlers = [];

            if (this.links) {
                for (var i = 0; i < this.links.length; i++) {
                    this.links[i].dispose();
                }

                this.links = null;
            }
        },

        statics: {
            createLinked: function () {
                var cts = new System.Threading.CancellationTokenSource();

                cts.links = [];

                var d = Bridge.fn.bind(cts, cts.cancel);

                for (var i = 0; i < arguments.length; i++) {
                    cts.links.push(arguments[i].register(d));
                }

                return cts;
            }
        }
    });

    Bridge.define("System.Threading.CancellationToken", {
         $kind: "struct",

        ctor: function (source) {
            this.$initialize();

            if (!Bridge.is(source, System.Threading.CancellationTokenSource)) {
                source = source ? System.Threading.CancellationToken.sourceTrue : System.Threading.CancellationToken.sourceFalse;
            }

            this.source = source;
        },

        getCanBeCanceled: function () {
            return !this.source.uncancellable;
        },

        getIsCancellationRequested: function () {
            return this.source.isCancellationRequested;
        },

        throwIfCancellationRequested: function () {
            if (this.source.isCancellationRequested) {
                throw new System.OperationCanceledException(this);
            }
        },

        register: function (cb, s) {
            return this.source.register(cb, s);
        },

        getHashCode: function () {
            return Bridge.getHashCode(this.source);
        },

        equals: function (other) {
            return other.source === this.source;
        },

        equalsT: function (other) {
            return other.source === this.source;
        },

        statics: {
            sourceTrue: {
                isCancellationRequested: true,
                register: function (f, s) {
                    f(s);

                    return new System.Threading.CancellationTokenRegistration();
                }
            },
            sourceFalse: {
                uncancellable: true,
                isCancellationRequested: false,
                register: function () {
                    return new System.Threading.CancellationTokenRegistration();
                }
            },
            getDefaultValue: function () {
                return new System.Threading.CancellationToken();
            }
        }
    });

    System.Threading.CancellationToken.none = new System.Threading.CancellationToken();

    Bridge.define("System.Threading.CancellationTokenRegistration", {
        inherits: function () {
            return [System.IDisposable, System.IEquatable$1(System.Threading.CancellationTokenRegistration)];
        },

        $kind: "struct",

        config: {
            alias: [
                "dispose", "System$IDisposable$dispose"
            ]
        },

        ctor: function (cts, o) {
            this.$initialize();
            this.cts = cts;
            this.o = o;
        },

        dispose: function () {
            if (this.cts) {
                this.cts.deregister(this.o);
                this.cts = this.o = null;
            }
        },

        equalsT: function (o) {
            return this === o;
        },

        equals: function (o) {
            return this === o;
        },

        statics: {
            getDefaultValue: function () {
                return new System.Threading.CancellationTokenRegistration();
            }
        }
    });