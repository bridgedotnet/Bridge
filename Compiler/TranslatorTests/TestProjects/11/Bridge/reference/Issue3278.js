Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    /** @namespace Issue3278 */

    /**
     * This will check against multiple properties output to typescript file
     while AutoProperty rule is set to 'plain' as reported in github issue
     bridgedotnet/Bridge#3278
     *
     * @public
     * @class Issue3278.Program
     */
    Bridge.define("Issue3278.Program", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"TestProp","t":16,"rt":System.String,"g":{"a":2,"n":"get_TestProp","t":8,"rt":System.String,"fg":"TestProp"},"fn":"TestProp"}]}; },
        fields: {
            TestProp: null
        }
    });
});
