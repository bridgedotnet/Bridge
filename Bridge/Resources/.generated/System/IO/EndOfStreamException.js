    Bridge.define("System.IO.EndOfStreamException", {
        inherits: [System.IO.IOException],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.IO.IOException.$ctor1.call(this, "Arg_EndOfStreamException");
            },
            $ctor1: function (message) {
                this.$initialize();
                System.IO.IOException.$ctor1.call(this, message);
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.IO.IOException.$ctor2.call(this, message, innerException);
            }
        }
    });
