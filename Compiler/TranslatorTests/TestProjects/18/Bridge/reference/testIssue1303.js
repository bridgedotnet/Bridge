    Bridge.define("TestIssue1303.App", {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.NotMain);
                    Bridge.ready(this.Main);
                }
            },
            NotMain: function NotMain() {
                //Should be in config.init
            },
            Main: function Main() {
                //Should be in config.init
            }
        },
        $entryPoint: true
    });

    Bridge.define("TestIssue1303.App1", {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.NotMain);
                }
            },
            NotMain: function NotMain() {
                //Should be in config.init
            }
        },
        $entryPoint: true,
        $main: function $main() {
            //Should be in config.init
        }
    });

    Bridge.define("TestIssue1303.App2", {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.Main);
                }
            },
            Main: function Main() {
                //Should be in config.init
            }
        },
        $entryPoint: true
    });
