    Bridge.define("System.IO.__Error", {
        statics: {
            methods: {
                EndOfFile: function () {
                    throw new System.IO.EndOfStreamException.$ctor1("IO.EOF_ReadBeyondEOF");
                },
                FileNotOpen: function () {
                    throw new System.Exception("ObjectDisposed_FileClosed");
                },
                StreamIsClosed: function () {
                    throw new System.Exception("ObjectDisposed_StreamClosed");
                },
                MemoryStreamNotExpandable: function () {
                    throw new System.NotSupportedException.$ctor1("NotSupported_MemStreamNotExpandable");
                },
                ReaderClosed: function () {
                    throw new System.Exception("ObjectDisposed_ReaderClosed");
                },
                ReadNotSupported: function () {
                    throw new System.NotSupportedException.$ctor1("NotSupported_UnreadableStream");
                },
                SeekNotSupported: function () {
                    throw new System.NotSupportedException.$ctor1("NotSupported_UnseekableStream");
                },
                WrongAsyncResult: function () {
                    throw new System.ArgumentException.$ctor1("Arg_WrongAsyncResult");
                },
                EndReadCalledTwice: function () {
                    throw new System.ArgumentException.$ctor1("InvalidOperation_EndReadCalledMultiple");
                },
                EndWriteCalledTwice: function () {
                    throw new System.ArgumentException.$ctor1("InvalidOperation_EndWriteCalledMultiple");
                },
                WriteNotSupported: function () {
                    throw new System.NotSupportedException.$ctor1("NotSupported_UnwritableStream");
                },
                WriterClosed: function () {
                    throw new System.Exception("ObjectDisposed_WriterClosed");
                }
            }
        }
    });
