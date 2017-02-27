Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N2420.N2420", {
        statics: {
            output: function () {
                var option = "one";

                // Bridge box enum value for Console.WriteLine(Enum value) but it is not required because Template handles it. It produces unnecessary code.
                // Expected Bridge.Console.log(System.Enum.toString(...Options.format, option));
                Bridge.Console.log(System.Enum.toString(Test.BridgeIssues.N2420.Options.format, Bridge.box(option, Test.BridgeIssues.N2420.Options.format, $box_.Test.BridgeIssues.N2420.Options.format.toString)));
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N2420.Options");

    Bridge.define("Test.BridgeIssues.N2420.Options.format", {
        $kind: "enum",
        statics: {
            one: "one",
            two: "two"
        },
        $utype: System.String
    });
});
