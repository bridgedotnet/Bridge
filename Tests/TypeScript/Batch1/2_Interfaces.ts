/// <reference path="..\..\Runner\resources\qunit\qunit.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\bridge.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\interfaces.d.ts" />

QUnit.module("TypeScript - Interfaces");
QUnit.test("Simple field and property", function (assert) {
    var instance: Interfaces.Class1 = new Interfaces.Class1();

    TestInstance1(assert, instance);
});

QUnit.test("Four methods", function (assert) {
    var instance: Interfaces.Class2 = new Interfaces.Class2();

    TestInstance1(assert, instance);

    TestInstance2(assert, instance);
});

QUnit.test("Fifth method through Interface3", function (assert) {
    var instance: Interfaces.Class3 = new Interfaces.Class3();

    TestInstance1(assert, instance);

    TestInstance2(assert, instance);

    TestInstance3(assert, instance);
});

QUnit.test("Out and reference parameters", function (assert) {
    var instance: Interfaces.Class4 = new Interfaces.Class4();
    TestInstance4(assert, instance);
});

QUnit.test("Property setter and getter with same names as methods", function (assert) {
    var instance: Interfaces.Class6 = new Interfaces.Class6();
    TestInstance6(assert, instance);
});

function TestInstance1(assert: QUnitAssert, instance: Interfaces.Class1) {
    var interface1: Interfaces.Interface1 = instance;

    assert.deepEqual(interface1.Interfaces$Interface1$getProperty(), 100, "Interface1 Property getter");
    assert.deepEqual(instance.field, 200, "Class1 Field initial value");

    interface1.Interfaces$Interface1$setProperty(300);
    assert.deepEqual(instance.getProperty(), 300, "Class1 Property setter");
}

function TestInstance2(assert: QUnitAssert, instance: Interfaces.Class2) {
    var interface2: Interfaces.Interface2 = instance;

    interface2.method1();
    assert.deepEqual(interface2.Interfaces$Interface1$getProperty(), 2, "Method1() through Property");
    assert.deepEqual(instance.field, 1, "Method1() through Fileld");

    interface2.method2("1234567");
    assert.deepEqual(instance.field, 7, "Method2() through Field");

    assert.deepEqual(interface2.method3(), instance.field, "Method3 through Field");

    assert.ok(interface2.method4(instance), "Method4 through return result");
    assert.deepEqual(instance.field, interface2.Interfaces$Interface1$getProperty(), "Method4 through Field");
}

function TestInstance3(assert: QUnitAssert, instance: Interfaces.Class3) {
    var interface3: Interfaces.Interface3 = instance;

    var interface2 = interface3.method5(interface3);
    assert.deepEqual(interface3.Interfaces$Interface1$getProperty(), interface2.Interfaces$Interface1$getProperty(), "Method5 through Property");

    var instance1: Interfaces.Class1 = instance;
    assert.deepEqual(instance1.field, instance.field, "Method5 through Field");
}

function TestInstance4(assert: QUnitAssert, instance: Interfaces.Class4) {
    var interface4: Interfaces.Interface4 = instance;

    var boolValue = false;
    var boolRef = { v: boolValue };

    instance.method6(boolRef);
    assert.deepEqual(boolRef.v, true, "Method6() out bool parameter");

    boolRef.v = false;
    instance.method7(1, boolRef);
    assert.deepEqual(boolRef.v, true, "Method7() int, out bool parameter");

    var stringValue = "ABC_";
    var stringRef = { v: stringValue };
    instance.method8(stringRef);
    assert.deepEqual(stringRef.v, "ABC_Method8", "Method8() ref string parameter");

    stringRef.v = "ABC_";
    instance.method9(1, stringRef);
    assert.deepEqual(stringRef.v, "ABC_1", "Method9() int, ref string parameter");

    stringRef.v = "ABC_";
    boolRef.v = false;
    instance.method10(2, boolRef, stringRef);
    assert.deepEqual(boolRef.v, true, "Method10() int, ref bool, out bool parameter");
    assert.deepEqual(stringRef.v, "ABC_2", "Method10() int, ref bool, ref string parameter");
}

function TestInstance6(assert: QUnitAssert, instance: Interfaces.Class6) {
    var interface6: Interfaces.Interface6 = instance;

    interface6.Interfaces$Interface6$setProperty(1);
    assert.deepEqual(instance.getProperty(), 1, "Property getter and setter");

    interface6.Interfaces$Interface6$setProperty$3("12");
    assert.deepEqual(instance.getMethodProperty(), 2, "setProperty$1(string) and MethodProperty");
    assert.deepEqual(instance.getProperty$1(), 2, "setPropert$1(string) and getProperty");
    assert.notDeepEqual(instance.getProperty(), instance.getProperty$1(), "getProperty and getProperty$3");

    interface6.Interfaces$Interface6$setProperty$2(3);
    assert.deepEqual(instance.getMethodProperty(), 3, "setProperty(int) and MethodProperty");
    assert.deepEqual(instance.getProperty$1(), 3, "setPropert$1(int) and getProperty");
    assert.notDeepEqual(instance.getProperty(), instance.getProperty$1(), "getProperty$3 and getProperty");

    //var interface61: Interfaces.Interface61 = instance;
    //var interface62: Interfaces.Interface62 = instance;
}
