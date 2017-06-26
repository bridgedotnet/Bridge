    Bridge.define("TestIssue958.IMessage", {
        $kind: "interface"
    });

    Bridge.define("TestIssue958.Issue958", {
        statics: {
            methods: {
                Main1: function Main1 () {
                    var message = new TestIssue958.SetValue("Hi!");
                    TestIssue958.Issue958.ProcessMessage(message);
                },
                ProcessMessage: function ProcessMessage (message) {
                    // The call should have generic type as function parameter
                    TestIssue958.MessageExtensions.If(TestIssue958.SetValue, TestIssue958.MessageExtensions.If(TestIssue958.SetName, message, $asm.$.TestIssue958.Issue958.f1), $asm.$.TestIssue958.Issue958.f2);
                }
            }
        }
    });

    Bridge.ns("TestIssue958.Issue958", $asm.$);

    Bridge.apply($asm.$.TestIssue958.Issue958, {
        f1: function (action) {
            System.Console.WriteLine(System.String.concat("Name: ", action.Name));
        },
        f2: function (action) {
            System.Console.WriteLine(System.String.concat("Value: ", action.Value));
        }
    });

    Bridge.define("TestIssue958.MessageExtensions", {
        statics: {
            methods: {
                If: function If (T, source, work) {
                    if (Bridge.is(source, T)) {
                        work(Bridge.cast(Bridge.unbox(source), T));
                    }
                    return source;
                }
            }
        }
    });

    Bridge.define("TestIssue958.SetName", {
        inherits: [TestIssue958.IMessage],
        props: {
            Name: null
        },
        ctors: {
            ctor: function (name) {
                this.$initialize();
                this.Name = name;
            }
        }
    });

    Bridge.define("TestIssue958.SetValue", {
        inherits: [TestIssue958.IMessage],
        props: {
            Value: null
        },
        ctors: {
            ctor: function (value) {
                this.$initialize();
                this.Value = value;
            }
        }
    });
