Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N066.Rectangle66", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Test.BridgeIssues.N066.Rectangle66(); }
            }
        },
        ctors: {
            $ctor1: function (x1) {
                this.$initialize();
                (new Test.BridgeIssues.N066.Rectangle66.ctor()).$clone(this);
            },
            $ctor2: function (x1, x2) {
                this.$initialize();
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            $clone: function (to) { return this; }
        }
    });
});
