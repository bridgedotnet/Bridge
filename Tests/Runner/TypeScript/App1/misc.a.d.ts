/// <reference path="./bridge.d.ts" />

declare module Misc.A {
    export interface EnumTest {
        doSomething(m: number): number;
    }
    export interface EnumTestFunc extends Function {
        prototype: EnumTest;
        EnumA: EnumTest.EnumAFunc;
        new (): EnumTest;
    }
    var EnumTest: EnumTestFunc;
    module EnumTest {
        export interface EnumA {
        }
        export interface EnumAFunc extends Function {
            prototype: EnumA;
            M1: number;
            M2: number;
        }
    }

    export interface Class1 {
        getInt(i: number): number;
    }
    export interface Class1Func extends Function {
        prototype: Class1;
        new (): Class1;
    }
    var Class1: Class1Func;

}
