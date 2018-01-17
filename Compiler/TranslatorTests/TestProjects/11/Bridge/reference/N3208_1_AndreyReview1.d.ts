/// <reference path="./bridge.d.ts" />

declare namespace N3208_1_AndreyReview1 {
    interface App {
    }
    interface AppFunc extends Function {
        prototype: App;
        new (): App;
        Main(): void;
    }
    var App: AppFunc;

}
