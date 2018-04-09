/// <reference path="./bridge.d.ts" />

declare namespace Issue3309 {
    /** @namespace Issue3309 */

    /**
     * This will check against output of non-public class members as reported
     in github issue bridgedotnet/Bridge#3309.
     *
     * @public
     * @class Issue3309.Program
     */
    interface Program {
        TestFieldPub: string;
        TestPropPub: string;
        TestMethodPub(): void;
    }
    interface ProgramFunc extends Function {
        prototype: Program;
        new (): Program;
    }
    var Program: ProgramFunc;

}
