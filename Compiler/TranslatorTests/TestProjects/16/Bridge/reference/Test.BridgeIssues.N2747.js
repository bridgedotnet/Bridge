Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N2747.N2747", {
        statics: {
            methods: {
                Output: function () {
                    var inputElement = document.createElement("input");
                    var file = Bridge.cast(inputElement.files, FileList)[0.0];
                }
            }
        }
    });
});
