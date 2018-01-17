/// <reference path="./bridge.d.ts" />

declare namespace Interfaces {
    interface Interface3 extends Interfaces.Interface2 {
        Interfaces$Interface3$Method5(i: Interfaces.Interface3): Interfaces.Interface2;
        Method5(i: Interfaces.Interface3): Interfaces.Interface2;
    }

    interface Class2 extends Interfaces.Class1,Interfaces.Interface2 {
        Method1(): void;
        Method2(s: string): void;
        Method3(): number;
        Method4(i: Interfaces.Interface1): boolean;
    }
    interface Class2Func extends Function {
        prototype: Class2;
        new (): Class2;
    }
    var Class2: Class2Func;

    interface Class6 extends Interfaces.Interface6 {
        Property: number;
        MethodProperty: number;
        GetProperty(): number;
        SetProperty$1(s: string): void;
        SetProperty(i: number): void;
    }
    interface Class6Func extends Function {
        prototype: Class6;
        new (): Class6;
    }
    var Class6: Class6Func;

    interface Class4 extends Interfaces.Interface4 {
        Method6(b: {v: boolean}): void;
        Method7(i: number, b: {v: boolean}): void;
        Method8(s: {v: string}): void;
        Method9(i: number, s: {v: string}): void;
        Method10(i: number, b: {v: boolean}, s: {v: string}): void;
    }
    interface Class4Func extends Function {
        prototype: Class4;
        new (): Class4;
    }
    var Class4: Class4Func;

    interface Interface2 extends Interfaces.Interface1 {
        Interfaces$Interface2$Method1(): void;
        Method1(): void;
        Interfaces$Interface2$Method2(i: string): void;
        Method2(i: string): void;
        Interfaces$Interface2$Method3(): number;
        Method3(): number;
        Interfaces$Interface2$Method4(i: Interfaces.Interface1): boolean;
        Method4(i: Interfaces.Interface1): boolean;
    }

    interface Class1 extends Interfaces.Interface1 {
        Field: number;
        Property: number;
    }
    interface Class1Func extends Function {
        prototype: Class1;
        new (): Class1;
    }
    var Class1: Class1Func;

    interface Class3 extends Interfaces.Class2,Interfaces.Interface3 {
        Method5(i: Interfaces.Interface3): Interfaces.Interface2;
    }
    interface Class3Func extends Function {
        prototype: Class3;
        new (): Class3;
    }
    var Class3: Class3Func;

    interface Interface61 {
        Interfaces$Interface61$Property: number;
        Property: number;
    }

    interface Interface1 {
        Interfaces$Interface1$Property: number;
        Property: number;
    }

    interface Interface4 {
        Interfaces$Interface4$Method6(b: {v: boolean}): void;
        Method6(b: {v: boolean}): void;
        Interfaces$Interface4$Method7(i: number, b: {v: boolean}): void;
        Method7(i: number, b: {v: boolean}): void;
        Interfaces$Interface4$Method8(s: {v: string}): void;
        Method8(s: {v: string}): void;
        Interfaces$Interface4$Method9(i: number, s: {v: string}): void;
        Method9(i: number, s: {v: string}): void;
        Interfaces$Interface4$Method10(i: number, b: {v: boolean}, s: {v: string}): void;
        Method10(i: number, b: {v: boolean}, s: {v: string}): void;
    }

    interface Interface6 {
        Interfaces$Interface6$Property: number;
        Property: number;
        Interfaces$Interface6$GetProperty(): number;
        GetProperty(): number;
        Interfaces$Interface6$SetProperty$1(s: string): void;
        SetProperty$1(s: string): void;
        Interfaces$Interface6$SetProperty(i: number): void;
        SetProperty(i: number): void;
    }

    interface Interface62 {
        Interfaces$Interface62$GetProperty(): number;
        GetProperty(): number;
        Interfaces$Interface62$SetProperty$1(s: string): void;
        SetProperty$1(s: string): void;
        Interfaces$Interface62$SetProperty(i: number): void;
        SetProperty(i: number): void;
    }

}
