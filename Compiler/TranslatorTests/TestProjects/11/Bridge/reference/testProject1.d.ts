/// <reference path="./bridge.d.ts" />

declare module TestProject1 {
    export interface TestClassA {
        Value1: number;
    }
    export interface TestClassAFunc extends Function {
        prototype: TestClassA;
        new (): TestClassA;
    }
    var TestClassA: TestClassAFunc;

}
