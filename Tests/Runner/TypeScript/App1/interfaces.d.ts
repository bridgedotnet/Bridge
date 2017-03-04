/// <reference path="./bridge.d.ts" />

declare module Interfaces {
    export interface Class2 extends Interfaces.Class1,Interfaces.Interface2 {
        method1(): void;
        method2(s: string): void;
        method3(): number;
        method4(i: Interfaces.Interface1): boolean;
    }
    export interface Class2Func extends Function {
        prototype: Class2;
        new (): Class2;
    }
    var Class2: Class2Func;

    export interface Class6 extends Interfaces.Interface6 {
        getProperty(): number;
        setProperty(value: number): void;
        getMethodProperty(): number;
        setMethodProperty(value: number): void;
        getProperty$1(): number;
        setProperty$3(s: string): void;
        setProperty$2(i: number): void;
    }
    export interface Class6Func extends Function {
        prototype: Class6;
        new (): Class6;
    }
    var Class6: Class6Func;

    export interface Class4 extends Interfaces.Interface4 {
        method6(b: {v: boolean}): void;
        method7(i: number, b: {v: boolean}): void;
        method8(s: {v: string}): void;
        method9(i: number, s: {v: string}): void;
        method10(i: number, b: {v: boolean}, s: {v: string}): void;
    }
    export interface Class4Func extends Function {
        prototype: Class4;
        new (): Class4;
    }
    var Class4: Class4Func;

    export interface Interface2 extends Interfaces.Interface1 {
        method1(): void;
        method2(i: string): void;
        method3(): number;
        method4(i: Interfaces.Interface1): boolean;
    }
    var Interface2: Function;

    export interface Class1 extends Interfaces.Interface1 {
        field: number;
        getProperty(): number;
        setProperty(value: number): void;
    }
    export interface Class1Func extends Function {
        prototype: Class1;
        new (): Class1;
    }
    var Class1: Class1Func;

    export interface Interface62 {
        getProperty(): number;
        Interfaces$Interface62$setProperty$1(s: string): void;
        Interfaces$Interface62$setProperty(i: number): void;
    }
    var Interface62: Function;

    export interface Interface3 extends Interfaces.Interface2 {
        method5(i: Interfaces.Interface3): Interfaces.Interface2;
    }
    var Interface3: Function;

    export interface Interface1 {
        Interfaces$Interface1$getProperty(): number;
        Interfaces$Interface1$setProperty(value: number): void;
    }
    var Interface1: Function;

    export interface Interface4 {
        method6(b: {v: boolean}): void;
        method7(i: number, b: {v: boolean}): void;
        method8(s: {v: string}): void;
        method9(i: number, s: {v: string}): void;
        method10(i: number, b: {v: boolean}, s: {v: string}): void;
    }
    var Interface4: Function;

    export interface Interface6 {
        Interfaces$Interface6$getProperty(): number;
        Interfaces$Interface6$setProperty(value: number): void;
        Interfaces$Interface6$getProperty$1(): number;
        Interfaces$Interface6$setProperty$3(s: string): void;
        Interfaces$Interface6$setProperty$2(i: number): void;
    }
    var Interface6: Function;

    export interface Interface61 {
        Interfaces$Interface61$getProperty(): number;
        Interfaces$Interface61$setProperty(value: number): void;
    }
    var Interface61: Function;

    export interface Class3 extends Interfaces.Class2,Interfaces.Interface3 {
        method5(i: Interfaces.Interface3): Interfaces.Interface2;
    }
    export interface Class3Func extends Function {
        prototype: Class3;
        new (): Class3;
    }
    var Class3: Class3Func;

}
