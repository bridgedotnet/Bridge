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
    
    Bridge.define('Bridge.Test.QUnit.TestFixture$1', function (T) { return {
        statics: {
            _testInstance: null,
            get_TestInstance: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestFixture$1(T))._testInstance)) {
                    Bridge.get(Bridge.Test.QUnit.TestFixture$1(T))._testInstance = new T();
                }
    
                return Bridge.get(Bridge.Test.QUnit.TestFixture$1(T))._testInstance;
            },
            set_TestInstance: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestFixture$1(T))._testInstance = value;
            },
            _BeforeTest: function (isStatic, assert, expectedCount) {
                if (expectedCount === void 0) { expectedCount = null; }
                Bridge.get(Bridge.Test.QUnit.TestFixture$1(T)).set_TestInstance(Bridge.getDefaultValue(T));
    
                Bridge.get(Bridge.Test.Assert).assert = assert;
    
                if (Bridge.Nullable.hasValue(expectedCount)) {
                    assert.expect(Bridge.Nullable.getValue(expectedCount));
                }
    
                var r = isStatic ? Bridge.getDefaultValue(T) : Bridge.get(Bridge.Test.QUnit.TestFixture$1(T)).get_TestInstance();
    
                return r;
            }
        }
    }; });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            lengthWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.lengthWorks();
            },
            rankIsOne: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.rankIsOne();
            },
            getLengthWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.getLengthWorks();
            },
            getLowerBound: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.getLowerBound();
            },
            getUpperBoundWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.getUpperBoundWorks();
            },
            gettingValueByIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.gettingValueByIndexWorks();
            },
            getValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.getValueWorks();
            },
            settingValueByIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.settingValueByIndexWorks();
            },
            setValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.setValueWorks();
            },
            foreachWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.foreachWorks();
            },
            cloneWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.cloneWorks();
            },
            concatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.concatWorks();
            },
            containsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.containsWorks();
            },
            containsUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.containsUsesEqualsMethod();
            },
            allWithArrayItemFilterCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.allWithArrayItemFilterCallbackWorks();
            },
            sliceWithoutEndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.sliceWithoutEndWorks();
            },
            foreachWithArrayItemCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.foreachWithArrayItemCallbackWorks();
            },
            foreachWithArrayCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.foreachWithArrayCallbackWorks();
            },
            indexOfWithoutStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.indexOfWithoutStartIndexWorks();
            },
            indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.indexOfWithoutStartIndexUsesEqualsMethod();
            },
            indexOfWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.indexOfWithStartIndexWorks();
            },
            joinWithoutDelimiterWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.joinWithoutDelimiterWorks();
            },
            reverseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.reverseWorks();
            },
            anyWithArrayItemFilterCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.anyWithArrayItemFilterCallbackWorks();
            },
            binarySearch1Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.binarySearch1Works();
            },
            binarySearch2Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.binarySearch2Works();
            },
            binarySearch3Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.binarySearch3Works();
            },
            binarySearch4Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.binarySearch4Works();
            },
            binarySearchExceptionsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.binarySearchExceptionsWorks();
            },
            sortWithDefaultCompareWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.sortWithDefaultCompareWorks();
            },
            sort1Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.sort1Works();
            },
            sort2Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.sort2Works();
            },
            sort3Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.sort3Works();
            },
            sort4Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.sort4Works();
            },
            sortExceptionsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.sortExceptionsWorks();
            },
            foreachWhenCastToIListWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.foreachWhenCastToIListWorks();
            },
            iCollectionCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.iCollectionCountWorks();
            },
            iCollectionAddWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.iCollectionAddWorks();
            },
            iCollectionClearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.iCollectionClearWorks();
            },
            iCollectionContainsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.iCollectionContainsWorks();
            },
            iCollectionContainsUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.iCollectionContainsUsesEqualsMethod();
            },
            iCollectionRemoveWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.iCollectionRemoveWorks();
            },
            iListIndexingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.iListIndexingWorks();
            },
            iListIndexOfWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.iListIndexOfWorks();
            },
            iListIndexOfUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.iListIndexOfUsesEqualsMethod();
            },
            iListInsertWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.iListInsertWorks();
            },
            iListRemoveAtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests))._BeforeTest(false, assert);
                t.iListRemoveAtWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestAbstractClass', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestAbstractClass)],
        statics: {
            testB: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestAbstractClass))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestAbstractClass).testB();
            },
            testC: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestAbstractClass))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestAbstractClass).testC();
            },
            testBC: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestAbstractClass))._BeforeTest(true, assert, 6);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestAbstractClass).testBC();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum)],
        statics: {
            testParse: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum))._BeforeTest(true, assert, 6);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testParse();
            },
            testParseIgnoreCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testParseIgnoreCase();
            },
            testToString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testToString();
            },
            testGetValues: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testGetValues();
            },
            testCompareTo: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testCompareTo();
            },
            testFormat: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum))._BeforeTest(true, assert, 22);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testFormat();
            },
            testGetName: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testGetName();
            },
            testGetNames: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testGetNames();
            },
            testHasFlag: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testHasFlag();
            },
            testIsDefined: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum))._BeforeTest(true, assert, 6);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testIsDefined();
            },
            testTryParse: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum))._BeforeTest(true, assert, 11);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testTryParse();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInheritance', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestInheritance)],
        statics: {
            testA: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestInheritance))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestInheritance).testA();
            },
            testB: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestInheritance))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestInheritance).testB();
            },
            testAB: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestInheritance))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestInheritance).testAB();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInterfaces', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestInterfaces)],
        statics: {
            testInterfaceMethodAndProperty: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestInterfaces))._BeforeTest(true, assert, 6);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestInterfaces).testInterfaceMethodAndProperty();
            },
            testExplicitInterfaceMethodAndProperty: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestInterfaces))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestInterfaces).testExplicitInterfaceMethodAndProperty();
            },
            testTwoInterfaces: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestInterfaces))._BeforeTest(true, assert, 9);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestInterfaces).testTwoInterfaces();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestMethodParametersClass', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestMethodParametersClass)],
        statics: {
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestMethodParametersClass))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestMethodParametersClass).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestOverloadInstanceMethods', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestOverloadInstanceMethods)],
        statics: {
            testInstance: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestOverloadInstanceMethods))._BeforeTest(true, assert, 17);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadInstanceMethods).testInstance();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestOverloadStaticMethods', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods)],
        statics: {
            testStatic: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods))._BeforeTest(true, assert, 16);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods).testStatic();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestReferenceTypes', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestReferenceTypes)],
        statics: {
            testInstanceConstructorsAndMethods: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestReferenceTypes))._BeforeTest(true, assert, 26);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestReferenceTypes).testInstanceConstructorsAndMethods();
            },
            testStaticConstructorsAndMethods: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestReferenceTypes))._BeforeTest(true, assert, 13);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestReferenceTypes).testStaticConstructorsAndMethods();
            },
            testMethodParameters: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestReferenceTypes))._BeforeTest(true, assert, 16);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestReferenceTypes).testMethodParameters();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks)],
        statics: {
            simpleTryCatch: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).simpleTryCatch();
            },
            caughtExceptions: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).caughtExceptions();
            },
            thrownExceptions: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks))._BeforeTest(true, assert, 12);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).thrownExceptions();
            },
            bridge320: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).bridge320();
            },
            bridge343: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).bridge343();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchFinallyBlocks', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks)],
        statics: {
            simpleTryCatchFinally: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).simpleTryCatchFinally();
            },
            caughtExceptions: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).caughtExceptions();
            },
            thrownExceptions: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks))._BeforeTest(true, assert, 16);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).thrownExceptions();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestValueTypes', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestValueTypes)],
        statics: {
            testInstanceConstructorsAndMethods: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestValueTypes))._BeforeTest(true, assert, 18);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestValueTypes).testInstanceConstructorsAndMethods();
            },
            testStaticConstructorsAndMethods: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestValueTypes))._BeforeTest(true, assert, 7);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestValueTypes).testStaticConstructorsAndMethods();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestVirtualMethods', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestVirtualMethods)],
        statics: {
            testB: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestVirtualMethods))._BeforeTest(true, assert, 7);
                Bridge.get(Bridge.ClientTest.BasicCSharp.TestVirtualMethods).testB();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge069', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge069)],
        statics: {
            thisKeywordInStructConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge069))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge069).thisKeywordInStructConstructorWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge381', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge381)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge381))._BeforeTest(true, assert, 6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge381).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge447', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge447)],
        statics: {
            checkInlineExpression: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge447))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge447).checkInlineExpression();
            },
            checkInlineCalls: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge447))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge447).checkInlineCalls();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge472', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge472)],
        statics: {
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge472))._BeforeTest(true, assert, 10);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge472).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge479', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge479)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge479))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge479).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge485', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge485)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge485))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge485).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge495', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge495)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge495))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge495).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge501', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge501)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge501))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge501).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge502', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge502)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge502))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge502).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge503', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge503)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge503))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge503).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge508', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge508)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge508))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge508).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge514', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge514)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge514))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge514).testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge514))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge514).testRelated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge520', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge520)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge520))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge520).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge522', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge522)],
        statics: {
            testUseCase1: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge522))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge522).testUseCase1();
            },
            testUseCase2: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge522))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge522).testUseCase2();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge532', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge532)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge532))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge532).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge537', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge537)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge537))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge537).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge538', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge538)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge538))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge538).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge544', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge544)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge544))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge544).testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge544))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge544).testRelated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge546', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge546)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge546))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge546).testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge546))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge546).testRelated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge548', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge548)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge548))._BeforeTest(true, assert, 18);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge548).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge549', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge549)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge549))._BeforeTest(true, assert, 153);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge549).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge550', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge550)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge550))._BeforeTest(true, assert, 10);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge550).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge554', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge554)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge554))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge554).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge555', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge555)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge555))._BeforeTest(true, assert, 15);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge555).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge558', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge558)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge558))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge558).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge559', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge559)],
        statics: {
            testUseCase1: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge559))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge559).testUseCase1();
            },
            testUseCase2: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge559))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge559).testUseCase2();
            },
            testUseCase3: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge559))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge559).testUseCase3();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge563', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge563)],
        statics: {
            tesForeach: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge563))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge563).tesForeach();
            },
            tesFor: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge563))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge563).tesFor();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge565', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge565)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge565))._BeforeTest(true, assert, 7);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge565).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge566', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge566)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge566))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge566).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge572', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge572)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge572))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge572).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge577', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge577)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge577))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge577).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge578', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge578)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge578))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge578).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge580', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge580)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge580))._BeforeTest(true, assert, 10);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge580).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge582', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge582)],
        statics: {
            testAddTimeSpan: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge582))._BeforeTest(true, assert, 6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge582).testAddTimeSpan();
            },
            testAddTicks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge582))._BeforeTest(true, assert, 6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge582).testAddTicks();
            },
            testTicks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge582))._BeforeTest(true, assert, 7);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge582).testTicks();
            },
            testSubtractTimeSpan: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge582))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge582).testSubtractTimeSpan();
            },
            testTimeOfDay: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge582))._BeforeTest(true, assert, 6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge582).testTimeOfDay();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge583', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge583)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge583))._BeforeTest(true, assert, 120);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge583).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge586', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge586)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge586))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge586).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge588', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge588)],
        statics: {
            testUseCase1: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge588))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588).testUseCase1();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge588C', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge588C)],
        statics: {
            testUseCase2: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge588C))._BeforeTest(true, assert, 9);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588C).testUseCase2();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge592', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge592)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge592))._BeforeTest(true, assert, 6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge592).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge595', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge595)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge595))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge595).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge597', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge597)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge597))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge597).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge603', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge603)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge603))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge603).testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge603))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge603).testRelated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge606', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge606)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge606))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge606).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge607', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge607)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge607))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge607).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge608', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge608)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge608))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge608).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge615', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge615)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge615))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge615).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge623', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge623)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge623))._BeforeTest(true, assert, 8);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge623).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge625', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge625)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge625))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge625).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge634', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge634)],
        statics: {
            testUseCase1: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge634))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge634).testUseCase1();
            },
            testUseCase2: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge634))._BeforeTest(true, assert, 21);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge634).testUseCase2();
            },
            testUseCaseFor658: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge634))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge634).testUseCaseFor658();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge635', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge635)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge635))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge635).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge647', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge647)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge647))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge647).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge648', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge648)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge648))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge648).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge652', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge652)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge652))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge652).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge655', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge655)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge655))._BeforeTest(true, assert, 12);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge655).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge660', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge660)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge660))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge660).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge661', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge661)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge661))._BeforeTest(true, assert, 6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge661).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge664', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge664)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge664))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge664).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge666', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge666)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge666))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge666).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge671', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge671)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge671))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge671).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge674', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge674)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge674))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge674).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge675', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge675)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge675))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge675).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge687', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge687)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge687))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge687).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge689', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge689)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge689))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge689).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge690', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge690)],
        statics: {
            testUseCaseForInstance: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge690))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge690).testUseCaseForInstance();
            },
            testUseCaseForStatic: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge690))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge690).testUseCaseForStatic();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge691', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge691)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge691))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge691).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge692', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge692)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge692))._BeforeTest(true, assert, 8);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge692).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge693', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge693)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge693))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge693).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge694', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge694)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge694))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge694).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge696', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge696)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge696))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge696).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge699', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge699)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge699))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge699).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge708', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge708)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge708))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge708).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge721', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge721)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge721))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge721).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge722', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge722)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge722))._BeforeTest(true, assert, 9);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge722).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge726', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge726)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge726))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge726).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge732', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge732)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge732))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge732).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge733', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge733)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge733))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge733).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge751', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge751)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge751))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge751).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge758', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge758)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge758))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge758).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge760', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge760)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge760))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge760).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge762', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge762)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge762))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge762).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge772', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge772)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge772))._BeforeTest(true, assert, 10);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge772).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge777', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge777)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge777))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge777).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge782', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge782)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge782))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge782).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge785', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge785)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge785))._BeforeTest(true, assert, 7);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge785).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge786', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge786)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge786))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge786).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge788', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge788)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge788))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge788).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge789', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge789)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge789))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge789).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge793', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge793)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge793))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge793).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge795', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge795)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge795))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge795).testUseCase();
            },
            testRelated: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge795))._BeforeTest(true, assert, 16);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge795).testRelated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge796', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge796)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge796))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge796).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge815', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge815)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge815))._BeforeTest(true, assert, 7);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge815).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge816', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge816)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge816))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge816).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge817', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge817)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge817))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge817).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge818', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge818)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge818))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge818).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge821', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge821)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge821))._BeforeTest(true, assert, 9);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge821).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge823', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge823)],
        statics: {
            getTicksReturnsCorrectValue: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge823))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge823).getTicksReturnsCorrectValue();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge826', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge826)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge826))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge826).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge830', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge830)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge830))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge830).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge835', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge835)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge835))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge835).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge841', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge841)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge841))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge841).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge844', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge844)],
        statics: {
            nullableAndSimpleDateTimeToStringEquals: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge844))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge844).nullableAndSimpleDateTimeToStringEquals();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge849', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge849)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge849))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge849).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge857', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge857)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge857))._BeforeTest(true, assert, 8);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge857).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge861', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge861)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge861))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge861).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge863', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge863)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge863))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge863).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge874', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge874)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge874))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge874).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge881', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge881)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge881))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge881).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge882', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge882)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge882))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge882).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge883', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge883)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge883))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge883).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge889', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge889)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge889))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge889).testUseCase();
            },
            testMakeEnumerable: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge889))._BeforeTest(true, assert, 8);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge889).testMakeEnumerable();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge892', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge892)],
        statics: {
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge892))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge892).testUseCase();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge893', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge893)],
        statics: {
            enumToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge893))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge893).enumToStringWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge898', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge898)],
        statics: {
            testDecimalConversion: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge898))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge898).testDecimalConversion();
            },
            testDoubleConversion: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge898))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge898).testDoubleConversion();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge905', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge905)],
        statics: {
            dayOfWeekFixed: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge905))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge905).dayOfWeekFixed();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge906', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge906)],
        statics: {
            testIfAsyncMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge906))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge906).testIfAsyncMethod();
            },
            testIfElseAsyncMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge906))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge906).testIfElseAsyncMethod();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge907', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge907)],
        statics: {
            testStringSpitWithNullParameterFixed: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge907))._BeforeTest(true, assert, 6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge907).testStringSpitWithNullParameterFixed();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge912', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge912)],
        statics: {
            testAsyncMethodInBlock: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge912))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge912).testAsyncMethodInBlock();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge913', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge913)],
        statics: {
            testNullableDateTimeGreaterThanWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge913))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge913).testNullableDateTimeGreaterThanWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge918', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge918)],
        statics: {
            testDynamicAsyncResult: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge918))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge918).testDynamicAsyncResult();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge922', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge922)],
        statics: {
            testLinqDecimal: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge922))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge922).testLinqDecimal();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge928', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge928)],
        statics: {
            testAsyncMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge928))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge928).testAsyncMethod();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge929', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge929)],
        statics: {
            testAsyncException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge929))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge929).testAsyncException();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge930', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge930)],
        statics: {
            testAsyncException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge930))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge930).testAsyncException();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge933', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge933)],
        statics: {
            testBooleanInIfStatement: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge933))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge933).testBooleanInIfStatement();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge968', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge968)],
        statics: {
            testDecimalDoesNotParseIncorrectValue: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge968))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge968).testDecimalDoesNotParseIncorrectValue();
            },
            testDecimalParsesCorrectValues: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge968))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge968).testDecimalParsesCorrectValues();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge975', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge975)],
        statics: {
            testCastToLongWorksForBigNumberInIE: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge975))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge975).testCastToLongWorksForBigNumberInIE();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge989', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge989)],
        statics: {
            dateTimeToISOStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge989))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge989).dateTimeToISOStringWorks();
            },
            dateToISOStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.Bridge989))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge989).dateToISOStringWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues)],
        statics: {
            n169: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n169();
            },
            n240: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n240();
            },
            n264: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n264();
            },
            n266: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n266();
            },
            n272: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n272();
            },
            n273: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n273();
            },
            n277: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n277();
            },
            n294: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n294();
            },
            n304: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n304();
            },
            n305: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n305();
            },
            n306: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n306();
            },
            n329: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n329();
            },
            n335: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n335();
            },
            n336: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n336();
            },
            n337: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n337();
            },
            n338: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n338();
            },
            n339: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n339();
            },
            n340: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n340();
            },
            n341: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n341();
            },
            n342: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n342();
            },
            n349: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n349();
            },
            n377: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 6);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n377();
            },
            n383: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n383();
            },
            n393: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n393();
            },
            n395: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n395();
            },
            n406: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n406();
            },
            n407: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n407();
            },
            n409: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n409();
            },
            n410: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n410();
            },
            n418: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n418();
            },
            n422: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n422();
            },
            n428: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n428();
            },
            n435: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n435();
            },
            n436: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n436();
            },
            n438: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n438();
            },
            n439: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n439();
            },
            n442: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n442();
            },
            n460: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n460();
            },
            n467: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n467();
            },
            n469: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n469();
            },
            n470: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n470();
            },
            n499: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BridgeIssues.TestBridgeIssues))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n499();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ComparerTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ComparerTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultComparerCanOrderNumbers: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ComparerTests))._BeforeTest(false, assert);
                t.defaultComparerCanOrderNumbers();
            },
            defaultComparerCanOrderNullValues: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ComparerTests))._BeforeTest(false, assert);
                t.defaultComparerCanOrderNullValues();
            },
            defaultComparerUsesCompareMethodIfClassImplementsIComparable: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ComparerTests))._BeforeTest(false, assert);
                t.defaultComparerUsesCompareMethodIfClassImplementsIComparable();
            },
            createWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ComparerTests))._BeforeTest(false, assert);
                t.createWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.EqualityComparerTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.EqualityComparerTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultComparerCanGetHashCodeOfNumber: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.EqualityComparerTests))._BeforeTest(false, assert);
                t.defaultComparerCanGetHashCodeOfNumber();
            },
            defaultComparerReturnsZeroAsHashCodeForNullAndUndefined: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.EqualityComparerTests))._BeforeTest(false, assert);
                t.defaultComparerReturnsZeroAsHashCodeForNullAndUndefined();
            },
            defaultComparerCanDetermineEquality: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.EqualityComparerTests))._BeforeTest(false, assert);
                t.defaultComparerCanDetermineEquality();
            },
            defaultComparerInvokesOverriddenGetHashCode: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.EqualityComparerTests))._BeforeTest(false, assert);
                t.defaultComparerInvokesOverriddenGetHashCode();
            },
            defaultComparerInvokesOverriddenEquals: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.EqualityComparerTests))._BeforeTest(false, assert);
                t.defaultComparerInvokesOverriddenEquals();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            capacityConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.capacityConstructorWorks();
            },
            capacityAndEqualityComparerWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.capacityAndEqualityComparerWorks();
            },
            equalityComparerOnlyConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.equalityComparerOnlyConstructorWorks();
            },
            countWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.countWorks();
            },
            keysWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.keysWorks();
            },
            valuesWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.valuesWorks();
            },
            indexerGetterWorksForExistingItems: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.indexerGetterWorksForExistingItems();
            },
            indexerSetterWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.indexerSetterWorks();
            },
            indexerGetterThrowsForNonExistingItems: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert, 0);
                t.indexerGetterThrowsForNonExistingItems();
            },
            addWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.addWorks();
            },
            addThrowsIfItemAlreadyExists: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert, 0);
                t.addThrowsIfItemAlreadyExists();
            },
            clearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.clearWorks();
            },
            containsKeyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.containsKeyWorks();
            },
            enumeratingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.enumeratingWorks();
            },
            removeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.removeWorks();
            },
            tryGetValueWithIntKeysWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.tryGetValueWithIntKeysWorks();
            },
            tryGetValueWithObjectKeysWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.tryGetValueWithObjectKeysWorks();
            },
            canUseCustomComparer: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests))._BeforeTest(false, assert);
                t.canUseCustomComparer();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests)],
        statics: {
            arrayImplementsICollection: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests))._BeforeTest(false, assert);
                t.arrayImplementsICollection();
            },
            customClassThatShouldImplementICollectionDoesSo: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests))._BeforeTest(false, assert);
                t.customClassThatShouldImplementICollectionDoesSo();
            },
            arrayCastToICollectionCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests))._BeforeTest(false, assert);
                t.arrayCastToICollectionCountWorks();
            },
            classImplementingICollectionCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests))._BeforeTest(false, assert);
                t.classImplementingICollectionCountWorks();
            },
            classImplementingICollectionCastToICollectionCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests))._BeforeTest(false, assert);
                t.classImplementingICollectionCastToICollectionCountWorks();
            },
            classImplementingICollectionAddWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests))._BeforeTest(false, assert);
                t.classImplementingICollectionAddWorks();
            },
            classImplementingICollectionCastToICollectionAddWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests))._BeforeTest(false, assert);
                t.classImplementingICollectionCastToICollectionAddWorks();
            },
            classImplementingICollectionClearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests))._BeforeTest(false, assert);
                t.classImplementingICollectionClearWorks();
            },
            classImplementingICollectionCastToICollectionClearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests))._BeforeTest(false, assert);
                t.classImplementingICollectionCastToICollectionClearWorks();
            },
            arrayCastToICollectionContainsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests))._BeforeTest(false, assert);
                t.arrayCastToICollectionContainsWorks();
            },
            classImplementingICollectionContainsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests))._BeforeTest(false, assert);
                t.classImplementingICollectionContainsWorks();
            },
            classImplementingICollectionCastToICollectionContainsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests))._BeforeTest(false, assert);
                t.classImplementingICollectionCastToICollectionContainsWorks();
            },
            classImplementingICollectionRemoveWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests))._BeforeTest(false, assert);
                t.classImplementingICollectionRemoveWorks();
            },
            classImplementingICollectionCastToICollectionRemoveWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests))._BeforeTest(false, assert);
                t.classImplementingICollectionCastToICollectionRemoveWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            classImplementsInterfaces: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests))._BeforeTest(false, assert);
                t.classImplementsInterfaces();
            },
            countWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests))._BeforeTest(false, assert);
                t.countWorks();
            },
            keysWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests))._BeforeTest(false, assert);
                t.keysWorks();
            },
            getItemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests))._BeforeTest(false, assert);
                t.getItemWorks();
            },
            valuesWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests))._BeforeTest(false, assert);
                t.valuesWorks();
            },
            containsKeyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests))._BeforeTest(false, assert);
                t.containsKeyWorks();
            },
            tryGetValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests))._BeforeTest(false, assert);
                t.tryGetValueWorks();
            },
            addWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests))._BeforeTest(false, assert);
                t.addWorks();
            },
            clearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests))._BeforeTest(false, assert);
                t.clearWorks();
            },
            removeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests))._BeforeTest(false, assert);
                t.removeWorks();
            },
            setItemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests))._BeforeTest(false, assert);
                t.setItemWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IEnumerableTests)],
        statics: {
            arrayImplementsIEnumerable: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IEnumerableTests))._BeforeTest(false, assert);
                t.arrayImplementsIEnumerable();
            },
            customClassThatShouldImplementIEnumerableDoesSo: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IEnumerableTests))._BeforeTest(false, assert);
                t.customClassThatShouldImplementIEnumerableDoesSo();
            },
            arrayGetEnumeratorMethodWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IEnumerableTests))._BeforeTest(false, assert);
                t.arrayGetEnumeratorMethodWorks();
            },
            arrayCastToIEnumerableCanBeEnumerated: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IEnumerableTests))._BeforeTest(false, assert);
                t.arrayCastToIEnumerableCanBeEnumerated();
            },
            classImplementingIEnumerableCanBeEnumerated: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IEnumerableTests))._BeforeTest(false, assert);
                t.classImplementingIEnumerableCanBeEnumerated();
            },
            classImplementingIEnumerableCastToIEnumerableCanBeEnumerated: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IEnumerableTests))._BeforeTest(false, assert);
                t.classImplementingIEnumerableCastToIEnumerableCanBeEnumerated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            arrayImplementsIList: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests))._BeforeTest(false, assert);
                t.arrayImplementsIList();
            },
            customClassThatShouldImplementIListDoesSo: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests))._BeforeTest(false, assert);
                t.customClassThatShouldImplementIListDoesSo();
            },
            arrayCastToIListGetItemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests))._BeforeTest(false, assert);
                t.arrayCastToIListGetItemWorks();
            },
            classImplementingIListGetItemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests))._BeforeTest(false, assert);
                t.classImplementingIListGetItemWorks();
            },
            classImplementingIListCastToIListGetItemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests))._BeforeTest(false, assert);
                t.classImplementingIListCastToIListGetItemWorks();
            },
            arrayCastToIListSetItemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests))._BeforeTest(false, assert);
                t.arrayCastToIListSetItemWorks();
            },
            classImplementingIListSetItemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests))._BeforeTest(false, assert);
                t.classImplementingIListSetItemWorks();
            },
            classImplementingIListCastToIListSetItemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests))._BeforeTest(false, assert);
                t.classImplementingIListCastToIListSetItemWorks();
            },
            arrayCastToIListIndexOfWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests))._BeforeTest(false, assert);
                t.arrayCastToIListIndexOfWorks();
            },
            classImplementingIListIndexOfWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests))._BeforeTest(false, assert);
                t.classImplementingIListIndexOfWorks();
            },
            classImplementingIListCastToIListIndexOfWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests))._BeforeTest(false, assert);
                t.classImplementingIListCastToIListIndexOfWorks();
            },
            classImplementingIListInsertWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests))._BeforeTest(false, assert);
                t.classImplementingIListInsertWorks();
            },
            classImplementingIListCastToIListInsertWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests))._BeforeTest(false, assert);
                t.classImplementingIListCastToIListInsertWorks();
            },
            classImplementingIListRemoveAtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests))._BeforeTest(false, assert);
                t.classImplementingIListRemoveAtWorks();
            },
            classImplementingIListCastToIListRemoveAtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests))._BeforeTest(false, assert);
                t.classImplementingIListCastToIListRemoveAtWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests)],
        statics: {
            typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests))._BeforeTest(false, assert);
                t.typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable();
            },
            enumeratingIEnumeratorIteratorToEndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests))._BeforeTest(false, assert);
                t.enumeratingIEnumeratorIteratorToEndWorks();
            },
            prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests))._BeforeTest(false, assert);
                t.prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks();
            },
            exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests))._BeforeTest(false, assert);
                t.exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks();
            },
            typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests))._BeforeTest(false, assert);
                t.typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface();
            },
            enumeratingIEnumerableIteratorToEndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests))._BeforeTest(false, assert);
                t.enumeratingIEnumerableIteratorToEndWorks();
            },
            prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests))._BeforeTest(false, assert);
                t.prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks();
            },
            exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests))._BeforeTest(false, assert);
                t.exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks();
            },
            enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests))._BeforeTest(false, assert);
                t.enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters();
            },
            differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests))._BeforeTest(false, assert);
                t.differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithCapacityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.constructorWithCapacityWorks();
            },
            constructingFromArrayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.constructingFromArrayWorks();
            },
            constructingFromListWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.constructingFromListWorks();
            },
            constructingFromIEnumerableWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.constructingFromIEnumerableWorks();
            },
            countWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.countWorks();
            },
            indexingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.indexingWorks();
            },
            foreachWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.foreachWorks();
            },
            getEnumeratorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.getEnumeratorWorks();
            },
            addWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.addWorks();
            },
            addRangeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.addRangeWorks();
            },
            binarySearch1Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.binarySearch1Works();
            },
            binarySearch2Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.binarySearch2Works();
            },
            binarySearch3Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.binarySearch3Works();
            },
            binarySearch4Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.binarySearch4Works();
            },
            clearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.clearWorks();
            },
            containsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.containsWorks();
            },
            containsUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.containsUsesEqualsMethod();
            },
            sliceWithoutEndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.sliceWithoutEndWorks();
            },
            sliceWithEndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.sliceWithEndWorks();
            },
            foreachWithListItemCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.foreachWithListItemCallbackWorks();
            },
            foreachWithListCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.foreachWithListCallbackWorks();
            },
            indexOfWithoutStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.indexOfWithoutStartIndexWorks();
            },
            indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.indexOfWithoutStartIndexUsesEqualsMethod();
            },
            indexOfWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.indexOfWithStartIndexWorks();
            },
            indexOfWithStartIndexUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.indexOfWithStartIndexUsesEqualsMethod();
            },
            insertWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.insertWorks();
            },
            insertRangeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.insertRangeWorks();
            },
            joinWithoutDelimiterWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.joinWithoutDelimiterWorks();
            },
            joinWithDelimiterWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.joinWithDelimiterWorks();
            },
            removeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.removeWorks();
            },
            removeReturnsFalseIfTheElementWasNotFound: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.removeReturnsFalseIfTheElementWasNotFound();
            },
            removeCanRemoveNullItem: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.removeCanRemoveNullItem();
            },
            removeUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.removeUsesEqualsMethod();
            },
            removeAtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.removeAtWorks();
            },
            removeRangeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.removeRangeWorks();
            },
            reverseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.reverseWorks();
            },
            sortWithDefaultCompareWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.sortWithDefaultCompareWorks();
            },
            sortWithCompareCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.sortWithCompareCallbackWorks();
            },
            sortWithIComparerWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.sortWithIComparerWorks();
            },
            foreachWhenCastToIEnumerableWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.foreachWhenCastToIEnumerableWorks();
            },
            iEnumerableGetEnumeratorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.iEnumerableGetEnumeratorWorks();
            },
            iCollectionCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.iCollectionCountWorks();
            },
            iCollectionAddWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.iCollectionAddWorks();
            },
            iCollectionClearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.iCollectionClearWorks();
            },
            iCollectionContainsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.iCollectionContainsWorks();
            },
            iCollectionContainsUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.iCollectionContainsUsesEqualsMethod();
            },
            iCollectionRemoveWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.iCollectionRemoveWorks();
            },
            iCollectionRemoveCanRemoveNullItem: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.iCollectionRemoveCanRemoveNullItem();
            },
            iCollectionRemoveUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.iCollectionRemoveUsesEqualsMethod();
            },
            iListIndexingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.iListIndexingWorks();
            },
            iListIndexOfWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.iListIndexOfWorks();
            },
            iListIndexOfUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.iListIndexOfUsesEqualsMethod();
            },
            iListInsertWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.iListInsertWorks();
            },
            iListRemoveAtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.iListRemoveAtWorks();
            },
            toArrayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests))._BeforeTest(false, assert);
                t.toArrayWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests)],
        statics: {
            roundtrip1: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).roundtrip1();
            },
            roundtrip2: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).roundtrip2();
            },
            roundtrip3: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).roundtrip3();
            },
            emptyString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).emptyString();
            },
            zeroLengthArray: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).zeroLengthArray();
            },
            roundtripWithPadding1: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).roundtripWithPadding1();
            },
            roundtripWithPadding2: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).roundtripWithPadding2();
            },
            partialRoundtripWithPadding1: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).partialRoundtripWithPadding1();
            },
            partialRoundtripWithPadding2: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).partialRoundtripWithPadding2();
            },
            parseWithWhitespace: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).parseWithWhitespace();
            },
            roundtripWithWhitespace2: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).roundtripWithWhitespace2();
            },
            roundtripWithWhitespace3: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).roundtripWithWhitespace3();
            },
            roundtripWithWhitespace4: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).roundtripWithWhitespace4();
            },
            roundtripWithWhitespace5: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).roundtripWithWhitespace5();
            },
            roundtripWithWhitespace6: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).roundtripWithWhitespace6();
            },
            roundtripWithWhitespace7: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).roundtripWithWhitespace7();
            },
            roundtripLargeString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).roundtripLargeString();
            },
            invalidOffset: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).invalidOffset();
            },
            invalidLength: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).invalidLength();
            },
            invalidInput: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).invalidInput();
            },
            invalidCharactersInInput: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).invalidCharactersInInput();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests)],
        statics: {
            validOffsetIn: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests).validOffsetIn();
            },
            shortInputArray: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests).shortInputArray();
            },
            validOffsetOut: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests).validOffsetOut();
            },
            invalidInputBuffer: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests).invalidInputBuffer();
            },
            invalidOutputBuffer: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests).invalidOutputBuffer();
            },
            invalidOffsetIn: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests).invalidOffsetIn();
            },
            invalidOffsetOut: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests).invalidOffsetOut();
            },
            invalidInputLength: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests).invalidInputLength();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests)],
        statics: {
            knownByteSequence: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests).knownByteSequence();
            },
            zeroLength: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests).zeroLength();
            },
            invalidInputBuffer: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests).invalidInputBuffer();
            },
            invalidOffset: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests).invalidOffset();
            },
            invalidLength: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests).invalidLength();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests))._BeforeTest(false, assert);
                t.fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests))._BeforeTest(false, assert);
                t.fromByte();
            },
            fromDecimal: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests))._BeforeTest(false, assert);
                t.fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests))._BeforeTest(false, assert);
                t.fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests))._BeforeTest(false, assert);
                t.fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests))._BeforeTest(false, assert);
                t.fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests))._BeforeTest(false, assert);
                t.fromInt64();
            },
            fromString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests))._BeforeTest(false, assert);
                t.fromString();
            },
            fromObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests))._BeforeTest(false, assert);
                t.fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests))._BeforeTest(false, assert);
                t.fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests))._BeforeTest(false, assert);
                t.fromSingle();
            },
            fromUInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests))._BeforeTest(false, assert);
                t.fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests))._BeforeTest(false, assert);
                t.fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests))._BeforeTest(false, assert);
                t.fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests))._BeforeTest(false, assert);
                t.fromBoolean();
            },
            fromChar: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests))._BeforeTest(false, assert);
                t.fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests))._BeforeTest(false, assert);
                t.fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests))._BeforeTest(false, assert);
                t.fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests))._BeforeTest(false, assert);
                t.fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests))._BeforeTest(false, assert);
                t.fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests))._BeforeTest(false, assert);
                t.fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests))._BeforeTest(false, assert);
                t.fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests))._BeforeTest(false, assert);
                t.fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests))._BeforeTest(false, assert);
                t.fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests))._BeforeTest(false, assert);
                t.fromString();
            },
            fromStringWithBase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests))._BeforeTest(false, assert);
                t.fromStringWithBase();
            },
            fromUInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests))._BeforeTest(false, assert);
                t.fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests))._BeforeTest(false, assert);
                t.fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests))._BeforeTest(false, assert);
                t.fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests)],
        statics: {
            fromByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromByte();
            },
            fromChar: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromDecimal();
            },
            fromDecimalViaObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromDecimalViaObject();
            },
            fromDouble: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromDouble();
            },
            fromDoubleViaObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromDoubleViaObject();
            },
            fromInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromSingle();
            },
            fromSingleViaObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromSingleViaObject();
            },
            fromString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromString();
            },
            fromUInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests))._BeforeTest(false, assert);
                t.fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests)],
        statics: {
            fromString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests))._BeforeTest(false, assert);
                t.fromString();
            },
            fromStringWithCustomFormatProvider: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests))._BeforeTest(false, assert);
                t.fromStringWithCustomFormatProvider();
            },
            fromDateTime: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests))._BeforeTest(false, assert);
                t.fromDateTime();
            },
            fromObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests))._BeforeTest(false, assert);
                t.fromObject();
            },
            fromBoolean: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests))._BeforeTest(false, assert);
                t.fromBoolean();
            },
            fromChar: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests))._BeforeTest(false, assert);
                t.fromChar();
            },
            fromInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests))._BeforeTest(false, assert);
                t.fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests))._BeforeTest(false, assert);
                t.fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests))._BeforeTest(false, assert);
                t.fromInt64();
            },
            fromUInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests))._BeforeTest(false, assert);
                t.fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests))._BeforeTest(false, assert);
                t.fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests))._BeforeTest(false, assert);
                t.fromUInt64();
            },
            fromSingle: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests))._BeforeTest(false, assert);
                t.fromSingle();
            },
            fromDouble: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests))._BeforeTest(false, assert);
                t.fromDouble();
            },
            fromDecimal: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests))._BeforeTest(false, assert);
                t.fromDecimal();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests))._BeforeTest(false, assert);
                t.fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests))._BeforeTest(false, assert);
                t.fromByte();
            },
            fromDecimal: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests))._BeforeTest(false, assert);
                t.fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests))._BeforeTest(false, assert);
                t.fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests))._BeforeTest(false, assert);
                t.fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests))._BeforeTest(false, assert);
                t.fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests))._BeforeTest(false, assert);
                t.fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests))._BeforeTest(false, assert);
                t.fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests))._BeforeTest(false, assert);
                t.fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests))._BeforeTest(false, assert);
                t.fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests))._BeforeTest(false, assert);
                t.fromString();
            },
            fromUInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests))._BeforeTest(false, assert);
                t.fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests))._BeforeTest(false, assert);
                t.fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests))._BeforeTest(false, assert);
                t.fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests))._BeforeTest(false, assert);
                t.fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests))._BeforeTest(false, assert);
                t.fromByte();
            },
            fromDecimal: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests))._BeforeTest(false, assert);
                t.fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests))._BeforeTest(false, assert);
                t.fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests))._BeforeTest(false, assert);
                t.fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests))._BeforeTest(false, assert);
                t.fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests))._BeforeTest(false, assert);
                t.fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests))._BeforeTest(false, assert);
                t.fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests))._BeforeTest(false, assert);
                t.fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests))._BeforeTest(false, assert);
                t.fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests))._BeforeTest(false, assert);
                t.fromString();
            },
            fromUInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests))._BeforeTest(false, assert);
                t.fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests))._BeforeTest(false, assert);
                t.fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests))._BeforeTest(false, assert);
                t.fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests))._BeforeTest(false, assert);
                t.fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests))._BeforeTest(false, assert);
                t.fromByte();
            },
            fromChar: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests))._BeforeTest(false, assert);
                t.fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests))._BeforeTest(false, assert);
                t.fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests))._BeforeTest(false, assert);
                t.fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests))._BeforeTest(false, assert);
                t.fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests))._BeforeTest(false, assert);
                t.fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests))._BeforeTest(false, assert);
                t.fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests))._BeforeTest(false, assert);
                t.fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests))._BeforeTest(false, assert);
                t.fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests))._BeforeTest(false, assert);
                t.fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests))._BeforeTest(false, assert);
                t.fromString();
            },
            fromStringWithBase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests))._BeforeTest(false, assert);
                t.fromStringWithBase();
            },
            fromUInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests))._BeforeTest(false, assert);
                t.fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests))._BeforeTest(false, assert);
                t.fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests))._BeforeTest(false, assert);
                t.fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests))._BeforeTest(false, assert);
                t.fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests))._BeforeTest(false, assert);
                t.fromByte();
            },
            fromChar: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests))._BeforeTest(false, assert);
                t.fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests))._BeforeTest(false, assert);
                t.fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests))._BeforeTest(false, assert);
                t.fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests))._BeforeTest(false, assert);
                t.fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests))._BeforeTest(false, assert);
                t.fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests))._BeforeTest(false, assert);
                t.fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests))._BeforeTest(false, assert);
                t.fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests))._BeforeTest(false, assert);
                t.fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests))._BeforeTest(false, assert);
                t.fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests))._BeforeTest(false, assert);
                t.fromString();
            },
            fromStringWithBase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests))._BeforeTest(false, assert);
                t.fromStringWithBase();
            },
            fromUInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests))._BeforeTest(false, assert);
                t.fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests))._BeforeTest(false, assert);
                t.fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests))._BeforeTest(false, assert);
                t.fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests))._BeforeTest(false, assert);
                t.fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests))._BeforeTest(false, assert);
                t.fromByte();
            },
            fromChar: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests))._BeforeTest(false, assert);
                t.fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests))._BeforeTest(false, assert);
                t.fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests))._BeforeTest(false, assert);
                t.fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests))._BeforeTest(false, assert);
                t.fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests))._BeforeTest(false, assert);
                t.fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests))._BeforeTest(false, assert);
                t.fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests))._BeforeTest(false, assert);
                t.fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests))._BeforeTest(false, assert);
                t.fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests))._BeforeTest(false, assert);
                t.fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests))._BeforeTest(false, assert);
                t.fromString();
            },
            fromStringWithBase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests))._BeforeTest(false, assert);
                t.fromStringWithBase();
            },
            fromUInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests))._BeforeTest(false, assert);
                t.fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests))._BeforeTest(false, assert);
                t.fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests))._BeforeTest(false, assert);
                t.fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests))._BeforeTest(false, assert);
                t.fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests))._BeforeTest(false, assert);
                t.fromByte();
            },
            fromChar: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests))._BeforeTest(false, assert);
                t.fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests))._BeforeTest(false, assert);
                t.fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests))._BeforeTest(false, assert);
                t.fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests))._BeforeTest(false, assert);
                t.fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests))._BeforeTest(false, assert);
                t.fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests))._BeforeTest(false, assert);
                t.fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests))._BeforeTest(false, assert);
                t.fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests))._BeforeTest(false, assert);
                t.fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests))._BeforeTest(false, assert);
                t.fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests))._BeforeTest(false, assert);
                t.fromString();
            },
            fromStringWithBase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests))._BeforeTest(false, assert);
                t.fromStringWithBase();
            },
            fromUInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests))._BeforeTest(false, assert);
                t.fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests))._BeforeTest(false, assert);
                t.fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests))._BeforeTest(false, assert);
                t.fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests))._BeforeTest(false, assert);
                t.fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests))._BeforeTest(false, assert);
                t.fromByte();
            },
            fromDecimal: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests))._BeforeTest(false, assert);
                t.fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests))._BeforeTest(false, assert);
                t.fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests))._BeforeTest(false, assert);
                t.fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests))._BeforeTest(false, assert);
                t.fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests))._BeforeTest(false, assert);
                t.fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests))._BeforeTest(false, assert);
                t.fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests))._BeforeTest(false, assert);
                t.fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests))._BeforeTest(false, assert);
                t.fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests))._BeforeTest(false, assert);
                t.fromString();
            },
            fromUInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests))._BeforeTest(false, assert);
                t.fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests))._BeforeTest(false, assert);
                t.fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests))._BeforeTest(false, assert);
                t.fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests)],
        statics: {
            fromBoxedObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromBoxedObject();
            },
            fromObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromObject();
            },
            fromDateTime: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromDateTime();
            },
            fromChar: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromChar();
            },
            fromByteBase2: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromByteBase2();
            },
            fromByteBase8: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromByteBase8();
            },
            fromByteBase10: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromByteBase10();
            },
            fromByteBase16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromByteBase16();
            },
            fromByteInvalidBase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromByteInvalidBase();
            },
            fromInt16Base2: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt16Base2();
            },
            fromInt16Base8: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt16Base8();
            },
            fromInt16Base10: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt16Base10();
            },
            fromInt16Base16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt16Base16();
            },
            fromInt16InvalidBase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt16InvalidBase();
            },
            fromInt32Base2: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt32Base2();
            },
            fromInt32Base8: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt32Base8();
            },
            fromInt32Base10: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt32Base10();
            },
            fromInt32Base16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt32Base16();
            },
            fromInt32InvalidBase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt32InvalidBase();
            },
            fromInt64Base2: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt64Base2();
            },
            fromInt64Base8: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt64Base8();
            },
            fromInt64Base10: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt64Base10();
            },
            fromInt64Base16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt64Base16();
            },
            fromInt64InvalidBase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt64InvalidBase();
            },
            fromBoolean: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromBoolean();
            },
            fromSByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromSByte();
            },
            fromByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromByte();
            },
            fromInt16Array: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt16Array();
            },
            fromUInt16Array: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromUInt16Array();
            },
            fromInt32Array: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt32Array();
            },
            fromUInt32Array: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromUInt32Array();
            },
            fromInt64Array: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromInt64Array();
            },
            fromUInt64Array: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromUInt64Array();
            },
            fromSingleArray: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromSingleArray();
            },
            fromDoubleArray: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromDoubleArray();
            },
            fromDecimalArray: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromDecimalArray();
            },
            fromDateTimeArray: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromDateTimeArray();
            },
            fromString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromString();
            },
            fromIFormattable: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromIFormattable();
            },
            fromNonIConvertible: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.ConvertTests.ConvertToStringTests).fromNonIConvertible();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests))._BeforeTest(false, assert);
                t.fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests))._BeforeTest(false, assert);
                t.fromByte();
            },
            fromChar: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests))._BeforeTest(false, assert);
                t.fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests))._BeforeTest(false, assert);
                t.fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests))._BeforeTest(false, assert);
                t.fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests))._BeforeTest(false, assert);
                t.fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests))._BeforeTest(false, assert);
                t.fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests))._BeforeTest(false, assert);
                t.fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests))._BeforeTest(false, assert);
                t.fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests))._BeforeTest(false, assert);
                t.fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests))._BeforeTest(false, assert);
                t.fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests))._BeforeTest(false, assert);
                t.fromString();
            },
            fromStringWithBase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests))._BeforeTest(false, assert);
                t.fromStringWithBase();
            },
            fromUInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests))._BeforeTest(false, assert);
                t.fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests))._BeforeTest(false, assert);
                t.fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests))._BeforeTest(false, assert);
                t.fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests))._BeforeTest(false, assert);
                t.fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests))._BeforeTest(false, assert);
                t.fromByte();
            },
            fromChar: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests))._BeforeTest(false, assert);
                t.fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests))._BeforeTest(false, assert);
                t.fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests))._BeforeTest(false, assert);
                t.fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests))._BeforeTest(false, assert);
                t.fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests))._BeforeTest(false, assert);
                t.fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests))._BeforeTest(false, assert);
                t.fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests))._BeforeTest(false, assert);
                t.fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests))._BeforeTest(false, assert);
                t.fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests))._BeforeTest(false, assert);
                t.fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests))._BeforeTest(false, assert);
                t.fromString();
            },
            fromStringWithBase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests))._BeforeTest(false, assert);
                t.fromStringWithBase();
            },
            fromUInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests))._BeforeTest(false, assert);
                t.fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests))._BeforeTest(false, assert);
                t.fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests))._BeforeTest(false, assert);
                t.fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests))._BeforeTest(false, assert);
                t.fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests))._BeforeTest(false, assert);
                t.fromByte();
            },
            fromChar: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests))._BeforeTest(false, assert);
                t.fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests))._BeforeTest(false, assert);
                t.fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests))._BeforeTest(false, assert);
                t.fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests))._BeforeTest(false, assert);
                t.fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests))._BeforeTest(false, assert);
                t.fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests))._BeforeTest(false, assert);
                t.fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests))._BeforeTest(false, assert);
                t.fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests))._BeforeTest(false, assert);
                t.fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests))._BeforeTest(false, assert);
                t.fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests))._BeforeTest(false, assert);
                t.fromString();
            },
            fromStringWithBase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests))._BeforeTest(false, assert);
                t.fromStringWithBase();
            },
            fromUInt16: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests))._BeforeTest(false, assert);
                t.fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests))._BeforeTest(false, assert);
                t.fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests))._BeforeTest(false, assert);
                t.fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CultureInfoTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CultureInfoTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CultureInfoTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            getFormatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CultureInfoTests))._BeforeTest(false, assert);
                t.getFormatWorks();
            },
            invariantWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CultureInfoTests))._BeforeTest(false, assert);
                t.invariantWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DateTimeFormatInfoTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DateTimeFormatInfoTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DateTimeFormatInfoTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            getFormatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DateTimeFormatInfoTests))._BeforeTest(false, assert);
                t.getFormatWorks();
            },
            invariantWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DateTimeFormatInfoTests))._BeforeTest(false, assert);
                t.invariantWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests)],
        statics: {
            testSubtractOperator: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testSubtractOperator();
            },
            testRemainderOperator: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testRemainderOperator();
            },
            testMultiplyOperator: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testMultiplyOperator();
            },
            testDivideOperator: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testDivideOperator();
            },
            testAddOperator: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testAddOperator();
            },
            testAddMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testAddMethod();
            },
            testDivideMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testDivideMethod();
            },
            testMultiplyMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testMultiplyMethod();
            },
            testRemainderMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testRemainderMethod();
            },
            testSubtractMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testSubtractMethod();
            },
            testCeilingMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testCeilingMethod();
            },
            testFloorMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.DecimalMathTests).testFloorMethod();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests)],
        statics: {
            assume: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests))._BeforeTest(false, assert);
                t.assume();
            },
            assumeWithUserMessage: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests))._BeforeTest(false, assert);
                t.assumeWithUserMessage();
            },
            _Assert: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests))._BeforeTest(false, assert);
                t._Assert();
            },
            assertWithUserMessage: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests))._BeforeTest(false, assert);
                t.assertWithUserMessage();
            },
            requires: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests))._BeforeTest(false, assert);
                t.requires();
            },
            requiresWithUserMessage: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests))._BeforeTest(false, assert);
                t.requiresWithUserMessage();
            },
            requiresWithTypeException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests))._BeforeTest(false, assert);
                t.requiresWithTypeException();
            },
            requiredWithTypeExceptionAndUserMessage: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests))._BeforeTest(false, assert);
                t.requiredWithTypeExceptionAndUserMessage();
            },
            forAll: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests))._BeforeTest(false, assert);
                t.forAll();
            },
            forAllWithCollection: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests))._BeforeTest(false, assert);
                t.forAllWithCollection();
            },
            exists: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests))._BeforeTest(false, assert);
                t.exists();
            },
            existsWithCollection: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests))._BeforeTest(false, assert);
                t.existsWithCollection();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.StopwatchTests)],
        statics: {
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.StopwatchTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constantsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.StopwatchTests))._BeforeTest(false, assert);
                t.constantsWorks();
            },
            startNewWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.StopwatchTests))._BeforeTest(false, assert);
                t.startNewWorks();
            },
            startAndStopWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.StopwatchTests))._BeforeTest(false, assert);
                t.startAndStopWork();
            },
            elapsedWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.StopwatchTests))._BeforeTest(false, assert);
                t.elapsedWorks();
            },
            getTimestampWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.StopwatchTests))._BeforeTest(false, assert);
                t.getTimestampWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_EnvironmentTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.EnvironmentTests)],
        statics: {
            newLineIsAStringContainingOnlyTheNewLineChar: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.EnvironmentTests))._BeforeTest(false, assert);
                t.newLineIsAStringContainingOnlyTheNewLineChar();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithIEnumerableInnerExceptionsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests))._BeforeTest(false, assert);
                t.constructorWithIEnumerableInnerExceptionsWorks();
            },
            constructorWithInnerExceptionArrayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests))._BeforeTest(false, assert);
                t.constructorWithInnerExceptionArrayWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndIEnumerableInnerExceptionsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndIEnumerableInnerExceptionsWorks();
            },
            constructorWithMessageAndInnerExceptionArrayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionArrayWorks();
            },
            flattenWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests))._BeforeTest(false, assert);
                t.flattenWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            },
            constructorWithMessageAndParamNameWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndParamNameWorks();
            },
            constructorWithMessageAndParamNameAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndParamNameAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithParamNameWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests))._BeforeTest(false, assert);
                t.constructorWithParamNameWorks();
            },
            constructorWithParamNameAndMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests))._BeforeTest(false, assert);
                t.constructorWithParamNameAndMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithParamNameWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests))._BeforeTest(false, assert);
                t.constructorWithParamNameWorks();
            },
            constructorWithParamNameAndMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests))._BeforeTest(false, assert);
                t.constructorWithParamNameAndMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            },
            constructorWithParamNameAndActualValueAndMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests))._BeforeTest(false, assert);
                t.constructorWithParamNameAndActualValueAndMessageWorks();
            },
            rangeErrorIsConvertedToArgumentOutOfRangeException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests))._BeforeTest(false, assert, 1);
                t.rangeErrorIsConvertedToArgumentOutOfRangeException();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArithmeticExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArithmeticExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArithmeticExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArithmeticExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArithmeticExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArithmeticExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            },
            constructorWithMessageAndParamNameWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndParamNameWorks();
            },
            constructorWithMessageAndCultureNameAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndCultureNameAndInnerExceptionWorks();
            },
            constructorWithParamNameAndCultureNameAndMessage: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests))._BeforeTest(false, assert);
                t.constructorWithParamNameAndCultureNameAndMessage();
            },
            constructorWithMessageAndCultureIdAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndCultureIdAndInnerExceptionWorks();
            },
            constructorWithParamNameAndCultureIdAndMessage: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests))._BeforeTest(false, assert);
                t.constructorWithParamNameAndCultureIdAndMessage();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_DivideByZeroExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            },
            messagePropertyCanBeOverridden: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ExceptionTests))._BeforeTest(false, assert);
                t.messagePropertyCanBeOverridden();
            },
            innerExceptionPropertyCanBeOverridden: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ExceptionTests))._BeforeTest(false, assert);
                t.innerExceptionPropertyCanBeOverridden();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_FormatExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.FormatExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.FormatExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.FormatExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.FormatExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.FormatExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidCastExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidCastExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidCastExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidCastExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidCastExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidCastExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidOperationExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_KeyNotFoundExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotImplementedExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotImplementedExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotImplementedExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotImplementedExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotImplementedExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotImplementedExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotSupportedExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotSupportedExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotSupportedExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotSupportedExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotSupportedExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotSupportedExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NullReferenceExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NullReferenceExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NullReferenceExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NullReferenceExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NullReferenceExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            },
            accessingAFieldOnANullObjectCausesANullReferenceException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NullReferenceExceptionTests))._BeforeTest(false, assert, 1);
                t.accessingAFieldOnANullObjectCausesANullReferenceException();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            cancellationTokenOnlyConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests))._BeforeTest(false, assert);
                t.cancellationTokenOnlyConstructorWorks();
            },
            messageOnlyConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests))._BeforeTest(false, assert);
                t.messageOnlyConstructorWorks();
            },
            messageAndInnerExceptionConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests))._BeforeTest(false, assert);
                t.messageAndInnerExceptionConstructorWorks();
            },
            messageAndCancellationTokenConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests))._BeforeTest(false, assert);
                t.messageAndCancellationTokenConstructorWorks();
            },
            messageAndInnerExceptionAndCancellationTokenConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests))._BeforeTest(false, assert);
                t.messageAndInnerExceptionAndCancellationTokenConstructorWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OutOfMemoryExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OutOfMemoryExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OutOfMemoryExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OutOfMemoryExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OutOfMemoryExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OutOfMemoryExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OverflowExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OverflowExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OverflowExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OverflowExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OverflowExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OverflowExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_PromiseExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.PromiseExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.PromiseExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            argumentsOnlyConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.PromiseExceptionTests))._BeforeTest(false, assert);
                t.argumentsOnlyConstructorWorks();
            },
            argumentsAndMessageConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.PromiseExceptionTests))._BeforeTest(false, assert);
                t.argumentsAndMessageConstructorWorks();
            },
            argumentsAndMessageAndInnerExceptionConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.PromiseExceptionTests))._BeforeTest(false, assert);
                t.argumentsAndMessageAndInnerExceptionConstructorWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RankExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.RankExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.RankExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.RankExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.RankExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_SystemExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.SystemExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.SystemExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.SystemExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.SystemExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.SystemExceptionTests))._BeforeTest(false, assert);
                t.constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TaskCanceledExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TaskCanceledExceptionTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TaskCanceledExceptionTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            messageOnlyConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TaskCanceledExceptionTests))._BeforeTest(false, assert);
                t.messageOnlyConstructorWorks();
            },
            taskOnlyConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TaskCanceledExceptionTests))._BeforeTest(false, assert);
                t.taskOnlyConstructorWorks();
            },
            messageAndInnerExceptionConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TaskCanceledExceptionTests))._BeforeTest(false, assert);
                t.messageAndInnerExceptionConstructorWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ExceptionTests)],
        statics: {
            throwingAndCatchingExceptionsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ExceptionTests))._BeforeTest(false, assert);
                t.throwingAndCatchingExceptionsWorks();
            },
            exceptionOfWrongTypeIsNotCaught: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ExceptionTests))._BeforeTest(false, assert);
                t.exceptionOfWrongTypeIsNotCaught();
            },
            canCatchExceptionAsBaseType: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ExceptionTests))._BeforeTest(false, assert);
                t.canCatchExceptionAsBaseType();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_IComparableTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.IComparableTests)]
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_IEquatableTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.IEquatableTests)]
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqAggregateOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqAggregateOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqAggregateOperators))._BeforeTest(true, assert, 20);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqAggregateOperators).test();
            },
            bridge315: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqAggregateOperators))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqAggregateOperators).bridge315();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqConversionOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqConversionOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqConversionOperators))._BeforeTest(true, assert, 13);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqConversionOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqElementOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqElementOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqElementOperators))._BeforeTest(true, assert, 26);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqElementOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqGenerationOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqGenerationOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqGenerationOperators))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqGenerationOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqGroupingOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqGroupingOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqGroupingOperators))._BeforeTest(true, assert, 3);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqGroupingOperators).test();
            },
            testComplexGrouping: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqGroupingOperators))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqGroupingOperators).testComplexGrouping();
            },
            testAnagrams: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqGroupingOperators))._BeforeTest(true, assert, 2);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqGroupingOperators).testAnagrams();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqJoinOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqJoinOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqJoinOperators))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqJoinOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqMiscellaneousOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqMiscellaneousOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqMiscellaneousOperators))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqMiscellaneousOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqOrderingOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqOrderingOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqOrderingOperators))._BeforeTest(true, assert, 8);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqOrderingOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqPartitioningOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqPartitioningOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqPartitioningOperators))._BeforeTest(true, assert, 8);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqPartitioningOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqProjectionOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqProjectionOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqProjectionOperators))._BeforeTest(true, assert, 8);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqProjectionOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqQuantifiers', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqQuantifiers)],
        statics: {
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqQuantifiers))._BeforeTest(true, assert, 4);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqQuantifiers).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqQueryExecution', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqQueryExecution)],
        statics: {
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqQueryExecution))._BeforeTest(true, assert, 6);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqQueryExecution).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqRestrictionOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqRestrictionOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqRestrictionOperators))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqRestrictionOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqSetOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqSetOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqSetOperators))._BeforeTest(true, assert, 8);
                Bridge.get(Bridge.ClientTest.Linq.TestLinqSetOperators).test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests)],
        statics: {
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.constantsWork();
            },
            absOfDoubleWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.absOfDoubleWorks();
            },
            absOfIntWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.absOfIntWorks();
            },
            absOfLongWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.absOfLongWorks();
            },
            absOfSbyteWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.absOfSbyteWorks();
            },
            absOfShortWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.absOfShortWorks();
            },
            absOfFloatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.absOfFloatWorks();
            },
            absOfDecimalWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.absOfDecimalWorks();
            },
            acosWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.acosWorks();
            },
            asinWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.asinWorks();
            },
            atanWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.atanWorks();
            },
            atan2Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.atan2Works();
            },
            cosWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.cosWorks();
            },
            divRemWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.divRemWorks();
            },
            expWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.expWorks();
            },
            floorOfDoubleWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.floorOfDoubleWorks();
            },
            floorOfDecimalWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.floorOfDecimalWorks();
            },
            logWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.logWorks();
            },
            maxOfByteWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.maxOfByteWorks();
            },
            maxOfDecimalWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.maxOfDecimalWorks();
            },
            maxOfDoubleWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.maxOfDoubleWorks();
            },
            maxOfShortWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.maxOfShortWorks();
            },
            maxOfIntWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.maxOfIntWorks();
            },
            maxOfLongWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.maxOfLongWorks();
            },
            maxOfSByteWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.maxOfSByteWorks();
            },
            maxOfFloatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.maxOfFloatWorks();
            },
            maxOfUShortWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.maxOfUShortWorks();
            },
            maxOfUIntWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.maxOfUIntWorks();
            },
            maxOfULongWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.maxOfULongWorks();
            },
            minOfByteWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.minOfByteWorks();
            },
            minOfDecimalWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.minOfDecimalWorks();
            },
            minOfDoubleWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.minOfDoubleWorks();
            },
            minOfShortWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.minOfShortWorks();
            },
            minOfIntWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.minOfIntWorks();
            },
            minOfLongWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.minOfLongWorks();
            },
            minOfSByteWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.minOfSByteWorks();
            },
            minOfFloatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.minOfFloatWorks();
            },
            minOfUShortWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.minOfUShortWorks();
            },
            minOfUIntWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.minOfUIntWorks();
            },
            minOfULongWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.minOfULongWorks();
            },
            powWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.powWorks();
            },
            randomWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.randomWorks();
            },
            roundOfDoubleWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.roundOfDoubleWorks();
            },
            roundDecimalWithModeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.roundDecimalWithModeWorks();
            },
            roundDecimalWithPrecisionAndModeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.roundDecimalWithPrecisionAndModeWorks();
            },
            roundDoubleWithModeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.roundDoubleWithModeWorks();
            },
            roundDoubleWithPrecisionAndModeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.roundDoubleWithPrecisionAndModeWorks();
            },
            jsRoundWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.jsRoundWorks();
            },
            iEEERemainderWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.iEEERemainderWorks();
            },
            sinWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.sinWorks();
            },
            sqrtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.sqrtWorks();
            },
            tanWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests))._BeforeTest(false, assert);
                t.tanWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            lengthWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests))._BeforeTest(false, assert);
                t.lengthWorks();
            },
            getValueWorksForUninitializedElement: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests))._BeforeTest(false, assert);
                t.getValueWorksForUninitializedElement();
            },
            getValueByIndexWorksForUninitializedElement: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests))._BeforeTest(false, assert);
                t.getValueByIndexWorksForUninitializedElement();
            },
            settingValueByIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests))._BeforeTest(false, assert);
                t.settingValueByIndexWorks();
            },
            setValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests))._BeforeTest(false, assert);
                t.setValueWorks();
            },
            getValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests))._BeforeTest(false, assert);
                t.getValueWorks();
            },
            gettingValueByIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests))._BeforeTest(false, assert);
                t.gettingValueByIndexWorks();
            },
            rankWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests))._BeforeTest(false, assert);
                t.rankWorks();
            },
            getValueWithIndexOutOfRangeThrowsAnException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests))._BeforeTest(false, assert);
                t.getValueWithIndexOutOfRangeThrowsAnException();
            },
            setValueWithIndexOutOfRangeThrowsAnException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests))._BeforeTest(false, assert);
                t.setValueWithIndexOutOfRangeThrowsAnException();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            convertingToNullableWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.convertingToNullableWorks();
            },
            hasValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.hasValueWorks();
            },
            boxingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.boxingWorks();
            },
            unboxingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.unboxingWorks();
            },
            valueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.valueWorks();
            },
            unboxingValueOfWrongTypeThrowsAnException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.unboxingValueOfWrongTypeThrowsAnException();
            },
            getValueOrDefaultWithArgWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.getValueOrDefaultWithArgWorks();
            },
            liftedEqualityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedEqualityWorks();
            },
            liftedInequalityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedInequalityWorks();
            },
            liftedLessThanWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedLessThanWorks();
            },
            liftedGreaterThanWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedGreaterThanWorks();
            },
            liftedLessThanOrEqualWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedLessThanOrEqualWorks();
            },
            liftedGreaterThanOrEqualWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedGreaterThanOrEqualWorks();
            },
            liftedSubtractionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedSubtractionWorks();
            },
            liftedAdditionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedAdditionWorks();
            },
            liftedModWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedModWorks();
            },
            liftedFloatingPointDivisionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedFloatingPointDivisionWorks();
            },
            liftedIntegerDivisionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedIntegerDivisionWorks();
            },
            liftedMultiplicationWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedMultiplicationWorks();
            },
            liftedBitwiseAndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedBitwiseAndWorks();
            },
            liftedBitwiseOrWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedBitwiseOrWorks();
            },
            liftedBitwiseXorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedBitwiseXorWorks();
            },
            liftedLeftShiftWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedLeftShiftWorks();
            },
            liftedSignedRightShiftWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedSignedRightShiftWorks();
            },
            liftedUnsignedRightShiftWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedUnsignedRightShiftWorks();
            },
            liftedBooleanAndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedBooleanAndWorks();
            },
            liftedBooleanOrWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedBooleanOrWorks();
            },
            liftedBooleanNotWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedBooleanNotWorks();
            },
            liftedNegationWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedNegationWorks();
            },
            liftedUnaryPlusWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedUnaryPlusWorks();
            },
            liftedOnesComplementWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.liftedOnesComplementWorks();
            },
            coalesceWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests))._BeforeTest(false, assert);
                t.coalesceWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NumberFormatInfoTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NumberFormatInfoTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NumberFormatInfoTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            getFormatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NumberFormatInfoTests))._BeforeTest(false, assert);
                t.getFormatWorks();
            },
            invariantWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NumberFormatInfoTests))._BeforeTest(false, assert);
                t.invariantWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.PropertyAccessorTests)],
        statics: {
            accessorsCanBeInvokedInstance: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.PropertyAccessorTests))._BeforeTest(false, assert);
                t.accessorsCanBeInvokedInstance();
            },
            accessorsCanBeInvokedStatic: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.PropertyAccessorTests))._BeforeTest(false, assert);
                t.accessorsCanBeInvokedStatic();
            },
            accessorsCanBeInvokedGeneric: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.PropertyAccessorTests))._BeforeTest(false, assert);
                t.accessorsCanBeInvokedGeneric();
            },
            accessorsCanBeInvokedGenericStatic: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.PropertyAccessorTests))._BeforeTest(false, assert);
                t.accessorsCanBeInvokedGenericStatic();
            },
            baseAccessorsCanBeInvoked: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.PropertyAccessorTests))._BeforeTest(false, assert);
                t.baseAccessorsCanBeInvoked();
            },
            baseAccessorsCanBeInvokedGeneric: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.PropertyAccessorTests))._BeforeTest(false, assert);
                t.baseAccessorsCanBeInvokedGeneric();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultValueIsFalse: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests))._BeforeTest(false, assert);
                t.defaultValueIsFalse();
            },
            creatingInstanceReturnsFalse: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests))._BeforeTest(false, assert);
                t.creatingInstanceReturnsFalse();
            },
            defaultConstructorReturnsFalse: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests))._BeforeTest(false, assert);
                t.defaultConstructorReturnsFalse();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests))._BeforeTest(false, assert);
                t.getHashCodeWorks();
            },
            objectEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests))._BeforeTest(false, assert);
                t.objectEqualsWorks();
            },
            boolEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests))._BeforeTest(false, assert);
                t.boolEqualsWorks();
            },
            logicalExclusiveOrWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests))._BeforeTest(false, assert);
                t.logicalExclusiveOrWorks();
            },
            logicalAndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests))._BeforeTest(false, assert);
                t.logicalAndWorks();
            },
            logicalNegationWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests))._BeforeTest(false, assert);
                t.logicalNegationWorks();
            },
            conditionalOperatorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests))._BeforeTest(false, assert);
                t.conditionalOperatorWorks();
            },
            conditionalAndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests))._BeforeTest(false, assert);
                t.conditionalAndWorks();
            },
            conditionalOrWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests))._BeforeTest(false, assert);
                t.conditionalOrWorks();
            },
            equalityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests))._BeforeTest(false, assert);
                t.equalityWorks();
            },
            inequalityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests))._BeforeTest(false, assert);
                t.inequalityWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests))._BeforeTest(false, assert);
                t.castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests))._BeforeTest(false, assert);
                t.defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests))._BeforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests))._BeforeTest(false, assert);
                t.constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests))._BeforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests))._BeforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests))._BeforeTest(false, assert);
                t.tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests))._BeforeTest(false, assert);
                t.parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests))._BeforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests))._BeforeTest(false, assert);
                t.toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests))._BeforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests))._BeforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests))._BeforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests))._BeforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests))._BeforeTest(false, assert);
                t.iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests)],
        statics: {
            typePropertiesAreInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.typePropertiesAreInt32();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.castsWork();
            },
            defaultValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.defaultValueWorks();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.constantsWork();
            },
            charComparisonWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.charComparisonWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.parseWorks();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            toStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.toStringWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.compareToWorks();
            },
            isLowerWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.isLowerWorks();
            },
            isUpperWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.isUpperWorks();
            },
            toLowerWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.toLowerWorks();
            },
            toUpperWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.toUpperWorks();
            },
            isDigitWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.isDigitWorks();
            },
            isWhiteSpaceWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.isWhiteSpaceWorks();
            },
            isDigitWithStringAndIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.isDigitWithStringAndIndexWorks();
            },
            isWhiteSpaceWithStringAndIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests))._BeforeTest(false, assert);
                t.isWhiteSpaceWithStringAndIndexWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.defaultValueIs0();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.constantsWork();
            },
            convertingConstructorsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.convertingConstructorsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            addWithStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.addWithStringWorks();
            },
            conversionsToDecimalWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.conversionsToDecimalWork();
            },
            conversionsFromDecimalWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.conversionsFromDecimalWork();
            },
            operatorsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.operatorsWork();
            },
            addWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.addWorks();
            },
            ceilingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.ceilingWorks();
            },
            divideWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.divideWorks();
            },
            floorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.floorWorks();
            },
            remainderWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.remainderWorks();
            },
            multiplyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.multiplyWorks();
            },
            negateWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.negateWorks();
            },
            roundWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.roundWorks();
            },
            roundWithModeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.roundWithModeWorks();
            },
            subtractWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.subtractWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.getHashCodeWorks();
            },
            objectEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.objectEqualsWorks();
            },
            decimalEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.decimalEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.compareToWorks();
            },
            fullCoalesceWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.fullCoalesceWorks();
            },
            shortCoalesceWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests))._BeforeTest(false, assert);
                t.shortCoalesceWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.defaultValueIs0();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.constantsWork();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            toStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.toStringWorks();
            },
            toExponentialWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.toExponentialWorks();
            },
            toExponentialWithFractionalDigitsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.toExponentialWithFractionalDigitsWorks();
            },
            toFixed: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.toFixed();
            },
            toFixedWithFractionalDigitsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.toFixedWithFractionalDigitsWorks();
            },
            toPrecisionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.toPrecisionWorks();
            },
            toPrecisionWithPrecisionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.toPrecisionWithPrecisionWorks();
            },
            isPositiveInfinityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.isPositiveInfinityWorks();
            },
            isNegativeInfinityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.isNegativeInfinityWorks();
            },
            isInfinityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.isInfinityWorks();
            },
            isFiniteWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.isFiniteWorks();
            },
            isNaNWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.isNaNWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.getHashCodeWorks();
            },
            objectEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.objectEqualsWorks();
            },
            doubleEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.doubleEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests))._BeforeTest(false, assert);
                t.compareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_EnumTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.EnumTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.EnumTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            firstValueOfEnumIsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.EnumTests))._BeforeTest(false, assert);
                t.firstValueOfEnumIsZero();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.EnumTests))._BeforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.EnumTests))._BeforeTest(false, assert);
                t.equalsWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests))._BeforeTest(false, assert);
                t.castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests))._BeforeTest(false, assert);
                t.defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests))._BeforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests))._BeforeTest(false, assert);
                t.constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests))._BeforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests))._BeforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests))._BeforeTest(false, assert);
                t.tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests))._BeforeTest(false, assert);
                t.parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests))._BeforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests))._BeforeTest(false, assert);
                t.toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests))._BeforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests))._BeforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests))._BeforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests))._BeforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests))._BeforeTest(false, assert);
                t.iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.castsWork();
            },
            typeIsWorksForInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.typeIsWorksForInt32();
            },
            typeAsWorksForInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.typeAsWorksForInt32();
            },
            unboxingWorksForInt32: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.unboxingWorksForInt32();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.iComparableCompareToWorks();
            },
            integerDivisionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.integerDivisionWorks();
            },
            integerModuloWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.integerModuloWorks();
            },
            integerDivisionByZeroThrowsDivideByZeroException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.integerDivisionByZeroThrowsDivideByZeroException();
            },
            doublesAreTruncatedWhenConvertedToIntegers: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests))._BeforeTest(false, assert);
                t.doublesAreTruncatedWhenConvertedToIntegers();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.parseWorks();
            },
            castingOfLargeDoublesToInt64Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.castingOfLargeDoublesToInt64Works();
            },
            divisionOfLargeInt64Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.divisionOfLargeInt64Works();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests))._BeforeTest(false, assert);
                t.iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorReturnsTodaysDate: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.defaultConstructorReturnsTodaysDate();
            },
            creatingInstanceReturnsTodaysDate: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.creatingInstanceReturnsTodaysDate();
            },
            millisecondSinceEpochConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.millisecondSinceEpochConstructorWorks();
            },
            stringConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.stringConstructorWorks();
            },
            yMDConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.yMDConstructorWorks();
            },
            yMDHConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.yMDHConstructorWorks();
            },
            yMDHNConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.yMDHNConstructorWorks();
            },
            yMDHNSConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.yMDHNSConstructorWorks();
            },
            yMDHNSUConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.yMDHNSUConstructorWorks();
            },
            nowWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.nowWorks();
            },
            uTCNowWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.uTCNowWorks();
            },
            toUniversalWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.toUniversalWorks();
            },
            toLocalWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.toLocalWorks();
            },
            todayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.todayWorks();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.formatWorks();
            },
            localeFormatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.localeFormatWorks();
            },
            getFullYearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getFullYearWorks();
            },
            getMonthWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getMonthWorks();
            },
            getDateWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getDateWorks();
            },
            getHoursWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getHoursWorks();
            },
            getMinutesWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getMinutesWorks();
            },
            getSecondsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getSecondsWorks();
            },
            getMillisecondsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getMillisecondsWorks();
            },
            getDayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getDayWorks();
            },
            getTimeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getTimeWorks();
            },
            valueOfWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.valueOfWorks();
            },
            getTimezoneOffsetWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getTimezoneOffsetWorks();
            },
            getUTCFullYearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getUTCFullYearWorks();
            },
            getUtcMonthWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getUtcMonthWorks();
            },
            getUTCDateWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getUTCDateWorks();
            },
            getUTCHoursWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getUTCHoursWorks();
            },
            getUTCMinutesWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getUTCMinutesWorks();
            },
            getUTCSecondsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getUTCSecondsWorks();
            },
            getUTCMillisecondsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getUTCMillisecondsWorks();
            },
            getUTCDayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getUTCDayWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.parseWorks();
            },
            parseExactWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.parseExactWorks();
            },
            parseExactWithCultureWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.parseExactWithCultureWorks();
            },
            parseExactUTCWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.parseExactUTCWorks();
            },
            parseExactUTCWithCultureWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.parseExactUTCWithCultureWorks();
            },
            toDateStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.toDateStringWorks();
            },
            toTimeStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.toTimeStringWorks();
            },
            toUTCStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.toUTCStringWorks();
            },
            toLocaleDateStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.toLocaleDateStringWorks();
            },
            toLocaleTimeStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.toLocaleTimeStringWorks();
            },
            subtractingDatesWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.subtractingDatesWorks();
            },
            subtractMethodReturningTimeSpanWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.subtractMethodReturningTimeSpanWorks();
            },
            dateEqualityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.dateEqualityWorks();
            },
            dateInequalityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.dateInequalityWorks();
            },
            dateLessThanWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.dateLessThanWorks();
            },
            dateLessEqualWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.dateLessEqualWorks();
            },
            dateGreaterThanWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.dateGreaterThanWorks();
            },
            dateGreaterEqualWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.dateGreaterEqualWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.equalsWorks();
            },
            dateTimeEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.dateTimeEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(false, assert);
                t.compareToWorks();
            },
            dateTimes: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests))._BeforeTest(true, assert, 1);
                Bridge.get(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).dateTimes();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            canGetHashCodeForObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests))._BeforeTest(false, assert);
                t.canGetHashCodeForObject();
            },
            repeatedCallsToGetHashCodeReturnsSameValue: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests))._BeforeTest(false, assert);
                t.repeatedCallsToGetHashCodeReturnsSameValue();
            },
            objectIsEqualToItself: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests))._BeforeTest(false, assert);
                t.objectIsEqualToItself();
            },
            objectIsNotEqualToOtherObject: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests))._BeforeTest(false, assert);
                t.objectIsNotEqualToOtherObject();
            },
            staticEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests))._BeforeTest(false, assert);
                t.staticEqualsWorks();
            },
            referenceEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests))._BeforeTest(false, assert);
                t.referenceEqualsWorks();
            },
            toStringOverride: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests))._BeforeTest(false, assert);
                t.toStringOverride();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests))._BeforeTest(false, assert);
                t.castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests))._BeforeTest(false, assert);
                t.defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests))._BeforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests))._BeforeTest(false, assert);
                t.constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests))._BeforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests))._BeforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests))._BeforeTest(false, assert);
                t.tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests))._BeforeTest(false, assert);
                t.parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests))._BeforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests))._BeforeTest(false, assert);
                t.toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests))._BeforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests))._BeforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests))._BeforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests))._BeforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests))._BeforeTest(false, assert);
                t.iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.defaultValueIs0();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.constantsWork();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            toStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.toStringWorks();
            },
            toExponentialWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.toExponentialWorks();
            },
            toExponentialWithFractionalDigitsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.toExponentialWithFractionalDigitsWorks();
            },
            toFixed: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.toFixed();
            },
            toFixedWithFractionalDigitsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.toFixedWithFractionalDigitsWorks();
            },
            toPrecisionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.toPrecisionWorks();
            },
            toPrecisionWithPrecisionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.toPrecisionWithPrecisionWorks();
            },
            isPositiveInfinityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.isPositiveInfinityWorks();
            },
            isNegativeInfinityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.isNegativeInfinityWorks();
            },
            isInfinityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.isInfinityWorks();
            },
            isFiniteWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.isFiniteWorks();
            },
            isNaNWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.isNaNWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.equalsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests))._BeforeTest(false, assert);
                t.compareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            copyConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.copyConstructorWorks();
            },
            charAndCountConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.charAndCountConstructorWorks();
            },
            charArrayConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.charArrayConstructorWorks();
            },
            emptyFieldWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.emptyFieldWorks();
            },
            lengthPropertyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.lengthPropertyWorks();
            },
            charAtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.charAtWorks();
            },
            charCodeAtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.charCodeAtWorks();
            },
            compareWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.compareWorks();
            },
            compareWithIgnoreCaseArgWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.compareWithIgnoreCaseArgWorks();
            },
            concatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.concatWorks();
            },
            concatWithObjectsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.concatWithObjectsWorks();
            },
            endsWithCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.endsWithCharWorks();
            },
            endsWithStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.endsWithStringWorks();
            },
            staticEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.staticEqualsWorks();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.formatWorks();
            },
            formatWorksWithIFormattable: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.formatWorksWithIFormattable();
            },
            formatCanUseEscapedBraces: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.formatCanUseEscapedBraces();
            },
            fromCharCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.fromCharCodeWorks();
            },
            indexOfCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.indexOfCharWorks();
            },
            indexOfStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.indexOfStringWorks();
            },
            indexOfCharWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.indexOfCharWithStartIndexWorks();
            },
            indexOfCharWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.indexOfCharWithStartIndexAndCountWorks();
            },
            indexOfStringWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.indexOfStringWithStartIndexWorks();
            },
            indexOfStringWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.indexOfStringWithStartIndexAndCountWorks();
            },
            indexOfAnyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.indexOfAnyWorks();
            },
            indexOfAnyWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.indexOfAnyWithStartIndexWorks();
            },
            indexOfAnyWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.indexOfAnyWithStartIndexAndCountWorks();
            },
            insertWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.insertWorks();
            },
            isNullOrEmptyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.isNullOrEmptyWorks();
            },
            lastIndexOfCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.lastIndexOfCharWorks();
            },
            lastIndexOfStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.lastIndexOfStringWorks();
            },
            lastIndexOfCharWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.lastIndexOfCharWithStartIndexWorks();
            },
            lastIndexOfStringWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.lastIndexOfStringWithStartIndexWorks();
            },
            lastIndexOfCharWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.lastIndexOfCharWithStartIndexAndCountWorks();
            },
            lastIndexOfStringWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.lastIndexOfStringWithStartIndexAndCountWorks();
            },
            lastIndexOfAnyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.lastIndexOfAnyWorks();
            },
            lastIndexOfAnyWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.lastIndexOfAnyWithStartIndexWorks();
            },
            lastIndexOfAnyWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.lastIndexOfAnyWithStartIndexAndCountWorks();
            },
            localeCompareWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.localeCompareWorks();
            },
            matchWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.matchWorks();
            },
            padLeftWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.padLeftWorks();
            },
            padLeftWithCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.padLeftWithCharWorks();
            },
            padRightWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.padRightWorks();
            },
            padRightWithCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.padRightWithCharWorks();
            },
            removeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.removeWorks();
            },
            removeWithCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.removeWithCountWorks();
            },
            replaceWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.replaceWorks();
            },
            replaceCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.replaceCharWorks();
            },
            replaceRegexWithReplaceTextWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.replaceRegexWithReplaceTextWorks();
            },
            replaceRegexWithReplaceCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.replaceRegexWithReplaceCallbackWorks();
            },
            searchWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.searchWorks();
            },
            sliceWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.sliceWorks();
            },
            splitWithStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.splitWithStringWorks();
            },
            splitWithCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.splitWithCharWorks();
            },
            jsSplitWithStringAndLimitWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.jsSplitWithStringAndLimitWorks();
            },
            jsSplitWithCharAndLimitWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.jsSplitWithCharAndLimitWorks();
            },
            splitWithCharsAndLimitWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.splitWithCharsAndLimitWorks();
            },
            splitWithCharsAndStringSplitOptionsAndLimitWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.splitWithCharsAndStringSplitOptionsAndLimitWorks();
            },
            splitWithRegexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.splitWithRegexWorks();
            },
            someNetSplitTests: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.someNetSplitTests();
            },
            splitWithCharsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.splitWithCharsWorks();
            },
            splitWithStringsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.splitWithStringsWorks();
            },
            splitWithStringsAndLimitWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.splitWithStringsAndLimitWorks();
            },
            startsWithCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.startsWithCharWorks();
            },
            startsWithStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.startsWithStringWorks();
            },
            substrWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.substrWorks();
            },
            substringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.substringWorks();
            },
            jsSubstringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.jsSubstringWorks();
            },
            toLowerCaseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.toLowerCaseWorks();
            },
            toUpperCaseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.toUpperCaseWorks();
            },
            toLowerWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.toLowerWorks();
            },
            toUpperWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.toUpperWorks();
            },
            trimWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.trimWorks();
            },
            trimCharsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.trimCharsWorks();
            },
            trimStartCharsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.trimStartCharsWorks();
            },
            trimEndCharsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.trimEndCharsWorks();
            },
            trimStartWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.trimStartWorks();
            },
            trimEndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.trimEndWorks();
            },
            stringEqualityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.stringEqualityWorks();
            },
            stringInequalityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.stringInequalityWorks();
            },
            stringIndexingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.stringIndexingWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.getHashCodeWorks();
            },
            instanceEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.instanceEqualsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            stringEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.stringEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.iComparableCompareToWorks();
            },
            joinWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.joinWorks();
            },
            containsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.containsWorks();
            },
            toCharArrayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(false, assert);
                t.toCharArrayWorks();
            },
            strings: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.SimpleTypes.StringTests).strings();
            },
            enumerable: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests))._BeforeTest(true, assert, 5);
                Bridge.get(Bridge.ClientTest.SimpleTypes.StringTests).enumerable();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TestVersion)],
        statics: {
            testConstructors: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TestVersion))._BeforeTest(true, assert, 42);
                Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testConstructors();
            },
            testCloneCompare: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TestVersion))._BeforeTest(true, assert, 13);
                Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testCloneCompare();
            },
            testEqualsGetHashCode: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TestVersion))._BeforeTest(true, assert, 9);
                Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testEqualsGetHashCode();
            },
            testToString: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TestVersion))._BeforeTest(true, assert, 10);
                Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testToString();
            },
            testParse: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TestVersion))._BeforeTest(true, assert, 6);
                Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testParse();
            },
            testOperators: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TestVersion))._BeforeTest(true, assert, 30);
                Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testOperators();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            defaultValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.defaultValueWorks();
            },
            zeroWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.zeroWorks();
            },
            creatingInstanceReturnsTimeSpanWithZeroValue: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.creatingInstanceReturnsTimeSpanWithZeroValue();
            },
            parameterConstructorsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.parameterConstructorsWorks();
            },
            factoryMethodsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.factoryMethodsWork();
            },
            propertiesWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.propertiesWork();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.compareToWorks();
            },
            compareWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.compareWorks();
            },
            staticEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.staticEqualsWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.equalsWorks();
            },
            toStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.toStringWorks();
            },
            addWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.addWorks();
            },
            subtractWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.subtractWorks();
            },
            durationWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.durationWorks();
            },
            negateWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.negateWorks();
            },
            comparisonOperatorsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.comparisonOperatorsWork();
            },
            additionOperatorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.additionOperatorWorks();
            },
            subtractionOperatorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.subtractionOperatorWorks();
            },
            unaryPlusWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.unaryPlusWorks();
            },
            unaryMinusWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests))._BeforeTest(false, assert);
                t.unaryMinusWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests)],
        statics: {
            tuple1Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests))._BeforeTest(false, assert);
                t.tuple1Works();
            },
            tuple2Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests))._BeforeTest(false, assert);
                t.tuple2Works();
            },
            tuple3Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests))._BeforeTest(false, assert);
                t.tuple3Works();
            },
            tuple4Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests))._BeforeTest(false, assert);
                t.tuple4Works();
            },
            tuple5Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests))._BeforeTest(false, assert);
                t.tuple5Works();
            },
            tuple6Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests))._BeforeTest(false, assert);
                t.tuple6Works();
            },
            tuple7Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests))._BeforeTest(false, assert);
                t.tuple7Works();
            },
            tuple8Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests))._BeforeTest(false, assert);
                t.tuple8Works();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests))._BeforeTest(false, assert);
                t.castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests))._BeforeTest(false, assert);
                t.defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests))._BeforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests))._BeforeTest(false, assert);
                t.constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests))._BeforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests))._BeforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests))._BeforeTest(false, assert);
                t.tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests))._BeforeTest(false, assert);
                t.parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests))._BeforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests))._BeforeTest(false, assert);
                t.toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests))._BeforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests))._BeforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests))._BeforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests))._BeforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests))._BeforeTest(false, assert);
                t.iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests))._BeforeTest(false, assert);
                t.castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests))._BeforeTest(false, assert);
                t.defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests))._BeforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests))._BeforeTest(false, assert);
                t.constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests))._BeforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests))._BeforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests))._BeforeTest(false, assert);
                t.tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests))._BeforeTest(false, assert);
                t.parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests))._BeforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests))._BeforeTest(false, assert);
                t.toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests))._BeforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests))._BeforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests))._BeforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests))._BeforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests))._BeforeTest(false, assert);
                t.iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.defaultConstructorReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.iFormattableToStringWorks();
            },
            castingOfLargeValuesToUInt64Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.castingOfLargeValuesToUInt64Works();
            },
            divisionOfLargeUInt64Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.divisionOfLargeUInt64Works();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests))._BeforeTest(false, assert);
                t.iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            stringOnlyConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTests))._BeforeTest(false, assert);
                t.stringOnlyConstructorWorks();
            },
            constructorWithFlagsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTests))._BeforeTest(false, assert);
                t.constructorWithFlagsWorks();
            },
            globalFlagWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTests))._BeforeTest(false, assert);
                t.globalFlagWorks();
            },
            ignoreCaseFlagWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTests))._BeforeTest(false, assert);
                t.ignoreCaseFlagWorks();
            },
            multilineFlagWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTests))._BeforeTest(false, assert);
                t.multilineFlagWorks();
            },
            patternPropertyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTests))._BeforeTest(false, assert);
                t.patternPropertyWorks();
            },
            sourcePropertyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTests))._BeforeTest(false, assert);
                t.sourcePropertyWorks();
            },
            execWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTests))._BeforeTest(false, assert);
                t.execWorks();
            },
            lastIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTests))._BeforeTest(false, assert);
                t.lastIndexWorks();
            },
            testWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTests))._BeforeTest(false, assert);
                t.testWorks();
            },
            escapeWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTests))._BeforeTest(true, assert);
                Bridge.get(Bridge.ClientTest.Text.RegularExpressions.RegexTests).escapeWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.defaultConstructorWorks();
            },
            constructorWithCapacityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.constructorWithCapacityWorks();
            },
            initialTextConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.initialTextConstructorWorks();
            },
            initialTextConstructorWithCapacityWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.initialTextConstructorWithCapacityWorks();
            },
            substringConstructorWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.substringConstructorWorks();
            },
            appendBoolWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.appendBoolWorks();
            },
            appendCharWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.appendCharWorks();
            },
            appendIntWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.appendIntWorks();
            },
            appendDoubleWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.appendDoubleWorks();
            },
            appendObjectWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.appendObjectWorks();
            },
            appendStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.appendStringWorks();
            },
            appendLineWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.appendLineWorks();
            },
            appendLineStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.appendLineStringWorks();
            },
            clearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.clearWorks();
            },
            toStringWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.toStringWorks();
            },
            lengthPropertyWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(false, assert);
                t.lengthPropertyWorks();
            },
            stringBuilders: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests))._BeforeTest(true, assert, 21);
                Bridge.get(Bridge.ClientTest.Text.StringBuilderTests).stringBuilders();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.AsyncTests)],
        statics: {
            asyncVoid: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.AsyncTests))._BeforeTest(false, assert, 3);
                t.asyncVoid();
            },
            asyncTask: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.AsyncTests))._BeforeTest(false, assert, 7);
                t.asyncTask();
            },
            asyncTaskBodyThrowsException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.AsyncTests))._BeforeTest(false, assert, 8);
                t.asyncTaskBodyThrowsException();
            },
            awaitTaskThatFaults: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.AsyncTests))._BeforeTest(false, assert, 8);
                t.awaitTaskThatFaults();
            },
            aggregateExceptionsAreUnwrappedWhenAwaitingTask: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.AsyncTests))._BeforeTest(false, assert, 2);
                t.aggregateExceptionsAreUnwrappedWhenAwaitingTask();
            },
            asyncTaskThatReturnsValue: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.AsyncTests))._BeforeTest(false, assert, 8);
                t.asyncTaskThatReturnsValue();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests)],
        statics: {
            typePropertiesForCancellationTokenSourceAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.typePropertiesForCancellationTokenSourceAreCorrect();
            },
            typePropertiesForCancellationTokenAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.typePropertiesForCancellationTokenAreCorrect();
            },
            typePropertiesForCancellationTokenRegistrationAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.typePropertiesForCancellationTokenRegistrationAreCorrect();
            },
            cancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.cancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe();
            },
            cancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.cancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe();
            },
            cancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.cancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled();
            },
            cancellationTokenNoneIsNotCancelledAndCannotBe: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.cancellationTokenNoneIsNotCancelledAndCannotBe();
            },
            creatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.creatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled();
            },
            activatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.activatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled();
            },
            canBeCanceledIsTrueForTokenCreatedForCancellationTokenSource: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.canBeCanceledIsTrueForTokenCreatedForCancellationTokenSource();
            },
            isCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.isCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod();
            },
            throwIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.throwIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled();
            },
            cancelWithoutArgumentsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.cancelWithoutArgumentsWorks();
            },
            cancelWorksWhenThrowOnFirstExceptionIsFalse: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.cancelWorksWhenThrowOnFirstExceptionIsFalse();
            },
            cancelWorksWhenThrowOnFirstExceptionIsTrue: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.cancelWorksWhenThrowOnFirstExceptionIsTrue();
            },
            registerOnACancelledSourceWithoutContextInvokesTheCallback: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.registerOnACancelledSourceWithoutContextInvokesTheCallback();
            },
            registerWithArgumentOnACancelledSourceInvokesTheCallback: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.registerWithArgumentOnACancelledSourceInvokesTheCallback();
            },
            registerOnACancelledSourceWithoutContextRethrowsAThrownException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.registerOnACancelledSourceWithoutContextRethrowsAThrownException();
            },
            registerOnACancelledSourceWithContextRethrowsAThrownException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.registerOnACancelledSourceWithContextRethrowsAThrownException();
            },
            registerOverloadsWithUseSynchronizationContextWork: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.registerOverloadsWithUseSynchronizationContextWork();
            },
            registerOnCancellationTokenCreatedNonCancelledDoesNothing: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.registerOnCancellationTokenCreatedNonCancelledDoesNothing();
            },
            registerOnCancellationTokenCreatedCancelledInvokesTheActionImmediately: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.registerOnCancellationTokenCreatedCancelledInvokesTheActionImmediately();
            },
            duplicateCancelDoesNotCauseCallbacksToBeCalledTwice: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.duplicateCancelDoesNotCauseCallbacksToBeCalledTwice();
            },
            registrationsCanBeCompared: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.registrationsCanBeCompared();
            },
            registrationsCanBeUnregistered: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.registrationsCanBeUnregistered();
            },
            creatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.creatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm();
            },
            linkedSourceWithTwoTokensWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.linkedSourceWithTwoTokensWorks();
            },
            linkedSourceWithThreeTokensWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests))._BeforeTest(false, assert);
                t.linkedSourceWithThreeTokensWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.PromiseTests)],
        statics: {
            taskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.PromiseTests))._BeforeTest(false, assert, 7);
                t.taskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes();
            },
            taskFromPromiseWithResultFactoryWorksWhenPromiseCompletes: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.PromiseTests))._BeforeTest(false, assert, 7);
                t.taskFromPromiseWithResultFactoryWorksWhenPromiseCompletes();
            },
            taskFromPromiseWorksWhenPromiseFails: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.PromiseTests))._BeforeTest(false, assert, 10);
                t.taskFromPromiseWorksWhenPromiseFails();
            },
            completingPromiseCanBeAwaited: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.PromiseTests))._BeforeTest(false, assert, 3);
                t.completingPromiseCanBeAwaited();
            },
            failingPromiseCanBeAwaited: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.PromiseTests))._BeforeTest(false, assert, 4);
                t.failingPromiseCanBeAwaited();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests)],
        statics: {
            taskCompletionSourceTypePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 2);
                t.taskCompletionSourceTypePropertiesAreCorrect();
            },
            taskTypePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 5);
                t.taskTypePropertiesAreCorrect();
            },
            taskCompletionSourceWorksWhenSettingResult: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 10);
                t.taskCompletionSourceWorksWhenSettingResult();
            },
            taskCompletionSourceWorksWhenSettingASingleException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 12);
                t.taskCompletionSourceWorksWhenSettingASingleException();
            },
            taskCompletionSourceWorksWhenSettingTwoExceptions: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 14);
                t.taskCompletionSourceWorksWhenSettingTwoExceptions();
            },
            taskCompletionSourceWorksWhenCancelling: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 10);
                t.taskCompletionSourceWorksWhenCancelling();
            },
            cancelledTaskThrowsTaskCanceledExceptionWhenAwaited: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 2);
                t.cancelledTaskThrowsTaskCanceledExceptionWhenAwaited();
            },
            cancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 3);
                t.cancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed();
            },
            setResultFailsWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 1);
                t.setResultFailsWhenTheTaskIsCompleted();
            },
            setCanceledFailsWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 1);
                t.setCanceledFailsWhenTheTaskIsCompleted();
            },
            setExceptionFailsWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 1);
                t.setExceptionFailsWhenTheTaskIsCompleted();
            },
            completedTaskHasCorrectIsXProperties: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 3);
                t.completedTaskHasCorrectIsXProperties();
            },
            cancelledTaskHasCorrectIsXProperties: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 3);
                t.cancelledTaskHasCorrectIsXProperties();
            },
            faultedTaskHasCorrectIsXProperties: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 3);
                t.faultedTaskHasCorrectIsXProperties();
            },
            trySetResultReturnsFalseWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 2);
                t.trySetResultReturnsFalseWhenTheTaskIsCompleted();
            },
            trySetCanceledReturnsFalseWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 2);
                t.trySetCanceledReturnsFalseWhenTheTaskIsCompleted();
            },
            trySetExceptionReturnsFalseWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 2);
                t.trySetExceptionReturnsFalseWhenTheTaskIsCompleted();
            },
            continueWithForNonGenericTaskWorkWithNoResultAndNoException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 10);
                t.continueWithForNonGenericTaskWorkWithNoResultAndNoException();
            },
            continueWithWhenCallbackThrowsAnException: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 6);
                t.continueWithWhenCallbackThrowsAnException();
            },
            exceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 8);
                t.exceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask();
            },
            continueWithForNonGenericTaskCanReturnAValue: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 11);
                t.continueWithForNonGenericTaskCanReturnAValue();
            },
            continueWithWithNoReturnValueForGenericTaskWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 10);
                t.continueWithWithNoReturnValueForGenericTaskWorks();
            },
            continueWithForGenericTaskCanReturnAValue: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 11);
                t.continueWithForGenericTaskCanReturnAValue();
            },
            delayWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 6);
                t.delayWorks();
            },
            fromResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 3);
                t.fromResultWorks();
            },
            runWithoutResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 6);
                t.runWithoutResultWorks();
            },
            runWithResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 7);
                t.runWithResultWorks();
            },
            runWorksWhenBodyThrows: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 7);
                t.runWorksWhenBodyThrows();
            },
            whenAllParamArrayWithResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 13);
                t.whenAllParamArrayWithResultWorks();
            },
            whenAllEnumerableWithResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 13);
                t.whenAllEnumerableWithResultWorks();
            },
            whenAllParamArrayWithoutResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 12);
                t.whenAllParamArrayWithoutResultWorks();
            },
            whenAllEnumerableWithoutResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 12);
                t.whenAllEnumerableWithoutResultWorks();
            },
            whenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 17);
                t.whenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted();
            },
            whenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 12);
                t.whenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled();
            },
            whenAnyParamArrayWithResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 10);
                t.whenAnyParamArrayWithResultWorks();
            },
            whenAnyEnumerableWithResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 10);
                t.whenAnyEnumerableWithResultWorks();
            },
            whenAnyParamArrayWithoutResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 9);
                t.whenAnyParamArrayWithoutResultWorks();
            },
            whenAnyEnumerableWithoutResultWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 9);
                t.whenAnyEnumerableWithoutResultWorks();
            },
            whenAnyFaultsIfTheFirstTaskFaulted: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 9);
                t.whenAnyFaultsIfTheFirstTaskFaulted();
            },
            whenAnyIsCancelledIfTheFirstTaskWasCancelled: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 8);
                t.whenAnyIsCancelledIfTheFirstTaskWasCancelled();
            },
            constructorWithOnlyActionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 7);
                t.constructorWithOnlyActionWorks();
            },
            constructorWithActionAndStateWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 8);
                t.constructorWithActionAndStateWorks();
            },
            exceptionInManuallyCreatedTaskIsStoredOnTheTask: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 8);
                t.exceptionInManuallyCreatedTaskIsStoredOnTheTask();
            },
            constructorWithOnlyFunctionWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 8);
                t.constructorWithOnlyFunctionWorks();
            },
            constructorWithFunctionAndStateWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests))._BeforeTest(false, assert, 9);
                t.constructorWithFunctionAndStateWorks();
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
                QUnit.test("Enum - TestParse", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum).testParse);
                QUnit.test("Enum - TestParseIgnoreCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum).testParseIgnoreCase);
                QUnit.test("Enum - TestToString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum).testToString);
                QUnit.test("Enum - TestGetValues", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum).testGetValues);
                QUnit.test("Enum - TestCompareTo", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum).testCompareTo);
                QUnit.test("Enum - TestFormat", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum).testFormat);
                QUnit.test("Enum - TestGetName", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum).testGetName);
                QUnit.test("Enum - TestGetNames", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum).testGetNames);
                QUnit.test("Enum - TestHasFlag", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum).testHasFlag);
                QUnit.test("Enum - TestIsDefined", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum).testIsDefined);
                QUnit.test("Enum - TestTryParse", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum).testTryParse);
                QUnit.test("Method parameters - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestMethodParametersClass).test);
                QUnit.test("Instance overloads - TestInstance", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestOverloadInstanceMethods).testInstance);
                QUnit.test("Static overloads - TestStatic", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestOverloadStaticMethods).testStatic);
                QUnit.test("Try/Catch - SimpleTryCatch", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks).simpleTryCatch);
                QUnit.test("Try/Catch - CaughtExceptions", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks).caughtExceptions);
                QUnit.test("Try/Catch - ThrownExceptions", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks).thrownExceptions);
                QUnit.test("Try/Catch - Bridge320", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks).bridge320);
                QUnit.test("Try/Catch - Bridge343", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks).bridge343);
                QUnit.test("Try/Catch/Finally - SimpleTryCatchFinally", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchFinallyBlocks).simpleTryCatchFinally);
                QUnit.test("Try/Catch/Finally - CaughtExceptions", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchFinallyBlocks).caughtExceptions);
                QUnit.test("Try/Catch/Finally - ThrownExceptions", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchFinallyBlocks).thrownExceptions);
                QUnit.test("Value types - TestInstanceConstructorsAndMethods", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestValueTypes).testInstanceConstructorsAndMethods);
                QUnit.test("Value types - TestStaticConstructorsAndMethods", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestValueTypes).testStaticConstructorsAndMethods);
                QUnit.test("Static overloads - TestA", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInheritance).testA);
                QUnit.test("Static overloads - TestB", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInheritance).testB);
                QUnit.test("Static overloads - TestAB", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInheritance).testAB);
                QUnit.test("Interfaces - TestInterfaceMethodAndProperty", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInterfaces).testInterfaceMethodAndProperty);
                QUnit.test("Interfaces - TestExplicitInterfaceMethodAndProperty", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInterfaces).testExplicitInterfaceMethodAndProperty);
                QUnit.test("Interfaces - TestTwoInterfaces", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInterfaces).testTwoInterfaces);
                QUnit.test("Reference types - TestInstanceConstructorsAndMethods", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestReferenceTypes).testInstanceConstructorsAndMethods);
                QUnit.test("Reference types - TestStaticConstructorsAndMethods", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestReferenceTypes).testStaticConstructorsAndMethods);
                QUnit.test("Reference types - TestMethodParameters", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestReferenceTypes).testMethodParameters);
                QUnit.test("Virtual methods - TestB", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestVirtualMethods).testB);
                QUnit.test("Abstract types - TestB", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestAbstractClass).testB);
                QUnit.test("Abstract types - TestC", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestAbstractClass).testC);
                QUnit.test("Abstract types - TestBC", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestAbstractClass).testBC);
                QUnit.module("Collections");
                QUnit.test("Array - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).typePropertiesAreCorrect);
                QUnit.test("Array - LengthWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).lengthWorks);
                QUnit.test("Array - RankIsOne", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).rankIsOne);
                QUnit.test("Array - GetLengthWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).getLengthWorks);
                QUnit.test("Array - GetLowerBound", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).getLowerBound);
                QUnit.test("Array - GetUpperBoundWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).getUpperBoundWorks);
                QUnit.test("Array - GettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).gettingValueByIndexWorks);
                QUnit.test("Array - GetValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).getValueWorks);
                QUnit.test("Array - SettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).settingValueByIndexWorks);
                QUnit.test("Array - SetValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).setValueWorks);
                QUnit.test("Array - ForeachWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).foreachWorks);
                QUnit.test("Array - CloneWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).cloneWorks);
                QUnit.test("Array - ConcatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).concatWorks);
                QUnit.test("Array - ContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).containsWorks);
                QUnit.test("Array - ContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).containsUsesEqualsMethod);
                QUnit.test("Array - AllWithArrayItemFilterCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).allWithArrayItemFilterCallbackWorks);
                QUnit.test("Array - SliceWithoutEndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).sliceWithoutEndWorks);
                QUnit.test("Array - ForeachWithArrayItemCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).foreachWithArrayItemCallbackWorks);
                QUnit.test("Array - ForeachWithArrayCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).foreachWithArrayCallbackWorks);
                QUnit.test("Array - IndexOfWithoutStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).indexOfWithoutStartIndexWorks);
                QUnit.test("Array - IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).indexOfWithoutStartIndexUsesEqualsMethod);
                QUnit.test("Array - IndexOfWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).indexOfWithStartIndexWorks);
                QUnit.test("Array - JoinWithoutDelimiterWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).joinWithoutDelimiterWorks);
                QUnit.test("Array - ReverseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).reverseWorks);
                QUnit.test("Array - AnyWithArrayItemFilterCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).anyWithArrayItemFilterCallbackWorks);
                QUnit.test("Array - BinarySearch1Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).binarySearch1Works);
                QUnit.test("Array - BinarySearch2Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).binarySearch2Works);
                QUnit.test("Array - BinarySearch3Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).binarySearch3Works);
                QUnit.test("Array - BinarySearch4Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).binarySearch4Works);
                QUnit.test("Array - BinarySearchExceptionsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).binarySearchExceptionsWorks);
                QUnit.test("Array - SortWithDefaultCompareWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).sortWithDefaultCompareWorks);
                QUnit.test("Array - Sort1Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).sort1Works);
                QUnit.test("Array - Sort2Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).sort2Works);
                QUnit.test("Array - Sort3Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).sort3Works);
                QUnit.test("Array - Sort4Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).sort4Works);
                QUnit.test("Array - SortExceptionsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).sortExceptionsWorks);
                QUnit.test("Array - ForeachWhenCastToIListWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).foreachWhenCastToIListWorks);
                QUnit.test("Array - ICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).iCollectionCountWorks);
                QUnit.test("Array - ICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).iCollectionAddWorks);
                QUnit.test("Array - ICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).iCollectionClearWorks);
                QUnit.test("Array - ICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).iCollectionContainsWorks);
                QUnit.test("Array - ICollectionContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).iCollectionContainsUsesEqualsMethod);
                QUnit.test("Array - ICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).iCollectionRemoveWorks);
                QUnit.test("Array - IListIndexingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).iListIndexingWorks);
                QUnit.test("Array - IListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).iListIndexOfWorks);
                QUnit.test("Array - IListIndexOfUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).iListIndexOfUsesEqualsMethod);
                QUnit.test("Array - IListInsertWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).iListInsertWorks);
                QUnit.test("Array - IListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTests).iListRemoveAtWorks);
                QUnit.test("GenericDictionary - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).typePropertiesAreCorrect);
                QUnit.test("GenericDictionary - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).defaultConstructorWorks);
                QUnit.test("GenericDictionary - CapacityConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).capacityConstructorWorks);
                QUnit.test("GenericDictionary - CapacityAndEqualityComparerWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).capacityAndEqualityComparerWorks);
                QUnit.test("GenericDictionary - EqualityComparerOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).equalityComparerOnlyConstructorWorks);
                QUnit.test("GenericDictionary - CountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).countWorks);
                QUnit.test("GenericDictionary - KeysWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).keysWorks);
                QUnit.test("GenericDictionary - ValuesWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).valuesWorks);
                QUnit.test("GenericDictionary - IndexerGetterWorksForExistingItems", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).indexerGetterWorksForExistingItems);
                QUnit.test("GenericDictionary - IndexerSetterWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).indexerSetterWorks);
                QUnit.test("GenericDictionary - IndexerGetterThrowsForNonExistingItems", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).indexerGetterThrowsForNonExistingItems);
                QUnit.test("GenericDictionary - AddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).addWorks);
                QUnit.test("GenericDictionary - AddThrowsIfItemAlreadyExists", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).addThrowsIfItemAlreadyExists);
                QUnit.test("GenericDictionary - ClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).clearWorks);
                QUnit.test("GenericDictionary - ContainsKeyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).containsKeyWorks);
                QUnit.test("GenericDictionary - EnumeratingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).enumeratingWorks);
                QUnit.test("GenericDictionary - RemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).removeWorks);
                QUnit.test("GenericDictionary - TryGetValueWithIntKeysWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).tryGetValueWithIntKeysWorks);
                QUnit.test("GenericDictionary - TryGetValueWithObjectKeysWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).tryGetValueWithObjectKeysWorks);
                QUnit.test("GenericDictionary - CanUseCustomComparer", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests).canUseCustomComparer);
                QUnit.test("ICollection - ArrayImplementsICollection", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests).arrayImplementsICollection);
                QUnit.test("ICollection - CustomClassThatShouldImplementICollectionDoesSo", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests).customClassThatShouldImplementICollectionDoesSo);
                QUnit.test("ICollection - ArrayCastToICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests).arrayCastToICollectionCountWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests).classImplementingICollectionCountWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests).classImplementingICollectionCastToICollectionCountWorks);
                QUnit.test("ICollection - ClassImplementingICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests).classImplementingICollectionAddWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests).classImplementingICollectionCastToICollectionAddWorks);
                QUnit.test("ICollection - ClassImplementingICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests).classImplementingICollectionClearWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests).classImplementingICollectionCastToICollectionClearWorks);
                QUnit.test("ICollection - ArrayCastToICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests).arrayCastToICollectionContainsWorks);
                QUnit.test("ICollection - ClassImplementingICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests).classImplementingICollectionContainsWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests).classImplementingICollectionCastToICollectionContainsWorks);
                QUnit.test("ICollection - ClassImplementingICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests).classImplementingICollectionRemoveWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests).classImplementingICollectionCastToICollectionRemoveWorks);
                QUnit.test("IDictionary - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests).typePropertiesAreCorrect);
                QUnit.test("IDictionary - ClassImplementsInterfaces", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests).classImplementsInterfaces);
                QUnit.test("IDictionary - CountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests).countWorks);
                QUnit.test("IDictionary - KeysWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests).keysWorks);
                QUnit.test("IDictionary - GetItemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests).getItemWorks);
                QUnit.test("IDictionary - ValuesWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests).valuesWorks);
                QUnit.test("IDictionary - ContainsKeyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests).containsKeyWorks);
                QUnit.test("IDictionary - TryGetValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests).tryGetValueWorks);
                QUnit.test("IDictionary - AddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests).addWorks);
                QUnit.test("IDictionary - ClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests).clearWorks);
                QUnit.test("IDictionary - RemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests).removeWorks);
                QUnit.test("IDictionary - SetItemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests).setItemWorks);
                QUnit.test("IEnumerable - ArrayImplementsIEnumerable", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests).arrayImplementsIEnumerable);
                QUnit.test("IEnumerable - CustomClassThatShouldImplementIEnumerableDoesSo", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests).customClassThatShouldImplementIEnumerableDoesSo);
                QUnit.test("IEnumerable - ArrayGetEnumeratorMethodWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests).arrayGetEnumeratorMethodWorks);
                QUnit.test("IEnumerable - ArrayCastToIEnumerableCanBeEnumerated", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests).arrayCastToIEnumerableCanBeEnumerated);
                QUnit.test("IEnumerable - ClassImplementingIEnumerableCanBeEnumerated", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests).classImplementingIEnumerableCanBeEnumerated);
                QUnit.test("IEnumerable - ClassImplementingIEnumerableCastToIEnumerableCanBeEnumerated", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests).classImplementingIEnumerableCastToIEnumerableCanBeEnumerated);
                QUnit.test("IList - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests).typePropertiesAreCorrect);
                QUnit.test("IList - ArrayImplementsIList", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests).arrayImplementsIList);
                QUnit.test("IList - CustomClassThatShouldImplementIListDoesSo", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests).customClassThatShouldImplementIListDoesSo);
                QUnit.test("IList - ArrayCastToIListGetItemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests).arrayCastToIListGetItemWorks);
                QUnit.test("IList - ClassImplementingIListGetItemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests).classImplementingIListGetItemWorks);
                QUnit.test("IList - ClassImplementingIListCastToIListGetItemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests).classImplementingIListCastToIListGetItemWorks);
                QUnit.test("IList - ArrayCastToIListSetItemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests).arrayCastToIListSetItemWorks);
                QUnit.test("IList - ClassImplementingIListSetItemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests).classImplementingIListSetItemWorks);
                QUnit.test("IList - ClassImplementingIListCastToIListSetItemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests).classImplementingIListCastToIListSetItemWorks);
                QUnit.test("IList - ArrayCastToIListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests).arrayCastToIListIndexOfWorks);
                QUnit.test("IList - ClassImplementingIListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests).classImplementingIListIndexOfWorks);
                QUnit.test("IList - ClassImplementingIListCastToIListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests).classImplementingIListCastToIListIndexOfWorks);
                QUnit.test("IList - ClassImplementingIListInsertWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests).classImplementingIListInsertWorks);
                QUnit.test("IList - ClassImplementingIListCastToIListInsertWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests).classImplementingIListCastToIListInsertWorks);
                QUnit.test("IList - ClassImplementingIListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests).classImplementingIListRemoveAtWorks);
                QUnit.test("IList - ClassImplementingIListCastToIListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests).classImplementingIListCastToIListRemoveAtWorks);
                QUnit.test("IteratorBlock - TypeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests).typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable);
                QUnit.test("IteratorBlock - EnumeratingIEnumeratorIteratorToEndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests).enumeratingIEnumeratorIteratorToEndWorks);
                QUnit.test("IteratorBlock - PrematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests).prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks);
                QUnit.test("IteratorBlock - ExceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks Exception thrown not caught", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests).exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks);
                QUnit.test("IteratorBlock - TypeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests).typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface);
                QUnit.test("IteratorBlock - EnumeratingIEnumerableIteratorToEndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests).enumeratingIEnumerableIteratorToEndWorks);
                QUnit.test("IteratorBlock - PrematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests).prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks);
                QUnit.test("IteratorBlock - ExceptionInIEnumerableIteratorBodyExecutesFinallyBlocks exception thrown not caught", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests).exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks);
                QUnit.test("IteratorBlock - EnumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests).enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters);
                QUnit.test("IteratorBlock - DifferentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests).differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals);
                QUnit.test("List - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).typePropertiesAreCorrect);
                QUnit.test("List - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).defaultConstructorWorks);
                QUnit.test("List - ConstructorWithCapacityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).constructorWithCapacityWorks);
                QUnit.test("List - ConstructingFromArrayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).constructingFromArrayWorks);
                QUnit.test("List - ConstructingFromListWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).constructingFromListWorks);
                QUnit.test("List - ConstructingFromIEnumerableWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).constructingFromIEnumerableWorks);
                QUnit.test("List - CountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).countWorks);
                QUnit.test("List - IndexingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).indexingWorks);
                QUnit.test("List - ForeachWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).foreachWorks);
                QUnit.test("List - GetEnumeratorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).getEnumeratorWorks);
                QUnit.test("List - AddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).addWorks);
                QUnit.test("List - AddRangeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).addRangeWorks);
                QUnit.test("List - BinarySearch1Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).binarySearch1Works);
                QUnit.test("List - BinarySearch2Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).binarySearch2Works);
                QUnit.test("List - BinarySearch3Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).binarySearch3Works);
                QUnit.test("List - BinarySearch4Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).binarySearch4Works);
                QUnit.test("List - ClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).clearWorks);
                QUnit.test("List - ContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).containsWorks);
                QUnit.test("List - ContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).containsUsesEqualsMethod);
                QUnit.test("List - SliceWithoutEndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).sliceWithoutEndWorks);
                QUnit.test("List - SliceWithEndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).sliceWithEndWorks);
                QUnit.test("List - ForeachWithListItemCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).foreachWithListItemCallbackWorks);
                QUnit.test("List - ForeachWithListCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).foreachWithListCallbackWorks);
                QUnit.test("List - IndexOfWithoutStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).indexOfWithoutStartIndexWorks);
                QUnit.test("List - IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).indexOfWithoutStartIndexUsesEqualsMethod);
                QUnit.test("List - IndexOfWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).indexOfWithStartIndexWorks);
                QUnit.test("List - IndexOfWithStartIndexUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).indexOfWithStartIndexUsesEqualsMethod);
                QUnit.test("List - InsertWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).insertWorks);
                QUnit.test("List - InsertRangeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).insertRangeWorks);
                QUnit.test("List - JoinWithoutDelimiterWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).joinWithoutDelimiterWorks);
                QUnit.test("List - JoinWithDelimiterWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).joinWithDelimiterWorks);
                QUnit.test("List - RemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).removeWorks);
                QUnit.test("List - RemoveReturnsFalseIfTheElementWasNotFound", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).removeReturnsFalseIfTheElementWasNotFound);
                QUnit.test("List - RemoveCanRemoveNullItem", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).removeCanRemoveNullItem);
                QUnit.test("List - RemoveUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).removeUsesEqualsMethod);
                QUnit.test("List - RemoveAtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).removeAtWorks);
                QUnit.test("List - RemoveRangeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).removeRangeWorks);
                QUnit.test("List - ReverseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).reverseWorks);
                QUnit.test("List - SortWithDefaultCompareWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).sortWithDefaultCompareWorks);
                QUnit.test("List - SortWithCompareCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).sortWithCompareCallbackWorks);
                QUnit.test("List - SortWithIComparerWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).sortWithIComparerWorks);
                QUnit.test("List - ForeachWhenCastToIEnumerableWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).foreachWhenCastToIEnumerableWorks);
                QUnit.test("List - IEnumerableGetEnumeratorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).iEnumerableGetEnumeratorWorks);
                QUnit.test("List - ICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).iCollectionCountWorks);
                QUnit.test("List - ICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).iCollectionAddWorks);
                QUnit.test("List - ICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).iCollectionClearWorks);
                QUnit.test("List - ICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).iCollectionContainsWorks);
                QUnit.test("List - ICollectionContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).iCollectionContainsUsesEqualsMethod);
                QUnit.test("List - ICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).iCollectionRemoveWorks);
                QUnit.test("List - ICollectionRemoveCanRemoveNullItem", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).iCollectionRemoveCanRemoveNullItem);
                QUnit.test("List - ICollectionRemoveUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).iCollectionRemoveUsesEqualsMethod);
                QUnit.test("List - IListIndexingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).iListIndexingWorks);
                QUnit.test("List - IListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).iListIndexOfWorks);
                QUnit.test("List - IListIndexOfUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).iListIndexOfUsesEqualsMethod);
                QUnit.test("List - IListInsertWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).iListInsertWorks);
                QUnit.test("List - IListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).iListRemoveAtWorks);
                QUnit.test("List - ToArrayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests).toArrayWorks);
                QUnit.test("MultidimArray - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests).typePropertiesAreCorrect);
                QUnit.test("MultidimArray - LengthWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests).lengthWorks);
                QUnit.test("MultidimArray - GetValueWorksForUninitializedElement", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests).getValueWorksForUninitializedElement);
                QUnit.test("MultidimArray - GetValueByIndexWorksForUninitializedElement", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests).getValueByIndexWorksForUninitializedElement);
                QUnit.test("MultidimArray - SettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests).settingValueByIndexWorks);
                QUnit.test("MultidimArray - SetValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests).setValueWorks);
                QUnit.test("MultidimArray - GetValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests).getValueWorks);
                QUnit.test("MultidimArray - GettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests).gettingValueByIndexWorks);
                QUnit.test("MultidimArray - RankWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests).rankWorks);
                QUnit.test("MultidimArray - GetValueWithIndexOutOfRangeThrowsAnException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests).getValueWithIndexOutOfRangeThrowsAnException);
                QUnit.test("MultidimArray - SetValueWithIndexOutOfRangeThrowsAnException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests).setValueWithIndexOutOfRangeThrowsAnException);
                QUnit.module("Comparer");
                QUnit.test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests).typePropertiesAreCorrect);
                QUnit.test("DefaultComparerCanOrderNumbers", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests).defaultComparerCanOrderNumbers);
                QUnit.test("DefaultComparerCanOrderNullValues", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests).defaultComparerCanOrderNullValues);
                QUnit.test("DefaultComparerUsesCompareMethodIfClassImplementsIComparable", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests).defaultComparerUsesCompareMethodIfClassImplementsIComparable);
                QUnit.test("CreateWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests).createWorks);
                QUnit.module("Convert");
                QUnit.test("Convert.FromBase64 - Roundtrip1", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).roundtrip1);
                QUnit.test("Convert.FromBase64 - Roundtrip2", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).roundtrip2);
                QUnit.test("Convert.FromBase64 - Roundtrip3", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).roundtrip3);
                QUnit.test("Convert.FromBase64 - EmptyString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).emptyString);
                QUnit.test("Convert.FromBase64 - ZeroLengthArray", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).zeroLengthArray);
                QUnit.test("Convert.FromBase64 - RoundtripWithPadding1", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).roundtripWithPadding1);
                QUnit.test("Convert.FromBase64 - RoundtripWithPadding2", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).roundtripWithPadding2);
                QUnit.test("Convert.FromBase64 - PartialRoundtripWithPadding1", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).partialRoundtripWithPadding1);
                QUnit.test("Convert.FromBase64 - PartialRoundtripWithPadding2", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).partialRoundtripWithPadding2);
                QUnit.test("Convert.FromBase64 - ParseWithWhitespace", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).parseWithWhitespace);
                QUnit.test("Convert.FromBase64 - RoundtripWithWhitespace2", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).roundtripWithWhitespace2);
                QUnit.test("Convert.FromBase64 - RoundtripWithWhitespace3", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).roundtripWithWhitespace3);
                QUnit.test("Convert.FromBase64 - RoundtripWithWhitespace4", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).roundtripWithWhitespace4);
                QUnit.test("Convert.FromBase64 - RoundtripWithWhitespace5", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).roundtripWithWhitespace5);
                QUnit.test("Convert.FromBase64 - RoundtripWithWhitespace6", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).roundtripWithWhitespace6);
                QUnit.test("Convert.FromBase64 - RoundtripWithWhitespace7", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).roundtripWithWhitespace7);
                QUnit.test("Convert.FromBase64 - RoundtripLargeString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).roundtripLargeString);
                QUnit.test("Convert.FromBase64 - InvalidOffset", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).invalidOffset);
                QUnit.test("Convert.FromBase64 - InvalidLength", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).invalidLength);
                QUnit.test("Convert.FromBase64 - InvalidInput", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).invalidInput);
                QUnit.test("Convert.FromBase64 - InvalidCharactersInInput", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests).invalidCharactersInInput);
                QUnit.test("Convert.ToBase64CharArray - ValidOffsetIn", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests).validOffsetIn);
                QUnit.test("Convert.ToBase64CharArray - ShortInputArray", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests).shortInputArray);
                QUnit.test("Convert.ToBase64CharArray - ValidOffsetOut", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests).validOffsetOut);
                QUnit.test("Convert.ToBase64CharArray - InvalidInputBuffer", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests).invalidInputBuffer);
                QUnit.test("Convert.ToBase64CharArray - InvalidOutputBuffer", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests).invalidOutputBuffer);
                QUnit.test("Convert.ToBase64CharArray - InvalidOffsetIn", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests).invalidOffsetIn);
                QUnit.test("Convert.ToBase64CharArray - InvalidOffsetOut", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests).invalidOffsetOut);
                QUnit.test("Convert.ToBase64CharArray - InvalidInputLength", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests).invalidInputLength);
                QUnit.test("Convert.ToBase64String - KnownByteSequence", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests).knownByteSequence);
                QUnit.test("Convert.ToBase64String - ZeroLength", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests).zeroLength);
                QUnit.test("Convert.ToBase64String - InvalidInputBuffer", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests).invalidInputBuffer);
                QUnit.test("Convert.ToBase64String - InvalidOffset", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests).invalidOffset);
                QUnit.test("Convert.ToBase64String - InvalidLength", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests).invalidLength);
                QUnit.test("Convert.ToString - FromBoxedObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromBoxedObject);
                QUnit.test("Convert.ToString - FromObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromObject);
                QUnit.test("Convert.ToString - FromDateTime", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromDateTime);
                QUnit.test("Convert.ToString - FromChar", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromChar);
                QUnit.test("Convert.ToString - FromByteBase2", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromByteBase2);
                QUnit.test("Convert.ToString - FromByteBase8", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromByteBase8);
                QUnit.test("Convert.ToString - FromByteBase10", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromByteBase10);
                QUnit.test("Convert.ToString - FromByteBase16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromByteBase16);
                QUnit.test("Convert.ToString - FromByteInvalidBase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromByteInvalidBase);
                QUnit.test("Convert.ToString - FromInt16Base2", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt16Base2);
                QUnit.test("Convert.ToString - FromInt16Base8", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt16Base8);
                QUnit.test("Convert.ToString - FromInt16Base10", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt16Base10);
                QUnit.test("Convert.ToString - FromInt16Base16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt16Base16);
                QUnit.test("Convert.ToString - FromInt16InvalidBase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt16InvalidBase);
                QUnit.test("Convert.ToString - FromInt32Base2", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt32Base2);
                QUnit.test("Convert.ToString - FromInt32Base8", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt32Base8);
                QUnit.test("Convert.ToString - FromInt32Base10", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt32Base10);
                QUnit.test("Convert.ToString - FromInt32Base16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt32Base16);
                QUnit.test("Convert.ToString - FromInt32InvalidBase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt32InvalidBase);
                QUnit.test("Convert.ToString - FromInt64Base2", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt64Base2);
                QUnit.test("Convert.ToString - FromInt64Base8", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt64Base8);
                QUnit.test("Convert.ToString - FromInt64Base10", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt64Base10);
                QUnit.test("Convert.ToString - FromInt64Base16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt64Base16);
                QUnit.test("Convert.ToString - FromInt64InvalidBase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt64InvalidBase);
                QUnit.test("Convert.ToString - FromBoolean", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromBoolean);
                QUnit.test("Convert.ToString - FromSByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromSByte);
                QUnit.test("Convert.ToString - FromByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromByte);
                QUnit.test("Convert.ToString - FromInt16Array", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt16Array);
                QUnit.test("Convert.ToString - FromUInt16Array", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromUInt16Array);
                QUnit.test("Convert.ToString - FromInt32Array", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt32Array);
                QUnit.test("Convert.ToString - FromUInt32Array", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromUInt32Array);
                QUnit.test("Convert.ToString - FromInt64Array", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromInt64Array);
                QUnit.test("Convert.ToString - FromUInt64Array", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromUInt64Array);
                QUnit.test("Convert.ToString - FromSingleArray", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromSingleArray);
                QUnit.test("Convert.ToString - FromDoubleArray", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromDoubleArray);
                QUnit.test("Convert.ToString - FromDecimalArray", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromDecimalArray);
                QUnit.test("Convert.ToString - FromDateTimeArray", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromDateTimeArray);
                QUnit.test("Convert.ToString - FromString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromString);
                QUnit.test("Convert.ToString - FromIFormattable", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromIFormattable);
                QUnit.test("Convert.ToString - FromNonIConvertible", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests).fromNonIConvertible);
                QUnit.test("Convert.ToBoolean - FromBoolean", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests).fromBoolean);
                QUnit.test("Convert.ToBoolean - FromByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests).fromByte);
                QUnit.test("Convert.ToBoolean - FromDecimal", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests).fromDecimal);
                QUnit.test("Convert.ToBoolean - FromDouble", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests).fromDouble);
                QUnit.test("Convert.ToBoolean - FromInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests).fromInt16);
                QUnit.test("Convert.ToBoolean - FromInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests).fromInt32);
                QUnit.test("Convert.ToBoolean - FromInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests).fromInt64);
                QUnit.test("Convert.ToBoolean - FromString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests).fromString);
                QUnit.test("Convert.ToBoolean - FromObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests).fromObject);
                QUnit.test("Convert.ToBoolean - FromSByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests).fromSByte);
                QUnit.test("Convert.ToBoolean - FromSingle", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests).fromSingle);
                QUnit.test("Convert.ToBoolean - FromUInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests).fromUInt16);
                QUnit.test("Convert.ToBoolean - FromUInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests).fromUInt32);
                QUnit.test("Convert.ToBoolean - FromUInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests).fromUInt64);
                QUnit.test("Convert.ToByte - FromBoolean", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests).fromBoolean);
                QUnit.test("Convert.ToByte - FromChar", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests).fromChar);
                QUnit.test("Convert.ToByte - FromDecimal", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests).fromDecimal);
                QUnit.test("Convert.ToByte - FromDouble", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests).fromDouble);
                QUnit.test("Convert.ToByte - FromInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests).fromInt16);
                QUnit.test("Convert.ToByte - FromInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests).fromInt32);
                QUnit.test("Convert.ToByte - FromInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests).fromInt64);
                QUnit.test("Convert.ToByte - FromObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests).fromObject);
                QUnit.test("Convert.ToByte - FromSByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests).fromSByte);
                QUnit.test("Convert.ToByte - FromSingle", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests).fromSingle);
                QUnit.test("Convert.ToByte - FromString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests).fromString);
                QUnit.test("Convert.ToByte - FromStringWithBase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests).fromStringWithBase);
                QUnit.test("Convert.ToByte - FromUInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests).fromUInt16);
                QUnit.test("Convert.ToByte - FromUInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests).fromUInt32);
                QUnit.test("Convert.ToByte - FromUInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests).fromUInt64);
                QUnit.test("Convert.ToChar - FromByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromByte);
                QUnit.test("Convert.ToChar - FromChar", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromChar);
                QUnit.test("Convert.ToChar - FromDecimal", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromDecimal);
                QUnit.test("Convert.ToChar - FromDecimalViaObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromDecimalViaObject);
                QUnit.test("Convert.ToChar - FromDouble", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromDouble);
                QUnit.test("Convert.ToChar - FromDoubleViaObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromDoubleViaObject);
                QUnit.test("Convert.ToChar - FromInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromInt16);
                QUnit.test("Convert.ToChar - FromInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromInt32);
                QUnit.test("Convert.ToChar - FromInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromInt64);
                QUnit.test("Convert.ToChar - FromObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromObject);
                QUnit.test("Convert.ToChar - FromSByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromSByte);
                QUnit.test("Convert.ToChar - FromSingle", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromSingle);
                QUnit.test("Convert.ToChar - FromSingleViaObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromSingleViaObject);
                QUnit.test("Convert.ToChar - FromString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromString);
                QUnit.test("Convert.ToChar - FromUInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromUInt16);
                QUnit.test("Convert.ToChar - FromUInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromUInt32);
                QUnit.test("Convert.ToChar - FromUInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests).fromUInt64);
                QUnit.test("Convert.ToDateTime - FromString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests).fromString);
                QUnit.test("Convert.ToDateTime - FromStringWithCustomFormatProvider", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests).fromStringWithCustomFormatProvider);
                QUnit.test("Convert.ToDateTime - FromDateTime", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests).fromDateTime);
                QUnit.test("Convert.ToDateTime - FromObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests).fromObject);
                QUnit.test("Convert.ToDateTime - FromBoolean", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests).fromBoolean);
                QUnit.test("Convert.ToDateTime - FromChar", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests).fromChar);
                QUnit.test("Convert.ToDateTime - FromInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests).fromInt16);
                QUnit.test("Convert.ToDateTime - FromInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests).fromInt32);
                QUnit.test("Convert.ToDateTime - FromInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests).fromInt64);
                QUnit.test("Convert.ToDateTime - FromUInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests).fromUInt16);
                QUnit.test("Convert.ToDateTime - FromUInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests).fromUInt32);
                QUnit.test("Convert.ToDateTime - FromUInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests).fromUInt64);
                QUnit.test("Convert.ToDateTime - FromSingle", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests).fromSingle);
                QUnit.test("Convert.ToDateTime - FromDouble", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests).fromDouble);
                QUnit.test("Convert.ToDateTime - FromDecimal", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests).fromDecimal);
                QUnit.test("Convert.ToDecimal - FromBoolean", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests).fromBoolean);
                QUnit.test("Convert.ToDecimal - FromByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests).fromByte);
                QUnit.test("Convert.ToDecimal - FromDecimal", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests).fromDecimal);
                QUnit.test("Convert.ToDecimal - FromDouble", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests).fromDouble);
                QUnit.test("Convert.ToDecimal - FromInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests).fromInt16);
                QUnit.test("Convert.ToDecimal - FromInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests).fromInt32);
                QUnit.test("Convert.ToDecimal - FromInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests).fromInt64);
                QUnit.test("Convert.ToDecimal - FromObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests).fromObject);
                QUnit.test("Convert.ToDecimal - FromSByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests).fromSByte);
                QUnit.test("Convert.ToDecimal - FromSingle", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests).fromSingle);
                QUnit.test("Convert.ToDecimal - FromString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests).fromString);
                QUnit.test("Convert.ToDecimal - FromUInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests).fromUInt16);
                QUnit.test("Convert.ToDecimal - FromUInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests).fromUInt32);
                QUnit.test("Convert.ToDecimal - FromUInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests).fromUInt64);
                QUnit.test("Convert.ToDouble - FromBoolean", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests).fromBoolean);
                QUnit.test("Convert.ToDouble - FromByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests).fromByte);
                QUnit.test("Convert.ToDouble - FromDecimal", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests).fromDecimal);
                QUnit.test("Convert.ToDouble - FromDouble", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests).fromDouble);
                QUnit.test("Convert.ToDouble - FromInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests).fromInt16);
                QUnit.test("Convert.ToDouble - FromInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests).fromInt32);
                QUnit.test("Convert.ToDouble - FromInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests).fromInt64);
                QUnit.test("Convert.ToDouble - FromObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests).fromObject);
                QUnit.test("Convert.ToDouble - FromSByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests).fromSByte);
                QUnit.test("Convert.ToDouble - FromSingle", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests).fromSingle);
                QUnit.test("Convert.ToDouble - FromString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests).fromString);
                QUnit.test("Convert.ToDouble - FromUInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests).fromUInt16);
                QUnit.test("Convert.ToDouble - FromUInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests).fromUInt32);
                QUnit.test("Convert.ToDouble - FromUInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests).fromUInt64);
                QUnit.test("Convert.ToInt16 - FromBoolean", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests).fromBoolean);
                QUnit.test("Convert.ToInt16 - FromByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests).fromByte);
                QUnit.test("Convert.ToInt16 - FromChar", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests).fromChar);
                QUnit.test("Convert.ToInt16 - FromDecimal", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests).fromDecimal);
                QUnit.test("Convert.ToInt16 - FromDouble", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests).fromDouble);
                QUnit.test("Convert.ToInt16 - FromInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests).fromInt16);
                QUnit.test("Convert.ToInt16 - FromInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests).fromInt32);
                QUnit.test("Convert.ToInt16 - FromInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests).fromInt64);
                QUnit.test("Convert.ToInt16 - FromObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests).fromObject);
                QUnit.test("Convert.ToInt16 - FromSByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests).fromSByte);
                QUnit.test("Convert.ToInt16 - FromSingle", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests).fromSingle);
                QUnit.test("Convert.ToInt16 - FromString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests).fromString);
                QUnit.test("Convert.ToInt16 - FromStringWithBase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests).fromStringWithBase);
                QUnit.test("Convert.ToInt16 - FromUInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests).fromUInt16);
                QUnit.test("Convert.ToInt16 - FromUInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests).fromUInt32);
                QUnit.test("Convert.ToInt16 - FromUInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests).fromUInt64);
                QUnit.test("Convert.ToInt32 - FromBoolean", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests).fromBoolean);
                QUnit.test("Convert.ToInt32 - FromByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests).fromByte);
                QUnit.test("Convert.ToInt32 - FromChar", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests).fromChar);
                QUnit.test("Convert.ToInt32 - FromDecimal", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests).fromDecimal);
                QUnit.test("Convert.ToInt32 - FromDouble", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests).fromDouble);
                QUnit.test("Convert.ToInt32 - FromInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests).fromInt16);
                QUnit.test("Convert.ToInt32 - FromInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests).fromInt32);
                QUnit.test("Convert.ToInt32 - FromInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests).fromInt64);
                QUnit.test("Convert.ToInt32 - FromObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests).fromObject);
                QUnit.test("Convert.ToInt32 - FromSByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests).fromSByte);
                QUnit.test("Convert.ToInt32 - FromSingle", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests).fromSingle);
                QUnit.test("Convert.ToInt32 - FromString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests).fromString);
                QUnit.test("Convert.ToInt32 - FromStringWithBase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests).fromStringWithBase);
                QUnit.test("Convert.ToInt32 - FromUInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests).fromUInt16);
                QUnit.test("Convert.ToInt32 - FromUInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests).fromUInt32);
                QUnit.test("Convert.ToInt32 - FromUInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests).fromUInt64);
                QUnit.test("Convert.ToInt64 - FromBoolean", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests).fromBoolean);
                QUnit.test("Convert.ToInt64 - FromByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests).fromByte);
                QUnit.test("Convert.ToInt64 - FromChar", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests).fromChar);
                QUnit.test("Convert.ToInt64 - FromDecimal", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests).fromDecimal);
                QUnit.test("Convert.ToInt64 - FromDouble", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests).fromDouble);
                QUnit.test("Convert.ToInt64 - FromInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests).fromInt16);
                QUnit.test("Convert.ToInt64 - FromInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests).fromInt32);
                QUnit.test("Convert.ToInt64 - FromInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests).fromInt64);
                QUnit.test("Convert.ToInt64 - FromObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests).fromObject);
                QUnit.test("Convert.ToInt64 - FromSByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests).fromSByte);
                QUnit.test("Convert.ToInt64 - FromSingle", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests).fromSingle);
                QUnit.test("Convert.ToInt64 - FromString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests).fromString);
                QUnit.test("Convert.ToInt64 - FromStringWithBase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests).fromStringWithBase);
                QUnit.test("Convert.ToInt64 - FromUInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests).fromUInt16);
                QUnit.test("Convert.ToInt64 - FromUInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests).fromUInt32);
                QUnit.test("Convert.ToInt64 - FromUInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests).fromUInt64);
                QUnit.test("Convert.ToSByte - FromBoolean", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests).fromBoolean);
                QUnit.test("Convert.ToSByte - FromByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests).fromByte);
                QUnit.test("Convert.ToSByte - FromChar", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests).fromChar);
                QUnit.test("Convert.ToSByte - FromDecimal", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests).fromDecimal);
                QUnit.test("Convert.ToSByte - FromDouble", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests).fromDouble);
                QUnit.test("Convert.ToSByte - FromInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests).fromInt16);
                QUnit.test("Convert.ToSByte - FromInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests).fromInt32);
                QUnit.test("Convert.ToSByte - FromInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests).fromInt64);
                QUnit.test("Convert.ToSByte - FromObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests).fromObject);
                QUnit.test("Convert.ToSByte - FromSByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests).fromSByte);
                QUnit.test("Convert.ToSByte - FromSingle", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests).fromSingle);
                QUnit.test("Convert.ToSByte - FromString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests).fromString);
                QUnit.test("Convert.ToSByte - FromStringWithBase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests).fromStringWithBase);
                QUnit.test("Convert.ToSByte - FromUInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests).fromUInt16);
                QUnit.test("Convert.ToSByte - FromUInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests).fromUInt32);
                QUnit.test("Convert.ToSByte - FromUInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests).fromUInt64);
                QUnit.test("Convert.ToSingle - FromBoolean", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests).fromBoolean);
                QUnit.test("Convert.ToSingle - FromByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests).fromByte);
                QUnit.test("Convert.ToSingle - FromDecimal", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests).fromDecimal);
                QUnit.test("Convert.ToSingle - FromDouble", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests).fromDouble);
                QUnit.test("Convert.ToSingle - FromInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests).fromInt16);
                QUnit.test("Convert.ToSingle - FromInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests).fromInt32);
                QUnit.test("Convert.ToSingle - FromInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests).fromInt64);
                QUnit.test("Convert.ToSingle - FromObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests).fromObject);
                QUnit.test("Convert.ToSingle - FromSByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests).fromSByte);
                QUnit.test("Convert.ToSingle - FromSingle", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests).fromSingle);
                QUnit.test("Convert.ToSingle - FromString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests).fromString);
                QUnit.test("Convert.ToSingle - FromUInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests).fromUInt16);
                QUnit.test("Convert.ToSingle - FromUInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests).fromUInt32);
                QUnit.test("Convert.ToSingle - FromUInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests).fromUInt64);
                QUnit.test("Convert.ToUInt16 - FromBoolean", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests).fromBoolean);
                QUnit.test("Convert.ToUInt16 - FromByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests).fromByte);
                QUnit.test("Convert.ToUInt16 - FromChar", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests).fromChar);
                QUnit.test("Convert.ToUInt16 - FromDecimal", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests).fromDecimal);
                QUnit.test("Convert.ToUInt16 - FromDouble", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests).fromDouble);
                QUnit.test("Convert.ToUInt16 - FromInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests).fromInt16);
                QUnit.test("Convert.ToUInt16 - FromInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests).fromInt32);
                QUnit.test("Convert.ToUInt16 - FromInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests).fromInt64);
                QUnit.test("Convert.ToUInt16 - FromObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests).fromObject);
                QUnit.test("Convert.ToUInt16 - FromSByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests).fromSByte);
                QUnit.test("Convert.ToUInt16 - FromSingle", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests).fromSingle);
                QUnit.test("Convert.ToUInt16 - FromString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests).fromString);
                QUnit.test("Convert.ToUInt16 - FromStringWithBase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests).fromStringWithBase);
                QUnit.test("Convert.ToUInt16 - FromUInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests).fromUInt16);
                QUnit.test("Convert.ToUInt16 - FromUInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests).fromUInt32);
                QUnit.test("Convert.ToUInt16 - FromUInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests).fromUInt64);
                QUnit.test("Convert.ToUInt32 - FromBoolean", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests).fromBoolean);
                QUnit.test("Convert.ToUInt32 - FromByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests).fromByte);
                QUnit.test("Convert.ToUInt32 - FromChar", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests).fromChar);
                QUnit.test("Convert.ToUInt32 - FromDecimal", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests).fromDecimal);
                QUnit.test("Convert.ToUInt32 - FromDouble", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests).fromDouble);
                QUnit.test("Convert.ToUInt32 - FromInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests).fromInt16);
                QUnit.test("Convert.ToUInt32 - FromInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests).fromInt32);
                QUnit.test("Convert.ToUInt32 - FromInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests).fromInt64);
                QUnit.test("Convert.ToUInt32 - FromObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests).fromObject);
                QUnit.test("Convert.ToUInt32 - FromSByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests).fromSByte);
                QUnit.test("Convert.ToUInt32 - FromSingle", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests).fromSingle);
                QUnit.test("Convert.ToUInt32 - FromString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests).fromString);
                QUnit.test("Convert.ToUInt32 - FromStringWithBase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests).fromStringWithBase);
                QUnit.test("Convert.ToUInt32 - FromUInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests).fromUInt16);
                QUnit.test("Convert.ToUInt32 - FromUInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests).fromUInt32);
                QUnit.test("Convert.ToUInt32 - FromUInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests).fromUInt64);
                QUnit.test("Convert.ToUInt64 - FromBoolean", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests).fromBoolean);
                QUnit.test("Convert.ToUInt64 - FromByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests).fromByte);
                QUnit.test("Convert.ToUInt64 - FromChar", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests).fromChar);
                QUnit.test("Convert.ToUInt64 - FromDecimal", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests).fromDecimal);
                QUnit.test("Convert.ToUInt64 - FromDouble", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests).fromDouble);
                QUnit.test("Convert.ToUInt64 - FromInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests).fromInt16);
                QUnit.test("Convert.ToUInt64 - FromInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests).fromInt32);
                QUnit.test("Convert.ToUInt64 - FromInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests).fromInt64);
                QUnit.test("Convert.ToUInt64 - FromObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests).fromObject);
                QUnit.test("Convert.ToUInt64 - FromSByte", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests).fromSByte);
                QUnit.test("Convert.ToUInt64 - FromSingle", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests).fromSingle);
                QUnit.test("Convert.ToUInt64 - FromString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests).fromString);
                QUnit.test("Convert.ToUInt64 - FromStringWithBase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests).fromStringWithBase);
                QUnit.test("Convert.ToUInt64 - FromUInt16", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests).fromUInt16);
                QUnit.test("Convert.ToUInt64 - FromUInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests).fromUInt32);
                QUnit.test("Convert.ToUInt64 - FromUInt64", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests).fromUInt64);
                QUnit.module("Date and time");
                QUnit.test("DateTimeFormatInfo - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DateTimeFormatInfoTests).typePropertiesAreCorrect);
                QUnit.test("DateTimeFormatInfo - GetFormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DateTimeFormatInfoTests).getFormatWorks);
                QUnit.test("DateTimeFormatInfo - InvariantWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DateTimeFormatInfoTests).invariantWorks);
                QUnit.test("DateTime - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).typePropertiesAreCorrect);
                QUnit.test("DateTime - DefaultConstructorReturnsTodaysDate", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).defaultConstructorReturnsTodaysDate);
                QUnit.test("DateTime - CreatingInstanceReturnsTodaysDate", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).creatingInstanceReturnsTodaysDate);
                QUnit.test("DateTime - MillisecondSinceEpochConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).millisecondSinceEpochConstructorWorks);
                QUnit.test("DateTime - StringConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).stringConstructorWorks);
                QUnit.test("DateTime - YMDConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).yMDConstructorWorks);
                QUnit.test("DateTime - YMDHConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).yMDHConstructorWorks);
                QUnit.test("DateTime - YMDHNConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).yMDHNConstructorWorks);
                QUnit.test("DateTime - YMDHNSConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).yMDHNSConstructorWorks);
                QUnit.test("DateTime - YMDHNSUConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).yMDHNSUConstructorWorks);
                QUnit.test("DateTime - NowWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).nowWorks);
                QUnit.test("DateTime - UTCNowWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).uTCNowWorks);
                QUnit.test("DateTime - ToUniversalWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).toUniversalWorks);
                QUnit.test("DateTime - ToLocalWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).toLocalWorks);
                QUnit.test("DateTime - TodayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).todayWorks);
                QUnit.test("DateTime - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).formatWorks);
                QUnit.test("DateTime - LocaleFormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).localeFormatWorks);
                QUnit.test("DateTime - GetFullYearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getFullYearWorks);
                QUnit.test("DateTime - GetMonthWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getMonthWorks);
                QUnit.test("DateTime - GetDateWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getDateWorks);
                QUnit.test("DateTime - GetHoursWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getHoursWorks);
                QUnit.test("DateTime - GetMinutesWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getMinutesWorks);
                QUnit.test("DateTime - GetSecondsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getSecondsWorks);
                QUnit.test("DateTime - GetMillisecondsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getMillisecondsWorks);
                QUnit.test("DateTime - GetDayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getDayWorks);
                QUnit.test("DateTime - GetTimeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getTimeWorks);
                QUnit.test("DateTime - ValueOfWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).valueOfWorks);
                QUnit.test("DateTime - GetTimezoneOffsetWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getTimezoneOffsetWorks);
                QUnit.test("DateTime - GetUTCFullYearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getUTCFullYearWorks);
                QUnit.test("DateTime - GetUtcMonthWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getUtcMonthWorks);
                QUnit.test("DateTime - GetUTCDateWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getUTCDateWorks);
                QUnit.test("DateTime - GetUTCHoursWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getUTCHoursWorks);
                QUnit.test("DateTime - GetUTCMinutesWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getUTCMinutesWorks);
                QUnit.test("DateTime - GetUTCSecondsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getUTCSecondsWorks);
                QUnit.test("DateTime - GetUTCMillisecondsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getUTCMillisecondsWorks);
                QUnit.test("DateTime - GetUTCDayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getUTCDayWorks);
                QUnit.test("DateTime - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).parseWorks);
                QUnit.test("DateTime - ParseExactWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).parseExactWorks);
                QUnit.test("DateTime - ParseExactWithCultureWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).parseExactWithCultureWorks);
                QUnit.test("DateTime - ParseExactUTCWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).parseExactUTCWorks);
                QUnit.test("DateTime - ParseExactUTCWithCultureWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).parseExactUTCWithCultureWorks);
                QUnit.test("DateTime - ToDateStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).toDateStringWorks);
                QUnit.test("DateTime - ToTimeStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).toTimeStringWorks);
                QUnit.test("DateTime - ToUTCStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).toUTCStringWorks);
                QUnit.test("DateTime - ToLocaleDateStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).toLocaleDateStringWorks);
                QUnit.test("DateTime - ToLocaleTimeStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).toLocaleTimeStringWorks);
                QUnit.test("DateTime - SubtractingDatesWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).subtractingDatesWorks);
                QUnit.test("DateTime - SubtractMethodReturningTimeSpanWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).subtractMethodReturningTimeSpanWorks);
                QUnit.test("DateTime - DateEqualityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).dateEqualityWorks);
                QUnit.test("DateTime - DateInequalityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).dateInequalityWorks);
                QUnit.test("DateTime - DateLessThanWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).dateLessThanWorks);
                QUnit.test("DateTime - DateLessEqualWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).dateLessEqualWorks);
                QUnit.test("DateTime - DateGreaterThanWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).dateGreaterThanWorks);
                QUnit.test("DateTime - DateGreaterEqualWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).dateGreaterEqualWorks);
                QUnit.test("DateTime - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).getHashCodeWorks);
                QUnit.test("DateTime - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).equalsWorks);
                QUnit.test("DateTime - DateTimeEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).dateTimeEqualsWorks);
                QUnit.test("DateTime - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).compareToWorks);
                QUnit.test("DateTime - DateTimes", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests).dateTimes);
                QUnit.test("TimeSpan - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).typePropertiesAreCorrect);
                QUnit.test("TimeSpan - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).defaultConstructorWorks);
                QUnit.test("TimeSpan - DefaultValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).defaultValueWorks);
                QUnit.test("TimeSpan - ZeroWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).zeroWorks);
                QUnit.test("TimeSpan - CreatingInstanceReturnsTimeSpanWithZeroValue", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).creatingInstanceReturnsTimeSpanWithZeroValue);
                QUnit.test("TimeSpan - ParameterConstructorsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).parameterConstructorsWorks);
                QUnit.test("TimeSpan - FactoryMethodsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).factoryMethodsWork);
                QUnit.test("TimeSpan - PropertiesWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).propertiesWork);
                QUnit.test("TimeSpan - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).compareToWorks);
                QUnit.test("TimeSpan - CompareWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).compareWorks);
                QUnit.test("TimeSpan - StaticEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).staticEqualsWorks);
                QUnit.test("TimeSpan - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).equalsWorks);
                QUnit.test("TimeSpan - ToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).toStringWorks);
                QUnit.test("TimeSpan - AddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).addWorks);
                QUnit.test("TimeSpan - SubtractWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).subtractWorks);
                QUnit.test("TimeSpan - DurationWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).durationWorks);
                QUnit.test("TimeSpan - NegateWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).negateWorks);
                QUnit.test("TimeSpan - ComparisonOperatorsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).comparisonOperatorsWork);
                QUnit.test("TimeSpan - AdditionOperatorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).additionOperatorWorks);
                QUnit.test("TimeSpan - SubtractionOperatorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).subtractionOperatorWorks);
                QUnit.test("TimeSpan - UnaryPlusWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).unaryPlusWorks);
                QUnit.test("TimeSpan - UnaryMinusWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests).unaryMinusWorks);
                QUnit.module("Decimal Math");
                QUnit.test("TestSubtractOperator", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests).testSubtractOperator);
                QUnit.test("TestRemainderOperator", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests).testRemainderOperator);
                QUnit.test("TestMultiplyOperator", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests).testMultiplyOperator);
                QUnit.test("TestDivideOperator", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests).testDivideOperator);
                QUnit.test("TestAddOperator", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests).testAddOperator);
                QUnit.test("TestAddMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests).testAddMethod);
                QUnit.test("TestDivideMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests).testDivideMethod);
                QUnit.test("TestMultiplyMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests).testMultiplyMethod);
                QUnit.test("TestRemainderMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests).testRemainderMethod);
                QUnit.test("TestSubtractMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests).testSubtractMethod);
                QUnit.test("TestCeilingMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests).testCeilingMethod);
                QUnit.test("TestFloorMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests).testFloorMethod);
                QUnit.module("Diagnostics");
                QUnit.test("Contract - Assume", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests).assume);
                QUnit.test("Contract - AssumeWithUserMessage", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests).assumeWithUserMessage);
                QUnit.test("Contract - _Assert", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests)._Assert);
                QUnit.test("Contract - AssertWithUserMessage", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests).assertWithUserMessage);
                QUnit.test("Contract - Requires", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests).requires);
                QUnit.test("Contract - RequiresWithUserMessage", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests).requiresWithUserMessage);
                QUnit.test("Contract - RequiresWithTypeException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests).requiresWithTypeException);
                QUnit.test("Contract - RequiredWithTypeExceptionAndUserMessage", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests).requiredWithTypeExceptionAndUserMessage);
                QUnit.test("Contract - ForAll", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests).forAll);
                QUnit.test("Contract - ForAllWithCollection", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests).forAllWithCollection);
                QUnit.test("Contract - Exists", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests).exists);
                QUnit.test("Contract - ExistsWithCollection", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests).existsWithCollection);
                QUnit.test("Stopwatch - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests).defaultConstructorWorks);
                QUnit.test("Stopwatch - ConstantsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests).constantsWorks);
                QUnit.test("Stopwatch - StartNewWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests).startNewWorks);
                QUnit.test("Stopwatch - StartAndStopWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests).startAndStopWork);
                QUnit.test("Stopwatch - ElapsedWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests).elapsedWorks);
                QUnit.test("Stopwatch - GetTimestampWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests).getTimestampWorks);
                QUnit.module("Enum");
                QUnit.test("Enum - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_EnumTests).typePropertiesAreCorrect);
                QUnit.test("Enum - FirstValueOfEnumIsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_EnumTests).firstValueOfEnumIsZero);
                QUnit.test("Enum - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_EnumTests).getHashCodeWorks);
                QUnit.test("Enum - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_EnumTests).equalsWorks);
                QUnit.module("EqualityComparer");
                QUnit.test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests).typePropertiesAreCorrect);
                QUnit.test("DefaultComparerCanGetHashCodeOfNumber", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests).defaultComparerCanGetHashCodeOfNumber);
                QUnit.test("DefaultComparerReturnsZeroAsHashCodeForNullAndUndefined", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests).defaultComparerReturnsZeroAsHashCodeForNullAndUndefined);
                QUnit.test("DefaultComparerCanDetermineEquality", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests).defaultComparerCanDetermineEquality);
                QUnit.test("DefaultComparerInvokesOverriddenGetHashCode", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests).defaultComparerInvokesOverriddenGetHashCode);
                QUnit.test("DefaultComparerInvokesOverriddenEquals", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests).defaultComparerInvokesOverriddenEquals);
                QUnit.module("Exceptions");
                QUnit.test("AggregateException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests).typePropertiesAreCorrect);
                QUnit.test("AggregateException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests).defaultConstructorWorks);
                QUnit.test("AggregateException - ConstructorWithIEnumerableInnerExceptionsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests).constructorWithIEnumerableInnerExceptionsWorks);
                QUnit.test("AggregateException - ConstructorWithInnerExceptionArrayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests).constructorWithInnerExceptionArrayWorks);
                QUnit.test("AggregateException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests).constructorWithMessageWorks);
                QUnit.test("AggregateException - ConstructorWithMessageAndIEnumerableInnerExceptionsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests).constructorWithMessageAndIEnumerableInnerExceptionsWorks);
                QUnit.test("AggregateException - ConstructorWithMessageAndInnerExceptionArrayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests).constructorWithMessageAndInnerExceptionArrayWorks);
                QUnit.test("AggregateException - FlattenWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests).flattenWorks);
                QUnit.test("ArgumentException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests).typePropertiesAreCorrect);
                QUnit.test("ArgumentException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests).defaultConstructorWorks);
                QUnit.test("ArgumentException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests).constructorWithMessageWorks);
                QUnit.test("ArgumentException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("ArgumentException - ConstructorWithMessageAndParamNameWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests).constructorWithMessageAndParamNameWorks);
                QUnit.test("ArgumentException - ConstructorWithMessageAndParamNameAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests).constructorWithMessageAndParamNameAndInnerExceptionWorks);
                QUnit.test("ArgumentNullException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests).typePropertiesAreCorrect);
                QUnit.test("ArgumentNullException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests).defaultConstructorWorks);
                QUnit.test("ArgumentNullException - ConstructorWithParamNameWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests).constructorWithParamNameWorks);
                QUnit.test("ArgumentNullException - ConstructorWithParamNameAndMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests).constructorWithParamNameAndMessageWorks);
                QUnit.test("ArgumentNullException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("ArgumentOutOfRangeException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests).typePropertiesAreCorrect);
                QUnit.test("ArgumentOutOfRangeException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests).defaultConstructorWorks);
                QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests).constructorWithParamNameWorks);
                QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameAndMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests).constructorWithParamNameAndMessageWorks);
                QUnit.test("ArgumentOutOfRangeException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameAndActualValueAndMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests).constructorWithParamNameAndActualValueAndMessageWorks);
                QUnit.test("ArgumentOutOfRangeException - RangeErrorIsConvertedToArgumentOutOfRangeException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests).rangeErrorIsConvertedToArgumentOutOfRangeException);
                QUnit.test("ArithmeticException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArithmeticExceptionTests).typePropertiesAreCorrect);
                QUnit.test("ArithmeticException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArithmeticExceptionTests).defaultConstructorWorks);
                QUnit.test("ArithmeticException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArithmeticExceptionTests).constructorWithMessageWorks);
                QUnit.test("ArithmeticException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArithmeticExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("CultureNotFoundException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests).typePropertiesAreCorrect);
                QUnit.test("CultureNotFoundException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests).defaultConstructorWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests).constructorWithMessageWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithMessageAndParamNameWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests).constructorWithMessageAndParamNameWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithMessageAndCultureNameAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests).constructorWithMessageAndCultureNameAndInnerExceptionWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithParamNameAndCultureNameAndMessage", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests).constructorWithParamNameAndCultureNameAndMessage);
                QUnit.test("CultureNotFoundException - ConstructorWithMessageAndCultureIdAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests).constructorWithMessageAndCultureIdAndInnerExceptionWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithParamNameAndCultureIdAndMessage", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests).constructorWithParamNameAndCultureIdAndMessage);
                QUnit.test("DivideByZeroException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_DivideByZeroExceptionTests).typePropertiesAreCorrect);
                QUnit.test("DivideByZeroException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_DivideByZeroExceptionTests).defaultConstructorWorks);
                QUnit.test("DivideByZeroException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_DivideByZeroExceptionTests).constructorWithMessageWorks);
                QUnit.test("DivideByZeroException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_DivideByZeroExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("Exception - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests).typePropertiesAreCorrect);
                QUnit.test("Exception - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests).defaultConstructorWorks);
                QUnit.test("Exception - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests).constructorWithMessageWorks);
                QUnit.test("Exception - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("Exception - MessagePropertyCanBeOverridden", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests).messagePropertyCanBeOverridden);
                QUnit.test("Exception - InnerExceptionPropertyCanBeOverridden", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests).innerExceptionPropertyCanBeOverridden);
                QUnit.test("FormatException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_FormatExceptionTests).typePropertiesAreCorrect);
                QUnit.test("FormatException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_FormatExceptionTests).defaultConstructorWorks);
                QUnit.test("FormatException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_FormatExceptionTests).constructorWithMessageWorks);
                QUnit.test("FormatException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_FormatExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("InvalidCastException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidCastExceptionTests).typePropertiesAreCorrect);
                QUnit.test("InvalidCastException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidCastExceptionTests).defaultConstructorWorks);
                QUnit.test("InvalidCastException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidCastExceptionTests).constructorWithMessageWorks);
                QUnit.test("InvalidCastException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidCastExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("InvalidOperationException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidOperationExceptionTests).typePropertiesAreCorrect);
                QUnit.test("InvalidOperationException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidOperationExceptionTests).defaultConstructorWorks);
                QUnit.test("InvalidOperationException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidOperationExceptionTests).constructorWithMessageWorks);
                QUnit.test("InvalidOperationException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidOperationExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("KeyNotFoundException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_KeyNotFoundExceptionTests).typePropertiesAreCorrect);
                QUnit.test("KeyNotFoundException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_KeyNotFoundExceptionTests).defaultConstructorWorks);
                QUnit.test("KeyNotFoundException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_KeyNotFoundExceptionTests).constructorWithMessageWorks);
                QUnit.test("KeyNotFoundException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_KeyNotFoundExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("NotImplementedException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotImplementedExceptionTests).typePropertiesAreCorrect);
                QUnit.test("NotImplementedException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotImplementedExceptionTests).defaultConstructorWorks);
                QUnit.test("NotImplementedException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotImplementedExceptionTests).constructorWithMessageWorks);
                QUnit.test("NotImplementedException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotImplementedExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("NotSupportedException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotSupportedExceptionTests).typePropertiesAreCorrect);
                QUnit.test("NotSupportedException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotSupportedExceptionTests).defaultConstructorWorks);
                QUnit.test("NotSupportedException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotSupportedExceptionTests).constructorWithMessageWorks);
                QUnit.test("NotSupportedException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotSupportedExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("NullReferenceException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests).typePropertiesAreCorrect);
                QUnit.test("NullReferenceException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests).defaultConstructorWorks);
                QUnit.test("NullReferenceException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests).constructorWithMessageWorks);
                QUnit.test("NullReferenceException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("NullReferenceException - AccessingAFieldOnANullObjectCausesANullReferenceException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests).accessingAFieldOnANullObjectCausesANullReferenceException);
                QUnit.test("OperationCanceledException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests).typePropertiesAreCorrect);
                QUnit.test("OperationCanceledException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests).defaultConstructorWorks);
                QUnit.test("OperationCanceledException - CancellationTokenOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests).cancellationTokenOnlyConstructorWorks);
                QUnit.test("OperationCanceledException - MessageOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests).messageOnlyConstructorWorks);
                QUnit.test("OperationCanceledException - MessageAndInnerExceptionConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests).messageAndInnerExceptionConstructorWorks);
                QUnit.test("OperationCanceledException - MessageAndCancellationTokenConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests).messageAndCancellationTokenConstructorWorks);
                QUnit.test("OperationCanceledException - MessageAndInnerExceptionAndCancellationTokenConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests).messageAndInnerExceptionAndCancellationTokenConstructorWorks);
                QUnit.test("OutOfMemoryException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OutOfMemoryExceptionTests).typePropertiesAreCorrect);
                QUnit.test("OutOfMemoryException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OutOfMemoryExceptionTests).defaultConstructorWorks);
                QUnit.test("OutOfMemoryException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OutOfMemoryExceptionTests).constructorWithMessageWorks);
                QUnit.test("OutOfMemoryException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OutOfMemoryExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("OverflowException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OverflowExceptionTests).typePropertiesAreCorrect);
                QUnit.test("OverflowException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OverflowExceptionTests).defaultConstructorWorks);
                QUnit.test("OverflowException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OverflowExceptionTests).constructorWithMessageWorks);
                QUnit.test("OverflowException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OverflowExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("PromiseException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_PromiseExceptionTests).typePropertiesAreCorrect);
                QUnit.test("PromiseException - ArgumentsOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_PromiseExceptionTests).argumentsOnlyConstructorWorks);
                QUnit.test("PromiseException - ArgumentsAndMessageConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_PromiseExceptionTests).argumentsAndMessageConstructorWorks);
                QUnit.test("PromiseException - ArgumentsAndMessageAndInnerExceptionConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_PromiseExceptionTests).argumentsAndMessageAndInnerExceptionConstructorWorks);
                QUnit.test("RankException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RankExceptionTests).typePropertiesAreCorrect);
                QUnit.test("RankException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RankExceptionTests).defaultConstructorWorks);
                QUnit.test("RankException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RankExceptionTests).constructorWithMessageWorks);
                QUnit.test("SystemException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_SystemExceptionTests).typePropertiesAreCorrect);
                QUnit.test("SystemException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_SystemExceptionTests).defaultConstructorWorks);
                QUnit.test("SystemException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_SystemExceptionTests).constructorWithMessageWorks);
                QUnit.test("SystemException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_SystemExceptionTests).constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("TaskCanceledException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests).typePropertiesAreCorrect);
                QUnit.test("TaskCanceledException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests).defaultConstructorWorks);
                QUnit.test("TaskCanceledException - MessageOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests).messageOnlyConstructorWorks);
                QUnit.test("TaskCanceledException - TaskOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests).taskOnlyConstructorWorks);
                QUnit.test("TaskCanceledException - MessageAndInnerExceptionConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests).messageAndInnerExceptionConstructorWorks);
                QUnit.test("Try/Catch/Finally - ThrowingAndCatchingExceptionsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionTests).throwingAndCatchingExceptionsWorks);
                QUnit.test("Try/Catch/Finally - ExceptionOfWrongTypeIsNotCaught", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionTests).exceptionOfWrongTypeIsNotCaught);
                QUnit.test("Try/Catch/Finally - CanCatchExceptionAsBaseType", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ExceptionTests).canCatchExceptionAsBaseType);
                QUnit.module("Issues");
                QUnit.test("#69 - ThisKeywordInStructConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge069).thisKeywordInStructConstructorWorks);
                QUnit.test("#381 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge381).testUseCase);
                QUnit.test("#447 - CheckInlineExpression", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge447).checkInlineExpression);
                QUnit.test("#447 - CheckInlineCalls", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge447).checkInlineCalls);
                QUnit.test("#472 - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge472).test);
                QUnit.test("#479 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge479).testUseCase);
                QUnit.test("#485 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge485).testUseCase);
                QUnit.test("#495 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge495).testUseCase);
                QUnit.test("#501 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge501).testUseCase);
                QUnit.test("#502 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge502).testUseCase);
                QUnit.test("#503 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge503).testUseCase);
                QUnit.test("#508 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge508).testUseCase);
                QUnit.test("#514 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge514).testUseCase);
                QUnit.test("#514 - TestRelated", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge514).testRelated);
                QUnit.test("#520 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge520).testUseCase);
                QUnit.test("#532 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge532).testUseCase);
                QUnit.test("#538 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge538).testUseCase);
                QUnit.test("#544 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge544).testUseCase);
                QUnit.test("#544 - TestRelated", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge544).testRelated);
                QUnit.test("#546 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge546).testUseCase);
                QUnit.test("#546 - TestRelated", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge546).testRelated);
                QUnit.test("#548 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge548).testUseCase);
                QUnit.test("#549 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge549).testUseCase);
                QUnit.test("#550 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge550).testUseCase);
                QUnit.test("#554 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge554).testUseCase);
                QUnit.test("#555 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge555).testUseCase);
                QUnit.test("#563 - TesForeach", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge563).tesForeach);
                QUnit.test("#563 - TesFor", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge563).tesFor);
                QUnit.test("#565 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge565).testUseCase);
                QUnit.test("#572 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge572).testUseCase);
                QUnit.test("#577 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge577).testUseCase);
                QUnit.test("#578 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge578).testUseCase);
                QUnit.test("#580 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge580).testUseCase);
                QUnit.test("#582 - TestAddTimeSpan", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge582).testAddTimeSpan);
                QUnit.test("#582 - TestAddTicks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge582).testAddTicks);
                QUnit.test("#582 - TestTicks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge582).testTicks);
                QUnit.test("#582 - TestSubtractTimeSpan", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge582).testSubtractTimeSpan);
                QUnit.test("#582 - TestTimeOfDay", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge582).testTimeOfDay);
                QUnit.test("#583 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge583).testUseCase);
                QUnit.test("#586 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge586).testUseCase);
                QUnit.test("#592 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge592).testUseCase);
                QUnit.test("#595 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge595).testUseCase);
                QUnit.test("#597 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge597).testUseCase);
                QUnit.test("#606 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge606).testUseCase);
                QUnit.test("#607 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge607).testUseCase);
                QUnit.test("#608 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge608).testUseCase);
                QUnit.test("#615 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge615).testUseCase);
                QUnit.test("#625 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge625).testUseCase);
                QUnit.test("#634 - TestUseCase1", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge634).testUseCase1);
                QUnit.test("#634 - TestUseCase2", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge634).testUseCase2);
                QUnit.test("#634 - TestUseCaseFor658", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge634).testUseCaseFor658);
                QUnit.test("#647 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge647).testUseCase);
                QUnit.test("#648 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge648).testUseCase);
                QUnit.test("#655 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge655).testUseCase);
                QUnit.test("#661 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge661).testUseCase);
                QUnit.test("#664 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge664).testUseCase);
                QUnit.test("#666 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge666).testUseCase);
                QUnit.test("#671 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge671).testUseCase);
                QUnit.test("#674 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge674).testUseCase);
                QUnit.test("#675 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge675).testUseCase);
                QUnit.test("#687 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge687).testUseCase);
                QUnit.test("#689 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge689).testUseCase);
                QUnit.test("#690 - TestUseCaseForInstance", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge690).testUseCaseForInstance);
                QUnit.test("#690 - TestUseCaseForStatic", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge690).testUseCaseForStatic);
                QUnit.test("#691 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge691).testUseCase);
                QUnit.test("#692 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge692).testUseCase);
                QUnit.test("#694 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge694).testUseCase);
                QUnit.test("#696 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge696).testUseCase);
                QUnit.test("#699 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge699).testUseCase);
                QUnit.test("#708 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge708).testUseCase);
                QUnit.test("#721 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge721).testUseCase);
                QUnit.test("#722 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge722).testUseCase);
                QUnit.test("#726 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge726).testUseCase);
                QUnit.test("# 732- TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge732).testUseCase);
                QUnit.test("#733 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge733).testUseCase);
                QUnit.test("#751 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge751).testUseCase);
                QUnit.test("#758 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge758).testUseCase);
                QUnit.test("#760 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge760).testUseCase);
                QUnit.test("#762 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge762).testUseCase);
                QUnit.test("#772 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge772).testUseCase);
                QUnit.test("#777 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge777).testUseCase);
                QUnit.test("#782 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge782).testUseCase);
                QUnit.test("#785 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge785).testUseCase);
                QUnit.test("#786 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge786).testUseCase);
                QUnit.test("#788 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge788).testUseCase);
                QUnit.test("#789 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge789).testUseCase);
                QUnit.test("#793 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge793).testUseCase);
                QUnit.test("#795 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge795).testUseCase);
                QUnit.test("#795 - TestRelated", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge795).testRelated);
                QUnit.test("#796 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge796).testUseCase);
                QUnit.test("#815 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge815).testUseCase);
                QUnit.test("#816 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge816).testUseCase);
                QUnit.test("#817 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge817).testUseCase);
                QUnit.test("#818 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge818).testUseCase);
                QUnit.test("#821 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge821).testUseCase);
                QUnit.test("#823 - GetTicksReturnsCorrectValue", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge823).getTicksReturnsCorrectValue);
                QUnit.test("#826 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge826).testUseCase);
                QUnit.test("#830 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge830).testUseCase);
                QUnit.test("#835 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge835).testUseCase);
                QUnit.test("#841 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge841).testUseCase);
                QUnit.test("#844 - NullableAndSimpleDateTimeToStringEquals", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge844).nullableAndSimpleDateTimeToStringEquals);
                QUnit.test("#849 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge849).testUseCase);
                QUnit.test("#857 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge857).testUseCase);
                QUnit.test("#861 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge861).testUseCase);
                QUnit.test("#863 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge863).testUseCase);
                QUnit.test("#874 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge874).testUseCase);
                QUnit.test("#881 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge881).testUseCase);
                QUnit.test("#889 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge889).testUseCase);
                QUnit.test("#889 - TestMakeEnumerable", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge889).testMakeEnumerable);
                QUnit.test("#892 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge892).testUseCase);
                QUnit.test("#893 - EnumToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge893).enumToStringWorks);
                QUnit.test("#898 - TestDecimalConversion", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge898).testDecimalConversion);
                QUnit.test("#898 - TestDoubleConversion", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge898).testDoubleConversion);
                QUnit.test("#905 - DayOfWeekFixed", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge905).dayOfWeekFixed);
                QUnit.test("#906 - TestIfAsyncMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge906).testIfAsyncMethod);
                QUnit.test("#906 - TestIfElseAsyncMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge906).testIfElseAsyncMethod);
                QUnit.test("#907 - TestStringSpitWithNullParameterFixed", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge907).testStringSpitWithNullParameterFixed);
                QUnit.test("#912 - TestAsyncMethodInBlock", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge912).testAsyncMethodInBlock);
                QUnit.test("#913 - TestNullableDateTimeGreaterThanWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge913).testNullableDateTimeGreaterThanWorks);
                QUnit.test("#918 - TestDynamicAsyncResult", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge918).testDynamicAsyncResult);
                QUnit.test("#922 - TestLinqDecimal", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge922).testLinqDecimal);
                QUnit.test("#928 - TestAsyncMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge928).testAsyncMethod);
                QUnit.test("#929 - TestAsyncException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge929).testAsyncException);
                QUnit.test("#930 - TestAsyncException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge930).testAsyncException);
                QUnit.test("#933 - TestBooleanInIfStatement", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge933).testBooleanInIfStatement);
                QUnit.test("#968 - TestDecimalDoesNotParseIncorrectValue", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge968).testDecimalDoesNotParseIncorrectValue);
                QUnit.test("#968 - TestDecimalParsesCorrectValues", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge968).testDecimalParsesCorrectValues);
                QUnit.test("#975 - TestCastToLongWorksForBigNumberInIE", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge975).testCastToLongWorksForBigNumberInIE);
                QUnit.test("#989 - DateTimeToISOStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge989).dateTimeToISOStringWorks);
                QUnit.test("#989 - DateToISOStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge989).dateToISOStringWorks);
                QUnit.test("#522 - TestUseCase1", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge522).testUseCase1);
                QUnit.test("#522 - TestUseCase2", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge522).testUseCase2);
                QUnit.test("#537 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge537).testUseCase);
                QUnit.test("#558 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge558).testUseCase);
                QUnit.test("#559 - TestUseCase1", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge559).testUseCase1);
                QUnit.test("#559 - TestUseCase2", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge559).testUseCase2);
                QUnit.test("#559 - TestUseCase3", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge559).testUseCase3);
                QUnit.test("#566 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge566).testUseCase);
                QUnit.test("#588 - TestUseCase2", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge588C).testUseCase2);
                QUnit.test("#603 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge603).testUseCase);
                QUnit.test("#603 - TestRelated", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge603).testRelated);
                QUnit.test("#635 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge635).testUseCase);
                QUnit.test("#652 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge652).testUseCase);
                QUnit.test("#660 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge660).testUseCase);
                QUnit.test("#882 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge882).testUseCase);
                QUnit.test("#588 - TestUseCase1", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge588).testUseCase1);
                QUnit.test("#623 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge623).testUseCase);
                QUnit.test("#693 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge693).testUseCase);
                QUnit.test("#883 - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_Bridge883).testUseCase);
                QUnit.test("#169", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n169);
                QUnit.test("#240", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n240);
                QUnit.test("#264", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n264);
                QUnit.test("#266", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n266);
                QUnit.test("#272", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n272);
                QUnit.test("#273", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n273);
                QUnit.test("#277", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n277);
                QUnit.test("#294", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n294);
                QUnit.test("#304", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n304);
                QUnit.test("#305", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n305);
                QUnit.test("#306", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n306);
                QUnit.test("#329", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n329);
                QUnit.test("#335", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n335);
                QUnit.test("#336", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n336);
                QUnit.test("#337", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n337);
                QUnit.test("#338", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n338);
                QUnit.test("#339", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n339);
                QUnit.test("#340", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n340);
                QUnit.test("#341", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n341);
                QUnit.test("#342", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n342);
                QUnit.test("#349", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n349);
                QUnit.test("#377", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n377);
                QUnit.test("#383", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n383);
                QUnit.test("#393", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n393);
                QUnit.test("#395", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n395);
                QUnit.test("#406", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n406);
                QUnit.test("#407", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n407);
                QUnit.test("N409", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n409);
                QUnit.test("N410", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n410);
                QUnit.test("N418", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n418);
                QUnit.test("N422", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n422);
                QUnit.test("N428", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n428);
                QUnit.test("N435", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n435);
                QUnit.test("N436", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n436);
                QUnit.test("N438", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n438);
                QUnit.test("N439", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n439);
                QUnit.test("N442", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n442);
                QUnit.test("N460", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n460);
                QUnit.test("N467", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n467);
                QUnit.test("N469", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n469);
                QUnit.test("N470", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n470);
                QUnit.test("#499", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BridgeIssues_TestBridgeIssues).n499);
                QUnit.module("LINQ");
                QUnit.test("Aggregate - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqAggregateOperators).test);
                QUnit.test("Aggregate - Bridge315", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqAggregateOperators).bridge315);
                QUnit.test("Conversion - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqConversionOperators).test);
                QUnit.test("Element - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqElementOperators).test);
                QUnit.test("Generation - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqGenerationOperators).test);
                QUnit.test("Grouping - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqGroupingOperators).test);
                QUnit.test("Grouping - TestComplexGrouping", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqGroupingOperators).testComplexGrouping);
                QUnit.test("Grouping - TestAnagrams", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqGroupingOperators).testAnagrams);
                QUnit.test("Join - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqJoinOperators).test);
                QUnit.test("Misc - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqMiscellaneousOperators).test);
                QUnit.test("Ordering - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqOrderingOperators).test);
                QUnit.test("Partitioning - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqPartitioningOperators).test);
                QUnit.test("Projection - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqProjectionOperators).test);
                QUnit.test("Quantifiers - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqQuantifiers).test);
                QUnit.test("Query - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqQueryExecution).test);
                QUnit.test("Restriction- Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqRestrictionOperators).test);
                QUnit.test("Set - Test", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqSetOperators).test);
                QUnit.module("Math");
                QUnit.test("Math - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).constantsWork);
                QUnit.test("Math - AbsOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).absOfDoubleWorks);
                QUnit.test("Math - AbsOfIntWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).absOfIntWorks);
                QUnit.test("Math - AbsOfLongWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).absOfLongWorks);
                QUnit.test("Math - AbsOfSbyteWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).absOfSbyteWorks);
                QUnit.test("Math - AbsOfShortWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).absOfShortWorks);
                QUnit.test("Math - AbsOfFloatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).absOfFloatWorks);
                QUnit.test("Math - AbsOfDecimalWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).absOfDecimalWorks);
                QUnit.test("Math - AcosWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).acosWorks);
                QUnit.test("Math - AsinWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).asinWorks);
                QUnit.test("Math - AtanWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).atanWorks);
                QUnit.test("Math - Atan2Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).atan2Works);
                QUnit.test("Math - CosWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).cosWorks);
                QUnit.test("Math - DivRemWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).divRemWorks);
                QUnit.test("Math - ExpWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).expWorks);
                QUnit.test("Math - FloorOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).floorOfDoubleWorks);
                QUnit.test("Math - FloorOfDecimalWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).floorOfDecimalWorks);
                QUnit.test("Math - LogWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).logWorks);
                QUnit.test("Math - MaxOfByteWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).maxOfByteWorks);
                QUnit.test("Math - MaxOfDecimalWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).maxOfDecimalWorks);
                QUnit.test("Math - MaxOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).maxOfDoubleWorks);
                QUnit.test("Math - MaxOfShortWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).maxOfShortWorks);
                QUnit.test("Math - MaxOfIntWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).maxOfIntWorks);
                QUnit.test("Math - MaxOfLongWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).maxOfLongWorks);
                QUnit.test("Math - MaxOfSByteWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).maxOfSByteWorks);
                QUnit.test("Math - MaxOfFloatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).maxOfFloatWorks);
                QUnit.test("Math - MaxOfUShortWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).maxOfUShortWorks);
                QUnit.test("Math - MaxOfUIntWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).maxOfUIntWorks);
                QUnit.test("Math - MaxOfULongWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).maxOfULongWorks);
                QUnit.test("Math - MinOfByteWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).minOfByteWorks);
                QUnit.test("Math - MinOfDecimalWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).minOfDecimalWorks);
                QUnit.test("Math - MinOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).minOfDoubleWorks);
                QUnit.test("Math - MinOfShortWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).minOfShortWorks);
                QUnit.test("Math - MinOfIntWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).minOfIntWorks);
                QUnit.test("Math - MinOfLongWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).minOfLongWorks);
                QUnit.test("Math - MinOfSByteWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).minOfSByteWorks);
                QUnit.test("Math - MinOfFloatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).minOfFloatWorks);
                QUnit.test("Math - MinOfUShortWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).minOfUShortWorks);
                QUnit.test("Math - MinOfUIntWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).minOfUIntWorks);
                QUnit.test("Math - MinOfULongWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).minOfULongWorks);
                QUnit.test("Math - PowWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).powWorks);
                QUnit.test("Math - RandomWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).randomWorks);
                QUnit.test("Math - RoundOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).roundOfDoubleWorks);
                QUnit.test("Math - RoundDecimalWithModeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).roundDecimalWithModeWorks);
                QUnit.test("Math - RoundDecimalWithPrecisionAndModeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).roundDecimalWithPrecisionAndModeWorks);
                QUnit.test("Math - RoundDoubleWithModeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).roundDoubleWithModeWorks);
                QUnit.test("Math - RoundDoubleWithPrecisionAndModeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).roundDoubleWithPrecisionAndModeWorks);
                QUnit.test("Math - JsRoundWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).jsRoundWorks);
                QUnit.test("Math - IEEERemainderWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).iEEERemainderWorks);
                QUnit.test("Math - SinWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).sinWorks);
                QUnit.test("Math - SqrtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).sqrtWorks);
                QUnit.test("Math - TanWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests).tanWorks);
                QUnit.module("Nullable");
                QUnit.test("Nullable - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).typePropertiesAreCorrect);
                QUnit.test("Nullable - ConvertingToNullableWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).convertingToNullableWorks);
                QUnit.test("Nullable - HasValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).hasValueWorks);
                QUnit.test("Nullable - BoxingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).boxingWorks);
                QUnit.test("Nullable - UnboxingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).unboxingWorks);
                QUnit.test("Nullable - ValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).valueWorks);
                QUnit.test("Nullable - UnboxingValueOfWrongTypeThrowsAnException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).unboxingValueOfWrongTypeThrowsAnException);
                QUnit.test("Nullable - GetValueOrDefaultWithArgWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).getValueOrDefaultWithArgWorks);
                QUnit.test("Nullable - LiftedEqualityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedEqualityWorks);
                QUnit.test("Nullable - LiftedInequalityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedInequalityWorks);
                QUnit.test("Nullable - LiftedLessThanWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedLessThanWorks);
                QUnit.test("Nullable - LiftedGreaterThanWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedGreaterThanWorks);
                QUnit.test("Nullable - LiftedLessThanOrEqualWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedLessThanOrEqualWorks);
                QUnit.test("Nullable - LiftedGreaterThanOrEqualWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedGreaterThanOrEqualWorks);
                QUnit.test("Nullable - LiftedSubtractionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedSubtractionWorks);
                QUnit.test("Nullable - LiftedAdditionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedAdditionWorks);
                QUnit.test("Nullable - LiftedModWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedModWorks);
                QUnit.test("Nullable - LiftedFloatingPointDivisionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedFloatingPointDivisionWorks);
                QUnit.test("Nullable - LiftedIntegerDivisionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedIntegerDivisionWorks);
                QUnit.test("Nullable - LiftedMultiplicationWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedMultiplicationWorks);
                QUnit.test("Nullable - LiftedBitwiseAndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedBitwiseAndWorks);
                QUnit.test("Nullable - LiftedBitwiseOrWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedBitwiseOrWorks);
                QUnit.test("Nullable - LiftedBitwiseXorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedBitwiseXorWorks);
                QUnit.test("Nullable - LiftedLeftShiftWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedLeftShiftWorks);
                QUnit.test("Nullable - LiftedSignedRightShiftWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedSignedRightShiftWorks);
                QUnit.test("Nullable - LiftedUnsignedRightShiftWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedUnsignedRightShiftWorks);
                QUnit.test("LiftedBooleanAndWorks #314", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedBooleanAndWorks);
                QUnit.test("LiftedBooleanOrWorks #314", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedBooleanOrWorks);
                QUnit.test("Nullable - LiftedBooleanNotWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedBooleanNotWorks);
                QUnit.test("Nullable - LiftedNegationWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedNegationWorks);
                QUnit.test("Nullable - LiftedUnaryPlusWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedUnaryPlusWorks);
                QUnit.test("Nullable - LiftedOnesComplementWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).liftedOnesComplementWorks);
                QUnit.test("CoalesceWorks #314", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests).coalesceWorks);
                QUnit.module("NumberFormatInfo");
                QUnit.test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NumberFormatInfoTests).typePropertiesAreCorrect);
                QUnit.test("GetFormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NumberFormatInfoTests).getFormatWorks);
                QUnit.test("InvariantWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NumberFormatInfoTests).invariantWorks);
                QUnit.module("Property accessor");
                QUnit.test("AccessorsCanBeInvokedInstance", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests).accessorsCanBeInvokedInstance);
                QUnit.test("AccessorsCanBeInvokedStatic", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests).accessorsCanBeInvokedStatic);
                QUnit.test("AccessorsCanBeInvokedGeneric", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests).accessorsCanBeInvokedGeneric);
                QUnit.test("AccessorsCanBeInvokedGenericStatic", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests).accessorsCanBeInvokedGenericStatic);
                QUnit.test("BaseAccessorsCanBeInvoked", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests).baseAccessorsCanBeInvoked);
                QUnit.test("BaseAccessorsCanBeInvokedGeneric", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests).baseAccessorsCanBeInvokedGeneric);
                QUnit.module("Regex");
                QUnit.test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTests).typePropertiesAreCorrect);
                QUnit.test("StringOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTests).stringOnlyConstructorWorks);
                QUnit.test("ConstructorWithFlagsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTests).constructorWithFlagsWorks);
                QUnit.test("GlobalFlagWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTests).globalFlagWorks);
                QUnit.test("IgnoreCaseFlagWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTests).ignoreCaseFlagWorks);
                QUnit.test("MultilineFlagWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTests).multilineFlagWorks);
                QUnit.test("PatternPropertyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTests).patternPropertyWorks);
                QUnit.test("SourcePropertyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTests).sourcePropertyWorks);
                QUnit.test("ExecWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTests).execWorks);
                QUnit.test("LastIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTests).lastIndexWorks);
                QUnit.test("TestWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTests).testWorks);
                QUnit.test("EscapeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTests).escapeWorks);
                QUnit.module("Simple types");
                QUnit.test("Boolean - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests).typePropertiesAreCorrect);
                QUnit.test("Boolean - DefaultValueIsFalse", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests).defaultValueIsFalse);
                QUnit.test("Boolean - CreatingInstanceReturnsFalse", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests).creatingInstanceReturnsFalse);
                QUnit.test("Boolean - DefaultConstructorReturnsFalse", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests).defaultConstructorReturnsFalse);
                QUnit.test("Boolean - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests).getHashCodeWorks);
                QUnit.test("Boolean - ObjectEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests).objectEqualsWorks);
                QUnit.test("Boolean - BoolEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests).boolEqualsWorks);
                QUnit.test("Boolean - LogicalExclusiveOrWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests).logicalExclusiveOrWorks);
                QUnit.test("Boolean - LogicalAndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests).logicalAndWorks);
                QUnit.test("Boolean - LogicalNegationWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests).logicalNegationWorks);
                QUnit.test("Boolean - ConditionalOperatorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests).conditionalOperatorWorks);
                QUnit.test("Boolean - ConditionalAndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests).conditionalAndWorks);
                QUnit.test("Boolean - ConditionalOrWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests).conditionalOrWorks);
                QUnit.test("Boolean - EqualityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests).equalityWorks);
                QUnit.test("Boolean - InequalityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests).inequalityWorks);
                QUnit.test("Byte - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests).typePropertiesAreCorrect);
                QUnit.test("Byte - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests).castsWork);
                QUnit.test("Byte - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests).defaultValueIs0);
                QUnit.test("Byte - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests).defaultConstructorReturnsZero);
                QUnit.test("Byte - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests).constantsWork);
                QUnit.test("Byte - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests).formatWorks);
                QUnit.test("Byte - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests).iFormattableToStringWorks);
                QUnit.test("Byte - TryParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests).tryParseWorks);
                QUnit.test("Byte - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests).parseWorks);
                QUnit.test("Byte - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests).toStringWithoutRadixWorks);
                QUnit.test("Byte - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests).toStringWithRadixWorks);
                QUnit.test("Byte - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests).getHashCodeWorks);
                QUnit.test("Byte - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests).equalsWorks);
                QUnit.test("Byte - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests).iEquatableEqualsWorks);
                QUnit.test("Byte - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests).compareToWorks);
                QUnit.test("Byte - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests).iComparableCompareToWorks);
                QUnit.test("Char - TypePropertiesAreInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).typePropertiesAreInt32);
                QUnit.test("Char - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).castsWork);
                QUnit.test("Char - DefaultValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).defaultValueWorks);
                QUnit.test("Char - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).defaultConstructorReturnsZero);
                QUnit.test("Char - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).constantsWork);
                QUnit.test("Char - CharComparisonWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).charComparisonWorks);
                QUnit.test("Char - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).parseWorks);
                QUnit.test("Char - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).formatWorks);
                QUnit.test("Char - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).iFormattableToStringWorks);
                QUnit.test("Char - ToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).toStringWorks);
                QUnit.test("Char - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).getHashCodeWorks);
                QUnit.test("Char - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).equalsWorks);
                QUnit.test("Char - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).iEquatableEqualsWorks);
                QUnit.test("Char - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).compareToWorks);
                QUnit.test("Char - IsLowerWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).isLowerWorks);
                QUnit.test("Char - IsUpperWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).isUpperWorks);
                QUnit.test("Char - ToLowerWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).toLowerWorks);
                QUnit.test("Char - ToUpperWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).toUpperWorks);
                QUnit.test("Char - IsDigitWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).isDigitWorks);
                QUnit.test("Char - IsWhiteSpaceWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).isWhiteSpaceWorks);
                QUnit.test("Char - IsDigitWithStringAndIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).isDigitWithStringAndIndexWorks);
                QUnit.test("Char - IsWhiteSpaceWithStringAndIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests).isWhiteSpaceWithStringAndIndexWorks);
                QUnit.test("Decimal - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).typePropertiesAreCorrect);
                QUnit.test("Decimal - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).defaultValueIs0);
                QUnit.test("Decimal - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).constantsWork);
                QUnit.test("Decimal - ConvertingConstructorsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).convertingConstructorsWork);
                QUnit.test("Decimal - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).formatWorks);
                QUnit.test("Decimal - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).iFormattableToStringWorks);
                QUnit.test("Decimal - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).toStringWithoutRadixWorks);
                QUnit.test("Decimal - AddWithStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).addWithStringWorks);
                QUnit.test("Decimal - ConversionsToDecimalWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).conversionsToDecimalWork);
                QUnit.test("Decimal - ConversionsFromDecimalWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).conversionsFromDecimalWork);
                QUnit.test("Decimal - OperatorsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).operatorsWork);
                QUnit.test("Decimal - AddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).addWorks);
                QUnit.test("Decimal - CeilingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).ceilingWorks);
                QUnit.test("Decimal - DivideWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).divideWorks);
                QUnit.test("Decimal - FloorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).floorWorks);
                QUnit.test("Decimal - RemainderWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).remainderWorks);
                QUnit.test("Decimal - MultiplyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).multiplyWorks);
                QUnit.test("Decimal - NegateWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).negateWorks);
                QUnit.test("Decimal - RoundWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).roundWorks);
                QUnit.test("Decimal - RoundWithModeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).roundWithModeWorks);
                QUnit.test("Decimal - SubtractWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).subtractWorks);
                QUnit.test("Decimal - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).getHashCodeWorks);
                QUnit.test("Decimal - ObjectEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).objectEqualsWorks);
                QUnit.test("Decimal - DecimalEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).decimalEqualsWorks);
                QUnit.test("Decimal - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).compareToWorks);
                QUnit.test("Decimal - FullCoalesceWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).fullCoalesceWorks);
                QUnit.test("Decimal - ShortCoalesceWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests).shortCoalesceWorks);
                QUnit.test("Double - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).typePropertiesAreCorrect);
                QUnit.test("Double - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).defaultValueIs0);
                QUnit.test("Double - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).constantsWork);
                QUnit.test("Double - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).defaultConstructorReturnsZero);
                QUnit.test("Double - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).formatWorks);
                QUnit.test("Double - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).iFormattableToStringWorks);
                QUnit.test("Double - ToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).toStringWorks);
                QUnit.test("Double - ToExponentialWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).toExponentialWorks);
                QUnit.test("Double - ToExponentialWithFractionalDigitsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).toExponentialWithFractionalDigitsWorks);
                QUnit.test("Double - ToFixed", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).toFixed);
                QUnit.test("Double - ToFixedWithFractionalDigitsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).toFixedWithFractionalDigitsWorks);
                QUnit.test("Double - ToPrecisionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).toPrecisionWorks);
                QUnit.test("Double - ToPrecisionWithPrecisionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).toPrecisionWithPrecisionWorks);
                QUnit.test("Double - IsPositiveInfinityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).isPositiveInfinityWorks);
                QUnit.test("Double - IsNegativeInfinityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).isNegativeInfinityWorks);
                QUnit.test("Double - IsInfinityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).isInfinityWorks);
                QUnit.test("Double - IsFiniteWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).isFiniteWorks);
                QUnit.test("Double - IsNaNWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).isNaNWorks);
                QUnit.test("Double - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).getHashCodeWorks);
                QUnit.test("Double - ObjectEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).objectEqualsWorks);
                QUnit.test("Double - DoubleEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).doubleEqualsWorks);
                QUnit.test("Double - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests).compareToWorks);
                QUnit.test("Int16 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests).typePropertiesAreCorrect);
                QUnit.test("Int16 - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests).castsWork);
                QUnit.test("Int16 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests).defaultValueIs0);
                QUnit.test("Int16 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests).defaultConstructorReturnsZero);
                QUnit.test("Int16 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests).constantsWork);
                QUnit.test("Int16 - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests).formatWorks);
                QUnit.test("Int16 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests).iFormattableToStringWorks);
                QUnit.test("Int16 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests).tryParseWorks);
                QUnit.test("Int16 - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests).parseWorks);
                QUnit.test("Int16 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests).toStringWithoutRadixWorks);
                QUnit.test("Int16 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests).toStringWithRadixWorks);
                QUnit.test("Int16 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests).getHashCodeWorks);
                QUnit.test("Int16 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests).equalsWorks);
                QUnit.test("Int16 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests).iEquatableEqualsWorks);
                QUnit.test("Int16 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests).compareToWorks);
                QUnit.test("Int16 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests).iComparableCompareToWorks);
                QUnit.test("Int32 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).typePropertiesAreCorrect);
                QUnit.test("Int32 - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).castsWork);
                QUnit.test("Int32 - TypeIsWorksForInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).typeIsWorksForInt32);
                QUnit.test("Int32 - TypeAsWorksForInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).typeAsWorksForInt32);
                QUnit.test("Int32 - UnboxingWorksForInt32", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).unboxingWorksForInt32);
                QUnit.test("Int32 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).defaultValueIs0);
                QUnit.test("Int32 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).defaultConstructorReturnsZero);
                QUnit.test("Int32 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).constantsWork);
                QUnit.test("Int32 - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).formatWorks);
                QUnit.test("Int32 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).iFormattableToStringWorks);
                QUnit.test("Int32 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).tryParseWorks);
                QUnit.test("Int32 - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).parseWorks);
                QUnit.test("Int32 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).toStringWithoutRadixWorks);
                QUnit.test("Int32 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).toStringWithRadixWorks);
                QUnit.test("Int32 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).getHashCodeWorks);
                QUnit.test("Int32 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).equalsWorks);
                QUnit.test("Int32 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).iEquatableEqualsWorks);
                QUnit.test("Int32 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).compareToWorks);
                QUnit.test("Int32 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).iComparableCompareToWorks);
                QUnit.test("Int32 - IntegerDivisionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).integerDivisionWorks);
                QUnit.test("Int32 - IntegerModuloWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).integerModuloWorks);
                QUnit.test("Int32 - IntegerDivisionByZeroThrowsDivideByZeroException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).integerDivisionByZeroThrowsDivideByZeroException);
                QUnit.test("Int32 - DoublesAreTruncatedWhenConvertedToIntegers", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests).doublesAreTruncatedWhenConvertedToIntegers);
                QUnit.test("Int64 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).typePropertiesAreCorrect);
                QUnit.test("Int64 - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).castsWork);
                QUnit.test("Int64 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).defaultValueIs0);
                QUnit.test("Int64 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).defaultConstructorReturnsZero);
                QUnit.test("Int64 - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).formatWorks);
                QUnit.test("Int64 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).iFormattableToStringWorks);
                QUnit.test("Int64 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).tryParseWorks);
                QUnit.test("Int64 - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).parseWorks);
                QUnit.test("Int64 - CastingOfLargeDoublesToInt64Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).castingOfLargeDoublesToInt64Works);
                QUnit.test("Int64 - DivisionOfLargeInt64Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).divisionOfLargeInt64Works);
                QUnit.test("Int64 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).toStringWithoutRadixWorks);
                QUnit.test("Int64 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).toStringWithRadixWorks);
                QUnit.test("Int64 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).getHashCodeWorks);
                QUnit.test("Int64 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).equalsWorks);
                QUnit.test("Int64 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).iEquatableEqualsWorks);
                QUnit.test("Int64 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).compareToWorks);
                QUnit.test("Int64 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests).iComparableCompareToWorks);
                QUnit.test("Object - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests).typePropertiesAreCorrect);
                QUnit.test("Object - CanGetHashCodeForObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests).canGetHashCodeForObject);
                QUnit.test("Object - RepeatedCallsToGetHashCodeReturnsSameValue", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests).repeatedCallsToGetHashCodeReturnsSameValue);
                QUnit.test("Object - ObjectIsEqualToItself", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests).objectIsEqualToItself);
                QUnit.test("Object - ObjectIsNotEqualToOtherObject", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests).objectIsNotEqualToOtherObject);
                QUnit.test("Object - StaticEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests).staticEqualsWorks);
                QUnit.test("Object - ReferenceEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests).referenceEqualsWorks);
                QUnit.test("Object - ToStringOverride", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests).toStringOverride);
                QUnit.test("SByte - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests).typePropertiesAreCorrect);
                QUnit.test("SByte - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests).castsWork);
                QUnit.test("SByte - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests).defaultValueIs0);
                QUnit.test("SByte - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests).defaultConstructorReturnsZero);
                QUnit.test("SByte - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests).constantsWork);
                QUnit.test("SByte - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests).formatWorks);
                QUnit.test("SByte - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests).iFormattableToStringWorks);
                QUnit.test("SByte - TryParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests).tryParseWorks);
                QUnit.test("SByte - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests).parseWorks);
                QUnit.test("SByte - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests).toStringWithoutRadixWorks);
                QUnit.test("SByte - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests).toStringWithRadixWorks);
                QUnit.test("SByte - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests).getHashCodeWorks);
                QUnit.test("SByte - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests).equalsWorks);
                QUnit.test("SByte - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests).iEquatableEqualsWorks);
                QUnit.test("SByte - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests).compareToWorks);
                QUnit.test("SByte - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests).iComparableCompareToWorks);
                QUnit.test("Float - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).typePropertiesAreCorrect);
                QUnit.test("Float - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).defaultValueIs0);
                QUnit.test("Float - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).constantsWork);
                QUnit.test("Float - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).defaultConstructorReturnsZero);
                QUnit.test("Float - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).formatWorks);
                QUnit.test("Float - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).iFormattableToStringWorks);
                QUnit.test("Float - ToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).toStringWorks);
                QUnit.test("Float - ToExponentialWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).toExponentialWorks);
                QUnit.test("Float - ToExponentialWithFractionalDigitsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).toExponentialWithFractionalDigitsWorks);
                QUnit.test("Float - ToFixed", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).toFixed);
                QUnit.test("Float - ToFixedWithFractionalDigitsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).toFixedWithFractionalDigitsWorks);
                QUnit.test("Float - ToPrecisionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).toPrecisionWorks);
                QUnit.test("Float - ToPrecisionWithPrecisionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).toPrecisionWithPrecisionWorks);
                QUnit.test("Float - IsPositiveInfinityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).isPositiveInfinityWorks);
                QUnit.test("Float - IsNegativeInfinityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).isNegativeInfinityWorks);
                QUnit.test("Float - IsInfinityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).isInfinityWorks);
                QUnit.test("Float - IsFiniteWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).isFiniteWorks);
                QUnit.test("Float - IsNaNWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).isNaNWorks);
                QUnit.test("Float - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).getHashCodeWorks);
                QUnit.test("Float - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).equalsWorks);
                QUnit.test("Float - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests).compareToWorks);
                QUnit.test("Version - TestConstructors", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion).testConstructors);
                QUnit.test("Version - TestCloneCompare", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion).testCloneCompare);
                QUnit.test("Version - TestEqualsGetHashCode", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion).testEqualsGetHashCode);
                QUnit.test("Version - TestToString", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion).testToString);
                QUnit.test("Version - TestParse", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion).testParse);
                QUnit.test("Version - TestOperators", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion).testOperators);
                QUnit.test("Tuple - Tuple1Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests).tuple1Works);
                QUnit.test("Tuple - Tuple2Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests).tuple2Works);
                QUnit.test("Tuple - Tuple3Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests).tuple3Works);
                QUnit.test("Tuple - Tuple4Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests).tuple4Works);
                QUnit.test("Tuple - Tuple5Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests).tuple5Works);
                QUnit.test("Tuple - Tuple6Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests).tuple6Works);
                QUnit.test("Tuple - Tuple7Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests).tuple7Works);
                QUnit.test("Tuple - Tuple8Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests).tuple8Works);
                QUnit.test("UInt16 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests).typePropertiesAreCorrect);
                QUnit.test("UInt16 - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests).castsWork);
                QUnit.test("UInt16 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests).defaultValueIs0);
                QUnit.test("UInt16 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests).defaultConstructorReturnsZero);
                QUnit.test("UInt16 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests).constantsWork);
                QUnit.test("UInt16 - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests).formatWorks);
                QUnit.test("UInt16 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests).iFormattableToStringWorks);
                QUnit.test("UInt16 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests).tryParseWorks);
                QUnit.test("UInt16 - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests).parseWorks);
                QUnit.test("UInt16 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests).toStringWithoutRadixWorks);
                QUnit.test("UInt16 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests).toStringWithRadixWorks);
                QUnit.test("UInt16 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests).getHashCodeWorks);
                QUnit.test("UInt16 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests).equalsWorks);
                QUnit.test("UInt16 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests).iEquatableEqualsWorks);
                QUnit.test("UInt16 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests).compareToWorks);
                QUnit.test("UInt16 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests).iComparableCompareToWorks);
                QUnit.test("UInt32 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests).typePropertiesAreCorrect);
                QUnit.test("UInt32 - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests).castsWork);
                QUnit.test("UInt32 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests).defaultValueIs0);
                QUnit.test("UInt32 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests).defaultConstructorReturnsZero);
                QUnit.test("UInt32 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests).constantsWork);
                QUnit.test("UInt32 - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests).formatWorks);
                QUnit.test("UInt32 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests).iFormattableToStringWorks);
                QUnit.test("UInt32 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests).tryParseWorks);
                QUnit.test("UInt32 - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests).parseWorks);
                QUnit.test("UInt32 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests).toStringWithoutRadixWorks);
                QUnit.test("UInt32 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests).toStringWithRadixWorks);
                QUnit.test("UInt32 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests).getHashCodeWorks);
                QUnit.test("UInt32 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests).equalsWorks);
                QUnit.test("UInt32 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests).iEquatableEqualsWorks);
                QUnit.test("UInt32 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests).compareToWorks);
                QUnit.test("UInt32 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests).iComparableCompareToWorks);
                QUnit.test("UInt64 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).typePropertiesAreCorrect);
                QUnit.test("UInt64 - CastsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).castsWork);
                QUnit.test("UInt64 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).defaultValueIs0);
                QUnit.test("UInt64 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).defaultConstructorReturnsZero);
                QUnit.test("UInt64 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).constantsWork);
                QUnit.test("UInt64 - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).formatWorks);
                QUnit.test("UInt64 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).iFormattableToStringWorks);
                QUnit.test("UInt64 - CastingOfLargeValuesToUInt64Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).castingOfLargeValuesToUInt64Works);
                QUnit.test("UInt64 - DivisionOfLargeUInt64Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).divisionOfLargeUInt64Works);
                QUnit.test("UInt64 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).tryParseWorks);
                QUnit.test("UInt64 - ParseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).parseWorks);
                QUnit.test("UInt64 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).toStringWithoutRadixWorks);
                QUnit.test("UInt64 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).toStringWithRadixWorks);
                QUnit.test("UInt64 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).getHashCodeWorks);
                QUnit.test("UInt64 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).equalsWorks);
                QUnit.test("UInt64 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).iEquatableEqualsWorks);
                QUnit.test("UInt64 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).compareToWorks);
                QUnit.test("UInt64 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests).iComparableCompareToWorks);
                QUnit.module("String");
                QUnit.test("String - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).typePropertiesAreCorrect);
                QUnit.test("String - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).defaultConstructorWorks);
                QUnit.test("String - CopyConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).copyConstructorWorks);
                QUnit.test("String - CharAndCountConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).charAndCountConstructorWorks);
                QUnit.test("String - CharArrayConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).charArrayConstructorWorks);
                QUnit.test("String - EmptyFieldWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).emptyFieldWorks);
                QUnit.test("String - LengthPropertyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).lengthPropertyWorks);
                QUnit.test("String - CharAtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).charAtWorks);
                QUnit.test("String - CharCodeAtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).charCodeAtWorks);
                QUnit.test("String - CompareWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).compareWorks);
                QUnit.test("String - CompareWithIgnoreCaseArgWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).compareWithIgnoreCaseArgWorks);
                QUnit.test("String - ConcatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).concatWorks);
                QUnit.test("String - ConcatWithObjectsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).concatWithObjectsWorks);
                QUnit.test("String - EndsWithCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).endsWithCharWorks);
                QUnit.test("String - EndsWithStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).endsWithStringWorks);
                QUnit.test("String - StaticEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).staticEqualsWorks);
                QUnit.test("String - FormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).formatWorks);
                QUnit.test("String - FormatWorksWithIFormattable", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).formatWorksWithIFormattable);
                QUnit.test("String - FormatCanUseEscapedBraces", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).formatCanUseEscapedBraces);
                QUnit.test("String - FromCharCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).fromCharCodeWorks);
                QUnit.test("String - IndexOfCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).indexOfCharWorks);
                QUnit.test("String - IndexOfStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).indexOfStringWorks);
                QUnit.test("String - IndexOfCharWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).indexOfCharWithStartIndexWorks);
                QUnit.test("String - IndexOfCharWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).indexOfCharWithStartIndexAndCountWorks);
                QUnit.test("String - IndexOfStringWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).indexOfStringWithStartIndexWorks);
                QUnit.test("String - IndexOfStringWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).indexOfStringWithStartIndexAndCountWorks);
                QUnit.test("String - IndexOfAnyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).indexOfAnyWorks);
                QUnit.test("String - IndexOfAnyWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).indexOfAnyWithStartIndexWorks);
                QUnit.test("String - IndexOfAnyWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).indexOfAnyWithStartIndexAndCountWorks);
                QUnit.test("String - InsertWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).insertWorks);
                QUnit.test("String - IsNullOrEmptyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).isNullOrEmptyWorks);
                QUnit.test("String - LastIndexOfCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).lastIndexOfCharWorks);
                QUnit.test("String - LastIndexOfStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).lastIndexOfStringWorks);
                QUnit.test("String - LastIndexOfCharWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).lastIndexOfCharWithStartIndexWorks);
                QUnit.test("String - LastIndexOfStringWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).lastIndexOfStringWithStartIndexWorks);
                QUnit.test("String - LastIndexOfCharWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).lastIndexOfCharWithStartIndexAndCountWorks);
                QUnit.test("String - LastIndexOfStringWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).lastIndexOfStringWithStartIndexAndCountWorks);
                QUnit.test("String - LastIndexOfAnyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).lastIndexOfAnyWorks);
                QUnit.test("String - LastIndexOfAnyWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).lastIndexOfAnyWithStartIndexWorks);
                QUnit.test("String - LastIndexOfAnyWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).lastIndexOfAnyWithStartIndexAndCountWorks);
                QUnit.test("String - LocaleCompareWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).localeCompareWorks);
                QUnit.test("String - MatchWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).matchWorks);
                QUnit.test("String - PadLeftWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).padLeftWorks);
                QUnit.test("String - PadLeftWithCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).padLeftWithCharWorks);
                QUnit.test("String - PadRightWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).padRightWorks);
                QUnit.test("String - PadRightWithCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).padRightWithCharWorks);
                QUnit.test("String - RemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).removeWorks);
                QUnit.test("String - RemoveWithCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).removeWithCountWorks);
                QUnit.test("String - ReplaceWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).replaceWorks);
                QUnit.test("String - ReplaceCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).replaceCharWorks);
                QUnit.test("String - ReplaceRegexWithReplaceTextWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).replaceRegexWithReplaceTextWorks);
                QUnit.test("String - ReplaceRegexWithReplaceCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).replaceRegexWithReplaceCallbackWorks);
                QUnit.test("String - SearchWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).searchWorks);
                QUnit.test("String - SliceWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).sliceWorks);
                QUnit.test("String - SplitWithStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).splitWithStringWorks);
                QUnit.test("String - SplitWithCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).splitWithCharWorks);
                QUnit.test("String - JsSplitWithStringAndLimitWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).jsSplitWithStringAndLimitWorks);
                QUnit.test("String - JsSplitWithCharAndLimitWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).jsSplitWithCharAndLimitWorks);
                QUnit.test("String - SplitWithCharsAndLimitWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).splitWithCharsAndLimitWorks);
                QUnit.test("String - SplitWithCharsAndStringSplitOptionsAndLimitWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).splitWithCharsAndStringSplitOptionsAndLimitWorks);
                QUnit.test("String - SplitWithRegexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).splitWithRegexWorks);
                QUnit.test("String - SomeNetSplitTests", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).someNetSplitTests);
                QUnit.test("String - SplitWithCharsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).splitWithCharsWorks);
                QUnit.test("String - SplitWithStringsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).splitWithStringsWorks);
                QUnit.test("String - SplitWithStringsAndLimitWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).splitWithStringsAndLimitWorks);
                QUnit.test("String - StartsWithCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).startsWithCharWorks);
                QUnit.test("String - StartsWithStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).startsWithStringWorks);
                QUnit.test("String - SubstrWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).substrWorks);
                QUnit.test("String - SubstringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).substringWorks);
                QUnit.test("String - JsSubstringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).jsSubstringWorks);
                QUnit.test("String - ToLowerCaseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).toLowerCaseWorks);
                QUnit.test("String - ToUpperCaseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).toUpperCaseWorks);
                QUnit.test("String - ToLowerWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).toLowerWorks);
                QUnit.test("String - ToUpperWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).toUpperWorks);
                QUnit.test("String - TrimWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).trimWorks);
                QUnit.test("String - TrimCharsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).trimCharsWorks);
                QUnit.test("String - TrimStartCharsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).trimStartCharsWorks);
                QUnit.test("String - TrimEndCharsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).trimEndCharsWorks);
                QUnit.test("String - TrimStartWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).trimStartWorks);
                QUnit.test("String - TrimEndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).trimEndWorks);
                QUnit.test("String - StringEqualityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).stringEqualityWorks);
                QUnit.test("String - StringInequalityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).stringInequalityWorks);
                QUnit.test("String - StringIndexingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).stringIndexingWorks);
                QUnit.test("String - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).getHashCodeWorks);
                QUnit.test("String - InstanceEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).instanceEqualsWorks);
                QUnit.test("String - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).iEquatableEqualsWorks);
                QUnit.test("String - StringEqualsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).stringEqualsWorks);
                QUnit.test("String - CompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).compareToWorks);
                QUnit.test("String - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).iComparableCompareToWorks);
                QUnit.test("String - JoinWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).joinWorks);
                QUnit.test("String - ContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).containsWorks);
                QUnit.test("String - ToCharArrayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).toCharArrayWorks);
                QUnit.test("String - Strings", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).strings);
                QUnit.test("String - Enumerable", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests).enumerable);
                QUnit.test("StringBuilder - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).typePropertiesAreCorrect);
                QUnit.test("StringBuilder - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).defaultConstructorWorks);
                QUnit.test("StringBuilder - ConstructorWithCapacityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).constructorWithCapacityWorks);
                QUnit.test("StringBuilder - InitialTextConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).initialTextConstructorWorks);
                QUnit.test("StringBuilder - InitialTextConstructorWithCapacityWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).initialTextConstructorWithCapacityWorks);
                QUnit.test("StringBuilder - SubstringConstructorWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).substringConstructorWorks);
                QUnit.test("StringBuilder - AppendBoolWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).appendBoolWorks);
                QUnit.test("StringBuilder - AppendCharWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).appendCharWorks);
                QUnit.test("StringBuilder - AppendIntWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).appendIntWorks);
                QUnit.test("StringBuilder - AppendDoubleWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).appendDoubleWorks);
                QUnit.test("StringBuilder - AppendObjectWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).appendObjectWorks);
                QUnit.test("StringBuilder - AppendStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).appendStringWorks);
                QUnit.test("StringBuilder - AppendLineWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).appendLineWorks);
                QUnit.test("StringBuilder - AppendLineStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).appendLineStringWorks);
                QUnit.test("StringBuilder - ClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).clearWorks);
                QUnit.test("StringBuilder - ToStringWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).toStringWorks);
                QUnit.test("StringBuilder - LengthPropertyWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).lengthPropertyWorks);
                QUnit.test("StringBuilder - StringBuilders", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests).stringBuilders);
                QUnit.module("Threading");
                QUnit.test("Async - AsyncVoid", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests).asyncVoid);
                QUnit.test("Async - AsyncTask", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests).asyncTask);
                QUnit.test("Async - AsyncTaskBodyThrowsException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests).asyncTaskBodyThrowsException);
                QUnit.test("Async - AwaitTaskThatFaults", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests).awaitTaskThatFaults);
                QUnit.test("Async - AggregateExceptionsAreUnwrappedWhenAwaitingTask", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests).aggregateExceptionsAreUnwrappedWhenAwaitingTask);
                QUnit.test("Async - AsyncTaskThatReturnsValue", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests).asyncTaskThatReturnsValue);
                QUnit.test("CancellationToken - TypePropertiesForCancellationTokenSourceAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).typePropertiesForCancellationTokenSourceAreCorrect);
                QUnit.test("CancellationToken - TypePropertiesForCancellationTokenAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).typePropertiesForCancellationTokenAreCorrect);
                QUnit.test("CancellationToken - TypePropertiesForCancellationTokenRegistrationAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).typePropertiesForCancellationTokenRegistrationAreCorrect);
                QUnit.test("CancellationToken - CancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).cancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe);
                QUnit.test("CancellationToken - CancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).cancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe);
                QUnit.test("CancellationToken - CancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).cancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled);
                QUnit.test("CancellationToken - CancellationTokenNoneIsNotCancelledAndCannotBe", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).cancellationTokenNoneIsNotCancelledAndCannotBe);
                QUnit.test("CancellationToken - CreatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).creatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled);
                QUnit.test("CancellationToken - ActivatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).activatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled);
                QUnit.test("CancellationToken - CanBeCanceledIsTrueForTokenCreatedForCancellationTokenSource", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).canBeCanceledIsTrueForTokenCreatedForCancellationTokenSource);
                QUnit.test("CancellationToken - IsCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).isCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod);
                QUnit.test("CancellationToken - ThrowIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).throwIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled);
                QUnit.test("CancellationToken - CancelWithoutArgumentsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).cancelWithoutArgumentsWorks);
                QUnit.test("CancellationToken - CancelWorksWhenThrowOnFirstExceptionIsFalse", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).cancelWorksWhenThrowOnFirstExceptionIsFalse);
                QUnit.test("CancellationToken - CancelWorksWhenThrowOnFirstExceptionIsTrue", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).cancelWorksWhenThrowOnFirstExceptionIsTrue);
                QUnit.test("CancellationToken - RegisterOnACancelledSourceWithoutContextInvokesTheCallback", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).registerOnACancelledSourceWithoutContextInvokesTheCallback);
                QUnit.test("CancellationToken - RegisterWithArgumentOnACancelledSourceInvokesTheCallback", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).registerWithArgumentOnACancelledSourceInvokesTheCallback);
                QUnit.test("CancellationToken - RegisterOnACancelledSourceWithoutContextRethrowsAThrownException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).registerOnACancelledSourceWithoutContextRethrowsAThrownException);
                QUnit.test("CancellationToken - RegisterOnACancelledSourceWithContextRethrowsAThrownException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).registerOnACancelledSourceWithContextRethrowsAThrownException);
                QUnit.test("CancellationToken - RegisterOverloadsWithUseSynchronizationContextWork", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).registerOverloadsWithUseSynchronizationContextWork);
                QUnit.test("CancellationToken - RegisterOnCancellationTokenCreatedNonCancelledDoesNothing", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).registerOnCancellationTokenCreatedNonCancelledDoesNothing);
                QUnit.test("CancellationToken - RegisterOnCancellationTokenCreatedCancelledInvokesTheActionImmediately", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).registerOnCancellationTokenCreatedCancelledInvokesTheActionImmediately);
                QUnit.test("CancellationToken - DuplicateCancelDoesNotCauseCallbacksToBeCalledTwice", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).duplicateCancelDoesNotCauseCallbacksToBeCalledTwice);
                QUnit.test("CancellationToken - RegistrationsCanBeCompared", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).registrationsCanBeCompared);
                QUnit.test("CancellationToken - RegistrationsCanBeUnregistered", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).registrationsCanBeUnregistered);
                QUnit.test("CancellationToken - CreatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).creatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm);
                QUnit.test("CancellationToken - LinkedSourceWithTwoTokensWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).linkedSourceWithTwoTokensWorks);
                QUnit.test("CancellationToken - LinkedSourceWithThreeTokensWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests).linkedSourceWithThreeTokensWorks);
                QUnit.test("Promise - TaskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests).taskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes);
                QUnit.test("Promise - TaskFromPromiseWithResultFactoryWorksWhenPromiseCompletes", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests).taskFromPromiseWithResultFactoryWorksWhenPromiseCompletes);
                QUnit.test("Promise - TaskFromPromiseWorksWhenPromiseFails", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests).taskFromPromiseWorksWhenPromiseFails);
                QUnit.test("Promise - CompletingPromiseCanBeAwaited", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests).completingPromiseCanBeAwaited);
                QUnit.test("Promise - FailingPromiseCanBeAwaited", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests).failingPromiseCanBeAwaited);
                QUnit.test("Tasks - TaskCompletionSourceTypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).taskCompletionSourceTypePropertiesAreCorrect);
                QUnit.test("Tasks - TaskTypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).taskTypePropertiesAreCorrect);
                QUnit.test("Tasks - TaskCompletionSourceWorksWhenSettingResult", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).taskCompletionSourceWorksWhenSettingResult);
                QUnit.test("Tasks - TaskCompletionSourceWorksWhenSettingASingleException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).taskCompletionSourceWorksWhenSettingASingleException);
                QUnit.test("Tasks - TaskCompletionSourceWorksWhenSettingTwoExceptions", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).taskCompletionSourceWorksWhenSettingTwoExceptions);
                QUnit.test("Tasks - TaskCompletionSourceWorksWhenCancelling", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).taskCompletionSourceWorksWhenCancelling);
                QUnit.test("Tasks - CancelledTaskThrowsTaskCanceledExceptionWhenAwaited", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).cancelledTaskThrowsTaskCanceledExceptionWhenAwaited);
                QUnit.test("Tasks - CancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).cancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed);
                QUnit.test("Tasks - SetResultFailsWhenTheTaskIsCompleted", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).setResultFailsWhenTheTaskIsCompleted);
                QUnit.test("Tasks - SetCanceledFailsWhenTheTaskIsCompleted", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).setCanceledFailsWhenTheTaskIsCompleted);
                QUnit.test("Tasks - SetExceptionFailsWhenTheTaskIsCompleted", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).setExceptionFailsWhenTheTaskIsCompleted);
                QUnit.test("Tasks - CompletedTaskHasCorrectIsXProperties", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).completedTaskHasCorrectIsXProperties);
                QUnit.test("Tasks - CancelledTaskHasCorrectIsXProperties", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).cancelledTaskHasCorrectIsXProperties);
                QUnit.test("Tasks - FaultedTaskHasCorrectIsXProperties", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).faultedTaskHasCorrectIsXProperties);
                QUnit.test("Tasks - TrySetResultReturnsFalseWhenTheTaskIsCompleted", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).trySetResultReturnsFalseWhenTheTaskIsCompleted);
                QUnit.test("Tasks - TrySetCanceledReturnsFalseWhenTheTaskIsCompleted", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).trySetCanceledReturnsFalseWhenTheTaskIsCompleted);
                QUnit.test("Tasks - TrySetExceptionReturnsFalseWhenTheTaskIsCompleted", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).trySetExceptionReturnsFalseWhenTheTaskIsCompleted);
                QUnit.test("Tasks - ContinueWithForNonGenericTaskWorkWithNoResultAndNoException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).continueWithForNonGenericTaskWorkWithNoResultAndNoException);
                QUnit.test("Tasks - ContinueWithWhenCallbackThrowsAnException", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).continueWithWhenCallbackThrowsAnException);
                QUnit.test("Tasks - ExceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).exceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask);
                QUnit.test("Tasks - ContinueWithForNonGenericTaskCanReturnAValue", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).continueWithForNonGenericTaskCanReturnAValue);
                QUnit.test("Tasks - ContinueWithWithNoReturnValueForGenericTaskWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).continueWithWithNoReturnValueForGenericTaskWorks);
                QUnit.test("Tasks - ContinueWithForGenericTaskCanReturnAValue", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).continueWithForGenericTaskCanReturnAValue);
                QUnit.test("Tasks - DelayWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).delayWorks);
                QUnit.test("Tasks - FromResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).fromResultWorks);
                QUnit.test("Tasks - RunWithoutResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).runWithoutResultWorks);
                QUnit.test("Tasks - RunWithResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).runWithResultWorks);
                QUnit.test("Tasks - RunWorksWhenBodyThrows", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).runWorksWhenBodyThrows);
                QUnit.test("Tasks - WhenAllParamArrayWithResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).whenAllParamArrayWithResultWorks);
                QUnit.test("Tasks - WhenAllEnumerableWithResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).whenAllEnumerableWithResultWorks);
                QUnit.test("Tasks - WhenAllParamArrayWithoutResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).whenAllParamArrayWithoutResultWorks);
                QUnit.test("Tasks - WhenAllEnumerableWithoutResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).whenAllEnumerableWithoutResultWorks);
                QUnit.test("Tasks - WhenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).whenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted);
                QUnit.test("Tasks - WhenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).whenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled);
                QUnit.test("Tasks - WhenAnyParamArrayWithResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).whenAnyParamArrayWithResultWorks);
                QUnit.test("Tasks - WhenAnyEnumerableWithResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).whenAnyEnumerableWithResultWorks);
                QUnit.test("Tasks - WhenAnyParamArrayWithoutResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).whenAnyParamArrayWithoutResultWorks);
                QUnit.test("Tasks - WhenAnyEnumerableWithoutResultWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).whenAnyEnumerableWithoutResultWorks);
                QUnit.test("Tasks - WhenAnyFaultsIfTheFirstTaskFaulted", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).whenAnyFaultsIfTheFirstTaskFaulted);
                QUnit.test("Tasks - WhenAnyIsCancelledIfTheFirstTaskWasCancelled", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).whenAnyIsCancelledIfTheFirstTaskWasCancelled);
                QUnit.test("Tasks - ConstructorWithOnlyActionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).constructorWithOnlyActionWorks);
                QUnit.test("Tasks - ConstructorWithActionAndStateWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).constructorWithActionAndStateWorks);
                QUnit.test("Tasks - ExceptionInManuallyCreatedTaskIsStoredOnTheTask", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).exceptionInManuallyCreatedTaskIsStoredOnTheTask);
                QUnit.test("Tasks - ConstructorWithOnlyFunctionWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).constructorWithOnlyFunctionWorks);
                QUnit.test("Tasks - ConstructorWithFunctionAndStateWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests).constructorWithFunctionAndStateWorks);
                QUnit.module("Utilities");
                QUnit.test("Environment - NewLineIsAStringContainingOnlyTheNewLineChar", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_EnvironmentTests).newLineIsAStringContainingOnlyTheNewLineChar);
                QUnit.module("СultureInfo");
                QUnit.test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CultureInfoTests).typePropertiesAreCorrect);
                QUnit.test("GetFormatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CultureInfoTests).getFormatWorks);
                QUnit.test("InvariantWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CultureInfoTests).invariantWorks);
            }
        }
    });
    
    Bridge.init();
})(this);
