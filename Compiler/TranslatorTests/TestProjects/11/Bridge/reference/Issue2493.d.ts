/// <reference path="./bridge.d.ts" />

declare module Issue2493 {
    export interface Operation3 {
        Add(a: number, b: number): number;
    }
    export interface Operation3Func extends Function {
        prototype: Operation3;
        new (): Operation3;
    }
    var Operation3: Operation3Func;

}
