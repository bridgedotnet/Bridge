Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N447.Math447", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetSum","is":true,"t":8,"pi":[{"n":"a","pt":System.Decimal,"ps":0},{"n":"b","pt":System.Decimal,"ps":1}],"sn":"GetSum","rt":System.Decimal,"p":[System.Decimal,System.Decimal]},{"a":2,"n":"GetSum","is":true,"t":8,"pi":[{"n":"a","pt":System.Int32,"ps":0},{"n":"b","pt":System.Int32,"ps":1}],"sn":"GetSum$1","rt":System.Int32,"p":[System.Int32,System.Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetSum","is":true,"t":8,"pi":[{"n":"a","pt":System.String,"ps":0},{"n":"b","pt":System.String,"ps":1}],"sn":"GetSum$2","rt":System.String,"p":[System.String,System.String]}]}; },
        statics: {
            methods: {
                GetSum$1: function (a, b) {
                    return ((a + b) | 0);
                },
                GetSum$2: function (a, b) {
                    return (a || "") + (b || "");
                },
                GetSum: function (a, b) {
                    return a.add(b);
                }
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N447.N447", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CheckInlineCalls","is":true,"t":8,"sn":"CheckInlineCalls","rt":System.Void},{"a":2,"n":"CheckInlineExpression","is":true,"t":8,"sn":"CheckInlineExpression","rt":System.Void},{"a":2,"n":"Another","is":true,"t":4,"rt":System.String,"sn":"Another"},{"a":2,"n":"Five","is":true,"t":4,"rt":System.Int32,"sn":"Five","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"InlineFifteen","is":true,"t":4,"rt":System.Int32,"sn":"InlineFifteen","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"InlineHalf","is":true,"t":4,"rt":System.Decimal,"sn":"InlineHalf"},{"a":2,"n":"InlineSome","is":true,"t":4,"rt":System.String,"sn":"InlineSome"},{"a":2,"n":"Ten","is":true,"t":4,"rt":System.Decimal,"sn":"Ten"}]}; },
        statics: {
            fields: {
                Five: 0,
                Another: null,
                Ten: System.Decimal(0.0)
            },
            ctors: {
                init: function () {
                    this.Five = 5;
                    this.Another = "Another";
                    this.Ten = System.Decimal(10.0);
                }
            },
            methods: {
                CheckInlineExpression: function () {
                    var s = "AnotherSome";
                    var i = 20;
                    var d = System.Decimal(10.5);
                },
                CheckInlineCalls: function () {
                    var s = Test.BridgeIssues.N447.Math447.GetSum$2(Test.BridgeIssues.N447.N447.Another, "Some");
                    var i = Test.BridgeIssues.N447.Math447.GetSum$1(Test.BridgeIssues.N447.N447.Five, 15);
                    var d = Test.BridgeIssues.N447.Math447.GetSum(Test.BridgeIssues.N447.N447.Ten, System.Decimal(0.5));
                }
            }
        }
    });
});
