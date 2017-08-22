/// <reference path="..\..\Runner\resources\qunit\qunit.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\bridge.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\misc.a.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\misc.b.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\typeScriptTest.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\typeScript.issues.d.ts" />
"use strict";
QUnit.module("TypeScript - Issues");
QUnit.test("#290", function (assert) {
    var c1 = new Misc.A.Class1();
    var c2 = new Misc.B.Class2();
    assert.deepEqual(c1.GetInt(3), 3, "Misc.A.Class1.getInt");
    assert.deepEqual(c2.GetInt(6), 6, "Use class declared in another namespace");
});
QUnit.test("#281", function (assert) {
    var t = new Misc.A.EnumTest();
    assert.deepEqual(t.DoSomething(Misc.A.EnumTest.EnumA.M2), Misc.A.EnumTest.EnumA.M2, "Use enum declared inside a class");
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
    var c = a.GetC();
    assert.notEqual(c, null);
});
QUnit.test("#1640", function (assert) {
    var game1 = new TypeScript.Issues.N1640.GamePlay();
    var result1;
    var s1 = function (sender, s) { result1 = s + "1"; };
    var iGame1 = game1;
    game1.Subscribe(s1);
    iGame1.StartGame("First");
    assert.equal(result1, "First1");
    var game2 = new TypeScript.Issues.N1640.GamePlay();
    var result2;
    var s2 = function (sender, s) { result2 = s + "2"; };
    var iGame2 = game2;
    iGame2.addOnGameEvent(s2);
    iGame2.StartGame("Second");
    assert.equal(result2, "Second2");
    iGame2.removeOnGameEvent(s2);
    result2 = "Removed";
    iGame2.StartGame("");
    assert.equal(result2, "Removed");
    iGame2.addOnGameEvent(s2);
    iGame2.StartGame("SecondPlus");
    assert.equal(result2, "SecondPlus2");
});
QUnit.test("#2029", function (assert) {
    var a = new (TypeScript.Issues.N2029)();
    a.Value1 = 25;
    var i = a;
    assert.deepEqual(i.Value1, 25);
});
QUnit.test("#2030", function (assert) {
    var a = new (TypeScript.Issues.N2030Attribute)(true);
    assert.deepEqual(a.IsUnspecified, true);
});
QUnit.test("#2031", function (assert) {
    var a = new (TypeScript.Issues.N2031DictionaryMap$2(String, Number).ctor)();
    a.Add("1", 1);
    a.Add("2", 2);
    var f = a.Forward;
    var r = a.Reverse;
    assert.deepEqual(f.getItem("1"), 1, "1");
    assert.deepEqual(f.getItem("2"), 2, "2");
});
QUnit.test("#2133", function (assert) {
    var task = new System.Threading.Tasks.Task$1(function () { return 5; });
    assert.ok(task != null);
});
QUnit.test("#2264", function (assert) {
    var a = new TypeScript.Issues.N2264(new (System.Collections.Generic.List$1(String))());
    assert.notEqual(a.Values, null);
    var list = new (System.Collections.Generic.List$1(String));
    list.add("first");
    var b = new TypeScript.Issues.N2264(list);
    assert.notEqual(b.Values, null);
    var enumerator = b.Values.getEnumerator();
    enumerator.moveNext();
    assert.deepEqual(enumerator.getCurrent(), "first");
});
QUnit.test("#2438", function (assert) {
    var a = new TypeScript.Issues.N2438();
    assert.ok(a.isDefaultCtor);
});
QUnit.test("#2474", function (assert) {
    var e1 = TypeScript.Issues.N2474.Enum.Value;
    assert.equal(e1, 1, "Default (no [Enum])");
    var e2 = TypeScript.Issues.N2474.ValueEnum.Value;
    assert.equal(e2, 2, "ValueEnum");
    var e3 = TypeScript.Issues.N2474.NameEnum.value;
    assert.equal(e3, 3, "NameEnum");
    var e4 = TypeScript.Issues.N2474.NameLowerCase.value;
    assert.equal(e4, 4, "NameLowerCase");
    var e5 = TypeScript.Issues.N2474.NamePreserveCase.Value;
    assert.equal(e5, 5, "NamePreserveCase");
    var e6 = TypeScript.Issues.N2474.NameUpperCase.VALUE;
    assert.equal(e6, 6, "NameUpperCase");
    var e7 = TypeScript.Issues.N2474.StringName.value;
    assert.equal(e7, "value", "StringName");
    var e8 = TypeScript.Issues.N2474.StringNameLowerCase.value;
    assert.equal(e8, "value", "StringNameLowerCase");
    var e9 = TypeScript.Issues.N2474.StringNamePreserveCase.Value;
    assert.equal(e9, "Value", "StringNamePreserveCase");
    var e10 = TypeScript.Issues.N2474.StringNameUpperCase.VALUE;
    assert.equal(e10, "VALUE", "StringNameUpperCase");
});
QUnit.test("#2463", function (assert) {
    var ol = { Nothing: 1 };
    TypeScript.Issues.N2463.Do(ol);
    assert.equal(ol.Nothing, 2);
});
QUnit.test("#2493", function (assert) {
    var op1 = new N2493Operation1();
    assert.equal(op1.Add(1), 2);
    var op2 = new Operation2();
    assert.equal(op2.Add(1), 3);
    var op3 = new TypeScript.Issues.N2493Operation3();
    assert.equal(op3.Add(1), 4);
});
QUnit.test("#2653", function (assert) {
    var z = new TypeScript.Issues.N2653Zig();
    var r = z.zag();
    assert.equal(r, 1);
});
QUnit.test("#2661", function (assert) {
    var c = new TypeScript.Issues.N2661C();
    c.fn = function (x) { return x.fn; };
    var fn1 = c.fn;
    var fn2 = c.fn(c);
    assert.equal(fn1, fn2);
});
QUnit.test("#2911", function (assert) {
    var initButton = document.createElement("button");
    initButton.onclick = TypeScript.Issues.N2911.initButton_Clicked;
    initButton.addEventListener("onclick", TypeScript.Issues.N2911.initButton_Clicked);
    // TypeScript syntax would broke if TypeScript.Issues.N2911.initButton_Clicked used generic syntax
    assert.ok(true);
});
