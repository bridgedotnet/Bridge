
(function (globals) {
    
    Bridge.define('Bridge.Test.Assert', {
        statics: {
            assert: null,
            async: function () {
                return Bridge.get(Bridge.Test.Assert).assert.async();
            },
            areEqual: function (actual, expected) {
                Bridge.get(Bridge.Test.Assert).assert.deepEqual(actual, expected);
            },
            areEqual$1: function (actual, expected, description) {
                Bridge.get(Bridge.Test.Assert).assert.deepEqual(actual, expected, description);
            },
            areDeepEqual: function (actual, expected) {
                Bridge.get(Bridge.Test.Assert).assert.deepEqual(actual, expected);
            },
            areDeepEqual$1: function (actual, expected, description) {
                Bridge.get(Bridge.Test.Assert).assert.deepEqual(actual, expected, description);
            },
            areStrictEqual: function (actual, expected) {
                Bridge.get(Bridge.Test.Assert).assert.strictEqual(actual, expected);
            },
            areStrictEqual$1: function (actual, expected, description) {
                Bridge.get(Bridge.Test.Assert).assert.strictEqual(actual, expected, description);
            },
            areNotEqual: function (actual, expected) {
                Bridge.get(Bridge.Test.Assert).assert.notDeepEqual(actual, expected);
            },
            areNotEqual$1: function (actual, expected, description) {
                Bridge.get(Bridge.Test.Assert).assert.notDeepEqual(actual, expected, description);
            },
            areNotDeepEqual: function (actual, expected) {
                Bridge.get(Bridge.Test.Assert).assert.notDeepEqual(actual, expected);
            },
            areNotDeepEqual$1: function (actual, expected, description) {
                Bridge.get(Bridge.Test.Assert).assert.notDeepEqual(actual, expected, description);
            },
            areNotStrictEqual: function (actual, expected) {
                Bridge.get(Bridge.Test.Assert).assert.notStrictEqual(actual, expected);
            },
            areNotStrictEqual$1: function (actual, expected, description) {
                Bridge.get(Bridge.Test.Assert).assert.notStrictEqual(actual, expected, description);
            },
            $true: function (condition) {
                Bridge.get(Bridge.Test.Assert).assert.ok(condition);
            },
            true$1: function (condition, message) {
                Bridge.get(Bridge.Test.Assert).assert.ok(condition, message);
            },
            $false: function (condition) {
                Bridge.get(Bridge.Test.Assert).assert.notOk(condition);
            },
            false$1: function (condition, message) {
                Bridge.get(Bridge.Test.Assert).assert.notOk(condition, message);
            },
            fail: function () {
                Bridge.get(Bridge.Test.Assert).assert.ok(false);
            },
            fail$1: function (message) {
                Bridge.get(Bridge.Test.Assert).assert.notOk(true, message);
            },
            $throws: function (block) {
                Bridge.get(Bridge.Test.Assert).assert.throws(block, "");
            },
            throws$5: function (block, message) {
                Bridge.get(Bridge.Test.Assert).assert.throws(block, message);
            },
            throws$3: function (block, expected) {
                Bridge.get(Bridge.Test.Assert).assert.throws(block, expected);
            },
            throws$4: function (block, expected, message) {
                Bridge.get(Bridge.Test.Assert).assert.throws(block, expected, message);
            },
            throws$1: function (block, expected) {
                Bridge.get(Bridge.Test.Assert).assert.throws(block, expected);
            },
            throws$2: function (block, expected, message) {
                Bridge.get(Bridge.Test.Assert).assert.throws(block, expected, message);
            },
            $null: function (anObject) {
                Bridge.get(Bridge.Test.Assert).assert.ok(!Bridge.hasValue(anObject));
            },
            null$1: function (anObject, message) {
                Bridge.get(Bridge.Test.Assert).assert.ok(!Bridge.hasValue(anObject), message);
            },
            notNull: function (anObject) {
                Bridge.get(Bridge.Test.Assert).assert.notOk(!Bridge.hasValue(anObject));
            },
            notNull$1: function (anObject, message) {
                Bridge.get(Bridge.Test.Assert).assert.notOk(!Bridge.hasValue(anObject), message);
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestAbstractClass', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestAbstractClass).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestAbstractClass).instance = new Bridge.ClientTest.BasicCSharp.TestAbstractClass();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestAbstractClass).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestAbstractClass).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestAbstractClass).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestAbstractClass).getInstance();
                return r;
            },
            testB: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestAbstractClass).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestAbstractClass).testB();
            },
            testC: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestAbstractClass).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestAbstractClass).testC();
            },
            testBC: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestAbstractClass).beforeTest(true, assert);
                assert.expect(6);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestAbstractClass).testBC();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).instance = new Bridge.ClientTest.BasicCSharp.TestEnum();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).getInstance();
                return r;
            },
            testParse: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).beforeTest(true, assert);
                assert.expect(6);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testParse();
            },
            testParseIgnoreCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testParseIgnoreCase();
            },
            testToString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testToString();
            },
            testGetValues: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testGetValues();
            },
            testCompareTo: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testCompareTo();
            },
            testFormat: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).beforeTest(true, assert);
                assert.expect(22);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testFormat();
            },
            testGetName: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testGetName();
            },
            testGetNames: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testGetNames();
            },
            testHasFlag: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testHasFlag();
            },
            testIsDefined: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).beforeTest(true, assert);
                assert.expect(6);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testIsDefined();
            },
            testTryParse: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).beforeTest(true, assert);
                assert.expect(11);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testTryParse();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInheritance', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInheritance).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInheritance).instance = new Bridge.ClientTest.BasicCSharp.TestInheritance();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInheritance).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInheritance).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInheritance).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInheritance).getInstance();
                return r;
            },
            testA: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInheritance).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestInheritance).testA();
            },
            testB: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInheritance).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestInheritance).testB();
            },
            testAB: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInheritance).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestInheritance).testAB();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInterfaces', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInterfaces).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInterfaces).instance = new Bridge.ClientTest.BasicCSharp.TestInterfaces();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInterfaces).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInterfaces).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInterfaces).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInterfaces).getInstance();
                return r;
            },
            testInterfaceMethodAndProperty: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInterfaces).beforeTest(true, assert);
                assert.expect(6);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestInterfaces).testInterfaceMethodAndProperty();
            },
            testExplicitInterfaceMethodAndProperty: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInterfaces).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestInterfaces).testExplicitInterfaceMethodAndProperty();
            },
            testTwoInterfaces: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInterfaces).beforeTest(true, assert);
                assert.expect(9);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestInterfaces).testTwoInterfaces();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestMethodParametersClass', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestMethodParametersClass).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestMethodParametersClass).instance = new Bridge.ClientTest.BasicCSharp.TestMethodParametersClass();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestMethodParametersClass).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestMethodParametersClass).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestMethodParametersClass).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestMethodParametersClass).getInstance();
                return r;
            },
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestMethodParametersClass).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestMethodParametersClass).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadInstanceMethods', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadInstanceMethods).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadInstanceMethods).instance = new Bridge.ClientTest.BasicCSharp.TestOverloadInstanceMethods();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadInstanceMethods).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadInstanceMethods).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadInstanceMethods).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadInstanceMethods).getInstance();
                return r;
            },
            testInstance: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadInstanceMethods).beforeTest(true, assert);
                assert.expect(17);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadInstanceMethods).testInstance();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadStaticMethods', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadStaticMethods).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadStaticMethods).instance = new Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadStaticMethods).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadStaticMethods).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadStaticMethods).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadStaticMethods).getInstance();
                return r;
            },
            testStatic: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadStaticMethods).beforeTest(true, assert);
                assert.expect(16);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods).testStatic();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestReferenceTypes', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestReferenceTypes).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestReferenceTypes).instance = new Bridge.ClientTest.BasicCSharp.TestReferenceTypes();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestReferenceTypes).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestReferenceTypes).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestReferenceTypes).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestReferenceTypes).getInstance();
                return r;
            },
            testInstanceConstructorsAndMethods: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestReferenceTypes).beforeTest(true, assert);
                assert.expect(26);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestReferenceTypes).testInstanceConstructorsAndMethods();
            },
            testStaticConstructorsAndMethods: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestReferenceTypes).beforeTest(true, assert);
                assert.expect(13);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestReferenceTypes).testStaticConstructorsAndMethods();
            },
            testMethodParameters: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestReferenceTypes).beforeTest(true, assert);
                assert.expect(16);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestReferenceTypes).testMethodParameters();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks).instance = new Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks).getInstance();
                return r;
            },
            simpleTryCatch: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).simpleTryCatch();
            },
            caughtExceptions: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).caughtExceptions();
            },
            thrownExceptions: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks).beforeTest(true, assert);
                assert.expect(12);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).thrownExceptions();
            },
            bridge320: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).bridge320();
            },
            bridge343: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).bridge343();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchFinallyBlocks', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchFinallyBlocks).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchFinallyBlocks).instance = new Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchFinallyBlocks).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchFinallyBlocks).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchFinallyBlocks).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchFinallyBlocks).getInstance();
                return r;
            },
            simpleTryCatchFinally: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchFinallyBlocks).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).simpleTryCatchFinally();
            },
            caughtExceptions: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchFinallyBlocks).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).caughtExceptions();
            },
            thrownExceptions: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchFinallyBlocks).beforeTest(true, assert);
                assert.expect(16);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).thrownExceptions();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestValueTypes', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestValueTypes).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestValueTypes).instance = new Bridge.ClientTest.BasicCSharp.TestValueTypes();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestValueTypes).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestValueTypes).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestValueTypes).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestValueTypes).getInstance();
                return r;
            },
            testInstanceConstructorsAndMethods: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestValueTypes).beforeTest(true, assert);
                assert.expect(18);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestValueTypes).testInstanceConstructorsAndMethods();
            },
            testStaticConstructorsAndMethods: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestValueTypes).beforeTest(true, assert);
                assert.expect(7);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestValueTypes).testStaticConstructorsAndMethods();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestVirtualMethods', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestVirtualMethods).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestVirtualMethods).instance = new Bridge.ClientTest.BasicCSharp.TestVirtualMethods();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestVirtualMethods).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestVirtualMethods).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestVirtualMethods).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestVirtualMethods).getInstance();
                return r;
            },
            testB: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestVirtualMethods).beforeTest(true, assert);
                assert.expect(7);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestVirtualMethods).testB();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge381', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge381).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge381).instance = new Bridge.ClientTest.BridgeIssues.Bridge381();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge381).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge381).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge381).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge381).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge381).beforeTest(true, assert);
                assert.expect(6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge381).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge447', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge447).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge447).instance = new Bridge.ClientTest.BridgeIssues.Bridge447();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge447).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge447).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge447).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge447).getInstance();
                return r;
            },
            checkInlineExpression: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge447).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge447).checkInlineExpression();
            },
            checkInlineCalls: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge447).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge447).checkInlineCalls();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge472', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge472).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge472).instance = new Bridge.ClientTest.BridgeIssues.Bridge472();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge472).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge472).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge472).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge472).getInstance();
                return r;
            },
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge472).beforeTest(true, assert);
                assert.expect(10);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge472).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge479', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge479).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge479).instance = new Bridge.ClientTest.BridgeIssues.Bridge479();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge479).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge479).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge479).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge479).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge479).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge479).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge485', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge485).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge485).instance = new Bridge.ClientTest.BridgeIssues.Bridge485();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge485).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge485).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge485).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge485).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge485).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge485).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge495', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge495).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge495).instance = new Bridge.ClientTest.BridgeIssues.Bridge495();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge495).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge495).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge495).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge495).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge495).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge495).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge501', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge501).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge501).instance = new Bridge.ClientTest.BridgeIssues.Bridge501();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge501).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge501).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge501).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge501).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge501).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge501).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge502', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge502).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge502).instance = new Bridge.ClientTest.BridgeIssues.Bridge502();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge502).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge502).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge502).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge502).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge502).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge502).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge503', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge503).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge503).instance = new Bridge.ClientTest.BridgeIssues.Bridge503();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge503).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge503).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge503).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge503).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge503).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge503).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge508', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge508).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge508).instance = new Bridge.ClientTest.BridgeIssues.Bridge508();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge508).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge508).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge508).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge508).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge508).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge508).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge514', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge514).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge514).instance = new Bridge.ClientTest.BridgeIssues.Bridge514();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge514).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge514).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge514).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge514).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge514).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge514).testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge514).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge514).testRelated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge520', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge520).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge520).instance = new Bridge.ClientTest.BridgeIssues.Bridge520();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge520).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge520).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge520).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge520).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge520).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge520).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge522', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge522).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge522).instance = new Bridge.ClientTest.BridgeIssues.Bridge522();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge522).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge522).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge522).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge522).getInstance();
                return r;
            },
            testUseCase1: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge522).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge522).testUseCase1();
            },
            testUseCase2: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge522).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge522).testUseCase2();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge532', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge532).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge532).instance = new Bridge.ClientTest.BridgeIssues.Bridge532();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge532).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge532).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge532).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge532).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge532).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge532).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge537', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge537).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge537).instance = new Bridge.ClientTest.BridgeIssues.Bridge537();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge537).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge537).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge537).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge537).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge537).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge537).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge538', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge538).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge538).instance = new Bridge.ClientTest.BridgeIssues.Bridge538();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge538).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge538).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge538).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge538).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge538).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge538).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge544', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge544).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge544).instance = new Bridge.ClientTest.BridgeIssues.Bridge544();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge544).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge544).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge544).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge544).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge544).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge544).testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge544).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge544).testRelated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge546', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge546).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge546).instance = new Bridge.ClientTest.BridgeIssues.Bridge546();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge546).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge546).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge546).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge546).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge546).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge546).testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge546).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge546).testRelated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge548', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge548).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge548).instance = new Bridge.ClientTest.BridgeIssues.Bridge548();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge548).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge548).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge548).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge548).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge548).beforeTest(true, assert);
                assert.expect(18);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge548).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge549', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge549).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge549).instance = new Bridge.ClientTest.BridgeIssues.Bridge549();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge549).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge549).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge549).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge549).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge549).beforeTest(true, assert);
                assert.expect(153);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge549).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge550', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge550).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge550).instance = new Bridge.ClientTest.BridgeIssues.Bridge550();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge550).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge550).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge550).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge550).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge550).beforeTest(true, assert);
                assert.expect(10);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge550).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge554', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge554).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge554).instance = new Bridge.ClientTest.BridgeIssues.Bridge554();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge554).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge554).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge554).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge554).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge554).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge554).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge555', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge555).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge555).instance = new Bridge.ClientTest.BridgeIssues.Bridge555();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge555).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge555).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge555).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge555).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge555).beforeTest(true, assert);
                assert.expect(15);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge555).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge558', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge558).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge558).instance = new Bridge.ClientTest.BridgeIssues.Bridge558();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge558).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge558).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge558).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge558).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge558).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge558).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge559', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge559).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge559).instance = new Bridge.ClientTest.BridgeIssues.Bridge559();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge559).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge559).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge559).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge559).getInstance();
                return r;
            },
            testUseCase1: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge559).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge559).testUseCase1();
            },
            testUseCase2: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge559).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge559).testUseCase2();
            },
            testUseCase3: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge559).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge559).testUseCase3();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge563', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge563).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge563).instance = new Bridge.ClientTest.BridgeIssues.Bridge563();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge563).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge563).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge563).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge563).getInstance();
                return r;
            },
            tesForeach: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge563).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge563).tesForeach();
            },
            tesFor: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge563).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge563).tesFor();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge565', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge565).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge565).instance = new Bridge.ClientTest.BridgeIssues.Bridge565();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge565).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge565).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge565).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge565).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge565).beforeTest(true, assert);
                assert.expect(7);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge565).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge566', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge566).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge566).instance = new Bridge.ClientTest.BridgeIssues.Bridge566();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge566).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge566).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge566).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge566).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge566).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge566).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge572', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge572).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge572).instance = new Bridge.ClientTest.BridgeIssues.Bridge572();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge572).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge572).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge572).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge572).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge572).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge572).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge577', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge577).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge577).instance = new Bridge.ClientTest.BridgeIssues.Bridge577();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge577).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge577).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge577).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge577).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge577).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge577).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge578', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge578).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge578).instance = new Bridge.ClientTest.BridgeIssues.Bridge578();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge578).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge578).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge578).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge578).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge578).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge578).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge580', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge580).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge580).instance = new Bridge.ClientTest.BridgeIssues.Bridge580();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge580).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge580).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge580).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge580).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge580).beforeTest(true, assert);
                assert.expect(10);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge580).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582).instance = new Bridge.ClientTest.BridgeIssues.Bridge582();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582).getInstance();
                return r;
            },
            testAddTimeSpan: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582).beforeTest(true, assert);
                assert.expect(6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge582).testAddTimeSpan();
            },
            testAddTicks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582).beforeTest(true, assert);
                assert.expect(6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge582).testAddTicks();
            },
            testTicks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582).beforeTest(true, assert);
                assert.expect(7);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge582).testTicks();
            },
            testSubtractTimeSpan: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge582).testSubtractTimeSpan();
            },
            testTimeOfDay: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582).beforeTest(true, assert);
                assert.expect(6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge582).testTimeOfDay();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge583', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge583).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge583).instance = new Bridge.ClientTest.BridgeIssues.Bridge583();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge583).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge583).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge583).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge583).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge583).beforeTest(true, assert);
                assert.expect(120);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge583).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge586', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge586).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge586).instance = new Bridge.ClientTest.BridgeIssues.Bridge586();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge586).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge586).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge586).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge586).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge586).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge586).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588).instance = new Bridge.ClientTest.BridgeIssues.Bridge588();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588).getInstance();
                return r;
            },
            testUseCase1: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588).testUseCase1();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588C', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588C).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588C).instance = new Bridge.ClientTest.BridgeIssues.Bridge588C();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588C).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588C).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588C).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588C).getInstance();
                return r;
            },
            testUseCase2: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588C).beforeTest(true, assert);
                assert.expect(9);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588C).testUseCase2();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge592', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge592).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge592).instance = new Bridge.ClientTest.BridgeIssues.Bridge592();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge592).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge592).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge592).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge592).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge592).beforeTest(true, assert);
                assert.expect(6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge592).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge595', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge595).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge595).instance = new Bridge.ClientTest.BridgeIssues.Bridge595();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge595).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge595).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge595).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge595).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge595).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge595).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge597', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge597).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge597).instance = new Bridge.ClientTest.BridgeIssues.Bridge597();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge597).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge597).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge597).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge597).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge597).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge597).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge603', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge603).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge603).instance = new Bridge.ClientTest.BridgeIssues.Bridge603();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge603).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge603).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge603).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge603).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge603).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge603).testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge603).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge603).testRelated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge606', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge606).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge606).instance = new Bridge.ClientTest.BridgeIssues.Bridge606();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge606).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge606).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge606).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge606).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge606).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge606).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge607', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge607).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge607).instance = new Bridge.ClientTest.BridgeIssues.Bridge607();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge607).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge607).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge607).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge607).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge607).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge607).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge608', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge608).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge608).instance = new Bridge.ClientTest.BridgeIssues.Bridge608();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge608).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge608).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge608).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge608).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge608).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge608).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge615', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge615).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge615).instance = new Bridge.ClientTest.BridgeIssues.Bridge615();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge615).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge615).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge615).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge615).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge615).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge615).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge623', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge623).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge623).instance = new Bridge.ClientTest.BridgeIssues.Bridge623();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge623).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge623).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge623).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge623).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge623).beforeTest(true, assert);
                assert.expect(8);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge623).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge625', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge625).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge625).instance = new Bridge.ClientTest.BridgeIssues.Bridge625();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge625).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge625).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge625).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge625).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge625).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge625).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge634', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge634).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge634).instance = new Bridge.ClientTest.BridgeIssues.Bridge634();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge634).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge634).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge634).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge634).getInstance();
                return r;
            },
            testUseCase1: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge634).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge634).testUseCase1();
            },
            testUseCase2: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge634).beforeTest(true, assert);
                assert.expect(21);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge634).testUseCase2();
            },
            testUseCaseFor658: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge634).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge634).testUseCaseFor658();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge635', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge635).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge635).instance = new Bridge.ClientTest.BridgeIssues.Bridge635();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge635).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge635).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge635).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge635).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge635).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge635).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge647', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge647).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge647).instance = new Bridge.ClientTest.BridgeIssues.Bridge647();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge647).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge647).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge647).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge647).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge647).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge647).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge648', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge648).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge648).instance = new Bridge.ClientTest.BridgeIssues.Bridge648();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge648).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge648).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge648).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge648).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge648).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge648).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge652', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge652).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge652).instance = new Bridge.ClientTest.BridgeIssues.Bridge652();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge652).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge652).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge652).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge652).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge652).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge652).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge655', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge655).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge655).instance = new Bridge.ClientTest.BridgeIssues.Bridge655();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge655).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge655).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge655).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge655).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge655).beforeTest(true, assert);
                assert.expect(12);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge655).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge660', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge660).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge660).instance = new Bridge.ClientTest.BridgeIssues.Bridge660();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge660).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge660).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge660).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge660).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge660).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge660).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge661', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge661).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge661).instance = new Bridge.ClientTest.BridgeIssues.Bridge661();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge661).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge661).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge661).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge661).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge661).beforeTest(true, assert);
                assert.expect(6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge661).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge664', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge664).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge664).instance = new Bridge.ClientTest.BridgeIssues.Bridge664();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge664).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge664).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge664).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge664).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge664).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge664).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge666', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge666).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge666).instance = new Bridge.ClientTest.BridgeIssues.Bridge666();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge666).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge666).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge666).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge666).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge666).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge666).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge671', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge671).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge671).instance = new Bridge.ClientTest.BridgeIssues.Bridge671();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge671).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge671).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge671).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge671).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge671).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge671).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge674', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge674).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge674).instance = new Bridge.ClientTest.BridgeIssues.Bridge674();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge674).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge674).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge674).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge674).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge674).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge674).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge675', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge675).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge675).instance = new Bridge.ClientTest.BridgeIssues.Bridge675();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge675).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge675).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge675).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge675).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge675).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge675).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge687', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge687).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge687).instance = new Bridge.ClientTest.BridgeIssues.Bridge687();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge687).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge687).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge687).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge687).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge687).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge687).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge689', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge689).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge689).instance = new Bridge.ClientTest.BridgeIssues.Bridge689();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge689).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge689).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge689).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge689).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge689).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge689).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge690', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge690).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge690).instance = new Bridge.ClientTest.BridgeIssues.Bridge690();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge690).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge690).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge690).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge690).getInstance();
                return r;
            },
            testUseCaseForInstance: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge690).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge690).testUseCaseForInstance();
            },
            testUseCaseForStatic: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge690).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge690).testUseCaseForStatic();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge691', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge691).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge691).instance = new Bridge.ClientTest.BridgeIssues.Bridge691();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge691).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge691).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge691).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge691).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge691).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge691).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge692', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge692).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge692).instance = new Bridge.ClientTest.BridgeIssues.Bridge692();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge692).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge692).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge692).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge692).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge692).beforeTest(true, assert);
                assert.expect(8);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge692).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge693', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge693).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge693).instance = new Bridge.ClientTest.BridgeIssues.Bridge693();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge693).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge693).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge693).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge693).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge693).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge693).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge694', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge694).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge694).instance = new Bridge.ClientTest.BridgeIssues.Bridge694();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge694).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge694).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge694).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge694).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge694).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge694).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge696', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge696).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge696).instance = new Bridge.ClientTest.BridgeIssues.Bridge696();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge696).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge696).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge696).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge696).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge696).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge696).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge699', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge699).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge699).instance = new Bridge.ClientTest.BridgeIssues.Bridge699();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge699).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge699).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge699).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge699).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge699).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge699).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge708', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge708).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge708).instance = new Bridge.ClientTest.BridgeIssues.Bridge708();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge708).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge708).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge708).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge708).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge708).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge708).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge721', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge721).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge721).instance = new Bridge.ClientTest.BridgeIssues.Bridge721();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge721).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge721).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge721).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge721).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge721).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge721).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge722', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge722).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge722).instance = new Bridge.ClientTest.BridgeIssues.Bridge722();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge722).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge722).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge722).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge722).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge722).beforeTest(true, assert);
                assert.expect(9);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge722).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge726', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge726).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge726).instance = new Bridge.ClientTest.BridgeIssues.Bridge726();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge726).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge726).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge726).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge726).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge726).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge726).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge732', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge732).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge732).instance = new Bridge.ClientTest.BridgeIssues.Bridge732();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge732).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge732).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge732).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge732).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge732).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge732).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge733', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge733).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge733).instance = new Bridge.ClientTest.BridgeIssues.Bridge733();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge733).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge733).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge733).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge733).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge733).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge733).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge751', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge751).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge751).instance = new Bridge.ClientTest.BridgeIssues.Bridge751();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge751).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge751).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge751).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge751).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge751).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge751).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge758', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge758).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge758).instance = new Bridge.ClientTest.BridgeIssues.Bridge758();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge758).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge758).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge758).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge758).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge758).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge758).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge760', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge760).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge760).instance = new Bridge.ClientTest.BridgeIssues.Bridge760();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge760).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge760).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge760).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge760).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge760).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge760).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge762', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge762).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge762).instance = new Bridge.ClientTest.BridgeIssues.Bridge762();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge762).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge762).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge762).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge762).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge762).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge762).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge772', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge772).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge772).instance = new Bridge.ClientTest.BridgeIssues.Bridge772();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge772).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge772).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge772).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge772).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge772).beforeTest(true, assert);
                assert.expect(10);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge772).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge777', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge777).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge777).instance = new Bridge.ClientTest.BridgeIssues.Bridge777();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge777).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge777).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge777).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge777).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge777).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge777).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge782', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge782).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge782).instance = new Bridge.ClientTest.BridgeIssues.Bridge782();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge782).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge782).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge782).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge782).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge782).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge782).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge785', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge785).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge785).instance = new Bridge.ClientTest.BridgeIssues.Bridge785();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge785).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge785).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge785).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge785).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge785).beforeTest(true, assert);
                assert.expect(7);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge785).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge786', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge786).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge786).instance = new Bridge.ClientTest.BridgeIssues.Bridge786();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge786).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge786).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge786).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge786).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge786).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge786).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge788', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge788).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge788).instance = new Bridge.ClientTest.BridgeIssues.Bridge788();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge788).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge788).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge788).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge788).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge788).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge788).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge789', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge789).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge789).instance = new Bridge.ClientTest.BridgeIssues.Bridge789();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge789).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge789).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge789).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge789).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge789).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge789).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge793', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge793).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge793).instance = new Bridge.ClientTest.BridgeIssues.Bridge793();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge793).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge793).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge793).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge793).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge793).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge793).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge795', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge795).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge795).instance = new Bridge.ClientTest.BridgeIssues.Bridge795();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge795).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge795).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge795).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge795).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge795).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge795).testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge795).beforeTest(true, assert);
                assert.expect(16);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge795).testRelated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge796', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge796).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge796).instance = new Bridge.ClientTest.BridgeIssues.Bridge796();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge796).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge796).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge796).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge796).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge796).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge796).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge815', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge815).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge815).instance = new Bridge.ClientTest.BridgeIssues.Bridge815();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge815).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge815).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge815).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge815).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge815).beforeTest(true, assert);
                assert.expect(7);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge815).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge816', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge816).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge816).instance = new Bridge.ClientTest.BridgeIssues.Bridge816();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge816).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge816).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge816).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge816).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge816).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge816).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge817', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge817).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge817).instance = new Bridge.ClientTest.BridgeIssues.Bridge817();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge817).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge817).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge817).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge817).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge817).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge817).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge818', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge818).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge818).instance = new Bridge.ClientTest.BridgeIssues.Bridge818();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge818).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge818).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge818).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge818).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge818).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge818).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge821', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge821).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge821).instance = new Bridge.ClientTest.BridgeIssues.Bridge821();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge821).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge821).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge821).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge821).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge821).beforeTest(true, assert);
                assert.expect(9);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge821).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge823', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge823).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge823).instance = new Bridge.ClientTest.BridgeIssues.Bridge823();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge823).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge823).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge823).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge823).getInstance();
                return r;
            },
            getTicksReturnsCorrectValue: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge823).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge823).getTicksReturnsCorrectValue();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge826', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge826).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge826).instance = new Bridge.ClientTest.BridgeIssues.Bridge826();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge826).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge826).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge826).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge826).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge826).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge826).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge830', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge830).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge830).instance = new Bridge.ClientTest.BridgeIssues.Bridge830();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge830).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge830).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge830).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge830).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge830).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge830).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge835', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge835).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge835).instance = new Bridge.ClientTest.BridgeIssues.Bridge835();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge835).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge835).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge835).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge835).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge835).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge835).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge841', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge841).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge841).instance = new Bridge.ClientTest.BridgeIssues.Bridge841();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge841).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge841).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge841).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge841).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge841).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge841).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge844', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge844).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge844).instance = new Bridge.ClientTest.BridgeIssues.Bridge844();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge844).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge844).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge844).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge844).getInstance();
                return r;
            },
            nullableAndSimpleDateTimeToStringEquals: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge844).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge844).nullableAndSimpleDateTimeToStringEquals();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge849', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge849).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge849).instance = new Bridge.ClientTest.BridgeIssues.Bridge849();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge849).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge849).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge849).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge849).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge849).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge849).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge857', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge857).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge857).instance = new Bridge.ClientTest.BridgeIssues.Bridge857();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge857).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge857).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge857).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge857).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge857).beforeTest(true, assert);
                assert.expect(8);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge857).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge861', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge861).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge861).instance = new Bridge.ClientTest.BridgeIssues.Bridge861();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge861).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge861).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge861).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge861).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge861).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge861).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge863', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge863).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge863).instance = new Bridge.ClientTest.BridgeIssues.Bridge863();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge863).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge863).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge863).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge863).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge863).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge863).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge874', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge874).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge874).instance = new Bridge.ClientTest.BridgeIssues.Bridge874();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge874).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge874).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge874).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge874).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge874).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge874).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge881', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge881).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge881).instance = new Bridge.ClientTest.BridgeIssues.Bridge881();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge881).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge881).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge881).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge881).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge881).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge881).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge882', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge882).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge882).instance = new Bridge.ClientTest.BridgeIssues.Bridge882();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge882).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge882).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge882).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge882).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge882).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge882).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge883', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge883).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge883).instance = new Bridge.ClientTest.BridgeIssues.Bridge883();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge883).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge883).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge883).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge883).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge883).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge883).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge889', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge889).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge889).instance = new Bridge.ClientTest.BridgeIssues.Bridge889();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge889).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge889).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge889).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge889).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge889).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge889).testUseCase();
            },
            testMakeEnumerable: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge889).beforeTest(true, assert);
                assert.expect(8);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge889).testMakeEnumerable();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge892', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge892).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge892).instance = new Bridge.ClientTest.BridgeIssues.Bridge892();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge892).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge892).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge892).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge892).getInstance();
                return r;
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge892).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge892).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge893', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge893).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge893).instance = new Bridge.ClientTest.BridgeIssues.Bridge893();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge893).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge893).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge893).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge893).getInstance();
                return r;
            },
            enumToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge893).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge893).enumToStringWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge898', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge898).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge898).instance = new Bridge.ClientTest.BridgeIssues.Bridge898();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge898).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge898).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge898).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge898).getInstance();
                return r;
            },
            testDecimalConversion: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge898).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge898).testDecimalConversion();
            },
            testDoubleConversion: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge898).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge898).testDoubleConversion();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge905', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge905).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge905).instance = new Bridge.ClientTest.BridgeIssues.Bridge905();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge905).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge905).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge905).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge905).getInstance();
                return r;
            },
            dayOfWeekFixed: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge905).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge905).dayOfWeekFixed();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge906', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge906).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge906).instance = new Bridge.ClientTest.BridgeIssues.Bridge906();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge906).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge906).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge906).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge906).getInstance();
                return r;
            },
            testIfAsyncMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge906).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge906).testIfAsyncMethod();
            },
            testIfElseAsyncMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge906).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge906).testIfElseAsyncMethod();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge907', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge907).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge907).instance = new Bridge.ClientTest.BridgeIssues.Bridge907();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge907).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge907).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge907).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge907).getInstance();
                return r;
            },
            testStringSpitWithNullParameterFixed: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge907).beforeTest(true, assert);
                assert.expect(6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge907).testStringSpitWithNullParameterFixed();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge912', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge912).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge912).instance = new Bridge.ClientTest.BridgeIssues.Bridge912();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge912).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge912).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge912).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge912).getInstance();
                return r;
            },
            testAsyncMethodInBlock: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge912).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge912).testAsyncMethodInBlock();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge913', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge913).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge913).instance = new Bridge.ClientTest.BridgeIssues.Bridge913();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge913).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge913).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge913).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge913).getInstance();
                return r;
            },
            testNullableDateTimeGreaterThanWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge913).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge913).testNullableDateTimeGreaterThanWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge918', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge918).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge918).instance = new Bridge.ClientTest.BridgeIssues.Bridge918();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge918).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge918).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge918).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge918).getInstance();
                return r;
            },
            testDynamicAsyncResult: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge918).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge918).testDynamicAsyncResult();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge922', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge922).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge922).instance = new Bridge.ClientTest.BridgeIssues.Bridge922();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge922).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge922).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge922).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge922).getInstance();
                return r;
            },
            testLinqDecimal: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge922).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge922).testLinqDecimal();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).instance = new Bridge.ClientTest.BridgeIssues.TestBridgeIssues();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).getInstance();
                return r;
            },
            n169: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n169();
            },
            n240: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n240();
            },
            n264: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n264();
            },
            n266: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n266();
            },
            n272: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n272();
            },
            n273: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n273();
            },
            n277: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n277();
            },
            n294: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n294();
            },
            n304: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n304();
            },
            n305: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n305();
            },
            n306: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n306();
            },
            n329: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n329();
            },
            n335: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n335();
            },
            n336: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n336();
            },
            n337: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n337();
            },
            n338: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n338();
            },
            n339: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n339();
            },
            n340: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n340();
            },
            n341: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n341();
            },
            n342: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n342();
            },
            n349: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n349();
            },
            n377: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n377();
            },
            n383: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n383();
            },
            n393: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n393();
            },
            n395: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n395();
            },
            n406: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n406();
            },
            n407: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n407();
            },
            n409: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n409();
            },
            n410: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n410();
            },
            n418: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n418();
            },
            n422: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n422();
            },
            n428: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n428();
            },
            n435: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n435();
            },
            n436: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n436();
            },
            n438: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n438();
            },
            n439: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n439();
            },
            n442: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n442();
            },
            n460: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n460();
            },
            n467: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n467();
            },
            n469: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n469();
            },
            n470: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n470();
            },
            n499: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n499();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests).instance = new Bridge.ClientTest.Collections.Generic.ComparerTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultComparerCanOrderNumbers: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests).beforeTest(false, assert);
                t.defaultComparerCanOrderNumbers();
            },
            defaultComparerCanOrderNullValues: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests).beforeTest(false, assert);
                t.defaultComparerCanOrderNullValues();
            },
            defaultComparerUsesCompareMethodIfClassImplementsIComparable: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests).beforeTest(false, assert);
                t.defaultComparerUsesCompareMethodIfClassImplementsIComparable();
            },
            createWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests).beforeTest(false, assert);
                t.createWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).instance = new Bridge.ClientTest.Collections.Generic.EqualityComparerTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultComparerCanGetHashCodeOfNumber: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).beforeTest(false, assert);
                t.defaultComparerCanGetHashCodeOfNumber();
            },
            defaultComparerReturnsZeroAsHashCodeForNullAndUndefined: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).beforeTest(false, assert);
                t.defaultComparerReturnsZeroAsHashCodeForNullAndUndefined();
            },
            defaultComparerCanDetermineEquality: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).beforeTest(false, assert);
                t.defaultComparerCanDetermineEquality();
            },
            defaultComparerInvokesOverriddenGetHashCode: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).beforeTest(false, assert);
                t.defaultComparerInvokesOverriddenGetHashCode();
            },
            defaultComparerInvokesOverriddenEquals: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).beforeTest(false, assert);
                t.defaultComparerInvokesOverriddenEquals();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).instance = new Bridge.ClientTest.Collections.Generic.GenericDictionaryTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            capacityConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.capacityConstructorWorks();
            },
            capacityAndEqualityComparerWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.capacityAndEqualityComparerWorks();
            },
            equalityComparerOnlyConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.equalityComparerOnlyConstructorWorks();
            },
            countWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.countWorks();
            },
            keysWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.keysWorks();
            },
            valuesWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.valuesWorks();
            },
            indexerGetterWorksForExistingItems: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.indexerGetterWorksForExistingItems();
            },
            indexerSetterWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.indexerSetterWorks();
            },
            indexerGetterThrowsForNonExistingItems: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                assert.expect(0);
                t.indexerGetterThrowsForNonExistingItems();
            },
            addWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.addWorks();
            },
            addThrowsIfItemAlreadyExists: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                assert.expect(0);
                t.addThrowsIfItemAlreadyExists();
            },
            clearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.clearWorks();
            },
            containsKeyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.containsKeyWorks();
            },
            enumeratingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.enumeratingWorks();
            },
            removeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.removeWorks();
            },
            tryGetValueWithIntKeysWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.tryGetValueWithIntKeysWorks();
            },
            tryGetValueWithObjectKeysWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.tryGetValueWithObjectKeysWorks();
            },
            canUseCustomComparer: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).beforeTest(false, assert);
                t.canUseCustomComparer();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).instance = new Bridge.ClientTest.Collections.Generic.ICollectionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).getInstance();
                return r;
            },
            arrayImplementsICollection: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).beforeTest(false, assert);
                t.arrayImplementsICollection();
            },
            customClassThatShouldImplementICollectionDoesSo: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).beforeTest(false, assert);
                t.customClassThatShouldImplementICollectionDoesSo();
            },
            arrayCastToICollectionCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).beforeTest(false, assert);
                t.arrayCastToICollectionCountWorks();
            },
            classImplementingICollectionCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).beforeTest(false, assert);
                t.classImplementingICollectionCountWorks();
            },
            classImplementingICollectionCastToICollectionCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).beforeTest(false, assert);
                t.classImplementingICollectionCastToICollectionCountWorks();
            },
            classImplementingICollectionAddWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).beforeTest(false, assert);
                t.classImplementingICollectionAddWorks();
            },
            classImplementingICollectionCastToICollectionAddWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).beforeTest(false, assert);
                t.classImplementingICollectionCastToICollectionAddWorks();
            },
            classImplementingICollectionClearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).beforeTest(false, assert);
                t.classImplementingICollectionClearWorks();
            },
            classImplementingICollectionCastToICollectionClearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).beforeTest(false, assert);
                t.classImplementingICollectionCastToICollectionClearWorks();
            },
            arrayCastToICollectionContainsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).beforeTest(false, assert);
                t.arrayCastToICollectionContainsWorks();
            },
            classImplementingICollectionContainsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).beforeTest(false, assert);
                t.classImplementingICollectionContainsWorks();
            },
            classImplementingICollectionCastToICollectionContainsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).beforeTest(false, assert);
                t.classImplementingICollectionCastToICollectionContainsWorks();
            },
            classImplementingICollectionRemoveWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).beforeTest(false, assert);
                t.classImplementingICollectionRemoveWorks();
            },
            classImplementingICollectionCastToICollectionRemoveWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).beforeTest(false, assert);
                t.classImplementingICollectionCastToICollectionRemoveWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).instance = new Bridge.ClientTest.Collections.Generic.IDictionaryTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            classImplementsInterfaces: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).beforeTest(false, assert);
                t.classImplementsInterfaces();
            },
            countWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).beforeTest(false, assert);
                t.countWorks();
            },
            keysWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).beforeTest(false, assert);
                t.keysWorks();
            },
            getItemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).beforeTest(false, assert);
                t.getItemWorks();
            },
            valuesWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).beforeTest(false, assert);
                t.valuesWorks();
            },
            containsKeyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).beforeTest(false, assert);
                t.containsKeyWorks();
            },
            tryGetValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).beforeTest(false, assert);
                t.tryGetValueWorks();
            },
            addWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).beforeTest(false, assert);
                t.addWorks();
            },
            clearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).beforeTest(false, assert);
                t.clearWorks();
            },
            removeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).beforeTest(false, assert);
                t.removeWorks();
            },
            setItemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).beforeTest(false, assert);
                t.setItemWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).instance = new Bridge.ClientTest.Collections.Generic.IEnumerableTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).getInstance();
                return r;
            },
            arrayImplementsIEnumerable: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).beforeTest(false, assert);
                t.arrayImplementsIEnumerable();
            },
            customClassThatShouldImplementIEnumerableDoesSo: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).beforeTest(false, assert);
                t.customClassThatShouldImplementIEnumerableDoesSo();
            },
            arrayGetEnumeratorMethodWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).beforeTest(false, assert);
                t.arrayGetEnumeratorMethodWorks();
            },
            arrayCastToIEnumerableCanBeEnumerated: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).beforeTest(false, assert);
                t.arrayCastToIEnumerableCanBeEnumerated();
            },
            classImplementingIEnumerableCanBeEnumerated: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).beforeTest(false, assert);
                t.classImplementingIEnumerableCanBeEnumerated();
            },
            classImplementingIEnumerableCastToIEnumerableCanBeEnumerated: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).beforeTest(false, assert);
                t.classImplementingIEnumerableCastToIEnumerableCanBeEnumerated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).instance = new Bridge.ClientTest.Collections.Generic.IListTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            arrayImplementsIList: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).beforeTest(false, assert);
                t.arrayImplementsIList();
            },
            customClassThatShouldImplementIListDoesSo: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).beforeTest(false, assert);
                t.customClassThatShouldImplementIListDoesSo();
            },
            arrayCastToIListGetItemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).beforeTest(false, assert);
                t.arrayCastToIListGetItemWorks();
            },
            classImplementingIListGetItemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).beforeTest(false, assert);
                t.classImplementingIListGetItemWorks();
            },
            classImplementingIListCastToIListGetItemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).beforeTest(false, assert);
                t.classImplementingIListCastToIListGetItemWorks();
            },
            arrayCastToIListSetItemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).beforeTest(false, assert);
                t.arrayCastToIListSetItemWorks();
            },
            classImplementingIListSetItemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).beforeTest(false, assert);
                t.classImplementingIListSetItemWorks();
            },
            classImplementingIListCastToIListSetItemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).beforeTest(false, assert);
                t.classImplementingIListCastToIListSetItemWorks();
            },
            arrayCastToIListIndexOfWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).beforeTest(false, assert);
                t.arrayCastToIListIndexOfWorks();
            },
            classImplementingIListIndexOfWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).beforeTest(false, assert);
                t.classImplementingIListIndexOfWorks();
            },
            classImplementingIListCastToIListIndexOfWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).beforeTest(false, assert);
                t.classImplementingIListCastToIListIndexOfWorks();
            },
            classImplementingIListInsertWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).beforeTest(false, assert);
                t.classImplementingIListInsertWorks();
            },
            classImplementingIListCastToIListInsertWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).beforeTest(false, assert);
                t.classImplementingIListCastToIListInsertWorks();
            },
            classImplementingIListRemoveAtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).beforeTest(false, assert);
                t.classImplementingIListRemoveAtWorks();
            },
            classImplementingIListCastToIListRemoveAtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).beforeTest(false, assert);
                t.classImplementingIListCastToIListRemoveAtWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).instance = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).getInstance();
                return r;
            },
            typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).beforeTest(false, assert);
                t.typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable();
            },
            enumeratingIEnumeratorIteratorToEndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).beforeTest(false, assert);
                t.enumeratingIEnumeratorIteratorToEndWorks();
            },
            prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).beforeTest(false, assert);
                t.prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks();
            },
            exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).beforeTest(false, assert);
                t.exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks();
            },
            typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).beforeTest(false, assert);
                t.typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface();
            },
            enumeratingIEnumerableIteratorToEndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).beforeTest(false, assert);
                t.enumeratingIEnumerableIteratorToEndWorks();
            },
            prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).beforeTest(false, assert);
                t.prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks();
            },
            exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).beforeTest(false, assert);
                t.exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks();
            },
            enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).beforeTest(false, assert);
                t.enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters();
            },
            differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).beforeTest(false, assert);
                t.differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).instance = new Bridge.ClientTest.Collections.Generic.ListTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithCapacityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.constructorWithCapacityWorks();
            },
            constructingFromArrayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.constructingFromArrayWorks();
            },
            constructingFromListWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.constructingFromListWorks();
            },
            constructingFromIEnumerableWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.constructingFromIEnumerableWorks();
            },
            countWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.countWorks();
            },
            indexingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.indexingWorks();
            },
            foreachWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.foreachWorks();
            },
            getEnumeratorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.getEnumeratorWorks();
            },
            addWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.addWorks();
            },
            addRangeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.addRangeWorks();
            },
            binarySearch1Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.binarySearch1Works();
            },
            binarySearch2Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.binarySearch2Works();
            },
            binarySearch3Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.binarySearch3Works();
            },
            binarySearch4Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.binarySearch4Works();
            },
            clearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.clearWorks();
            },
            containsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.containsWorks();
            },
            containsUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.containsUsesEqualsMethod();
            },
            sliceWithoutEndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.sliceWithoutEndWorks();
            },
            sliceWithEndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.sliceWithEndWorks();
            },
            foreachWithListItemCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.foreachWithListItemCallbackWorks();
            },
            foreachWithListCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.foreachWithListCallbackWorks();
            },
            indexOfWithoutStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.indexOfWithoutStartIndexWorks();
            },
            indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.indexOfWithoutStartIndexUsesEqualsMethod();
            },
            indexOfWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.indexOfWithStartIndexWorks();
            },
            indexOfWithStartIndexUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.indexOfWithStartIndexUsesEqualsMethod();
            },
            insertWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.insertWorks();
            },
            insertRangeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.insertRangeWorks();
            },
            joinWithoutDelimiterWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.joinWithoutDelimiterWorks();
            },
            joinWithDelimiterWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.joinWithDelimiterWorks();
            },
            removeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.removeWorks();
            },
            removeReturnsFalseIfTheElementWasNotFound: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.removeReturnsFalseIfTheElementWasNotFound();
            },
            removeCanRemoveNullItem: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.removeCanRemoveNullItem();
            },
            removeUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.removeUsesEqualsMethod();
            },
            removeAtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.removeAtWorks();
            },
            removeRangeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.removeRangeWorks();
            },
            reverseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.reverseWorks();
            },
            sortWithDefaultCompareWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.sortWithDefaultCompareWorks();
            },
            sortWithCompareCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.sortWithCompareCallbackWorks();
            },
            sortWithIComparerWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.sortWithIComparerWorks();
            },
            foreachWhenCastToIEnumerableWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.foreachWhenCastToIEnumerableWorks();
            },
            iEnumerableGetEnumeratorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.iEnumerableGetEnumeratorWorks();
            },
            iCollectionCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.iCollectionCountWorks();
            },
            iCollectionAddWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.iCollectionAddWorks();
            },
            iCollectionClearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.iCollectionClearWorks();
            },
            iCollectionContainsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.iCollectionContainsWorks();
            },
            iCollectionContainsUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.iCollectionContainsUsesEqualsMethod();
            },
            iCollectionRemoveWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.iCollectionRemoveWorks();
            },
            iCollectionRemoveCanRemoveNullItem: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.iCollectionRemoveCanRemoveNullItem();
            },
            iCollectionRemoveUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.iCollectionRemoveUsesEqualsMethod();
            },
            iListIndexingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.iListIndexingWorks();
            },
            iListIndexOfWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.iListIndexOfWorks();
            },
            iListIndexOfUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.iListIndexOfUsesEqualsMethod();
            },
            iListInsertWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.iListInsertWorks();
            },
            iListRemoveAtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.iListRemoveAtWorks();
            },
            toArrayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).beforeTest(false, assert);
                t.toArrayWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).instance = new Bridge.ClientTest.Diagnostics.Contracts.ContractTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).getInstance();
                return r;
            },
            assume: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).beforeTest(false, assert);
                t.assume();
            },
            assumeWithUserMessage: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).beforeTest(false, assert);
                t.assumeWithUserMessage();
            },
            _Assert: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).beforeTest(false, assert);
                t._Assert();
            },
            assertWithUserMessage: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).beforeTest(false, assert);
                t.assertWithUserMessage();
            },
            requires: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).beforeTest(false, assert);
                t.requires();
            },
            requiresWithUserMessage: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).beforeTest(false, assert);
                t.requiresWithUserMessage();
            },
            requiresWithTypeException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).beforeTest(false, assert);
                t.requiresWithTypeException();
            },
            requiredWithTypeExceptionAndUserMessage: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).beforeTest(false, assert);
                t.requiredWithTypeExceptionAndUserMessage();
            },
            forAll: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).beforeTest(false, assert);
                t.forAll();
            },
            forAllWithCollection: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).beforeTest(false, assert);
                t.forAllWithCollection();
            },
            exists: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).beforeTest(false, assert);
                t.exists();
            },
            existsWithCollection: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).beforeTest(false, assert);
                t.existsWithCollection();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).instance = new Bridge.ClientTest.Diagnostics.StopwatchTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).getInstance();
                return r;
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constantsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).beforeTest(false, assert);
                t.constantsWorks();
            },
            startNewWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).beforeTest(false, assert);
                t.startNewWorks();
            },
            startAndStopWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).beforeTest(false, assert);
                t.startAndStopWork();
            },
            elapsedWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).beforeTest(false, assert);
                t.elapsedWorks();
            },
            getTimestampWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).beforeTest(false, assert);
                t.getTimestampWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).instance = new Bridge.ClientTest.Exceptions.AggregateExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithIEnumerableInnerExceptionsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).beforeTest(false, assert);
                t.constructorWithIEnumerableInnerExceptionsWorks();
            },
            constructorWithInnerExceptionArrayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).beforeTest(false, assert);
                t.constructorWithInnerExceptionArrayWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndIEnumerableInnerExceptionsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndIEnumerableInnerExceptionsWorks();
            },
            constructorWithMessageAndInnerExceptionArrayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionArrayWorks();
            },
            flattenWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).beforeTest(false, assert);
                t.flattenWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).instance = new Bridge.ClientTest.Exceptions.ArgumentExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            },
            constructorWithMessageAndParamNameWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndParamNameWorks();
            },
            constructorWithMessageAndParamNameAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndParamNameAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests).instance = new Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithParamNameWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests).beforeTest(false, assert);
                t.constructorWithParamNameWorks();
            },
            constructorWithParamNameAndMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests).beforeTest(false, assert);
                t.constructorWithParamNameAndMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).instance = new Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithParamNameWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
                t.constructorWithParamNameWorks();
            },
            constructorWithParamNameAndMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
                t.constructorWithParamNameAndMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            },
            constructorWithParamNameAndActualValueAndMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
                t.constructorWithParamNameAndActualValueAndMessageWorks();
            },
            rangeErrorIsConvertedToArgumentOutOfRangeException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
                assert.expect(1);
                t.rangeErrorIsConvertedToArgumentOutOfRangeException();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArithmeticExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArithmeticExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArithmeticExceptionTests).instance = new Bridge.ClientTest.Exceptions.ArithmeticExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArithmeticExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArithmeticExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArithmeticExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArithmeticExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArithmeticExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArithmeticExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArithmeticExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArithmeticExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).instance = new Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            },
            constructorWithMessageAndParamNameWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndParamNameWorks();
            },
            constructorWithMessageAndCultureNameAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndCultureNameAndInnerExceptionWorks();
            },
            constructorWithParamNameAndCultureNameAndMessage: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).beforeTest(false, assert);
                t.constructorWithParamNameAndCultureNameAndMessage();
            },
            constructorWithMessageAndCultureIdAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndCultureIdAndInnerExceptionWorks();
            },
            constructorWithParamNameAndCultureIdAndMessage: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).beforeTest(false, assert);
                t.constructorWithParamNameAndCultureIdAndMessage();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsDivideByZeroExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsDivideByZeroExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsDivideByZeroExceptionTests).instance = new Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsDivideByZeroExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsDivideByZeroExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsDivideByZeroExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsDivideByZeroExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsDivideByZeroExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsDivideByZeroExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsDivideByZeroExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsDivideByZeroExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).instance = new Bridge.ClientTest.Exceptions.ExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            },
            messagePropertyCanBeOverridden: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).beforeTest(false, assert);
                t.messagePropertyCanBeOverridden();
            },
            innerExceptionPropertyCanBeOverridden: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).beforeTest(false, assert);
                t.innerExceptionPropertyCanBeOverridden();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsFormatExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsFormatExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsFormatExceptionTests).instance = new Bridge.ClientTest.Exceptions.FormatExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsFormatExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsFormatExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsFormatExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsFormatExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsFormatExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsFormatExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsFormatExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsFormatExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidCastExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidCastExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidCastExceptionTests).instance = new Bridge.ClientTest.Exceptions.InvalidCastExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidCastExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidCastExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidCastExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidCastExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidCastExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidCastExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidCastExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidCastExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidOperationExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidOperationExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidOperationExceptionTests).instance = new Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidOperationExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidOperationExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidOperationExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidOperationExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidOperationExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidOperationExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidOperationExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidOperationExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsKeyNotFoundExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsKeyNotFoundExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsKeyNotFoundExceptionTests).instance = new Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsKeyNotFoundExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsKeyNotFoundExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsKeyNotFoundExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsKeyNotFoundExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsKeyNotFoundExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsKeyNotFoundExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsKeyNotFoundExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsKeyNotFoundExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotImplementedExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotImplementedExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotImplementedExceptionTests).instance = new Bridge.ClientTest.Exceptions.NotImplementedExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotImplementedExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotImplementedExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotImplementedExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotImplementedExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotImplementedExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotImplementedExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotImplementedExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotImplementedExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotSupportedExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotSupportedExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotSupportedExceptionTests).instance = new Bridge.ClientTest.Exceptions.NotSupportedExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotSupportedExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotSupportedExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotSupportedExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotSupportedExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotSupportedExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotSupportedExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotSupportedExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotSupportedExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests).instance = new Bridge.ClientTest.Exceptions.NullReferenceExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            },
            accessingAFieldOnANullObjectCausesANullReferenceException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests).beforeTest(false, assert);
                assert.expect(1);
                t.accessingAFieldOnANullObjectCausesANullReferenceException();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).instance = new Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            cancellationTokenOnlyConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).beforeTest(false, assert);
                t.cancellationTokenOnlyConstructorWorks();
            },
            messageOnlyConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).beforeTest(false, assert);
                t.messageOnlyConstructorWorks();
            },
            messageAndInnerExceptionConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).beforeTest(false, assert);
                t.messageAndInnerExceptionConstructorWorks();
            },
            messageAndCancellationTokenConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).beforeTest(false, assert);
                t.messageAndCancellationTokenConstructorWorks();
            },
            messageAndInnerExceptionAndCancellationTokenConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).beforeTest(false, assert);
                t.messageAndInnerExceptionAndCancellationTokenConstructorWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOverflowExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOverflowExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOverflowExceptionTests).instance = new Bridge.ClientTest.Exceptions.OverflowExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOverflowExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOverflowExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOverflowExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOverflowExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOverflowExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOverflowExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOverflowExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOverflowExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsPromiseExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsPromiseExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsPromiseExceptionTests).instance = new Bridge.ClientTest.Exceptions.PromiseExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsPromiseExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsPromiseExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsPromiseExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsPromiseExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsPromiseExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            argumentsOnlyConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsPromiseExceptionTests).beforeTest(false, assert);
                t.argumentsOnlyConstructorWorks();
            },
            argumentsAndMessageConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsPromiseExceptionTests).beforeTest(false, assert);
                t.argumentsAndMessageConstructorWorks();
            },
            argumentsAndMessageAndInnerExceptionConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsPromiseExceptionTests).beforeTest(false, assert);
                t.argumentsAndMessageAndInnerExceptionConstructorWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsRankExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsRankExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsRankExceptionTests).instance = new Bridge.ClientTest.Exceptions.RankExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsRankExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsRankExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsRankExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsRankExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsRankExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsRankExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsRankExceptionTests).beforeTest(false, assert);
                t.constructorWithMessageWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests).instance = new Bridge.ClientTest.Exceptions.TaskCanceledExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            messageOnlyConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests).beforeTest(false, assert);
                t.messageOnlyConstructorWorks();
            },
            taskOnlyConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests).beforeTest(false, assert);
                t.taskOnlyConstructorWorks();
            },
            messageAndInnerExceptionConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests).beforeTest(false, assert);
                t.messageAndInnerExceptionConstructorWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqAggregateOperators', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqAggregateOperators).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqAggregateOperators).instance = new Bridge.ClientTest.Linq.TestLinqAggregateOperators();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqAggregateOperators).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqAggregateOperators).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqAggregateOperators).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqAggregateOperators).getInstance();
                return r;
            },
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqAggregateOperators).beforeTest(true, assert);
                assert.expect(20);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqAggregateOperators).test();
            },
            bridge315: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqAggregateOperators).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqAggregateOperators).bridge315();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqConversionOperators', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqConversionOperators).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqConversionOperators).instance = new Bridge.ClientTest.Linq.TestLinqConversionOperators();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqConversionOperators).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqConversionOperators).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqConversionOperators).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqConversionOperators).getInstance();
                return r;
            },
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqConversionOperators).beforeTest(true, assert);
                assert.expect(13);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqConversionOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqElementOperators', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqElementOperators).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqElementOperators).instance = new Bridge.ClientTest.Linq.TestLinqElementOperators();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqElementOperators).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqElementOperators).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqElementOperators).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqElementOperators).getInstance();
                return r;
            },
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqElementOperators).beforeTest(true, assert);
                assert.expect(26);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqElementOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGenerationOperators', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGenerationOperators).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGenerationOperators).instance = new Bridge.ClientTest.Linq.TestLinqGenerationOperators();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGenerationOperators).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGenerationOperators).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGenerationOperators).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGenerationOperators).getInstance();
                return r;
            },
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGenerationOperators).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqGenerationOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGroupingOperators', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGroupingOperators).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGroupingOperators).instance = new Bridge.ClientTest.Linq.TestLinqGroupingOperators();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGroupingOperators).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGroupingOperators).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGroupingOperators).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGroupingOperators).getInstance();
                return r;
            },
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGroupingOperators).beforeTest(true, assert);
                assert.expect(3);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqGroupingOperators).test();
            },
            testComplexGrouping: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGroupingOperators).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqGroupingOperators).testComplexGrouping();
            },
            testAnagrams: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGroupingOperators).beforeTest(true, assert);
                assert.expect(2);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqGroupingOperators).testAnagrams();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqJoinOperators', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqJoinOperators).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqJoinOperators).instance = new Bridge.ClientTest.Linq.TestLinqJoinOperators();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqJoinOperators).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqJoinOperators).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqJoinOperators).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqJoinOperators).getInstance();
                return r;
            },
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqJoinOperators).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqJoinOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqMiscellaneousOperators', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqMiscellaneousOperators).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqMiscellaneousOperators).instance = new Bridge.ClientTest.Linq.TestLinqMiscellaneousOperators();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqMiscellaneousOperators).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqMiscellaneousOperators).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqMiscellaneousOperators).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqMiscellaneousOperators).getInstance();
                return r;
            },
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqMiscellaneousOperators).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqMiscellaneousOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqOrderingOperators', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqOrderingOperators).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqOrderingOperators).instance = new Bridge.ClientTest.Linq.TestLinqOrderingOperators();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqOrderingOperators).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqOrderingOperators).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqOrderingOperators).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqOrderingOperators).getInstance();
                return r;
            },
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqOrderingOperators).beforeTest(true, assert);
                assert.expect(8);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqOrderingOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqPartitioningOperators', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqPartitioningOperators).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqPartitioningOperators).instance = new Bridge.ClientTest.Linq.TestLinqPartitioningOperators();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqPartitioningOperators).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqPartitioningOperators).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqPartitioningOperators).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqPartitioningOperators).getInstance();
                return r;
            },
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqPartitioningOperators).beforeTest(true, assert);
                assert.expect(8);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqPartitioningOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqProjectionOperators', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqProjectionOperators).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqProjectionOperators).instance = new Bridge.ClientTest.Linq.TestLinqProjectionOperators();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqProjectionOperators).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqProjectionOperators).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqProjectionOperators).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqProjectionOperators).getInstance();
                return r;
            },
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqProjectionOperators).beforeTest(true, assert);
                assert.expect(8);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqProjectionOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQuantifiers', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQuantifiers).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQuantifiers).instance = new Bridge.ClientTest.Linq.TestLinqQuantifiers();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQuantifiers).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQuantifiers).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQuantifiers).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQuantifiers).getInstance();
                return r;
            },
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQuantifiers).beforeTest(true, assert);
                assert.expect(4);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqQuantifiers).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQueryExecution', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQueryExecution).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQueryExecution).instance = new Bridge.ClientTest.Linq.TestLinqQueryExecution();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQueryExecution).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQueryExecution).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQueryExecution).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQueryExecution).getInstance();
                return r;
            },
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQueryExecution).beforeTest(true, assert);
                assert.expect(6);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqQueryExecution).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqRestrictionOperators', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqRestrictionOperators).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqRestrictionOperators).instance = new Bridge.ClientTest.Linq.TestLinqRestrictionOperators();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqRestrictionOperators).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqRestrictionOperators).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqRestrictionOperators).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqRestrictionOperators).getInstance();
                return r;
            },
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqRestrictionOperators).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqRestrictionOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqSetOperators', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqSetOperators).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqSetOperators).instance = new Bridge.ClientTest.Linq.TestLinqSetOperators();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqSetOperators).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqSetOperators).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqSetOperators).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqSetOperators).getInstance();
                return r;
            },
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqSetOperators).beforeTest(true, assert);
                assert.expect(8);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqSetOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).instance = new Bridge.ClientTest.SimpleTypes.BooleanTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultValueIsFalse: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).beforeTest(false, assert);
                t.defaultValueIsFalse();
            },
            creatingInstanceReturnsFalse: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).beforeTest(false, assert);
                t.creatingInstanceReturnsFalse();
            },
            defaultConstructorReturnsFalse: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).beforeTest(false, assert);
                t.defaultConstructorReturnsFalse();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).beforeTest(false, assert);
                t.getHashCodeWorks();
            },
            objectEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).beforeTest(false, assert);
                t.objectEqualsWorks();
            },
            boolEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).beforeTest(false, assert);
                t.boolEqualsWorks();
            },
            logicalExclusiveOrWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).beforeTest(false, assert);
                t.logicalExclusiveOrWorks();
            },
            logicalAndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).beforeTest(false, assert);
                t.logicalAndWorks();
            },
            logicalNegationWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).beforeTest(false, assert);
                t.logicalNegationWorks();
            },
            conditionalOperatorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).beforeTest(false, assert);
                t.conditionalOperatorWorks();
            },
            conditionalAndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).beforeTest(false, assert);
                t.conditionalAndWorks();
            },
            conditionalOrWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).beforeTest(false, assert);
                t.conditionalOrWorks();
            },
            equalityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).beforeTest(false, assert);
                t.equalityWorks();
            },
            inequalityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).beforeTest(false, assert);
                t.inequalityWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).instance = new Bridge.ClientTest.SimpleTypes.ByteTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).beforeTest(false, assert);
                t.castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).beforeTest(false, assert);
                t.defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).beforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).beforeTest(false, assert);
                t.constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).beforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).beforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).beforeTest(false, assert);
                t.tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).beforeTest(false, assert);
                t.parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).beforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).beforeTest(false, assert);
                t.toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).beforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).beforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).beforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).beforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).beforeTest(false, assert);
                t.iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).instance = new Bridge.ClientTest.SimpleTypes.CharTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).getInstance();
                return r;
            },
            typePropertiesAreInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.typePropertiesAreInt32();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.castsWork();
            },
            defaultValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.defaultValueWorks();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.constantsWork();
            },
            charComparisonWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.charComparisonWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.parseWorks();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            toStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.toStringWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.compareToWorks();
            },
            isLowerWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.isLowerWorks();
            },
            isUpperWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.isUpperWorks();
            },
            toLowerWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.toLowerWorks();
            },
            toUpperWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.toUpperWorks();
            },
            isDigitWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.isDigitWorks();
            },
            isWhiteSpaceWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.isWhiteSpaceWorks();
            },
            isDigitWithStringAndIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.isDigitWithStringAndIndexWorks();
            },
            isWhiteSpaceWithStringAndIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).beforeTest(false, assert);
                t.isWhiteSpaceWithStringAndIndexWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).instance = new Bridge.ClientTest.SimpleTypes.DecimalTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.defaultValueIs0();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.constantsWork();
            },
            convertingConstructorsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.convertingConstructorsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            addWithStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.addWithStringWorks();
            },
            conversionsToDecimalWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.conversionsToDecimalWork();
            },
            conversionsFromDecimalWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.conversionsFromDecimalWork();
            },
            operatorsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.operatorsWork();
            },
            addWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.addWorks();
            },
            ceilingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.ceilingWorks();
            },
            divideWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.divideWorks();
            },
            floorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.floorWorks();
            },
            remainderWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.remainderWorks();
            },
            multiplyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.multiplyWorks();
            },
            negateWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.negateWorks();
            },
            roundWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.roundWorks();
            },
            roundWithModeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.roundWithModeWorks();
            },
            subtractWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.subtractWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.getHashCodeWorks();
            },
            objectEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.objectEqualsWorks();
            },
            decimalEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.decimalEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.compareToWorks();
            },
            fullCoalesceWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.fullCoalesceWorks();
            },
            shortCoalesceWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).beforeTest(false, assert);
                t.shortCoalesceWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).instance = new Bridge.ClientTest.SimpleTypes.DoubleTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.defaultValueIs0();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.constantsWork();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            toStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.toStringWorks();
            },
            toExponentialWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.toExponentialWorks();
            },
            toExponentialWithFractionalDigitsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.toExponentialWithFractionalDigitsWorks();
            },
            toFixed: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.toFixed();
            },
            toFixedWithFractionalDigitsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.toFixedWithFractionalDigitsWorks();
            },
            toPrecisionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.toPrecisionWorks();
            },
            toPrecisionWithPrecisionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.toPrecisionWithPrecisionWorks();
            },
            isPositiveInfinityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.isPositiveInfinityWorks();
            },
            isNegativeInfinityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.isNegativeInfinityWorks();
            },
            isInfinityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.isInfinityWorks();
            },
            isFiniteWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.isFiniteWorks();
            },
            isNaNWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.isNaNWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.getHashCodeWorks();
            },
            objectEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.objectEqualsWorks();
            },
            doubleEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.doubleEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).beforeTest(false, assert);
                t.compareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesEnumTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesEnumTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesEnumTests).instance = new Bridge.ClientTest.SimpleTypes.EnumTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesEnumTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesEnumTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesEnumTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesEnumTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesEnumTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            firstValueOfEnumIsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesEnumTests).beforeTest(false, assert);
                t.firstValueOfEnumIsZero();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesEnumTests).beforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesEnumTests).beforeTest(false, assert);
                t.equalsWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).instance = new Bridge.ClientTest.SimpleTypes.Int16Tests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).beforeTest(false, assert);
                t.castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).beforeTest(false, assert);
                t.defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).beforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).beforeTest(false, assert);
                t.constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).beforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).beforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).beforeTest(false, assert);
                t.tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).beforeTest(false, assert);
                t.parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).beforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).beforeTest(false, assert);
                t.toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).beforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).beforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).beforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).beforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).beforeTest(false, assert);
                t.iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).instance = new Bridge.ClientTest.SimpleTypes.Int32Tests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.castsWork();
            },
            typeIsWorksForInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.typeIsWorksForInt32();
            },
            typeAsWorksForInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.typeAsWorksForInt32();
            },
            unboxingWorksForInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.unboxingWorksForInt32();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.iComparableCompareToWorks();
            },
            integerDivisionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.integerDivisionWorks();
            },
            integerModuloWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.integerModuloWorks();
            },
            integerDivisionByZeroThrowsDivideByZeroException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.integerDivisionByZeroThrowsDivideByZeroException();
            },
            doublesAreTruncatedWhenConvertedToIntegers: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).beforeTest(false, assert);
                t.doublesAreTruncatedWhenConvertedToIntegers();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).instance = new Bridge.ClientTest.SimpleTypes.Int64Tests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.parseWorks();
            },
            castingOfLargeDoublesToInt64Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.castingOfLargeDoublesToInt64Works();
            },
            divisionOfLargeInt64Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.divisionOfLargeInt64Works();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).beforeTest(false, assert);
                t.iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).instance = new Bridge.ClientTest.SimpleTypes.JsDateTimeTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorReturnsTodaysDate: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.defaultConstructorReturnsTodaysDate();
            },
            creatingInstanceReturnsTodaysDate: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.creatingInstanceReturnsTodaysDate();
            },
            millisecondSinceEpochConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.millisecondSinceEpochConstructorWorks();
            },
            stringConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.stringConstructorWorks();
            },
            yMDConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.yMDConstructorWorks();
            },
            yMDHConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.yMDHConstructorWorks();
            },
            yMDHNConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.yMDHNConstructorWorks();
            },
            yMDHNSConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.yMDHNSConstructorWorks();
            },
            yMDHNSUConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.yMDHNSUConstructorWorks();
            },
            nowWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.nowWorks();
            },
            uTCNowWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.uTCNowWorks();
            },
            toUniversalWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.toUniversalWorks();
            },
            toLocalWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.toLocalWorks();
            },
            todayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.todayWorks();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.formatWorks();
            },
            localeFormatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.localeFormatWorks();
            },
            getFullYearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getFullYearWorks();
            },
            getMonthWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getMonthWorks();
            },
            getDateWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getDateWorks();
            },
            getHoursWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getHoursWorks();
            },
            getMinutesWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getMinutesWorks();
            },
            getSecondsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getSecondsWorks();
            },
            getMillisecondsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getMillisecondsWorks();
            },
            getDayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getDayWorks();
            },
            getTimeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getTimeWorks();
            },
            valueOfWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.valueOfWorks();
            },
            getTimezoneOffsetWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getTimezoneOffsetWorks();
            },
            getUTCFullYearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getUTCFullYearWorks();
            },
            getUtcMonthWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getUtcMonthWorks();
            },
            getUTCDateWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getUTCDateWorks();
            },
            getUTCHoursWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getUTCHoursWorks();
            },
            getUTCMinutesWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getUTCMinutesWorks();
            },
            getUTCSecondsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getUTCSecondsWorks();
            },
            getUTCMillisecondsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getUTCMillisecondsWorks();
            },
            getUTCDayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getUTCDayWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.parseWorks();
            },
            parseExactWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.parseExactWorks();
            },
            parseExactWithCultureWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.parseExactWithCultureWorks();
            },
            parseExactUTCWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.parseExactUTCWorks();
            },
            parseExactUTCWithCultureWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.parseExactUTCWithCultureWorks();
            },
            toDateStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.toDateStringWorks();
            },
            toTimeStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.toTimeStringWorks();
            },
            toUTCStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.toUTCStringWorks();
            },
            toLocaleDateStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.toLocaleDateStringWorks();
            },
            toLocaleTimeStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.toLocaleTimeStringWorks();
            },
            subtractingDatesWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.subtractingDatesWorks();
            },
            subtractMethodReturningTimeSpanWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.subtractMethodReturningTimeSpanWorks();
            },
            dateEqualityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.dateEqualityWorks();
            },
            dateInequalityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.dateInequalityWorks();
            },
            dateLessThanWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.dateLessThanWorks();
            },
            dateLessEqualWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.dateLessEqualWorks();
            },
            dateGreaterThanWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.dateGreaterThanWorks();
            },
            dateGreaterEqualWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.dateGreaterEqualWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.equalsWorks();
            },
            dateTimeEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.dateTimeEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(false, assert);
                t.compareToWorks();
            },
            dateTimes: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).beforeTest(true, assert);
                assert.expect(1);
                Bridge.get(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).dateTimes();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).instance = new Bridge.ClientTest.SimpleTypes.ObjectTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            canGetHashCodeForObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).beforeTest(false, assert);
                t.canGetHashCodeForObject();
            },
            repeatedCallsToGetHashCodeReturnsSameValue: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).beforeTest(false, assert);
                t.repeatedCallsToGetHashCodeReturnsSameValue();
            },
            objectIsEqualToItself: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).beforeTest(false, assert);
                t.objectIsEqualToItself();
            },
            objectIsNotEqualToOtherObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).beforeTest(false, assert);
                t.objectIsNotEqualToOtherObject();
            },
            staticEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).beforeTest(false, assert);
                t.staticEqualsWorks();
            },
            referenceEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).beforeTest(false, assert);
                t.referenceEqualsWorks();
            },
            toStringOverride: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).beforeTest(false, assert);
                t.toStringOverride();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).instance = new Bridge.ClientTest.SimpleTypes.SByteTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).beforeTest(false, assert);
                t.castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).beforeTest(false, assert);
                t.defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).beforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).beforeTest(false, assert);
                t.constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).beforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).beforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).beforeTest(false, assert);
                t.tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).beforeTest(false, assert);
                t.parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).beforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).beforeTest(false, assert);
                t.toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).beforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).beforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).beforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).beforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).beforeTest(false, assert);
                t.iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).instance = new Bridge.ClientTest.SimpleTypes.SingleTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.defaultValueIs0();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.constantsWork();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            toStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.toStringWorks();
            },
            toExponentialWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.toExponentialWorks();
            },
            toExponentialWithFractionalDigitsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.toExponentialWithFractionalDigitsWorks();
            },
            toFixed: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.toFixed();
            },
            toFixedWithFractionalDigitsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.toFixedWithFractionalDigitsWorks();
            },
            toPrecisionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.toPrecisionWorks();
            },
            toPrecisionWithPrecisionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.toPrecisionWithPrecisionWorks();
            },
            isPositiveInfinityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.isPositiveInfinityWorks();
            },
            isNegativeInfinityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.isNegativeInfinityWorks();
            },
            isInfinityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.isInfinityWorks();
            },
            isFiniteWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.isFiniteWorks();
            },
            isNaNWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.isNaNWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.equalsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).beforeTest(false, assert);
                t.compareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).instance = new Bridge.ClientTest.SimpleTypes.StringTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            copyConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.copyConstructorWorks();
            },
            charAndCountConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.charAndCountConstructorWorks();
            },
            charArrayConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.charArrayConstructorWorks();
            },
            emptyFieldWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.emptyFieldWorks();
            },
            lengthPropertyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.lengthPropertyWorks();
            },
            charAtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.charAtWorks();
            },
            charCodeAtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.charCodeAtWorks();
            },
            compareWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.compareWorks();
            },
            compareWithIgnoreCaseArgWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.compareWithIgnoreCaseArgWorks();
            },
            concatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.concatWorks();
            },
            concatWithObjectsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.concatWithObjectsWorks();
            },
            endsWithCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.endsWithCharWorks();
            },
            endsWithStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.endsWithStringWorks();
            },
            staticEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.staticEqualsWorks();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.formatWorks();
            },
            formatWorksWithIFormattable: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.formatWorksWithIFormattable();
            },
            formatCanUseEscapedBraces: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.formatCanUseEscapedBraces();
            },
            fromCharCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.fromCharCodeWorks();
            },
            indexOfCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.indexOfCharWorks();
            },
            indexOfStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.indexOfStringWorks();
            },
            indexOfCharWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.indexOfCharWithStartIndexWorks();
            },
            indexOfCharWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.indexOfCharWithStartIndexAndCountWorks();
            },
            indexOfStringWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.indexOfStringWithStartIndexWorks();
            },
            indexOfStringWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.indexOfStringWithStartIndexAndCountWorks();
            },
            indexOfAnyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.indexOfAnyWorks();
            },
            indexOfAnyWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.indexOfAnyWithStartIndexWorks();
            },
            indexOfAnyWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.indexOfAnyWithStartIndexAndCountWorks();
            },
            insertWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.insertWorks();
            },
            isNullOrEmptyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.isNullOrEmptyWorks();
            },
            lastIndexOfCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.lastIndexOfCharWorks();
            },
            lastIndexOfStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.lastIndexOfStringWorks();
            },
            lastIndexOfCharWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.lastIndexOfCharWithStartIndexWorks();
            },
            lastIndexOfStringWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.lastIndexOfStringWithStartIndexWorks();
            },
            lastIndexOfCharWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.lastIndexOfCharWithStartIndexAndCountWorks();
            },
            lastIndexOfStringWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.lastIndexOfStringWithStartIndexAndCountWorks();
            },
            lastIndexOfAnyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.lastIndexOfAnyWorks();
            },
            lastIndexOfAnyWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.lastIndexOfAnyWithStartIndexWorks();
            },
            lastIndexOfAnyWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.lastIndexOfAnyWithStartIndexAndCountWorks();
            },
            localeCompareWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.localeCompareWorks();
            },
            matchWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.matchWorks();
            },
            padLeftWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.padLeftWorks();
            },
            padLeftWithCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.padLeftWithCharWorks();
            },
            padRightWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.padRightWorks();
            },
            padRightWithCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.padRightWithCharWorks();
            },
            removeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.removeWorks();
            },
            removeWithCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.removeWithCountWorks();
            },
            replaceWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.replaceWorks();
            },
            replaceCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.replaceCharWorks();
            },
            replaceRegexWithReplaceTextWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.replaceRegexWithReplaceTextWorks();
            },
            replaceRegexWithReplaceCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.replaceRegexWithReplaceCallbackWorks();
            },
            searchWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.searchWorks();
            },
            sliceWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.sliceWorks();
            },
            splitWithStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.splitWithStringWorks();
            },
            splitWithCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.splitWithCharWorks();
            },
            jsSplitWithStringAndLimitWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.jsSplitWithStringAndLimitWorks();
            },
            jsSplitWithCharAndLimitWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.jsSplitWithCharAndLimitWorks();
            },
            splitWithCharsAndLimitWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.splitWithCharsAndLimitWorks();
            },
            splitWithCharsAndStringSplitOptionsAndLimitWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.splitWithCharsAndStringSplitOptionsAndLimitWorks();
            },
            splitWithRegexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.splitWithRegexWorks();
            },
            someNetSplitTests: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.someNetSplitTests();
            },
            splitWithCharsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.splitWithCharsWorks();
            },
            splitWithStringsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.splitWithStringsWorks();
            },
            splitWithStringsAndLimitWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.splitWithStringsAndLimitWorks();
            },
            startsWithCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.startsWithCharWorks();
            },
            startsWithStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.startsWithStringWorks();
            },
            substrWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.substrWorks();
            },
            substringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.substringWorks();
            },
            jsSubstringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.jsSubstringWorks();
            },
            toLowerCaseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.toLowerCaseWorks();
            },
            toUpperCaseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.toUpperCaseWorks();
            },
            toLowerWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.toLowerWorks();
            },
            toUpperWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.toUpperWorks();
            },
            trimWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.trimWorks();
            },
            trimCharsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.trimCharsWorks();
            },
            trimStartCharsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.trimStartCharsWorks();
            },
            trimEndCharsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.trimEndCharsWorks();
            },
            trimStartWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.trimStartWorks();
            },
            trimEndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.trimEndWorks();
            },
            stringEqualityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.stringEqualityWorks();
            },
            stringInequalityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.stringInequalityWorks();
            },
            stringIndexingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.stringIndexingWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.getHashCodeWorks();
            },
            instanceEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.instanceEqualsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            stringEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.stringEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.iComparableCompareToWorks();
            },
            joinWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.joinWorks();
            },
            containsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.containsWorks();
            },
            toCharArrayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(false, assert);
                t.toCharArrayWorks();
            },
            strings: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.SimpleTypes.StringTests).strings();
            },
            enumerable: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).beforeTest(true, assert);
                assert.expect(5);
                Bridge.get(Bridge.ClientTest.SimpleTypes.StringTests).enumerable();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).instance = new Bridge.ClientTest.SimpleTypes.TestVersion();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).getInstance();
                return r;
            },
            testConstructors: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).beforeTest(true, assert);
                assert.expect(42);
                Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testConstructors();
            },
            testCloneCompare: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).beforeTest(true, assert);
                assert.expect(13);
                Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testCloneCompare();
            },
            testEqualsGetHashCode: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).beforeTest(true, assert);
                assert.expect(9);
                Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testEqualsGetHashCode();
            },
            testToString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).beforeTest(true, assert);
                assert.expect(10);
                Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testToString();
            },
            testParse: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).beforeTest(true, assert);
                assert.expect(6);
                Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testParse();
            },
            testOperators: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).beforeTest(true, assert);
                assert.expect(30);
                Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testOperators();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).instance = new Bridge.ClientTest.SimpleTypes.TimeSpanTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            defaultValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.defaultValueWorks();
            },
            zeroWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.zeroWorks();
            },
            creatingInstanceReturnsTimeSpanWithZeroValue: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.creatingInstanceReturnsTimeSpanWithZeroValue();
            },
            parameterConstructorsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.parameterConstructorsWorks();
            },
            factoryMethodsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.factoryMethodsWork();
            },
            propertiesWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.propertiesWork();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.compareToWorks();
            },
            compareWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.compareWorks();
            },
            staticEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.staticEqualsWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.equalsWorks();
            },
            toStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.toStringWorks();
            },
            addWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.addWorks();
            },
            subtractWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.subtractWorks();
            },
            durationWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.durationWorks();
            },
            negateWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.negateWorks();
            },
            comparisonOperatorsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.comparisonOperatorsWork();
            },
            additionOperatorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.additionOperatorWorks();
            },
            subtractionOperatorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.subtractionOperatorWorks();
            },
            unaryPlusWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.unaryPlusWorks();
            },
            unaryMinusWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).beforeTest(false, assert);
                t.unaryMinusWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).instance = new Bridge.ClientTest.SimpleTypes.TupleTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).getInstance();
                return r;
            },
            tuple1Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).beforeTest(false, assert);
                t.tuple1Works();
            },
            tuple2Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).beforeTest(false, assert);
                t.tuple2Works();
            },
            tuple3Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).beforeTest(false, assert);
                t.tuple3Works();
            },
            tuple4Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).beforeTest(false, assert);
                t.tuple4Works();
            },
            tuple5Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).beforeTest(false, assert);
                t.tuple5Works();
            },
            tuple6Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).beforeTest(false, assert);
                t.tuple6Works();
            },
            tuple7Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).beforeTest(false, assert);
                t.tuple7Works();
            },
            tuple8Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).beforeTest(false, assert);
                t.tuple8Works();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).instance = new Bridge.ClientTest.SimpleTypes.UInt16Tests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).beforeTest(false, assert);
                t.castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).beforeTest(false, assert);
                t.defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).beforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).beforeTest(false, assert);
                t.constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).beforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).beforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).beforeTest(false, assert);
                t.tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).beforeTest(false, assert);
                t.parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).beforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).beforeTest(false, assert);
                t.toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).beforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).beforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).beforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).beforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).beforeTest(false, assert);
                t.iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).instance = new Bridge.ClientTest.SimpleTypes.UInt32Tests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).beforeTest(false, assert);
                t.castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).beforeTest(false, assert);
                t.defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).beforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).beforeTest(false, assert);
                t.constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).beforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).beforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).beforeTest(false, assert);
                t.tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).beforeTest(false, assert);
                t.parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).beforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).beforeTest(false, assert);
                t.toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).beforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).beforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).beforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).beforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).beforeTest(false, assert);
                t.iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).instance = new Bridge.ClientTest.SimpleTypes.UInt64Tests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            castingOfLargeValuesToUInt64Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.castingOfLargeValuesToUInt64Works();
            },
            divisionOfLargeUInt64Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.divisionOfLargeUInt64Works();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).beforeTest(false, assert);
                t.iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).instance = new Bridge.ClientTest.Text.RegularExpressions.RegexTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            stringOnlyConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).beforeTest(false, assert);
                t.stringOnlyConstructorWorks();
            },
            constructorWithFlagsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).beforeTest(false, assert);
                t.constructorWithFlagsWorks();
            },
            globalFlagWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).beforeTest(false, assert);
                t.globalFlagWorks();
            },
            ignoreCaseFlagWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).beforeTest(false, assert);
                t.ignoreCaseFlagWorks();
            },
            multilineFlagWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).beforeTest(false, assert);
                t.multilineFlagWorks();
            },
            patternPropertyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).beforeTest(false, assert);
                t.patternPropertyWorks();
            },
            sourcePropertyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).beforeTest(false, assert);
                t.sourcePropertyWorks();
            },
            execWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).beforeTest(false, assert);
                t.execWorks();
            },
            lastIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).beforeTest(false, assert);
                t.lastIndexWorks();
            },
            testWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).beforeTest(false, assert);
                t.testWorks();
            },
            escapeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.Text.RegularExpressions.RegexTests).escapeWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).instance = new Bridge.ClientTest.Text.StringBuilderTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithCapacityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.constructorWithCapacityWorks();
            },
            initialTextConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.initialTextConstructorWorks();
            },
            initialTextConstructorWithCapacityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.initialTextConstructorWithCapacityWorks();
            },
            substringConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.substringConstructorWorks();
            },
            appendBoolWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.appendBoolWorks();
            },
            appendCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.appendCharWorks();
            },
            appendIntWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.appendIntWorks();
            },
            appendDoubleWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.appendDoubleWorks();
            },
            appendObjectWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.appendObjectWorks();
            },
            appendStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.appendStringWorks();
            },
            appendLineWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.appendLineWorks();
            },
            appendLineStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.appendLineStringWorks();
            },
            clearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.clearWorks();
            },
            toStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.toStringWorks();
            },
            lengthPropertyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(false, assert);
                t.lengthPropertyWorks();
            },
            stringBuilders: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).beforeTest(true, assert);
                assert.expect(21);
                Bridge.get(Bridge.ClientTest.Text.StringBuilderTests).stringBuilders();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).instance = new Bridge.ClientTest.Threading.AsyncTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).getInstance();
                return r;
            },
            asyncVoid: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).beforeTest(false, assert);
                assert.expect(3);
                t.asyncVoid();
            },
            asyncTask: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).beforeTest(false, assert);
                assert.expect(7);
                t.asyncTask();
            },
            asyncTaskBodyThrowsException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).beforeTest(false, assert);
                assert.expect(8);
                t.asyncTaskBodyThrowsException();
            },
            awaitTaskThatFaults: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).beforeTest(false, assert);
                assert.expect(8);
                t.awaitTaskThatFaults();
            },
            aggregateExceptionsAreUnwrappedWhenAwaitingTask: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).beforeTest(false, assert);
                assert.expect(2);
                t.aggregateExceptionsAreUnwrappedWhenAwaitingTask();
            },
            asyncTaskThatReturnsValue: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).beforeTest(false, assert);
                assert.expect(8);
                t.asyncTaskThatReturnsValue();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).instance = new Bridge.ClientTest.Threading.CancellationTokenTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).getInstance();
                return r;
            },
            typePropertiesForCancellationTokenSourceAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.typePropertiesForCancellationTokenSourceAreCorrect();
            },
            typePropertiesForCancellationTokenAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.typePropertiesForCancellationTokenAreCorrect();
            },
            typePropertiesForCancellationTokenRegistrationAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.typePropertiesForCancellationTokenRegistrationAreCorrect();
            },
            cancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.cancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe();
            },
            cancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.cancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe();
            },
            cancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.cancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled();
            },
            cancellationTokenNoneIsNotCancelledAndCannotBe: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.cancellationTokenNoneIsNotCancelledAndCannotBe();
            },
            creatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.creatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled();
            },
            activatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.activatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled();
            },
            canBeCanceledIsTrueForTokenCreatedForCancellationTokenSource: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.canBeCanceledIsTrueForTokenCreatedForCancellationTokenSource();
            },
            isCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.isCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod();
            },
            throwIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.throwIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled();
            },
            cancelWithoutArgumentsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.cancelWithoutArgumentsWorks();
            },
            cancelWorksWhenThrowOnFirstExceptionIsFalse: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.cancelWorksWhenThrowOnFirstExceptionIsFalse();
            },
            cancelWorksWhenThrowOnFirstExceptionIsTrue: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.cancelWorksWhenThrowOnFirstExceptionIsTrue();
            },
            registerOnACancelledSourceWithoutContextInvokesTheCallback: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.registerOnACancelledSourceWithoutContextInvokesTheCallback();
            },
            registerWithArgumentOnACancelledSourceInvokesTheCallback: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.registerWithArgumentOnACancelledSourceInvokesTheCallback();
            },
            registerOnACancelledSourceWithoutContextRethrowsAThrownException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.registerOnACancelledSourceWithoutContextRethrowsAThrownException();
            },
            registerOnACancelledSourceWithContextRethrowsAThrownException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.registerOnACancelledSourceWithContextRethrowsAThrownException();
            },
            registerOverloadsWithUseSynchronizationContextWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.registerOverloadsWithUseSynchronizationContextWork();
            },
            registerOnCancellationTokenCreatedNonCancelledDoesNothing: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.registerOnCancellationTokenCreatedNonCancelledDoesNothing();
            },
            registerOnCancellationTokenCreatedCancelledInvokesTheActionImmediately: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.registerOnCancellationTokenCreatedCancelledInvokesTheActionImmediately();
            },
            duplicateCancelDoesNotCauseCallbacksToBeCalledTwice: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.duplicateCancelDoesNotCauseCallbacksToBeCalledTwice();
            },
            registrationsCanBeCompared: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.registrationsCanBeCompared();
            },
            registrationsCanBeUnregistered: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.registrationsCanBeUnregistered();
            },
            creatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.creatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm();
            },
            linkedSourceWithTwoTokensWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.linkedSourceWithTwoTokensWorks();
            },
            linkedSourceWithThreeTokensWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).beforeTest(false, assert);
                t.linkedSourceWithThreeTokensWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests).instance = new Bridge.ClientTest.Threading.PromiseTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests).getInstance();
                return r;
            },
            taskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests).beforeTest(false, assert);
                assert.expect(7);
                t.taskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes();
            },
            taskFromPromiseWithResultFactoryWorksWhenPromiseCompletes: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests).beforeTest(false, assert);
                assert.expect(7);
                t.taskFromPromiseWithResultFactoryWorksWhenPromiseCompletes();
            },
            taskFromPromiseWorksWhenPromiseFails: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests).beforeTest(false, assert);
                assert.expect(10);
                t.taskFromPromiseWorksWhenPromiseFails();
            },
            completingPromiseCanBeAwaited: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests).beforeTest(false, assert);
                assert.expect(3);
                t.completingPromiseCanBeAwaited();
            },
            failingPromiseCanBeAwaited: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests).beforeTest(false, assert);
                assert.expect(4);
                t.failingPromiseCanBeAwaited();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).instance = new Bridge.ClientTest.Threading.TaskTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).getInstance();
                return r;
            },
            taskCompletionSourceTypePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(2);
                t.taskCompletionSourceTypePropertiesAreCorrect();
            },
            taskTypePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(5);
                t.taskTypePropertiesAreCorrect();
            },
            taskCompletionSourceWorksWhenSettingResult: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(10);
                t.taskCompletionSourceWorksWhenSettingResult();
            },
            taskCompletionSourceWorksWhenSettingASingleException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(12);
                t.taskCompletionSourceWorksWhenSettingASingleException();
            },
            taskCompletionSourceWorksWhenSettingTwoExceptions: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(14);
                t.taskCompletionSourceWorksWhenSettingTwoExceptions();
            },
            taskCompletionSourceWorksWhenCancelling: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(10);
                t.taskCompletionSourceWorksWhenCancelling();
            },
            cancelledTaskThrowsTaskCanceledExceptionWhenAwaited: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(2);
                t.cancelledTaskThrowsTaskCanceledExceptionWhenAwaited();
            },
            cancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(3);
                t.cancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed();
            },
            setResultFailsWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(1);
                t.setResultFailsWhenTheTaskIsCompleted();
            },
            setCanceledFailsWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(1);
                t.setCanceledFailsWhenTheTaskIsCompleted();
            },
            setExceptionFailsWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(1);
                t.setExceptionFailsWhenTheTaskIsCompleted();
            },
            completedTaskHasCorrectIsXProperties: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(3);
                t.completedTaskHasCorrectIsXProperties();
            },
            cancelledTaskHasCorrectIsXProperties: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(3);
                t.cancelledTaskHasCorrectIsXProperties();
            },
            faultedTaskHasCorrectIsXProperties: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(3);
                t.faultedTaskHasCorrectIsXProperties();
            },
            trySetResultReturnsFalseWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(2);
                t.trySetResultReturnsFalseWhenTheTaskIsCompleted();
            },
            trySetCanceledReturnsFalseWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(2);
                t.trySetCanceledReturnsFalseWhenTheTaskIsCompleted();
            },
            trySetExceptionReturnsFalseWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(2);
                t.trySetExceptionReturnsFalseWhenTheTaskIsCompleted();
            },
            continueWithForNonGenericTaskWorkWithNoResultAndNoException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(10);
                t.continueWithForNonGenericTaskWorkWithNoResultAndNoException();
            },
            continueWithWhenCallbackThrowsAnException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(6);
                t.continueWithWhenCallbackThrowsAnException();
            },
            exceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(8);
                t.exceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask();
            },
            continueWithForNonGenericTaskCanReturnAValue: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(11);
                t.continueWithForNonGenericTaskCanReturnAValue();
            },
            continueWithWithNoReturnValueForGenericTaskWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(10);
                t.continueWithWithNoReturnValueForGenericTaskWorks();
            },
            continueWithForGenericTaskCanReturnAValue: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(11);
                t.continueWithForGenericTaskCanReturnAValue();
            },
            delayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(6);
                t.delayWorks();
            },
            fromResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(3);
                t.fromResultWorks();
            },
            runWithoutResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(6);
                t.runWithoutResultWorks();
            },
            runWithResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(7);
                t.runWithResultWorks();
            },
            runWorksWhenBodyThrows: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(7);
                t.runWorksWhenBodyThrows();
            },
            whenAllParamArrayWithResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(13);
                t.whenAllParamArrayWithResultWorks();
            },
            whenAllEnumerableWithResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(13);
                t.whenAllEnumerableWithResultWorks();
            },
            whenAllParamArrayWithoutResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(12);
                t.whenAllParamArrayWithoutResultWorks();
            },
            whenAllEnumerableWithoutResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(12);
                t.whenAllEnumerableWithoutResultWorks();
            },
            whenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(17);
                t.whenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted();
            },
            whenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(12);
                t.whenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled();
            },
            whenAnyParamArrayWithResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(10);
                t.whenAnyParamArrayWithResultWorks();
            },
            whenAnyEnumerableWithResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(10);
                t.whenAnyEnumerableWithResultWorks();
            },
            whenAnyParamArrayWithoutResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(9);
                t.whenAnyParamArrayWithoutResultWorks();
            },
            whenAnyEnumerableWithoutResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(9);
                t.whenAnyEnumerableWithoutResultWorks();
            },
            whenAnyFaultsIfTheFirstTaskFaulted: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(9);
                t.whenAnyFaultsIfTheFirstTaskFaulted();
            },
            whenAnyIsCancelledIfTheFirstTaskWasCancelled: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(8);
                t.whenAnyIsCancelledIfTheFirstTaskWasCancelled();
            },
            constructorWithOnlyActionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(7);
                t.constructorWithOnlyActionWorks();
            },
            constructorWithActionAndStateWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(8);
                t.constructorWithActionAndStateWorks();
            },
            exceptionInManuallyCreatedTaskIsStoredOnTheTask: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(8);
                t.exceptionInManuallyCreatedTaskIsStoredOnTheTask();
            },
            constructorWithOnlyFunctionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(8);
                t.constructorWithOnlyFunctionWorks();
            },
            constructorWithFunctionAndStateWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).beforeTest(false, assert);
                assert.expect(9);
                t.constructorWithFunctionAndStateWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).instance = new Bridge.ClientTest.ArrayTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            lengthWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.lengthWorks();
            },
            rankIsOne: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.rankIsOne();
            },
            getLengthWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.getLengthWorks();
            },
            getLowerBound: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.getLowerBound();
            },
            getUpperBoundWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.getUpperBoundWorks();
            },
            gettingValueByIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.gettingValueByIndexWorks();
            },
            getValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.getValueWorks();
            },
            settingValueByIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.settingValueByIndexWorks();
            },
            setValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.setValueWorks();
            },
            foreachWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.foreachWorks();
            },
            cloneWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.cloneWorks();
            },
            concatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.concatWorks();
            },
            containsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.containsWorks();
            },
            containsUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.containsUsesEqualsMethod();
            },
            allWithArrayItemFilterCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.allWithArrayItemFilterCallbackWorks();
            },
            sliceWithoutEndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.sliceWithoutEndWorks();
            },
            foreachWithArrayItemCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.foreachWithArrayItemCallbackWorks();
            },
            foreachWithArrayCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.foreachWithArrayCallbackWorks();
            },
            indexOfWithoutStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.indexOfWithoutStartIndexWorks();
            },
            indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.indexOfWithoutStartIndexUsesEqualsMethod();
            },
            indexOfWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.indexOfWithStartIndexWorks();
            },
            joinWithoutDelimiterWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.joinWithoutDelimiterWorks();
            },
            reverseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.reverseWorks();
            },
            anyWithArrayItemFilterCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.anyWithArrayItemFilterCallbackWorks();
            },
            binarySearch1Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.binarySearch1Works();
            },
            binarySearch2Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.binarySearch2Works();
            },
            binarySearch3Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.binarySearch3Works();
            },
            binarySearch4Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.binarySearch4Works();
            },
            binarySearchExceptionsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.binarySearchExceptionsWorks();
            },
            sortWithDefaultCompareWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.sortWithDefaultCompareWorks();
            },
            sort1Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.sort1Works();
            },
            sort2Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.sort2Works();
            },
            sort3Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.sort3Works();
            },
            sort4Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.sort4Works();
            },
            sortExceptionsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.sortExceptionsWorks();
            },
            foreachWhenCastToIListWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.foreachWhenCastToIListWorks();
            },
            iCollectionCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.iCollectionCountWorks();
            },
            iCollectionAddWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.iCollectionAddWorks();
            },
            iCollectionClearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.iCollectionClearWorks();
            },
            iCollectionContainsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.iCollectionContainsWorks();
            },
            iCollectionContainsUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.iCollectionContainsUsesEqualsMethod();
            },
            iCollectionRemoveWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.iCollectionRemoveWorks();
            },
            iListIndexingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.iListIndexingWorks();
            },
            iListIndexOfWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.iListIndexOfWorks();
            },
            iListIndexOfUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.iListIndexOfUsesEqualsMethod();
            },
            iListInsertWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.iListInsertWorks();
            },
            iListRemoveAtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).beforeTest(false, assert);
                t.iListRemoveAtWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTestCultureInfoTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestCultureInfoTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestCultureInfoTests).instance = new Bridge.ClientTest.CultureInfoTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestCultureInfoTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestCultureInfoTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestCultureInfoTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestCultureInfoTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestCultureInfoTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            getFormatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestCultureInfoTests).beforeTest(false, assert);
                t.getFormatWorks();
            },
            invariantWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestCultureInfoTests).beforeTest(false, assert);
                t.invariantWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDateTimeFormatInfoTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDateTimeFormatInfoTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDateTimeFormatInfoTests).instance = new Bridge.ClientTest.DateTimeFormatInfoTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDateTimeFormatInfoTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDateTimeFormatInfoTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDateTimeFormatInfoTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDateTimeFormatInfoTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDateTimeFormatInfoTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            getFormatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDateTimeFormatInfoTests).beforeTest(false, assert);
                t.getFormatWorks();
            },
            invariantWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDateTimeFormatInfoTests).beforeTest(false, assert);
                t.invariantWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).instance = new Bridge.ClientTest.DecimalMathTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).getInstance();
                return r;
            },
            testSubtractOperator: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testSubtractOperator();
            },
            testRemainderOperator: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testRemainderOperator();
            },
            testMultiplyOperator: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testMultiplyOperator();
            },
            testDivideOperator: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testDivideOperator();
            },
            testAddOperator: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testAddOperator();
            },
            testAddMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testAddMethod();
            },
            testDivideMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testDivideMethod();
            },
            testMultiplyMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testMultiplyMethod();
            },
            testRemainderMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testRemainderMethod();
            },
            testSubtractMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testSubtractMethod();
            },
            testCeilingMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testCeilingMethod();
            },
            testFloorMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).beforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testFloorMethod();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTestEnvironmentTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestEnvironmentTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestEnvironmentTests).instance = new Bridge.ClientTest.EnvironmentTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestEnvironmentTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestEnvironmentTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestEnvironmentTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestEnvironmentTests).getInstance();
                return r;
            },
            newLineIsAStringContainingOnlyTheNewLineChar: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestEnvironmentTests).beforeTest(false, assert);
                t.newLineIsAStringContainingOnlyTheNewLineChar();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTestExceptionTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestExceptionTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestExceptionTests).instance = new Bridge.ClientTest.ExceptionTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestExceptionTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestExceptionTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestExceptionTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestExceptionTests).getInstance();
                return r;
            },
            throwingAndCatchingExceptionsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestExceptionTests).beforeTest(false, assert);
                t.throwingAndCatchingExceptionsWorks();
            },
            exceptionOfWrongTypeIsNotCaught: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestExceptionTests).beforeTest(false, assert);
                t.exceptionOfWrongTypeIsNotCaught();
            },
            canCatchExceptionAsBaseType: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestExceptionTests).beforeTest(false, assert);
                t.canCatchExceptionAsBaseType();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTestIComparableTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestIComparableTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestIComparableTests).instance = new Bridge.ClientTest.IComparableTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestIComparableTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestIComparableTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestIComparableTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestIComparableTests).getInstance();
                return r;
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTestIEquatableTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestIEquatableTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestIEquatableTests).instance = new Bridge.ClientTest.IEquatableTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestIEquatableTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestIEquatableTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestIEquatableTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestIEquatableTests).getInstance();
                return r;
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).instance = new Bridge.ClientTest.MathTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).getInstance();
                return r;
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.constantsWork();
            },
            absOfDoubleWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.absOfDoubleWorks();
            },
            absOfIntWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.absOfIntWorks();
            },
            absOfLongWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.absOfLongWorks();
            },
            absOfSbyteWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.absOfSbyteWorks();
            },
            absOfShortWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.absOfShortWorks();
            },
            absOfFloatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.absOfFloatWorks();
            },
            absOfDecimalWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.absOfDecimalWorks();
            },
            acosWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.acosWorks();
            },
            asinWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.asinWorks();
            },
            atanWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.atanWorks();
            },
            atan2Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.atan2Works();
            },
            cosWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.cosWorks();
            },
            divRemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.divRemWorks();
            },
            expWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.expWorks();
            },
            floorOfDoubleWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.floorOfDoubleWorks();
            },
            floorOfDecimalWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.floorOfDecimalWorks();
            },
            logWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.logWorks();
            },
            maxOfByteWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.maxOfByteWorks();
            },
            maxOfDecimalWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.maxOfDecimalWorks();
            },
            maxOfDoubleWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.maxOfDoubleWorks();
            },
            maxOfShortWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.maxOfShortWorks();
            },
            maxOfIntWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.maxOfIntWorks();
            },
            maxOfLongWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.maxOfLongWorks();
            },
            maxOfSByteWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.maxOfSByteWorks();
            },
            maxOfFloatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.maxOfFloatWorks();
            },
            maxOfUShortWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.maxOfUShortWorks();
            },
            maxOfUIntWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.maxOfUIntWorks();
            },
            maxOfULongWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.maxOfULongWorks();
            },
            minOfByteWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.minOfByteWorks();
            },
            minOfDecimalWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.minOfDecimalWorks();
            },
            minOfDoubleWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.minOfDoubleWorks();
            },
            minOfShortWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.minOfShortWorks();
            },
            minOfIntWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.minOfIntWorks();
            },
            minOfLongWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.minOfLongWorks();
            },
            minOfSByteWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.minOfSByteWorks();
            },
            minOfFloatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.minOfFloatWorks();
            },
            minOfUShortWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.minOfUShortWorks();
            },
            minOfUIntWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.minOfUIntWorks();
            },
            minOfULongWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.minOfULongWorks();
            },
            powWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.powWorks();
            },
            randomWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.randomWorks();
            },
            roundOfDoubleWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.roundOfDoubleWorks();
            },
            roundDecimalWithModeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.roundDecimalWithModeWorks();
            },
            roundDecimalWithPrecisionAndModeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.roundDecimalWithPrecisionAndModeWorks();
            },
            roundDoubleWithModeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.roundDoubleWithModeWorks();
            },
            roundDoubleWithPrecisionAndModeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.roundDoubleWithPrecisionAndModeWorks();
            },
            jsRoundWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.jsRoundWorks();
            },
            iEEERemainderWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.iEEERemainderWorks();
            },
            sinWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.sinWorks();
            },
            sqrtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.sqrtWorks();
            },
            tanWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).beforeTest(false, assert);
                t.tanWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).instance = new Bridge.ClientTest.MultidimArrayTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            lengthWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).beforeTest(false, assert);
                t.lengthWorks();
            },
            getValueWorksForUninitializedElement: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).beforeTest(false, assert);
                t.getValueWorksForUninitializedElement();
            },
            getValueByIndexWorksForUninitializedElement: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).beforeTest(false, assert);
                t.getValueByIndexWorksForUninitializedElement();
            },
            settingValueByIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).beforeTest(false, assert);
                t.settingValueByIndexWorks();
            },
            setValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).beforeTest(false, assert);
                t.setValueWorks();
            },
            getValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).beforeTest(false, assert);
                t.getValueWorks();
            },
            gettingValueByIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).beforeTest(false, assert);
                t.gettingValueByIndexWorks();
            },
            rankWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).beforeTest(false, assert);
                t.rankWorks();
            },
            getValueWithIndexOutOfRangeThrowsAnException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).beforeTest(false, assert);
                t.getValueWithIndexOutOfRangeThrowsAnException();
            },
            setValueWithIndexOutOfRangeThrowsAnException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).beforeTest(false, assert);
                t.setValueWithIndexOutOfRangeThrowsAnException();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).instance = new Bridge.ClientTest.NullableTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            convertingToNullableWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.convertingToNullableWorks();
            },
            hasValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.hasValueWorks();
            },
            boxingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.boxingWorks();
            },
            unboxingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.unboxingWorks();
            },
            valueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.valueWorks();
            },
            unboxingValueOfWrongTypeThrowsAnException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.unboxingValueOfWrongTypeThrowsAnException();
            },
            getValueOrDefaultWithArgWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.getValueOrDefaultWithArgWorks();
            },
            liftedEqualityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedEqualityWorks();
            },
            liftedInequalityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedInequalityWorks();
            },
            liftedLessThanWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedLessThanWorks();
            },
            liftedGreaterThanWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedGreaterThanWorks();
            },
            liftedLessThanOrEqualWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedLessThanOrEqualWorks();
            },
            liftedGreaterThanOrEqualWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedGreaterThanOrEqualWorks();
            },
            liftedSubtractionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedSubtractionWorks();
            },
            liftedAdditionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedAdditionWorks();
            },
            liftedModWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedModWorks();
            },
            liftedFloatingPointDivisionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedFloatingPointDivisionWorks();
            },
            liftedIntegerDivisionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedIntegerDivisionWorks();
            },
            liftedMultiplicationWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedMultiplicationWorks();
            },
            liftedBitwiseAndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedBitwiseAndWorks();
            },
            liftedBitwiseOrWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedBitwiseOrWorks();
            },
            liftedBitwiseXorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedBitwiseXorWorks();
            },
            liftedLeftShiftWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedLeftShiftWorks();
            },
            liftedSignedRightShiftWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedSignedRightShiftWorks();
            },
            liftedUnsignedRightShiftWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedUnsignedRightShiftWorks();
            },
            liftedBooleanAndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedBooleanAndWorks();
            },
            liftedBooleanOrWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedBooleanOrWorks();
            },
            liftedBooleanNotWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedBooleanNotWorks();
            },
            liftedNegationWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedNegationWorks();
            },
            liftedUnaryPlusWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedUnaryPlusWorks();
            },
            liftedOnesComplementWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.liftedOnesComplementWorks();
            },
            coalesceWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).beforeTest(false, assert);
                t.coalesceWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNumberFormatInfoTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNumberFormatInfoTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNumberFormatInfoTests).instance = new Bridge.ClientTest.NumberFormatInfoTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNumberFormatInfoTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNumberFormatInfoTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNumberFormatInfoTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNumberFormatInfoTests).getInstance();
                return r;
            },
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNumberFormatInfoTests).beforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            getFormatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNumberFormatInfoTests).beforeTest(false, assert);
                t.getFormatWorks();
            },
            invariantWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNumberFormatInfoTests).beforeTest(false, assert);
                t.invariantWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests', {
        statics: {
            instance: null,
            getInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).instance)) {
                    Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).instance = new Bridge.ClientTest.PropertyAccessorTests();
                }
                return Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).instance;
            },
            setInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).instance = value;
            },
            beforeTest: function (isStatic, assert) {
                Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).setInstance(null);
                Bridge.get(Bridge.Test.Assert).assert = assert;
                var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).getInstance();
                return r;
            },
            accessorsCanBeInvokedInstance: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).beforeTest(false, assert);
                t.accessorsCanBeInvokedInstance();
            },
            accessorsCanBeInvokedStatic: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).beforeTest(false, assert);
                t.accessorsCanBeInvokedStatic();
            },
            accessorsCanBeInvokedGeneric: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).beforeTest(false, assert);
                t.accessorsCanBeInvokedGeneric();
            },
            accessorsCanBeInvokedGenericStatic: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).beforeTest(false, assert);
                t.accessorsCanBeInvokedGenericStatic();
            },
            baseAccessorsCanBeInvoked: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).beforeTest(false, assert);
                t.baseAccessorsCanBeInvoked();
            },
            baseAccessorsCanBeInvokedGeneric: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).beforeTest(false, assert);
                t.baseAccessorsCanBeInvokedGeneric();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner', {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.runTests);
                }
            },
            runTests: function () {
                QUnit.module("C#");
                QUnit.test("Enum - TestParse", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).testParse);
                QUnit.test("Enum - TestParseIgnoreCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).testParseIgnoreCase);
                QUnit.test("Enum - TestToString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).testToString);
                QUnit.test("Enum - TestGetValues", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).testGetValues);
                QUnit.test("Enum - TestCompareTo", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).testCompareTo);
                QUnit.test("Enum - TestFormat", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).testFormat);
                QUnit.test("Enum - TestGetName", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).testGetName);
                QUnit.test("Enum - TestGetNames", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).testGetNames);
                QUnit.test("Enum - TestHasFlag", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).testHasFlag);
                QUnit.test("Enum - TestIsDefined", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).testIsDefined);
                QUnit.test("Enum - TestTryParse", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestEnum).testTryParse);
                QUnit.test("Method parameters - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestMethodParametersClass).test);
                QUnit.test("Instance overloads - TestInstance", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadInstanceMethods).testInstance);
                QUnit.test("Static overloads - TestStatic", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestOverloadStaticMethods).testStatic);
                QUnit.test("Try/Catch - SimpleTryCatch", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks).simpleTryCatch);
                QUnit.test("Try/Catch - CaughtExceptions", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks).caughtExceptions);
                QUnit.test("Try/Catch - ThrownExceptions", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks).thrownExceptions);
                QUnit.test("Try/Catch - Bridge320", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks).bridge320);
                QUnit.test("Try/Catch - Bridge343", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchBlocks).bridge343);
                QUnit.test("Try/Catch/Finally - SimpleTryCatchFinally", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchFinallyBlocks).simpleTryCatchFinally);
                QUnit.test("Try/Catch/Finally - CaughtExceptions", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchFinallyBlocks).caughtExceptions);
                QUnit.test("Try/Catch/Finally - ThrownExceptions", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestTryCatchFinallyBlocks).thrownExceptions);
                QUnit.test("Value types - TestInstanceConstructorsAndMethods", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestValueTypes).testInstanceConstructorsAndMethods);
                QUnit.test("Value types - TestStaticConstructorsAndMethods", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestValueTypes).testStaticConstructorsAndMethods);
                QUnit.test("Static overloads - TestA", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInheritance).testA);
                QUnit.test("Static overloads - TestB", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInheritance).testB);
                QUnit.test("Static overloads - TestAB", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInheritance).testAB);
                QUnit.test("Interfaces - TestInterfaceMethodAndProperty", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInterfaces).testInterfaceMethodAndProperty);
                QUnit.test("Interfaces - TestExplicitInterfaceMethodAndProperty", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInterfaces).testExplicitInterfaceMethodAndProperty);
                QUnit.test("Interfaces - TestTwoInterfaces", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestInterfaces).testTwoInterfaces);
                QUnit.test("Reference types - TestInstanceConstructorsAndMethods", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestReferenceTypes).testInstanceConstructorsAndMethods);
                QUnit.test("Reference types - TestStaticConstructorsAndMethods", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestReferenceTypes).testStaticConstructorsAndMethods);
                QUnit.test("Reference types - TestMethodParameters", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestReferenceTypes).testMethodParameters);
                QUnit.test("Virtual methods - TestB", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestVirtualMethods).testB);
                QUnit.test("Abstract types - TestB", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestAbstractClass).testB);
                QUnit.test("Abstract types - TestC", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestAbstractClass).testC);
                QUnit.test("Abstract types - TestBC", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharpTestAbstractClass).testBC);
                QUnit.module("Collections");
                QUnit.test("Array - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).typePropertiesAreCorrect);
                QUnit.test("Array - LengthWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).lengthWorks);
                QUnit.test("Array - RankIsOne", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).rankIsOne);
                QUnit.test("Array - GetLengthWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).getLengthWorks);
                QUnit.test("Array - GetLowerBound", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).getLowerBound);
                QUnit.test("Array - GetUpperBoundWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).getUpperBoundWorks);
                QUnit.test("Array - GettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).gettingValueByIndexWorks);
                QUnit.test("Array - GetValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).getValueWorks);
                QUnit.test("Array - SettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).settingValueByIndexWorks);
                QUnit.test("Array - SetValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).setValueWorks);
                QUnit.test("Array - ForeachWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).foreachWorks);
                QUnit.test("Array - CloneWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).cloneWorks);
                QUnit.test("Array - ConcatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).concatWorks);
                QUnit.test("Array - ContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).containsWorks);
                QUnit.test("Array - ContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).containsUsesEqualsMethod);
                QUnit.test("Array - AllWithArrayItemFilterCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).allWithArrayItemFilterCallbackWorks);
                QUnit.test("Array - SliceWithoutEndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).sliceWithoutEndWorks);
                QUnit.test("Array - ForeachWithArrayItemCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).foreachWithArrayItemCallbackWorks);
                QUnit.test("Array - ForeachWithArrayCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).foreachWithArrayCallbackWorks);
                QUnit.test("Array - IndexOfWithoutStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).indexOfWithoutStartIndexWorks);
                QUnit.test("Array - IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).indexOfWithoutStartIndexUsesEqualsMethod);
                QUnit.test("Array - IndexOfWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).indexOfWithStartIndexWorks);
                QUnit.test("Array - JoinWithoutDelimiterWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).joinWithoutDelimiterWorks);
                QUnit.test("Array - ReverseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).reverseWorks);
                QUnit.test("Array - AnyWithArrayItemFilterCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).anyWithArrayItemFilterCallbackWorks);
                QUnit.test("Array - BinarySearch1Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).binarySearch1Works);
                QUnit.test("Array - BinarySearch2Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).binarySearch2Works);
                QUnit.test("Array - BinarySearch3Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).binarySearch3Works);
                QUnit.test("Array - BinarySearch4Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).binarySearch4Works);
                QUnit.test("Array - BinarySearchExceptionsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).binarySearchExceptionsWorks);
                QUnit.test("Array - SortWithDefaultCompareWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).sortWithDefaultCompareWorks);
                QUnit.test("Array - Sort1Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).sort1Works);
                QUnit.test("Array - Sort2Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).sort2Works);
                QUnit.test("Array - Sort3Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).sort3Works);
                QUnit.test("Array - Sort4Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).sort4Works);
                QUnit.test("Array - SortExceptionsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).sortExceptionsWorks);
                QUnit.test("Array - ForeachWhenCastToIListWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).foreachWhenCastToIListWorks);
                QUnit.test("Array - ICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).iCollectionCountWorks);
                QUnit.test("Array - ICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).iCollectionAddWorks);
                QUnit.test("Array - ICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).iCollectionClearWorks);
                QUnit.test("Array - ICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).iCollectionContainsWorks);
                QUnit.test("Array - ICollectionContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).iCollectionContainsUsesEqualsMethod);
                QUnit.test("Array - ICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).iCollectionRemoveWorks);
                QUnit.test("Array - IListIndexingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).iListIndexingWorks);
                QUnit.test("Array - IListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).iListIndexOfWorks);
                QUnit.test("Array - IListIndexOfUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).iListIndexOfUsesEqualsMethod);
                QUnit.test("Array - IListInsertWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).iListInsertWorks);
                QUnit.test("Array - IListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestArrayTests).iListRemoveAtWorks);
                QUnit.test("GenericDictionary - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).typePropertiesAreCorrect);
                QUnit.test("GenericDictionary - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).defaultConstructorWorks);
                QUnit.test("GenericDictionary - CapacityConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).capacityConstructorWorks);
                QUnit.test("GenericDictionary - CapacityAndEqualityComparerWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).capacityAndEqualityComparerWorks);
                QUnit.test("GenericDictionary - EqualityComparerOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).equalityComparerOnlyConstructorWorks);
                QUnit.test("GenericDictionary - CountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).countWorks);
                QUnit.test("GenericDictionary - KeysWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).keysWorks);
                QUnit.test("GenericDictionary - ValuesWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).valuesWorks);
                QUnit.test("GenericDictionary - IndexerGetterWorksForExistingItems", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).indexerGetterWorksForExistingItems);
                QUnit.test("GenericDictionary - IndexerSetterWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).indexerSetterWorks);
                QUnit.test("GenericDictionary - IndexerGetterThrowsForNonExistingItems", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).indexerGetterThrowsForNonExistingItems);
                QUnit.test("GenericDictionary - AddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).addWorks);
                QUnit.test("GenericDictionary - AddThrowsIfItemAlreadyExists", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).addThrowsIfItemAlreadyExists);
                QUnit.test("GenericDictionary - ClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).clearWorks);
                QUnit.test("GenericDictionary - ContainsKeyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).containsKeyWorks);
                QUnit.test("GenericDictionary - EnumeratingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).enumeratingWorks);
                QUnit.test("GenericDictionary - RemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).removeWorks);
                QUnit.test("GenericDictionary - TryGetValueWithIntKeysWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).tryGetValueWithIntKeysWorks);
                QUnit.test("GenericDictionary - TryGetValueWithObjectKeysWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).tryGetValueWithObjectKeysWorks);
                QUnit.test("GenericDictionary - CanUseCustomComparer", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericGenericDictionaryTests).canUseCustomComparer);
                QUnit.test("ICollection - ArrayImplementsICollection", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).arrayImplementsICollection);
                QUnit.test("ICollection - CustomClassThatShouldImplementICollectionDoesSo", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).customClassThatShouldImplementICollectionDoesSo);
                QUnit.test("ICollection - ArrayCastToICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).arrayCastToICollectionCountWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).classImplementingICollectionCountWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).classImplementingICollectionCastToICollectionCountWorks);
                QUnit.test("ICollection - ClassImplementingICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).classImplementingICollectionAddWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).classImplementingICollectionCastToICollectionAddWorks);
                QUnit.test("ICollection - ClassImplementingICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).classImplementingICollectionClearWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).classImplementingICollectionCastToICollectionClearWorks);
                QUnit.test("ICollection - ArrayCastToICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).arrayCastToICollectionContainsWorks);
                QUnit.test("ICollection - ClassImplementingICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).classImplementingICollectionContainsWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).classImplementingICollectionCastToICollectionContainsWorks);
                QUnit.test("ICollection - ClassImplementingICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).classImplementingICollectionRemoveWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericICollectionTests).classImplementingICollectionCastToICollectionRemoveWorks);
                QUnit.test("IDictionary - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).typePropertiesAreCorrect);
                QUnit.test("IDictionary - ClassImplementsInterfaces", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).classImplementsInterfaces);
                QUnit.test("IDictionary - CountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).countWorks);
                QUnit.test("IDictionary - KeysWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).keysWorks);
                QUnit.test("IDictionary - GetItemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).getItemWorks);
                QUnit.test("IDictionary - ValuesWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).valuesWorks);
                QUnit.test("IDictionary - ContainsKeyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).containsKeyWorks);
                QUnit.test("IDictionary - TryGetValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).tryGetValueWorks);
                QUnit.test("IDictionary - AddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).addWorks);
                QUnit.test("IDictionary - ClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).clearWorks);
                QUnit.test("IDictionary - RemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).removeWorks);
                QUnit.test("IDictionary - SetItemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIDictionaryTests).setItemWorks);
                QUnit.test("IEnumerable - ArrayImplementsIEnumerable", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).arrayImplementsIEnumerable);
                QUnit.test("IEnumerable - CustomClassThatShouldImplementIEnumerableDoesSo", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).customClassThatShouldImplementIEnumerableDoesSo);
                QUnit.test("IEnumerable - ArrayGetEnumeratorMethodWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).arrayGetEnumeratorMethodWorks);
                QUnit.test("IEnumerable - ArrayCastToIEnumerableCanBeEnumerated", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).arrayCastToIEnumerableCanBeEnumerated);
                QUnit.test("IEnumerable - ClassImplementingIEnumerableCanBeEnumerated", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).classImplementingIEnumerableCanBeEnumerated);
                QUnit.test("IEnumerable - ClassImplementingIEnumerableCastToIEnumerableCanBeEnumerated", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIEnumerableTests).classImplementingIEnumerableCastToIEnumerableCanBeEnumerated);
                QUnit.test("IList - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).typePropertiesAreCorrect);
                QUnit.test("IList - ArrayImplementsIList", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).arrayImplementsIList);
                QUnit.test("IList - CustomClassThatShouldImplementIListDoesSo", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).customClassThatShouldImplementIListDoesSo);
                QUnit.test("IList - ArrayCastToIListGetItemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).arrayCastToIListGetItemWorks);
                QUnit.test("IList - ClassImplementingIListGetItemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).classImplementingIListGetItemWorks);
                QUnit.test("IList - ClassImplementingIListCastToIListGetItemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).classImplementingIListCastToIListGetItemWorks);
                QUnit.test("IList - ArrayCastToIListSetItemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).arrayCastToIListSetItemWorks);
                QUnit.test("IList - ClassImplementingIListSetItemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).classImplementingIListSetItemWorks);
                QUnit.test("IList - ClassImplementingIListCastToIListSetItemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).classImplementingIListCastToIListSetItemWorks);
                QUnit.test("IList - ArrayCastToIListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).arrayCastToIListIndexOfWorks);
                QUnit.test("IList - ClassImplementingIListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).classImplementingIListIndexOfWorks);
                QUnit.test("IList - ClassImplementingIListCastToIListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).classImplementingIListCastToIListIndexOfWorks);
                QUnit.test("IList - ClassImplementingIListInsertWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).classImplementingIListInsertWorks);
                QUnit.test("IList - ClassImplementingIListCastToIListInsertWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).classImplementingIListCastToIListInsertWorks);
                QUnit.test("IList - ClassImplementingIListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).classImplementingIListRemoveAtWorks);
                QUnit.test("IList - ClassImplementingIListCastToIListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIListTests).classImplementingIListCastToIListRemoveAtWorks);
                QUnit.test("IteratorBlock - TypeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable);
                QUnit.test("IteratorBlock - EnumeratingIEnumeratorIteratorToEndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).enumeratingIEnumeratorIteratorToEndWorks);
                QUnit.test("IteratorBlock - PrematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks);
                QUnit.test("IteratorBlock - ExceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks Exception thrown not caught", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks);
                QUnit.test("IteratorBlock - TypeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface);
                QUnit.test("IteratorBlock - EnumeratingIEnumerableIteratorToEndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).enumeratingIEnumerableIteratorToEndWorks);
                QUnit.test("IteratorBlock - PrematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks);
                QUnit.test("IteratorBlock - ExceptionInIEnumerableIteratorBodyExecutesFinallyBlocks exception thrown not caught", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks);
                QUnit.test("IteratorBlock - EnumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters);
                QUnit.test("IteratorBlock - DifferentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericIteratorBlockTests).differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals);
                QUnit.test("List - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).typePropertiesAreCorrect);
                QUnit.test("List - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).defaultConstructorWorks);
                QUnit.test("List - ConstructorWithCapacityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).constructorWithCapacityWorks);
                QUnit.test("List - ConstructingFromArrayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).constructingFromArrayWorks);
                QUnit.test("List - ConstructingFromListWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).constructingFromListWorks);
                QUnit.test("List - ConstructingFromIEnumerableWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).constructingFromIEnumerableWorks);
                QUnit.test("List - CountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).countWorks);
                QUnit.test("List - IndexingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).indexingWorks);
                QUnit.test("List - ForeachWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).foreachWorks);
                QUnit.test("List - GetEnumeratorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).getEnumeratorWorks);
                QUnit.test("List - AddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).addWorks);
                QUnit.test("List - AddRangeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).addRangeWorks);
                QUnit.test("List - BinarySearch1Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).binarySearch1Works);
                QUnit.test("List - BinarySearch2Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).binarySearch2Works);
                QUnit.test("List - BinarySearch3Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).binarySearch3Works);
                QUnit.test("List - BinarySearch4Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).binarySearch4Works);
                QUnit.test("List - ClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).clearWorks);
                QUnit.test("List - ContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).containsWorks);
                QUnit.test("List - ContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).containsUsesEqualsMethod);
                QUnit.test("List - SliceWithoutEndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).sliceWithoutEndWorks);
                QUnit.test("List - SliceWithEndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).sliceWithEndWorks);
                QUnit.test("List - ForeachWithListItemCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).foreachWithListItemCallbackWorks);
                QUnit.test("List - ForeachWithListCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).foreachWithListCallbackWorks);
                QUnit.test("List - IndexOfWithoutStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).indexOfWithoutStartIndexWorks);
                QUnit.test("List - IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).indexOfWithoutStartIndexUsesEqualsMethod);
                QUnit.test("List - IndexOfWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).indexOfWithStartIndexWorks);
                QUnit.test("List - IndexOfWithStartIndexUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).indexOfWithStartIndexUsesEqualsMethod);
                QUnit.test("List - InsertWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).insertWorks);
                QUnit.test("List - InsertRangeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).insertRangeWorks);
                QUnit.test("List - JoinWithoutDelimiterWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).joinWithoutDelimiterWorks);
                QUnit.test("List - JoinWithDelimiterWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).joinWithDelimiterWorks);
                QUnit.test("List - RemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).removeWorks);
                QUnit.test("List - RemoveReturnsFalseIfTheElementWasNotFound", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).removeReturnsFalseIfTheElementWasNotFound);
                QUnit.test("List - RemoveCanRemoveNullItem", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).removeCanRemoveNullItem);
                QUnit.test("List - RemoveUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).removeUsesEqualsMethod);
                QUnit.test("List - RemoveAtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).removeAtWorks);
                QUnit.test("List - RemoveRangeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).removeRangeWorks);
                QUnit.test("List - ReverseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).reverseWorks);
                QUnit.test("List - SortWithDefaultCompareWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).sortWithDefaultCompareWorks);
                QUnit.test("List - SortWithCompareCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).sortWithCompareCallbackWorks);
                QUnit.test("List - SortWithIComparerWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).sortWithIComparerWorks);
                QUnit.test("List - ForeachWhenCastToIEnumerableWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).foreachWhenCastToIEnumerableWorks);
                QUnit.test("List - IEnumerableGetEnumeratorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).iEnumerableGetEnumeratorWorks);
                QUnit.test("List - ICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).iCollectionCountWorks);
                QUnit.test("List - ICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).iCollectionAddWorks);
                QUnit.test("List - ICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).iCollectionClearWorks);
                QUnit.test("List - ICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).iCollectionContainsWorks);
                QUnit.test("List - ICollectionContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).iCollectionContainsUsesEqualsMethod);
                QUnit.test("List - ICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).iCollectionRemoveWorks);
                QUnit.test("List - ICollectionRemoveCanRemoveNullItem", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).iCollectionRemoveCanRemoveNullItem);
                QUnit.test("List - ICollectionRemoveUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).iCollectionRemoveUsesEqualsMethod);
                QUnit.test("List - IListIndexingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).iListIndexingWorks);
                QUnit.test("List - IListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).iListIndexOfWorks);
                QUnit.test("List - IListIndexOfUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).iListIndexOfUsesEqualsMethod);
                QUnit.test("List - IListInsertWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).iListInsertWorks);
                QUnit.test("List - IListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).iListRemoveAtWorks);
                QUnit.test("List - ToArrayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericListTests).toArrayWorks);
                QUnit.test("MultidimArray - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).typePropertiesAreCorrect);
                QUnit.test("MultidimArray - LengthWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).lengthWorks);
                QUnit.test("MultidimArray - GetValueWorksForUninitializedElement", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).getValueWorksForUninitializedElement);
                QUnit.test("MultidimArray - GetValueByIndexWorksForUninitializedElement", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).getValueByIndexWorksForUninitializedElement);
                QUnit.test("MultidimArray - SettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).settingValueByIndexWorks);
                QUnit.test("MultidimArray - SetValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).setValueWorks);
                QUnit.test("MultidimArray - GetValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).getValueWorks);
                QUnit.test("MultidimArray - GettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).gettingValueByIndexWorks);
                QUnit.test("MultidimArray - RankWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).rankWorks);
                QUnit.test("MultidimArray - GetValueWithIndexOutOfRangeThrowsAnException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).getValueWithIndexOutOfRangeThrowsAnException);
                QUnit.test("MultidimArray - SetValueWithIndexOutOfRangeThrowsAnException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMultidimArrayTests).setValueWithIndexOutOfRangeThrowsAnException);
                QUnit.module("Comparer");
                QUnit.test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests).typePropertiesAreCorrect);
                QUnit.test("DefaultComparerCanOrderNumbers", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests).defaultComparerCanOrderNumbers);
                QUnit.test("DefaultComparerCanOrderNullValues", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests).defaultComparerCanOrderNullValues);
                QUnit.test("DefaultComparerUsesCompareMethodIfClassImplementsIComparable", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests).defaultComparerUsesCompareMethodIfClassImplementsIComparable);
                QUnit.test("CreateWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericComparerTests).createWorks);
                QUnit.module("Date and time");
                QUnit.test("DateTimeFormatInfo - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDateTimeFormatInfoTests).typePropertiesAreCorrect);
                QUnit.test("DateTimeFormatInfo - GetFormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDateTimeFormatInfoTests).getFormatWorks);
                QUnit.test("DateTimeFormatInfo - InvariantWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDateTimeFormatInfoTests).invariantWorks);
                QUnit.test("DateTime - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).typePropertiesAreCorrect);
                QUnit.test("DateTime - DefaultConstructorReturnsTodaysDate", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).defaultConstructorReturnsTodaysDate);
                QUnit.test("DateTime - CreatingInstanceReturnsTodaysDate", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).creatingInstanceReturnsTodaysDate);
                QUnit.test("DateTime - MillisecondSinceEpochConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).millisecondSinceEpochConstructorWorks);
                QUnit.test("DateTime - StringConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).stringConstructorWorks);
                QUnit.test("DateTime - YMDConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).yMDConstructorWorks);
                QUnit.test("DateTime - YMDHConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).yMDHConstructorWorks);
                QUnit.test("DateTime - YMDHNConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).yMDHNConstructorWorks);
                QUnit.test("DateTime - YMDHNSConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).yMDHNSConstructorWorks);
                QUnit.test("DateTime - YMDHNSUConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).yMDHNSUConstructorWorks);
                QUnit.test("DateTime - NowWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).nowWorks);
                QUnit.test("DateTime - UTCNowWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).uTCNowWorks);
                QUnit.test("DateTime - ToUniversalWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).toUniversalWorks);
                QUnit.test("DateTime - ToLocalWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).toLocalWorks);
                QUnit.test("DateTime - TodayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).todayWorks);
                QUnit.test("DateTime - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).formatWorks);
                QUnit.test("DateTime - LocaleFormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).localeFormatWorks);
                QUnit.test("DateTime - GetFullYearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getFullYearWorks);
                QUnit.test("DateTime - GetMonthWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getMonthWorks);
                QUnit.test("DateTime - GetDateWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getDateWorks);
                QUnit.test("DateTime - GetHoursWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getHoursWorks);
                QUnit.test("DateTime - GetMinutesWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getMinutesWorks);
                QUnit.test("DateTime - GetSecondsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getSecondsWorks);
                QUnit.test("DateTime - GetMillisecondsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getMillisecondsWorks);
                QUnit.test("DateTime - GetDayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getDayWorks);
                QUnit.test("DateTime - GetTimeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getTimeWorks);
                QUnit.test("DateTime - ValueOfWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).valueOfWorks);
                QUnit.test("DateTime - GetTimezoneOffsetWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getTimezoneOffsetWorks);
                QUnit.test("DateTime - GetUTCFullYearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getUTCFullYearWorks);
                QUnit.test("DateTime - GetUtcMonthWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getUtcMonthWorks);
                QUnit.test("DateTime - GetUTCDateWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getUTCDateWorks);
                QUnit.test("DateTime - GetUTCHoursWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getUTCHoursWorks);
                QUnit.test("DateTime - GetUTCMinutesWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getUTCMinutesWorks);
                QUnit.test("DateTime - GetUTCSecondsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getUTCSecondsWorks);
                QUnit.test("DateTime - GetUTCMillisecondsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getUTCMillisecondsWorks);
                QUnit.test("DateTime - GetUTCDayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getUTCDayWorks);
                QUnit.test("DateTime - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).parseWorks);
                QUnit.test("DateTime - ParseExactWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).parseExactWorks);
                QUnit.test("DateTime - ParseExactWithCultureWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).parseExactWithCultureWorks);
                QUnit.test("DateTime - ParseExactUTCWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).parseExactUTCWorks);
                QUnit.test("DateTime - ParseExactUTCWithCultureWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).parseExactUTCWithCultureWorks);
                QUnit.test("DateTime - ToDateStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).toDateStringWorks);
                QUnit.test("DateTime - ToTimeStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).toTimeStringWorks);
                QUnit.test("DateTime - ToUTCStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).toUTCStringWorks);
                QUnit.test("DateTime - ToLocaleDateStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).toLocaleDateStringWorks);
                QUnit.test("DateTime - ToLocaleTimeStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).toLocaleTimeStringWorks);
                QUnit.test("DateTime - SubtractingDatesWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).subtractingDatesWorks);
                QUnit.test("DateTime - SubtractMethodReturningTimeSpanWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).subtractMethodReturningTimeSpanWorks);
                QUnit.test("DateTime - DateEqualityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).dateEqualityWorks);
                QUnit.test("DateTime - DateInequalityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).dateInequalityWorks);
                QUnit.test("DateTime - DateLessThanWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).dateLessThanWorks);
                QUnit.test("DateTime - DateLessEqualWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).dateLessEqualWorks);
                QUnit.test("DateTime - DateGreaterThanWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).dateGreaterThanWorks);
                QUnit.test("DateTime - DateGreaterEqualWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).dateGreaterEqualWorks);
                QUnit.test("DateTime - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).getHashCodeWorks);
                QUnit.test("DateTime - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).equalsWorks);
                QUnit.test("DateTime - DateTimeEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).dateTimeEqualsWorks);
                QUnit.test("DateTime - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).compareToWorks);
                QUnit.test("DateTime - DateTimes", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesJsDateTimeTests).dateTimes);
                QUnit.test("TimeSpan - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).typePropertiesAreCorrect);
                QUnit.test("TimeSpan - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).defaultConstructorWorks);
                QUnit.test("TimeSpan - DefaultValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).defaultValueWorks);
                QUnit.test("TimeSpan - ZeroWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).zeroWorks);
                QUnit.test("TimeSpan - CreatingInstanceReturnsTimeSpanWithZeroValue", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).creatingInstanceReturnsTimeSpanWithZeroValue);
                QUnit.test("TimeSpan - ParameterConstructorsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).parameterConstructorsWorks);
                QUnit.test("TimeSpan - FactoryMethodsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).factoryMethodsWork);
                QUnit.test("TimeSpan - PropertiesWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).propertiesWork);
                QUnit.test("TimeSpan - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).compareToWorks);
                QUnit.test("TimeSpan - CompareWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).compareWorks);
                QUnit.test("TimeSpan - StaticEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).staticEqualsWorks);
                QUnit.test("TimeSpan - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).equalsWorks);
                QUnit.test("TimeSpan - ToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).toStringWorks);
                QUnit.test("TimeSpan - AddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).addWorks);
                QUnit.test("TimeSpan - SubtractWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).subtractWorks);
                QUnit.test("TimeSpan - DurationWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).durationWorks);
                QUnit.test("TimeSpan - NegateWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).negateWorks);
                QUnit.test("TimeSpan - ComparisonOperatorsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).comparisonOperatorsWork);
                QUnit.test("TimeSpan - AdditionOperatorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).additionOperatorWorks);
                QUnit.test("TimeSpan - SubtractionOperatorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).subtractionOperatorWorks);
                QUnit.test("TimeSpan - UnaryPlusWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).unaryPlusWorks);
                QUnit.test("TimeSpan - UnaryMinusWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTimeSpanTests).unaryMinusWorks);
                QUnit.module("Decimal Math");
                QUnit.test("TestSubtractOperator", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).testSubtractOperator);
                QUnit.test("TestRemainderOperator", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).testRemainderOperator);
                QUnit.test("TestMultiplyOperator", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).testMultiplyOperator);
                QUnit.test("TestDivideOperator", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).testDivideOperator);
                QUnit.test("TestAddOperator", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).testAddOperator);
                QUnit.test("TestAddMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).testAddMethod);
                QUnit.test("TestDivideMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).testDivideMethod);
                QUnit.test("TestMultiplyMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).testMultiplyMethod);
                QUnit.test("TestRemainderMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).testRemainderMethod);
                QUnit.test("TestSubtractMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).testSubtractMethod);
                QUnit.test("TestCeilingMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).testCeilingMethod);
                QUnit.test("TestFloorMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestDecimalMathTests).testFloorMethod);
                QUnit.module("Diagnostics");
                QUnit.test("Contract - Assume", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).assume);
                QUnit.test("Contract - AssumeWithUserMessage", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).assumeWithUserMessage);
                QUnit.test("Contract - _Assert", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests)._Assert);
                QUnit.test("Contract - AssertWithUserMessage", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).assertWithUserMessage);
                QUnit.test("Contract - Requires", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).requires);
                QUnit.test("Contract - RequiresWithUserMessage", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).requiresWithUserMessage);
                QUnit.test("Contract - RequiresWithTypeException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).requiresWithTypeException);
                QUnit.test("Contract - RequiredWithTypeExceptionAndUserMessage", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).requiredWithTypeExceptionAndUserMessage);
                QUnit.test("Contract - ForAll", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).forAll);
                QUnit.test("Contract - ForAllWithCollection", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).forAllWithCollection);
                QUnit.test("Contract - Exists", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).exists);
                QUnit.test("Contract - ExistsWithCollection", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_ContractsContractTests).existsWithCollection);
                QUnit.test("Stopwatch - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).defaultConstructorWorks);
                QUnit.test("Stopwatch - ConstantsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).constantsWorks);
                QUnit.test("Stopwatch - StartNewWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).startNewWorks);
                QUnit.test("Stopwatch - StartAndStopWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).startAndStopWork);
                QUnit.test("Stopwatch - ElapsedWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).elapsedWorks);
                QUnit.test("Stopwatch - GetTimestampWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DiagnosticsStopwatchTests).getTimestampWorks);
                QUnit.module("Enum");
                QUnit.test("Enum - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesEnumTests).typePropertiesAreCorrect);
                QUnit.test("Enum - FirstValueOfEnumIsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesEnumTests).firstValueOfEnumIsZero);
                QUnit.test("Enum - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesEnumTests).getHashCodeWorks);
                QUnit.test("Enum - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesEnumTests).equalsWorks);
                QUnit.module("EqualityComparer");
                QUnit.test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).typePropertiesAreCorrect);
                QUnit.test("DefaultComparerCanGetHashCodeOfNumber", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).defaultComparerCanGetHashCodeOfNumber);
                QUnit.test("DefaultComparerReturnsZeroAsHashCodeForNullAndUndefined", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).defaultComparerReturnsZeroAsHashCodeForNullAndUndefined);
                QUnit.test("DefaultComparerCanDetermineEquality", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).defaultComparerCanDetermineEquality);
                QUnit.test("DefaultComparerInvokesOverriddenGetHashCode", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).defaultComparerInvokesOverriddenGetHashCode);
                QUnit.test("DefaultComparerInvokesOverriddenEquals", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_GenericEqualityComparerTests).defaultComparerInvokesOverriddenEquals);
                QUnit.module("Exceptions");
                QUnit.test("AggregateException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).typePropertiesAreCorrect);
                QUnit.test("AggregateException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).defaultConstructorWorks);
                QUnit.test("AggregateException - ConstructorWithIEnumerableInnerExceptionsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).constructorWithIEnumerableInnerExceptionsWorks);
                QUnit.test("AggregateException - ConstructorWithInnerExceptionArrayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).constructorWithInnerExceptionArrayWorks);
                QUnit.test("AggregateException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).constructorWithMessageWorks);
                QUnit.test("AggregateException - ConstructorWithMessageAndIEnumerableInnerExceptionsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).constructorWithMessageAndIEnumerableInnerExceptionsWorks);
                QUnit.test("AggregateException - ConstructorWithMessageAndInnerExceptionArrayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).constructorWithMessageAndInnerExceptionArrayWorks);
                QUnit.test("AggregateException - FlattenWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsAggregateExceptionTests).flattenWorks);
                QUnit.test("ArgumentException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).typePropertiesAreCorrect);
                QUnit.test("ArgumentException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).defaultConstructorWorks);
                QUnit.test("ArgumentException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).constructorWithMessageWorks);
                QUnit.test("ArgumentException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("ArgumentException - ConstructorWithMessageAndParamNameWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).constructorWithMessageAndParamNameWorks);
                QUnit.test("ArgumentException - ConstructorWithMessageAndParamNameAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentExceptionTests).constructorWithMessageAndParamNameAndInnerExceptionWorks);
                QUnit.test("ArgumentNullException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests).typePropertiesAreCorrect);
                QUnit.test("ArgumentNullException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests).defaultConstructorWorks);
                QUnit.test("ArgumentNullException - ConstructorWithParamNameWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests).constructorWithParamNameWorks);
                QUnit.test("ArgumentNullException - ConstructorWithParamNameAndMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests).constructorWithParamNameAndMessageWorks);
                QUnit.test("ArgumentNullException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentNullExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("ArgumentOutOfRangeException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).typePropertiesAreCorrect);
                QUnit.test("ArgumentOutOfRangeException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).defaultConstructorWorks);
                QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).constructorWithParamNameWorks);
                QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameAndMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).constructorWithParamNameAndMessageWorks);
                QUnit.test("ArgumentOutOfRangeException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameAndActualValueAndMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).constructorWithParamNameAndActualValueAndMessageWorks);
                QUnit.test("ArgumentOutOfRangeException - RangeErrorIsConvertedToArgumentOutOfRangeException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArgumentOutOfRangeExceptionTests).rangeErrorIsConvertedToArgumentOutOfRangeException);
                QUnit.test("ArithmeticException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArithmeticExceptionTests).typePropertiesAreCorrect);
                QUnit.test("ArithmeticException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArithmeticExceptionTests).defaultConstructorWorks);
                QUnit.test("ArithmeticException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArithmeticExceptionTests).constructorWithMessageWorks);
                QUnit.test("ArithmeticException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsArithmeticExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("CultureNotFoundException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).typePropertiesAreCorrect);
                QUnit.test("CultureNotFoundException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).defaultConstructorWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).constructorWithMessageWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithMessageAndParamNameWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).constructorWithMessageAndParamNameWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithMessageAndCultureNameAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).constructorWithMessageAndCultureNameAndInnerExceptionWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithParamNameAndCultureNameAndMessage", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).constructorWithParamNameAndCultureNameAndMessage);
                QUnit.test("CultureNotFoundException - ConstructorWithMessageAndCultureIdAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).constructorWithMessageAndCultureIdAndInnerExceptionWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithParamNameAndCultureIdAndMessage", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsCultureNotFoundExceptionTests).constructorWithParamNameAndCultureIdAndMessage);
                QUnit.test("DivideByZeroException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsDivideByZeroExceptionTests).typePropertiesAreCorrect);
                QUnit.test("DivideByZeroException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsDivideByZeroExceptionTests).defaultConstructorWorks);
                QUnit.test("DivideByZeroException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsDivideByZeroExceptionTests).constructorWithMessageWorks);
                QUnit.test("DivideByZeroException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsDivideByZeroExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("Exception - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).typePropertiesAreCorrect);
                QUnit.test("Exception - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).defaultConstructorWorks);
                QUnit.test("Exception - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).constructorWithMessageWorks);
                QUnit.test("Exception - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("Exception - MessagePropertyCanBeOverridden", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).messagePropertyCanBeOverridden);
                QUnit.test("Exception - InnerExceptionPropertyCanBeOverridden", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsExceptionTests).innerExceptionPropertyCanBeOverridden);
                QUnit.test("FormatException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsFormatExceptionTests).typePropertiesAreCorrect);
                QUnit.test("FormatException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsFormatExceptionTests).defaultConstructorWorks);
                QUnit.test("FormatException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsFormatExceptionTests).constructorWithMessageWorks);
                QUnit.test("FormatException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsFormatExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("InvalidCastException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidCastExceptionTests).typePropertiesAreCorrect);
                QUnit.test("InvalidCastException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidCastExceptionTests).defaultConstructorWorks);
                QUnit.test("InvalidCastException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidCastExceptionTests).constructorWithMessageWorks);
                QUnit.test("InvalidCastException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidCastExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("InvalidOperationException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidOperationExceptionTests).typePropertiesAreCorrect);
                QUnit.test("InvalidOperationException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidOperationExceptionTests).defaultConstructorWorks);
                QUnit.test("InvalidOperationException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidOperationExceptionTests).constructorWithMessageWorks);
                QUnit.test("InvalidOperationException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsInvalidOperationExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("KeyNotFoundException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsKeyNotFoundExceptionTests).typePropertiesAreCorrect);
                QUnit.test("KeyNotFoundException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsKeyNotFoundExceptionTests).defaultConstructorWorks);
                QUnit.test("KeyNotFoundException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsKeyNotFoundExceptionTests).constructorWithMessageWorks);
                QUnit.test("KeyNotFoundException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsKeyNotFoundExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("NotImplementedException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotImplementedExceptionTests).typePropertiesAreCorrect);
                QUnit.test("NotImplementedException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotImplementedExceptionTests).defaultConstructorWorks);
                QUnit.test("NotImplementedException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotImplementedExceptionTests).constructorWithMessageWorks);
                QUnit.test("NotImplementedException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotImplementedExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("NotSupportedException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotSupportedExceptionTests).typePropertiesAreCorrect);
                QUnit.test("NotSupportedException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotSupportedExceptionTests).defaultConstructorWorks);
                QUnit.test("NotSupportedException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotSupportedExceptionTests).constructorWithMessageWorks);
                QUnit.test("NotSupportedException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNotSupportedExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("NullReferenceException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests).typePropertiesAreCorrect);
                QUnit.test("NullReferenceException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests).defaultConstructorWorks);
                QUnit.test("NullReferenceException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests).constructorWithMessageWorks);
                QUnit.test("NullReferenceException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("NullReferenceException - AccessingAFieldOnANullObjectCausesANullReferenceException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsNullReferenceExceptionTests).accessingAFieldOnANullObjectCausesANullReferenceException);
                QUnit.test("OperationCanceledException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).typePropertiesAreCorrect);
                QUnit.test("OperationCanceledException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).defaultConstructorWorks);
                QUnit.test("OperationCanceledException - CancellationTokenOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).cancellationTokenOnlyConstructorWorks);
                QUnit.test("OperationCanceledException - MessageOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).messageOnlyConstructorWorks);
                QUnit.test("OperationCanceledException - MessageAndInnerExceptionConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).messageAndInnerExceptionConstructorWorks);
                QUnit.test("OperationCanceledException - MessageAndCancellationTokenConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).messageAndCancellationTokenConstructorWorks);
                QUnit.test("OperationCanceledException - MessageAndInnerExceptionAndCancellationTokenConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOperationCanceledExceptionTests).messageAndInnerExceptionAndCancellationTokenConstructorWorks);
                QUnit.test("OverflowException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOverflowExceptionTests).typePropertiesAreCorrect);
                QUnit.test("OverflowException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOverflowExceptionTests).defaultConstructorWorks);
                QUnit.test("OverflowException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOverflowExceptionTests).constructorWithMessageWorks);
                QUnit.test("OverflowException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsOverflowExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("PromiseException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsPromiseExceptionTests).typePropertiesAreCorrect);
                QUnit.test("PromiseException - ArgumentsOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsPromiseExceptionTests).argumentsOnlyConstructorWorks);
                QUnit.test("PromiseException - ArgumentsAndMessageConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsPromiseExceptionTests).argumentsAndMessageConstructorWorks);
                QUnit.test("PromiseException - ArgumentsAndMessageAndInnerExceptionConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsPromiseExceptionTests).argumentsAndMessageAndInnerExceptionConstructorWorks);
                QUnit.test("RankException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsRankExceptionTests).typePropertiesAreCorrect);
                QUnit.test("RankException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsRankExceptionTests).defaultConstructorWorks);
                QUnit.test("RankException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsRankExceptionTests).constructorWithMessageWorks);
                QUnit.test("TaskCanceledException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests).typePropertiesAreCorrect);
                QUnit.test("TaskCanceledException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests).defaultConstructorWorks);
                QUnit.test("TaskCanceledException - MessageOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests).messageOnlyConstructorWorks);
                QUnit.test("TaskCanceledException - TaskOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests).taskOnlyConstructorWorks);
                QUnit.test("TaskCanceledException - MessageAndInnerExceptionConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionsTaskCanceledExceptionTests).messageAndInnerExceptionConstructorWorks);
                QUnit.test("Try/Catch/Finally - ThrowingAndCatchingExceptionsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestExceptionTests).throwingAndCatchingExceptionsWorks);
                QUnit.test("Try/Catch/Finally - ExceptionOfWrongTypeIsNotCaught", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestExceptionTests).exceptionOfWrongTypeIsNotCaught);
                QUnit.test("Try/Catch/Finally - CanCatchExceptionAsBaseType", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestExceptionTests).canCatchExceptionAsBaseType);
                QUnit.module("Issues");
                QUnit.test("#381 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge381).testUseCase);
                QUnit.test("#447 - CheckInlineExpression", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge447).checkInlineExpression);
                QUnit.test("#447 - CheckInlineCalls", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge447).checkInlineCalls);
                QUnit.test("#472 - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge472).test);
                QUnit.test("#479 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge479).testUseCase);
                QUnit.test("#485 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge485).testUseCase);
                QUnit.test("#495 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge495).testUseCase);
                QUnit.test("#501 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge501).testUseCase);
                QUnit.test("#502 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge502).testUseCase);
                QUnit.test("#503 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge503).testUseCase);
                QUnit.test("#508 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge508).testUseCase);
                QUnit.test("#514 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge514).testUseCase);
                QUnit.test("#514 - TestRelated", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge514).testRelated);
                QUnit.test("#520 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge520).testUseCase);
                QUnit.test("#532 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge532).testUseCase);
                QUnit.test("#538 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge538).testUseCase);
                QUnit.test("#544 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge544).testUseCase);
                QUnit.test("#544 - TestRelated", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge544).testRelated);
                QUnit.test("#546 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge546).testUseCase);
                QUnit.test("#546 - TestRelated", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge546).testRelated);
                QUnit.test("#548 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge548).testUseCase);
                QUnit.test("#549 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge549).testUseCase);
                QUnit.test("#550 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge550).testUseCase);
                QUnit.test("#554 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge554).testUseCase);
                QUnit.test("#555 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge555).testUseCase);
                QUnit.test("#563 - TesForeach", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge563).tesForeach);
                QUnit.test("#563 - TesFor", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge563).tesFor);
                QUnit.test("#565 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge565).testUseCase);
                QUnit.test("#572 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge572).testUseCase);
                QUnit.test("#577 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge577).testUseCase);
                QUnit.test("#578 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge578).testUseCase);
                QUnit.test("#580 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge580).testUseCase);
                QUnit.test("#582 - TestAddTimeSpan", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582).testAddTimeSpan);
                QUnit.test("#582 - TestAddTicks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582).testAddTicks);
                QUnit.test("#582 - TestTicks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582).testTicks);
                QUnit.test("#582 - TestSubtractTimeSpan", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582).testSubtractTimeSpan);
                QUnit.test("#582 - TestTimeOfDay", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge582).testTimeOfDay);
                QUnit.test("#583 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge583).testUseCase);
                QUnit.test("#586 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge586).testUseCase);
                QUnit.test("#592 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge592).testUseCase);
                QUnit.test("#595 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge595).testUseCase);
                QUnit.test("#597 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge597).testUseCase);
                QUnit.test("#606 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge606).testUseCase);
                QUnit.test("#607 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge607).testUseCase);
                QUnit.test("#608 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge608).testUseCase);
                QUnit.test("#615 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge615).testUseCase);
                QUnit.test("#625 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge625).testUseCase);
                QUnit.test("#634 - TestUseCase1", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge634).testUseCase1);
                QUnit.test("#634 - TestUseCase2", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge634).testUseCase2);
                QUnit.test("#634 - TestUseCaseFor658", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge634).testUseCaseFor658);
                QUnit.test("#647 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge647).testUseCase);
                QUnit.test("#648 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge648).testUseCase);
                QUnit.test("#655 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge655).testUseCase);
                QUnit.test("#661 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge661).testUseCase);
                QUnit.test("#664 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge664).testUseCase);
                QUnit.test("#666 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge666).testUseCase);
                QUnit.test("#671 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge671).testUseCase);
                QUnit.test("#674 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge674).testUseCase);
                QUnit.test("#675 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge675).testUseCase);
                QUnit.test("#687 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge687).testUseCase);
                QUnit.test("#689 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge689).testUseCase);
                QUnit.test("#690 - TestUseCaseForInstance", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge690).testUseCaseForInstance);
                QUnit.test("#690 - TestUseCaseForStatic", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge690).testUseCaseForStatic);
                QUnit.test("#691 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge691).testUseCase);
                QUnit.test("#692 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge692).testUseCase);
                QUnit.test("#694 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge694).testUseCase);
                QUnit.test("#696 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge696).testUseCase);
                QUnit.test("#699 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge699).testUseCase);
                QUnit.test("#708 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge708).testUseCase);
                QUnit.test("#721 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge721).testUseCase);
                QUnit.test("#722 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge722).testUseCase);
                QUnit.test("#726 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge726).testUseCase);
                QUnit.test("# 732- TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge732).testUseCase);
                QUnit.test("#733 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge733).testUseCase);
                QUnit.test("#751 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge751).testUseCase);
                QUnit.test("#758 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge758).testUseCase);
                QUnit.test("#760 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge760).testUseCase);
                QUnit.test("#762 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge762).testUseCase);
                QUnit.test("#772 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge772).testUseCase);
                QUnit.test("#777 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge777).testUseCase);
                QUnit.test("#782 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge782).testUseCase);
                QUnit.test("#785 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge785).testUseCase);
                QUnit.test("#786 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge786).testUseCase);
                QUnit.test("#788 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge788).testUseCase);
                QUnit.test("#789 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge789).testUseCase);
                QUnit.test("#793 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge793).testUseCase);
                QUnit.test("#795 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge795).testUseCase);
                QUnit.test("#795 - TestRelated", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge795).testRelated);
                QUnit.test("#796 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge796).testUseCase);
                QUnit.test("#815 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge815).testUseCase);
                QUnit.test("#816 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge816).testUseCase);
                QUnit.test("#817 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge817).testUseCase);
                QUnit.test("#818 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge818).testUseCase);
                QUnit.test("#821 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge821).testUseCase);
                QUnit.test("#823 - GetTicksReturnsCorrectValue", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge823).getTicksReturnsCorrectValue);
                QUnit.test("#826 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge826).testUseCase);
                QUnit.test("#830 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge830).testUseCase);
                QUnit.test("#835 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge835).testUseCase);
                QUnit.test("#841 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge841).testUseCase);
                QUnit.test("#844 - NullableAndSimpleDateTimeToStringEquals", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge844).nullableAndSimpleDateTimeToStringEquals);
                QUnit.test("#849 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge849).testUseCase);
                QUnit.test("#857 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge857).testUseCase);
                QUnit.test("#861 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge861).testUseCase);
                QUnit.test("#863 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge863).testUseCase);
                QUnit.test("#874 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge874).testUseCase);
                QUnit.test("#881 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge881).testUseCase);
                QUnit.test("#889 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge889).testUseCase);
                QUnit.test("#889 - TestMakeEnumerable", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge889).testMakeEnumerable);
                QUnit.test("#892 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge892).testUseCase);
                QUnit.test("#893 - EnumToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge893).enumToStringWorks);
                QUnit.test("#898 - TestDecimalConversion", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge898).testDecimalConversion);
                QUnit.test("#898 - TestDoubleConversion", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge898).testDoubleConversion);
                QUnit.test("#905 - DayOfWeekFixed", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge905).dayOfWeekFixed);
                QUnit.test("#906 - TestIfAsyncMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge906).testIfAsyncMethod);
                QUnit.test("#906 - TestIfElseAsyncMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge906).testIfElseAsyncMethod);
                QUnit.test("#907 - TestStringSpitWithNullParameterFixed", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge907).testStringSpitWithNullParameterFixed);
                QUnit.test("#912 - TestAsyncMethodInBlock", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge912).testAsyncMethodInBlock);
                QUnit.test("#913 - TestNullableDateTimeGreaterThanWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge913).testNullableDateTimeGreaterThanWorks);
                QUnit.test("#918 - TestDynamicAsyncResult", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge918).testDynamicAsyncResult);
                QUnit.test("#922 - TestLinqDecimal", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge922).testLinqDecimal);
                QUnit.test("#522 - TestUseCase1", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge522).testUseCase1);
                QUnit.test("#522 - TestUseCase2", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge522).testUseCase2);
                QUnit.test("#537 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge537).testUseCase);
                QUnit.test("#558 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge558).testUseCase);
                QUnit.test("#559 - TestUseCase1", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge559).testUseCase1);
                QUnit.test("#559 - TestUseCase2", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge559).testUseCase2);
                QUnit.test("#559 - TestUseCase3", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge559).testUseCase3);
                QUnit.test("#566 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge566).testUseCase);
                QUnit.test("#588 - TestUseCase2", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588C).testUseCase2);
                QUnit.test("#603 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge603).testUseCase);
                QUnit.test("#603 - TestRelated", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge603).testRelated);
                QUnit.test("#635 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge635).testUseCase);
                QUnit.test("#652 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge652).testUseCase);
                QUnit.test("#660 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge660).testUseCase);
                QUnit.test("#882 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge882).testUseCase);
                QUnit.test("#588 - TestUseCase1", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge588).testUseCase1);
                QUnit.test("#623 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge623).testUseCase);
                QUnit.test("#693 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge693).testUseCase);
                QUnit.test("#883 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesBridge883).testUseCase);
                QUnit.test("#169", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n169);
                QUnit.test("#240", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n240);
                QUnit.test("#264", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n264);
                QUnit.test("#266", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n266);
                QUnit.test("#272", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n272);
                QUnit.test("#273", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n273);
                QUnit.test("#277", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n277);
                QUnit.test("#294", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n294);
                QUnit.test("#304", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n304);
                QUnit.test("#305", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n305);
                QUnit.test("#306", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n306);
                QUnit.test("#329", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n329);
                QUnit.test("#335", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n335);
                QUnit.test("#336", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n336);
                QUnit.test("#337", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n337);
                QUnit.test("#338", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n338);
                QUnit.test("#339", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n339);
                QUnit.test("#340", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n340);
                QUnit.test("#341", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n341);
                QUnit.test("#342", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n342);
                QUnit.test("#349", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n349);
                QUnit.test("#377", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n377);
                QUnit.test("#383", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n383);
                QUnit.test("#393", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n393);
                QUnit.test("#395", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n395);
                QUnit.test("#406", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n406);
                QUnit.test("#407", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n407);
                QUnit.test("N409", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n409);
                QUnit.test("N410", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n410);
                QUnit.test("N418", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n418);
                QUnit.test("N422", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n422);
                QUnit.test("N428", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n428);
                QUnit.test("N435", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n435);
                QUnit.test("N436", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n436);
                QUnit.test("N438", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n438);
                QUnit.test("N439", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n439);
                QUnit.test("N442", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n442);
                QUnit.test("N460", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n460);
                QUnit.test("N467", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n467);
                QUnit.test("N469", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n469);
                QUnit.test("N470", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n470);
                QUnit.test("#499", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssuesTestBridgeIssues).n499);
                QUnit.module("LINQ");
                QUnit.test("Aggregate - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqAggregateOperators).test);
                QUnit.test("Aggregate - Bridge315", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqAggregateOperators).bridge315);
                QUnit.test("Conversion - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqConversionOperators).test);
                QUnit.test("Element - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqElementOperators).test);
                QUnit.test("Generation - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGenerationOperators).test);
                QUnit.test("Grouping - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGroupingOperators).test);
                QUnit.test("Grouping - TestComplexGrouping", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGroupingOperators).testComplexGrouping);
                QUnit.test("Grouping - TestAnagrams", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqGroupingOperators).testAnagrams);
                QUnit.test("Join - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqJoinOperators).test);
                QUnit.test("Misc - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqMiscellaneousOperators).test);
                QUnit.test("Ordering - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqOrderingOperators).test);
                QUnit.test("Partitioning - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqPartitioningOperators).test);
                QUnit.test("Projection - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqProjectionOperators).test);
                QUnit.test("Quantifiers - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQuantifiers).test);
                QUnit.test("Query - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqQueryExecution).test);
                QUnit.test("Restriction- Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqRestrictionOperators).test);
                QUnit.test("Set - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_LinqTestLinqSetOperators).test);
                QUnit.module("Math");
                QUnit.test("Math - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).constantsWork);
                QUnit.test("Math - AbsOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).absOfDoubleWorks);
                QUnit.test("Math - AbsOfIntWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).absOfIntWorks);
                QUnit.test("Math - AbsOfLongWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).absOfLongWorks);
                QUnit.test("Math - AbsOfSbyteWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).absOfSbyteWorks);
                QUnit.test("Math - AbsOfShortWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).absOfShortWorks);
                QUnit.test("Math - AbsOfFloatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).absOfFloatWorks);
                QUnit.test("Math - AbsOfDecimalWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).absOfDecimalWorks);
                QUnit.test("Math - AcosWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).acosWorks);
                QUnit.test("Math - AsinWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).asinWorks);
                QUnit.test("Math - AtanWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).atanWorks);
                QUnit.test("Math - Atan2Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).atan2Works);
                QUnit.test("Math - CosWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).cosWorks);
                QUnit.test("Math - DivRemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).divRemWorks);
                QUnit.test("Math - ExpWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).expWorks);
                QUnit.test("Math - FloorOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).floorOfDoubleWorks);
                QUnit.test("Math - FloorOfDecimalWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).floorOfDecimalWorks);
                QUnit.test("Math - LogWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).logWorks);
                QUnit.test("Math - MaxOfByteWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).maxOfByteWorks);
                QUnit.test("Math - MaxOfDecimalWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).maxOfDecimalWorks);
                QUnit.test("Math - MaxOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).maxOfDoubleWorks);
                QUnit.test("Math - MaxOfShortWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).maxOfShortWorks);
                QUnit.test("Math - MaxOfIntWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).maxOfIntWorks);
                QUnit.test("Math - MaxOfLongWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).maxOfLongWorks);
                QUnit.test("Math - MaxOfSByteWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).maxOfSByteWorks);
                QUnit.test("Math - MaxOfFloatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).maxOfFloatWorks);
                QUnit.test("Math - MaxOfUShortWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).maxOfUShortWorks);
                QUnit.test("Math - MaxOfUIntWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).maxOfUIntWorks);
                QUnit.test("Math - MaxOfULongWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).maxOfULongWorks);
                QUnit.test("Math - MinOfByteWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).minOfByteWorks);
                QUnit.test("Math - MinOfDecimalWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).minOfDecimalWorks);
                QUnit.test("Math - MinOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).minOfDoubleWorks);
                QUnit.test("Math - MinOfShortWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).minOfShortWorks);
                QUnit.test("Math - MinOfIntWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).minOfIntWorks);
                QUnit.test("Math - MinOfLongWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).minOfLongWorks);
                QUnit.test("Math - MinOfSByteWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).minOfSByteWorks);
                QUnit.test("Math - MinOfFloatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).minOfFloatWorks);
                QUnit.test("Math - MinOfUShortWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).minOfUShortWorks);
                QUnit.test("Math - MinOfUIntWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).minOfUIntWorks);
                QUnit.test("Math - MinOfULongWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).minOfULongWorks);
                QUnit.test("Math - PowWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).powWorks);
                QUnit.test("Math - RandomWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).randomWorks);
                QUnit.test("Math - RoundOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).roundOfDoubleWorks);
                QUnit.test("Math - RoundDecimalWithModeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).roundDecimalWithModeWorks);
                QUnit.test("Math - RoundDecimalWithPrecisionAndModeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).roundDecimalWithPrecisionAndModeWorks);
                QUnit.test("Math - RoundDoubleWithModeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).roundDoubleWithModeWorks);
                QUnit.test("Math - RoundDoubleWithPrecisionAndModeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).roundDoubleWithPrecisionAndModeWorks);
                QUnit.test("Math - JsRoundWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).jsRoundWorks);
                QUnit.test("Math - IEEERemainderWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).iEEERemainderWorks);
                QUnit.test("Math - SinWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).sinWorks);
                QUnit.test("Math - SqrtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).sqrtWorks);
                QUnit.test("Math - TanWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestMathTests).tanWorks);
                QUnit.module("Nullable");
                QUnit.test("Nullable - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).typePropertiesAreCorrect);
                QUnit.test("Nullable - ConvertingToNullableWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).convertingToNullableWorks);
                QUnit.test("Nullable - HasValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).hasValueWorks);
                QUnit.test("Nullable - BoxingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).boxingWorks);
                QUnit.test("Nullable - UnboxingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).unboxingWorks);
                QUnit.test("Nullable - ValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).valueWorks);
                QUnit.test("Nullable - UnboxingValueOfWrongTypeThrowsAnException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).unboxingValueOfWrongTypeThrowsAnException);
                QUnit.test("Nullable - GetValueOrDefaultWithArgWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).getValueOrDefaultWithArgWorks);
                QUnit.test("Nullable - LiftedEqualityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedEqualityWorks);
                QUnit.test("Nullable - LiftedInequalityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedInequalityWorks);
                QUnit.test("Nullable - LiftedLessThanWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedLessThanWorks);
                QUnit.test("Nullable - LiftedGreaterThanWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedGreaterThanWorks);
                QUnit.test("Nullable - LiftedLessThanOrEqualWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedLessThanOrEqualWorks);
                QUnit.test("Nullable - LiftedGreaterThanOrEqualWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedGreaterThanOrEqualWorks);
                QUnit.test("Nullable - LiftedSubtractionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedSubtractionWorks);
                QUnit.test("Nullable - LiftedAdditionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedAdditionWorks);
                QUnit.test("Nullable - LiftedModWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedModWorks);
                QUnit.test("Nullable - LiftedFloatingPointDivisionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedFloatingPointDivisionWorks);
                QUnit.test("Nullable - LiftedIntegerDivisionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedIntegerDivisionWorks);
                QUnit.test("Nullable - LiftedMultiplicationWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedMultiplicationWorks);
                QUnit.test("Nullable - LiftedBitwiseAndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedBitwiseAndWorks);
                QUnit.test("Nullable - LiftedBitwiseOrWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedBitwiseOrWorks);
                QUnit.test("Nullable - LiftedBitwiseXorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedBitwiseXorWorks);
                QUnit.test("Nullable - LiftedLeftShiftWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedLeftShiftWorks);
                QUnit.test("Nullable - LiftedSignedRightShiftWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedSignedRightShiftWorks);
                QUnit.test("Nullable - LiftedUnsignedRightShiftWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedUnsignedRightShiftWorks);
                QUnit.test("LiftedBooleanAndWorks #314", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedBooleanAndWorks);
                QUnit.test("LiftedBooleanOrWorks #314", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedBooleanOrWorks);
                QUnit.test("Nullable - LiftedBooleanNotWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedBooleanNotWorks);
                QUnit.test("Nullable - LiftedNegationWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedNegationWorks);
                QUnit.test("Nullable - LiftedUnaryPlusWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedUnaryPlusWorks);
                QUnit.test("Nullable - LiftedOnesComplementWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).liftedOnesComplementWorks);
                QUnit.test("CoalesceWorks #314", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNullableTests).coalesceWorks);
                QUnit.module("NumberFormatInfo");
                QUnit.test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNumberFormatInfoTests).typePropertiesAreCorrect);
                QUnit.test("GetFormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNumberFormatInfoTests).getFormatWorks);
                QUnit.test("InvariantWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestNumberFormatInfoTests).invariantWorks);
                QUnit.module("Property accessor");
                QUnit.test("AccessorsCanBeInvokedInstance", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).accessorsCanBeInvokedInstance);
                QUnit.test("AccessorsCanBeInvokedStatic", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).accessorsCanBeInvokedStatic);
                QUnit.test("AccessorsCanBeInvokedGeneric", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).accessorsCanBeInvokedGeneric);
                QUnit.test("AccessorsCanBeInvokedGenericStatic", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).accessorsCanBeInvokedGenericStatic);
                QUnit.test("BaseAccessorsCanBeInvoked", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).baseAccessorsCanBeInvoked);
                QUnit.test("BaseAccessorsCanBeInvokedGeneric", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestPropertyAccessorTests).baseAccessorsCanBeInvokedGeneric);
                QUnit.module("Regex");
                QUnit.test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).typePropertiesAreCorrect);
                QUnit.test("StringOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).stringOnlyConstructorWorks);
                QUnit.test("ConstructorWithFlagsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).constructorWithFlagsWorks);
                QUnit.test("GlobalFlagWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).globalFlagWorks);
                QUnit.test("IgnoreCaseFlagWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).ignoreCaseFlagWorks);
                QUnit.test("MultilineFlagWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).multilineFlagWorks);
                QUnit.test("PatternPropertyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).patternPropertyWorks);
                QUnit.test("SourcePropertyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).sourcePropertyWorks);
                QUnit.test("ExecWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).execWorks);
                QUnit.test("LastIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).lastIndexWorks);
                QUnit.test("TestWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).testWorks);
                QUnit.test("EscapeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressionsRegexTests).escapeWorks);
                QUnit.module("Simple types");
                QUnit.test("Boolean - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).typePropertiesAreCorrect);
                QUnit.test("Boolean - DefaultValueIsFalse", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).defaultValueIsFalse);
                QUnit.test("Boolean - CreatingInstanceReturnsFalse", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).creatingInstanceReturnsFalse);
                QUnit.test("Boolean - DefaultConstructorReturnsFalse", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).defaultConstructorReturnsFalse);
                QUnit.test("Boolean - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).getHashCodeWorks);
                QUnit.test("Boolean - ObjectEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).objectEqualsWorks);
                QUnit.test("Boolean - BoolEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).boolEqualsWorks);
                QUnit.test("Boolean - LogicalExclusiveOrWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).logicalExclusiveOrWorks);
                QUnit.test("Boolean - LogicalAndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).logicalAndWorks);
                QUnit.test("Boolean - LogicalNegationWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).logicalNegationWorks);
                QUnit.test("Boolean - ConditionalOperatorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).conditionalOperatorWorks);
                QUnit.test("Boolean - ConditionalAndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).conditionalAndWorks);
                QUnit.test("Boolean - ConditionalOrWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).conditionalOrWorks);
                QUnit.test("Boolean - EqualityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).equalityWorks);
                QUnit.test("Boolean - InequalityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesBooleanTests).inequalityWorks);
                QUnit.test("Byte - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).typePropertiesAreCorrect);
                QUnit.test("Byte - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).castsWork);
                QUnit.test("Byte - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).defaultValueIs0);
                QUnit.test("Byte - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).defaultConstructorReturnsZero);
                QUnit.test("Byte - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).constantsWork);
                QUnit.test("Byte - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).formatWorks);
                QUnit.test("Byte - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).iFormattableToStringWorks);
                QUnit.test("Byte - TryParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).tryParseWorks);
                QUnit.test("Byte - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).parseWorks);
                QUnit.test("Byte - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).toStringWithoutRadixWorks);
                QUnit.test("Byte - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).toStringWithRadixWorks);
                QUnit.test("Byte - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).getHashCodeWorks);
                QUnit.test("Byte - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).equalsWorks);
                QUnit.test("Byte - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).iEquatableEqualsWorks);
                QUnit.test("Byte - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).compareToWorks);
                QUnit.test("Byte - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesByteTests).iComparableCompareToWorks);
                QUnit.test("Char - TypePropertiesAreInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).typePropertiesAreInt32);
                QUnit.test("Char - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).castsWork);
                QUnit.test("Char - DefaultValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).defaultValueWorks);
                QUnit.test("Char - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).defaultConstructorReturnsZero);
                QUnit.test("Char - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).constantsWork);
                QUnit.test("Char - CharComparisonWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).charComparisonWorks);
                QUnit.test("Char - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).parseWorks);
                QUnit.test("Char - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).formatWorks);
                QUnit.test("Char - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).iFormattableToStringWorks);
                QUnit.test("Char - ToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).toStringWorks);
                QUnit.test("Char - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).getHashCodeWorks);
                QUnit.test("Char - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).equalsWorks);
                QUnit.test("Char - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).iEquatableEqualsWorks);
                QUnit.test("Char - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).compareToWorks);
                QUnit.test("Char - IsLowerWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).isLowerWorks);
                QUnit.test("Char - IsUpperWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).isUpperWorks);
                QUnit.test("Char - ToLowerWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).toLowerWorks);
                QUnit.test("Char - ToUpperWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).toUpperWorks);
                QUnit.test("Char - IsDigitWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).isDigitWorks);
                QUnit.test("Char - IsWhiteSpaceWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).isWhiteSpaceWorks);
                QUnit.test("Char - IsDigitWithStringAndIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).isDigitWithStringAndIndexWorks);
                QUnit.test("Char - IsWhiteSpaceWithStringAndIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesCharTests).isWhiteSpaceWithStringAndIndexWorks);
                QUnit.test("Decimal - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).typePropertiesAreCorrect);
                QUnit.test("Decimal - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).defaultValueIs0);
                QUnit.test("Decimal - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).constantsWork);
                QUnit.test("Decimal - ConvertingConstructorsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).convertingConstructorsWork);
                QUnit.test("Decimal - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).formatWorks);
                QUnit.test("Decimal - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).iFormattableToStringWorks);
                QUnit.test("Decimal - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).toStringWithoutRadixWorks);
                QUnit.test("Decimal - AddWithStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).addWithStringWorks);
                QUnit.test("Decimal - ConversionsToDecimalWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).conversionsToDecimalWork);
                QUnit.test("Decimal - ConversionsFromDecimalWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).conversionsFromDecimalWork);
                QUnit.test("Decimal - OperatorsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).operatorsWork);
                QUnit.test("Decimal - AddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).addWorks);
                QUnit.test("Decimal - CeilingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).ceilingWorks);
                QUnit.test("Decimal - DivideWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).divideWorks);
                QUnit.test("Decimal - FloorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).floorWorks);
                QUnit.test("Decimal - RemainderWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).remainderWorks);
                QUnit.test("Decimal - MultiplyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).multiplyWorks);
                QUnit.test("Decimal - NegateWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).negateWorks);
                QUnit.test("Decimal - RoundWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).roundWorks);
                QUnit.test("Decimal - RoundWithModeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).roundWithModeWorks);
                QUnit.test("Decimal - SubtractWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).subtractWorks);
                QUnit.test("Decimal - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).getHashCodeWorks);
                QUnit.test("Decimal - ObjectEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).objectEqualsWorks);
                QUnit.test("Decimal - DecimalEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).decimalEqualsWorks);
                QUnit.test("Decimal - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).compareToWorks);
                QUnit.test("Decimal - FullCoalesceWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).fullCoalesceWorks);
                QUnit.test("Decimal - ShortCoalesceWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDecimalTests).shortCoalesceWorks);
                QUnit.test("Double - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).typePropertiesAreCorrect);
                QUnit.test("Double - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).defaultValueIs0);
                QUnit.test("Double - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).constantsWork);
                QUnit.test("Double - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).defaultConstructorReturnsZero);
                QUnit.test("Double - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).formatWorks);
                QUnit.test("Double - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).iFormattableToStringWorks);
                QUnit.test("Double - ToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).toStringWorks);
                QUnit.test("Double - ToExponentialWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).toExponentialWorks);
                QUnit.test("Double - ToExponentialWithFractionalDigitsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).toExponentialWithFractionalDigitsWorks);
                QUnit.test("Double - ToFixed", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).toFixed);
                QUnit.test("Double - ToFixedWithFractionalDigitsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).toFixedWithFractionalDigitsWorks);
                QUnit.test("Double - ToPrecisionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).toPrecisionWorks);
                QUnit.test("Double - ToPrecisionWithPrecisionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).toPrecisionWithPrecisionWorks);
                QUnit.test("Double - IsPositiveInfinityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).isPositiveInfinityWorks);
                QUnit.test("Double - IsNegativeInfinityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).isNegativeInfinityWorks);
                QUnit.test("Double - IsInfinityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).isInfinityWorks);
                QUnit.test("Double - IsFiniteWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).isFiniteWorks);
                QUnit.test("Double - IsNaNWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).isNaNWorks);
                QUnit.test("Double - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).getHashCodeWorks);
                QUnit.test("Double - ObjectEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).objectEqualsWorks);
                QUnit.test("Double - DoubleEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).doubleEqualsWorks);
                QUnit.test("Double - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesDoubleTests).compareToWorks);
                QUnit.test("Int16 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).typePropertiesAreCorrect);
                QUnit.test("Int16 - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).castsWork);
                QUnit.test("Int16 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).defaultValueIs0);
                QUnit.test("Int16 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).defaultConstructorReturnsZero);
                QUnit.test("Int16 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).constantsWork);
                QUnit.test("Int16 - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).formatWorks);
                QUnit.test("Int16 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).iFormattableToStringWorks);
                QUnit.test("Int16 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).tryParseWorks);
                QUnit.test("Int16 - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).parseWorks);
                QUnit.test("Int16 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).toStringWithoutRadixWorks);
                QUnit.test("Int16 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).toStringWithRadixWorks);
                QUnit.test("Int16 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).getHashCodeWorks);
                QUnit.test("Int16 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).equalsWorks);
                QUnit.test("Int16 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).iEquatableEqualsWorks);
                QUnit.test("Int16 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).compareToWorks);
                QUnit.test("Int16 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt16Tests).iComparableCompareToWorks);
                QUnit.test("Int32 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).typePropertiesAreCorrect);
                QUnit.test("Int32 - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).castsWork);
                QUnit.test("Int32 - TypeIsWorksForInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).typeIsWorksForInt32);
                QUnit.test("Int32 - TypeAsWorksForInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).typeAsWorksForInt32);
                QUnit.test("Int32 - UnboxingWorksForInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).unboxingWorksForInt32);
                QUnit.test("Int32 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).defaultValueIs0);
                QUnit.test("Int32 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).defaultConstructorReturnsZero);
                QUnit.test("Int32 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).constantsWork);
                QUnit.test("Int32 - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).formatWorks);
                QUnit.test("Int32 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).iFormattableToStringWorks);
                QUnit.test("Int32 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).tryParseWorks);
                QUnit.test("Int32 - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).parseWorks);
                QUnit.test("Int32 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).toStringWithoutRadixWorks);
                QUnit.test("Int32 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).toStringWithRadixWorks);
                QUnit.test("Int32 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).getHashCodeWorks);
                QUnit.test("Int32 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).equalsWorks);
                QUnit.test("Int32 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).iEquatableEqualsWorks);
                QUnit.test("Int32 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).compareToWorks);
                QUnit.test("Int32 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).iComparableCompareToWorks);
                QUnit.test("Int32 - IntegerDivisionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).integerDivisionWorks);
                QUnit.test("Int32 - IntegerModuloWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).integerModuloWorks);
                QUnit.test("Int32 - IntegerDivisionByZeroThrowsDivideByZeroException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).integerDivisionByZeroThrowsDivideByZeroException);
                QUnit.test("Int32 - DoublesAreTruncatedWhenConvertedToIntegers", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt32Tests).doublesAreTruncatedWhenConvertedToIntegers);
                QUnit.test("Int64 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).typePropertiesAreCorrect);
                QUnit.test("Int64 - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).castsWork);
                QUnit.test("Int64 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).defaultValueIs0);
                QUnit.test("Int64 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).defaultConstructorReturnsZero);
                QUnit.test("Int64 - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).formatWorks);
                QUnit.test("Int64 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).iFormattableToStringWorks);
                QUnit.test("Int64 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).tryParseWorks);
                QUnit.test("Int64 - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).parseWorks);
                QUnit.test("Int64 - CastingOfLargeDoublesToInt64Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).castingOfLargeDoublesToInt64Works);
                QUnit.test("Int64 - DivisionOfLargeInt64Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).divisionOfLargeInt64Works);
                QUnit.test("Int64 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).toStringWithoutRadixWorks);
                QUnit.test("Int64 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).toStringWithRadixWorks);
                QUnit.test("Int64 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).getHashCodeWorks);
                QUnit.test("Int64 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).equalsWorks);
                QUnit.test("Int64 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).iEquatableEqualsWorks);
                QUnit.test("Int64 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).compareToWorks);
                QUnit.test("Int64 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesInt64Tests).iComparableCompareToWorks);
                QUnit.test("Object - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).typePropertiesAreCorrect);
                QUnit.test("Object - CanGetHashCodeForObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).canGetHashCodeForObject);
                QUnit.test("Object - RepeatedCallsToGetHashCodeReturnsSameValue", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).repeatedCallsToGetHashCodeReturnsSameValue);
                QUnit.test("Object - ObjectIsEqualToItself", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).objectIsEqualToItself);
                QUnit.test("Object - ObjectIsNotEqualToOtherObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).objectIsNotEqualToOtherObject);
                QUnit.test("Object - StaticEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).staticEqualsWorks);
                QUnit.test("Object - ReferenceEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).referenceEqualsWorks);
                QUnit.test("Object - ToStringOverride", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesObjectTests).toStringOverride);
                QUnit.test("SByte - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).typePropertiesAreCorrect);
                QUnit.test("SByte - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).castsWork);
                QUnit.test("SByte - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).defaultValueIs0);
                QUnit.test("SByte - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).defaultConstructorReturnsZero);
                QUnit.test("SByte - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).constantsWork);
                QUnit.test("SByte - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).formatWorks);
                QUnit.test("SByte - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).iFormattableToStringWorks);
                QUnit.test("SByte - TryParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).tryParseWorks);
                QUnit.test("SByte - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).parseWorks);
                QUnit.test("SByte - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).toStringWithoutRadixWorks);
                QUnit.test("SByte - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).toStringWithRadixWorks);
                QUnit.test("SByte - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).getHashCodeWorks);
                QUnit.test("SByte - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).equalsWorks);
                QUnit.test("SByte - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).iEquatableEqualsWorks);
                QUnit.test("SByte - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).compareToWorks);
                QUnit.test("SByte - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSByteTests).iComparableCompareToWorks);
                QUnit.test("Float - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).typePropertiesAreCorrect);
                QUnit.test("Float - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).defaultValueIs0);
                QUnit.test("Float - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).constantsWork);
                QUnit.test("Float - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).defaultConstructorReturnsZero);
                QUnit.test("Float - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).formatWorks);
                QUnit.test("Float - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).iFormattableToStringWorks);
                QUnit.test("Float - ToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).toStringWorks);
                QUnit.test("Float - ToExponentialWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).toExponentialWorks);
                QUnit.test("Float - ToExponentialWithFractionalDigitsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).toExponentialWithFractionalDigitsWorks);
                QUnit.test("Float - ToFixed", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).toFixed);
                QUnit.test("Float - ToFixedWithFractionalDigitsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).toFixedWithFractionalDigitsWorks);
                QUnit.test("Float - ToPrecisionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).toPrecisionWorks);
                QUnit.test("Float - ToPrecisionWithPrecisionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).toPrecisionWithPrecisionWorks);
                QUnit.test("Float - IsPositiveInfinityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).isPositiveInfinityWorks);
                QUnit.test("Float - IsNegativeInfinityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).isNegativeInfinityWorks);
                QUnit.test("Float - IsInfinityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).isInfinityWorks);
                QUnit.test("Float - IsFiniteWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).isFiniteWorks);
                QUnit.test("Float - IsNaNWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).isNaNWorks);
                QUnit.test("Float - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).getHashCodeWorks);
                QUnit.test("Float - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).equalsWorks);
                QUnit.test("Float - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesSingleTests).compareToWorks);
                QUnit.test("Version - TestConstructors", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).testConstructors);
                QUnit.test("Version - TestCloneCompare", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).testCloneCompare);
                QUnit.test("Version - TestEqualsGetHashCode", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).testEqualsGetHashCode);
                QUnit.test("Version - TestToString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).testToString);
                QUnit.test("Version - TestParse", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).testParse);
                QUnit.test("Version - TestOperators", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTestVersion).testOperators);
                QUnit.test("Tuple - Tuple1Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).tuple1Works);
                QUnit.test("Tuple - Tuple2Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).tuple2Works);
                QUnit.test("Tuple - Tuple3Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).tuple3Works);
                QUnit.test("Tuple - Tuple4Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).tuple4Works);
                QUnit.test("Tuple - Tuple5Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).tuple5Works);
                QUnit.test("Tuple - Tuple6Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).tuple6Works);
                QUnit.test("Tuple - Tuple7Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).tuple7Works);
                QUnit.test("Tuple - Tuple8Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesTupleTests).tuple8Works);
                QUnit.test("UInt16 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).typePropertiesAreCorrect);
                QUnit.test("UInt16 - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).castsWork);
                QUnit.test("UInt16 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).defaultValueIs0);
                QUnit.test("UInt16 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).defaultConstructorReturnsZero);
                QUnit.test("UInt16 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).constantsWork);
                QUnit.test("UInt16 - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).formatWorks);
                QUnit.test("UInt16 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).iFormattableToStringWorks);
                QUnit.test("UInt16 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).tryParseWorks);
                QUnit.test("UInt16 - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).parseWorks);
                QUnit.test("UInt16 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).toStringWithoutRadixWorks);
                QUnit.test("UInt16 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).toStringWithRadixWorks);
                QUnit.test("UInt16 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).getHashCodeWorks);
                QUnit.test("UInt16 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).equalsWorks);
                QUnit.test("UInt16 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).iEquatableEqualsWorks);
                QUnit.test("UInt16 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).compareToWorks);
                QUnit.test("UInt16 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt16Tests).iComparableCompareToWorks);
                QUnit.test("UInt32 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).typePropertiesAreCorrect);
                QUnit.test("UInt32 - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).castsWork);
                QUnit.test("UInt32 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).defaultValueIs0);
                QUnit.test("UInt32 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).defaultConstructorReturnsZero);
                QUnit.test("UInt32 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).constantsWork);
                QUnit.test("UInt32 - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).formatWorks);
                QUnit.test("UInt32 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).iFormattableToStringWorks);
                QUnit.test("UInt32 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).tryParseWorks);
                QUnit.test("UInt32 - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).parseWorks);
                QUnit.test("UInt32 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).toStringWithoutRadixWorks);
                QUnit.test("UInt32 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).toStringWithRadixWorks);
                QUnit.test("UInt32 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).getHashCodeWorks);
                QUnit.test("UInt32 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).equalsWorks);
                QUnit.test("UInt32 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).iEquatableEqualsWorks);
                QUnit.test("UInt32 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).compareToWorks);
                QUnit.test("UInt32 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt32Tests).iComparableCompareToWorks);
                QUnit.test("UInt64 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).typePropertiesAreCorrect);
                QUnit.test("UInt64 - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).castsWork);
                QUnit.test("UInt64 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).defaultValueIs0);
                QUnit.test("UInt64 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).defaultConstructorReturnsZero);
                QUnit.test("UInt64 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).constantsWork);
                QUnit.test("UInt64 - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).formatWorks);
                QUnit.test("UInt64 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).iFormattableToStringWorks);
                QUnit.test("UInt64 - CastingOfLargeValuesToUInt64Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).castingOfLargeValuesToUInt64Works);
                QUnit.test("UInt64 - DivisionOfLargeUInt64Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).divisionOfLargeUInt64Works);
                QUnit.test("UInt64 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).tryParseWorks);
                QUnit.test("UInt64 - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).parseWorks);
                QUnit.test("UInt64 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).toStringWithoutRadixWorks);
                QUnit.test("UInt64 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).toStringWithRadixWorks);
                QUnit.test("UInt64 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).getHashCodeWorks);
                QUnit.test("UInt64 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).equalsWorks);
                QUnit.test("UInt64 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).iEquatableEqualsWorks);
                QUnit.test("UInt64 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).compareToWorks);
                QUnit.test("UInt64 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesUInt64Tests).iComparableCompareToWorks);
                QUnit.module("String");
                QUnit.test("String - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).typePropertiesAreCorrect);
                QUnit.test("String - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).defaultConstructorWorks);
                QUnit.test("String - CopyConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).copyConstructorWorks);
                QUnit.test("String - CharAndCountConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).charAndCountConstructorWorks);
                QUnit.test("String - CharArrayConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).charArrayConstructorWorks);
                QUnit.test("String - EmptyFieldWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).emptyFieldWorks);
                QUnit.test("String - LengthPropertyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).lengthPropertyWorks);
                QUnit.test("String - CharAtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).charAtWorks);
                QUnit.test("String - CharCodeAtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).charCodeAtWorks);
                QUnit.test("String - CompareWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).compareWorks);
                QUnit.test("String - CompareWithIgnoreCaseArgWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).compareWithIgnoreCaseArgWorks);
                QUnit.test("String - ConcatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).concatWorks);
                QUnit.test("String - ConcatWithObjectsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).concatWithObjectsWorks);
                QUnit.test("String - EndsWithCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).endsWithCharWorks);
                QUnit.test("String - EndsWithStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).endsWithStringWorks);
                QUnit.test("String - StaticEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).staticEqualsWorks);
                QUnit.test("String - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).formatWorks);
                QUnit.test("String - FormatWorksWithIFormattable", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).formatWorksWithIFormattable);
                QUnit.test("String - FormatCanUseEscapedBraces", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).formatCanUseEscapedBraces);
                QUnit.test("String - FromCharCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).fromCharCodeWorks);
                QUnit.test("String - IndexOfCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).indexOfCharWorks);
                QUnit.test("String - IndexOfStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).indexOfStringWorks);
                QUnit.test("String - IndexOfCharWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).indexOfCharWithStartIndexWorks);
                QUnit.test("String - IndexOfCharWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).indexOfCharWithStartIndexAndCountWorks);
                QUnit.test("String - IndexOfStringWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).indexOfStringWithStartIndexWorks);
                QUnit.test("String - IndexOfStringWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).indexOfStringWithStartIndexAndCountWorks);
                QUnit.test("String - IndexOfAnyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).indexOfAnyWorks);
                QUnit.test("String - IndexOfAnyWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).indexOfAnyWithStartIndexWorks);
                QUnit.test("String - IndexOfAnyWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).indexOfAnyWithStartIndexAndCountWorks);
                QUnit.test("String - InsertWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).insertWorks);
                QUnit.test("String - IsNullOrEmptyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).isNullOrEmptyWorks);
                QUnit.test("String - LastIndexOfCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).lastIndexOfCharWorks);
                QUnit.test("String - LastIndexOfStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).lastIndexOfStringWorks);
                QUnit.test("String - LastIndexOfCharWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).lastIndexOfCharWithStartIndexWorks);
                QUnit.test("String - LastIndexOfStringWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).lastIndexOfStringWithStartIndexWorks);
                QUnit.test("String - LastIndexOfCharWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).lastIndexOfCharWithStartIndexAndCountWorks);
                QUnit.test("String - LastIndexOfStringWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).lastIndexOfStringWithStartIndexAndCountWorks);
                QUnit.test("String - LastIndexOfAnyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).lastIndexOfAnyWorks);
                QUnit.test("String - LastIndexOfAnyWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).lastIndexOfAnyWithStartIndexWorks);
                QUnit.test("String - LastIndexOfAnyWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).lastIndexOfAnyWithStartIndexAndCountWorks);
                QUnit.test("String - LocaleCompareWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).localeCompareWorks);
                QUnit.test("String - MatchWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).matchWorks);
                QUnit.test("String - PadLeftWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).padLeftWorks);
                QUnit.test("String - PadLeftWithCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).padLeftWithCharWorks);
                QUnit.test("String - PadRightWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).padRightWorks);
                QUnit.test("String - PadRightWithCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).padRightWithCharWorks);
                QUnit.test("String - RemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).removeWorks);
                QUnit.test("String - RemoveWithCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).removeWithCountWorks);
                QUnit.test("String - ReplaceWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).replaceWorks);
                QUnit.test("String - ReplaceCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).replaceCharWorks);
                QUnit.test("String - ReplaceRegexWithReplaceTextWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).replaceRegexWithReplaceTextWorks);
                QUnit.test("String - ReplaceRegexWithReplaceCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).replaceRegexWithReplaceCallbackWorks);
                QUnit.test("String - SearchWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).searchWorks);
                QUnit.test("String - SliceWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).sliceWorks);
                QUnit.test("String - SplitWithStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).splitWithStringWorks);
                QUnit.test("String - SplitWithCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).splitWithCharWorks);
                QUnit.test("String - JsSplitWithStringAndLimitWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).jsSplitWithStringAndLimitWorks);
                QUnit.test("String - JsSplitWithCharAndLimitWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).jsSplitWithCharAndLimitWorks);
                QUnit.test("String - SplitWithCharsAndLimitWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).splitWithCharsAndLimitWorks);
                QUnit.test("String - SplitWithCharsAndStringSplitOptionsAndLimitWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).splitWithCharsAndStringSplitOptionsAndLimitWorks);
                QUnit.test("String - SplitWithRegexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).splitWithRegexWorks);
                QUnit.test("String - SomeNetSplitTests", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).someNetSplitTests);
                QUnit.test("String - SplitWithCharsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).splitWithCharsWorks);
                QUnit.test("String - SplitWithStringsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).splitWithStringsWorks);
                QUnit.test("String - SplitWithStringsAndLimitWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).splitWithStringsAndLimitWorks);
                QUnit.test("String - StartsWithCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).startsWithCharWorks);
                QUnit.test("String - StartsWithStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).startsWithStringWorks);
                QUnit.test("String - SubstrWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).substrWorks);
                QUnit.test("String - SubstringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).substringWorks);
                QUnit.test("String - JsSubstringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).jsSubstringWorks);
                QUnit.test("String - ToLowerCaseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).toLowerCaseWorks);
                QUnit.test("String - ToUpperCaseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).toUpperCaseWorks);
                QUnit.test("String - ToLowerWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).toLowerWorks);
                QUnit.test("String - ToUpperWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).toUpperWorks);
                QUnit.test("String - TrimWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).trimWorks);
                QUnit.test("String - TrimCharsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).trimCharsWorks);
                QUnit.test("String - TrimStartCharsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).trimStartCharsWorks);
                QUnit.test("String - TrimEndCharsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).trimEndCharsWorks);
                QUnit.test("String - TrimStartWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).trimStartWorks);
                QUnit.test("String - TrimEndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).trimEndWorks);
                QUnit.test("String - StringEqualityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).stringEqualityWorks);
                QUnit.test("String - StringInequalityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).stringInequalityWorks);
                QUnit.test("String - StringIndexingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).stringIndexingWorks);
                QUnit.test("String - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).getHashCodeWorks);
                QUnit.test("String - InstanceEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).instanceEqualsWorks);
                QUnit.test("String - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).iEquatableEqualsWorks);
                QUnit.test("String - StringEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).stringEqualsWorks);
                QUnit.test("String - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).compareToWorks);
                QUnit.test("String - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).iComparableCompareToWorks);
                QUnit.test("String - JoinWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).joinWorks);
                QUnit.test("String - ContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).containsWorks);
                QUnit.test("String - ToCharArrayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).toCharArrayWorks);
                QUnit.test("String - Strings", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).strings);
                QUnit.test("String - Enumerable", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypesStringTests).enumerable);
                QUnit.test("StringBuilder - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).typePropertiesAreCorrect);
                QUnit.test("StringBuilder - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).defaultConstructorWorks);
                QUnit.test("StringBuilder - ConstructorWithCapacityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).constructorWithCapacityWorks);
                QUnit.test("StringBuilder - InitialTextConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).initialTextConstructorWorks);
                QUnit.test("StringBuilder - InitialTextConstructorWithCapacityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).initialTextConstructorWithCapacityWorks);
                QUnit.test("StringBuilder - SubstringConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).substringConstructorWorks);
                QUnit.test("StringBuilder - AppendBoolWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).appendBoolWorks);
                QUnit.test("StringBuilder - AppendCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).appendCharWorks);
                QUnit.test("StringBuilder - AppendIntWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).appendIntWorks);
                QUnit.test("StringBuilder - AppendDoubleWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).appendDoubleWorks);
                QUnit.test("StringBuilder - AppendObjectWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).appendObjectWorks);
                QUnit.test("StringBuilder - AppendStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).appendStringWorks);
                QUnit.test("StringBuilder - AppendLineWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).appendLineWorks);
                QUnit.test("StringBuilder - AppendLineStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).appendLineStringWorks);
                QUnit.test("StringBuilder - ClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).clearWorks);
                QUnit.test("StringBuilder - ToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).toStringWorks);
                QUnit.test("StringBuilder - LengthPropertyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).lengthPropertyWorks);
                QUnit.test("StringBuilder - StringBuilders", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TextStringBuilderTests).stringBuilders);
                QUnit.module("Threading");
                QUnit.test("Async - AsyncVoid", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).asyncVoid);
                QUnit.test("Async - AsyncTask", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).asyncTask);
                QUnit.test("Async - AsyncTaskBodyThrowsException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).asyncTaskBodyThrowsException);
                QUnit.test("Async - AwaitTaskThatFaults", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).awaitTaskThatFaults);
                QUnit.test("Async - AggregateExceptionsAreUnwrappedWhenAwaitingTask", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).aggregateExceptionsAreUnwrappedWhenAwaitingTask);
                QUnit.test("Async - AsyncTaskThatReturnsValue", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingAsyncTests).asyncTaskThatReturnsValue);
                QUnit.test("CancellationToken - TypePropertiesForCancellationTokenSourceAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).typePropertiesForCancellationTokenSourceAreCorrect);
                QUnit.test("CancellationToken - TypePropertiesForCancellationTokenAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).typePropertiesForCancellationTokenAreCorrect);
                QUnit.test("CancellationToken - TypePropertiesForCancellationTokenRegistrationAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).typePropertiesForCancellationTokenRegistrationAreCorrect);
                QUnit.test("CancellationToken - CancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).cancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe);
                QUnit.test("CancellationToken - CancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).cancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe);
                QUnit.test("CancellationToken - CancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).cancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled);
                QUnit.test("CancellationToken - CancellationTokenNoneIsNotCancelledAndCannotBe", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).cancellationTokenNoneIsNotCancelledAndCannotBe);
                QUnit.test("CancellationToken - CreatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).creatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled);
                QUnit.test("CancellationToken - ActivatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).activatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled);
                QUnit.test("CancellationToken - CanBeCanceledIsTrueForTokenCreatedForCancellationTokenSource", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).canBeCanceledIsTrueForTokenCreatedForCancellationTokenSource);
                QUnit.test("CancellationToken - IsCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).isCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod);
                QUnit.test("CancellationToken - ThrowIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).throwIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled);
                QUnit.test("CancellationToken - CancelWithoutArgumentsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).cancelWithoutArgumentsWorks);
                QUnit.test("CancellationToken - CancelWorksWhenThrowOnFirstExceptionIsFalse", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).cancelWorksWhenThrowOnFirstExceptionIsFalse);
                QUnit.test("CancellationToken - CancelWorksWhenThrowOnFirstExceptionIsTrue", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).cancelWorksWhenThrowOnFirstExceptionIsTrue);
                QUnit.test("CancellationToken - RegisterOnACancelledSourceWithoutContextInvokesTheCallback", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).registerOnACancelledSourceWithoutContextInvokesTheCallback);
                QUnit.test("CancellationToken - RegisterWithArgumentOnACancelledSourceInvokesTheCallback", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).registerWithArgumentOnACancelledSourceInvokesTheCallback);
                QUnit.test("CancellationToken - RegisterOnACancelledSourceWithoutContextRethrowsAThrownException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).registerOnACancelledSourceWithoutContextRethrowsAThrownException);
                QUnit.test("CancellationToken - RegisterOnACancelledSourceWithContextRethrowsAThrownException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).registerOnACancelledSourceWithContextRethrowsAThrownException);
                QUnit.test("CancellationToken - RegisterOverloadsWithUseSynchronizationContextWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).registerOverloadsWithUseSynchronizationContextWork);
                QUnit.test("CancellationToken - RegisterOnCancellationTokenCreatedNonCancelledDoesNothing", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).registerOnCancellationTokenCreatedNonCancelledDoesNothing);
                QUnit.test("CancellationToken - RegisterOnCancellationTokenCreatedCancelledInvokesTheActionImmediately", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).registerOnCancellationTokenCreatedCancelledInvokesTheActionImmediately);
                QUnit.test("CancellationToken - DuplicateCancelDoesNotCauseCallbacksToBeCalledTwice", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).duplicateCancelDoesNotCauseCallbacksToBeCalledTwice);
                QUnit.test("CancellationToken - RegistrationsCanBeCompared", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).registrationsCanBeCompared);
                QUnit.test("CancellationToken - RegistrationsCanBeUnregistered", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).registrationsCanBeUnregistered);
                QUnit.test("CancellationToken - CreatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).creatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm);
                QUnit.test("CancellationToken - LinkedSourceWithTwoTokensWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).linkedSourceWithTwoTokensWorks);
                QUnit.test("CancellationToken - LinkedSourceWithThreeTokensWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingCancellationTokenTests).linkedSourceWithThreeTokensWorks);
                QUnit.test("Promise - TaskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests).taskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes);
                QUnit.test("Promise - TaskFromPromiseWithResultFactoryWorksWhenPromiseCompletes", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests).taskFromPromiseWithResultFactoryWorksWhenPromiseCompletes);
                QUnit.test("Promise - TaskFromPromiseWorksWhenPromiseFails", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests).taskFromPromiseWorksWhenPromiseFails);
                QUnit.test("Promise - CompletingPromiseCanBeAwaited", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests).completingPromiseCanBeAwaited);
                QUnit.test("Promise - FailingPromiseCanBeAwaited", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingPromiseTests).failingPromiseCanBeAwaited);
                QUnit.test("Tasks - TaskCompletionSourceTypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).taskCompletionSourceTypePropertiesAreCorrect);
                QUnit.test("Tasks - TaskTypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).taskTypePropertiesAreCorrect);
                QUnit.test("Tasks - TaskCompletionSourceWorksWhenSettingResult", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).taskCompletionSourceWorksWhenSettingResult);
                QUnit.test("Tasks - TaskCompletionSourceWorksWhenSettingASingleException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).taskCompletionSourceWorksWhenSettingASingleException);
                QUnit.test("Tasks - TaskCompletionSourceWorksWhenSettingTwoExceptions", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).taskCompletionSourceWorksWhenSettingTwoExceptions);
                QUnit.test("Tasks - TaskCompletionSourceWorksWhenCancelling", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).taskCompletionSourceWorksWhenCancelling);
                QUnit.test("Tasks - CancelledTaskThrowsTaskCanceledExceptionWhenAwaited", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).cancelledTaskThrowsTaskCanceledExceptionWhenAwaited);
                QUnit.test("Tasks - CancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).cancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed);
                QUnit.test("Tasks - SetResultFailsWhenTheTaskIsCompleted", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).setResultFailsWhenTheTaskIsCompleted);
                QUnit.test("Tasks - SetCanceledFailsWhenTheTaskIsCompleted", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).setCanceledFailsWhenTheTaskIsCompleted);
                QUnit.test("Tasks - SetExceptionFailsWhenTheTaskIsCompleted", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).setExceptionFailsWhenTheTaskIsCompleted);
                QUnit.test("Tasks - CompletedTaskHasCorrectIsXProperties", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).completedTaskHasCorrectIsXProperties);
                QUnit.test("Tasks - CancelledTaskHasCorrectIsXProperties", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).cancelledTaskHasCorrectIsXProperties);
                QUnit.test("Tasks - FaultedTaskHasCorrectIsXProperties", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).faultedTaskHasCorrectIsXProperties);
                QUnit.test("Tasks - TrySetResultReturnsFalseWhenTheTaskIsCompleted", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).trySetResultReturnsFalseWhenTheTaskIsCompleted);
                QUnit.test("Tasks - TrySetCanceledReturnsFalseWhenTheTaskIsCompleted", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).trySetCanceledReturnsFalseWhenTheTaskIsCompleted);
                QUnit.test("Tasks - TrySetExceptionReturnsFalseWhenTheTaskIsCompleted", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).trySetExceptionReturnsFalseWhenTheTaskIsCompleted);
                QUnit.test("Tasks - ContinueWithForNonGenericTaskWorkWithNoResultAndNoException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).continueWithForNonGenericTaskWorkWithNoResultAndNoException);
                QUnit.test("Tasks - ContinueWithWhenCallbackThrowsAnException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).continueWithWhenCallbackThrowsAnException);
                QUnit.test("Tasks - ExceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).exceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask);
                QUnit.test("Tasks - ContinueWithForNonGenericTaskCanReturnAValue", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).continueWithForNonGenericTaskCanReturnAValue);
                QUnit.test("Tasks - ContinueWithWithNoReturnValueForGenericTaskWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).continueWithWithNoReturnValueForGenericTaskWorks);
                QUnit.test("Tasks - ContinueWithForGenericTaskCanReturnAValue", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).continueWithForGenericTaskCanReturnAValue);
                QUnit.test("Tasks - DelayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).delayWorks);
                QUnit.test("Tasks - FromResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).fromResultWorks);
                QUnit.test("Tasks - RunWithoutResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).runWithoutResultWorks);
                QUnit.test("Tasks - RunWithResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).runWithResultWorks);
                QUnit.test("Tasks - RunWorksWhenBodyThrows", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).runWorksWhenBodyThrows);
                QUnit.test("Tasks - WhenAllParamArrayWithResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).whenAllParamArrayWithResultWorks);
                QUnit.test("Tasks - WhenAllEnumerableWithResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).whenAllEnumerableWithResultWorks);
                QUnit.test("Tasks - WhenAllParamArrayWithoutResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).whenAllParamArrayWithoutResultWorks);
                QUnit.test("Tasks - WhenAllEnumerableWithoutResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).whenAllEnumerableWithoutResultWorks);
                QUnit.test("Tasks - WhenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).whenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted);
                QUnit.test("Tasks - WhenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).whenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled);
                QUnit.test("Tasks - WhenAnyParamArrayWithResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).whenAnyParamArrayWithResultWorks);
                QUnit.test("Tasks - WhenAnyEnumerableWithResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).whenAnyEnumerableWithResultWorks);
                QUnit.test("Tasks - WhenAnyParamArrayWithoutResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).whenAnyParamArrayWithoutResultWorks);
                QUnit.test("Tasks - WhenAnyEnumerableWithoutResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).whenAnyEnumerableWithoutResultWorks);
                QUnit.test("Tasks - WhenAnyFaultsIfTheFirstTaskFaulted", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).whenAnyFaultsIfTheFirstTaskFaulted);
                QUnit.test("Tasks - WhenAnyIsCancelledIfTheFirstTaskWasCancelled", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).whenAnyIsCancelledIfTheFirstTaskWasCancelled);
                QUnit.test("Tasks - ConstructorWithOnlyActionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).constructorWithOnlyActionWorks);
                QUnit.test("Tasks - ConstructorWithActionAndStateWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).constructorWithActionAndStateWorks);
                QUnit.test("Tasks - ExceptionInManuallyCreatedTaskIsStoredOnTheTask", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).exceptionInManuallyCreatedTaskIsStoredOnTheTask);
                QUnit.test("Tasks - ConstructorWithOnlyFunctionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).constructorWithOnlyFunctionWorks);
                QUnit.test("Tasks - ConstructorWithFunctionAndStateWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ThreadingTaskTests).constructorWithFunctionAndStateWorks);
                QUnit.module("Utilities");
                QUnit.test("Environment - NewLineIsAStringContainingOnlyTheNewLineChar", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestEnvironmentTests).newLineIsAStringContainingOnlyTheNewLineChar);
                QUnit.module("СultureInfo");
                QUnit.test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestCultureInfoTests).typePropertiesAreCorrect);
                QUnit.test("GetFormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestCultureInfoTests).getFormatWorks);
                QUnit.test("InvariantWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestCultureInfoTests).invariantWorks);
            }
        }
    });
    
    Bridge.init();
})(this);
