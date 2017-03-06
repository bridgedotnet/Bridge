/// <reference path="./bridge.d.ts" />

declare module TypeScript.Issues {
    export interface N1060 {
    }
    export interface N1060Func extends Function {
        prototype: N1060;
        B$1: TypeScript.Issues.N1060.B$1Func;
        new (): N1060;
    }
    var N1060: N1060Func;
    module N1060 {
        export interface B$1<T> {
            getC(): TypeScript.Issues.N1060.B$1.C<T>;
        }
        export interface B$1Func extends Function {
            <T>($T: Bridge.TypeRef<T>): {
                prototype: B$1<T>;
                C: TypeScript.Issues.N1060.B$1.CFunc;
                new (): B$1<T>;
            }
        }
        module B$1 {
            export interface C<T> {
            }
            export interface CFunc extends Function {
                <T>($T: Bridge.TypeRef<T>): {
                    prototype: C<T>;
                    new (): C<T>;
                }
            }
        }
    }

    export interface N1640 {
    }
    export interface N1640Func extends Function {
        prototype: N1640;
        GamePlay: TypeScript.Issues.N1640.GamePlayFunc;
        new (): N1640;
    }
    var N1640: N1640Func;
    module N1640 {
        export interface GamePlay extends TypeScript.Issues.N1640.IGamePlay {
            addOnGameEvent(value: {(sender: System.Object, e: string): void}): void;
            removeOnGameEvent(value: {(sender: System.Object, e: string): void}): void;
            startGame(s: string): void;
            subscribe(handler: {(sender: System.Object, e: string): void}): void;
        }
        export interface GamePlayFunc extends Function {
            prototype: GamePlay;
            new (): GamePlay;
        }

        export interface IGamePlay {
            TypeScript$Issues$N1640$IGamePlay$addOnGameEvent(value: {(sender: System.Object, e: string): void}): void;
            TypeScript$Issues$N1640$IGamePlay$removeOnGameEvent(value: {(sender: System.Object, e: string): void}): void;
            addOnGameEvent(value: {(sender: System.Object, e: string): void}): void;
            removeOnGameEvent(value: {(sender: System.Object, e: string): void}): void;
            TypeScript$Issues$N1640$IGamePlay$startGame(s: string): void;
            startGame(s: string): void;
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

    export interface N2031DictionaryMap$2<T1,T2> {
        getForward(): TypeScript.Issues.N2031DictionaryMap$2.Indexer$2<T1,T2,T1,T2>;
        setForward(value: TypeScript.Issues.N2031DictionaryMap$2.Indexer$2<T1,T2,T1,T2>): void;
        getReverse(): TypeScript.Issues.N2031DictionaryMap$2.Indexer$2<T1,T2,T2,T1>;
        setReverse(value: TypeScript.Issues.N2031DictionaryMap$2.Indexer$2<T1,T2,T2,T1>): void;
        add(t1: T1, t2: T2): void;
    }
    export interface N2031DictionaryMap$2Func extends Function {
        <T1, T2>($T1: Bridge.TypeRef<T1>, $T2: Bridge.TypeRef<T2>): {
            prototype: N2031DictionaryMap$2<T1,T2>;
            Indexer$2: TypeScript.Issues.N2031DictionaryMap$2.Indexer$2Func;
            new (): N2031DictionaryMap$2<T1,T2>;
            ctor: {
                new (): N2031DictionaryMap$2<T1,T2>
            };
            $ctor1: {
                new (initialValues: System.Collections.Generic.KeyValuePair$2<T1,T2>[]): N2031DictionaryMap$2<T1,T2>
            };
        }
    }
    var N2031DictionaryMap$2: N2031DictionaryMap$2Func;
    module N2031DictionaryMap$2 {
        export interface Indexer$2<T1,T2,T3,T4> {
            getItem(index: T3): T4;
            setItem(index: T3, value: T4): void;
            containsKey(index: T3): boolean;
        }
        export interface Indexer$2Func extends Function {
            <T1, T2, T3, T4>($T1: Bridge.TypeRef<T1>, $T2: Bridge.TypeRef<T2>, $T3: Bridge.TypeRef<T3>, $T4: Bridge.TypeRef<T4>): {
                prototype: Indexer$2<T1,T2,T3,T4>;
                new (dictionary: System.Collections.Generic.Dictionary$2<T3,T4>): Indexer$2<T1,T2,T3,T4>;
            }
        }
    }

    export interface N2029 extends TypeScript.Issues.N2029Interface$1<number> {
        getValue1(): number;
        setValue1(value: number): void;
    }
    export interface N2029Func extends Function {
        prototype: N2029;
        new (): N2029;
    }
    var N2029: N2029Func;

    export interface N2030Attribute extends System.Attribute {
        getIsUnspecified(): boolean;
    }
    export interface N2030AttributeFunc extends Function {
        prototype: N2030Attribute;
        new (IsUnspecified: boolean): N2030Attribute;
    }
    var N2030Attribute: N2030AttributeFunc;

    export interface N2029Interface$1<T> {
        getValue1(): number;
        setValue1(value: number): void;
    }

}