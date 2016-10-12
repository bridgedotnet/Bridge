Bridge.assembly({
        name: "TestProject",
        version: "1.0.0-beta",
        compiler: "15.2.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("LinkedFiles.Issue531Link1");

        Bridge.define("LinkedFiles.Issue531Link2");

        Bridge.define("LinkedFiles.Issue531Link3");

        Bridge.define("LinkedFiles.Issue531Link4");
    }
);
