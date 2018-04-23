/**
 * @compiler Bridge.NET 17.0.0
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    require(["Module2806"], function (Module2806Export) {
        Bridge.define("Test.BridgeIssues.N2806.N2806UsingModule", {
            $metadata : function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CallModule2806","is":true,"t":8,"sn":"CallModule2806","rt":System.Void}]}; },
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
            $metadata : function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DoSomething","t":8,"sn":"DoSomething","rt":System.Void}]}; },
            $scope: Module2806,
            methods: {
                DoSomething: function () { }
            }
        });
        return Module2806;
    });

});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJ0ZXN0LmJyaWRnZUlzc3Vlcy5uMjgwNi5qcyIsCiAgInNvdXJjZVJvb3QiOiAiIiwKICAic291cmNlcyI6IFsiQnJpZGdlSXNzdWVzL04yODA2LmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7d0JBZ0JZQSxRQUFRQSxJQUFJQTt3QkFDWkEiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgQnJpZGdlO1xyXG5cclxubmFtZXNwYWNlIFRlc3QuQnJpZGdlSXNzdWVzLk4yODA2XHJcbntcclxuICAgIFtNb2R1bGUoXCJNb2R1bGUyODA2XCIsIEV4cG9ydEFzTmFtZXNwYWNlID0gXCJNb2R1bGUyODA2RXhwb3J0XCIpXVxyXG4gICAgY2xhc3MgTjI4MDZcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgdm9pZCBEb1NvbWV0aGluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBOMjgwNlVzaW5nTW9kdWxlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBDYWxsTW9kdWxlMjgwNigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYyA9IG5ldyBOMjgwNigpO1xyXG4gICAgICAgICAgICBjLkRvU29tZXRoaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0KfQo=
