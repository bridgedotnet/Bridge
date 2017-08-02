/**
 * @compiler Bridge.NET 16.0.0
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    require(["Module2806"], function (Module2806Export) {
        Bridge.define("Test.BridgeIssues.N2806.N2806UsingModule", {
            statics: {
                methods: {
                    CallModule2806: function () {
                        var c = new Module2806Export.Test.BridgeIssues.N2806.N2806();
                        c.DoSomething();
                    }
                }
            }
        });
        Bridge.init();
    });

    define("Module2806", function () {
        var Module2806 = { };
        Bridge.define("Test.BridgeIssues.N2806.N2806", {
            $scope: Module2806,
            methods: {
                DoSomething: function () { }
            }
        });
        return Module2806;
    });

});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJ0ZXN0LmJyaWRnZUlzc3Vlcy5uMjgwNi5qcyIsCiAgInNvdXJjZVJvb3QiOiAiIiwKICAic291cmNlcyI6IFsiQnJpZGdlSXNzdWVzL04yODA2LmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozt3QkFnQllBLFFBQVFBLElBQUlBO3dCQUNaQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBCcmlkZ2U7XHJcblxyXG5uYW1lc3BhY2UgVGVzdC5CcmlkZ2VJc3N1ZXMuTjI4MDZcclxue1xyXG4gICAgW01vZHVsZShcIk1vZHVsZTI4MDZcIiwgRXhwb3J0QXNOYW1lc3BhY2UgPSBcIk1vZHVsZTI4MDZFeHBvcnRcIildXHJcbiAgICBjbGFzcyBOMjgwNlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyB2b2lkIERvU29tZXRoaW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIE4yODA2VXNpbmdNb2R1bGVcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIENhbGxNb2R1bGUyODA2KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjID0gbmV3IE4yODA2KCk7XHJcbiAgICAgICAgICAgIGMuRG9Tb21ldGhpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXQp9Cg==
