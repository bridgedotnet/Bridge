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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJ0ZXN0LmJyaWRnZUlzc3Vlcy5uNzgzLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJCcmlkZ2VJc3N1ZXNcXE43ODMuY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7b0JBUUdBLFlBQVlBLElBQUlBO29CQUNoQkEsWUFBWUEsSUFBSUE7b0JBQ2hCQTtvQkFDQUEsYUFBYUEsQUFBUUE7b0JBQ3JCQTtvQkFDQUEsaUJBQWlCQSxZQUFZQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBCcmlkZ2U7XHJcblxyXG5uYW1lc3BhY2UgVGVzdC5CcmlkZ2VJc3N1ZXMuTjc4M1xyXG57XHJcblx0cHVibGljIGNsYXNzIEFwcFxyXG5cdHtcclxuXHRcdHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluMSgpXHJcblx0XHR7XHJcblx0XHRcdHZhciBiYXNlMSA9IG5ldyBCYXNlKCk7XHJcblx0XHRcdHZhciBiYXNlMiA9IG5ldyBCYXNlKCk7XHJcblx0XHRcdC8vIENhc3Rpbmcgd2lsbCBiZSBpZ25vcmVkXHJcblx0XHRcdHZhciBpZ25vcmUgPSAoSWdub3JlKWJhc2UxO1xyXG5cdFx0XHQvLyBEZWZhdWx0IGNhc3Rpbmcgb3BlcmF0aW9uXHJcblx0XHRcdHZhciBkb250SWdub3JlID0gKERvbnRJZ25vcmUpYmFzZTI7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBjbGFzcyBCYXNlXHJcblx0e1xyXG5cdH1cclxuXHRbSWdub3JlQ2FzdF1cclxuXHRwdWJsaWMgY2xhc3MgSWdub3JlIDogQmFzZVxyXG5cdHtcclxuXHR9XHJcblx0cHVibGljIGNsYXNzIERvbnRJZ25vcmUgOiBCYXNlXHJcblx0e1xyXG5cdH1cclxufVxyXG4iXQp9Cg==