/// <reference path="./bridge.d.ts" />

declare module TestProject1 {
    export interface TestClassA {
        getValue1(): number;
        setValue1(value: number): void;
    }
    export interface TestClassAFunc extends Function {
        prototype: TestClassA;
        new (): TestClassA;
    }
    var TestClassA: TestClassAFunc;

}
