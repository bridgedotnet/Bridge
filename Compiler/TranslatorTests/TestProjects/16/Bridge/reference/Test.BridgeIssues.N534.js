Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N534.Bridge534", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":4,"n":"DecimalValue1","is":true,"t":4,"rt":System.Decimal,"sn":"DecimalValue1"},{"a":4,"n":"DecimalValue2","is":true,"t":4,"rt":System.Decimal,"sn":"DecimalValue2"},{"a":4,"n":"IntValue1","is":true,"t":4,"rt":System.Int32,"sn":"IntValue1","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":4,"n":"IntValue2","is":true,"t":4,"rt":System.Int32,"sn":"IntValue2","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":4,"n":"StringValue1","is":true,"t":4,"rt":System.String,"sn":"StringValue1"},{"a":4,"n":"StringValue2","is":true,"t":4,"rt":System.String,"sn":"StringValue2"}]}; },
        statics: {
            fields: {
                IntValue1: 0,
                IntValue2: 0,
                StringValue1: null,
                StringValue2: null,
                DecimalValue1: System.Decimal(0.0),
                DecimalValue2: System.Decimal(0.0)
            },
            ctors: {
                init: function () {
                    this.IntValue1 = 1;
                    this.IntValue2 = 2;
                    this.StringValue1 = "3";
                    this.StringValue2 = "34";
                    this.DecimalValue1 = System.Decimal(5.0);
                    this.DecimalValue2 = System.Decimal(11.0);
                }
            }
        }
    });
});
