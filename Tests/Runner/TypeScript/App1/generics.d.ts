/// <reference path="./bridge.d.ts" />

declare namespace Generics {
    export interface GenericINamedEntity$1<T> {
        Instance: T;
        GetSomething(input: T): T;
    }
    export interface GenericINamedEntity$1Func extends Function {
        <T>($T: Bridge.TypeRef<T>): {
            prototype: GenericINamedEntity$1<T>;
            new (instance: T): GenericINamedEntity$1<T>;
        }
    }
    var GenericINamedEntity$1: GenericINamedEntity$1Func;

    export interface NamedEntity extends Generics.INamedEntity {
        Name$1: string;
    }
    export interface NamedEntityFunc extends Function {
        prototype: NamedEntity;
        new (): NamedEntity;
    }
    var NamedEntity: NamedEntityFunc;

    export interface GenericNamedEntity$1<T> {
        Instance: T;
        GetSomething(input: T): T;
    }
    export interface GenericNamedEntity$1Func extends Function {
        <T>($T: Bridge.TypeRef<T>): {
            prototype: GenericNamedEntity$1<T>;
            new (instance: T): GenericNamedEntity$1<T>;
        }
    }
    var GenericNamedEntity$1: GenericNamedEntity$1Func;

    export interface NewClass {
        Data: number;
    }
    export interface NewClassFunc extends Function {
        prototype: NewClass;
        new (): NewClass;
    }
    var NewClass: NewClassFunc;

    export interface SimpleDoubleGeneric$2<T,K> {
        InstanceT: T;
        InstanceK: K;
        GetSomething(input: T): T;
        GetSomethingMore(input: K): K;
    }
    export interface SimpleDoubleGeneric$2Func extends Function {
        <T, K>($T: Bridge.TypeRef<T>, $K: Bridge.TypeRef<K>): {
            prototype: SimpleDoubleGeneric$2<T,K>;
            new (): SimpleDoubleGeneric$2<T,K>;
            ctor: {
                new (): SimpleDoubleGeneric$2<T,K>
            };
            $ctor1: {
                new (instanceT: T, instanceK: K): SimpleDoubleGeneric$2<T,K>
            };
        }
    }
    var SimpleDoubleGeneric$2: SimpleDoubleGeneric$2Func;

    export interface GenericStruct$1<T> {
        Instance: T;
        GetSomething(input: T): T;
    }
    export interface GenericStruct$1Func extends Function {
        <T>($T: Bridge.TypeRef<T>): {
            prototype: GenericStruct$1<T>;
            new (instance: T): GenericStruct$1<T>;
        }
    }
    var GenericStruct$1: GenericStruct$1Func;

    export interface GenericNewAndClass$1<T> {
        Instance: T;
        GetSomething(input: T): T;
    }
    export interface GenericNewAndClass$1Func extends Function {
        <T>($T: Bridge.TypeRef<T>): {
            prototype: GenericNewAndClass$1<T>;
            new (instance: T): GenericNewAndClass$1<T>;
        }
    }
    var GenericNewAndClass$1: GenericNewAndClass$1Func;

    export interface GenericNew$1<T> {
        Instance: T;
        GetSomething(input: T): T;
    }
    export interface GenericNew$1Func extends Function {
        <T>($T: Bridge.TypeRef<T>): {
            prototype: GenericNew$1<T>;
            new (instance: T): GenericNew$1<T>;
        }
    }
    var GenericNew$1: GenericNew$1Func;

    export interface INamedEntity {
        Name: string;
    }
    export interface INamedEntityFunc extends Function {
        prototype: INamedEntity;
        new (): INamedEntity;
    }
    var INamedEntity: INamedEntityFunc;

    export interface GenericClass$1<T> {
        Instance: T;
        GetSomething(input: T): T;
    }
    export interface GenericClass$1Func extends Function {
        <T>($T: Bridge.TypeRef<T>): {
            prototype: GenericClass$1<T>;
            new (instance: T): GenericClass$1<T>;
        }
    }
    var GenericClass$1: GenericClass$1Func;

    export interface SimpleGeneric$1<T> {
        Instance: T;
        GetSomething(input: T): T;
    }
    export interface SimpleGeneric$1Func extends Function {
        <T>($T: Bridge.TypeRef<T>): {
            prototype: SimpleGeneric$1<T>;
            new (instance: T): SimpleGeneric$1<T>;
        }
    }
    var SimpleGeneric$1: SimpleGeneric$1Func;

    export interface implementation {
    }
    export interface implementationFunc extends Function {
        prototype: implementation;
        new (): implementation;
        SimpleGenericInt: Generics.SimpleGeneric$1<number>;
        SimpleDoubleGenericIntString: Generics.SimpleDoubleGeneric$2<number,string>;
        GenericINamedEntity: Generics.GenericINamedEntity$1<Generics.INamedEntity>;
        GenericNamedEntity: Generics.GenericNamedEntity$1<Generics.NamedEntity>;
        GenericClassObject: Generics.GenericClass$1<any>;
        GenericClassNamedEntity: Generics.GenericClass$1<Generics.NamedEntity>;
        GenericNew: Generics.GenericNew$1<Generics.NewClass>;
        GenericNewAndClass: Generics.GenericNewAndClass$1<Generics.NewClass>;
    }
    var implementation: implementationFunc;

}
