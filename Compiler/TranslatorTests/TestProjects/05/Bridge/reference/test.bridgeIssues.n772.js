/**
 * @compiler Bridge.NET 16.0.0
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N772.App", {
        statics: {
            main1: function () {
                //These arrays depend on "useTypedArray" bridge.json option
                var byteArray = System.Array.init(1, 0, System.Byte);
                var sbyteArray = System.Array.init(2, 0, System.SByte);
                var shortArray = System.Array.init(3, 0, System.Int16);
                var ushortArray = System.Array.init(4, 0, System.UInt16);
                var intArray = System.Array.init(5, 0, System.Int32);
                var uintArray = System.Array.init(6, 0, System.UInt32);
                var floatArray = System.Array.init(7, 0, System.Single);
                var doubleArray = System.Array.init(8, 0, System.Double);

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
    });
});
