/// <reference path="./bridge.d.ts" />

declare namespace N3208_TestModule.N3208_1_AndreyReview1 {
    interface N3208_TestModuleScope {
    }
    interface N3208_TestModuleScopeFunc extends Function {
        prototype: N3208_TestModuleScope;
        Welcomer: N3208_1_AndreyReview1.N3208_TestModuleScope.WelcomerFunc;
        new (): N3208_TestModuleScope;
    }
    var N3208_TestModuleScope: N3208_TestModuleScopeFunc;
    module N3208_TestModuleScope {
        interface Welcomer {
            Hello(name: string): void;
        }
        interface WelcomerFunc extends Function {
            prototype: Welcomer;
            new (): Welcomer;
        }
    }

}

declare module "N3208_TestModule" {
    export = N3208_TestModule;
}
