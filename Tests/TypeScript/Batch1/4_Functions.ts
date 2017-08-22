/// <reference path="..\..\Runner\resources\qunit\qunit.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\bridge.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\functions.d.ts" />

"use strict";

QUnit.module("TypeScript - Functions");
QUnit.test("Parameters", function (assert) {
    var func = new Functions.Parameters();

    // TODO Bridge/#292
    // assert.deepEqual(func.getSomething(), 5, "Default parameter #292");
    //function buildName(firstName: string, lastName = "Smith") {
    //    // JavaScript added for the default parameter
    //    // if (typeof lastName === "undefined") { lastName = "Smith"; }
    //    return firstName + " " + lastName;
    //}
    //var result1 = buildName("Bob");

    // #293
    assert.deepEqual(func.Join([1, 2, 3]), "123", "params argument becomes Array #293");
});

QUnit.test("Function types", function (assert) {
    var d = new Functions.DelegateClass();

    var ds: string;
    var di: number;

    d.MethodVoidDelegate = () => di = 7;
    d.MethodVoidDelegate();
    assert.deepEqual(di, 7, "methodVoidDelegate");

    d.MethodStringDelegate = (s: string) => ds = s;
    d.MethodStringDelegate("Privet");
    assert.deepEqual(ds, "Privet", "methodStringDelegate");

    d.MethodStringDelegateIntResult = (s: string) => s.length;
    assert.deepEqual(d.MethodStringDelegateIntResult("Privet"), 6, "methodStringDelegateIntResult");
});
