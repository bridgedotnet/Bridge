/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.TestOverloadInstanceMethods', {
    statics: {
        testInstance: function (assert) {
            assert.expect(17);

            var i = new ClientTestLibrary.TestOverloadInstanceMethods.Instance();

            assert.ok(i !== null, "i created");
            assert.equal(i.foo$2(1), "Foo(int x)", "Instance Foo(int x)");
            assert.equal(i.foo$5("string"), "Foo(string s)", "Instance Foo(string s)");
            assert.equal(i.foo(1.1), "Foo(double d)", "Instance Foo(double d)");
            assert.equal(i.foo$4(1, 2), "Foo(int x, int y)", "Instance Foo(int x, int y)");
            assert.equal(i.foo$3(1, 1.1), "Foo(int x, double y)", "Instance Foo(int x, double y)");
            assert.equal(i.foo$1(1.1, 1), "Foo(double x, int y)", "Instance Foo(double x, int y)");

            assert.equal(i.fooReturnType(1), 67, "Instance char FooReturnType(int y)");
            assert.equal(i.fooReturnType$1(1.1), "string FooReturnType(double d)", "Instance string FooReturnType(double d)");

            assert.equal(i.fooOptionalParameters(1), "FooOptionalParameters(int x)", "Instance FooOptionalParameters(int x)");
            assert.equal(i.fooOptionalParameters$1(1, 2), "FooOptionalParameters(int x, int y = 5)", "Instance FooOptionalParameters(int x, int y = 5)");

            assert.equal(i.fooMultipleOptionalParameters(1, 2), "FooMultipleOptionalParameters(int x, int y = 5)", "Instance FooMultipleOptionalParameters(int x, int y = 5)");
            assert.equal(i.fooMultipleOptionalParameters$1(1, 5, 2), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            assert.equal(i.fooMultipleOptionalParameters$1(1, 2, 3), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            assert.equal(i.fooMultipleOptionalParameters$1(1, 3, 2), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");

            assert.equal(i.fooNamedArgument$1(1), "FooNamedArgument(int x)", "Static FooNamedArgument(int x)");
            assert.equal(i.fooNamedArgument(1), "FooNamedArgument(double d)", "Static FooNamedArgument(double d)");
        }
    }
});

Bridge.define('ClientTestLibrary.TestOverloadInstanceMethods.Instance', {
    foo$2: function (x) {
        return "Foo(int x)";
    },
    foo$5: function (s) {
        return "Foo(string s)";
    },
    foo: function (d) {
        return "Foo(double d)";
    },
    foo$4: function (x, y) {
        return "Foo(int x, int y)";
    },
    foo$3: function (x, y) {
        return "Foo(int x, double y)";
    },
    foo$1: function (x, y) {
        return "Foo(double x, int y)";
    },
    fooReturnType: function (x) {
        return 67;
    },
    fooReturnType$1: function (d) {
        return "string FooReturnType(double d)";
    },
    fooOptionalParameters$1: function (x, y) {
        if (y === void 0) { y = 5; }
        return "FooOptionalParameters(int x, int y = 5)";
    },
    fooOptionalParameters: function (x) {
        return "FooOptionalParameters(int x)";
    },
    fooMultipleOptionalParameters$1: function (x, y, z) {
        if (y === void 0) { y = 5; }
        if (z === void 0) { z = 10; }
        return "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)";
    },
    fooMultipleOptionalParameters: function (x, y) {
        if (y === void 0) { y = 5; }
        return "FooMultipleOptionalParameters(int x, int y = 5)";
    },
    fooNamedArgument$1: function (x) {
        return "FooNamedArgument(int x)";
    },
    fooNamedArgument: function (d) {
        return "FooNamedArgument(double d)";
    }
});



Bridge.init();