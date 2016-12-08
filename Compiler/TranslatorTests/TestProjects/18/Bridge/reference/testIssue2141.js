    Bridge.define("TestIssue2141.Bridge2141", {
        statics: {
            test: function () {
                // #2141 Skip writing type information to [External] [ObjectLiteral]
                // These below should NOT contain Bridge.literal call
                var config1 = { name: "external1" };

                var config2 = { id: 2, name: "external2" };

                // These below should contain Bridge.literal call
                var config3 = TestIssue2141.ConfigPlain.ctor({ name: "plain3" });

                var config4 = TestIssue2141.ConfigPlain.ctor({ id: 4, name: "plain4" });
            }
        }
    });

    Bridge.define("TestIssue2141.ConfigPlain", {
        $literal: true
    });
