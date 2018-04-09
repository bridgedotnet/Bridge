    Bridge.define("System.IO.TextReader.NullTextReader", {
        inherits: [System.IO.TextReader],
        $kind: "nested class",
        ctors: {
            ctor: function () {
                this.$initialize();
                System.IO.TextReader.ctor.call(this);
            }
        },
        methods: {
            Read$1: function (buffer, index, count) {
                return 0;
            },
            ReadLine: function () {
                return null;
            }
        }
    });
