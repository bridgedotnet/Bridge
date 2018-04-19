    Bridge.define("System.IO.TextReader", {
        inherits: [System.IDisposable],
        statics: {
            fields: {
                Null: null
            },
            ctors: {
                init: function () {
                    this.Null = new System.IO.TextReader.NullTextReader();
                }
            },
            methods: {
                Synchronized: function (reader) {
                    if (reader == null) {
                        throw new System.ArgumentNullException.$ctor1("reader");
                    }

                    return reader;
                }
            }
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            Close: function () {
                this.Dispose$1(true);
            },
            Dispose: function () {
                this.Dispose$1(true);
            },
            Dispose$1: function (disposing) { },
            Peek: function () {

                return -1;
            },
            Read: function () {
                return -1;
            },
            Read$1: function (buffer, index, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException.$ctor1("buffer");
                }
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }
                if (((buffer.length - index) | 0) < count) {
                    throw new System.ArgumentException.ctor();
                }

                var n = 0;
                do {
                    var ch = this.Read();
                    if (ch === -1) {
                        break;
                    }
                    buffer[System.Array.index(((index + Bridge.identity(n, (n = (n + 1) | 0))) | 0), buffer)] = ch & 65535;
                } while (n < count);
                return n;
            },
            ReadToEndAsync: function () {
                return System.Threading.Tasks.Task.fromResult(this.ReadToEnd(), System.String);
            },
            ReadToEnd: function () {

                var chars = System.Array.init(4096, 0, System.Char);
                var len;
                var sb = new System.Text.StringBuilder("", 4096);
                while (((len = this.Read$1(chars, 0, chars.length))) !== 0) {
                    sb.append(System.String.fromCharArray(chars, 0, len));
                }
                return sb.toString();
            },
            ReadBlock: function (buffer, index, count) {

                var i, n = 0;
                do {
                    n = (n + ((i = this.Read$1(buffer, ((index + n) | 0), ((count - n) | 0))))) | 0;
                } while (i > 0 && n < count);
                return n;
            },
            ReadLine: function () {
                var sb = new System.Text.StringBuilder();
                while (true) {
                    var ch = this.Read();
                    if (ch === -1) {
                        break;
                    }
                    if (ch === 13 || ch === 10) {
                        if (ch === 13 && this.Peek() === 10) {
                            this.Read();
                        }
                        return sb.toString();
                    }
                    sb.append(String.fromCharCode((ch & 65535)));
                }
                if (sb.getLength() > 0) {
                    return sb.toString();
                }
                return null;
            }
        }
    });
