Bridge.initAssembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define('TestIssue1050.App', {
        statics: {
            field: 0,
            config: {
                properties: {
                    Property: 0
                }
            },
            method: function () {
            }
        },
        main1: function () {
            // Should be TestIssue1050.App.something = 1;
            TestIssue1050.App.field = 1;

            // Should be TestIssue1050.App.setProperty(2);
            TestIssue1050.App.setProperty(2);

            // Should be TestIssue1050.App.method();
            TestIssue1050.App.method();
        }
    });

    Bridge.init();
});
