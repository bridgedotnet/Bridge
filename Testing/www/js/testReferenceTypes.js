/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Class68', {
    x: 0,
    y: 1,
    test: function () {
        //Multiple local vars correctly
        var x = 1, y = 2;

        var z = x + y;
    }
});

Bridge.define('ClientTestLibrary.ClassA', {
    statics: {
        constructor: function () {
            ClientTestLibrary.ClassA.staticString = "Defined string";
            ClientTestLibrary.ClassA.staticInt = -340;
        },
        statitIntNotInitialized: 0,
        statitStringNotInitialized: null,
        staticInt: 0,
        staticString: null,
        CONST_CHAR: 81,
        CONST_DECIMAL: Bridge.Decimal("3.123456789324324324"),
        staticMethod1: function (i, s, d) {
            ClientTestLibrary.ClassA.statitIntNotInitialized = i;
            ClientTestLibrary.ClassA.statitStringNotInitialized = s;

            return Bridge.merge(new ClientTestLibrary.ClassA("constructor"), {
                setDoubleA: d
            } );
        },
        staticMethod2: function (p) {
            var i = Bridge.cast(p[0], Bridge.Int) + 1000;
            var s = Bridge.cast(p[1], String);
            var d = Bridge.cast(p[2], Number);

            return ClientTestLibrary.ClassA.staticMethod1(i, s, d);
        },
        tryParse: function (o, i) {
            i.v = 3;

            return true;
        },
        getDefaultInt: function () {
            return Bridge.getDefaultValue(Bridge.Int);
        }
    },
    data: null,
    config: {
        properties: {
            NumberA: 0,
            StringA: null,
            BoolA: false,
            DoubleA: 0,
            DecimalA: Bridge.Decimal(0.0)
        }
    },
    constructor: function () {
        this.setNumberA(10);
        this.setStringA("Str");
        this.setBoolA(true);
        this.setDoubleA(Number.POSITIVE_INFINITY);
        this.setDecimalA(Bridge.Decimal.MinusOne);
        this.setData(Bridge.merge(new ClientTestLibrary.ClassA.Aux1(), {
            setNumber: 700
        } ));
    },
    constructor$1: function (d) {
        this.$constructor();

        if (d === null)
            throw new Bridge.Exception("Related should not be null");

        this.setData(d);
    },
    constructor$2: function (p) {
        this.$constructor();

        if (p === null || p.length < 6) {
            throw new Bridge.Exception("Should pass six parameters");
        }

        if (Bridge.is(p[0], Bridge.Int)) {
            this.setNumberA(Bridge.cast(p[0], Bridge.Int));
        }

        if (Bridge.is(p[1], String)) {
            this.setStringA(Bridge.cast(p[1], String));
        }

        if (Bridge.is(p[2], Boolean)) {
            this.setBoolA(Bridge.cast(p[2], Boolean));
        }

        if (Bridge.is(p[3], Number)) {
            this.setDoubleA(Bridge.cast(p[3], Number));
        }

        if (Bridge.is(p[4], Bridge.Decimal)) {
            this.setDecimalA(Bridge.cast(p[4], Bridge.Decimal));
        }

        if (Bridge.is(p[5], ClientTestLibrary.ClassA.Aux1)) {
            this.setData(Bridge.cast(p[5], ClientTestLibrary.ClassA.Aux1));
        }
    },
    getData: function () {
        return this.data;
    },
    setData: function (value) {
        this.data = value;
    },
    method1: function () {
        var a1 = Bridge.merge(new ClientTestLibrary.ClassA.Aux1(), {
            setNumber: 1
        } );

        return Bridge.merge(new ClientTestLibrary.ClassA.Aux1(), {
            setNumber: 2,
            setRelated: a1
        } );
    },
    method2: function (a) {
        a.setRelated(a);
    },
    method3: function () {
        if (this.getData() !== null) {
            return this.getData().toString();
        }

        return "no data";
    },
    method4: function (i, add) {
        i = i + add;
        return i;
    },
    method5: function (i) {
        if (i === void 0) { i = -5; }
        return i;
    },
    method5$1: function (i, k) {
        if (i === void 0) { i = -50; }
        if (k === void 0) { k = -60; }
        return i + k;
    }
});

