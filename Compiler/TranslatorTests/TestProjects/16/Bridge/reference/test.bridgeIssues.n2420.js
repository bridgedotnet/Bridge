Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N2420.N2420", {
        statics: {
            methods: {
                Output: function () {
                    var externalOption = "one";

                    // Bridge boxes external enum value for Console.WriteLine(Enum value)
                    // but it is not required because Template handles it. It produces unnecessary code.
                    // Expected Bridge.Console.log(System.Enum.toString(...Options.format, externalOption));
                    Bridge.Console.log(System.Enum.toString(System.String, externalOption));

                    var option = "one";

                    // Bridge boxes enum value for Console.WriteLine(Enum value)
                    // Expected Bridge.Console.log(...box);
                    Bridge.Console.log(System.Enum.toString(Test.BridgeIssues.N2420.Options.Format, option));
                }
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N2420.Options");

    Bridge.define("Test.BridgeIssues.N2420.Options.Format", {
        $kind: "enum",
        statics: {
            fields: {
                one: "one",
                two: "two"
            }
        },
        $utype: System.String
    });
});
