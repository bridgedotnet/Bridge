Bridge.assembly({ name: "TestProject", version: "0.0.0.0", compiler: "15.2.0" }, function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N772.App", {
        statics: {
            main1: function () {
                //These arrays depend on "useTypedArray" bridge.json option
                var byteArray = System.Array.init(1, 0);
                var sbyteArray = System.Array.init(2, 0);
                var shortArray = System.Array.init(3, 0);
                var ushortArray = System.Array.init(4, 0);
                var intArray = System.Array.init(5, 0);
                var uintArray = System.Array.init(6, 0);
                var floatArray = System.Array.init(7, 0);
                var doubleArray = System.Array.init(8, 0);

                //These arrays do not depend on "useTypedArray" bridge.json option
                var stringArray = System.Array.init(9, null);
                var decimalArray = System.Array.init(10, System.Decimal(0.0));

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
});
