    Bridge.define("System.Globalization.GlobalizationMode", {
        statics: {
            props: {
                Invariant: false
            },
            ctors: {
                init: function () {
                    this.Invariant = System.Globalization.GlobalizationMode.GetGlobalizationInvariantMode();
                }
            },
            methods: {
                GetInvariantSwitchValue: function () {
                    return true;


                },
                GetGlobalizationInvariantMode: function () {
                    return System.Globalization.GlobalizationMode.GetInvariantSwitchValue();
                }
            }
        }
    });
