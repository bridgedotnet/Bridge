/// <reference path="./bridge.d.ts" />

export interface Operation {
    add(a: number, b: number): number;
}
export interface OperationFunc extends Function {
    prototype: Operation;
    new (): Operation;
}
var Operation: OperationFunc;

export interface o2 {
    add(a: number, b: number): number;
}
export interface o2Func extends Function {
    prototype: o2;
    new (): o2;
}
var o2: o2Func;

