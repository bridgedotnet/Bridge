/// <reference path="./bridge.d.ts" />

interface N2493Operation1 {
    Add(n: number): number;
}
interface N2493Operation1Func extends Function {
    prototype: N2493Operation1;
    new (): N2493Operation1;
}
declare var N2493Operation1: N2493Operation1Func;

interface Operation2 {
    Add(n: number): number;
}
interface Operation2Func extends Function {
    prototype: Operation2;
    new (): Operation2;
}
declare var Operation2: Operation2Func;

