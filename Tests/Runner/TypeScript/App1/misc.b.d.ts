/// <reference path="./bridge.d.ts" />/// <reference path="./misc.a.d.ts" />

declare module Misc.B {
    export interface Class2 extends Misc.A.Class1 {
    }
    export interface Class2Func extends Function {
        prototype: Class2;
        new (): Class2;
    }
    var Class2: Class2Func;

}
