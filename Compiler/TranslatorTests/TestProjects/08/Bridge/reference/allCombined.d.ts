/// <reference path="./bridge.d.ts" />

declare namespace IntegrationTest08 {
    interface Class1 {
        GetName(): string;
    }
    interface Class1Func extends Function {
        prototype: Class1;
        new (): Class1;
    }
    var Class1: Class1Func;
}
