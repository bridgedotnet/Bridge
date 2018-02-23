    Bridge.define("System.IO.Stream", {
        inherits: [System.IDisposable],
        statics: {
            fields: {
                Null: null,
                _DefaultCopyBufferSize: 0
            },
            ctors: {
                init: function () {
                    this.Null = new System.IO.Stream.NullStream();
                    this._DefaultCopyBufferSize = 81920;
                }
            },
            methods: {
                Synchronized: function (stream) {
                    if (stream == null) {
                        throw new System.ArgumentNullException("stream");
                    }

                    return stream;
                },
                BlockingEndRead: function (asyncResult) {

                    return System.IO.Stream.SynchronousAsyncResult.EndRead(asyncResult);
                },
                BlockingEndWrite: function (asyncResult) {
                    System.IO.Stream.SynchronousAsyncResult.EndWrite(asyncResult);
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
        alias: ["Dispose", "System$IDisposable$dispose"],
        methods: {
            CopyTo: function (destination) {
                if (destination == null) {
                    throw new System.ArgumentNullException("destination");
                }
                if (!this.CanRead && !this.CanWrite) {
                    throw new System.Exception();
                }
                if (!destination.CanRead && !destination.CanWrite) {
                    throw new System.Exception("destination");
                }
                if (!this.CanRead) {
                    throw new System.NotSupportedException();
                }
                if (!destination.CanWrite) {
                    throw new System.NotSupportedException();
                }

                this.InternalCopyTo(destination, System.IO.Stream._DefaultCopyBufferSize);
            },
            CopyTo$1: function (destination, bufferSize) {
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
                    throw new System.Exception("destination");
                }
                if (!this.CanRead) {
                    throw new System.NotSupportedException();
                }
                if (!destination.CanWrite) {
                    throw new System.NotSupportedException();
                }

                this.InternalCopyTo(destination, bufferSize);
            },
            InternalCopyTo: function (destination, bufferSize) {

                var buffer = System.Array.init(bufferSize, 0, System.Byte);
                var read;
                while (((read = this.Read(buffer, 0, buffer.length))) !== 0) {
                    destination.Write(buffer, 0, read);
                }
            },
            Close: function () {
                /* These are correct, but we'd have to fix PipeStream & NetworkStream very carefully.
                Contract.Ensures(CanRead == false);
                Contract.Ensures(CanWrite == false);
                Contract.Ensures(CanSeek == false);
                */

                this.Dispose$1(true);
            },
            Dispose: function () {
                /* These are correct, but we'd have to fix PipeStream & NetworkStream very carefully.
                Contract.Ensures(CanRead == false);
                Contract.Ensures(CanWrite == false);
                Contract.Ensures(CanSeek == false);
                */

                this.Close();
            },
            Dispose$1: function (disposing) {
                // Note: Never change this to call other virtual methods on Stream
                // like Write, since the state on subclasses has already been
                // torn down.  This is the last code to run on cleanup for a stream.
            },
            BeginRead: function (buffer, offset, count, callback, state) {
                return this.BeginReadInternal(buffer, offset, count, callback, state, false);
            },
            BeginReadInternal: function (buffer, offset, count, callback, state, serializeAsynchronously) {
                if (!this.CanRead) {
                    System.IO.__Error.ReadNotSupported();
                }

                return this.BlockingBeginRead(buffer, offset, count, callback, state);
            },
            EndRead: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                return System.IO.Stream.BlockingEndRead(asyncResult);
            },
            BeginWrite: function (buffer, offset, count, callback, state) {
                return this.BeginWriteInternal(buffer, offset, count, callback, state, false);
            },
            BeginWriteInternal: function (buffer, offset, count, callback, state, serializeAsynchronously) {
                if (!this.CanWrite) {
                    System.IO.__Error.WriteNotSupported();
                }
                return this.BlockingBeginWrite(buffer, offset, count, callback, state);
            },
            EndWrite: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException("asyncResult");
                }

                System.IO.Stream.BlockingEndWrite(asyncResult);
            },
            ReadByte: function () {

                var oneByteArray = System.Array.init(1, 0, System.Byte);
                var r = this.Read(oneByteArray, 0, 1);
                if (r === 0) {
                    return -1;
                }
                return oneByteArray[System.Array.index(0, oneByteArray)];
            },
            WriteByte: function (value) {
                var oneByteArray = System.Array.init(1, 0, System.Byte);
                oneByteArray[System.Array.index(0, oneByteArray)] = value;
                this.Write(oneByteArray, 0, 1);
            },
            BlockingBeginRead: function (buffer, offset, count, callback, state) {

                // To avoid a race with a stream's position pointer & generating ----
                // conditions with internal buffer indexes in our own streams that
                // don't natively support async IO operations when there are multiple
                // async requests outstanding, we will block the application's main
                // thread and do the IO synchronously.
                // This can't perform well - use a different approach.
                var asyncResult;
                try {
                    var numRead = this.Read(buffer, offset, count);
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
            BlockingBeginWrite: function (buffer, offset, count, callback, state) {

                // To avoid a race with a stream's position pointer & generating ----
                // conditions with internal buffer indexes in our own streams that
                // don't natively support async IO operations when there are multiple
                // async requests outstanding, we will block the application's main
                // thread and do the IO synchronously.
                // This can't perform well - use a different approach.
                var asyncResult;
                try {
                    this.Write(buffer, offset, count);
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