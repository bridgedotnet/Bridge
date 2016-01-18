QUnit.module("TypeScript - Issues");
QUnit.test("#290", function (assert) {
    var c1 = new Misc.A.Class1();
    var c2 = new Misc.B.Class2();
    assert.deepEqual(c1.getInt(3), 3, "Misc.A.Class1.getInt");
    assert.deepEqual(c2.getInt(6), 6, "Use class declared in another namespace");
});
QUnit.test("#281", function (assert) {
    var t = new Misc.A.EnumTest();
    assert.deepEqual(t.doSomething(Misc.A.EnumTest.EnumA.m2), Misc.A.EnumTest.EnumA.m2, "Use enum declared inside a class");
});
QUnit.test("#336", function (assert) {
    var l1 = new (Bridge.List$1(String))(["4"]);
    var l2 = new (Bridge.List$1(String))(["1", "2"]);
    l1.insertRange(0, l2);
    assert.deepEqual(l1.toArray(), ["1", "2", "4"], "InsertRange works (1)");
});
QUnit.test("#338", function (assert) {
    var list = new (Bridge.List$1(String))(["4"]);
    var interfacedList = list;
    assert.deepEqual(interfacedList.get(0), "4", "Bridge.List$1(String) is Bridge.IList$1<String>");
});