Bridge.define('ClientTestLibrary.ClassA.Aux1', {
    config: {
        properties: {
            Number: 0,
            Related: null
        }
    },
    toString: function () {
        return Bridge.String.format("{0} Has related {1}", this.getNumber(), this.getRelated() !== null ? this.getRelated().getNumber().toString() : "No");
    }
});

Bridge.define('ClientTestLibrary.TestReferenceTypes', {
    statics: {
        testInstanceConstructorsAndMethods: function (assert) {
            assert.expect(26);

            //Check parameterless constructor
            var a = new ClientTestLibrary.ClassA("constructor");

            // TEST
            assert.deepEqual(a.getNumberA(), 10, "NumberA 10");
            assert.deepEqual(a.getStringA(), "Str", "StringA Str");
            assert.deepEqual(a.getBoolA(), true, "BoolA true");
            assert.ok(a.getDoubleA() === Number.POSITIVE_INFINITY, "DoubleA Double.PositiveInfinity");
            assert.deepEqual(a.getDecimalA(), Bridge.Decimal(-1.0), "DecimalA Decimal.MinusOne");
            assert.ok(a.getData() !== null, "Data not null");
            assert.deepEqual(a.getData().getNumber(), 700, "Data.Number 700");

            // TEST
            //Check constructor with parameter
            assert.throws(ClientTestLibrary.TestSet1FailureHelper.testConstructor1Failure, "Related should not be null", "Related should not be null");

            // TEST
            //Check constructor with parameter
            assert.throws(ClientTestLibrary.TestSet1FailureHelper.testConstructor2Failure, "Should pass six parameters", "Should pass six parameters");

            a = new ClientTestLibrary.ClassA("constructor$2", [150, "151", true, 1.53, Bridge.Decimal(1.54), Bridge.merge(new ClientTestLibrary.ClassA.Aux1(), {
                setNumber: 155
            } )]);

            assert.deepEqual(a.getNumberA(), 150, "NumberA 150");
            assert.deepEqual(a.getStringA(), "151", "StringA 151");
            assert.deepEqual(a.getBoolA(), true, "BoolA true");
            assert.deepEqual(a.getDoubleA(), 1.53, "DoubleA Double.PositiveInfinity");
            assert.deepEqual(a.getDecimalA(), Bridge.Decimal(1.54), "DecimalA 154");
            assert.ok(a.getData() !== null, "Data not null");
            assert.deepEqual(a.getData().getNumber(), 155, "Data.Number 155");

            // TEST
            //Check instance methods
            var b = a.method1();

            assert.ok(b !== null, "b not null");
            assert.deepEqual(b.getNumber(), 2, "b Number 2");
            assert.ok(b.getRelated() !== null, "b.Related not null");
            assert.deepEqual(b.getRelated().getNumber(), 1, "b.Related Number 1");

            a.setData(b);
            assert.deepEqual(a.method3(), "2 Has related 1", "Method3 2 Has related 1");
            a.setData(null);
            assert.deepEqual(a.method3(), "no data", "Method3 no data");

            // TEST
            //Check [#68]
            var c68 = new ClientTestLibrary.Class68();

            assert.deepEqual(c68.x, 0, "c68.x 0");
            assert.deepEqual(c68.y, 1, "c68.y 1");

            // TEST
            //Check local vars do not get overridden by fields
            c68.test();

            assert.deepEqual(c68.x, 0, "c68.x 0");
            assert.deepEqual(c68.y, 1, "c68.y 1");
        },
        testStaticConstructorsAndMethods: function (assert) {
            assert.expect(13);

            // TEST
            //Check static fields initialization
            assert.deepEqual(ClientTestLibrary.ClassA.statitIntNotInitialized, 0, "#74 StatitInt not initialized");
            assert.deepEqual(ClientTestLibrary.ClassA.statitStringNotInitialized, null, "#74 StatitString not initialized");
            assert.deepEqual(ClientTestLibrary.ClassA.CONST_CHAR, 81, "#74 CONST_CHAR Q");
            assert.deepEqual(true, true, "#74 CONST_DECIMAL 3.123456789324324324m");

            // TEST
            //Check static constructor
            assert.deepEqual(ClientTestLibrary.ClassA.staticInt, -340, "StatitInt initialized");
            assert.deepEqual(ClientTestLibrary.ClassA.staticString, "Defined string", "StatitString initialized");

            // TEST
            //Check static methods
            var a = ClientTestLibrary.ClassA.staticMethod1(678, "ASD", Number.NaN);

            assert.deepEqual(ClientTestLibrary.ClassA.statitIntNotInitialized, 678, "StatitIntNotInitialized 678");
            assert.deepEqual(ClientTestLibrary.ClassA.statitStringNotInitialized, "ASD", "ClassA.StatitStringNotInitialized ASD");
            assert.deepEqual(a.getDoubleA(), Number.NaN, "DoubleA double.NaN");

            a = ClientTestLibrary.ClassA.staticMethod2([678, "QWE", 234]);
            assert.deepEqual(ClientTestLibrary.ClassA.statitIntNotInitialized, 1678, "StatitIntNotInitialized 1678");
            assert.deepEqual(ClientTestLibrary.ClassA.statitStringNotInitialized, "QWE", "ClassA.StatitStringNotInitialized QWE");
            assert.deepEqual(a.getDoubleA(), 234, "DoubleA 234");

            assert.throws(ClientTestLibrary.TestSet1FailureHelper.staticMethod2Failure, "Unable to cast type String to type Bridge.Int", "Cast exception should occur");
        },
        testMethodParameters: function (assert) {
            assert.expect(16);

            //Check default parameters
            var ra = new ClientTestLibrary.ClassA("constructor");
            var r = ra.method5(5);

            assert.deepEqual(r, 5, "r 5");
            r = ra.method5(15);
            assert.deepEqual(r, 15, "r 15");
            r = ra.method5$1(5, 6);
            assert.deepEqual(r, 11, "r 11");
            r = ra.method5$1(-50, 6);
            assert.deepEqual(r, -44, "r -44");

            //Check referencing did not change data
            var a = new ClientTestLibrary.ClassA("constructor");
            var b = a.method1();
            var c = b.getRelated();

            a.method2(b);
            assert.ok(b !== null, "b not null");
            assert.deepEqual(b.getNumber(), 2, "b Number 2");
            assert.ok(b.getRelated() !== null, "b.Related not null");
            assert.deepEqual(b.getRelated().getNumber(), 2, "b.Related Number 2");

            assert.ok(c !== null, "c not null");
            assert.deepEqual(c.getNumber(), 1, "c Number 1");
            assert.ok(c.getRelated() === null, "c.Related null");

            //Check value local parameter
            var input = 1;
            var result = a.method4(input, 4);

            assert.deepEqual(input, 1, "input 1");
            assert.deepEqual(result, 5, "result 5");

            // TEST
            //[#86]
            var di = ClientTestLibrary.ClassA.getDefaultInt();
            assert.deepEqual(di, 0, "di 0");

            // TEST
            //Check  "out parameter"
            //[#85]
            var i = { };
            var tryResult = ClientTestLibrary.ClassA.tryParse("", i);

            assert.ok(tryResult, "tryResult");
            assert.deepEqual(i.v, 3, "i 3");
        }
    }
});

Bridge.define('ClientTestLibrary.TestSet1FailureHelper', {
    statics: {
        testConstructor1Failure: function () {
            new ClientTestLibrary.ClassA("constructor$1", Bridge.cast(null, ClientTestLibrary.ClassA.Aux1));
        },
        testConstructor2Failure: function () {
            var t = new ClientTestLibrary.ClassA("constructor$2", [Bridge.Array.init(2, null)]);
        },
        staticMethod2Failure: function () {
            ClientTestLibrary.ClassA.staticMethod2(["1", "some string", "345.345435"]);
        }
    }
});

