    Bridge.define("TestIssue958.IMessage", {
        $kind: "interface"
    });

    Bridge.define("TestIssue958.Issue958", {
        statics: {
            main1: function () {
                var message = new TestIssue958.SetValue("Hi!");
                TestIssue958.Issue958.processMessage(message);
            },
            processMessage: function (message) {
                // The call should have generic type as function parameter
                TestIssue958.MessageExtensions.if(TestIssue958.SetValue, TestIssue958.MessageExtensions.if(TestIssue958.SetName, message, $asm.$.TestIssue958.Issue958.f1), $asm.$.TestIssue958.Issue958.f2);
            }
        }
    });

    Bridge.ns("TestIssue958.Issue958", $asm.$);

    Bridge.apply($asm.$.TestIssue958.Issue958, {
        f1: function (action) {
            Bridge.Console.log(System.String.concat("Name: ", action.getName()));
        },
        f2: function (action) {
            Bridge.Console.log(System.String.concat("Value: ", action.getValue()));
        }
    });

    Bridge.define("TestIssue958.MessageExtensions", {
        statics: {
            if: function (T, source, work) {
                if (Bridge.is(source, T)) {
                    work(Bridge.cast(source, T));
                }
                return source;
            }
        }
    });

    Bridge.define("TestIssue958.SetName", {
        inherits: [TestIssue958.IMessage],
        config: {
            properties: {
                Name: null
            }
        },
        ctor: function (name) {
            this.$initialize();
            this.setName(name);
        }
    });

    Bridge.define("TestIssue958.SetValue", {
        inherits: [TestIssue958.IMessage],
        config: {
            properties: {
                Value: null
            }
        },
        ctor: function (value) {
            this.$initialize();
            this.setValue(value);
        }
    });
