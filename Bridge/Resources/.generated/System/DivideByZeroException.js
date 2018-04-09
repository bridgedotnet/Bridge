    Bridge.define("System.DivideByZeroException", {
        inherits: [System.ArithmeticException],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.ArithmeticException.$ctor1.call(this, "Attempted to divide by zero.");
                this.HResult = -2147352558;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.ArithmeticException.$ctor1.call(this, message);
                this.HResult = -2147352558;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.ArithmeticException.$ctor2.call(this, message, innerException);
                this.HResult = -2147352558;
            }
        }
    });
