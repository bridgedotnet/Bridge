    Bridge.define("TestIssue1303.App", {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.notMain);
                    Bridge.ready(this.main);
                }
            },
            notMain: function () {
                //Should be in config.init
            },
            main: function () {
                //Should be in config.init
            }
        },
        $entryPoint: true
    });

    Bridge.define("TestIssue1303.App1", {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.notMain);
                }
            },
            notMain: function () {
                //Should be in config.init
            }
        },
        $entryPoint: true,
        $main: function () {
            //Should be in config.init
        }
    });

    Bridge.define("TestIssue1303.App2", {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.main);
                }
            },
            main: function () {
                //Should be in config.init
            }
        },
        $entryPoint: true
    });
