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
    var interfacedList = list;
    assert.deepEqual(interfacedList.get(0), "4", "Bridge.List$1(String) is Bridge.IList$1<String>");
});
QUnit.test("#1060", function (assert) {
    var a = new (TypeScript.Issues.N1060.B$1(Number))();
    var c = a.getC();
    assert.notEqual(c, null);
});
QUnit.test("#1640", function (assert) {
    var game1 = new TypeScript.Issues.N1640.GamePlay();
    var result1;
    var s1 = function (sender, s) { result1 = s + "1"; };
    var iGame1 = game1;
    game1.subscribe(s1);
    iGame1.startGame("First");
    assert.equal(result1, "First1");
    var game2 = new TypeScript.Issues.N1640.GamePlay();
    var result2;
    var s2 = function (sender, s) { result2 = s + "2"; };
    var iGame2 = game2;
    iGame2.addOnGameEvent(s2);
    iGame2.startGame("Second");
    assert.equal(result2, "Second2");
    iGame2.removeOnGameEvent(s2);
    result2 = "Removed";
    iGame2.startGame("");
    assert.equal(result2, "Removed");
    iGame2.addOnGameEvent(s2);
    iGame2.startGame("SecondPlus");
    assert.equal(result2, "SecondPlus2");
});
QUnit.test("#2029", function (assert) {
    var a = new (TypeScript.Issues.N2029)();
    a.setValue1(25);
    var i = a;
    assert.deepEqual(i.getValue1(), 25);
});
QUnit.test("#2030", function (assert) {
    var a = new (TypeScript.Issues.N2030Attribute)(true);
    assert.deepEqual(a.getIsUnspecified(), true);
});
QUnit.test("#2031", function (assert) {
    var a = new (TypeScript.Issues.N2031DictionaryMap$2(String, Number).ctor)();
    a.add("1", 1);
    a.add("2", 2);
    var f = a.getForward();
    var r = a.getReverse();
    assert.deepEqual(f.getItem("1"), 1, "1");
    assert.deepEqual(f.getItem("2"), 2, "2");
});
QUnit.test("#2133", function (assert) {
    var task = new System.Threading.Tasks.Task$1(function () { return 5; });
    assert.ok(task != null);
});
QUnit.test("#2264", function (assert) {
    var a = new TypeScript.Issues.N2264(new (System.Collections.Generic.List$1(String))());
    assert.notEqual(a.getValues(), null);
    var list = new (System.Collections.Generic.List$1(String));
    list.add("first");
    var b = new TypeScript.Issues.N2264(list);
    assert.notEqual(b.getValues(), null);
    var enumerator = b.getValues().getEnumerator();
    enumerator.moveNext();
    assert.deepEqual(enumerator.getCurrent(), "first");
});
QUnit.test("#2438", function (assert) {
    var a = new TypeScript.Issues.N2438();
    assert.ok(a.isDefaultCtor);
});
