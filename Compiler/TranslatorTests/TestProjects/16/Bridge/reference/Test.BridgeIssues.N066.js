Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N066.Rectangle66", {
        $kind: "struct",
        $metadata : function () { return {"att":1048841,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[System.Int32],"pi":[{"n":"x1","pt":System.Int32,"ps":0}],"sn":"$ctor1"},{"a":2,"n":".ctor","t":1,"p":[System.Int32,System.Int32],"pi":[{"n":"x1","pt":System.Int32,"ps":0},{"n":"x2","pt":System.Int32,"ps":1}],"sn":"$ctor2"}]}; },
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
