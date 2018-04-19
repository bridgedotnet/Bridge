    Bridge.define("System.NullReferenceException", {
        inherits: [System.SystemException],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.SystemException.$ctor1.call(this, "Object reference not set to an instance of an object.");
                this.HResult = -2147467261;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = -2147467261;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.SystemException.$ctor2.call(this, message, innerException);
                this.HResult = -2147467261;
            }
        }
    });
