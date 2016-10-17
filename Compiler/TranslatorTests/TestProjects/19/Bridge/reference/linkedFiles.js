Bridge.assembly({
        name: "TestProject",
        compiler: "15.3.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("LinkedFiles.Issue531Link1");

        Bridge.define("LinkedFiles.Issue531Link2");

        Bridge.define("LinkedFiles.Issue531Link3");

        Bridge.define("LinkedFiles.Issue531Link4");
    }
);
