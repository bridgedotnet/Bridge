    Bridge.define("TestIssue2140.Bridge2140", {
        statics: {
            methods: {
                Test: function Test () {
                    // #2140 Enum value (number) is emitted for '[Enum(Emit.Name)]' attribute

                    // Should be Value1
                    var a1 = TestIssue2140.EnumName.value1;
                    var a2 = TestIssue2140.EnumName.value1;

                    // Should be number
                    var b1 = 1;
                    var b2 = 1;
                }
            }
        }
    });

    Bridge.define("TestIssue2140.EnumName", {
        $kind: "enum",
        statics: {
            fields: {
                value1: 1
            }
        }
    });

    Bridge.define("TestIssue2140.EnumValue", {
        $kind: "enum",
        statics: {
            fields: {
                Value1: 1
            }
        }
    });
