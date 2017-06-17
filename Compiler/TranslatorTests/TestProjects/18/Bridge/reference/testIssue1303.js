    Bridge.define("TestIssue1303.App", {
        statics: {
            ctors: {
                init: function () {
                    Bridge.ready(this.NotMain);
                    Bridge.ready(this.Main);
                }
            },
            methods: {
                NotMain: function NotMain () {
                    //Should be in config.init
                },
                Main: function Main () {
                    //Should be in config.init
                }
            }
        },
        $entryPoint: true
    });

    Bridge.define("TestIssue1303.App1", {
        main: function Main () {
            //Should be in config.init
        },
        statics: {
            ctors: {
                init: function () {
                    Bridge.ready(this.NotMain);
                }
            },
            methods: {
                NotMain: function NotMain () {
                    //Should be in config.init
                }
            }
        },
        $entryPoint: true
    });

    Bridge.define("TestIssue1303.App2", {
        statics: {
            ctors: {
                init: function () {
                    Bridge.ready(this.Main);
                }
            },
            methods: {
                Main: function Main () {
                    //Should be in config.init
                }
            }
        },
        $entryPoint: true
    });
