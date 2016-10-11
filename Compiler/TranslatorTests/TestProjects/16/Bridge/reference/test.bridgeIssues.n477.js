Bridge.assembly({ name: "TestProject", version: "0.0.0.0", compiler: "15.2.0" }, function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N477.App1", {
        methodA: function (optionalNumber) {
            if (optionalNumber === void 0) { optionalNumber = 41; }
            var i = optionalNumber;
        },
        methodA$1: function (s, optionalNumber) {
            if (optionalNumber === void 0) { optionalNumber = 42; }
            var i = optionalNumber;
        },
        methodC: function (optionalNumber) {
            if (optionalNumber === void 0) { optionalNumber = 51; }
            var i = optionalNumber;
        },
        methodC$1: function (s, optionalNumber) {
            if (optionalNumber === void 0) { optionalNumber = 52; }
            var i = optionalNumber;
        },
        methodB1: function () {
            this.methodA();
        },
        methodB2: function () {
            this.methodA$1("Q");
        },
        methodB3: function () {
            this.methodA(3);
        },
        methodB4: function () {
            this.methodA$1("W", 4);
        },
        methodC1: function () {
            this.methodC();
        },
        methodC2: function () {
            this.methodC$1("E");
        },
        methodC3: function () {
            this.methodC(30);
        },
        methodC4: function () {
            this.methodC$1("R", 40);
        }
    });

    Bridge.define("Test.BridgeIssues.N477.App2", {
        inherits: [Test.BridgeIssues.N477.App1],
        methodA$2: function (optionalNumber) {
            if (optionalNumber === void 0) { optionalNumber = 401; }
            var i = optionalNumber;
        },
        methodC$1: function (s, optionalNumber) {
            if (optionalNumber === void 0) { optionalNumber = 501; }
            var i = optionalNumber;
        },
        methodD1: function () {
            this.methodA$2();
        },
        methodD2: function () {
            this.methodA$1("T");
        },
        methodD3: function () {
            this.methodA$2(3000);
        },
        methodD4: function () {
            this.methodA$1("Y", 4000);
        }
    });
});
