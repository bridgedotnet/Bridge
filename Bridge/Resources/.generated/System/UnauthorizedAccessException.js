    Bridge.define("System.UnauthorizedAccessException", {
        inherits: [System.SystemException],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.SystemException.$ctor1.call(this, "Attempted to perform an unauthorized operation.");
                this.HResult = -2147024891;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = -2147024891;
            },
            $ctor2: function (message, inner) {
                this.$initialize();
                System.SystemException.$ctor2.call(this, message, inner);
                this.HResult = -2147024891;
            }
        }
    });
