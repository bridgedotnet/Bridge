/**
 * @compiler Bridge.NET 16.0.0
 */
Bridge.assembly("Bridge.Test.Bridge.ClientTest.Batch2", function ($asm, globals) {
    

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner", {
        $main: function () {
            Bridge.Test.Runtime.ContextHelper.init();
            QUnit.module("Checked/Unckecked");
            QUnit.test("CheckedInsideUnchecked - Batch2 TestInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests.testInt32);
            QUnit.test("CheckedInsideUnchecked - Batch2 TestUInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests.testUInt32);
            QUnit.test("CheckedInsideUnchecked - Batch2 TestLong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests.testLong);
            QUnit.test("CheckedInsideUnchecked - Batch2 TestULong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests.testULong);
            QUnit.test("Checked - Batch2 TestInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests.testInt32);
            QUnit.test("Checked - Batch2 TestUInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests.testUInt32);
            QUnit.test("Checked - Batch2 TestLong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests.testLong);
            QUnit.test("Checked - Batch2 TestULong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests.testULong);
            QUnit.test("UncheckedInsideChecked - Batch2 TestInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests.testInt32);
            QUnit.test("UncheckedInsideChecked - Batch2 TestUInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests.testUInt32);
            QUnit.test("UncheckedInsideChecked - Batch2 TestLong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests.testLong);
            QUnit.test("UncheckedInsideChecked - Batch2 TestULong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests.testULong);
            QUnit.test("Unchecked - Batch2 TestInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests.testInt32);
            QUnit.test("Unchecked - Batch2 TestUInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests.testUInt32);
            QUnit.test("Unchecked - Batch2 TestLong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests.testLong);
            QUnit.test("Unchecked - Batch2 TestULong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests.testULong);
            QUnit.test("WithNoUncheckedKeyword - Batch2 TestInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests.testInt32);
            QUnit.test("WithNoUncheckedKeyword - Batch2 TestUInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests.testUInt32);
            QUnit.test("WithNoUncheckedKeyword - Batch2 TestLong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests.testLong);
            QUnit.test("WithNoUncheckedKeyword - Batch2 TestULong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests.testULong);
            QUnit.module("Issues2");
            QUnit.test("#1385 - Batch2 TestIsTypedArrayForByte", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1385.testIsTypedArrayForByte);
            QUnit.test("#1499 - Batch2 TestObjectStringCoalesceWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1499.testObjectStringCoalesceWorks);
            QUnit.test("#1122 - Batch2 TestClippingInJavaScriptOverflowMode", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122.testClippingInJavaScriptOverflowMode);
            QUnit.test("#1122 - Batch2 TestIntegerDivisionInJavaScriptOverflowMode", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122.testIntegerDivisionInJavaScriptOverflowMode);
            QUnit.test("#1204 - Batch2 TestStrictNullChecksOptionForNulls", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1204.testStrictNullChecksOptionForNulls);
            QUnit.test("#772 - Batch2 TypePropertiesAreCorrect", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.typePropertiesAreCorrect);
            QUnit.test("#772 - Batch2 LengthWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.lengthWorks);
            QUnit.test("#772 - Batch2 RankIsOne", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.rankIsOne);
            QUnit.test("#772 - Batch2 GetLengthWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.getLengthWorks);
            QUnit.test("#772 - Batch2 GetLowerBound", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.getLowerBound);
            QUnit.test("#772 - Batch2 GetUpperBoundWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.getUpperBoundWorks);
            QUnit.test("#772 - Batch2 GettingValueByIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.gettingValueByIndexWorks);
            QUnit.test("#772 - Batch2 GetValueWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.getValueWorks);
            QUnit.test("#772 - Batch2 SettingValueByIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.settingValueByIndexWorks);
            QUnit.test("#772 - Batch2 SetValueWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.setValueWorks);
            QUnit.test("#772 - Batch2 ForeachWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.foreachWorks);
            QUnit.test("#772 - Batch2 CloneWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.cloneWorks);
            QUnit.test("#772 - Batch2 ConcatWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.concatWorks);
            QUnit.test("#772 - Batch2 ContainsWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.containsWorks);
            QUnit.test("#772 - Batch2 ContainsUsesEqualsMethod", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.containsUsesEqualsMethod);
            QUnit.test("#772 - Batch2 AllWithArrayItemFilterCallbackWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.allWithArrayItemFilterCallbackWorks);
            QUnit.test("#772 - Batch2 SliceWithoutEndWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.sliceWithoutEndWorks);
            QUnit.test("#772 - Batch2 ForeachWithArrayItemCallbackWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.foreachWithArrayItemCallbackWorks);
            QUnit.test("#772 - Batch2 ForeachWithArrayCallbackWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.foreachWithArrayCallbackWorks);
            QUnit.test("#772 - Batch2 IndexOfWithoutStartIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.indexOfWithoutStartIndexWorks);
            QUnit.test("#772 - Batch2 IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.indexOfWithoutStartIndexUsesEqualsMethod);
            QUnit.test("#772 - Batch2 IndexOfWithStartIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.indexOfWithStartIndexWorks);
            QUnit.test("#772 - Batch2 JoinWithoutDelimiterWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.joinWithoutDelimiterWorks);
            QUnit.test("#772 - Batch2 ReverseWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.reverseWorks);
            QUnit.test("#772 - Batch2 AnyWithArrayItemFilterCallbackWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.anyWithArrayItemFilterCallbackWorks);
            QUnit.test("#772 - Batch2 BinarySearch1Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.binarySearch1Works);
            QUnit.test("#772 - Batch2 BinarySearch2Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.binarySearch2Works);
            QUnit.test("#772 - Batch2 BinarySearch3Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.binarySearch3Works);
            QUnit.test("#772 - Batch2 BinarySearch4Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.binarySearch4Works);
            QUnit.test("#772 - Batch2 BinarySearchExceptionsWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.binarySearchExceptionsWorks);
            QUnit.test("#772 - Batch2 SortWithDefaultCompareWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.sortWithDefaultCompareWorks);
            QUnit.test("#772 - Batch2 Sort1Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.sort1Works);
            QUnit.test("#772 - Batch2 Sort2Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.sort2Works);
            QUnit.test("#772 - Batch2 Sort3Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.sort3Works);
            QUnit.test("#772 - Batch2 Sort4Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.sort4Works);
            QUnit.test("#772 - Batch2 SortExceptionsWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.sortExceptionsWorks);
            QUnit.test("#772 - Batch2 ForeachWhenCastToIListWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.foreachWhenCastToIListWorks);
            QUnit.test("#772 - Batch2 ICollectionCountWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.iCollectionCountWorks);
            QUnit.test("#772 - Batch2 ICollectionAddWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.iCollectionAddWorks);
            QUnit.test("#772 - Batch2 ICollectionClearWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.iCollectionClearWorks);
            QUnit.test("#772 - Batch2 ICollectionContainsWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.iCollectionContainsWorks);
            QUnit.test("#772 - Batch2 ICollectionContainsUsesEqualsMethod", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.iCollectionContainsUsesEqualsMethod);
            QUnit.test("#772 - Batch2 ICollectionRemoveWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.iCollectionRemoveWorks);
            QUnit.test("#772 - Batch2 IListIndexingWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.iListIndexingWorks);
            QUnit.test("#772 - Batch2 IListIndexOfWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.iListIndexOfWorks);
            QUnit.test("#772 - Batch2 IListIndexOfUsesEqualsMethod", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.iListIndexOfUsesEqualsMethod);
            QUnit.test("#772 - Batch2 IListInsertWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.iListInsertWorks);
            QUnit.test("#772 - Batch2 IListRemoveAtWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.iListRemoveAtWorks);
            QUnit.test("#772 - Batch2 IssueSpecific", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.issueSpecific);
            QUnit.test("#772 - Batch2 TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.testUseCase);
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1385", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385)],
        statics: {
            testIsTypedArrayForByte: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1385, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIsTypedArrayForByte()",
                    line: "9"
                } ));
                Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385.testIsTypedArrayForByte();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch2",
                    className: "Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385",
                    file: "Batch2\\BridgeIssues\\N1385.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1499", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499)],
        statics: {
            testObjectStringCoalesceWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1499, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestObjectStringCoalesceWorks()",
                    line: "9"
                } ));
                t.getFixture().testObjectStringCoalesceWorks();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch2",
                    className: "Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499",
                    file: "Batch2\\BridgeIssues\\N1499.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests)],
        statics: {
            testInt32: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInt32()",
                    line: "190"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.testInt32();
            },
            testUInt32: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUInt32()",
                    line: "234"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.testUInt32();
            },
            testLong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLong()",
                    line: "276"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.testLong();
            },
            testULong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestULong()",
                    line: "320"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.testULong();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch2",
                    className: "Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests",
                    file: "Batch2\\CheckedUncheckedTests.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests)],
        statics: {
            testInt32: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInt32()",
                    line: "25"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.testInt32();
            },
            testUInt32: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUInt32()",
                    line: "66"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.testUInt32();
            },
            testLong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLong()",
                    line: "105"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.testLong();
            },
            testULong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestULong()",
                    line: "146"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.testULong();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch2",
                    className: "Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests",
                    file: "Batch2\\CheckedUncheckedTests.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1122)],
        statics: {
            testClippingInJavaScriptOverflowMode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1122).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestClippingInJavaScriptOverflowMode()",
                    line: "12"
                } ));
                Bridge.ClientTest.Batch2.BridgeIssues.N1122.testClippingInJavaScriptOverflowMode();
            },
            testIntegerDivisionInJavaScriptOverflowMode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1122).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestIntegerDivisionInJavaScriptOverflowMode()",
                    line: "30"
                } ));
                Bridge.ClientTest.Batch2.BridgeIssues.N1122.testIntegerDivisionInJavaScriptOverflowMode();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch2",
                    className: "Bridge.ClientTest.Batch2.BridgeIssues.N1122",
                    file: "Batch2\\BridgeIssues\\N1122.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1204", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1204)],
        statics: {
            testStrictNullChecksOptionForNulls: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1204).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1204, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestStrictNullChecksOptionForNulls()",
                    line: "10"
                } ));
                Bridge.ClientTest.Batch2.BridgeIssues.N1204.testStrictNullChecksOptionForNulls();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch2",
                    className: "Bridge.ClientTest.Batch2.BridgeIssues.N1204",
                    file: "Batch2\\BridgeIssues\\N1204.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TypePropertiesAreCorrect()",
                    line: "36"
                } ));
                t.getFixture().typePropertiesAreCorrect();
            },
            lengthWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "LengthWorks()",
                    line: "50"
                } ));
                t.getFixture().lengthWorks();
            },
            rankIsOne: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "RankIsOne()",
                    line: "58"
                } ));
                t.getFixture().rankIsOne();
            },
            getLengthWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "GetLengthWorks()",
                    line: "64"
                } ));
                t.getFixture().getLengthWorks();
            },
            getLowerBound: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "GetLowerBound()",
                    line: "72"
                } ));
                t.getFixture().getLowerBound();
            },
            getUpperBoundWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "GetUpperBoundWorks()",
                    line: "80"
                } ));
                t.getFixture().getUpperBoundWorks();
            },
            gettingValueByIndexWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "GettingValueByIndexWorks()",
                    line: "88"
                } ));
                t.getFixture().gettingValueByIndexWorks();
            },
            getValueWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "GetValueWorks()",
                    line: "95"
                } ));
                t.getFixture().getValueWorks();
            },
            settingValueByIndexWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "SettingValueByIndexWorks()",
                    line: "102"
                } ));
                t.getFixture().settingValueByIndexWorks();
            },
            setValueWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "SetValueWorks()",
                    line: "112"
                } ));
                t.getFixture().setValueWorks();
            },
            foreachWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "ForeachWorks()",
                    line: "122"
                } ));
                t.getFixture().foreachWorks();
            },
            cloneWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "CloneWorks()",
                    line: "133"
                } ));
                t.getFixture().cloneWorks();
            },
            concatWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "ConcatWorks()",
                    line: "142"
                } ));
                t.getFixture().concatWorks();
            },
            containsWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "ContainsWorks()",
                    line: "151"
                } ));
                t.getFixture().containsWorks();
            },
            containsUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "ContainsUsesEqualsMethod()",
                    line: "159"
                } ));
                t.getFixture().containsUsesEqualsMethod();
            },
            allWithArrayItemFilterCallbackWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "AllWithArrayItemFilterCallbackWorks()",
                    line: "167"
                } ));
                t.getFixture().allWithArrayItemFilterCallbackWorks();
            },
            sliceWithoutEndWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "SliceWithoutEndWorks()",
                    line: "174"
                } ));
                t.getFixture().sliceWithoutEndWorks();
            },
            foreachWithArrayItemCallbackWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "ForeachWithArrayItemCallbackWorks()",
                    line: "181"
                } ));
                t.getFixture().foreachWithArrayItemCallbackWorks();
            },
            foreachWithArrayCallbackWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "ForeachWithArrayCallbackWorks()",
                    line: "189"
                } ));
                t.getFixture().foreachWithArrayCallbackWorks();
            },
            indexOfWithoutStartIndexWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "IndexOfWithoutStartIndexWorks()",
                    line: "197"
                } ));
                t.getFixture().indexOfWithoutStartIndexWorks();
            },
            indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "IndexOfWithoutStartIndexUsesEqualsMethod()",
                    line: "203"
                } ));
                t.getFixture().indexOfWithoutStartIndexUsesEqualsMethod();
            },
            indexOfWithStartIndexWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "IndexOfWithStartIndexWorks()",
                    line: "211"
                } ));
                t.getFixture().indexOfWithStartIndexWorks();
            },
            joinWithoutDelimiterWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "JoinWithoutDelimiterWorks()",
                    line: "217"
                } ));
                t.getFixture().joinWithoutDelimiterWorks();
            },
            reverseWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "ReverseWorks()",
                    line: "225"
                } ));
                t.getFixture().reverseWorks();
            },
            anyWithArrayItemFilterCallbackWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "AnyWithArrayItemFilterCallbackWorks()",
                    line: "233"
                } ));
                t.getFixture().anyWithArrayItemFilterCallbackWorks();
            },
            binarySearch1Works: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "BinarySearch1Works()",
                    line: "240"
                } ));
                t.getFixture().binarySearch1Works();
            },
            binarySearch2Works: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "BinarySearch2Works()",
                    line: "249"
                } ));
                t.getFixture().binarySearch2Works();
            },
            binarySearch3Works: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "BinarySearch3Works()",
                    line: "266"
                } ));
                t.getFixture().binarySearch3Works();
            },
            binarySearch4Works: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "BinarySearch4Works()",
                    line: "275"
                } ));
                t.getFixture().binarySearch4Works();
            },
            binarySearchExceptionsWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "BinarySearchExceptionsWorks()",
                    line: "284"
                } ));
                t.getFixture().binarySearchExceptionsWorks();
            },
            sortWithDefaultCompareWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "SortWithDefaultCompareWorks()",
                    line: "295"
                } ));
                t.getFixture().sortWithDefaultCompareWorks();
            },
            sort1Works: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "Sort1Works()",
                    line: "303"
                } ));
                t.getFixture().sort1Works();
            },
            sort2Works: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "Sort2Works()",
                    line: "311"
                } ));
                t.getFixture().sort2Works();
            },
            sort3Works: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "Sort3Works()",
                    line: "319"
                } ));
                t.getFixture().sort3Works();
            },
            sort4Works: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "Sort4Works()",
                    line: "327"
                } ));
                t.getFixture().sort4Works();
            },
            sortExceptionsWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "SortExceptionsWorks()",
                    line: "335"
                } ));
                t.getFixture().sortExceptionsWorks();
            },
            foreachWhenCastToIListWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "ForeachWhenCastToIListWorks()",
                    line: "343"
                } ));
                t.getFixture().foreachWhenCastToIListWorks();
            },
            iCollectionCountWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "ICollectionCountWorks()",
                    line: "355"
                } ));
                t.getFixture().iCollectionCountWorks();
            },
            iCollectionAddWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "ICollectionAddWorks()",
                    line: "362"
                } ));
                t.getFixture().iCollectionAddWorks();
            },
            iCollectionClearWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "ICollectionClearWorks()",
                    line: "370"
                } ));
                t.getFixture().iCollectionClearWorks();
            },
            iCollectionContainsWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "ICollectionContainsWorks()",
                    line: "381"
                } ));
                t.getFixture().iCollectionContainsWorks();
            },
            iCollectionContainsUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "ICollectionContainsUsesEqualsMethod()",
                    line: "389"
                } ));
                t.getFixture().iCollectionContainsUsesEqualsMethod();
            },
            iCollectionRemoveWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "ICollectionRemoveWorks()",
                    line: "397"
                } ));
                t.getFixture().iCollectionRemoveWorks();
            },
            iListIndexingWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "IListIndexingWorks()",
                    line: "406"
                } ));
                t.getFixture().iListIndexingWorks();
            },
            iListIndexOfWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "IListIndexOfWorks()",
                    line: "415"
                } ));
                t.getFixture().iListIndexOfWorks();
            },
            iListIndexOfUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "IListIndexOfUsesEqualsMethod()",
                    line: "423"
                } ));
                t.getFixture().iListIndexOfUsesEqualsMethod();
            },
            iListInsertWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "IListInsertWorks()",
                    line: "431"
                } ));
                t.getFixture().iListInsertWorks();
            },
            iListRemoveAtWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "IListRemoveAtWorks()",
                    line: "439"
                } ));
                t.getFixture().iListRemoveAtWorks();
            },
            issueSpecific: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "IssueSpecific()",
                    line: "447"
                } ));
                t.getFixture().issueSpecific();
            },
            testUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, 10, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUseCase()",
                    line: "455"
                } ));
                Bridge.ClientTest.Batch2.BridgeIssues.N772.testUseCase();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch2",
                    className: "Bridge.ClientTest.Batch2.BridgeIssues.N772",
                    file: "Batch2\\BridgeIssues\\N772.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests)],
        statics: {
            testInt32: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInt32()",
                    line: "565"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.testInt32();
            },
            testUInt32: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUInt32()",
                    line: "617"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.testUInt32();
            },
            testLong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLong()",
                    line: "669"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.testLong();
            },
            testULong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestULong()",
                    line: "721"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.testULong();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch2",
                    className: "Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests",
                    file: "Batch2\\CheckedUncheckedTests.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests)],
        statics: {
            testInt32: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInt32()",
                    line: "367"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.testInt32();
            },
            testUInt32: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUInt32()",
                    line: "416"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.testUInt32();
            },
            testLong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLong()",
                    line: "465"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.testLong();
            },
            testULong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestULong()",
                    line: "514"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.testULong();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch2",
                    className: "Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests",
                    file: "Batch2\\CheckedUncheckedTests.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests)],
        statics: {
            testInt32: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestInt32()",
                    line: "775"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.testInt32();
            },
            testUInt32: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestUInt32()",
                    line: "821"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.testUInt32();
            },
            testLong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestLong()",
                    line: "867"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.testLong();
            },
            testULong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).beforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    method: "TestULong()",
                    line: "913"
                } ));
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.testULong();
            }
        },
        context: null,
        getContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    project: "Batch2",
                    className: "Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests",
                    file: "Batch2\\CheckedUncheckedTests.cs"
                } );
            }
            return this.context;
        }
    });
});
