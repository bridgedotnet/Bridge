/// <reference path="..\..\Runner\resources\qunit\qunit.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\bridge.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\basicTypes.d.ts" />

QUnit.module("TypeScript - Basic Types");
QUnit.test("Fields of basic types", function (assert) {
    var instance: BasicTypes.BasicTypes = new BasicTypes.BasicTypes();

    assert.deepEqual(instance.boolValue, true, "boolValue");
    assert.deepEqual(instance.integerValue, -1000, "integerValue");
    assert.deepEqual(instance.floatValue, 2.3, "floatValue");
    assert.deepEqual(instance.stringValue, "Some string value", "stringValue");
    assert.deepEqual(instance.integerArray, [1, 2, 3], "integerArray");
    assert.deepEqual(instance.stringArray, ["1", "2", "3"], "stringArray");
    assert.deepEqual(instance.colorArray, [BasicTypes.Color.Blue, BasicTypes.Color.Green, BasicTypes.Color.Red], "colorArray");
    assert.deepEqual(instance.colorValue, BasicTypes.Color.Green, "colorValue");
    assert.deepEqual(instance.anyValueString, "AnyValueString", "anyValueString");
    assert.deepEqual(Bridge.unbox(instance.anyValueInteger), 1, "anyValueInteger");
    assert.deepEqual(instance.dynamicValueInteger, 7, "dynamicValueInteger");
    assert.deepEqual(instance.voidFunction(), instance.undefinedValue, "Void and undefined values");
});

