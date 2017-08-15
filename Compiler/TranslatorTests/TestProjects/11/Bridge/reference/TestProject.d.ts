/// <reference path="./bridge.d.ts" />

interface Operation {
    Add(a: number, b: number): number;
}
interface OperationFunc extends Function {
    prototype: Operation;
    new (): Operation;
}
declare var Operation: OperationFunc;

interface o2 {
    Add(a: number, b: number): number;
}
interface o2Func extends Function {
    prototype: o2;
    new (): o2;
}
declare var o2: o2Func;

