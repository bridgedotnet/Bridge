/// <reference path="./bridge.d.ts" />

declare namespace Misc.A {
    interface Class1 {
        GetInt(i: number): number;
    }
    interface Class1Func extends Function {
        prototype: Class1;
        new (): Class1;
    }
    var Class1: Class1Func;

    interface EnumTest {
        DoSomething(m: number): number;
    }
    interface EnumTestFunc extends Function {
        prototype: EnumTest;
        EnumA: EnumTest.EnumAFunc;
        new (): EnumTest;
    }
    var EnumTest: EnumTestFunc;
    module EnumTest {
        interface EnumA {
        }
        interface EnumAFunc extends Function {
            prototype: EnumA;
            M1: number;
            M2: number;
        }
    }

}
