/// <reference path="./bridge.d.ts" />

declare module BasicTypes {
    export interface BasicTypes {
        BoolValue: boolean;
        IntegerValue: number;
        FloatValue: number;
        StringValue: string;
        IntegerArray: number[];
        StringArray: string[];
        ColorArray: BasicTypes.Color[];
        TwoDimensionalArray: number[][];
        ColorValue: BasicTypes.Color;
        AnyValueString: any;
        AnyValueInteger: any;
        DynamicValueInteger: any;
        UndefinedValue: any;
        VoidFunction(): void;
    }
    export interface BasicTypesFunc extends Function {
        prototype: BasicTypes;
        new (): BasicTypes;
    }
    var BasicTypes: BasicTypesFunc;

    export enum Color {
        Red = 0,
        Green = 1,
        Blue = 2
    }

    export interface Keywords {
        Break: string;
        Case: string;
        Catch: string;
        Class: string;
        Const: string;
        Continue: string;
        Debugger: string;
        Default: string;
        Delete: string;
        Do: string;
        Else: string;
        Enum: string;
        Export: string;
        Extends: string;
        False: string;
        Finally: string;
        For: string;
        Function: string;
        If: string;
        Import: string;
        In: string;
        Instanceof: string;
        New: string;
        Null: string;
        Return: string;
        Super: string;
        Switch: string;
        This: string;
        Throw: string;
        True: string;
        Try: string;
        Typeof: string;
        Var: string;
        Void: string;
        While: string;
        With: string;
        As: string;
        Implements: string;
        Interface: string;
        Let: string;
        Package: string;
        Private: string;
        Protected: string;
        Public: string;
        Static: string;
        Yield: string;
        Any: string;
        Boolean: string;
        constructor$1: string;
        Constructor: string;
        Declare: string;
        Get: string;
        Module: string;
        Require: string;
        Number: string;
        Set: string;
        String: string;
        Symbol: string;
        Type: string;
        From: string;
        Of: string;
    }
    export interface KeywordsFunc extends Function {
        prototype: Keywords;
        new (): Keywords;
    }
    var Keywords: KeywordsFunc;

}
