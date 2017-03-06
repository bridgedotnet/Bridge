/// <reference path="./bridge.d.ts" />

declare module Functions {
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
        Functions$DelegateInterface$addMethodVoidDelegate(value: {(): void}): void;
        Functions$DelegateInterface$removeMethodVoidDelegate(value: {(): void}): void;
        addMethodVoidDelegate(value: {(): void}): void;
        removeMethodVoidDelegate(value: {(): void}): void;
        Functions$DelegateInterface$addMethodStringDelegate(value: {(s: string): void}): void;
        Functions$DelegateInterface$removeMethodStringDelegate(value: {(s: string): void}): void;
        addMethodStringDelegate(value: {(s: string): void}): void;
        removeMethodStringDelegate(value: {(s: string): void}): void;
        Functions$DelegateInterface$addMethodStringDelegateIntResult(value: {(s: string): number}): void;
        Functions$DelegateInterface$removeMethodStringDelegateIntResult(value: {(s: string): number}): void;
        addMethodStringDelegateIntResult(value: {(s: string): number}): void;
        removeMethodStringDelegateIntResult(value: {(s: string): number}): void;
    }

    export interface Delegates {
    }
    export interface DelegatesFunc extends Function {
        prototype: Delegates;
        new (): Delegates;
    }
    var Delegates: DelegatesFunc;

    export interface Parameters {
        getSomething(i?: number): number;
        join(numbers: number[]): string;
    }
    export interface ParametersFunc extends Function {
        prototype: Parameters;
        new (): Parameters;
    }
    var Parameters: ParametersFunc;

}
