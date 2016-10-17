/**
 * Bridge Test library for TypeScript.
 * @version 15.3.0
 * @author Object.NET, Inc.
 */
Bridge.assembly({
        name: "TypeScriptTest",
        version: "15.3.0",
        compiler: "15.3.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Misc.B.Class2", {
            inherits: [Misc.A.Class1]
        });
    }
);
