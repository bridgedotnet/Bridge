    Bridge.define("TestIssue960.Example", {
        GetName: function GetName(x) {
            return x.TestIssue960$IHaveNamed$Name;
        }
    });

    Bridge.define("TestIssue960.IHaveNamed", {
        $kind: "interface"
    });

    Bridge.define("TestIssue960.Issue960", {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.Go);
                }
            },
            Go: function Go() {
                var x = new TestIssue960.Named("Test");
                // Should not contain generic type parameter
                Bridge.Console.log(new TestIssue960.Example().GetName(x));
            }
        },
        $entryPoint: true
    });

    Bridge.define("TestIssue960.Named", {
        inherits: [TestIssue960.IHaveNamed],
        config: {
            properties: {
                Name: null
            },
            alias: [
            "Name", "TestIssue960$IHaveNamed$Name"
            ]
        },
        ctor: function (name) {
            this.$initialize();
            this.Name = name;
        }
    });
