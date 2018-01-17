/// <reference path="./bridge.d.ts" />

declare namespace Issue2493 {
    interface Operation3 {
        Add(a: number, b: number): number;
    }
    interface Operation3Func extends Function {
        prototype: Operation3;
        new (): Operation3;
    }
    var Operation3: Operation3Func;

}
