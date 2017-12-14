/// <reference path="./bridge.d.ts" />

declare namespace Issue3278 {
    /** @namespace Issue3278 */

    /**
     * This will check against multiple properties output to typescript file
     while AutoProperty rule is set to 'plain' as reported in github issue
     bridgedotnet/Bridge#3278
     *
     * @public
     * @class Issue3278.Program
     */
    export interface Program {
        TestProp: string;
    }
    export interface ProgramFunc extends Function {
        prototype: Program;
        new (): Program;
    }
    var Program: ProgramFunc;

}
