    Bridge.define("System.ArithmeticException", {
        inherits: [System.SystemException],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.SystemException.$ctor1.call(this, "Overflow or underflow in the arithmetic operation.");
                this.HResult = -2147024362;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = -2147024362;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.SystemException.$ctor2.call(this, message, innerException);
                this.HResult = -2147024362;
            }
        }
    });
