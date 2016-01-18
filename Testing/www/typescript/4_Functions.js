QUnit.module("TypeScript - Functions");
QUnit.test("Parameters", function (assert) {
    var func = new Functions.Parameters();
    QUnit.deepEqual(func.join([1, 2, 3]), "123", "params argument becomes Array #293");
});
QUnit.test("Function types", function (assert) {
    var d = new Functions.DelegateClass();
    var ds;
    var di;
    d.methodVoidDelegate = function () { return di = 7; };
    d.methodVoidDelegate();
    QUnit.deepEqual(di, 7, "methodVoidDelegate");
    d.methodStringDelegate = function (s) { return ds = s; };
    d.methodStringDelegate("Privet");
    QUnit.deepEqual(ds, "Privet", "methodStringDelegate");
    d.methodStringDelegateIntResult = function (s) { return s.length; };
    QUnit.deepEqual(d.methodStringDelegateIntResult("Privet"), 6, "methodStringDelegateIntResult");
});
