/**
 * @compiler Bridge.NET 16.0.0-beta
 */
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJ0ZXN0LmJyaWRnZUlzc3Vlcy5uNzcyLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJCcmlkZ2VJc3N1ZXNcXE43NzIuY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7b0JBTUdBO29CQUNBQSxnQkFBZ0JBLGtCQUFTQTtvQkFDekJBLGlCQUFpQkEsa0JBQVVBO29CQUMzQkEsaUJBQWlCQSxrQkFBVUE7b0JBQzNCQSxrQkFBa0JBLGtCQUFXQTtvQkFDN0JBLGVBQWVBLGtCQUFRQTtvQkFDdkJBLGdCQUFnQkEsa0JBQVNBO29CQUN6QkEsaUJBQWlCQSxrQkFBVUE7b0JBQzNCQSxrQkFBa0JBLGtCQUFXQTtvQkFDN0JBO29CQUNBQSxrQkFBa0JBLGtCQUFXQTtvQkFDN0JBLG1CQUFtQkEsa0JBQVlBO29CQUMvQkEsNkJBQVVBLEdBQVZBLGNBQWVBO29CQUNmQSw4QkFBV0EsR0FBWEEsZUFBZ0JBO29CQUNoQkEsOEJBQVdBLEdBQVhBLGVBQWdCQTtvQkFDaEJBLCtCQUFZQSxHQUFaQSxnQkFBaUJBO29CQUNqQkEsNEJBQVNBLEdBQVRBLGFBQWNBO29CQUNkQSw2QkFBVUEsR0FBVkEsY0FBZUE7b0JBQ2ZBLDhCQUFXQSxHQUFYQSxlQUFnQkE7b0JBQ2hCQSwrQkFBWUEsR0FBWkEsZ0JBQWlCQTtvQkFDakJBLCtCQUFZQSxHQUFaQSxnQkFBaUJBO29CQUNqQkEsZ0NBQWFBLEdBQWJBLGlCQUFrQkEiLAogICJzb3VyY2VzQ29udGVudCI6IFsibmFtZXNwYWNlIFRlc3QuQnJpZGdlSXNzdWVzLk43NzJcclxue1xyXG5cdHB1YmxpYyBjbGFzcyBBcHBcclxuXHR7XHJcblx0XHRwdWJsaWMgc3RhdGljIHZvaWQgTWFpbjEoKVxyXG5cdFx0e1xyXG5cdFx0XHQvL1RoZXNlIGFycmF5cyBkZXBlbmQgb24gXCJ1c2VUeXBlZEFycmF5XCIgYnJpZGdlLmpzb24gb3B0aW9uXHJcblx0XHRcdHZhciBieXRlQXJyYXkgPSBuZXcgYnl0ZVsxXTtcclxuXHRcdFx0dmFyIHNieXRlQXJyYXkgPSBuZXcgc2J5dGVbMl07XHJcblx0XHRcdHZhciBzaG9ydEFycmF5ID0gbmV3IHNob3J0WzNdO1xyXG5cdFx0XHR2YXIgdXNob3J0QXJyYXkgPSBuZXcgdXNob3J0WzRdO1xyXG5cdFx0XHR2YXIgaW50QXJyYXkgPSBuZXcgaW50WzVdO1xyXG5cdFx0XHR2YXIgdWludEFycmF5ID0gbmV3IHVpbnRbNl07XHJcblx0XHRcdHZhciBmbG9hdEFycmF5ID0gbmV3IGZsb2F0WzddO1xyXG5cdFx0XHR2YXIgZG91YmxlQXJyYXkgPSBuZXcgZG91YmxlWzhdO1xyXG5cdFx0XHQvL1RoZXNlIGFycmF5cyBkbyBub3QgZGVwZW5kIG9uIFwidXNlVHlwZWRBcnJheVwiIGJyaWRnZS5qc29uIG9wdGlvblxyXG5cdFx0XHR2YXIgc3RyaW5nQXJyYXkgPSBuZXcgc3RyaW5nWzldO1xyXG5cdFx0XHR2YXIgZGVjaW1hbEFycmF5ID0gbmV3IGRlY2ltYWxbMTBdO1xyXG5cdFx0XHRieXRlQXJyYXlbMF0gPSAxO1xyXG5cdFx0XHRzYnl0ZUFycmF5WzBdID0gMjtcclxuXHRcdFx0c2hvcnRBcnJheVswXSA9IDM7XHJcblx0XHRcdHVzaG9ydEFycmF5WzBdID0gNDtcclxuXHRcdFx0aW50QXJyYXlbMF0gPSA1O1xyXG5cdFx0XHR1aW50QXJyYXlbMF0gPSA2O1xyXG5cdFx0XHRmbG9hdEFycmF5WzBdID0gNztcclxuXHRcdFx0ZG91YmxlQXJyYXlbMF0gPSA4O1xyXG5cdFx0XHRzdHJpbmdBcnJheVswXSA9IFwiOVwiO1xyXG5cdFx0XHRkZWNpbWFsQXJyYXlbMF0gPSAxMG07XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdCn0K