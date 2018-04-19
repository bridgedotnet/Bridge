    Bridge.define("System.ApplicationException", {
        inherits: [System.Exception],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Exception.ctor.call(this, "Error in the application.");
                this.HResult = -2146232832;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.Exception.ctor.call(this, message);
                this.HResult = -2146232832;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.Exception.ctor.call(this, message, innerException);
                this.HResult = -2146232832;
            }
        }
    });
