/* global Bridge */

(function (globals) {
    "use strict";

    Bridge.define('BasicTypes.BasicTypes', {
        boolValue: true,
        integerValue: -1000,
        floatValue: Bridge.cast(2.3, Number),
        stringValue: "Some string value",
        anyValueString: "AnyValueString",
        anyValueInteger: 1,
        dynamicValueInteger: 7,
        config: {
            init: function () {
                this.integerArray = [1, 2, 3];
                this.stringArray = ["1", "2", "3"];
                this.colorArray = [BasicTypes.Color.blue, BasicTypes.Color.green, BasicTypes.Color.red];
                this.twoDimensionalArray = [[1, 2, 3], [5, 8]];
                this.colorValue = BasicTypes.Color.green;
                this.undefinedValue = undefined;
            }
        },
        voidFunction: function () {
        }
    });
    
    Bridge.define('BasicTypes.Color', {
        $enum: true,
        statics: {
            red: 0,
            green: 1,
            blue: 2
        }
    });
    
    Bridge.define('BasicTypes.Keywords', {
        $break: "break",
        $case: "case",
        $catch: "catch",
        $class: "class",
        $const: "const",
        $continue: "continue",
        $debugger: "debugger",
        $default: "default",
        $delete: "delete",
        $do: "do",
        $else: "else",
        $enum: "enum",
        $export: "export",
        $extends: "extends",
        $false: "false",
        $finally: "finally",
        $for: "for",
        $function: "function",
        $if: "if",
        $import: "import",
        $in: "in",
        $instanceof: "instanceof",
        $new: "new",
        $null: "null",
        $return: "return",
        $super: "super",
        $switch: "switch",
        $this: "this",
        $throw: "throw",
        $true: "true",
        $try: "try",
        $typeof: "typeof",
        $var: "var",
        $void: "void",
        $while: "while",
        $with: "with",
        $as: "as",
        $implements: "implements",
        $interface: "interface",
        $let: "let",
        $package: "package",
        $private: "private",
        $protected: "protected",
        $public: "public",
        $static: "static",
        $yield: "yield",
        any: "any",
        $boolean: "boolean",
        $constructor$: "constructor",
        constructor$$1: "new constructor",
        declare: "declare",
        get: "get",
        module: "module",
        require: "require",
        number: "number",
        set: "set",
        string: "string",
        symbol: "symbol",
        type: "type",
        from: "from",
        of: "of"
    });
    
    
    
    Bridge.init();
})(this);
