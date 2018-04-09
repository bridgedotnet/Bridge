Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N2143.Level1$1", {
        $metadata : function () { return {"nested":[Test.BridgeIssues.N2143.Level1$1.Level2],"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DoSomething1","t":8,"pi":[{"n":"p","pt":System.Object,"ps":0}],"sn":"DoSomething1","rt":System.Void,"p":[System.Object]}]}; },
        methods: {
            DoSomething1: function (p) {
                // Should not contain generic parameter in function
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N2143.Level1$1.Level2", {
        $kind: "nested class",
        $metadata : function () { return {"td":Test.BridgeIssues.N2143.Level1$1,"nested":[Test.BridgeIssues.N2143.Level1$1.Level2.Level3],"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Value","t":16,"rt":System.Object,"g":{"a":2,"n":"get_Value","t":8,"rt":System.Object,"fg":"Value"},"fn":"Value"}]}; },
        props: {
            Value: {
                get: function () {
                    // Should not contain generic parameter in function
                    return Bridge.getDefaultValue(System.Object);
                }
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N2143.Level1$1.Level2.Level3", {
        $kind: "nested class",
        $metadata : function () { return {"td":Test.BridgeIssues.N2143.Level1$1.Level2,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Value","t":16,"rt":System.Object,"g":{"a":2,"n":"get_Value","t":8,"rt":System.Object,"fg":"Value"},"fn":"Value"}]}; },
        props: {
            Value: {
                get: function () {
                    // Should not contain generic parameter in function
                    return Bridge.getDefaultValue(System.Object);
                }
            }
        }
    });
});
