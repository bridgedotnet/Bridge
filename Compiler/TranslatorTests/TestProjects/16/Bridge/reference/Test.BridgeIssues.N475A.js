Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N475A.Bridge475Event", {
        props: {
            Data: 0
        },
        methods: {
            PreventDefault: function () {
                this.Data = 77;
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N475A.Bridge475Extension1", {
        statics: {
            methods: {
                KeyDown: function (T, entity, handler) {
                    return null;
                }
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N475A.Bridge475Extension2", {
        statics: {
            methods: {
                KeyDown: function (T, entity, handler) {
                    return null;
                }
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N475A.Test", {
        statics: {
            methods: {
                N475: function () {
                    var b = new Test.BridgeIssues.N475A.Bridge475();
                    Test.BridgeIssues.N475A.Bridge475Extension1.KeyDown(Bridge.global.Test.BridgeIssues.N475A.Bridge475Event, b, $asm.$.Test.BridgeIssues.N475A.Test.f1);

                    b.KeyDown(4);

                    Test.BridgeIssues.N475A.Bridge475Extension2.KeyDown(System.Decimal, b, "5");
                }
            }
        }
    });

    Bridge.ns("Test.BridgeIssues.N475A.Test", $asm.$);

    Bridge.apply($asm.$.Test.BridgeIssues.N475A.Test, {
        f1: function (ev) {
            ev.PreventDefault();
        }
    });
});
