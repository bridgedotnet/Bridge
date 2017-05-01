    Bridge.define("System.Threading.Thread", {
        inherits: [System.IDisposable],
        statics: {
            fields: {
                _globalThreadIdCounter: 0
            },
            methods: {
                getCurrentJsFilePath: function () {
                    var $t;
                    // Need to create a stack trace so we can break down the files in the stack trace and work out which file called us
                    try {
                        // Raise a new basic javascript error
                        throw new Error();
                    }
                    catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        var error;
                        if (Bridge.is($e1, Bridge.ErrorException)) {
                            error = $e1;
                            // Catch the error and get the stack trace from the error
                            var stack = Bridge.cast(error.error.stack, System.String);
                            // Split the stack trace in to lines
                            var stackLines = System.Linq.Enumerable.from(System.String.split(stack, [10].map(function(i) {{ return String.fromCharCode(i); }}))).where($asm.$.System.Threading.Thread.f1);
                            // Next we skip over the first two lines in the stack trace, since the first line is "Error" and the second line is this javascript file where the exception occurred
                            $t = Bridge.getEnumerator(stackLines.skip(1));
                            try {
                                while ($t.moveNext()) {
                                    var line = $t.Current;
                                    // Next we sprit the string up and extract the file name from the line, file name is inside brackets, but also includes the line and column, so we need to extract between ( and :
                                    if (System.String.contains(line,"://") && System.String.contains(line,".js")) {
                                        var s = System.String.concat(System.Linq.Enumerable.from(System.String.split(System.Linq.Enumerable.from(System.String.split(line, System.Array.init([40, 64], System.Char).map(function(i) {{ return String.fromCharCode(i); }}))).last(), System.Array.init([".js:"], System.String), null, 0)).first(), ".js");
                                        // Remove leading or trailing whitespace
                                        s = s.trim();
                                        // Sometimes the line will start with "at ", so we need to check and remove
                                        if (System.String.startsWith(s, "at")) {
                                            s = s.substr(2);
                                        }
                                        // Return the result
                                        return s.trim();
                                    }
                                }
                            }finally {
                                if (Bridge.is($t, System.IDisposable)) {
                                    $t.System$IDisposable$dispose();
                                }
                            }} else {
                            throw $e1;
                        }
                    }
                    // Should never get here
                    return null;
                }
            }
        },
        fields: {
            _result: null,
            _worker: null,
            _isDead: false,
            _queuedStarts: null,
            _currentThreadId: 0
        },
        props: {
            ManagedThreadId: {
                get: function () {
                    // Check if this thread is a web worker
                    if (System.Threading.Utils.WorkerThreadManager.isWebWorker()) {
                        // Yes, return the web worker thread id
                        return System.Threading.Utils.WorkerThreadManager.getThreadId();
                    } else {
                        // No, return the current thread id
                        return this._currentThreadId;
                    }
                }
            },
            IsAlive: {
                get: function () {
                    // True if there are any outstanding jobs, else false
                    return this._queuedStarts.count > 0;
                }
            },
            Result: {
                get: function () {
                    return this._result;
                }
            }
        },
        alias: [
            "dispose", "System$IDisposable$dispose"
        ],
        ctors: {
            init: function () {
                this._queuedStarts = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Object))();
            },
            ctor: function (scripts) {
                this.$initialize();
                // Try to create a web worker
                try {
                    // Create the web worker loading the bridge.js runtime
                    this._worker = new Worker(System.Threading.Thread.getCurrentJsFilePath());

                    // Set the message handler to handle messages from the worker
                    this._worker.onmessage = Bridge.fn.cacheBind(this, this.handleMessage);

                    // Ask the worker to load the scripts provided
                    this._worker.postMessage(Bridge.Json.serialize({ msgType: System.Threading.Utils.WorkerThreadManager.MessageType.LoadScripts, data: scripts }));
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    // Web worker does not exist
                    this._worker = null;
                }

                // Threads start in an alive state
                this._isDead = false;

                // Current thread id always starts at 0 since 0 represents the main thread, or the currenly executing 
                // thread start within this thread if web workers are not available
                this._currentThreadId = 0;
            }
        },
        methods: {
            start: function (entryPoint, param, onResult) {
                if (onResult === void 0) { onResult = null; }
                // First we must make sure the function exists and is static
                var threadStartRef = null;
                try {
                    // Try to get a reference to the entry point
                    threadStartRef = System.Threading.Utils.WorkerThreadManager.getObjectRefFromString(window, entryPoint);
                    // Confirm that it is not null
                    if (threadStartRef == null) {
                        throw new System.Exception();
                    }
                    // Confirm that the reference is a function
                    if (!typeof threadStartRef === 'function') {
                        throw new System.Exception();
                    }
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    // The entry point is not valid, it either does not exist or is not a static function
                    throw new System.ArgumentException(System.String.concat("Thread entry point ", entryPoint, " doesn't seem to exist, or is not a static function"));
                }

                // Check that this thread is not already dead
                if (this._isDead) {
                    throw new System.InvalidOperationException("Attempt made to call Start on a dead thread");
                }

                // Can only run one thread start if there is no on result callback
                if (Bridge.staticEquals(onResult, null) && System.Linq.Enumerable.from(this._queuedStarts).count() > 0) {
                    throw new System.InvalidOperationException("Attempt made to queue thread starts with no valid OnResult handler");
                }

                // Ask the worker to start the thread if web workers are available
                if (this._worker != null) {
                    // Ask the worker to start (or queue) this function
                    this._worker.postMessage(Bridge.Json.serialize({ msgType: System.Threading.Utils.WorkerThreadManager.MessageType.Start, data: { threadId: System.Threading.Thread._globalThreadIdCounter, threadEntryPoint: entryPoint, threadParam: Bridge.unbox(Bridge.unbox(param)) } }));
                    // Add the thread to the queue of thread starts
                    this._queuedStarts.add(System.Threading.Thread._globalThreadIdCounter, { threadId: System.Threading.Thread._globalThreadIdCounter, param: param, onResult: onResult });
                } else {
                    // Web workers are not available, run the thread start function in this thread

                    // Set the current thread to be the current global thread count
                    this._currentThreadId = System.Threading.Thread._globalThreadIdCounter;

                    // Try to call the function
                    try {
                        // Call the function with the parameter, and get the result
                        var result = threadStartRef(param);

                        // Check if an on result callback was provided
                        if (!Bridge.staticEquals(onResult, null)) {
                            // Yes, call the handler with this thread, the original parameter and the result from the message
                            onResult(this, param, result);
                        } else {
                            // No, set the internal result to the result from the message
                            this._result = result;
                        }
                    }
                    catch (e) {
                        e = System.Exception.create(e);
                        // An exception occurred running the thread start function
                        // Continue raising the exception in this thread so it is printed to the console
                        throw new System.Exception("Unhandled exception in thread (" + this._currentThreadId + ")", e);
                    }
                    finally {
                        // Always go back to the main thread
                        this._currentThreadId = 0;
                    }
                }

                // Increment the global thread counter
                System.Threading.Thread._globalThreadIdCounter = (System.Threading.Thread._globalThreadIdCounter + 1) | 0;
            },
            handleMessage: function (arg) {
                // Deserialize the message sent from the worker
                var msg = Bridge.Json.deserialize(Bridge.unbox(arg.data), System.Object);
                // Process the message type
                switch (msg.msgType) {
                    case System.Threading.Utils.WorkerThreadManager.MessageType.Finish: 
                        // Get the WebWorkerFinishMessage data from the message
                        var finishMessage = msg.data;
                        // Get the thread start object that this message indicates just finished
                        var threadStart = this._queuedStarts.get(finishMessage.threadId);
                        // Check if this thread start had a result handler
                        if (!Bridge.staticEquals(threadStart.onResult, null)) {
                            // Yes, call the handler with this thread, the original parameter and the result from the message
                            threadStart.onResult(this, threadStart.param, finishMessage.result);
                        } else {
                            // No, set the internal result to the result from the message
                            this._result = finishMessage.result;
                        }
                        // Remove this finished thread start from the list of queued thread starts
                        this._queuedStarts.remove(threadStart.threadId);
                        break;
                    case System.Threading.Utils.WorkerThreadManager.MessageType.Exception: 
                        // Get the WebWorkerExceptionMessage data from the message
                        var exceptionMessage = msg.data;
                        // Get the thread start object that this message indicates raised an exception
                        threadStart = this._queuedStarts.get(exceptionMessage.threadId);
                        // Remove this finished thread start object from the list of queued threads
                        this._queuedStarts.remove(threadStart.threadId);
                        // Raise an execption indicating that this thread start raised an exception
                        throw new System.Exception("Unhandled exception in thread (" + threadStart.threadId + ")");
                    case System.Threading.Utils.WorkerThreadManager.MessageType.ScriptLoadException: 
                        // Script loading exceptions are unrecoverable and will kill the thread
                        this.dispose();
                        // Raise an exception indicating the file that was loaded that caused the exception
                        throw new System.Exception(System.String.concat("There was an exception loading script file ", Bridge.cast(msg.data, System.String), " while initialising a Web Worker"));
                    default: 
                        throw new System.ArgumentOutOfRangeException();
                }
            },
            join: function (onJoin) {
                // Check if there are any queued or running thread start objects
                if (System.Linq.Enumerable.from(this._queuedStarts).count() > 0) {
                    // Yes, we need to wait a moment and then call on join again
                    // This must use setTimeout to allow worker messages to be processed
                    var setTimeout = window.setTimeout;
                    // Check the join again in a moment
                    setTimeout(Bridge.fn.bind(this, function () {
                        return this.join(onJoin);
                    }), 0);
                } else {
                    // All thread starts have finished, call the callback
                    onJoin();
                }
            },
            abort: function () {
                this.dispose();
            },
            dispose: function () {
                if (!this._isDead) {
                    this._worker.terminate();
                    this._queuedStarts.clear();
                    this._isDead = true;
                }
            }
        }
    });

    Bridge.ns("System.Threading.Thread", $asm.$);

    Bridge.apply($asm.$.System.Threading.Thread, {
        f1: function (e) {
            return System.String.contains(e,"@") || System.String.contains(e,"at");
        }
    });
