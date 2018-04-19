    Bridge.define("System.Resources.MissingManifestResourceException", {
        inherits: [System.SystemException],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.SystemException.$ctor1.call(this, "Unable to find manifest resource.");
                this.HResult = -2146233038;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = -2146233038;
            },
            $ctor2: function (message, inner) {
                this.$initialize();
                System.SystemException.$ctor2.call(this, message, inner);
                this.HResult = -2146233038;
            }
        }
    });
