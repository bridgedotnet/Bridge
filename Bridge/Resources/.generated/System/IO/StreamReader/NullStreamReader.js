    Bridge.define("System.IO.StreamReader.NullStreamReader", {
        inherits: [System.IO.StreamReader],
        $kind: "nested class",
        props: {
            BaseStream: {
                get: function () {
                    return System.IO.Stream.Null;
                }
            },
            CurrentEncoding: {
                get: function () {
                    return System.Text.Encoding.Unicode;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.IO.StreamReader.ctor.call(this);
                this.Init(System.IO.Stream.Null);
            }
        },
        methods: {
            Dispose$1: function (disposing) { },
            Peek: function () {
                return -1;
            },
            Read: function () {
                return -1;
            },
            Read$1: function (buffer, index, count) {
                return 0;
            },
            ReadLine: function () {
                return null;
            },
            ReadToEnd: function () {
                return "";
            },
            ReadBuffer: function () {
                return 0;
            }
        }
    });
