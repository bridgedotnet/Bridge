    Bridge.define("TestIssue599.Issue599", {
        statics: {
            ctors: {
                init: function () {
                    Bridge.ready(this.Main1);
                }
            },
            methods: {
                Main1: function Main1() {
                    Bridge.Console.log(new TestIssue599.Issue599()._something);
                }
            }
        },
        $entryPoint: true,
        fields: {
            _something: "HI!"
        }
    });
