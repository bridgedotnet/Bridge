/// <reference path="./bridge.d.ts" />

declare namespace TestProject1 {
    interface TestClassA {
        Value1: number;
    }
    interface TestClassAFunc extends Function {
        prototype: TestClassA;
        new (): TestClassA;
    }
    var TestClassA: TestClassAFunc;

}
