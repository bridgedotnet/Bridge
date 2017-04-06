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
        BoolValue: true,
        IntegerValue: -1000,
        FloatValue: 2.3,
        StringValue: "Some string value",
        IntegerArray: null,
        StringArray: null,
        ColorArray: null,
        TwoDimensionalArray: null,
        ColorValue: 1,
        AnyValueString: "AnyValueString",
        AnyValueInteger: Bridge.box(1, System.Int32),
        DynamicValueInteger: 7,
        UndefinedValue: null,
        config: {
            init: function () {
                this.IntegerArray = System.Array.init([1, 2, 3], System.Int32);
                this.StringArray = System.Array.init(["1", "2", "3"], System.String);
                this.ColorArray = System.Array.init([BasicTypes.Color.Blue, BasicTypes.Color.Green, BasicTypes.Color.Red], BasicTypes.Color);
                this.TwoDimensionalArray = System.Array.init([System.Array.init([1, 2, 3], System.Int32), System.Array.init([5, 8], System.Int32)], System.Array.type(System.Int32));
                this.UndefinedValue = undefined;
            }
        },
        VoidFunction: function () {
        }
    });

    Bridge.define("BasicTypes.Color", {
        $kind: "enum",
        statics: {
            Red: 0,
            Green: 1,
            Blue: 2
        }
    });

    Bridge.define("BasicTypes.Keywords", {
        Break: "break",
        Case: "case",
        Catch: "catch",
        Class: "class",
        Const: "const",
        Continue: "continue",
        Debugger: "debugger",
        Default: "default",
        Delete: "delete",
        Do: "do",
        Else: "else",
        Enum: "enum",
        Export: "export",
        Extends: "extends",
        False: "false",
        Finally: "finally",
        For: "for",
        Function: "function",
        If: "if",
        Import: "import",
        In: "in",
        Instanceof: "instanceof",
        New: "new",
        Null: "null",
        Return: "return",
        Super: "super",
        Switch: "switch",
        This: "this",
        Throw: "throw",
        True: "true",
        Try: "try",
        Typeof: "typeof",
        Var: "var",
        Void: "void",
        While: "while",
        With: "with",
        As: "as",
        Implements: "implements",
        Interface: "interface",
        Let: "let",
        Package: "package",
        Private: "private",
        Protected: "protected",
        Public: "public",
        Static: "static",
        Yield: "yield",
        Any: "any",
        Boolean: "boolean",
        constructor$1: "constructor",
        Constructor: "new constructor",
        Declare: "declare",
        Get: "get",
        Module: "module",
        Require: "require",
        Number: "number",
        Set: "set",
        String: "string",
        Symbol: "symbol",
        Type: "type",
        From: "from",
        Of: "of"
    });
});
