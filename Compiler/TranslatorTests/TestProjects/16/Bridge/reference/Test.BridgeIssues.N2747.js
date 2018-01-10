Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N2747.N2747", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Output","is":true,"t":8,"sn":"Output","rt":System.Void}]}; },
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
