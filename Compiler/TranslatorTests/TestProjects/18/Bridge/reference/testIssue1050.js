    Bridge.define("TestIssue1050.App", {
        statics: {
            fields: {
                Field: 0
            },
            props: {
                Property: 0
            },
            methods: {
                Method: function Method () { }
            }
        },
        methods: {
            Main1: function Main1 () {
                // Should be TestIssue1050.App.Field = 1;
                TestIssue1050.App.Field = 1;

                // Should be TestIssue1050.App.Property = 2;
                TestIssue1050.App.Property = 2;

                // Should be TestIssue1050.App.Method();
                TestIssue1050.App.Method();
            }
        }
    });
