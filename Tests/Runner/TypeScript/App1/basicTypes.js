/**
 * Bridge Test library for TypeScript.
 * @version 15.4.0
 * @author Object.NET, Inc.
 * @copyright Copyright 2008-2016 Object.NET, Inc.
 * @compiler Bridge.NET 15.4.0
 */
Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    Bridge.define("BasicTypes.BasicTypes", {
        boolValue: true,
        integerValue: -1000,
        floatValue: 2.3,
        stringValue: "Some string value",
        integerArray: null,
        stringArray: null,
        colorArray: null,
        twoDimensionalArray: null,
        colorValue: 1,
        anyValueString: "AnyValueString",
        anyValueInteger: 1,
        dynamicValueInteger: 7,
        undefinedValue: null,
        config: {
            init: function () {
                this.integerArray = [1, 2, 3];
                this.stringArray = ["1", "2", "3"];
                this.colorArray = [BasicTypes.Color.Blue, BasicTypes.Color.Green, BasicTypes.Color.Red];
                this.twoDimensionalArray = [[1, 2, 3], [5, 8]];
                this.undefinedValue = undefined;
            }
        },
        voidFunction: function () {
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
        break: "break",
        case: "case",
        catch: "catch",
        class: "class",
        const: "const",
        continue: "continue",
        debugger: "debugger",
        default: "default",
        delete: "delete",
        do: "do",
        else: "else",
        enum: "enum",
        export: "export",
        extends: "extends",
        false: "false",
        finally: "finally",
        for: "for",
        function: "function",
        if: "if",
        import: "import",
        in: "in",
        instanceof: "instanceof",
        new: "new",
        null: "null",
        return: "return",
        super: "super",
        switch: "switch",
        this: "this",
        throw: "throw",
        true: "true",
        try: "try",
        typeof: "typeof",
        var: "var",
        void: "void",
        while: "while",
        with: "with",
        as: "as",
        implements: "implements",
        interface: "interface",
        let: "let",
        package: "package",
        private: "private",
        protected: "protected",
        public: "public",
        static: "static",
        yield: "yield",
        any: "any",
        boolean: "boolean",
        constructor$1: "constructor",
        constructor$2: "new constructor",
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
});
