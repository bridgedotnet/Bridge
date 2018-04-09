    Bridge.define("System.IO.Stream.NullStream", {
        inherits: [System.IO.Stream],
        $kind: "nested class",
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
            Dispose$1: function (disposing) { },
            Flush: function () { },
            BeginRead: function (buffer, offset, count, callback, state) {
                if (!this.CanRead) {
                    System.IO.__Error.ReadNotSupported();
                }

                return this.BlockingBeginRead(buffer, offset, count, callback, state);
            },
            EndRead: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException.$ctor1("asyncResult");
                }

                return System.IO.Stream.BlockingEndRead(asyncResult);
            },
            BeginWrite: function (buffer, offset, count, callback, state) {
                if (!this.CanWrite) {
                    System.IO.__Error.WriteNotSupported();
                }

                return this.BlockingBeginWrite(buffer, offset, count, callback, state);
            },
            EndWrite: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException.$ctor1("asyncResult");
                }

                System.IO.Stream.BlockingEndWrite(asyncResult);
            },
            Read: function (buffer, offset, count) {
                return 0;
            },
            ReadByte: function () {
                return -1;
            },
            Write: function (buffer, offset, count) { },
            WriteByte: function (value) { },
            Seek: function (offset, origin) {
                return System.Int64(0);
            },
            SetLength: function (length) { }
        }
    });
