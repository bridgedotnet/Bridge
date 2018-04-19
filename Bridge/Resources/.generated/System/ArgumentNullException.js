    Bridge.define("System.ArgumentNullException", {
        inherits: [System.ArgumentException],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.ArgumentException.$ctor1.call(this, "Value cannot be null.");
                this.HResult = -2147467261;
            },
            $ctor1: function (paramName) {
                this.$initialize();
                System.ArgumentException.$ctor3.call(this, "Value cannot be null.", paramName);
                this.HResult = -2147467261;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.ArgumentException.$ctor2.call(this, message, innerException);
                this.HResult = -2147467261;
            },
            $ctor3: function (paramName, message) {
                this.$initialize();
                System.ArgumentException.$ctor3.call(this, message, paramName);
                this.HResult = -2147467261;
            }
        }
    });
