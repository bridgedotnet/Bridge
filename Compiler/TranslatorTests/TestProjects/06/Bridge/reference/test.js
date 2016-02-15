(function (globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N772.App', {
        statics: {
            main: function () {
                //These arrays depend on "useTypedArray" bridge.json option
                var byteArray = new Uint8Array(1);
                var sbyteArray = new Int8Array(2);
                var shortArray = new Int16Array(3);
                var ushortArray = new Uint16Array(4);
                var intArray = new Int32Array(5);
                var uintArray = new Uint32Array(6);
                var floatArray = new Float32Array(7);
                var doubleArray = new Float64Array(8);
    
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
    
    Bridge.define('TestProject1.TestClassA', {
        config: {
            properties: {
                Value1: 0
            }
        }
    });
    
    Bridge.define('TestProject2.TestClassB', {
        config: {
            properties: {
                Value1: 0
            }
        }
    });
    
    Bridge.init();
})(this);
