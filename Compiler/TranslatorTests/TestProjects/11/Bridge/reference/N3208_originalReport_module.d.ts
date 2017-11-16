/// <reference path="./bridge.d.ts" />

declare module "N3208_originalReport_module" {
    namespace N3208_0_originalReport {
        export interface Program {
        }
        export interface ProgramFunc extends Function {
            prototype: Program;
            new (): Program;
            Main(): void;
        }
        var Program: ProgramFunc;

    }

}

export = N3208_originalReport_module;
