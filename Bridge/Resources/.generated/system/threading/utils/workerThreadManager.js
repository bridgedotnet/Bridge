    Bridge.define("System.Threading.Utils.WorkerThreadManager", {
        statics: {
            fields: {
                _isWebWorker: false,
                _worker: null,
                _threadId: 0
            },
            ctors: {
                init: function () {
                    this._isWebWorker = false;
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
                    var msg = Bridge.Json.deserialize(Bridge.unbox(arg.data), System.Object);
                    // Process the message
                    switch (msg.msgType) {
                        case System.Threading.Utils.WorkerThreadManager.MessageType.LoadScripts: 
                            // The data is an array of strings representing the Uris of the scripts to load
                            var scripts = Bridge.cast(msg.data, System.Array.type(System.String));
                            // Iterate over each script in order and load it in to the web worker
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
                                        System.Threading.Utils.WorkerThreadManager._worker.postMessage(Bridge.Json.serialize({ msgType: System.Threading.Utils.WorkerThreadManager.MessageType.ScriptLoadException, data: s }));
                                    }
                                }
                            }finally {
                                if (Bridge.is($t, System.IDisposable)) {
                                    $t.System$IDisposable$dispose();
                                }
                            }break;
                        case System.Threading.Utils.WorkerThreadManager.MessageType.Start: 
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
                                System.Threading.Utils.WorkerThreadManager._worker.postMessage(Bridge.Json.serialize({ msgType: System.Threading.Utils.WorkerThreadManager.MessageType.Finish, data: { threadId: startData.threadId, result: Bridge.unbox(Bridge.unbox(result)) } }));
                            }
                            catch ($e2) {
                                $e2 = System.Exception.create($e2);
                                // An exception occurred running the thread start function
                                System.Threading.Utils.WorkerThreadManager._worker.postMessage(Bridge.Json.serialize({ msgType: System.Threading.Utils.WorkerThreadManager.MessageType.Exception, data: { threadId: startData.threadId } }));
                                // Continue raising the exception in this thread so it is printed to the console
                                throw $e2;
                            }
                            break;
                        default: 
                            throw new System.ArgumentOutOfRangeException();
                    }
                }
            }
        }
    });
