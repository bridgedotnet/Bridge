    Bridge.define("TestIssue599.Issue599", {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.Main1);
                }
            },
            Main1: function Main1() {
                System.Console.WriteLine(new TestIssue599.Issue599()._something);
            }
        },
        $entryPoint: true,
        _something: "HI!"
    });
