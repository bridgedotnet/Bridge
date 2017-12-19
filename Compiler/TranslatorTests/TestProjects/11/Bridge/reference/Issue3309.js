Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    /** @namespace Issue3309 */

    /**
     * This will check against output of non-public class members as reported
     in github issue bridgedotnet/Bridge#3309.
     *
     * @public
     * @class Issue3309.Program
     */
    Bridge.define("Issue3309.Program", {
        fields: {
            TestFieldPub: null,
            TestFieldProt: null,
            TestFieldPriv: null
        },
        props: {
            TestPropPub: null,
            TestPropProt: null,
            TestPropPriv: null
        },
        ctors: {
            init: function () {
                this.TestFieldPub = "public";
                this.TestFieldProt = "protected";
                this.TestFieldPriv = "private";
            }
        },
        methods: {
            TestMethodPub: function () { },
            TestMethodProt: function () { },
            TestMethodPriv: function () { }
        }
    });
});
