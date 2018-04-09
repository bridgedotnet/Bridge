    Bridge.define("System.InvalidCastException", {
        inherits: [System.SystemException],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.SystemException.$ctor1.call(this, "Specified cast is not valid.");
                this.HResult = -2147467262;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = -2147467262;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.SystemException.$ctor2.call(this, message, innerException);
                this.HResult = -2147467262;
            },
            $ctor3: function (message, errorCode) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = errorCode;
            }
        }
    });
