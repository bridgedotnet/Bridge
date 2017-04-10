    Bridge.define("TestIssue1050.App", {
        statics: {
            Field: 0,
            config: {
                properties: {
                    Property: 0
                }
            },
            Method: function Method() {
            }
        },
        Main1: function Main1() {
            // Should be TestIssue1050.App.Field = 1;
            TestIssue1050.App.Field = 1;

            // Should be TestIssue1050.App.Property = 2;
            TestIssue1050.App.Property = 2;

            // Should be TestIssue1050.App.Method();
            TestIssue1050.App.Method();
        }
    });
