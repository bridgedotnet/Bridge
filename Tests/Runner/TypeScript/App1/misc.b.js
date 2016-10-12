Bridge.assembly({
        name: "TypeScriptTest",
        version: "15.2.0",
        compiler: "15.2.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Misc.B.Class2", {
            inherits: [Misc.A.Class1]
        });
    }
);
