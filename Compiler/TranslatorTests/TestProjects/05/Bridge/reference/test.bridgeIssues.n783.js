Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N783.App", {
        statics: {
            methods: {
                Main1: function () {
                    var base1 = new Test.BridgeIssues.N783.Base();
                    var base2 = new Test.BridgeIssues.N783.Base();

                    // Casting will be ignored
                    var ignore = base1;

                    // Default casting operation
                    var dontIgnore = Bridge.cast(base2, Test.BridgeIssues.N783.DontIgnore);
                }
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N783.Base");

    Bridge.define("Test.BridgeIssues.N783.DontIgnore", {
        inherits: [Test.BridgeIssues.N783.Base]
    });

    Bridge.define("Test.BridgeIssues.N783.Ignore", {
        inherits: [Test.BridgeIssues.N783.Base]
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJ0ZXN0LmJyaWRnZUlzc3Vlcy5uNzgzLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJCcmlkZ2VJc3N1ZXMvTjc4My5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7OztvQkFRWUEsWUFBWUEsSUFBSUE7b0JBQ2hCQSxZQUFZQSxJQUFJQTs7O29CQUdoQkEsYUFBYUEsQUFBUUE7OztvQkFHckJBLGlCQUFpQkEsWUFBWUEiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgQnJpZGdlO1xyXG5cclxubmFtZXNwYWNlIFRlc3QuQnJpZGdlSXNzdWVzLk43ODNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEFwcFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluMSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYmFzZTEgPSBuZXcgQmFzZSgpO1xyXG4gICAgICAgICAgICB2YXIgYmFzZTIgPSBuZXcgQmFzZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FzdGluZyB3aWxsIGJlIGlnbm9yZWRcclxuICAgICAgICAgICAgdmFyIGlnbm9yZSA9IChJZ25vcmUpYmFzZTE7XHJcblxyXG4gICAgICAgICAgICAvLyBEZWZhdWx0IGNhc3Rpbmcgb3BlcmF0aW9uXHJcbiAgICAgICAgICAgIHZhciBkb250SWdub3JlID0gKERvbnRJZ25vcmUpYmFzZTI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBCYXNlIHsgfVxyXG5cclxuICAgIFtJZ25vcmVDYXN0XVxyXG4gICAgcHVibGljIGNsYXNzIElnbm9yZSA6IEJhc2UgeyB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIERvbnRJZ25vcmUgOiBCYXNlIHsgfVxyXG59Il0KfQo=
