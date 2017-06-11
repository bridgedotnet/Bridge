    Bridge.define("IAsyncResult", {
        $kind: "interface"
    });

    Bridge.define("SeekOrigin", {
        $kind: "enum",
        statics: {
            fields: {
                Begin: 0,
                Current: 1,
                End: 2
            }
        }
    });

    Bridge.define("System.IO.IOException", {
        inherits: [System.Exception],
        fields: {
            _maybeFullPath: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Exception.ctor.call(this);
                //base.SetErrorCode(-2146232800);
            },
            $ctor1: function (message) {
                this.$initialize();
                System.Exception.ctor.call(this);
                //base.SetErrorCode(-2146232800);
            },
            $ctor3: function (message, hresult) {
                this.$initialize();
                System.Exception.ctor.call(this, message);
                //base.SetErrorCode(hresult);
            },
            $ctor4: function (message, hresult, maybeFullPath) {
                this.$initialize();
                System.Exception.ctor.call(this, message);
                //base.SetErrorCode(hresult);
                this._maybeFullPath = maybeFullPath;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.Exception.ctor.call(this, message, innerException);
                //base.SetErrorCode(-2146232800);
            }
        }
    });

    Bridge.define("System.IO.Stream", {
        inherits: [System.IDisposable],
        statics: {
            fields: {
                null: null,
                _DefaultCopyBufferSize: 0
            },
            ctors: {
                init: function () {
                    this.null = new System.IO.Stream.NullStream();
                    this._DefaultCopyBufferSize = 81920;
                }
            },
            methods: {
                synchronized: function (stream) {
                    if (stream == null) {
                        throw new System.ArgumentNullException("stream");
                    }
                    if (Bridge.is(stream, System.IO.Stream.SyncStream)) {
                        return stream;
                    }

                    return new System.IO.Stream.SyncStream(stream);
                },
                blockingEndRead: function (asyncResult) {

                    return System.IO.Stream.SynchronousAsyncResult.endRead(asyncResult);
                },
                blockingEndWrite: function (asyncResult) {
                    System.IO.Stream.SynchronousAsyncResult.endWrite(asyncResult);
                }
            }
        },
        props: {
            CanTimeout: {
                get: function () {
                    return false;
                }
            },
            ReadTimeout: {
                get: function () {
                    throw new System.InvalidOperationException();
                },
                set: function (value) {
                    throw new System.InvalidOperationException();
                }
            },
            WriteTimeout: {
                get: function () {
                    throw new System.InvalidOperationException();
                },
                set: function (value) {
                    throw new System.InvalidOperationException();
                }
            }
        },
        alias: [
            "dispose", "System$IDisposable$dispose"
        ],
        methods: {
            copyTo: function (destination) {
                if (destination == null) {
                    throw new System.ArgumentNullException("destination");
                }
                if (!this.CanRead && !this.CanWrite) {
                    throw new System.Exception();
                }
                if (!destination.CanRead && !destination.CanWrite) {
                    throw new System.Exception();
                }
                if (!this.CanRead) {
                    throw new System.NotSupportedException();
                }
                if (!destination.CanWrite) {
                    throw new System.NotSupportedException();
                }

                this.internalCopyTo(destination, System.IO.Stream._DefaultCopyBufferSize);
            },
            copyTo$1: function (destination, bufferSize) {
                if (destination == null) {
                    throw new System.ArgumentNullException("destination");
                }
                if (bufferSize <= 0) {
                    throw new System.ArgumentOutOfRangeException("bufferSize");
                }
                if (!this.CanRead && !this.CanWrite) {
                    throw new System.Exception();
                }
                if (!destination.CanRead && !destination.CanWrite) {
                    throw new System.Exception();
                }
                if (!this.CanRead) {
                    throw new System.NotSupportedException();
                }
                if (!destination.CanWrite) {
                    throw new System.NotSupportedException();
                }

                this.internalCopyTo(destination, bufferSize);
            },
            internalCopyTo: function (destination, bufferSize) {

                var buffer = System.Array.init(bufferSize, 0, System.Byte);
                var read;
                while (((read = this.read(buffer, 0, buffer.length))) !== 0) {
                    destination.write(buffer, 0, read);
                }
            },
            close: function () {
                /* These are correct, but we'd have to fix PipeStream & NetworkStream very carefully.
                Contract.Ensures(CanRead == false);
                Contract.Ensures(CanWrite == false);
                Contract.Ensures(CanSeek == false);
                */

                this.dispose$1(true);
                //GC.SuppressFinalize(this);
            },
            dispose: function () {
                /* These are correct, but we'd have to fix PipeStream & NetworkStream very carefully.
                Contract.Ensures(CanRead == false);
                Contract.Ensures(CanWrite == false);
                Contract.Ensures(CanSeek == false);
                */

                this.close();
            },
            dispose$1: function (disposing) {
                // Note: Never change this to call other virtual methods on Stream
                // like Write, since the state on subclasses has already been 
                // torn down.  This is the last code to run on cleanup for a stream.
            },
            beginRead: function (buffer, offset, count, callback, state) {
                return this.beginReadInternal(buffer, offset, count, callback, state, false);
            },
            beginReadInternal: function (buffer, offset, count, callback, state, serializeAsynchronously) {
                if (!this.CanRead) {
                    throw new System.NotSupportedException();
                }

                return this.blockingBeginRead(buffer, offset, count, callback, state);
            },
            endRead: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                return System.IO.Stream.blockingEndRead(asyncResult);
            },
            beginWrite: function (buffer, offset, count, callback, state) {
                return this.beginWriteInternal(buffer, offset, count, callback, state, false);
            },
            beginWriteInternal: function (buffer, offset, count, callback, state, serializeAsynchronously) {
                if (!this.CanWrite) {
                    throw new System.NotSupportedException();
                }
                return this.blockingBeginWrite(buffer, offset, count, callback, state);
            },
            endWrite: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                System.IO.Stream.blockingEndWrite(asyncResult);
            },
            readByte: function () {

                var oneByteArray = System.Array.init(1, 0, System.Byte);
                var r = this.read(oneByteArray, 0, 1);
                if (r === 0) {
                    return -1;
                }
                return oneByteArray[System.Array.index(0, oneByteArray)];
            },
            writeByte: function (value) {
                var oneByteArray = System.Array.init(1, 0, System.Byte);
                oneByteArray[System.Array.index(0, oneByteArray)] = value;
                this.write(oneByteArray, 0, 1);
            },
            objectInvariant: function () { },
            blockingBeginRead: function (buffer, offset, count, callback, state) {

                // To avoid a race with a stream's position pointer & generating ---- 
                // conditions with internal buffer indexes in our own streams that 
                // don't natively support async IO operations when there are multiple 
                // async requests outstanding, we will block the application's main
                // thread and do the IO synchronously.  
                // This can't perform well - use a different approach.
                var asyncResult;
                try {
                    var numRead = this.read(buffer, offset, count);
                    asyncResult = new System.IO.Stream.SynchronousAsyncResult.$ctor1(numRead, state);
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    var ex;
                    if (Bridge.is($e1, System.IO.IOException)) {
                        ex = $e1;
                        asyncResult = new System.IO.Stream.SynchronousAsyncResult.ctor(ex, state, false);
                    } else {
                        throw $e1;
                    }
                }

                if (!Bridge.staticEquals(callback, null)) {
                    callback(asyncResult);
                }

                return asyncResult;
            },
            blockingBeginWrite: function (buffer, offset, count, callback, state) {

                // To avoid a race with a stream's position pointer & generating ---- 
                // conditions with internal buffer indexes in our own streams that 
                // don't natively support async IO operations when there are multiple 
                // async requests outstanding, we will block the application's main
                // thread and do the IO synchronously.  
                // This can't perform well - use a different approach.
                var asyncResult;
                try {
                    this.write(buffer, offset, count);
                    asyncResult = new System.IO.Stream.SynchronousAsyncResult.$ctor2(state);
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    var ex;
                    if (Bridge.is($e1, System.IO.IOException)) {
                        ex = $e1;
                        asyncResult = new System.IO.Stream.SynchronousAsyncResult.ctor(ex, state, true);
                    } else {
                        throw $e1;
                    }
                }

                if (!Bridge.staticEquals(callback, null)) {
                    callback(asyncResult);
                }

                return asyncResult;
            }
        }
    });

    Bridge.define("System.IO.Stream.NullStream", {
        inherits: [System.IO.Stream],
        props: {
            CanRead: {
                get: function () {
                    return true;
                }
            },
            CanWrite: {
                get: function () {
                    return true;
                }
            },
            CanSeek: {
                get: function () {
                    return true;
                }
            },
            Length: {
                get: function () {
                    return System.Int64(0);
                }
            },
            Position: {
                get: function () {
                    return System.Int64(0);
                },
                set: function (value) { }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
            }
        },
        methods: {
            dispose$1: function (disposing) {
                // Do nothing - we don't want NullStream singleton (static) to be closable
            },
            flush: function () { },
            beginRead: function (buffer, offset, count, callback, state) {
                if (!this.CanRead) {
                    throw new System.NotSupportedException();
                }

                return this.blockingBeginRead(buffer, offset, count, callback, state);
            },
            endRead: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                return System.IO.Stream.blockingEndRead(asyncResult);
            },
            beginWrite: function (buffer, offset, count, callback, state) {
                if (!this.CanWrite) {
                    throw new System.NotSupportedException();
                }

                return this.blockingBeginWrite(buffer, offset, count, callback, state);
            },
            endWrite: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                System.IO.Stream.blockingEndWrite(asyncResult);
            },
            read: function (buffer, offset, count) {
                return 0;
            },
            readByte: function () {
                return -1;
            },
            write: function (buffer, offset, count) { },
            writeByte: function (value) { },
            seek: function (offset, origin) {
                return System.Int64(0);
            },
            setLength: function (length) { }
        }
    });

    Bridge.define("System.IO.Stream.SynchronousAsyncResult", {
        inherits: [IAsyncResult],
        statics: {
            methods: {
                endRead: function (asyncResult) {

                    var ar = Bridge.as(asyncResult, System.IO.Stream.SynchronousAsyncResult);
                    if (ar == null || ar._isWrite) {
                        throw new System.ArgumentException();
                    }

                    if (ar._endXxxCalled) {
                        throw new System.ArgumentException();
                    }

                    ar._endXxxCalled = true;

                    ar.throwIfError();
                    return ar._bytesRead;
                },
                endWrite: function (asyncResult) {

                    var ar = Bridge.as(asyncResult, System.IO.Stream.SynchronousAsyncResult);
                    if (ar == null || !ar._isWrite) {
                        throw new System.ArgumentException();
                    }

                    if (ar._endXxxCalled) {
                        throw new System.ArgumentException();
                    }

                    ar._endXxxCalled = true;

                    ar.throwIfError();
                }
            }
        },
        fields: {
            _stateObject: null,
            _isWrite: false,
            _endXxxCalled: false,
            _bytesRead: 0
        },
        props: {
            IsCompleted: {
                get: function () {
                    return true;
                }
            },
            AsyncState: {
                get: function () {
                    return this._stateObject;
                }
            },
            CompletedSynchronously: {
                get: function () {
                    return true;
                }
            }
        },
        alias: [
            "IsCompleted", "IAsyncResult$IsCompleted",
            "AsyncState", "IAsyncResult$AsyncState",
            "CompletedSynchronously", "IAsyncResult$CompletedSynchronously"
        ],
        ctors: {
            $ctor1: function (bytesRead, asyncStateObject) {
                this.$initialize();
                this._bytesRead = bytesRead;
                this._stateObject = asyncStateObject;
                //_isWrite = false;
            },
            $ctor2: function (asyncStateObject) {
                this.$initialize();
                this._stateObject = asyncStateObject;
                this._isWrite = true;
            },
            ctor: function (ex, asyncStateObject, isWrite) {
                this.$initialize();
                //_exceptionInfo = ExceptionDispatchInfo.Capture(ex);
                this._stateObject = asyncStateObject;
                this._isWrite = isWrite;
            }
        },
        methods: {
            throwIfError: function () {
                //if (_exceptionInfo != null)
                //    _exceptionInfo.Throw();
            }
        }
    });

    Bridge.define("System.IO.Stream.SyncStream", {
        inherits: [System.IO.Stream,System.IDisposable],
        statics: {
            methods: {
                overridesBeginMethod: function (stream, methodName) {
                    var $t;

                    // Get all of the methods on the underlying stream
                    var methods = Bridge.Reflection.getMembers(Bridge.getType(stream), 8, 20);

                    // If any of the methods have the desired name and are defined on the base Stream
                    // Type, then the method was not overridden.  If none of them were defined on the
                    // base Stream, then it must have been overridden.
                    $t = Bridge.getEnumerator(methods);
                    try {
                        while ($t.moveNext()) {
                            var method = $t.Current;
                            if (Bridge.referenceEquals(method.td, System.IO.Stream) && Bridge.referenceEquals(method.n, methodName)) {
                                return false;
                            }
                        }
                    }finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }return true;
                }
            }
        },
        fields: {
            _stream: null,
            _overridesBeginRead: null,
            _overridesBeginWrite: null
        },
        props: {
            CanRead: {
                get: function () {
                    return this._stream.CanRead;
                }
            },
            CanWrite: {
                get: function () {
                    return this._stream.CanWrite;
                }
            },
            CanSeek: {
                get: function () {
                    return this._stream.CanSeek;
                }
            },
            CanTimeout: {
                get: function () {
                    return this._stream.CanTimeout;
                }
            },
            Length: {
                get: function () {
                    this._stream;
                    {
                        return this._stream.Length;
                    }
                }
            },
            Position: {
                get: function () {
                    this._stream;
                    {
                        return this._stream.Position;
                    }
                },
                set: function (value) {
                    this._stream;
                    {
                        this._stream.Position = value;
                    }
                }
            },
            ReadTimeout: {
                get: function () {
                    return this._stream.ReadTimeout;
                },
                set: function (value) {
                    this._stream.ReadTimeout = value;
                }
            },
            WriteTimeout: {
                get: function () {
                    return this._stream.WriteTimeout;
                },
                set: function (value) {
                    this._stream.WriteTimeout = value;
                }
            }
        },
        ctors: {
            ctor: function (stream) {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
                if (stream == null) {
                    throw new System.ArgumentNullException("stream");
                }
                this._stream = stream;
            }
        },
        methods: {
            close: function () {
                this._stream;
                {
                    try {
                        this._stream.close();
                    }
                    finally {
                        System.IO.Stream.prototype.dispose$1.call(this, true);
                    }
                }
            },
            dispose$1: function (disposing) {
                this._stream;
                {
                    try {
                        // Explicitly pick up a potentially methodimpl'ed Dispose
                        if (disposing) {
                            Bridge.cast(this._stream, System.IDisposable).System$IDisposable$dispose();
                        }
                    }
                    finally {
                        System.IO.Stream.prototype.dispose$1.call(this, disposing);
                    }
                }
            },
            flush: function () {
                this._stream;
                this._stream.flush();
            },
            read: function (bytes, offset, count) {
                this._stream;
                return this._stream.read(bytes, offset, count);
            },
            readByte: function () {
                this._stream;
                return this._stream.readByte();
            },
            beginRead: function (buffer, offset, count, callback, state) {
                // Lazily-initialize whether the wrapped stream overrides BeginRead
                if (this._overridesBeginRead == null) {
                    this._overridesBeginRead = System.IO.Stream.SyncStream.overridesBeginMethod(this._stream, "BeginRead");
                }

                this._stream;
                {
                    // If the Stream does have its own BeginRead implementation, then we must use that override.
                    // If it doesn't, then we'll use the base implementation, but we'll make sure that the logic
                    // which ensures only one asynchronous operation does so with an asynchronous wait rather
                    // than a synchronous wait.  A synchronous wait will result in a deadlock condition, because
                    // the EndXx method for the outstanding async operation won't be able to acquire the lock on
                    // _stream due to this call blocked while holding the lock.
                    return System.Nullable.getValue(this._overridesBeginRead) ? this._stream.beginRead(buffer, offset, count, callback, state) : this._stream.beginReadInternal(buffer, offset, count, callback, state, true);
                }
            },
            endRead: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                this._stream;
                return this._stream.endRead(asyncResult);
            },
            seek: function (offset, origin) {
                this._stream;
                return this._stream.seek(offset, origin);
            },
            setLength: function (length) {
                this._stream;
                this._stream.setLength(length);
            },
            write: function (bytes, offset, count) {
                this._stream;
                this._stream.write(bytes, offset, count);
            },
            writeByte: function (b) {
                this._stream;
                this._stream.writeByte(b);
            },
            beginWrite: function (buffer, offset, count, callback, state) {
                // Lazily-initialize whether the wrapped stream overrides BeginWrite
                if (this._overridesBeginWrite == null) {
                    this._overridesBeginWrite = System.IO.Stream.SyncStream.overridesBeginMethod(this._stream, "BeginWrite");
                }

                this._stream;
                {
                    // If the Stream does have its own BeginWrite implementation, then we must use that override.
                    // If it doesn't, then we'll use the base implementation, but we'll make sure that the logic
                    // which ensures only one asynchronous operation does so with an asynchronous wait rather
                    // than a synchronous wait.  A synchronous wait will result in a deadlock condition, because
                    // the EndXx method for the outstanding async operation won't be able to acquire the lock on
                    // _stream due to this call blocked while holding the lock.
                    return System.Nullable.getValue(this._overridesBeginWrite) ? this._stream.beginWrite(buffer, offset, count, callback, state) : this._stream.beginWriteInternal(buffer, offset, count, callback, state, true);
                }
            },
            endWrite: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                this._stream;
                this._stream.endWrite(asyncResult);
            }
        }
    });

    var $box_ = {};

    Bridge.ns("System.Boolean", $box_);

    Bridge.apply($box_.System.Boolean, {
        toString: function (obj) { return System.Boolean.toString(obj); }
    });
