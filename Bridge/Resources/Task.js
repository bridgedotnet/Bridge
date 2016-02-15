    // @source Task.js

    Bridge.define("Bridge.Task", {
        inherits: [Bridge.IDisposable],
        constructor: function (action, state) {
            this.action = action;
            this.state = state;
            this.exception = null;
            this.status = Bridge.TaskStatus.created;
            this.callbacks = [];
            this.result = null;
        },

        statics: {
            delay: function (delay, state) {
                var tcs = new Bridge.TaskCompletionSource();

                setTimeout(function () {
                    tcs.setResult(state);
                }, delay);

                return tcs.task;
            },

            fromResult: function (result) {
                var t = new Bridge.Task();

                t.status = Bridge.TaskStatus.ranToCompletion;
                t.result = result;

                return t;
            },

            run: function (fn) {
                var tcs = new Bridge.TaskCompletionSource();

                setTimeout(function () {
                    try {
                        tcs.setResult(fn());
                    } catch (e) {
                        tcs.setException(Bridge.Exception.create(e));
                    }
                }, 0);

                return tcs.task;
            },

            whenAll: function (tasks) {
                var tcs = new Bridge.TaskCompletionSource(),
                    result,
                    executing,
                    cancelled = false,
                    exceptions = [],
                    i;

                if (Bridge.is(tasks, Bridge.IEnumerable)) {
                    tasks = Bridge.toArray(tasks);
                }
                else if (!Bridge.isArray(tasks)) {
                    tasks = Array.prototype.slice.call(arguments, 0);
                }

                if (tasks.length === 0) {
                    tcs.setResult([]);
                    return tcs.task;
                }

                executing = tasks.length;
                result = new Array(tasks.length);

                for (i = 0; i < tasks.length; i++) {
                    (function(i) {
                        tasks[i].continueWith(function (t) {
                            switch (t.status) {
                                case Bridge.TaskStatus.ranToCompletion:
                                    result[i] = t.getResult();
                                    break;
                                case Bridge.TaskStatus.canceled:
                                    cancelled = true;
                                    break;
                                case Bridge.TaskStatus.faulted:
                                    Bridge.Array.addRange(exceptions, t.exception.innerExceptions);
                                    break;
                                default:
                                    throw new Bridge.InvalidOperationException("Invalid task status: " + t.status);
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
                if (Bridge.is(tasks, Bridge.IEnumerable)) {
                    tasks = Bridge.toArray(tasks);
                }
                else if (!Bridge.isArray(tasks)) {
                    tasks = Array.prototype.slice.call(arguments, 0);
                }

                if (!tasks.length) {
                    throw new Bridge.ArgumentException("At least one task is required");
                }

                var tcs = new Bridge.TaskCompletionSource(),
                    i;

                for (i = 0; i < tasks.length; i++) {
                    tasks[i].continueWith(function (t) {
                        switch (t.status) {
                            case Bridge.TaskStatus.ranToCompletion:
                                tcs.trySetResult(t);
                                break;
                            case Bridge.TaskStatus.canceled:
                                tcs.trySetCanceled();
                                break;
                            case Bridge.TaskStatus.faulted:
                                tcs.trySetException(t.exception.innerExceptions);
                                break;
                            default:
                                throw new Bridge.InvalidOperationException("Invalid task status: " + t.status);
                        }
                    });
                }

                return tcs.task;
            },

            fromCallback: function (target, method) {
                var tcs = new Bridge.TaskCompletionSource(),
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
                var tcs = new Bridge.TaskCompletionSource(),
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
                var tcs = new Bridge.TaskCompletionSource(),
                    args = Array.prototype.slice.call(arguments, 3),
                    callback;

                callback = function (value) {
                    tcs.setResult(value);
                };

                args[0] = args[0] || { };
                args[0][name] = callback;

                target[method].apply(target, args);

                return tcs.task;
            },

            fromPromise: function (promise, handler, errorHandler) {
                var tcs = new Bridge.TaskCompletionSource();

                if (!promise.then) {
                    promise = promise.promise();
                }

                if (typeof (handler) === 'number') {
                    handler = (function (i) { return function () { return arguments[i >= 0 ? i : (arguments.length + i)]; }; })(handler);
                }
                else if (typeof (handler) !== 'function') {
                    handler = function () { return Array.prototype.slice.call(arguments, 0); };
                }

                promise.then(function () {
                    tcs.setResult(handler ? handler.apply(null, arguments) : Array.prototype.slice.call(arguments, 0));
                }, function () {
                    tcs.setException(errorHandler ? errorHandler.apply(null, arguments) : new Bridge.PromiseException(Array.prototype.slice.call(arguments, 0)));
                });

                return tcs.task;
            }
        },

        continueWith: function (continuationAction, raise) {
            var tcs = new Bridge.TaskCompletionSource(),
                me = this,
                fn = raise ? function () {
                    tcs.setResult(continuationAction(me));
                } : function () {
                    try {
                        tcs.setResult(continuationAction(me));
                    }
                    catch (e) {
                        tcs.setException(Bridge.Exception.create(e));
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
            if (this.status !== Bridge.TaskStatus.created) {
                throw new Bridge.InvalidOperationException("Task was already started.");
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
                    me.fail(new Bridge.AggregateException(null, [Bridge.Exception.create(e)]));
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

            this.exception = error;
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

        _getResult: function (awaiting) {
            switch (this.status) {
                case Bridge.TaskStatus.ranToCompletion:
                    return this.result;
                case Bridge.TaskStatus.canceled:
                    var ex = new Bridge.TaskCanceledException(null, this);
                    throw awaiting ? ex : new Bridge.AggregateException(null, [ex]);
                case Bridge.TaskStatus.faulted:
                    throw awaiting ? (this.exception.innerExceptions.getCount() > 0 ? this.exception.innerExceptions.get(0) : null) : this.exception;
                default:
                    throw new Bridge.InvalidOperationException("Task is not yet completed.");
            }
        },

        getResult: function () {
            return this._getResult(false);
        },

        dispose: function () {
        },

        getAwaiter: function () {
            return this;
        },

        getAwaitedResult: function () {
            return this._getResult(true);
        }
    });

    Bridge.define("Bridge.TaskStatus", {
        $enum: true,
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


    Bridge.define("Bridge.TaskCompletionSource", {
        constructor: function() {
            this.task = new Bridge.Task();
            this.task.status = Bridge.TaskStatus.running;
        },

        setCanceled: function () {
            if (!this.task.cancel()) {
                throw new Bridge.InvalidOperationException("Task was already completed.");
            }
        },

        setResult: function(result) {
            if (!this.task.complete(result)) {
                throw new Bridge.InvalidOperationException("Task was already completed.");
            }
        },

        setException: function(exception) {
            if (!this.trySetException(exception)) {
                throw new Bridge.InvalidOperationException("Task was already completed.");
            }
        },

        trySetCanceled: function() {
            return this.task.cancel();
        },

        trySetResult: function(result) {
            return this.task.complete(result);
        },

        trySetException: function(exception) {
            if (Bridge.is(exception, Bridge.Exception)) {
                exception = [exception];
            }
                
            return this.task.fail(new Bridge.AggregateException(null, exception));
        }
    });

    Bridge.define("Bridge.CancellationToken", {
         constructor: function (source) {
            if (!Bridge.is(source, Bridge.CancellationTokenSource)) {
                source = source ? Bridge.CancellationToken.sourceTrue : Bridge.CancellationToken.sourceFalse;
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
                throw new Bridge.OperationCanceledException(this);
            }
        },

        register: function (cb, s) {
            return this.source.register(cb, s);
        },

        statics: {
            sourceTrue: {
                isCancellationRequested: true, 
                register: function(f, s) {
                    f(s); 
                    return new Bridge.CancellationTokenRegistration();
                } 
            },
            sourceFalse: {
                uncancellable: true, 
                isCancellationRequested: false, 
                register: function() {
                     return new Bridge.CancellationTokenRegistration();
                }
            },
            getDefaultValue: function () {
                return new Bridge.CancellationToken();
            }
        }
    });

    Bridge.CancellationToken.none = new Bridge.CancellationToken();

    Bridge.define("Bridge.CancellationTokenRegistration", {
        inherits: function() {
            return [Bridge.IDisposable, Bridge.IEquatable$1(Bridge.CancellationTokenRegistration)];
        },
        constructor: function (cts, o) {
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

        statics: {
            getDefaultValue: function () {
                return new Bridge.CancellationTokenRegistration();
            }
        }
    });

    Bridge.define("Bridge.CancellationTokenSource", {
        inherits: [Bridge.IDisposable],

        constructor: function (delay) {
            this.timeout = typeof delay === "number" && delay >= 0 ? setTimeout(Bridge.fn.bind(this, this.cancel), delay, -1) : null;
            this.isCancellationRequested = false;
            this.token = new Bridge.CancellationToken(this);
            this.handlers = [];
        },

        cancel: function (throwFirst) {
            if (this.isCancellationRequested) {
                return ;
            }

            this.isCancellationRequested = true;
            var x = [];
            var h = this.handlers;

            this.clean();

            for (var i = 0; i < h.length; i++) {
                try {
                    h[i].f(h[i].s);
                }
                catch (ex) {
                    if (throwFirst && throwFirst !== -1) {
                        throw ex;
                    }
                        
                    x.push(ex);
                }
            }
            if (x.length > 0 && throwFirst !== -1) {
                throw new Bridge.AggregateException(null, x);
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
                return new Bridge.CancellationTokenRegistration();
            }
            else {
                var o = {f: f, s: s };
                this.handlers.push(o);
                return new Bridge.CancellationTokenRegistration(this, o);
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
                var cts = new Bridge.CancellationTokenSource();
                cts.links = [];
                var d = Bridge.fn.bind(cts, cts.cancel);
                for (var i = 0; i < arguments.length; i++) {
                    cts.links.push(arguments[i].register(d));
                }
                return cts;
            }
        }
    });