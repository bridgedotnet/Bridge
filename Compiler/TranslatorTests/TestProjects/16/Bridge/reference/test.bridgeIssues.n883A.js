Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N883A.Control", {
        statics: {
            test: 0,
            config: {
                init: function () {
                    this.test = Test.BridgeIssues.N883A.Globals.myVar;
                }
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N883A.Globals", {
        statics: {
            myVar: 0,
            myTextBox: null
        }
    });

    Bridge.define("Test.BridgeIssues.N883A.Button", {
        inherits: [Test.BridgeIssues.N883A.Control]
    });

    Bridge.define("Test.BridgeIssues.N883A.TextBox", {
        inherits: [Test.BridgeIssues.N883A.Control]
    });
    }
);
