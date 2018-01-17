/// <reference path="./bridge.d.ts" />

declare namespace TestProject2 {
    interface TestClassB {
        Value1: number;
    }
    interface TestClassBFunc extends Function {
        prototype: TestClassB;
        new (): TestClassB;
    }
    var TestClassB: TestClassBFunc;
}