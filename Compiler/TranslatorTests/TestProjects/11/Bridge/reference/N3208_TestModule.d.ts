/// <reference path="./bridge.d.ts" />

declare namespace N3208_TestModule.N3208_1_AndreyReview1 {
    export interface N3208_TestModuleScope {
    }
    export interface N3208_TestModuleScopeFunc extends Function {
        prototype: N3208_TestModuleScope;
        Welcomer: N3208_1_AndreyReview1.N3208_TestModuleScope.WelcomerFunc;
        new (): N3208_TestModuleScope;
    }
    var N3208_TestModuleScope: N3208_TestModuleScopeFunc;
    module N3208_TestModuleScope {
        export interface Welcomer {
            Hello(name: string): void;
        }
        export interface WelcomerFunc extends Function {
            prototype: Welcomer;
            new (): Welcomer;
        }
    }

}

declare module "N3208_TestModule" {
    export = N3208_TestModule;
}
