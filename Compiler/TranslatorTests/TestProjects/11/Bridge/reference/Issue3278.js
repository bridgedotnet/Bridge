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
        fields: {
            TestProp: null
        }
    });
});
