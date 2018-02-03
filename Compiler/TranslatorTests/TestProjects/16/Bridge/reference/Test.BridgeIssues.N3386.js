Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    /** @namespace Test.BridgeIssues.N3386 */

    /**
     * #3386 - the test here consists in checking whether a method with
     default parameter values as float/double NaN can be built.
     *
     * @public
     * @class Test.BridgeIssues.N3386.N3386
     */
    Bridge.define("Test.BridgeIssues.N3386.N3386", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ConstantCompTime","is":true,"t":8,"pi":[{"n":"fn","dv":"NaN","o":true,"pt":System.Single,"ps":0},{"n":"fpi","dv":"Infinity","o":true,"pt":System.Single,"ps":1},{"n":"fni","dv":"-Infinity","o":true,"pt":System.Single,"ps":2},{"n":"dpi","dv":"Infinity","o":true,"pt":System.Double,"ps":3},{"n":"dni","dv":"-Infinity","o":true,"pt":System.Double,"ps":4}],"sn":"ConstantCompTime","rt":System.Void,"p":[System.Single,System.Single,System.Single,System.Double,System.Double]},{"a":2,"n":"ConstantNaN","is":true,"t":8,"pi":[{"n":"d","dv":"NaN","o":true,"pt":System.Double,"ps":0}],"sn":"ConstantNaN","rt":System.Void,"p":[System.Double]}]}; },
        statics: {
            methods: {
                /**
                 * Basic test according with the issue report.
                 *
                 * @static
                 * @public
                 * @this Test.BridgeIssues.N3386.N3386
                 * @memberof Test.BridgeIssues.N3386.N3386
                 * @param   {number}    d    Double variable with default NaN.
                 * @return  {void}
                 */
                ConstantNaN: function (d) {
                    if (d === void 0) { d = NaN; }
                },
                /**
                 * Additional constants that fell in the same scenario and needed
                 to be fixed, for double and float.
                 *
                 * @static
                 * @public
                 * @this Test.BridgeIssues.N3386.N3386
                 * @memberof Test.BridgeIssues.N3386.N3386
                 * @param   {number}    fn     Float variable with default NaN.
                 * @param   {number}    fpi    Float variable with default +∞.
                 * @param   {number}    fni    Float variable with default -∞.
                 * @param   {number}    dpi    Double variable with default +∞.
                 * @param   {number}    dni    Double variable with default -∞.
                 * @return  {void}
                 */
                ConstantCompTime: function (fn, fpi, fni, dpi, dni) {
                    if (fn === void 0) { fn = NaN; }
                    if (fpi === void 0) { fpi = Infinity; }
                    if (fni === void 0) { fni = -Infinity; }
                    if (dpi === void 0) { dpi = Infinity; }
                    if (dni === void 0) { dni = -Infinity; }
                }
            }
        }
    });
});
