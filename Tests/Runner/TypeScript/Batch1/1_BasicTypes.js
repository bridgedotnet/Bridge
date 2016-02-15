/// <reference path="..\..\Runner\resources\qunit\qunit.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\bridge.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\basicTypes.d.ts" />
QUnit.module("TypeScript - Basic Types");
QUnit.test("Fields of basic types", function (assert) {
    var instance = new BasicTypes.BasicTypes();

    assert.deepEqual(instance.boolValue, true, "boolValue");
    assert.deepEqual(instance.integerValue, -1000, "integerValue");
    assert.deepEqual(instance.floatValue, 2.3, "floatValue");
    assert.deepEqual(instance.stringValue, "Some string value", "stringValue");
    assert.deepEqual(instance.integerArray, [1, 2, 3], "integerArray");
    assert.deepEqual(instance.stringArray, ["1", "2", "3"], "stringArray");
    assert.deepEqual(instance.colorArray, [2 /* blue */, 1 /* green */, 0 /* red */], "colorArray");
    assert.deepEqual(instance.colorValue, 1 /* green */, "colorValue");
    assert.deepEqual(instance.anyValueString, "AnyValueString", "anyValueString");
    assert.deepEqual(instance.anyValueInteger, 1, "anyValueInteger");
    assert.deepEqual(instance.dynamicValueInteger, 7, "dynamicValueInteger");
    assert.deepEqual(instance.voidFunction(), instance.undefinedValue, "Void and undefined values");
});

QUnit.test("Issue #430", function (assert) {
    var instance = new BasicTypes.BasicTypes();

    assert.deepEqual(instance.twoDimensionalArray[0][0], 1, "Getting twoDimensionalArray[0][0] = 1");
    assert.deepEqual(instance.twoDimensionalArray[0][1], 2, "Getting twoDimensionalArray[0][1] = 2");
    assert.deepEqual(instance.twoDimensionalArray[0][2], 3, "Getting twoDimensionalArray[0][2] = 3");
    assert.deepEqual(instance.twoDimensionalArray[1][0], 5, "Getting twoDimensionalArray[1][0] = 5");
    assert.deepEqual(instance.twoDimensionalArray[1][1], 8, "Getting twoDimensionalArray[1][1] = 8");

    instance.twoDimensionalArray[0][0] = 10;
    assert.deepEqual(instance.twoDimensionalArray[0][0], 10, "Setting twoDimensionalArray[0][0] = 10");

    instance.twoDimensionalArray[0][1] = 20;
    assert.deepEqual(instance.twoDimensionalArray[0][1], 20, "Setting twoDimensionalArray[0][1] = 20");

    instance.twoDimensionalArray[0][2] = 30;
    assert.deepEqual(instance.twoDimensionalArray[0][2], 30, "Setting twoDimensionalArray[0][2] = 30");

    instance.twoDimensionalArray[1][0] = 50;
    assert.deepEqual(instance.twoDimensionalArray[1][0], 50, "Setting twoDimensionalArray[1][0] = 50");

    instance.twoDimensionalArray[1][1] = 80;
    assert.deepEqual(instance.twoDimensionalArray[1][1], 80, "Setting twoDimensionalArray[1][1] = 80");
});

QUnit.test("Reserved words", function (assert) {
    var k = new BasicTypes.Keywords();

    assert.deepEqual(k.$break, "break", "break");
    assert.deepEqual(k.$case, "case", "case");
    assert.deepEqual(k.$catch, "catch", "catch");
    assert.deepEqual(k.$class, "class", "class");
    assert.deepEqual(k.$const, "const", "const");
    assert.deepEqual(k.$continue, "continue", "continue");
    assert.deepEqual(k.$debugger, "debugger", "debugger");
    assert.deepEqual(k.$default, "default", "default");
    assert.deepEqual(k.$delete, "delete", "delete");
    assert.deepEqual(k.$do, "do", "do");
    assert.deepEqual(k.$else, "else", "else");
    assert.deepEqual(k.$enum, "enum", "enum");
    assert.deepEqual(k.$export, "export", "export");
    assert.deepEqual(k.$extends, "extends", "extends");
    assert.deepEqual(k.$false, "false", "false");
    assert.deepEqual(k.$finally, "finally", "finally");
    assert.deepEqual(k.$for, "for", "for");
    assert.deepEqual(k.$function, "function", "function");
    assert.deepEqual(k.$if, "if", "if");
    assert.deepEqual(k.$import, "import", "import");
    assert.deepEqual(k.$in, "in", "in");
    assert.deepEqual(k.$instanceof, "instanceof", "instanceof");
    assert.deepEqual(k.$new, "new", "new");
    assert.deepEqual(k.$null, "null", "null");
    assert.deepEqual(k.$return, "return", "return");
    assert.deepEqual(k.$super, "super", "super");
    assert.deepEqual(k.$switch, "switch", "switch");
    assert.deepEqual(k.$this, "this", "this");
    assert.deepEqual(k.$throw, "throw", "throw");
    assert.deepEqual(k.$true, "true", "true");
    assert.deepEqual(k.$try, "try", "try");
    assert.deepEqual(k.$typeof, "typeof", "typeof");
    assert.deepEqual(k.$var, "var", "var");
    assert.deepEqual(k.$void, "void", "void");
    assert.deepEqual(k.$while, "while", "while");
    assert.deepEqual(k.$with, "with", "with");
    assert.deepEqual(k.$as, "as", "as");
    assert.deepEqual(k.$implements, "implements", "implements");
    assert.deepEqual(k.$interface, "interface", "interface");
    assert.deepEqual(k.$let, "let", "let");
    assert.deepEqual(k.$package, "package", "package");
    assert.deepEqual(k.$private, "private", "private");
    assert.deepEqual(k.$protected, "protected", "protected");
    assert.deepEqual(k.$public, "public", "public");
    assert.deepEqual(k.$static, "static", "static");
    assert.deepEqual(k.$yield, "yield", "yield");
    assert.deepEqual(k.any, "any", "any");
    assert.deepEqual(k.$boolean, "boolean", "boolean");
    assert.deepEqual(k.$constructor$, "constructor", "$constructor$ #299");
    assert.deepEqual(k.constructor$$1, "new constructor", "constructor$$1");
    assert.deepEqual(k.declare, "declare", "declare");
    assert.deepEqual(k.get, "get", "get");
    assert.deepEqual(k.module, "module", "module");
    assert.deepEqual(k.require, "require", "require");
    assert.deepEqual(k.number, "number", "number");
    assert.deepEqual(k.set, "set", "set");
    assert.deepEqual(k.string, "string", "string");
    assert.deepEqual(k.symbol, "symbol", "symbol");
    assert.deepEqual(k.type, "type", "type");
    assert.deepEqual(k.from, "from", "from");
    assert.deepEqual(k.of, "of", "of");
});
