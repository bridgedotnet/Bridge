    Bridge.define("System.NotImplemented", {
        statics: {
            props: {
                ByDesign: {
                    get: function () {
                        return new System.NotImplementedException.ctor();
                    }
                }
            },
            methods: {
                ByDesignWithMessage: function (message) {
                    return new System.NotImplementedException.$ctor1(message);
                }
            }
        }
    });
