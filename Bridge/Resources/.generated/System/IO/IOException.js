    Bridge.define("System.IO.IOException", {
        inherits: [System.SystemException],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.SystemException.$ctor1.call(this, "I/O error occurred.");
                this.HResult = -2146232800;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = -2146232800;
            },
            $ctor3: function (message, hresult) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = hresult;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.SystemException.$ctor2.call(this, message, innerException);
                this.HResult = -2146232800;
            }
        }
    });
