    Bridge.define("System.SystemException", {
        inherits: [System.Exception],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Exception.ctor.call(this, "System error.");
                this.HResult = -2146233087;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.Exception.ctor.call(this, message);
                this.HResult = -2146233087;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.Exception.ctor.call(this, message, innerException);
                this.HResult = -2146233087;
            }
        }
    });
