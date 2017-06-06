/// <reference path="./bridge.d.ts" />

declare module IntegrationTest08 {
    export interface Class1 {
        GetName(): string;
    }
    export interface Class1Func extends Function {
        prototype: Class1;
        new (): Class1;
    }
    var Class1: Class1Func;
}
