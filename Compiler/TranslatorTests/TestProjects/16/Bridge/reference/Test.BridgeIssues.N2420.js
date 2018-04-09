Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N2420.N2420", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Output","is":true,"t":8,"sn":"Output","rt":System.Void}]}; },
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

    Bridge.define("Test.BridgeIssues.N2420.Options", {
        $metadata : function () { return {"nested":[Test.BridgeIssues.N2420.Options.Format],"att":1048961,"a":2,"s":true}; }
    });

    Bridge.define("Test.BridgeIssues.N2420.Options.Format", {
        $kind: "nested enum",
        $metadata : function () { return {"td":Test.BridgeIssues.N2420.Options,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"one","is":true,"t":4,"rt":Test.BridgeIssues.N2420.Options.Format,"sn":"one","box":function ($v) { return Bridge.box($v, Test.BridgeIssues.N2420.Options.Format, System.Enum.toStringFn(Test.BridgeIssues.N2420.Options.Format));}},{"a":2,"n":"two","is":true,"t":4,"rt":Test.BridgeIssues.N2420.Options.Format,"sn":"two","box":function ($v) { return Bridge.box($v, Test.BridgeIssues.N2420.Options.Format, System.Enum.toStringFn(Test.BridgeIssues.N2420.Options.Format));}}]}; },
        statics: {
            fields: {
                one: "one",
                two: "two"
            }
        },
        $utype: System.String
    });
});
