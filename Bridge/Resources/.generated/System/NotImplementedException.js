    Bridge.define("System.NotImplementedException", {
        inherits: [System.SystemException],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.SystemException.$ctor1.call(this, "The method or operation is not implemented.");
                this.HResult = -2147467263;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = -2147467263;
            },
            $ctor2: function (message, inner) {
                this.$initialize();
                System.SystemException.$ctor2.call(this, message, inner);
                this.HResult = -2147467263;
            }
        }
    });
