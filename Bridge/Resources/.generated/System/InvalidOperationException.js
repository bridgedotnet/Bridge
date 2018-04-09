    Bridge.define("System.InvalidOperationException", {
        inherits: [System.SystemException],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.SystemException.$ctor1.call(this, "Operation is not valid due to the current state of the object.");
                this.HResult = -2146233079;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = -2146233079;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.SystemException.$ctor2.call(this, message, innerException);
                this.HResult = -2146233079;
            }
        }
    });
