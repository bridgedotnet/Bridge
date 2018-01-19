Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1424.A", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Data","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_Data","t":8,"rt":System.Int32,"fg":"Data","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Data","t":8,"p":[System.Int32],"rt":System.Void,"fs":"Data"},"fn":"Data"}]}; }
    });

    Bridge.define("Test.BridgeIssues.N1424.Alpha", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Data","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_Data","t":8,"rt":System.Int32,"fg":"Data","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Data","t":8,"p":[System.Int32],"rt":System.Void,"fs":"Data"},"fn":"Data"}]}; },
        fields: {
            Data: 0
        }
    });

    Bridge.define("Test.BridgeIssues.N1424.B", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Data","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_Data","t":8,"tpc":0,"def":function () { return this.Q; },"rt":System.Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Data","t":8,"pi":[{"n":"value","pt":System.Int32,"ps":0}],"tpc":0,"def":function (value) { return this.W; },"rt":System.Void,"p":[System.Int32]}}]}; }
    });
});
