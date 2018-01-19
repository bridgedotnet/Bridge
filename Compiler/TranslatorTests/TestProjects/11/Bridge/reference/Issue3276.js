Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Issue3276.Program", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Demo","is":true,"t":8,"pi":[{"n":"a","pt":System.Byte,"ps":0},{"n":"b","pt":System.Char,"ps":1},{"n":"c","pt":System.Decimal,"ps":2},{"n":"d","pt":System.Double,"ps":3},{"n":"e","pt":System.Int16,"ps":4},{"n":"f","pt":System.Int32,"ps":5},{"n":"g","pt":System.Int64,"ps":6},{"n":"h","pt":System.SByte,"ps":7},{"n":"i","pt":System.UInt16,"ps":8},{"n":"j","pt":System.UInt32,"ps":9},{"n":"k","pt":System.UInt64,"ps":10}],"sn":"Demo","rt":System.Void,"p":[System.Byte,System.Char,System.Decimal,System.Double,System.Int16,System.Int32,System.Int64,System.SByte,System.UInt16,System.UInt32,System.UInt64]}]}; },
        statics: {
            methods: {
                /**
                 * All except decimal (c), long (g) and ulong (k) should
                 imprint 'number' in the .d.ts file.
                 *
                 * @static
                 * @public
                 * @this Issue3276.Program
                 * @memberof Issue3276.Program
                 * @param   {number}            a    
                 * @param   {number}            b    
                 * @param   {System.Decimal}    c    
                 * @param   {number}            d    
                 * @param   {number}            e    
                 * @param   {number}            f    
                 * @param   {System.Int64}      g    
                 * @param   {number}            h    
                 * @param   {number}            i    
                 * @param   {number}            j    
                 * @param   {System.UInt64}     k
                 * @return  {void}
                 */
                Demo: function (a, b, c, d, e, f, g, h, i, j, k) {
                    return;
                }
            }
        }
    });
});
