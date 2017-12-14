Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Issue3276.Program", {
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
