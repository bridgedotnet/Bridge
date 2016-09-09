Bridge.initAssembly("Bridge_ClientTest_Tests", function ($asm, globals) {
    
    Bridge.define('Bridge.Test.Assert', {
        statics: {
            assert: null,
            async: function () {
                return Bridge.Test.Assert.assert.async();
            },
            areEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.deepEqual(actual, expected);
            },
            areEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.deepEqual(actual, expected, description);
            },
            areDeepEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.deepEqual(actual, expected);
            },
            areDeepEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.deepEqual(actual, expected, description);
            },
            areStrictEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.strictEqual(actual, expected);
            },
            areStrictEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.strictEqual(actual, expected, description);
            },
            areNotEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.notDeepEqual(actual, expected);
            },
            areNotEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.notDeepEqual(actual, expected, description);
            },
            areNotDeepEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.notDeepEqual(actual, expected);
            },
            areNotDeepEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.notDeepEqual(actual, expected, description);
            },
            areNotStrictEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.notStrictEqual(actual, expected);
            },
            areNotStrictEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.notStrictEqual(actual, expected, description);
            },
            true: function (condition) {
                Bridge.Test.Assert.assert.ok(condition);
            },
            true$1: function (condition, message) {
                Bridge.Test.Assert.assert.ok(condition, message);
            },
            false: function (condition) {
                Bridge.Test.Assert.assert.notOk(condition);
            },
            false$1: function (condition, message) {
                Bridge.Test.Assert.assert.notOk(condition, message);
            },
            fail: function () {
                Bridge.Test.Assert.assert.ok(false);
            },
            fail$1: function (message) {
                Bridge.Test.Assert.assert.notOk(true, message);
            },
            throws: function (block) {
                Bridge.Test.Assert.assert.throws(block, "");
            },
            throws$5: function (block, message) {
                Bridge.Test.Assert.assert.throws(block, message);
            },
            throws$6: function (T, block) {
                Bridge.Test.Assert.throws$7(T, block, "");
            },
            throws$7: function (T, block, message) {
                var actual = null;
                var expected = Bridge.Reflection.getTypeFullName(T);

                try {
                    block();
                }
                catch (ex) {
                    ex = System.Exception.create(ex);
                    actual = Bridge.Reflection.getTypeFullName(Bridge.getType(ex));
                }

                if (!Bridge.referenceEquals(actual, expected)) {
                    Bridge.Test.Assert.assert.equal(actual, expected, message);
                } else {
                    Bridge.Test.Assert.assert.ok(true, message);
                }
            },
            throws$3: function (block, expected) {
                Bridge.Test.Assert.assert.throws(block, expected);
            },
            throws$4: function (block, expected, message) {
                Bridge.Test.Assert.assert.throws(block, expected, message);
            },
            throws$1: function (block, expected) {
                Bridge.Test.Assert.assert.throws(block, expected);
            },
            throws$2: function (block, expected, message) {
                Bridge.Test.Assert.assert.throws(block, expected, message);
            },
            null: function (anObject) {
                Bridge.Test.Assert.assert.ok(anObject == null);
            },
            null$1: function (anObject, message) {
                Bridge.Test.Assert.assert.ok(anObject == null, message);
            },
            notNull: function (anObject) {
                Bridge.Test.Assert.assert.notOk(anObject == null);
            },
            notNull$1: function (anObject, message) {
                Bridge.Test.Assert.assert.notOk(anObject == null, message);
            }
        }
    });

    Bridge.define('Bridge.Test.QUnit.TestFixture$1', function (T) { return {
        statics: {
            instanceFabric: null,
            fixtureFabric: Bridge.getDefaultValue(T),
            getFixtureFabric: function () {
                if (Bridge.Test.QUnit.TestFixture$1(T).fixtureFabric == null) {
                    Bridge.Test.QUnit.TestFixture$1(T).fixtureFabric = Bridge.createInstance(T);
                }

                return Bridge.Test.QUnit.TestFixture$1(T).fixtureFabric;
            },
            setFixtureFabric: function (value) {
                Bridge.Test.QUnit.TestFixture$1(T).fixtureFabric = value;
            },
            instanceFabric$1: function (type) {
                if (Bridge.Test.QUnit.TestFixture$1(T).instanceFabric == null) {
                    Bridge.Test.QUnit.TestFixture$1(T).instanceFabric = Bridge.cast(Bridge.createInstance(type), Bridge.Test.QUnit.TestFixture$1(T));
                }

                return Bridge.Test.QUnit.TestFixture$1(T).instanceFabric;
            },
            beforeTest: function (needInstance, assert, type, expectedCount) {
                if (expectedCount === void 0) { expectedCount = null; }
                Bridge.Test.Assert.assert = assert;

                if (System.Nullable.hasValue(expectedCount)) {
                    assert.expect(System.Nullable.getValue(expectedCount));
                }

                var instance = Bridge.Test.QUnit.TestFixture$1(T).instanceFabric$1(type);
                instance.setFixture(needInstance ? Bridge.Test.QUnit.TestFixture$1(T).getFixtureFabric() : Bridge.getDefaultValue(T));

                try {
                    instance.setUp();
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    assert.ok(false, "The test failed SetUp");

                    throw $e1;
                }

                return instance;
            }
        },
        config: {
            properties: {
                Fixture: Bridge.getDefaultValue(T)
            }
        },
        setUp: function () {
        },
        tearDown: function () {
        }
    }; });

    Bridge.init();
});
