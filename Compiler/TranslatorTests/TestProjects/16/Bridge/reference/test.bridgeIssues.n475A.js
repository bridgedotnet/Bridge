Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N475A.Bridge475Event", {
        config: {
            properties: {
                Data: 0
            }
        },
        preventDefault: function () {
            this.setData(77);
        }
    });

    Bridge.define("Test.BridgeIssues.N475A.Bridge475Extension1", {
        statics: {
            keyDown: function (T, entity, handler) {
                return null;
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N475A.Bridge475Extension2", {
        statics: {
            keyDown: function (T, entity, handler) {
                return null;
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N475A.Test", {
        statics: {
            N475: function () {
                var b = new Test.BridgeIssues.N475A.Bridge475();
                Test.BridgeIssues.N475A.Bridge475Extension1.keyDown(Test.BridgeIssues.N475A.Bridge475Event, b, $asm.$.Test.BridgeIssues.N475A.Test.f1);

                b.keyDown(4);

                Test.BridgeIssues.N475A.Bridge475Extension2.keyDown(System.Decimal, b, "5");
            }
        }
    });

    Bridge.ns("Test.BridgeIssues.N475A.Test", $asm.$);

    Bridge.apply($asm.$.Test.BridgeIssues.N475A.Test, {
        f1: function (ev) {
            ev.preventDefault();
        }
    });
});
