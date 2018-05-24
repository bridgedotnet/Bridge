Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    /** @namespace Test.BridgeIssues.N3587 */

    /**
     * #3587 - Ensure that metadata file does not contain syntax errors in
     case a class referencing the GlobalMethods attribute is present.
     *
     * @public
     * @class Test.BridgeIssues.N3587.N3587
     */
    Bridge.define("Test.BridgeIssues.N3587.N3587", {
        $metadata : function () { return {"nested":[Bridge.global],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });

    /**
     * Simple class just referencing the attribute. It is expected the
     metadata for the file to be valid.
     The error that incurred in this test case was because it had an
     invalid "td:" field, without any value (not null nor empty).
     *
     * @static
     * @abstract
     * @public
     * @class Test.BridgeIssues.N3587.N3587.Global
     */
    Bridge.apply(Bridge.global, {

    });

    Bridge.define("Test", {
        $kind: "nested class",
        $metadata : function () { return {"td":Bridge.global,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });
});
