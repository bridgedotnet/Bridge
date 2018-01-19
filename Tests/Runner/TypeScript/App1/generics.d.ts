/// <reference path="./bridge.d.ts" />

declare namespace Generics {
    interface GenericINamedEntity$1<T> {
        Instance: T;
        GetSomething(input: T): T;
    }
    interface GenericINamedEntity$1Func extends Function {
        <T>($T: Bridge.TypeRef<T>): {
            prototype: GenericINamedEntity$1<T>;
            new (instance: T): GenericINamedEntity$1<T>;
        }
    }
    var GenericINamedEntity$1: GenericINamedEntity$1Func;

    interface NamedEntity extends Generics.INamedEntity {
        Name$1: string;
    }
    interface NamedEntityFunc extends Function {
        prototype: NamedEntity;
        new (): NamedEntity;
    }
    var NamedEntity: NamedEntityFunc;

    interface GenericNamedEntity$1<T> {
        Instance: T;
        GetSomething(input: T): T;
    }
    interface GenericNamedEntity$1Func extends Function {
        <T>($T: Bridge.TypeRef<T>): {
            prototype: GenericNamedEntity$1<T>;
            new (instance: T): GenericNamedEntity$1<T>;
        }
    }
    var GenericNamedEntity$1: GenericNamedEntity$1Func;

    interface NewClass {
        Data: number;
    }
    interface NewClassFunc extends Function {
        prototype: NewClass;
        new (): NewClass;
    }
    var NewClass: NewClassFunc;

    interface SimpleDoubleGeneric$2<T,K> {
        InstanceT: T;
        InstanceK: K;
        GetSomething(input: T): T;
        GetSomethingMore(input: K): K;
    }
    interface SimpleDoubleGeneric$2Func extends Function {
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

    interface GenericStruct$1<T> {
        Instance: T;
        GetSomething(input: T): T;
    }
    interface GenericStruct$1Func extends Function {
        <T>($T: Bridge.TypeRef<T>): {
            prototype: GenericStruct$1<T>;
            new (instance: T): GenericStruct$1<T>;
        }
    }
    var GenericStruct$1: GenericStruct$1Func;

    interface GenericNewAndClass$1<T> {
        Instance: T;
        GetSomething(input: T): T;
    }
    interface GenericNewAndClass$1Func extends Function {
        <T>($T: Bridge.TypeRef<T>): {
            prototype: GenericNewAndClass$1<T>;
            new (instance: T): GenericNewAndClass$1<T>;
        }
    }
    var GenericNewAndClass$1: GenericNewAndClass$1Func;

    interface GenericNew$1<T> {
        Instance: T;
        GetSomething(input: T): T;
    }
    interface GenericNew$1Func extends Function {
        <T>($T: Bridge.TypeRef<T>): {
            prototype: GenericNew$1<T>;
            new (instance: T): GenericNew$1<T>;
        }
    }
    var GenericNew$1: GenericNew$1Func;

    interface INamedEntity {
    }
    interface INamedEntityFunc extends Function {
        prototype: INamedEntity;
        new (): INamedEntity;
    }
    var INamedEntity: INamedEntityFunc;

    interface GenericClass$1<T> {
        Instance: T;
        GetSomething(input: T): T;
    }
    interface GenericClass$1Func extends Function {
        <T>($T: Bridge.TypeRef<T>): {
            prototype: GenericClass$1<T>;
            new (instance: T): GenericClass$1<T>;
        }
    }
    var GenericClass$1: GenericClass$1Func;

    interface SimpleGeneric$1<T> {
        Instance: T;
        GetSomething(input: T): T;
    }
    interface SimpleGeneric$1Func extends Function {
        <T>($T: Bridge.TypeRef<T>): {
            prototype: SimpleGeneric$1<T>;
            new (instance: T): SimpleGeneric$1<T>;
        }
    }
    var SimpleGeneric$1: SimpleGeneric$1Func;

    interface implementation {
    }
    interface implementationFunc extends Function {
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
