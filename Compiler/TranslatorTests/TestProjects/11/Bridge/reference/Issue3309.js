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
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"TestMethodPriv","t":8,"sn":"TestMethodPriv","rt":System.Void},{"a":3,"n":"TestMethodProt","t":8,"sn":"TestMethodProt","rt":System.Void},{"a":2,"n":"TestMethodPub","t":8,"sn":"TestMethodPub","rt":System.Void},{"a":1,"n":"TestPropPriv","t":16,"rt":System.String,"g":{"a":1,"n":"get_TestPropPriv","t":8,"rt":System.String,"fg":"TestPropPriv"},"fn":"TestPropPriv"},{"a":3,"n":"TestPropProt","t":16,"rt":System.String,"g":{"a":3,"n":"get_TestPropProt","t":8,"rt":System.String,"fg":"TestPropProt"},"fn":"TestPropProt"},{"a":2,"n":"TestPropPub","t":16,"rt":System.String,"g":{"a":2,"n":"get_TestPropPub","t":8,"rt":System.String,"fg":"TestPropPub"},"fn":"TestPropPub"},{"a":1,"n":"TestFieldPriv","t":4,"rt":System.String,"sn":"TestFieldPriv"},{"a":3,"n":"TestFieldProt","t":4,"rt":System.String,"sn":"TestFieldProt"},{"a":2,"n":"TestFieldPub","t":4,"rt":System.String,"sn":"TestFieldPub"}]}; },
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
