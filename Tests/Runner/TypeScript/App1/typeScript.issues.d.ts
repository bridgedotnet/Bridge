/// <reference path="./bridge.d.ts" />

declare namespace TypeScript.Issues {
    interface N1640 {
    }
    interface N1640Func extends Function {
        prototype: N1640;
        GamePlay: TypeScript.Issues.N1640.GamePlayFunc;
        new (): N1640;
    }
    var N1640: N1640Func;
    module N1640 {
        interface GamePlay extends TypeScript.Issues.N1640.IGamePlay {
            addOnGameEvent(value: {(sender: any, e: string): void}): void;
            removeOnGameEvent(value: {(sender: any, e: string): void}): void;
            StartGame(s: string): void;
            Subscribe(handler: {(sender: any, e: string): void}): void;
        }
        interface GamePlayFunc extends Function {
            prototype: GamePlay;
            new (): GamePlay;
        }

        interface IGamePlay {
            TypeScript$Issues$N1640$IGamePlay$addOnGameEvent(value: {(sender: any, e: string): void}): void;
            TypeScript$Issues$N1640$IGamePlay$removeOnGameEvent(value: {(sender: any, e: string): void}): void;
            addOnGameEvent(value: {(sender: any, e: string): void}): void;
            removeOnGameEvent(value: {(sender: any, e: string): void}): void;
            TypeScript$Issues$N1640$IGamePlay$StartGame(s: string): void;
            StartGame(s: string): void;
        }
    }

    interface N1060 {
    }
    interface N1060Func extends Function {
        prototype: N1060;
        B$1: TypeScript.Issues.N1060.B$1Func;
        new (): N1060;
    }
    var N1060: N1060Func;
    module N1060 {
        interface B$1<T> {
            GetC(): TypeScript.Issues.N1060.B$1.C<T>;
        }
        interface B$1Func extends Function {
            <T>($T: Bridge.TypeRef<T>): {
                prototype: B$1<T>;
                C: TypeScript.Issues.N1060.B$1.CFunc;
                new (): B$1<T>;
            }
        }
        module B$1 {
            interface C<T> {
            }
            interface CFunc extends Function {
                <T>($T: Bridge.TypeRef<T>): {
                    prototype: C<T>;
                    new (): C<T>;
                }
            }
        }
    }

    interface N2031DictionaryMap$2<T1,T2> {
        Forward: TypeScript.Issues.N2031DictionaryMap$2.Indexer$2<T1,T2,T1,T2>;
        Reverse: TypeScript.Issues.N2031DictionaryMap$2.Indexer$2<T1,T2,T2,T1>;
        Add(t1: T1, t2: T2): void;
    }
    interface N2031DictionaryMap$2Func extends Function {
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
        interface Indexer$2<T1,T2,T3,T4> {
            getItem(index: T3): T4;
            setItem(index: T3, value: T4): void;
            ContainsKey(index: T3): boolean;
        }
        interface Indexer$2Func extends Function {
            <T1, T2, T3, T4>($T1: Bridge.TypeRef<T1>, $T2: Bridge.TypeRef<T2>, $T3: Bridge.TypeRef<T3>, $T4: Bridge.TypeRef<T4>): {
                prototype: Indexer$2<T1,T2,T3,T4>;
                new (dictionary: System.Collections.Generic.Dictionary$2<T3,T4>): Indexer$2<T1,T2,T3,T4>;
            }
        }
    }

    interface N2029 extends TypeScript.Issues.N2029Interface$1<number> {
        Value1: number;
    }
    interface N2029Func extends Function {
        prototype: N2029;
        new (): N2029;
    }
    var N2029: N2029Func;

    interface N2653Zig extends TypeScript.Issues.N2653IZig {
        zag(): number;
    }
    interface N2653ZigFunc extends Function {
        prototype: N2653Zig;
        new (): N2653Zig;
    }
    var N2653Zig: N2653ZigFunc;

    interface N3061 {
    }
    interface N3061Func extends Function {
        prototype: N3061;
        Car: TypeScript.Issues.N3061.CarFunc;
        Tractor: TypeScript.Issues.N3061.TractorFunc;
        Truck: TypeScript.Issues.N3061.TruckFunc;
        new (): N3061;
    }
    var N3061: N3061Func;
    module N3061 {
        interface IVehicle extends System.IEquatable$1<TypeScript.Issues.N3061.IVehicle> {
            TypeScript$Issues$N3061$IVehicle$Horses: number;
            Horses: number;
        }

        interface Car extends TypeScript.Issues.N3061.IVehicle,System.IEquatable$1<TypeScript.Issues.N3061.Car> {
            Horses: number;
            equalsT$1(vehicle: TypeScript.Issues.N3061.IVehicle): boolean;
            equalsT(car: TypeScript.Issues.N3061.Car): boolean;
        }
        interface CarFunc extends Function {
            prototype: Car;
            new (): Car;
        }

