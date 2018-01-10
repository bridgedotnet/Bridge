Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N477.App1", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"MethodA","t":8,"pi":[{"n":"optionalNumber","dv":41,"o":true,"pt":System.Int32,"ps":0}],"sn":"MethodA","rt":System.Void,"p":[System.Int32]},{"a":2,"n":"MethodA","t":8,"pi":[{"n":"s","pt":System.String,"ps":0},{"n":"optionalNumber","dv":42,"o":true,"pt":System.Int32,"ps":1}],"sn":"MethodA$1","rt":System.Void,"p":[System.String,System.Int32]},{"a":2,"n":"MethodB1","t":8,"sn":"MethodB1","rt":System.Void},{"a":2,"n":"MethodB2","t":8,"sn":"MethodB2","rt":System.Void},{"a":2,"n":"MethodB3","t":8,"sn":"MethodB3","rt":System.Void},{"a":2,"n":"MethodB4","t":8,"sn":"MethodB4","rt":System.Void},{"v":true,"a":2,"n":"MethodC","t":8,"pi":[{"n":"optionalNumber","dv":51,"o":true,"pt":System.Int32,"ps":0}],"sn":"MethodC","rt":System.Void,"p":[System.Int32]},{"v":true,"a":2,"n":"MethodC","t":8,"pi":[{"n":"s","pt":System.String,"ps":0},{"n":"optionalNumber","dv":52,"o":true,"pt":System.Int32,"ps":1}],"sn":"MethodC$1","rt":System.Void,"p":[System.String,System.Int32]},{"a":2,"n":"MethodC1","t":8,"sn":"MethodC1","rt":System.Void},{"a":2,"n":"MethodC2","t":8,"sn":"MethodC2","rt":System.Void},{"a":2,"n":"MethodC3","t":8,"sn":"MethodC3","rt":System.Void},{"a":2,"n":"MethodC4","t":8,"sn":"MethodC4","rt":System.Void}]}; },
        methods: {
            MethodA: function (optionalNumber) {
                if (optionalNumber === void 0) { optionalNumber = 41; }
                var i = optionalNumber;
            },
            MethodA$1: function (s, optionalNumber) {
                if (optionalNumber === void 0) { optionalNumber = 42; }
                var i = optionalNumber;
            },
            MethodC: function (optionalNumber) {
                if (optionalNumber === void 0) { optionalNumber = 51; }
                var i = optionalNumber;
            },
            MethodC$1: function (s, optionalNumber) {
                if (optionalNumber === void 0) { optionalNumber = 52; }
                var i = optionalNumber;
            },
            MethodB1: function () {
                this.MethodA();
            },
            MethodB2: function () {
                this.MethodA$1("Q");
            },
            MethodB3: function () {
                this.MethodA(3);
            },
            MethodB4: function () {
                this.MethodA$1("W", 4);
            },
            MethodC1: function () {
                this.MethodC();
            },
            MethodC2: function () {
                this.MethodC$1("E");
            },
            MethodC3: function () {
                this.MethodC(30);
            },
            MethodC4: function () {
                this.MethodC$1("R", 40);
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N477.App2", {
        inherits: [Test.BridgeIssues.N477.App1],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"MethodA","t":8,"pi":[{"n":"optionalNumber","dv":401,"o":true,"pt":System.Int32,"ps":0}],"sn":"MethodA$2","rt":System.Void,"p":[System.Int32]},{"ov":true,"a":2,"n":"MethodC","t":8,"pi":[{"n":"s","pt":System.String,"ps":0},{"n":"optionalNumber","dv":501,"o":true,"pt":System.Int32,"ps":1}],"sn":"MethodC$1","rt":System.Void,"p":[System.String,System.Int32]},{"a":2,"n":"MethodD1","t":8,"sn":"MethodD1","rt":System.Void},{"a":2,"n":"MethodD2","t":8,"sn":"MethodD2","rt":System.Void},{"a":2,"n":"MethodD3","t":8,"sn":"MethodD3","rt":System.Void},{"a":2,"n":"MethodD4","t":8,"sn":"MethodD4","rt":System.Void}]}; },
        methods: {
            MethodA$2: function (optionalNumber) {
                if (optionalNumber === void 0) { optionalNumber = 401; }
                var i = optionalNumber;
            },
            MethodC$1: function (s, optionalNumber) {
                if (optionalNumber === void 0) { optionalNumber = 501; }
                var i = optionalNumber;
            },
            MethodD1: function () {
                this.MethodA$2();
            },
            MethodD2: function () {
                this.MethodA$1("T");
            },
            MethodD3: function () {
                this.MethodA$2(3000);
            },
            MethodD4: function () {
                this.MethodA$1("Y", 4000);
            }
        }
    });
});
