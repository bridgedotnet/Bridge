Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N883A.Control", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"test","is":true,"t":4,"rt":System.Int32,"sn":"test","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; },
        statics: {
            fields: {
                test: 0
            },
            ctors: {
                init: function () {
                    this.test = Test.BridgeIssues.N883A.Globals.myVar;
                }
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N883A.Globals", {
        $metadata : function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"myTextBox","is":true,"t":4,"rt":Test.BridgeIssues.N883A.TextBox,"sn":"myTextBox"},{"a":2,"n":"myVar","is":true,"t":4,"rt":System.Int32,"sn":"myVar","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; },
        statics: {
            fields: {
                myVar: 0,
                myTextBox: null
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N883A.Button", {
        inherits: [Test.BridgeIssues.N883A.Control],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });

    Bridge.define("Test.BridgeIssues.N883A.TextBox", {
        inherits: [Test.BridgeIssues.N883A.Control],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });
});
