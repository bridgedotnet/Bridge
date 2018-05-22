Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    /** @namespace Test.BridgeIssues.N3592 */

    /**
     * #3592 ensure System.Diagnostics.Debugger.Break() actually just adds a
     'debugger;' call instead of doing so within another method, ensuring
     the code should stop (on browsers supporting the 'debugger' directive)
     on the line debugger is called and not within a helper function.
     *
     * @public
     * @class Test.BridgeIssues.N3592.N3592
     */
    Bridge.define("Test.BridgeIssues.N3592.N3592", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"TestBreakOutput","is":true,"t":8,"sn":"TestBreakOutput","rt":System.Void}]}; },
        statics: {
            methods: {
                /**
                 * Just call Break() and ensure its output is just 'debugger;' in the
                 output javascript code.
                 *
                 * @static
                 * @public
                 * @this Test.BridgeIssues.N3592.N3592
                 * @memberof Test.BridgeIssues.N3592.N3592
                 * @return  {void}
                 */
                TestBreakOutput: function () {
                    // We expect here to have just: debugger;
                    debugger;
                }
            }
        }
    });
});
