    Bridge.define("System.NotSupportedException", {
        inherits: [System.SystemException],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.SystemException.$ctor1.call(this, "Specified method is not supported.");
                this.HResult = -2146233067;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = -2146233067;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.SystemException.$ctor2.call(this, message, innerException);
                this.HResult = -2146233067;
            }
        }
    });
