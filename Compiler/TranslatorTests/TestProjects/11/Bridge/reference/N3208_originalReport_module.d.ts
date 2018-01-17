/// <reference path="./bridge.d.ts" />

declare module "N3208_originalReport_module" {
    namespace N3208_0_originalReport {
        /** @namespace N3208_0_originalReport */

        /**
         * This differs from the original report on the issue because this does
         not use an UMD module output (which is used in the next test case for
         this same issue. The only difference applied here is, the module name
         will be output between double quotes.
         *
         * @public
         * @class N3208_0_originalReport.Program
         */
        interface Program {
        }
        interface ProgramFunc extends Function {
            prototype: Program;
            new (): Program;
            Main(): void;
        }
        var Program: ProgramFunc;

    }

}
