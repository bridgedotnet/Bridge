/// <reference path="./bridge.d.ts" />

declare module Functions {
    export interface Parameters {
        getSomething(i?: number): number;
        join(numbers: number[]): string;
    }
    export interface ParametersFunc extends Function {
        prototype: Parameters;
        new (): Parameters;
    }
    var Parameters: ParametersFunc;

    export interface Delegates {
    }
    export interface DelegatesFunc extends Function {
        prototype: Delegates;
        new (): Delegates;
    }
    var Delegates: DelegatesFunc;

    export interface DelegateClass {
        methodVoidDelegate: {(): void};
        methodStringDelegate: {(s: string): void};
        methodStringDelegateIntResult: {(s: string): number};
    }
    export interface DelegateClassFunc extends Function {
        prototype: DelegateClass;
        new (): DelegateClass;
    }
    var DelegateClass: DelegateClassFunc;

    export interface DelegateInterface {
    }
    var DelegateInterface: Function;

}
