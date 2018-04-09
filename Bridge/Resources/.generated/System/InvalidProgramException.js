    Bridge.define("System.InvalidProgramException", {
        inherits: [System.SystemException],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.SystemException.$ctor1.call(this, "Common Language Runtime detected an invalid program.");
                this.HResult = -2146233030;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = -2146233030;
            },
            $ctor2: function (message, inner) {
                this.$initialize();
                System.SystemException.$ctor2.call(this, message, inner);
                this.HResult = -2146233030;
            }
        }
    });
