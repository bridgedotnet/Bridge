Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N384.N384", {
        $metadata : function () { return {"nested":[Test.BridgeIssues.N384.N384.App],"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });

    Bridge.define("Test.BridgeIssues.N384.N384.App", {
        $kind: "nested class",
        $metadata : function () { return {"td":Test.BridgeIssues.N384.N384,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main1","is":true,"t":8,"sn":"Main1","rt":System.Void}]}; },
        statics: {
            methods: {
                Main1: function () {
                    var person = new Test.BridgeIssues.N384.Person();

                    var msg1 = person.DoSomething();
                    var msg2 = person.DoSomething();
                }
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N384.Person", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });
});
