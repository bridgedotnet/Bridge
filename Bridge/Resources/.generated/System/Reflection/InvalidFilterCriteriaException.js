    Bridge.define("System.Reflection.InvalidFilterCriteriaException", {
        inherits: [System.ApplicationException],
        ctors: {
            ctor: function () {
                System.Reflection.InvalidFilterCriteriaException.$ctor1.call(this, "Specified filter criteria was invalid.");
            },
            $ctor1: function (message) {
                System.Reflection.InvalidFilterCriteriaException.$ctor2.call(this, message, null);
            },
            $ctor2: function (message, inner) {
                this.$initialize();
                System.ApplicationException.$ctor2.call(this, message, inner);
                this.HResult = -2146232831;
            }
        }
    });
