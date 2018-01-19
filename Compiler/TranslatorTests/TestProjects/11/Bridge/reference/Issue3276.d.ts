/// <reference path="./bridge.d.ts" />

declare namespace Issue3276 {
    interface Program {
    }
    interface ProgramFunc extends Function {
        prototype: Program;
        new (): Program;
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
        Demo(a: number, b: number, c: System.Decimal, d: number, e: number, f: number, g: System.Int64, h: number, i: number, j: number, k: System.UInt64): void;
    }
    var Program: ProgramFunc;

}
