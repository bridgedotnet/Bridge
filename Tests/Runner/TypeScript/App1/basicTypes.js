/**
 * Bridge Test library for TypeScript.
 * @version 16.0.0
 * @author Object.NET, Inc.
 * @copyright Copyright 2008-2017 Object.NET, Inc.
 * @compiler Bridge.NET 16.0.0
 */
Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    Bridge.define("BasicTypes.BasicTypes", {
        fields: {
            BoolValue: false,
            IntegerValue: 0,
            FloatValue: 0,
            StringValue: null,
            IntegerArray: null,
            StringArray: null,
            ColorArray: null,
            TwoDimensionalArray: null,
            ColorValue: 0,
            AnyValueString: null,
            AnyValueInteger: null,
            DynamicValueInteger: null,
            UndefinedValue: null
        },
        ctors: {
            init: function () {
                this.BoolValue = true;
                this.IntegerValue = -1000;
                this.FloatValue = 2.3;
                this.StringValue = "Some string value";
                this.IntegerArray = System.Array.init([1, 2, 3], System.Int32);
                this.StringArray = System.Array.init(["1", "2", "3"], System.String);
                this.ColorArray = System.Array.init([BasicTypes.Color.Blue, BasicTypes.Color.Green, BasicTypes.Color.Red], BasicTypes.Color);
                this.TwoDimensionalArray = System.Array.init([System.Array.init([1, 2, 3], System.Int32), System.Array.init([5, 8], System.Int32)], System.Array.type(System.Int32));
                this.ColorValue = BasicTypes.Color.Green;
                this.AnyValueString = "AnyValueString";
                this.AnyValueInteger = Bridge.box(1, System.Int32);
                this.DynamicValueInteger = 7;
                this.UndefinedValue = undefined;
            }
        },
        methods: {
            VoidFunction: function () { }
        }
    });

    Bridge.define("BasicTypes.Color", {
        $kind: "enum",
        statics: {
            fields: {
                Red: 0,
                Green: 1,
                Blue: 2
            }
        }
    });

    Bridge.define("BasicTypes.Keywords", {
        fields: {
            Break: null,
            Case: null,
            Catch: null,
            Class: null,
            Const: null,
            Continue: null,
            Debugger: null,
            Default: null,
            Delete: null,
            Do: null,
            Else: null,
            Enum: null,
            Export: null,
            Extends: null,
            False: null,
            Finally: null,
            For: null,
            Function: null,
            If: null,
            Import: null,
            In: null,
            Instanceof: null,
            New: null,
            Null: null,
            Return: null,
            Super: null,
            Switch: null,
            This: null,
            Throw: null,
            True: null,
            Try: null,
            Typeof: null,
            Var: null,
            Void: null,
            While: null,
            With: null,
            As: null,
            Implements: null,
            Interface: null,
            Let: null,
            Package: null,
            Private: null,
            Protected: null,
            Public: null,
            Static: null,
            Yield: null,
            Any: null,
            Boolean: null,
            constructor$1: null,
            Constructor: null,
            Declare: null,
            Get: null,
            Module: null,
            Require: null,
            Number: null,
            Set: null,
            String: null,
            Symbol: null,
            Type: null,
            From: null,
            Of: null
        },
        ctors: {
            init: function () {
                this.Break = "break";
                this.Case = "case";
                this.Catch = "catch";
                this.Class = "class";
                this.Const = "const";
                this.Continue = "continue";
                this.Debugger = "debugger";
                this.Default = "default";
                this.Delete = "delete";
                this.Do = "do";
                this.Else = "else";
                this.Enum = "enum";
                this.Export = "export";
                this.Extends = "extends";
                this.False = "false";
                this.Finally = "finally";
                this.For = "for";
                this.Function = "function";
                this.If = "if";
                this.Import = "import";
                this.In = "in";
                this.Instanceof = "instanceof";
                this.New = "new";
                this.Null = "null";
                this.Return = "return";
                this.Super = "super";
                this.Switch = "switch";
                this.This = "this";
                this.Throw = "throw";
                this.True = "true";
                this.Try = "try";
                this.Typeof = "typeof";
                this.Var = "var";
                this.Void = "void";
                this.While = "while";
                this.With = "with";
                this.As = "as";
                this.Implements = "implements";
                this.Interface = "interface";
                this.Let = "let";
                this.Package = "package";
                this.Private = "private";
                this.Protected = "protected";
                this.Public = "public";
                this.Static = "static";
                this.Yield = "yield";
                this.Any = "any";
                this.Boolean = "boolean";
                this.constructor$1 = "constructor";
                this.Constructor = "new constructor";
                this.Declare = "declare";
                this.Get = "get";
                this.Module = "module";
                this.Require = "require";
                this.Number = "number";
                this.Set = "set";
                this.String = "string";
                this.Symbol = "symbol";
                this.Type = "type";
                this.From = "from";
                this.Of = "of";
            }
        }
    });
});
