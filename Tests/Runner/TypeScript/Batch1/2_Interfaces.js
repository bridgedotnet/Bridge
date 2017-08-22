/// <reference path="..\..\Runner\resources\qunit\qunit.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\bridge.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\interfaces.d.ts" />
"use strict";
QUnit.module("TypeScript - Interfaces");
QUnit.test("Simple field and property", function (assert) {
    var instance = new Interfaces.Class1();
    TestInstance1(assert, instance);
});
QUnit.test("Four methods", function (assert) {
    var instance = new Interfaces.Class2();
    TestInstance1(assert, instance);
    TestInstance2(assert, instance);
});
QUnit.test("Fifth method through Interface3", function (assert) {
    var instance = new Interfaces.Class3();
    TestInstance1(assert, instance);
    TestInstance2(assert, instance);
    TestInstance3(assert, instance);
});
QUnit.test("Out and reference parameters", function (assert) {
    var instance = new Interfaces.Class4();
    TestInstance4(assert, instance);
});
QUnit.test("Property setter and getter with same names as methods", function (assert) {
    var instance = new Interfaces.Class6();
    TestInstance6(assert, instance);
});
function TestInstance1(assert, instance) {
    var interface1 = instance;
    assert.deepEqual(interface1.Interfaces$Interface1$Property, 100, "Interface1 Property getter");
    assert.deepEqual(instance.Field, 200, "Class1 Field initial value");
    interface1.Interfaces$Interface1$Property = 300;
    assert.deepEqual(instance.Property, 300, "Class1 Property setter");
}
function TestInstance2(assert, instance) {
    var interface2 = instance;
    interface2.Interfaces$Interface2$Method1();
    assert.deepEqual(interface2.Interfaces$Interface1$Property, 2, "Method1() through Property");
    assert.deepEqual(instance.Field, 1, "Method1() through Fileld");
    interface2.Interfaces$Interface2$Method2("1234567");
    assert.deepEqual(instance.Field, 7, "Method2() through Field");
    assert.deepEqual(interface2.Interfaces$Interface2$Method3(), instance.Field, "Method3 through Field");
    assert.ok(interface2.Interfaces$Interface2$Method4(instance), "Method4 through return result");
    assert.deepEqual(instance.Field, interface2.Interfaces$Interface1$Property, "Method4 through Field");
}
function TestInstance3(assert, instance) {
    var interface3 = instance;
    var interface2 = interface3.Interfaces$Interface3$Method5(interface3);
    assert.deepEqual(interface3.Interfaces$Interface1$Property, interface2.Interfaces$Interface1$Property, "Method5 through Property");
    var instance1 = instance;
    assert.deepEqual(instance1.Field, instance.Field, "Method5 through Field");
}
function TestInstance4(assert, instance) {
    var interface4 = instance;
    var boolValue = false;
    var boolRef = { v: boolValue };
    instance.Method6(boolRef);
    assert.deepEqual(boolRef.v, true, "Method6() out bool parameter");
    boolRef.v = false;
    instance.Method7(1, boolRef);
    assert.deepEqual(boolRef.v, true, "Method7() int, out bool parameter");
    var stringValue = "ABC_";
    var stringRef = { v: stringValue };
    instance.Method8(stringRef);
    assert.deepEqual(stringRef.v, "ABC_Method8", "Method8() ref string parameter");
    stringRef.v = "ABC_";
    instance.Method9(1, stringRef);
    assert.deepEqual(stringRef.v, "ABC_1", "Method9() int, ref string parameter");
    stringRef.v = "ABC_";
    boolRef.v = false;
    instance.Method10(2, boolRef, stringRef);
    assert.deepEqual(boolRef.v, true, "Method10() int, ref bool, out bool parameter");
    assert.deepEqual(stringRef.v, "ABC_2", "Method10() int, ref bool, ref string parameter");
}
function TestInstance6(assert, instance) {
    var interface6 = instance;
    interface6.Interfaces$Interface6$Property = 1;
    assert.deepEqual(instance.Property, 1, "Property getter and setter");
    interface6.Interfaces$Interface6$SetProperty$1("12");
    assert.deepEqual(instance.MethodProperty, 2, "setProperty$1(string) and MethodProperty");
    assert.deepEqual(instance.GetProperty(), 2, "setPropert$1(string) and getProperty");
    assert.notDeepEqual(instance.Property, instance.GetProperty(), "getProperty and getProperty$3");
    interface6.Interfaces$Interface6$SetProperty(3);
    assert.deepEqual(instance.MethodProperty, 3, "setProperty(int) and MethodProperty");
    assert.deepEqual(instance.GetProperty(), 3, "setPropert$1(int) and getProperty");
    assert.notDeepEqual(instance.Property, instance.GetProperty(), "getProperty$3 and getProperty");
    //var interface61: Interfaces.Interface61 = instance;
    //var interface62: Interfaces.Interface62 = instance;
}
