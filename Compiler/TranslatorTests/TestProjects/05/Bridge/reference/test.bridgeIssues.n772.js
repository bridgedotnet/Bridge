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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJ0ZXN0LmJyaWRnZUlzc3Vlcy5uNzcyLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJCcmlkZ2VJc3N1ZXNcXE43NzIuY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7O29CQU9ZQSxnQkFBZ0JBO29CQUNoQkEsaUJBQWlCQTtvQkFDakJBLGlCQUFpQkE7b0JBQ2pCQSxrQkFBa0JBO29CQUNsQkEsZUFBZUE7b0JBQ2ZBLGdCQUFnQkE7b0JBQ2hCQSxpQkFBaUJBO29CQUNqQkEsa0JBQWtCQTs7O29CQUdsQkEsa0JBQWtCQTtvQkFDbEJBLG1CQUFtQkE7O29CQUVuQkE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBOztvQkFFQUE7b0JBQ0FBIiwKICAic291cmNlc0NvbnRlbnQiOiBbIm5hbWVzcGFjZSBUZXN0LkJyaWRnZUlzc3Vlcy5ONzcyXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBBcHBcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTWFpbjEoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9UaGVzZSBhcnJheXMgZGVwZW5kIG9uIFwidXNlVHlwZWRBcnJheVwiIGJyaWRnZS5qc29uIG9wdGlvblxyXG4gICAgICAgICAgICB2YXIgYnl0ZUFycmF5ID0gbmV3IGJ5dGVbMV07XHJcbiAgICAgICAgICAgIHZhciBzYnl0ZUFycmF5ID0gbmV3IHNieXRlWzJdO1xyXG4gICAgICAgICAgICB2YXIgc2hvcnRBcnJheSA9IG5ldyBzaG9ydFszXTtcclxuICAgICAgICAgICAgdmFyIHVzaG9ydEFycmF5ID0gbmV3IHVzaG9ydFs0XTtcclxuICAgICAgICAgICAgdmFyIGludEFycmF5ID0gbmV3IGludFs1XTtcclxuICAgICAgICAgICAgdmFyIHVpbnRBcnJheSA9IG5ldyB1aW50WzZdO1xyXG4gICAgICAgICAgICB2YXIgZmxvYXRBcnJheSA9IG5ldyBmbG9hdFs3XTtcclxuICAgICAgICAgICAgdmFyIGRvdWJsZUFycmF5ID0gbmV3IGRvdWJsZVs4XTtcclxuXHJcbiAgICAgICAgICAgIC8vVGhlc2UgYXJyYXlzIGRvIG5vdCBkZXBlbmQgb24gXCJ1c2VUeXBlZEFycmF5XCIgYnJpZGdlLmpzb24gb3B0aW9uXHJcbiAgICAgICAgICAgIHZhciBzdHJpbmdBcnJheSA9IG5ldyBzdHJpbmdbOV07XHJcbiAgICAgICAgICAgIHZhciBkZWNpbWFsQXJyYXkgPSBuZXcgZGVjaW1hbFsxMF07XHJcblxyXG4gICAgICAgICAgICBieXRlQXJyYXlbMF0gPSAxO1xyXG4gICAgICAgICAgICBzYnl0ZUFycmF5WzBdID0gMjtcclxuICAgICAgICAgICAgc2hvcnRBcnJheVswXSA9IDM7XHJcbiAgICAgICAgICAgIHVzaG9ydEFycmF5WzBdID0gNDtcclxuICAgICAgICAgICAgaW50QXJyYXlbMF0gPSA1O1xyXG4gICAgICAgICAgICB1aW50QXJyYXlbMF0gPSA2O1xyXG4gICAgICAgICAgICBmbG9hdEFycmF5WzBdID0gNztcclxuICAgICAgICAgICAgZG91YmxlQXJyYXlbMF0gPSA4O1xyXG5cclxuICAgICAgICAgICAgc3RyaW5nQXJyYXlbMF0gPSBcIjlcIjtcclxuICAgICAgICAgICAgZGVjaW1hbEFycmF5WzBdID0gMTBtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdCn0K
