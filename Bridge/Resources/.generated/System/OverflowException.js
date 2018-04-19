    Bridge.define("System.OverflowException", {
        inherits: [System.ArithmeticException],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.ArithmeticException.$ctor1.call(this, "Arithmetic operation resulted in an overflow.");
                this.HResult = -2146233066;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.ArithmeticException.$ctor1.call(this, message);
                this.HResult = -2146233066;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.ArithmeticException.$ctor2.call(this, message, innerException);
                this.HResult = -2146233066;
            }
        }
    });
