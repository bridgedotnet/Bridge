    Bridge.define("System.Net.WebSockets.ClientWebSocket", {
        inherits: [System.IDisposable],

        ctor: function () {
            this.$initialize();
            this.messageBuffer = [];
            this.state = "none";
            this.options = new System.Net.WebSockets.ClientWebSocketOptions();
            this.disposed = false;
            this.closeStatus = null;
            this.closeStatusDescription = null;
        },

        getCloseStatus: function () {
            return this.closeStatus;
        },

        getState: function () {
            return this.state;
        },

        getCloseStatusDescription: function () {
            return this.closeStatusDescription;
        },

        getSubProtocol: function () {
            return this.socket ? this.socket.protocol : null;
        },

        connectAsync: function (uri, cancellationToken) {
            if (this.state !== "none") {
                throw new System.InvalidOperationException("Socket is not in initial state");
            }

            this.options.setToReadOnly();
            this.state = "connecting";

            var tcs = new System.Threading.Tasks.TaskCompletionSource(),
                self = this;

            try {
                this.socket = new WebSocket(uri.getAbsoluteUri(), this.options.requestedSubProtocols);
                this.socket.binaryType = "arraybuffer";
                this.socket.onopen = function () {
                    self.state = "open";
                    tcs.setResult(null);
                };

                this.socket.onmessage = function (e) {
                    var data = e.data,
                        message = {},
                        i;

                    message.bytes = [];

                    if (typeof (data) === "string") {
                        for (i = 0; i < data.length; ++i) {
                            message.bytes.push(data.charCodeAt(i));
                        }

                        message.messageType = "text";
                        self.messageBuffer.push(message);

                        return;
                    }

                    if (data instanceof ArrayBuffer) {
                        var dataView = new Uint8Array(data);

                        for (i = 0; i < dataView.length; i++) {
                            message.bytes.push(dataView[i]);
                        }

                        message.messageType = "binary";
                        self.messageBuffer.push(message);

                        return;
                    }

                    throw new System.ArgumentException("Invalid message type.");
                };

                this.socket.onclose = function (e) {
                    self.state = "closed";
                    self.closeStatus = e.code;
                    self.closeStatusDescription = e.reason;
                }
            } catch (e) {
                tcs.setException(System.Exception.create(e));
            }

            return tcs.task;
        },

        sendAsync: function (buffer, messageType, endOfMessage, cancellationToken) {
            this.throwIfNotConnected();

            var tcs = new System.Threading.Tasks.TaskCompletionSource();

            try {
                if (messageType === "close") {
                    this.socket.close();
                } else {
                    var array = buffer.getArray(),
                        count = buffer.getCount(),
                        offset = buffer.getOffset();
 
                    var data = new Uint8Array(count);

                    for (var i = 0; i < count; i++) {
                        data[i] = array[i + offset];
                    }

                    if (messageType === "text") {
                        data = String.fromCharCode.apply(null, data);
                    }
 
                    this.socket.send(data);
                }

                tcs.setResult(null);
            } catch (e) {
                tcs.setException(System.Exception.create(e));
            }

            return tcs.task;
        },

        receiveAsync: function (buffer, cancellationToken) {
            this.throwIfNotConnected();

            var task,
                tcs = new System.Threading.Tasks.TaskCompletionSource(),
                self = this,
                asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        if (cancellationToken.getIsCancellationRequested()) {
                            tcs.setException(new System.Threading.Tasks.TaskCanceledException("Receive has been cancelled.", tcs.task));
                            return;
                        }

                        if (self.messageBuffer.length === 0) {
                            task = System.Threading.Tasks.Task.delay(0);
                            task.continueWith(asyncBody);
                            return;
                        }

                        var message = self.messageBuffer[0],
                            array = buffer.getArray(),
                            resultBytes,
                            endOfMessage;

                        if (message.bytes.length <= array.length) {
                            self.messageBuffer.shift();
                            resultBytes = message.bytes;
                            endOfMessage = true;
                        } else {
                            resultBytes = message.bytes.slice(0, array.length);
                            message.bytes = message.bytes.slice(array.length, message.bytes.length);
                            endOfMessage = false;
                        }

                        for (var i = 0; i < resultBytes.length; i++) {
                            array[i] = resultBytes[i];
                        }

                        tcs.setResult(new System.Net.WebSockets.WebSocketReceiveResult(
                            resultBytes.length, message.messageType, endOfMessage));
                    } catch (e) {
                        tcs.setException(System.Exception.create(e));
                    }
                }, arguments);

            asyncBody();

            return tcs.task;
        },

        closeAsync: function (closeStatus, statusDescription, cancellationToken) {
            this.throwIfNotConnected();

            if (this.state !== "open") {
                throw new System.InvalidOperationException("Socket is not in connected state");
            }

            var tcs = new System.Threading.Tasks.TaskCompletionSource(),
                self = this,
                task,
                asyncBody = function () {
                    if (self.state === "closed") {
                        tcs.setResult(null);
                        return;
                    }

                    if (cancellationToken.getIsCancellationRequested()) {
                        tcs.setException(new System.Threading.Tasks.TaskCanceledException("Closing has been cancelled.", tcs.task));
                        return;
                    }

                    task = System.Threading.Tasks.Task.delay(0);
                    task.continueWith(asyncBody);
                };
            try {
                this.state = "closesent";
                this.socket.close(closeStatus, statusDescription);
            } catch (e) {
                tcs.setException(System.Exception.create(e));
            }

            asyncBody();

            return tcs.task;
        },

        closeOutputAsync: function (closeStatus, statusDescription, cancellationToken) {
            this.throwIfNotConnected();

            if (this.state !== "open") {
                throw new System.InvalidOperationException("Socket is not in connected state");
            }

            var tcs = new System.Threading.Tasks.TaskCompletionSource();

            try {
                this.state = "closesent";
                this.socket.close(closeStatus, statusDescription);
                tcs.setResult(null);
            } catch (e) {
                tcs.setException(System.Exception.create(e));
            }

            return tcs.task;
        },

        abort: function () {
            this.dispose();
        },

        dispose: function () {
            if (this.disposed) {
                return;
            }

            this.disposed = true;
            this.messageBuffer = [];

            if (state === "open") {
                this.state = "closesent";
                this.socket.close();
            }
        },

        throwIfNotConnected: function () {
            if (this.disposed) {
                throw new System.InvalidOperationException("Socket is disposed.");
            }

            if (this.socket.readyState !== 1) {
                throw new System.InvalidOperationException("Socket is not connected.");
            }
        }
    });

    Bridge.define("System.Net.WebSockets.ClientWebSocketOptions", {
        ctor: function () {
            this.$initialize();
            this.isReadOnly = false;
            this.requestedSubProtocols = [];
        },

        setToReadOnly: function () {
            if (this.isReadOnly) {
                throw new System.InvalidOperationException("Options are already readonly.");
            }

            this.isReadOnly = true;
        },

        addSubProtocol: function (subProtocol) {
            if (this.isReadOnly) {
                throw new System.InvalidOperationException("Socket already started.");
            }

            if (this.requestedSubProtocols.indexOf(subProtocol) > -1) {
                throw new System.ArgumentException("Socket cannot have duplicate sub-protocols.", "subProtocol");
            }

            this.requestedSubProtocols.push(subProtocol);
        }
    });

    Bridge.define("System.Net.WebSockets.WebSocketReceiveResult", {
        ctor: function (count, messageType, endOfMessage, closeStatus, closeStatusDescription) {
            this.$initialize();
            this.count = count;
            this.messageType = messageType;
            this.endOfMessage = endOfMessage;
            this.closeStatus = closeStatus;
            this.closeStatusDescription = closeStatusDescription;
        },

        getCount: function () {
            return this.count;
        },

        getMessageType: function () {
            return this.messageType;
        },

        getEndOfMessage: function () {
            return this.endOfMessage;
        },

        getCloseStatus: function () {
            return this.closeStatus;
        },

        getCloseStatusDescription: function () {
            return this.closeStatusDescription;
        }
    });
