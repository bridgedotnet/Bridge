(function (globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N447.Math447', {
        statics: {
            getSum$1: function (a, b) {
                return a + b;
            },
            getSum$2: function (a, b) {
                return a + b;
            },
            getSum: function (a, b) {
                return a.add(b);
            }
        }
    });
    
    Bridge.define('Test.BridgeIssues.N447.N447', {
        statics: {
            Five: 5,
            Another: "Another",
            Ten: Bridge.Decimal(10.0),
            checkInlineExpression: function () {
                var s = "AnotherSome";
                var i = 20;
                var d = Bridge.Decimal(10.5);
            },
            checkInlineCalls: function () {
                var s = Bridge.get(Test.BridgeIssues.N447.Math447).getSum$2(Bridge.get(Test.BridgeIssues.N447.N447).Another, "Some");
                var i = Bridge.get(Test.BridgeIssues.N447.Math447).getSum$1(Bridge.get(Test.BridgeIssues.N447.N447).Five, 15);
                var d = Bridge.get(Test.BridgeIssues.N447.Math447).getSum(Bridge.get(Test.BridgeIssues.N447.N447).Ten, Bridge.Decimal(0.5));
            }
        }
    });
    
    
    
    Bridge.init();
})(this);
