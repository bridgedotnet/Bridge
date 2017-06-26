Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N772.App", {
        statics: {
            methods: {
                Main1: function () {
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
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJ0ZXN0LmJyaWRnZUlzc3Vlcy5uNzcyLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJCcmlkZ2VJc3N1ZXMvTjc3Mi5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7b0JBT1lBLGdCQUFnQkE7b0JBQ2hCQSxpQkFBaUJBO29CQUNqQkEsaUJBQWlCQTtvQkFDakJBLGtCQUFrQkE7b0JBQ2xCQSxlQUFlQTtvQkFDZkEsZ0JBQWdCQTtvQkFDaEJBLGlCQUFpQkE7b0JBQ2pCQSxrQkFBa0JBOzs7b0JBR2xCQSxrQkFBa0JBO29CQUNsQkEsbUJBQW1CQTs7b0JBRW5CQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7O29CQUVBQTtvQkFDQUEiLAogICJzb3VyY2VzQ29udGVudCI6IFsibmFtZXNwYWNlIFRlc3QuQnJpZGdlSXNzdWVzLk43NzJcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEFwcFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluMSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL1RoZXNlIGFycmF5cyBkZXBlbmQgb24gXCJ1c2VUeXBlZEFycmF5XCIgYnJpZGdlLmpzb24gb3B0aW9uXHJcbiAgICAgICAgICAgIHZhciBieXRlQXJyYXkgPSBuZXcgYnl0ZVsxXTtcclxuICAgICAgICAgICAgdmFyIHNieXRlQXJyYXkgPSBuZXcgc2J5dGVbMl07XHJcbiAgICAgICAgICAgIHZhciBzaG9ydEFycmF5ID0gbmV3IHNob3J0WzNdO1xyXG4gICAgICAgICAgICB2YXIgdXNob3J0QXJyYXkgPSBuZXcgdXNob3J0WzRdO1xyXG4gICAgICAgICAgICB2YXIgaW50QXJyYXkgPSBuZXcgaW50WzVdO1xyXG4gICAgICAgICAgICB2YXIgdWludEFycmF5ID0gbmV3IHVpbnRbNl07XHJcbiAgICAgICAgICAgIHZhciBmbG9hdEFycmF5ID0gbmV3IGZsb2F0WzddO1xyXG4gICAgICAgICAgICB2YXIgZG91YmxlQXJyYXkgPSBuZXcgZG91YmxlWzhdO1xyXG5cclxuICAgICAgICAgICAgLy9UaGVzZSBhcnJheXMgZG8gbm90IGRlcGVuZCBvbiBcInVzZVR5cGVkQXJyYXlcIiBicmlkZ2UuanNvbiBvcHRpb25cclxuICAgICAgICAgICAgdmFyIHN0cmluZ0FycmF5ID0gbmV3IHN0cmluZ1s5XTtcclxuICAgICAgICAgICAgdmFyIGRlY2ltYWxBcnJheSA9IG5ldyBkZWNpbWFsWzEwXTtcclxuXHJcbiAgICAgICAgICAgIGJ5dGVBcnJheVswXSA9IDE7XHJcbiAgICAgICAgICAgIHNieXRlQXJyYXlbMF0gPSAyO1xyXG4gICAgICAgICAgICBzaG9ydEFycmF5WzBdID0gMztcclxuICAgICAgICAgICAgdXNob3J0QXJyYXlbMF0gPSA0O1xyXG4gICAgICAgICAgICBpbnRBcnJheVswXSA9IDU7XHJcbiAgICAgICAgICAgIHVpbnRBcnJheVswXSA9IDY7XHJcbiAgICAgICAgICAgIGZsb2F0QXJyYXlbMF0gPSA3O1xyXG4gICAgICAgICAgICBkb3VibGVBcnJheVswXSA9IDg7XHJcblxyXG4gICAgICAgICAgICBzdHJpbmdBcnJheVswXSA9IFwiOVwiO1xyXG4gICAgICAgICAgICBkZWNpbWFsQXJyYXlbMF0gPSAxMG07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0KfQo=
