    Bridge.define("TestIssue960.Example", {
        methods: {
            GetName: function GetName (x) {
                return x.TestIssue960$IHaveNamed$Name;
            }
        }
    });

    Bridge.define("TestIssue960.IHaveNamed", {
        $kind: "interface"
    });

    Bridge.define("TestIssue960.Issue960", {
        statics: {
            ctors: {
                init: function () {
                    Bridge.ready(this.Go);
                }
            },
            methods: {
                Go: function Go () {
                    var x = new TestIssue960.Named("Test");
                    // Should not contain generic type parameter
                    System.Console.WriteLine(new TestIssue960.Example().GetName(x));
                }
            }
        },
        $entryPoint: true
    });

    Bridge.define("TestIssue960.Named", {
        inherits: [TestIssue960.IHaveNamed],
        props: {
            Name: null
        },
        alias: ["Name", "TestIssue960$IHaveNamed$Name"],
        ctors: {
            ctor: function (name) {
                this.$initialize();
                this.Name = name;
            }
        }
    });
