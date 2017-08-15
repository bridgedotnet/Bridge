Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N477.App1", {
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
