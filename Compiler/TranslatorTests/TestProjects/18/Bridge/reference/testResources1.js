    Bridge.define("TestIssue1035.StructBridge1035", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new TestIssue1035.StructBridge1035(); }
        },
        config: {
            properties: {
                Data: 0
            }
        },
        ctor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var h = Bridge.addHash([6481214800, this.Data]);
            return h;
        },
        equals: function (o) {
            if (!Bridge.is(o, TestIssue1035.StructBridge1035)) {
                return false;
            }
            return Bridge.equals(this.Data, o.Data);
        },
        $clone: function (to) { return this; }
    });
﻿    Bridge.define("TestIssue379.Tests", {
        testDataIgnore: function () {
            var d1 = {  };
            var d2 = { int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d3 = {  };
            var d4 = { int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d5 = {  };
            var d6 = { int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d7 = {  };
            var d8 = { int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };
        },
        testDataDefaultValue: function () {
            var d1 = { int1: 0, int2: 2, str3: null, str4: "Str4", intNull5: null, intNull6: 6, decimal7: System.Decimal(0.0), decimal8: System.Decimal(8) };
            var d2 = { int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d3 = {  };
            var d4 = { int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d5 = {  };
            var d6 = { int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d7 = {  };
            var d8 = { int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };
        },
        testDataInitializer: function () {
            var d1 = { int2: 2, str4: "Str4", intNull6: 6, decimal8: System.Decimal(8) };
            var d2 = { int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d3 = {  };
            var d4 = { int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d5 = {  };
            var d6 = { int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };

            var d7 = {  };
            var d8 = { int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88) };
        }
    });
