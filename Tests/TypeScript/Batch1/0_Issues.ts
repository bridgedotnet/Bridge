/// <reference path="..\..\Runner\resources\qunit\qunit.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\bridge.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\misc.a.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\misc.b.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\typeScript.issues.d.ts" />

QUnit.module("TypeScript - Issues");
QUnit.test("#290", function (assert) {
    var c1 = new Misc.A.Class1();
    var c2 = new Misc.B.Class2();

    assert.deepEqual(c1.getInt(3), 3, "Misc.A.Class1.getInt");
    assert.deepEqual(c2.getInt(6), 6, "Use class declared in another namespace");
});

QUnit.test("#281", function (assert) {
    var t = new Misc.A.EnumTest();

    assert.deepEqual(t.doSomething(Misc.A.EnumTest.EnumA.M2), Misc.A.EnumTest.EnumA.M2, "Use enum declared inside a class");
});

QUnit.test("#336", function (assert) {
    var l1 = new (System.Collections.Generic.List$1(String))(["4"]);
    var l2 = new (System.Collections.Generic.List$1(String))(["1", "2"]);

    l1.insertRange(0, l2);
    assert.deepEqual(l1.toArray(), ["1", "2", "4"], "InsertRange works (1)");
});

QUnit.test("#338", function (assert) {
    var list = new (System.Collections.Generic.List$1(String))(["4"]);
    var interfacedList: System.Collections.Generic.IList$1<String> = list;

    assert.deepEqual(interfacedList.get(0), "4", "Bridge.List$1(String) is Bridge.IList$1<String>");
});

QUnit.test("#2029", function (assert) {
    var a = new (TypeScript.Issues.N2029)();
    a.setValue1(25);
    var i: TypeScript.Issues.N2029Interface$1<number> = a;

    assert.deepEqual(i.getValue1(), 25);
});
