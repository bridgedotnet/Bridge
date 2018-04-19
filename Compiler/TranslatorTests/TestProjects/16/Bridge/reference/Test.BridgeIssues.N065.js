Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N065.Class65_1", {
        $metadata : function () { return {"nested":[Test.BridgeIssues.N065.Class65_1.Nested],"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });

    Bridge.define("Test.BridgeIssues.N065.Class65_1.Nested", {
        $kind: "nested class",
        $metadata : function () { return {"td":Test.BridgeIssues.N065.Class65_1,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });

    Bridge.define("Test.BridgeIssues.N065.Class65_2", {
        inherits: [Test.BridgeIssues.N065.Class65_1.Nested],
        $metadata : function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });
});