        interface Tractor extends TypeScript.Issues.N3061.Car {
            equalsT(car: TypeScript.Issues.N3061.Car): boolean;
        }
        interface TractorFunc extends Function {
            prototype: Tractor;
            new (): Tractor;
        }

        interface Truck extends TypeScript.Issues.N3061.Car {
            equalsT(car: TypeScript.Issues.N3061.Car): boolean;
        }
        interface TruckFunc extends Function {
            prototype: Truck;
            new (): Truck;
        }
    }

    interface N2030Attribute extends System.Attribute {
        IsUnspecified: boolean;
    }
    interface N2030AttributeFunc extends Function {
        prototype: N2030Attribute;
        new (IsUnspecified: boolean): N2030Attribute;
    }
    var N2030Attribute: N2030AttributeFunc;

    interface N2911 {
    }
    interface N2911Func extends Function {
        prototype: N2911;
        new (): N2911;
        initButton_Clicked(arg: MouseEvent): void;
    }
    var N2911: N2911Func;

    interface N2653IZig {
        TypeScript$Issues$N2653IZig$zag(): number;
        zag(): number;
    }

    interface N2264 {
        Values: System.Collections.Generic.IEnumerable$1<string>;
    }
    interface N2264Func extends Function {
        prototype: N2264;
        new (queryParameters: System.Collections.Generic.IEnumerable$1<string>): N2264;
    }
    var N2264: N2264Func;

    interface N2438 {
        isDefaultCtor: boolean;
        Attribute: number;
    }
    interface N2438Func extends Function {
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

    interface N2474 {
    }
    interface N2474Func extends Function {
        prototype: N2474;
        Enum: N2474.EnumFunc;
        NameEnum: N2474.NameEnumFunc;
        NameLowerCase: N2474.NameLowerCaseFunc;
        NamePreserveCase: N2474.NamePreserveCaseFunc;
        NameUpperCase: N2474.NameUpperCaseFunc;
        StringName: N2474.StringNameFunc;
        StringNameLowerCase: N2474.StringNameLowerCaseFunc;
        StringNamePreserveCase: N2474.StringNamePreserveCaseFunc;
        StringNameUpperCase: N2474.StringNameUpperCaseFunc;
        ValueEnum: N2474.ValueEnumFunc;
        new (): N2474;
    }
    var N2474: N2474Func;
    module N2474 {
        interface Enum {
        }
        interface EnumFunc extends Function {
            prototype: Enum;
            Value: number;
        }

        interface NameEnum {
        }
        interface NameEnumFunc extends Function {
            prototype: NameEnum;
            value: number;
        }

        interface NameLowerCase {
        }
        interface NameLowerCaseFunc extends Function {
            prototype: NameLowerCase;
            value: number;
        }

        interface NamePreserveCase {
        }
        interface NamePreserveCaseFunc extends Function {
            prototype: NamePreserveCase;
            Value: number;
        }

        interface NameUpperCase {
        }
        interface NameUpperCaseFunc extends Function {
            prototype: NameUpperCase;
            VALUE: number;
        }

        interface StringName {
        }
        interface StringNameFunc extends Function {
            prototype: StringName;
            value: string;
        }

        interface StringNameLowerCase {
        }
        interface StringNameLowerCaseFunc extends Function {
            prototype: StringNameLowerCase;
            value: string;
        }

        interface StringNamePreserveCase {
        }
        interface StringNamePreserveCaseFunc extends Function {
            prototype: StringNamePreserveCase;
            Value: string;
        }

        interface StringNameUpperCase {
        }
        interface StringNameUpperCaseFunc extends Function {
            prototype: StringNameUpperCase;
            VALUE: string;
        }

        interface ValueEnum {
        }
        interface ValueEnumFunc extends Function {
            prototype: ValueEnum;
            Value: number;
        }
    }

    interface N2029Interface$1<T> {
        Value1: number;
    }

    interface N2493Operation3 {
        Add(n: number): number;
    }
    interface N2493Operation3Func extends Function {
        prototype: N2493Operation3;
        new (): N2493Operation3;
    }
    var N2493Operation3: N2493Operation3Func;

    interface N2661C {
        fn: {(x: TypeScript.Issues.N2661C): Function};
    }
    interface N2661CFunc extends Function {
        prototype: N2661C;
        new (): N2661C;
    }
    var N2661C: N2661CFunc;

    interface N2463 {
    }
    interface N2463Func extends Function {
        prototype: N2463;
        new (): N2463;
        Do(dummy: {Nothing: number}): {Nothing: number};
    }
    var N2463: N2463Func;
    module N2463 {
    }
}