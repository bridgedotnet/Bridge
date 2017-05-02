    Bridge.define("System.Threading.Utils.WorkerThreadManager", {
        statics: {
            fields: {
                _isWebWorker: false,
                _worker: null,
                _threadId: 0,
                MessageTypeLoadScripts: 0,
                MessageTypeStart: 0,
                MessageTypeFinish: 0,
                MessageTypeException: 0,
                MessageTypeScriptLoadException: 0,
                MessageTypeMessage: 0
            },
            events: {
                OnMessage: null
            },
            ctors: {
                init: function () {
                    this.MessageTypeLoadScripts = 0;
                    this.MessageTypeStart = 1;
                    this.MessageTypeFinish = 2;
                    this.MessageTypeException = 3;
                    this.MessageTypeScriptLoadException = 4;
                    this.MessageTypeMessage = 5;
                }
            },
            methods: {
                isWebWorker: function () {
                    // Return the web worker status
                    return System.Threading.Utils.WorkerThreadManager._isWebWorker;
                },
                getThreadId: function () {
                    // Return the thread id
                    return System.Threading.Utils.WorkerThreadManager._threadId;
                },
                workerThreadManagerEntryPoint: function () {
                    // This is a web worker, update the flag
                    System.Threading.Utils.WorkerThreadManager._isWebWorker = true;

                    // Set the worker to be a reference to "window"
                    System.Threading.Utils.WorkerThreadManager._worker = window;

                    // Set the message handler to handle messages from the main thread
                    System.Threading.Utils.WorkerThreadManager._worker.onmessage = System.Threading.Utils.WorkerThreadManager.handleMessage;
                },
                getObjectRefFromString: function (o, s) {
                    // Check if the path still contains another .
                    if (!System.String.contains(s,".")) {
                        return o[s];
                    }

                    // Split the path by .
                    var bits = System.String.split(s, [46].map(function(i) {{ return String.fromCharCode(i); }}));
                    // Get the first part of the path
                    var s1 = bits[System.Array.index(0, bits)];
                    // Get the rest of the path after the first .
                    var s2 = bits.slice(1).join(".");
                    // Get the object referenced by the first part, and continue recursing with the next path reference
                    return System.Threading.Utils.WorkerThreadManager.getObjectRefFromString(o[s1], s2);
                },
                handleMessage: function (arg) {
                    var $t;
                    // Deserialise the message
                    var msg = arg.data;
                    // Process the message
                    switch (msg.msgType) {
                        case System.Threading.Utils.WorkerThreadManager.MessageTypeLoadScripts: 
                            // The data is an array of strings representing the Uris of the scripts to load
                            var scripts = Bridge.as(msg.data, System.Array.type(System.String));
                            // Iterate over each script in order and load it in to the web worker
                            if (scripts != null) {
                                $t = Bridge.getEnumerator(scripts);
                                try {
                                    while ($t.moveNext()) {
                                        var s = $t.Current;
                                        // Try to import the script
                                        try {
                                            // Import the script
                                            importScripts(s);
                                        }
                                        catch ($e1) {
                                            $e1 = System.Exception.create($e1);
                                            // An exception occurred trying to load the script
                                            // Send a script load exception message back to the main thread
                                            System.Threading.Utils.WorkerThreadManager._worker.postMessage({ msgType: System.Threading.Utils.WorkerThreadManager.MessageTypeScriptLoadException, data: s });
                                        }
                                    }
                                }finally {
                                    if (Bridge.is($t, System.IDisposable)) {
                                        $t.System$IDisposable$dispose();
                                    }
                                }}
                            break;
                        case System.Threading.Utils.WorkerThreadManager.MessageTypeStart: 
                            // Cast the message data to a WebWorkerStartMessage
                            var startData = msg.data;
                            // Get the function pointer of the thread entry point to call
                            var entryPointRef = System.Threading.Utils.WorkerThreadManager.getObjectRefFromString(window, startData.threadEntryPoint);
                            // Get the param from the message
                            var param = startData.threadParam;
                            // Set the thread id
                            System.Threading.Utils.WorkerThreadManager._threadId = startData.threadId;
                            // Try to call the function
                            try {
                                // Call the function with the parameter, and get the result
                                var result = entryPointRef(param);

                                // Send the result back to the main thread
                                System.Threading.Utils.WorkerThreadManager._worker.postMessage({ msgType: System.Threading.Utils.WorkerThreadManager.MessageTypeFinish, data: { threadId: startData.threadId, result: result } });
                            }
                            catch ($e2) {
                                $e2 = System.Exception.create($e2);
                                // An exception occurred running the thread start function
                                System.Threading.Utils.WorkerThreadManager._worker.postMessage({ msgType: System.Threading.Utils.WorkerThreadManager.MessageTypeException, data: { threadId: startData.threadId } });
                                // Continue raising the exception in this thread so it is printed to the console
                                throw $e2;
                            }
                            break;
                        case System.Threading.Utils.WorkerThreadManager.MessageTypeMessage: 
                            !Bridge.staticEquals(System.Threading.Utils.WorkerThreadManager.OnMessage, null) ? System.Threading.Utils.WorkerThreadManager.OnMessage(msg.data) : null;
                            break;
                        default: 
                            throw new System.ArgumentOutOfRangeException();
                    }
                },
                postMessage: function (msg) {
                    // Send the result back to the main thread
                    System.Threading.Utils.WorkerThreadManager._worker.postMessage({ msgType: System.Threading.Utils.WorkerThreadManager.MessageTypeMessage, data: msg });
                }
            }
        }
    });
