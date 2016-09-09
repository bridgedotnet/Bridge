    Bridge.define('TestIssue960.Example', {
        getName: function (x) {
            return x.TestIssue960$IHaveNamed$getName();
        }
    });

    Bridge.define('TestIssue960.IHaveNamed', {
        $kind: "interface"
    });

    Bridge.define('TestIssue960.Issue960', {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.go);
                }
            },
            go: function () {
                var x = new TestIssue960.Named("Test");
                // Should not contain generic type parameter
                Bridge.Console.log(new TestIssue960.Example().getName(x));
            }
        },
        $entryPoint: true
    });

    Bridge.define('TestIssue960.Named', {
        inherits: [TestIssue960.IHaveNamed],
        config: {
            properties: {
                Name: null
            },
            alias: [
            "getName", "TestIssue960$IHaveNamed$getName",
            "setName", "TestIssue960$IHaveNamed$setName"
            ]
        },
        ctor: function (name) {
            this.$initialize();
            this.setName(name);
        }
    });
