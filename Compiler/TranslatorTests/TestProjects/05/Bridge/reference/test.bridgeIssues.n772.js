(function (globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N772.App', {
        statics: {
            main: function () {
                //These arrays depend on "useTypedArray" bridge.json option
                var byteArray = Bridge.Array.init(1, 0);
                var sbyteArray = Bridge.Array.init(2, 0);
                var shortArray = Bridge.Array.init(3, 0);
                var ushortArray = Bridge.Array.init(4, 0);
                var intArray = Bridge.Array.init(5, 0);
                var uintArray = Bridge.Array.init(6, 0);
                var floatArray = Bridge.Array.init(7, 0);
                var doubleArray = Bridge.Array.init(8, 0);
    
                //These arrays do not depend on "useTypedArray" bridge.json option
                var stringArray = Bridge.Array.init(9, null);
                var decimalArray = Bridge.Array.init(10, Bridge.Decimal(0.0));
    
                byteArray[0] = 1;
                sbyteArray[0] = 2;
                shortArray[0] = 3;
                ushortArray[0] = 4;
                intArray[0] = 5;
                uintArray[0] = 6;
                floatArray[0] = 7;
                doubleArray[0] = 8;
    
                stringArray[0] = "9";
                decimalArray[0]  = Bridge.Decimal(10.0);
            }
        }
    });
    
    
    
    Bridge.init();
})(this);
