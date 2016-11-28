    Bridge.define("TestIssue599.Issue599", {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.main1);
                }
            },
            main1: function () {
                Bridge.Console.log(new TestIssue599.Issue599()._something);
            }
        },
        $entryPoint: true,
        _something: "HI!"
    });
