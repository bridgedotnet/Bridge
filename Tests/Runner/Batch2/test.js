Bridge.initAssembly("test", function ($asm, globals) {
    
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
                var expected = Bridge.getTypeName(T);

                try {
                    block();
                }
                catch (ex) {
                    ex = System.Exception.create(ex);
                    actual = Bridge.getTypeName(ex);
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

    Bridge.define('Bridge.Test.QUnit.TestRunner', {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.main);
                }
            },
            main: function () {
                QUnit.module("Checked/Unckecked");
                QUnit.test("CheckedInsideUnchecked - Batch2 TestInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedInsideUncheckedTests.testInt32);
                QUnit.test("CheckedInsideUnchecked - Batch2 TestUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedInsideUncheckedTests.testUInt32);
                QUnit.test("CheckedInsideUnchecked - Batch2 TestLong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedInsideUncheckedTests.testLong);
                QUnit.test("CheckedInsideUnchecked - Batch2 TestULong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedInsideUncheckedTests.testULong);
                QUnit.test("Checked - Batch2 TestInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedTests.testInt32);
                QUnit.test("Checked - Batch2 TestUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedTests.testUInt32);
                QUnit.test("Checked - Batch2 TestLong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedTests.testLong);
                QUnit.test("Checked - Batch2 TestULong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedTests.testULong);
                QUnit.test("UncheckedInsideChecked - Batch2 TestInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedInsideCheckedTests.testInt32);
                QUnit.test("UncheckedInsideChecked - Batch2 TestUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedInsideCheckedTests.testUInt32);
                QUnit.test("UncheckedInsideChecked - Batch2 TestLong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedInsideCheckedTests.testLong);
                QUnit.test("UncheckedInsideChecked - Batch2 TestULong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedInsideCheckedTests.testULong);
                QUnit.test("Unchecked - Batch2 TestInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedTests.testInt32);
                QUnit.test("Unchecked - Batch2 TestUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedTests.testUInt32);
                QUnit.test("Unchecked - Batch2 TestLong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedTests.testLong);
                QUnit.test("Unchecked - Batch2 TestULong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedTests.testULong);
                QUnit.test("WithNoUncheckedKeyword - Batch2 TestInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_WithNoUncheckedKeywordTests.testInt32);
                QUnit.test("WithNoUncheckedKeyword - Batch2 TestUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_WithNoUncheckedKeywordTests.testUInt32);
                QUnit.test("WithNoUncheckedKeyword - Batch2 TestLong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_WithNoUncheckedKeywordTests.testLong);
                QUnit.test("WithNoUncheckedKeyword - Batch2 TestULong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_WithNoUncheckedKeywordTests.testULong);
                QUnit.module("Issues2");
                QUnit.test("#1385 - Batch2 TestIsTypedArrayForByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_Bridge1385.testIsTypedArrayForByte);
                QUnit.test("#1499 - Batch2 TestObjectStringCoalesceWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_Bridge1499.testObjectStringCoalesceWorks);
                QUnit.test("#1122 - Batch2 TestClippingInJavaScriptOverflowMode", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N1122.testClippingInJavaScriptOverflowMode);
                QUnit.test("#1122 - Batch2 TestIntegerDivisionInJavaScriptOverflowMode", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N1122.testIntegerDivisionInJavaScriptOverflowMode);
                QUnit.test("#1204 - Batch2 TestStrictNullChecksOptionForNulls", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N1204.testStrictNullChecksOptionForNulls);
                QUnit.test("#772 - Batch2 TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.typePropertiesAreCorrect);
                QUnit.test("#772 - Batch2 LengthWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.lengthWorks);
                QUnit.test("#772 - Batch2 RankIsOne", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.rankIsOne);
                QUnit.test("#772 - Batch2 GetLengthWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.getLengthWorks);
                QUnit.test("#772 - Batch2 GetLowerBound", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.getLowerBound);
                QUnit.test("#772 - Batch2 GetUpperBoundWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.getUpperBoundWorks);
                QUnit.test("#772 - Batch2 GettingValueByIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.gettingValueByIndexWorks);
                QUnit.test("#772 - Batch2 GetValueWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.getValueWorks);
                QUnit.test("#772 - Batch2 SettingValueByIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.settingValueByIndexWorks);
                QUnit.test("#772 - Batch2 SetValueWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.setValueWorks);
                QUnit.test("#772 - Batch2 ForeachWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.foreachWorks);
                QUnit.test("#772 - Batch2 CloneWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.cloneWorks);
                QUnit.test("#772 - Batch2 ConcatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.concatWorks);
                QUnit.test("#772 - Batch2 ContainsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.containsWorks);
                QUnit.test("#772 - Batch2 ContainsUsesEqualsMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.containsUsesEqualsMethod);
                QUnit.test("#772 - Batch2 AllWithArrayItemFilterCallbackWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.allWithArrayItemFilterCallbackWorks);
                QUnit.test("#772 - Batch2 SliceWithoutEndWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.sliceWithoutEndWorks);
                QUnit.test("#772 - Batch2 ForeachWithArrayItemCallbackWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.foreachWithArrayItemCallbackWorks);
                QUnit.test("#772 - Batch2 ForeachWithArrayCallbackWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.foreachWithArrayCallbackWorks);
                QUnit.test("#772 - Batch2 IndexOfWithoutStartIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.indexOfWithoutStartIndexWorks);
                QUnit.test("#772 - Batch2 IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.indexOfWithoutStartIndexUsesEqualsMethod);
                QUnit.test("#772 - Batch2 IndexOfWithStartIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.indexOfWithStartIndexWorks);
                QUnit.test("#772 - Batch2 JoinWithoutDelimiterWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.joinWithoutDelimiterWorks);
                QUnit.test("#772 - Batch2 ReverseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.reverseWorks);
                QUnit.test("#772 - Batch2 AnyWithArrayItemFilterCallbackWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.anyWithArrayItemFilterCallbackWorks);
                QUnit.test("#772 - Batch2 BinarySearch1Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.binarySearch1Works);
                QUnit.test("#772 - Batch2 BinarySearch2Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.binarySearch2Works);
                QUnit.test("#772 - Batch2 BinarySearch3Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.binarySearch3Works);
                QUnit.test("#772 - Batch2 BinarySearch4Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.binarySearch4Works);
                QUnit.test("#772 - Batch2 BinarySearchExceptionsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.binarySearchExceptionsWorks);
                QUnit.test("#772 - Batch2 SortWithDefaultCompareWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.sortWithDefaultCompareWorks);
                QUnit.test("#772 - Batch2 Sort1Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.sort1Works);
                QUnit.test("#772 - Batch2 Sort2Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.sort2Works);
                QUnit.test("#772 - Batch2 Sort3Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.sort3Works);
                QUnit.test("#772 - Batch2 Sort4Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.sort4Works);
                QUnit.test("#772 - Batch2 SortExceptionsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.sortExceptionsWorks);
                QUnit.test("#772 - Batch2 ForeachWhenCastToIListWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.foreachWhenCastToIListWorks);
                QUnit.test("#772 - Batch2 ICollectionCountWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.iCollectionCountWorks);
                QUnit.test("#772 - Batch2 ICollectionAddWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.iCollectionAddWorks);
                QUnit.test("#772 - Batch2 ICollectionClearWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.iCollectionClearWorks);
                QUnit.test("#772 - Batch2 ICollectionContainsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.iCollectionContainsWorks);
                QUnit.test("#772 - Batch2 ICollectionContainsUsesEqualsMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.iCollectionContainsUsesEqualsMethod);
                QUnit.test("#772 - Batch2 ICollectionRemoveWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.iCollectionRemoveWorks);
                QUnit.test("#772 - Batch2 IListIndexingWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.iListIndexingWorks);
                QUnit.test("#772 - Batch2 IListIndexOfWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.iListIndexOfWorks);
                QUnit.test("#772 - Batch2 IListIndexOfUsesEqualsMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.iListIndexOfUsesEqualsMethod);
                QUnit.test("#772 - Batch2 IListInsertWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.iListInsertWorks);
                QUnit.test("#772 - Batch2 IListRemoveAtWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.iListRemoveAtWorks);
                QUnit.test("#772 - Batch2 IssueSpecific", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.issueSpecific);
                QUnit.test("#772 - Batch2 TestUseCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772.testUseCase);
            }
        },
        $entryPoint: true
    });

    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_Bridge1385', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385)],
        statics: {
            testIsTypedArrayForByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_Bridge1385);
                Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385.testIsTypedArrayForByte();
            }
        }
    });

    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_Bridge1499', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499)],
        statics: {
            testObjectStringCoalesceWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_Bridge1499);
                t.getFixture().testObjectStringCoalesceWorks();
            }
        }
    });

    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N1122', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1122)],
        statics: {
            testClippingInJavaScriptOverflowMode: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1122).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N1122, 4);
                Bridge.ClientTest.Batch2.BridgeIssues.N1122.testClippingInJavaScriptOverflowMode();
            },
            testIntegerDivisionInJavaScriptOverflowMode: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1122).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N1122, 4);
                Bridge.ClientTest.Batch2.BridgeIssues.N1122.testIntegerDivisionInJavaScriptOverflowMode();
            }
        }
    });

    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N1204', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1204)],
        statics: {
            testStrictNullChecksOptionForNulls: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1204).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N1204);
                Bridge.ClientTest.Batch2.BridgeIssues.N1204.testStrictNullChecksOptionForNulls();
            }
        }
    });

    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().typePropertiesAreCorrect();
            },
            lengthWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().lengthWorks();
            },
            rankIsOne: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().rankIsOne();
            },
            getLengthWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().getLengthWorks();
            },
            getLowerBound: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().getLowerBound();
            },
            getUpperBoundWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().getUpperBoundWorks();
            },
            gettingValueByIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().gettingValueByIndexWorks();
            },
            getValueWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().getValueWorks();
            },
            settingValueByIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().settingValueByIndexWorks();
            },
            setValueWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().setValueWorks();
            },
            foreachWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().foreachWorks();
            },
            cloneWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().cloneWorks();
            },
            concatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().concatWorks();
            },
            containsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().containsWorks();
            },
            containsUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().containsUsesEqualsMethod();
            },
            allWithArrayItemFilterCallbackWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().allWithArrayItemFilterCallbackWorks();
            },
            sliceWithoutEndWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().sliceWithoutEndWorks();
            },
            foreachWithArrayItemCallbackWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().foreachWithArrayItemCallbackWorks();
            },
            foreachWithArrayCallbackWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().foreachWithArrayCallbackWorks();
            },
            indexOfWithoutStartIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().indexOfWithoutStartIndexWorks();
            },
            indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().indexOfWithoutStartIndexUsesEqualsMethod();
            },
            indexOfWithStartIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().indexOfWithStartIndexWorks();
            },
            joinWithoutDelimiterWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().joinWithoutDelimiterWorks();
            },
            reverseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().reverseWorks();
            },
            anyWithArrayItemFilterCallbackWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().anyWithArrayItemFilterCallbackWorks();
            },
            binarySearch1Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().binarySearch1Works();
            },
            binarySearch2Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().binarySearch2Works();
            },
            binarySearch3Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().binarySearch3Works();
            },
            binarySearch4Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().binarySearch4Works();
            },
            binarySearchExceptionsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().binarySearchExceptionsWorks();
            },
            sortWithDefaultCompareWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().sortWithDefaultCompareWorks();
            },
            sort1Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().sort1Works();
            },
            sort2Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().sort2Works();
            },
            sort3Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().sort3Works();
            },
            sort4Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().sort4Works();
            },
            sortExceptionsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().sortExceptionsWorks();
            },
            foreachWhenCastToIListWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().foreachWhenCastToIListWorks();
            },
            iCollectionCountWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().iCollectionCountWorks();
            },
            iCollectionAddWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().iCollectionAddWorks();
            },
            iCollectionClearWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().iCollectionClearWorks();
            },
            iCollectionContainsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().iCollectionContainsWorks();
            },
            iCollectionContainsUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().iCollectionContainsUsesEqualsMethod();
            },
            iCollectionRemoveWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().iCollectionRemoveWorks();
            },
            iListIndexingWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().iListIndexingWorks();
            },
            iListIndexOfWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().iListIndexOfWorks();
            },
            iListIndexOfUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().iListIndexOfUsesEqualsMethod();
            },
            iListInsertWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().iListInsertWorks();
            },
            iListRemoveAtWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().iListRemoveAtWorks();
            },
            issueSpecific: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772);
                t.getFixture().issueSpecific();
            },
            testUseCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_BridgeIssues_N772, 10);
                Bridge.ClientTest.Batch2.BridgeIssues.N772.testUseCase();
            }
        }
    });

    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedInsideUncheckedTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests)],
        statics: {
            testInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedInsideUncheckedTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.testInt32();
            },
            testUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedInsideUncheckedTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.testUInt32();
            },
            testLong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedInsideUncheckedTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.testLong();
            },
            testULong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedInsideUncheckedTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.testULong();
            }
        }
    });

    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests)],
        statics: {
            testInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.testInt32();
            },
            testUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.testUInt32();
            },
            testLong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.testLong();
            },
            testULong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_CheckedTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.testULong();
            }
        }
    });

    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedInsideCheckedTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests)],
        statics: {
            testInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedInsideCheckedTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.testInt32();
            },
            testUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedInsideCheckedTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.testUInt32();
            },
            testLong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedInsideCheckedTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.testLong();
            },
            testULong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedInsideCheckedTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.testULong();
            }
        }
    });

    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests)],
        statics: {
            testInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.testInt32();
            },
            testUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.testUInt32();
            },
            testLong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.testLong();
            },
            testULong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_UncheckedTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.testULong();
            }
        }
    });

    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_WithNoUncheckedKeywordTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests)],
        statics: {
            testInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_WithNoUncheckedKeywordTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.testInt32();
            },
            testUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_WithNoUncheckedKeywordTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.testUInt32();
            },
            testLong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_WithNoUncheckedKeywordTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.testLong();
            },
            testULong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Batch2_WithNoUncheckedKeywordTests);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.testULong();
            }
        }
    });

    Bridge.init();
});
