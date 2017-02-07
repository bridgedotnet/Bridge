Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N2318.N2318", {
        shouldBox: function () {
            var o;

            var box1 = Test.BridgeIssues.N2318.N2318.JustEnum.Value;
            var box2 = true;
            var box3 = new Date();
            var box4 = 97;
            var box5 = 0;
            var box6 = System.Double.min;
            var box7 = -3.40282347E+38;
            var box8 = -32768;
            var box9 = -2147483648;
            var box10 = -128;
            var box11 = 0;
            var box12 = 0;

            // The code below SHOULD contain box calls for standart primitives (except custim long, ulong, decimal) and enums #2318
            o = Bridge.box(box1, Test.BridgeIssues.N2318.N2318.JustEnum, $box_.Test.BridgeIssues.N2318.N2318.JustEnum.toString);
            o = Bridge.box(box2, System.Boolean, $box_.System.Boolean.toString);
            o = Bridge.box(box3, System.DateTime, $box_.System.DateTime.toString);
            o = Bridge.box(box4, System.Char, $box_.System.Char.toString);
            o = Bridge.box(box5, System.Byte);
            o = Bridge.box(box6, System.Double, $box_.System.Double.toString);
            o = Bridge.box(box7, System.Single, $box_.System.Single.toString);
            o = Bridge.box(box8, System.Int16);
            o = Bridge.box(box9, System.Int32);
            o = Bridge.box(box10, System.SByte);
            o = Bridge.box(box11, System.UInt16);
            o = Bridge.box(box12, System.UInt32);
        },
        shouldNotBox: function () {
            var o;

            var box1 = new Test.BridgeIssues.N2318.N2318.JustStruct();
            var box2 = System.Int64.MinValue;
            var box3 = System.UInt64.MinValue;
            var box4 = System.Decimal.MinValue;
            var box5 = "";

            // The code below should NOT contain box calls for custom Bridge implementations of long/ulong/decimal user's structs (it is class in JS)#2318
            o = box1;
            o = box2;
            o = box3;
            o = box4;
            o = box5;

            // The code below should NOT contain box calls for string concatenation #2318
            var s1 = "";
            var s2 = System.String.concat(s1, s1);
            var s3 = System.String.concat(s1, 2);
        },
        shouldUnbox: function () {
            var objectArray = System.Array.init([Bridge.box(1, System.Int32)], System.Object);
            var objectList = new (System.Collections.Generic.List$1(System.Object))(System.Array.init([Bridge.box(1, System.Int32)], System.Object));

            // The code below SHOULD contain box calls for standart primitives (except custim long, ulong, decimal) and enums #2318
            var unboxArray1 = System.Nullable.getValue(Bridge.cast(Bridge.unbox(objectArray[0]), System.Int32));
            var unboxArray2 = System.Nullable.getValue(Bridge.cast(Bridge.unbox(objectArray[0]), System.Int32));
            var unboxArray3 = System.Nullable.getValue(Bridge.cast(Bridge.unbox(objectArray[0]), Test.BridgeIssues.N2318.N2318.JustStruct));
            var unboxArray4 = System.Nullable.getValue(Bridge.cast(Bridge.unbox(objectArray[0]), System.DateTime));
            var unboxArray5 = System.Nullable.getValue(Bridge.cast(Bridge.unbox(objectArray[0]), System.Int64));
            var unboxArray6 = System.Nullable.getValue(Bridge.cast(Bridge.unbox(objectArray[0]), System.UInt64));
            var unboxArray7 = System.Nullable.getValue(Bridge.cast(Bridge.unbox(objectArray[0]), System.Decimal));

            var unboxList1 = System.Nullable.getValue(Bridge.cast(Bridge.unbox(objectList.getItem(0)), System.Int32));
            var unboxList2 = System.Nullable.getValue(Bridge.cast(Bridge.unbox(objectList.getItem(0)), System.Int32));
            var unboxList3 = System.Nullable.getValue(Bridge.cast(Bridge.unbox(objectList.getItem(0)), Test.BridgeIssues.N2318.N2318.JustStruct));
            var unboxList4 = System.Nullable.getValue(Bridge.cast(Bridge.unbox(objectList.getItem(0)), System.DateTime));
            var unboxList5 = System.Nullable.getValue(Bridge.cast(Bridge.unbox(objectList.getItem(0)), System.Int64));
            var unboxList6 = System.Nullable.getValue(Bridge.cast(Bridge.unbox(objectList.getItem(0)), System.UInt64));
            var unboxList7 = System.Nullable.getValue(Bridge.cast(Bridge.unbox(objectList.getItem(0)), System.Decimal));
        }
    });

    Bridge.define("Test.BridgeIssues.N2318.N2318.JustEnum", {
        $kind: "enum",
        statics: {
            Value: 1
        }
    });

    Bridge.define("Test.BridgeIssues.N2318.N2318.JustStruct", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Test.BridgeIssues.N2318.N2318.JustStruct(); }
        },
        $clone: function (to) { return this; }
    });
});
