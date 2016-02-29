(function (globals) {
    
    Bridge.define('Bridge.Test.Assert', {
        statics: {
            assert: null,
            async: function () {
                return Bridge.get(Bridge.Test.Assert).assert.async();
            },
            areEqual: function (expected, actual) {
                Bridge.get(Bridge.Test.Assert).assert.deepEqual(actual, expected);
            },
            areEqual$1: function (expected, actual, description) {
                Bridge.get(Bridge.Test.Assert).assert.deepEqual(actual, expected, description);
            },
            areDeepEqual: function (expected, actual) {
                Bridge.get(Bridge.Test.Assert).assert.deepEqual(actual, expected);
            },
            areDeepEqual$1: function (expected, actual, description) {
                Bridge.get(Bridge.Test.Assert).assert.deepEqual(actual, expected, description);
            },
            areStrictEqual: function (expected, actual) {
                Bridge.get(Bridge.Test.Assert).assert.strictEqual(actual, expected);
            },
            areStrictEqual$1: function (expected, actual, description) {
                Bridge.get(Bridge.Test.Assert).assert.strictEqual(actual, expected, description);
            },
            areNotEqual: function (expected, actual) {
                Bridge.get(Bridge.Test.Assert).assert.notDeepEqual(actual, expected);
            },
            areNotEqual$1: function (expected, actual, description) {
                Bridge.get(Bridge.Test.Assert).assert.notDeepEqual(actual, expected, description);
            },
            areNotDeepEqual: function (expected, actual) {
                Bridge.get(Bridge.Test.Assert).assert.notDeepEqual(actual, expected);
            },
            areNotDeepEqual$1: function (expected, actual, description) {
                Bridge.get(Bridge.Test.Assert).assert.notDeepEqual(actual, expected, description);
            },
            areNotStrictEqual: function (expected, actual) {
                Bridge.get(Bridge.Test.Assert).assert.notStrictEqual(actual, expected);
            },
            areNotStrictEqual$1: function (expected, actual, description) {
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
            instanceFabric: null,
            fixtureFabric: null,
            getFixtureFabric: function () {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestFixture$1(T)).fixtureFabric)) {
                    Bridge.get(Bridge.Test.QUnit.TestFixture$1(T)).fixtureFabric = new T();
                }
    
                return Bridge.get(Bridge.Test.QUnit.TestFixture$1(T)).fixtureFabric;
            },
            setFixtureFabric: function (value) {
                Bridge.get(Bridge.Test.QUnit.TestFixture$1(T)).fixtureFabric = value;
            },
            instanceFabric$1: function (type) {
                if (!Bridge.hasValue(Bridge.get(Bridge.Test.QUnit.TestFixture$1(T)).instanceFabric)) {
                    Bridge.get(Bridge.Test.QUnit.TestFixture$1(T)).instanceFabric = Bridge.cast(new type(), Bridge.Test.QUnit.TestFixture$1(T));
                }
    
                return Bridge.get(Bridge.Test.QUnit.TestFixture$1(T)).instanceFabric;
            },
            beforeTest: function (needInstance, assert, type, expectedCount) {
                if (expectedCount === void 0) { expectedCount = null; }
                Bridge.get(Bridge.Test.Assert).assert = assert;
    
                if (Bridge.Nullable.hasValue(expectedCount)) {
                    assert.expect(Bridge.Nullable.getValue(expectedCount));
                }
    
                var instance = Bridge.get(Bridge.Test.QUnit.TestFixture$1(T)).instanceFabric$1(type);
                instance.setFixture(needInstance ? Bridge.get(Bridge.Test.QUnit.TestFixture$1(T)).getFixtureFabric() : Bridge.getDefaultValue(T));
    
                try {
                    instance.setUp();
                }
                catch ($e1) {
                    $e1 = Bridge.Exception.create($e1);
                    assert.ok(false, "The test failed SetUp");
    
                    throw $e1;
                }
    
                return instance;
            }
        },
        config: {
            properties: {
                Fixture: null
            }
        },
        setUp: function () {
        },
        tearDown: function () {
        }
    }; });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().typePropertiesAreCorrect();
            },
            lengthWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().lengthWorks();
            },
            rankIsOne: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().rankIsOne();
            },
            getLengthWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().getLengthWorks();
            },
            getLowerBound: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().getLowerBound();
            },
            getUpperBoundWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().getUpperBoundWorks();
            },
            gettingValueByIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().gettingValueByIndexWorks();
            },
            getValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().getValueWorks();
            },
            settingValueByIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().settingValueByIndexWorks();
            },
            setValueWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().setValueWorks();
            },
            foreachWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().foreachWorks();
            },
            cloneWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().cloneWorks();
            },
            concatWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().concatWorks();
            },
            containsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().containsWorks();
            },
            containsUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().containsUsesEqualsMethod();
            },
            allWithArrayItemFilterCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().allWithArrayItemFilterCallbackWorks();
            },
            sliceWithoutEndWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().sliceWithoutEndWorks();
            },
            foreachWithArrayItemCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().foreachWithArrayItemCallbackWorks();
            },
            foreachWithArrayCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().foreachWithArrayCallbackWorks();
            },
            indexOfWithoutStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().indexOfWithoutStartIndexWorks();
            },
            indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().indexOfWithoutStartIndexUsesEqualsMethod();
            },
            indexOfWithStartIndexWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().indexOfWithStartIndexWorks();
            },
            joinWithoutDelimiterWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().joinWithoutDelimiterWorks();
            },
            reverseWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().reverseWorks();
            },
            anyWithArrayItemFilterCallbackWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().anyWithArrayItemFilterCallbackWorks();
            },
            binarySearch1Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().binarySearch1Works();
            },
            binarySearch2Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().binarySearch2Works();
            },
            binarySearch3Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().binarySearch3Works();
            },
            binarySearch4Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().binarySearch4Works();
            },
            binarySearchExceptionsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().binarySearchExceptionsWorks();
            },
            sortWithDefaultCompareWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().sortWithDefaultCompareWorks();
            },
            sort1Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().sort1Works();
            },
            sort2Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().sort2Works();
            },
            sort3Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().sort3Works();
            },
            sort4Works: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().sort4Works();
            },
            sortExceptionsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().sortExceptionsWorks();
            },
            foreachWhenCastToIListWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().foreachWhenCastToIListWorks();
            },
            iCollectionCountWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().iCollectionCountWorks();
            },
            iCollectionAddWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().iCollectionAddWorks();
            },
            iCollectionClearWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().iCollectionClearWorks();
            },
            iCollectionContainsWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().iCollectionContainsWorks();
            },
            iCollectionContainsUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().iCollectionContainsUsesEqualsMethod();
            },
            iCollectionRemoveWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().iCollectionRemoveWorks();
            },
            iListIndexingWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().iListIndexingWorks();
            },
            iListIndexOfWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().iListIndexOfWorks();
            },
            iListIndexOfUsesEqualsMethod: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().iListIndexOfUsesEqualsMethod();
            },
            iListInsertWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().iListInsertWorks();
            },
            iListRemoveAtWorks: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().iListRemoveAtWorks();
            },
            issueSpecific: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772);
                t.getFixture().issueSpecific();
            },
            testUseCase: function (assert) {
                var t = Bridge.get(Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTestOne.BridgeIssues.N772)).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772, 10);
                Bridge.get(Bridge.ClientTestOne.BridgeIssues.N772).testUseCase();
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
                QUnit.module("Issues");
                QUnit.test("#772 clientOne - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).typePropertiesAreCorrect);
                QUnit.test("#772 clientOne - LengthWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).lengthWorks);
                QUnit.test("#772 clientOne - RankIsOne", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).rankIsOne);
                QUnit.test("#772 clientOne - GetLengthWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).getLengthWorks);
                QUnit.test("#772 clientOne - GetLowerBound", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).getLowerBound);
                QUnit.test("#772 clientOne - GetUpperBoundWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).getUpperBoundWorks);
                QUnit.test("#772 clientOne - GettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).gettingValueByIndexWorks);
                QUnit.test("#772 clientOne - GetValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).getValueWorks);
                QUnit.test("#772 clientOne - SettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).settingValueByIndexWorks);
                QUnit.test("#772 clientOne - SetValueWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).setValueWorks);
                QUnit.test("#772 clientOne - ForeachWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).foreachWorks);
                QUnit.test("#772 clientOne - CloneWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).cloneWorks);
                QUnit.test("#772 clientOne - ConcatWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).concatWorks);
                QUnit.test("#772 clientOne - ContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).containsWorks);
                QUnit.test("#772 clientOne - ContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).containsUsesEqualsMethod);
                QUnit.test("#772 clientOne - AllWithArrayItemFilterCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).allWithArrayItemFilterCallbackWorks);
                QUnit.test("#772 clientOne - SliceWithoutEndWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).sliceWithoutEndWorks);
                QUnit.test("#772 clientOne - ForeachWithArrayItemCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).foreachWithArrayItemCallbackWorks);
                QUnit.test("#772 clientOne - ForeachWithArrayCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).foreachWithArrayCallbackWorks);
                QUnit.test("#772 clientOne - IndexOfWithoutStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).indexOfWithoutStartIndexWorks);
                QUnit.test("#772 clientOne - IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).indexOfWithoutStartIndexUsesEqualsMethod);
                QUnit.test("#772 clientOne - IndexOfWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).indexOfWithStartIndexWorks);
                QUnit.test("#772 clientOne - JoinWithoutDelimiterWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).joinWithoutDelimiterWorks);
                QUnit.test("#772 clientOne - ReverseWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).reverseWorks);
                QUnit.test("#772 clientOne - AnyWithArrayItemFilterCallbackWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).anyWithArrayItemFilterCallbackWorks);
                QUnit.test("#772 clientOne - BinarySearch1Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).binarySearch1Works);
                QUnit.test("#772 clientOne - BinarySearch2Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).binarySearch2Works);
                QUnit.test("#772 clientOne - BinarySearch3Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).binarySearch3Works);
                QUnit.test("#772 clientOne - BinarySearch4Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).binarySearch4Works);
                QUnit.test("#772 clientOne - BinarySearchExceptionsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).binarySearchExceptionsWorks);
                QUnit.test("#772 clientOne - SortWithDefaultCompareWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).sortWithDefaultCompareWorks);
                QUnit.test("#772 clientOne - Sort1Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).sort1Works);
                QUnit.test("#772 clientOne - Sort2Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).sort2Works);
                QUnit.test("#772 clientOne - Sort3Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).sort3Works);
                QUnit.test("#772 clientOne - Sort4Works", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).sort4Works);
                QUnit.test("#772 clientOne - SortExceptionsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).sortExceptionsWorks);
                QUnit.test("#772 clientOne - ForeachWhenCastToIListWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).foreachWhenCastToIListWorks);
                QUnit.test("#772 clientOne - ICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).iCollectionCountWorks);
                QUnit.test("#772 clientOne - ICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).iCollectionAddWorks);
                QUnit.test("#772 clientOne - ICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).iCollectionClearWorks);
                QUnit.test("#772 clientOne - ICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).iCollectionContainsWorks);
                QUnit.test("#772 clientOne - ICollectionContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).iCollectionContainsUsesEqualsMethod);
                QUnit.test("#772 clientOne - ICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).iCollectionRemoveWorks);
                QUnit.test("#772 clientOne - IListIndexingWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).iListIndexingWorks);
                QUnit.test("#772 clientOne - IListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).iListIndexOfWorks);
                QUnit.test("#772 clientOne - IListIndexOfUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).iListIndexOfUsesEqualsMethod);
                QUnit.test("#772 clientOne - IListInsertWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).iListInsertWorks);
                QUnit.test("#772 clientOne - IListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).iListRemoveAtWorks);
                QUnit.test("#772 clientOne - IssueSpecific", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).issueSpecific);
                QUnit.test("#772 clientOne - TestUseCase", Bridge.get(Bridge.Test.QUnit.TestRunner.Bridge_ClientTestOne_BridgeIssues_N772).testUseCase);
            }
        }
    });
    
    Bridge.init();
})(this);
