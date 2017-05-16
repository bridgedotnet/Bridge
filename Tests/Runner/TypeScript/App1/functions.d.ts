/// <reference path="./bridge.d.ts" />

declare module Functions {
    export interface Delegates {
    }
    export interface DelegatesFunc extends Function {
        prototype: Delegates;
        new (): Delegates;
    }
    var Delegates: DelegatesFunc;

    export interface MiddleBit {
        fn: {(x: Functions.MiddleBit): Function};
    }
    export interface MiddleBitFunc extends Function {
        prototype: MiddleBit;
        new (): MiddleBit;
    }
    var MiddleBit: MiddleBitFunc;

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

    export interface DelegateClass {
        MethodVoidDelegate: {(): void};
        MethodStringDelegate: {(s: string): void};
        MethodStringDelegateIntResult: {(s: string): number};
    }
    export interface DelegateClassFunc extends Function {
        prototype: DelegateClass;
        new (): DelegateClass;
    }
    var DelegateClass: DelegateClassFunc;

    export interface Parameters {
        GetSomething(i?: number): number;
        Join(numbers: number[]): string;
    }
    export interface ParametersFunc extends Function {
        prototype: Parameters;
        new (): Parameters;
    }
    var Parameters: ParametersFunc;

}
