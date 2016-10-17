/// <reference path="./bridge.d.ts" />

declare module TestProject2 {
    export interface TestClassB {
        getValue1(): number;
        setValue1(value: number): void;
    }
    export interface TestClassBFunc extends Function {
        prototype: TestClassB;
        new (): TestClassB;
    }
    var TestClassB: TestClassBFunc;
}