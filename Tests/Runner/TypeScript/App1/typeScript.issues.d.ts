/// <reference path="./bridge.d.ts" />

declare module TypeScript.Issues {
    export interface N2029Interface$1<T> {
        getValue1(): number;
        setValue1(value: number): void;
    }
    export function N2029Interface$1<T>($T: Bridge.TypeRef<T>): {
        prototype: N2029Interface$1<T>;
    }

    export interface N2030Attribute extends System.Attribute {
        getIsUnspecified(): boolean;
    }
    export interface N2030AttributeFunc extends Function {
        prototype: N2030Attribute;
        new (IsUnspecified: boolean): N2030Attribute;
    }
    var N2030Attribute: N2030AttributeFunc;

    export interface N2029 extends TypeScript.Issues.N2029Interface$1<number> {
        getValue1(): number;
        setValue1(value: number): void;
    }
    export interface N2029Func extends Function {
        prototype: N2029;
        new (): N2029;
    }
    var N2029: N2029Func;

    export interface N2031DictionaryMap$2<T1,T2> {
        getForward(): TypeScript.Issues.N2031DictionaryMap$2.Indexer$2<T1,T2,T1,T2>;
        setForward(value: TypeScript.Issues.N2031DictionaryMap$2.Indexer$2<T1,T2,T1,T2>): void;
        getReverse(): TypeScript.Issues.N2031DictionaryMap$2.Indexer$2<T1,T2,T2,T1>;
        setReverse(value: TypeScript.Issues.N2031DictionaryMap$2.Indexer$2<T1,T2,T2,T1>): void;
        add(t1: T1, t2: T2): void;
    }
    export function N2031DictionaryMap$2<T1,T2>($T1: Bridge.TypeRef<T1>, $T2: Bridge.TypeRef<T2>): {
        prototype: N2031DictionaryMap$2<T1,T2>;
        new (): N2031DictionaryMap$2<T1,T2>;
        ctor: {
            new (): N2031DictionaryMap$2<T1,T2>
        };
        $ctor1: {
            new (initialValues: System.Collections.Generic.KeyValuePair$2<T1,T2>[]): N2031DictionaryMap$2<T1,T2>
        };
    }
    module N2031DictionaryMap$2 {
        export interface Indexer$2<T1,T2,T3,T4> {
            getItem(index: T3): T4;
            setItem(index: T3, value: T4): void;
            containsKey(index: T3): boolean;
        }
        export function Indexer$2<T1,T2,T3,T4>($T1: Bridge.TypeRef<T1>, $T2: Bridge.TypeRef<T2>, $T3: Bridge.TypeRef<T3>, $T4: Bridge.TypeRef<T4>): {
            prototype: Indexer$2<T1,T2,T3,T4>;
            new (dictionary: System.Collections.Generic.Dictionary$2<T3,T4>): Indexer$2<T1,T2,T3,T4>;
        }
    }

    export interface N2438 {
        isDefaultCtor: boolean;
        getAttribute(): number;
        setAttribute(value: number): void;
    }
    export interface N2438Func extends Function {
        prototype: N2438;
        new (): N2438;
        ctor: {
            new (): N2438
        };
        $ctor1: {
            new (arg: number): N2438
        };
    }
    var N2438: N2438Func;

    export interface N2264 {
        getValues(): System.Collections.Generic.IEnumerable$1<string>;
        setValues(value: System.Collections.Generic.IEnumerable$1<string>): void;
    }
    export interface N2264Func extends Function {
        prototype: N2264;
        new (queryParameters: System.Collections.Generic.IEnumerable$1<string>): N2264;
    }
    var N2264: N2264Func;
}