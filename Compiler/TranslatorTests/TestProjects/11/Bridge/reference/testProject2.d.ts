/// <reference path="./bridge.d.ts" />

declare module TestProject2 {
    export interface TestClassB {
        Value1: number;
    }
    export interface TestClassBFunc extends Function {
        prototype: TestClassB;
        new (): TestClassB;
    }
    var TestClassB: TestClassBFunc;
}