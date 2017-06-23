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
                    System.Console.WriteLine(externalOption);

                    var option = "one";

                    // Bridge boxes enum value for Console.WriteLine(Enum value)
                    // Expected Bridge.Console.log(...box);
                    System.Console.WriteLine(Bridge.box(option, Test.BridgeIssues.N2420.Options.Format, System.Enum.toStringFn(Test.BridgeIssues.N2420.Options.Format)));
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