QUnit.test("Issue #430", function (assert) {
    var instance: BasicTypes.BasicTypes = new BasicTypes.BasicTypes();

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

    assert.deepEqual(k.break, "break", "break");
    assert.deepEqual(k.case, "case", "case");
    assert.deepEqual(k.catch, "catch", "catch");
    assert.deepEqual(k.class, "class", "class");
    assert.deepEqual(k.const, "const", "const");
    assert.deepEqual(k.continue, "continue", "continue");
    assert.deepEqual(k.debugger, "debugger", "debugger");
    assert.deepEqual(k.default, "default", "default");
    assert.deepEqual(k.delete, "delete", "delete");
    assert.deepEqual(k.do, "do", "do");
    assert.deepEqual(k.else, "else", "else");
    assert.deepEqual(k.enum, "enum", "enum");
    assert.deepEqual(k.export, "export", "export");
    assert.deepEqual(k.extends, "extends", "extends");
    assert.deepEqual(k.false, "false", "false");
    assert.deepEqual(k.finally, "finally", "finally");
    assert.deepEqual(k.for, "for", "for");
    assert.deepEqual(k.function, "function", "function");
    assert.deepEqual(k.if, "if", "if");
    assert.deepEqual(k.import, "import", "import");
    assert.deepEqual(k.in, "in", "in");
    assert.deepEqual(k.instanceof, "instanceof", "instanceof");
    assert.deepEqual(k.new, "new", "new");
    assert.deepEqual(k.null, "null", "null");
    assert.deepEqual(k.return, "return", "return");
    assert.deepEqual(k.super, "super", "super");
    assert.deepEqual(k.switch, "switch", "switch");
    assert.deepEqual(k.this, "this", "this");
    assert.deepEqual(k.throw, "throw", "throw");
    assert.deepEqual(k.true, "true", "true");
    assert.deepEqual(k.try, "try", "try");
    assert.deepEqual(k.typeof, "typeof", "typeof");
    assert.deepEqual(k.var, "var", "var");
    assert.deepEqual(k.void, "void", "void");
    assert.deepEqual(k.while, "while", "while");
    assert.deepEqual(k.with, "with", "with");
    assert.deepEqual(k.as, "as", "as");
    assert.deepEqual(k.implements, "implements", "implements");
    assert.deepEqual(k.interface, "interface", "interface");
    assert.deepEqual(k.let, "let", "let");
    assert.deepEqual(k.package, "package", "package");
    assert.deepEqual(k.private, "private", "private");
    assert.deepEqual(k.protected, "protected", "protected");
    assert.deepEqual(k.public, "public", "public");
    assert.deepEqual(k.static, "static", "static");
    assert.deepEqual(k.yield, "yield", "yield");
    assert.deepEqual(k.any, "any", "any");
    assert.deepEqual(k.boolean, "boolean", "boolean");
    assert.deepEqual(k.constructor$1, "constructor", "constructor$ #299");
    assert.deepEqual(k.constructor$2, "new constructor", "constructor$$1");
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

QUnit.test("Issue #1877", function (assert) {
    //Unseeded
    var r = new System.Random.ctor();

    var ITERATIONS = 100;

    for (var i = 0; i < ITERATIONS; i++) {
        var x = r.next$1(20);
        assert.ok(x >= 0 && x < 20, x + " under 20 - Next(maxValue)");
    }

    for (var i = 0; i < ITERATIONS; i++) {
        var x = r.next$2(20, 30);
        assert.ok(x >= 20 && x < 30, x + " between 20 and 30 - Next(minValue, maxValue)");
    }

    for (var i = 0; i < ITERATIONS; i++) {
        var x = r.nextDouble();
        assert.ok(x >= 0.0 && x < 1.0, x + " between 0.0 and 1.0  - NextDouble()");
    }

    //Seeded
    var seed = Date.now();

    var r1 = new System.Random.$ctor1(seed);
    var r2 = new System.Random.$ctor1(seed);

    var b1 = [];
    r1.nextBytes(b1);

    var b2 = [];
    r2.nextBytes(b2);

    for (var i = 0; i < b1.length; i++)
    {
        assert.equal(b1[i], b2[i], "NextBytes()");
    }

    for (var i = 0; i < b1.length; i++)
    {
        var x1 = r1.next();
        var x2 = r2.next();

        assert.equal(x1, x2, "Next()");
    }
});

QUnit.test("Issue #1898", function (assert) {
    assert.equal(System.Guid.empty.toString(), "00000000-0000-0000-0000-000000000000");

    var result = new System.Guid.ctor();
    assert.equal(result.toString(), "00000000-0000-0000-0000-000000000000");

    var g = new System.Guid.$ctor1([ 0x78, 0x95, 0x62, 0xa8, 0x26, 0x7a, 0x45, 0x61, 0x90, 0x32, 0xd9, 0x1a, 0x3d, 0x54, 0xbd, 0x68 ]);
    assert.equal(g.toString(), "a8629578-7a26-6145-9032-d91a3d54bd68", "value");
    assert.throws(() => new System.Guid.$ctor1([ 0x78, 0x95, 0x62, 0xa8, 0x26, 0x7a ]), "Invalid array should throw");

    var g = new System.Guid.$ctor3(0x789562a8, 0x267a, 0x4561, [ 0x90, 0x32, 0xd9, 0x1a, 0x3d, 0x54, 0xbd, 0x68 ]);
    assert.equal(g.toString(), "789562a8-267a-4561-9032-d91a3d54bd68", "value");

    var g = new System.Guid.$ctor5(0x789562a8, 0x267a, 0x4561, 0x90, 0x32, 0xd9, 0x1a, 0x3d, 0x54, 0xbd, 0x68);
    assert.equal(g.toString(), "789562a8-267a-4561-9032-d91a3d54bd68", "value");

    var g = new System.Guid.$ctor2(0x789562a8, 0x267a, 0x4561, 0x90, 0x32, 0xd9, 0x1a, 0x3d, 0x54, 0xbd, 0x68);
    assert.equal(g.toString(), "789562a8-267a-4561-9032-d91a3d54bd68", "value");

    var g1 = new System.Guid.$ctor4("A6993C0A-A8CB-45D9-994B-90E7203E4FC6");
    var g2 = new System.Guid.$ctor4("{A6993C0A-A8CB-45D9-994B-90E7203E4FC6}");
    var g3 = new System.Guid.$ctor4("(A6993C0A-A8CB-45D9-994B-90E7203E4FC6)");
    var g4 = new System.Guid.$ctor4("A6993C0AA8CB45D9994B90E7203E4FC6");

    assert.equal(g1.toString(), "a6993c0a-a8cb-45d9-994b-90e7203e4fc6", "g1");
    assert.equal(g2.toString(), "a6993c0a-a8cb-45d9-994b-90e7203e4fc6", "g2");
    assert.equal(g3.toString(), "a6993c0a-a8cb-45d9-994b-90e7203e4fc6", "g3");
    assert.equal(g4.toString(), "a6993c0a-a8cb-45d9-994b-90e7203e4fc6", "g4");
    assert.throws(() => new System.Guid.$ctor4("x"), "Invalid should throw");

    g1 = System.Guid.parse("A6993C0A-A8CB-45D9-994B-90E7203E4FC6");
    assert.equal(g1.toString(), "a6993c0a-a8cb-45d9-994b-90e7203e4fc6", "g1");
    assert.throws(() => System.Guid.parse("x"), "Invalid should throw");

    g1 = System.Guid.parseExact("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", "D");
    var g2 = System.Guid.parseExact("{A6993C0A-A8CB-45D9-994B-90E7203E4FC6}", "B");
    var g3 = System.Guid.parseExact("(A6993C0A-A8CB-45D9-994B-90E7203E4FC6)", "P");
    var g4 = System.Guid.parseExact("A6993C0AA8CB45D9994B90E7203E4FC6", "N");

    assert.equal(g1.toString(), "a6993c0a-a8cb-45d9-994b-90e7203e4fc6", "g1");
    assert.equal(g2.toString(), "a6993c0a-a8cb-45d9-994b-90e7203e4fc6", "g2");
    assert.equal(g3.toString(), "a6993c0a-a8cb-45d9-994b-90e7203e4fc6", "g3");
    assert.equal(g4.toString(), "a6993c0a-a8cb-45d9-994b-90e7203e4fc6", "g4");
    assert.throws(() => System.Guid.parseExact("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", "B"), "Invalid B should throw");
    assert.throws(() => System.Guid.parseExact("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", "P"), "Invalid P should throw");
    assert.throws(() => System.Guid.parseExact("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", "N"), "Invalid N should throw");
    assert.throws(() => System.Guid.parseExact("A6993C0AA8CB45D9994B90E7203E4FC6", "D"), "Invalid D should throw");

    var r = { v: new System.Guid.ctor() };
    assert.ok(System.Guid.tryParse("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", r), "g1 result");
    assert.equal(r.v.toString(), "a6993c0a-a8cb-45d9-994b-90e7203e4fc6", "g1");
    assert.notOk(System.Guid.tryParse("x", r), "Invalid should throw");
    assert.equal(r.v.toString(), "00000000-0000-0000-0000-000000000000", "g5");

    assert.ok(System.Guid.tryParseExact("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", "D", r), "g1 result");
    assert.equal(r.v.toString(), "a6993c0a-a8cb-45d9-994b-90e7203e4fc6", "g1");
    assert.ok(System.Guid.tryParseExact("{A6993C0A-A8CB-45D9-994B-90E7203E4FC6}", "B", r), "g2 result");
    assert.equal(r.v.toString(), "a6993c0a-a8cb-45d9-994b-90e7203e4fc6", "g2");
    assert.ok(System.Guid.tryParseExact("(A6993C0A-A8CB-45D9-994B-90E7203E4FC6)", "P", r), "g3 result");
    assert.equal(r.v.toString(), "a6993c0a-a8cb-45d9-994b-90e7203e4fc6", "g3");
    assert.ok(System.Guid.tryParseExact("A6993C0AA8CB45D9994B90E7203E4FC6", "N", r), "g4 result");
    assert.equal(r.v.toString(), "a6993c0a-a8cb-45d9-994b-90e7203e4fc6", "g4");
    assert.notOk(System.Guid.tryParseExact("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", "B", r), "g5 result");
    assert.equal(r.v.toString(), "00000000-0000-0000-0000-000000000000", "g5");
    assert.notOk(System.Guid.tryParseExact("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", "P", r), "g6 result");
    assert.equal(r.v.toString(), "00000000-0000-0000-0000-000000000000", "g6");
    assert.notOk(System.Guid.tryParseExact("A6993C0A-A8CB-45D9-994B-90E7203E4FC6", "N", r), "g7 result");
    assert.equal(r.v.toString(), "00000000-0000-0000-0000-000000000000", "g7");
    assert.notOk(System.Guid.tryParseExact("A6993C0AA8CB45D9994B90E7203E4FC6", "D", r), "g8 result");
    assert.equal(r.v.toString(), "00000000-0000-0000-0000-000000000000", "g8");

    g = new System.Guid.$ctor4("F3D8B3C0-88F0-4148-844C-232ED03C153C");
    assert.equal(g.compareTo(new System.Guid.$ctor4("F3D8B3C0-88F0-4148-844C-232ED03C153C")), 0, "equal");
    assert.notEqual(g.compareTo(new System.Guid.$ctor4("E4C221BE-9B39-4398-B82A-48BA4648CAE0")), 0, "not equal");

    var g = new System.Guid.$ctor4("DE33AC65-09CB-465C-AD7E-53124B2104E8");
    assert.equal(g.toString$1("N"), "de33ac6509cb465cad7e53124b2104e8", "N");
    assert.equal(g.toString$1("D"), "de33ac65-09cb-465c-ad7e-53124b2104e8", "D");
    assert.equal(g.toString$1("B"), "{de33ac65-09cb-465c-ad7e-53124b2104e8}", "B");
    assert.equal(g.toString$1("P"), "(de33ac65-09cb-465c-ad7e-53124b2104e8)", "P");
    assert.equal(g.toString$1(""), "de33ac65-09cb-465c-ad7e-53124b2104e8", "empty");
    assert.equal(g.toString$1(null), "de33ac65-09cb-465c-ad7e-53124b2104e8", "null");

    var g = System.Guid.newGuid();
    var s = g.toString$1("N");
    assert.ok(s[16] == '8' || s[16] == '9' || s[16] == 'a' || s[16] == 'b', "Should be standard guid");
    assert.ok(s[12] == '4', "Should be type 4 guid");

    var g = new System.Guid.$ctor4("8440F854-0C0B-4355-9722-1608D62E8F87");
    assert.deepEqual(g.toByteArray(), [ 0x54, 0xf8, 0x40, 0x84, 0x0b, 0x0c, 0x55, 0x43, 0x97, 0x22, 0x16, 0x08, 0xd6, 0x2e, 0x8f, 0x87 ]);
});
