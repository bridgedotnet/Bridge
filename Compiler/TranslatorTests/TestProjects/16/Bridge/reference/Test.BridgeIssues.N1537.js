Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1537.A", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Property","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_Property","t":8,"rt":System.Int32,"fg":"Property","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Property"}]}; },
        props: {
            Property: {
                get: function () {
                    // Classes should be in the order A -> B -> C -> PlaceMeToTheEnd
                    return 1;
                }
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N1537.B", {
        inherits: [Test.BridgeIssues.N1537.A],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });

    Bridge.define("Test.BridgeIssues.N1537.C", {
        inherits: [Test.BridgeIssues.N1537.B],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });

    Bridge.define("Test.BridgeIssues.N1537.PlaceMeToTheEnd", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });
});
