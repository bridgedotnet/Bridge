/// <reference path="./bridge.d.ts" />

export interface N2493Operation1 {
    add(n: number): number;
}
export interface N2493Operation1Func extends Function {
    prototype: N2493Operation1;
    new (): N2493Operation1;
}
var N2493Operation1: N2493Operation1Func;

export interface Operation2 {
    add(n: number): number;
}
export interface Operation2Func extends Function {
    prototype: Operation2;
    new (): Operation2;
}
var Operation2: Operation2Func;

