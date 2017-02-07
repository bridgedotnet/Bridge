/**
 * @compiler Bridge.NET 16.0.0
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1092.App", {
        statics: {
            main1: function () {
                // Should contain instruction to check data type range as cspoj contains <CheckForOverflowUnderflow>true</CheckForOverflowUnderflow>
                var maxInt32 = 2147483647;
                var rInt32Max = Bridge.Int.check(maxInt32 + 1, System.Int32);

                var maxUInt32 = 4294967295;
                var rUInt32Max = Bridge.Int.check(maxUInt32 + 1, System.UInt32);

                var maxLong = System.Int64.MaxValue;
                var rLongMax = maxLong.add(System.Int64(1), 1);

                var maxULong = System.UInt64.MaxValue;
                var rUlongMax = maxULong.add(System.UInt64(1), 1);
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N772.App", {
        statics: {
            main1: function () {
                //These arrays depend on "useTypedArray" bridge.json option
                var byteArray = System.Array.init(new Uint8Array(1), System.Byte);
                var sbyteArray = System.Array.init(new Int8Array(2), System.SByte);
                var shortArray = System.Array.init(new Int16Array(3), System.Int16);
                var ushortArray = System.Array.init(new Uint16Array(4), System.UInt16);
                var intArray = System.Array.init(new Int32Array(5), System.Int32);
                var uintArray = System.Array.init(new Uint32Array(6), System.UInt32);
                var floatArray = System.Array.init(new Float32Array(7), System.Single);
                var doubleArray = System.Array.init(new Float64Array(8), System.Double);

                //These arrays do not depend on "useTypedArray" bridge.json option
                var stringArray = System.Array.init(9, null, String);
                var decimalArray = System.Array.init(10, System.Decimal(0.0), System.Decimal);

                byteArray[0] = 1;
                sbyteArray[0] = 2;
                shortArray[0] = 3;
                ushortArray[0] = 4;
                intArray[0] = 5;
                uintArray[0] = 6;
                floatArray[0] = 7;
                doubleArray[0] = 8;

                stringArray[0] = "9";
                decimalArray[0] = System.Decimal(10.0);
            }
        }
    });

    Bridge.define("TestProject1.TestClassA", {
        config: {
            properties: {
                Value1: 0
            }
        }
    });

    Bridge.define("TestProject2.TestClassB", {
        config: {
            properties: {
                Value1: 0
            }
        }
    });
});
