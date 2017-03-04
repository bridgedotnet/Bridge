/// <reference path="./bridge.d.ts" />

declare module Generics {
    export interface GenericINamedEntity$1<T> {
        instance: T;
        getSomething(input: T): T;
    }
    export function GenericINamedEntity$1<T>($T: Bridge.TypeRef<T>): {
        prototype: GenericINamedEntity$1<T>;
        new (instance: T): GenericINamedEntity$1<T>;
    }

    export interface NamedEntity extends Generics.INamedEntity {
        getName$1(): string;
        setName$1(value: string): void;
    }
    export interface NamedEntityFunc extends Function {
        prototype: NamedEntity;
        new (): NamedEntity;
    }
    var NamedEntity: NamedEntityFunc;

    export interface GenericNamedEntity$1<T> {
        instance: T;
        getSomething(input: T): T;
    }
    export function GenericNamedEntity$1<T>($T: Bridge.TypeRef<T>): {
        prototype: GenericNamedEntity$1<T>;
        new (instance: T): GenericNamedEntity$1<T>;
    }

    export interface SimpleGeneric$1<T> {
        instance: T;
        getSomething(input: T): T;
    }
    export function SimpleGeneric$1<T>($T: Bridge.TypeRef<T>): {
        prototype: SimpleGeneric$1<T>;
        new (instance: T): SimpleGeneric$1<T>;
    }

    export interface SimpleDoubleGeneric$2<T,K> {
        instanceT: T;
        instanceK: K;
        getSomething(input: T): T;
        getSomethingMore(input: K): K;
    }
    export function SimpleDoubleGeneric$2<T,K>($T: Bridge.TypeRef<T>, $K: Bridge.TypeRef<K>): {
        prototype: SimpleDoubleGeneric$2<T,K>;
        new (): SimpleDoubleGeneric$2<T,K>;
        ctor: {
            new (): SimpleDoubleGeneric$2<T,K>
        };
        $ctor1: {
            new (instanceT: T, instanceK: K): SimpleDoubleGeneric$2<T,K>
        };
    }

    export interface implementation {
    }
    export interface implementationFunc extends Function {
        prototype: implementation;
        new (): implementation;
        simpleGenericInt: Generics.SimpleGeneric$1<number>;
        simpleDoubleGenericIntString: Generics.SimpleDoubleGeneric$2<number,string>;
        genericINamedEntity: Generics.GenericINamedEntity$1<Generics.INamedEntity>;
        genericNamedEntity: Generics.GenericNamedEntity$1<Generics.NamedEntity>;
        genericClassObject: Generics.GenericClass$1<System.Object>;
        genericClassNamedEntity: Generics.GenericClass$1<Generics.NamedEntity>;
        genericNew: Generics.GenericNew$1<Generics.NewClass>;
        genericNewAndClass: Generics.GenericNewAndClass$1<Generics.NewClass>;
    }
    var implementation: implementationFunc;

    export interface GenericNewAndClass$1<T> {
        instance: T;
        getSomething(input: T): T;
    }
    export function GenericNewAndClass$1<T>($T: Bridge.TypeRef<T>): {
        prototype: GenericNewAndClass$1<T>;
        new (instance: T): GenericNewAndClass$1<T>;
    }

    export interface GenericNew$1<T> {
        instance: T;
        getSomething(input: T): T;
    }
    export function GenericNew$1<T>($T: Bridge.TypeRef<T>): {
        prototype: GenericNew$1<T>;
        new (instance: T): GenericNew$1<T>;
    }

    export interface INamedEntity {
    }
    export interface INamedEntityFunc extends Function {
        prototype: INamedEntity;
        new (): INamedEntity;
    }
    var INamedEntity: INamedEntityFunc;

    export interface GenericClass$1<T> {
        instance: T;
        getSomething(input: T): T;
    }
    export function GenericClass$1<T>($T: Bridge.TypeRef<T>): {
        prototype: GenericClass$1<T>;
        new (instance: T): GenericClass$1<T>;
    }

    export interface NewClass {
        data: number;
    }
    export interface NewClassFunc extends Function {
        prototype: NewClass;
        new (): NewClass;
    }
    var NewClass: NewClassFunc;

    export interface GenericStruct$1<T> {
        instance: T;
        getSomething(input: T): T;
    }
    export function GenericStruct$1<T>($T: Bridge.TypeRef<T>): {
        prototype: GenericStruct$1<T>;
        new (instance: T): GenericStruct$1<T>;
    }

}
