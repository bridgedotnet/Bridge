/**
 * @compiler Bridge.NET 16.0.0-beta2
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1092.App", {
        statics: {
            methods: {
                Main1: function () {
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
        }
    });

    Bridge.define("Test.BridgeIssues.N772.App", {
        statics: {
            methods: {
                Main1: function () {
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
                    var stringArray = System.Array.init(9, null, System.String);
                    var decimalArray = System.Array.init(10, System.Decimal(0.0), System.Decimal);

                    byteArray[System.Array.index(0, byteArray)] = 1;
                    sbyteArray[System.Array.index(0, sbyteArray)] = 2;
                    shortArray[System.Array.index(0, shortArray)] = 3;
                    ushortArray[System.Array.index(0, ushortArray)] = 4;
                    intArray[System.Array.index(0, intArray)] = 5;
                    uintArray[System.Array.index(0, uintArray)] = 6;
                    floatArray[System.Array.index(0, floatArray)] = 7;
                    doubleArray[System.Array.index(0, doubleArray)] = 8;

                    stringArray[System.Array.index(0, stringArray)] = "9";
                    decimalArray[System.Array.index(0, decimalArray)] = System.Decimal(10.0);
                }
            }
        }
    });

    Bridge.define("TestProject1.TestClassA", {
        props: {
            Value1: 0
        }
    });

    Bridge.define("TestProject2.TestClassB", {
        props: {
            Value1: 0
        }
    });
});
