/// <reference path="./bridge.d.ts" />

declare namespace Functions {
    interface Parameters {
        GetSomething(i?: number): number;
        Join(numbers: number[]): string;
    }
    interface ParametersFunc extends Function {
        prototype: Parameters;
        new (): Parameters;
    }
    var Parameters: ParametersFunc;

    interface Delegates {
    }
    interface DelegatesFunc extends Function {
        prototype: Delegates;
        new (): Delegates;
    }
    var Delegates: DelegatesFunc;

    interface DelegateInterface {
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

    interface DelegateClass {
        MethodVoidDelegate: {(): void};
        MethodStringDelegate: {(s: string): void};
        MethodStringDelegateIntResult: {(s: string): number};
    }
    interface DelegateClassFunc extends Function {
        prototype: DelegateClass;
        new (): DelegateClass;
    }
    var DelegateClass: DelegateClassFunc;

    interface MiddleBit {
        fn: {(x: Functions.MiddleBit): Function};
    }
    interface MiddleBitFunc extends Function {
        prototype: MiddleBit;
        new (): MiddleBit;
    }
    var MiddleBit: MiddleBitFunc;

}
