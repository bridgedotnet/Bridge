Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N475B.Bridge475Event", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"PreventDefault","t":8,"sn":"PreventDefault","rt":System.Void},{"a":2,"n":"Data","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_Data","t":8,"rt":System.Int32,"fg":"Data","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Data","t":8,"p":[System.Int32],"rt":System.Void,"fs":"Data"},"fn":"Data"}]}; },
        props: {
            Data: 0
        },
        methods: {
            PreventDefault: function () {
                this.Data = 77;
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N475B.Test", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"N475","is":true,"t":8,"sn":"N475","rt":System.Void}]}; },
        statics: {
            methods: {
                N475: function () {
                    var b = new Test.BridgeIssues.N475B.Bridge475();
                    b.KeyDown($asm.$.Test.BridgeIssues.N475B.Test.f1);

                    b.KeyDown(4);

                    b.KeyDown("5");
                }
            }
        }
    });

    Bridge.ns("Test.BridgeIssues.N475B.Test", $asm.$);

    Bridge.apply($asm.$.Test.BridgeIssues.N475B.Test, {
        f1: function (ev) {
            ev.PreventDefault();
        }
    });
});
