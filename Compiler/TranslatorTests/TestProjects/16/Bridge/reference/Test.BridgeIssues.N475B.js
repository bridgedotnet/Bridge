Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N475B.Bridge475Event", {
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
