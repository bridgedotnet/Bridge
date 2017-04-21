/**
 * @compiler Bridge.NET 16.0.0
 */
Bridge.assembly("Bridge.Test.Bridge.ClientTest.Batch2", function ($asm, globals) {
    

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner", {
        Main: function () {
            Bridge.Test.Runtime.ContextHelper.Init();
            QUnit.module("Checked/Unckecked");
            QUnit.test("CheckedInsideUnchecked - Batch2 TestInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests.TestInt32);
            QUnit.test("CheckedInsideUnchecked - Batch2 TestUInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests.TestUInt32);
            QUnit.test("CheckedInsideUnchecked - Batch2 TestLong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests.TestLong);
            QUnit.test("CheckedInsideUnchecked - Batch2 TestULong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests.TestULong);
            QUnit.test("Checked - Batch2 TestInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests.TestInt32);
            QUnit.test("Checked - Batch2 TestUInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests.TestUInt32);
            QUnit.test("Checked - Batch2 TestLong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests.TestLong);
            QUnit.test("Checked - Batch2 TestULong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests.TestULong);
            QUnit.test("UncheckedInsideChecked - Batch2 TestInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests.TestInt32);
            QUnit.test("UncheckedInsideChecked - Batch2 TestUInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests.TestUInt32);
            QUnit.test("UncheckedInsideChecked - Batch2 TestLong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests.TestLong);
            QUnit.test("UncheckedInsideChecked - Batch2 TestULong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests.TestULong);
            QUnit.test("Unchecked - Batch2 TestInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests.TestInt32);
            QUnit.test("Unchecked - Batch2 TestUInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests.TestUInt32);
            QUnit.test("Unchecked - Batch2 TestLong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests.TestLong);
            QUnit.test("Unchecked - Batch2 TestULong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests.TestULong);
            QUnit.test("WithNoUncheckedKeyword - Batch2 TestInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests.TestInt32);
            QUnit.test("WithNoUncheckedKeyword - Batch2 TestUInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests.TestUInt32);
            QUnit.test("WithNoUncheckedKeyword - Batch2 TestLong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests.TestLong);
            QUnit.test("WithNoUncheckedKeyword - Batch2 TestULong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests.TestULong);
            QUnit.module("Issues2");
            QUnit.test("#1385 - Batch2 TestIsTypedArrayForByte", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1385.TestIsTypedArrayForByte);
            QUnit.test("#1499 - Batch2 TestObjectStringCoalesceWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1499.TestObjectStringCoalesceWorks);
            QUnit.test("#1122 - Batch2 TestClippingInJavaScriptOverflowMode", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122.TestClippingInJavaScriptOverflowMode);
            QUnit.test("#1122 - Batch2 TestIntegerDivisionInJavaScriptOverflowMode", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122.TestIntegerDivisionInJavaScriptOverflowMode);
            QUnit.test("#1204 - Batch2 TestStrictNullChecksOptionForNulls", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1204.TestStrictNullChecksOptionForNulls);
            QUnit.test("#772 - Batch2 TypePropertiesAreCorrect", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.TypePropertiesAreCorrect);
            QUnit.test("#772 - Batch2 LengthWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.LengthWorks);
            QUnit.test("#772 - Batch2 RankIsOne", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.RankIsOne);
            QUnit.test("#772 - Batch2 GetLengthWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.GetLengthWorks);
            QUnit.test("#772 - Batch2 GetLowerBound", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.GetLowerBound);
            QUnit.test("#772 - Batch2 GetUpperBoundWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.GetUpperBoundWorks);
            QUnit.test("#772 - Batch2 GettingValueByIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.GettingValueByIndexWorks);
            QUnit.test("#772 - Batch2 GetValueWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.GetValueWorks);
            QUnit.test("#772 - Batch2 SettingValueByIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.SettingValueByIndexWorks);
            QUnit.test("#772 - Batch2 SetValueWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.SetValueWorks);
            QUnit.test("#772 - Batch2 ForeachWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ForeachWorks);
            QUnit.test("#772 - Batch2 CloneWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.CloneWorks);
            QUnit.test("#772 - Batch2 ConcatWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ConcatWorks);
            QUnit.test("#772 - Batch2 ContainsWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ContainsWorks);
            QUnit.test("#772 - Batch2 ContainsUsesEqualsMethod", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ContainsUsesEqualsMethod);
            QUnit.test("#772 - Batch2 AllWithArrayItemFilterCallbackWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.AllWithArrayItemFilterCallbackWorks);
            QUnit.test("#772 - Batch2 SliceWithoutEndWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.SliceWithoutEndWorks);
            QUnit.test("#772 - Batch2 ForeachWithArrayItemCallbackWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ForeachWithArrayItemCallbackWorks);
            QUnit.test("#772 - Batch2 ForeachWithArrayCallbackWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ForeachWithArrayCallbackWorks);
            QUnit.test("#772 - Batch2 IndexOfWithoutStartIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.IndexOfWithoutStartIndexWorks);
            QUnit.test("#772 - Batch2 IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.IndexOfWithoutStartIndexUsesEqualsMethod);
            QUnit.test("#772 - Batch2 IndexOfWithStartIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.IndexOfWithStartIndexWorks);
            QUnit.test("#772 - Batch2 JoinWithoutDelimiterWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.JoinWithoutDelimiterWorks);
            QUnit.test("#772 - Batch2 ReverseWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ReverseWorks);
            QUnit.test("#772 - Batch2 AnyWithArrayItemFilterCallbackWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.AnyWithArrayItemFilterCallbackWorks);
            QUnit.test("#772 - Batch2 BinarySearch1Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.BinarySearch1Works);
            QUnit.test("#772 - Batch2 BinarySearch2Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.BinarySearch2Works);
            QUnit.test("#772 - Batch2 BinarySearch3Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.BinarySearch3Works);
            QUnit.test("#772 - Batch2 BinarySearch4Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.BinarySearch4Works);
            QUnit.test("#772 - Batch2 BinarySearchExceptionsWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.BinarySearchExceptionsWorks);
            QUnit.test("#772 - Batch2 SortWithDefaultCompareWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.SortWithDefaultCompareWorks);
            QUnit.test("#772 - Batch2 Sort1Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.Sort1Works);
            QUnit.test("#772 - Batch2 Sort2Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.Sort2Works);
            QUnit.test("#772 - Batch2 Sort3Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.Sort3Works);
            QUnit.test("#772 - Batch2 Sort4Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.Sort4Works);
            QUnit.test("#772 - Batch2 SortExceptionsWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.SortExceptionsWorks);
            QUnit.test("#772 - Batch2 ForeachWhenCastToIListWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ForeachWhenCastToIListWorks);
            QUnit.test("#772 - Batch2 ICollectionCountWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ICollectionCountWorks);
            QUnit.test("#772 - Batch2 ICollectionAddWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ICollectionAddWorks);
            QUnit.test("#772 - Batch2 ICollectionClearWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ICollectionClearWorks);
            QUnit.test("#772 - Batch2 ICollectionContainsWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ICollectionContainsWorks);
            QUnit.test("#772 - Batch2 ICollectionContainsUsesEqualsMethod", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ICollectionContainsUsesEqualsMethod);
            QUnit.test("#772 - Batch2 ICollectionRemoveWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ICollectionRemoveWorks);
            QUnit.test("#772 - Batch2 IListIndexingWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.IListIndexingWorks);
            QUnit.test("#772 - Batch2 IListIndexOfWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.IListIndexOfWorks);
            QUnit.test("#772 - Batch2 IListIndexOfUsesEqualsMethod", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.IListIndexOfUsesEqualsMethod);
            QUnit.test("#772 - Batch2 IListInsertWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.IListInsertWorks);
            QUnit.test("#772 - Batch2 IListRemoveAtWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.IListRemoveAtWorks);
            QUnit.test("#772 - Batch2 TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.TestUseCase);
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1385", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385)],
        statics: {
            methods: {
                TestIsTypedArrayForByte: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1385, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestIsTypedArrayForByte()",
                        Line: "9"
                    } ));
                    Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385.TestIsTypedArrayForByte();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                if (this.context == null) {
                    this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                        Project: "Batch2",
                        ClassName: "Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385",
                        File: "Batch2\\BridgeIssues\\N1385.cs"
                    } );
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1499", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499)],
        statics: {
            methods: {
                TestObjectStringCoalesceWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1499, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestObjectStringCoalesceWorks()",
                        Line: "9"
                    } ));
                    t.Fixture.TestObjectStringCoalesceWorks();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                if (this.context == null) {
                    this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                        Project: "Batch2",
                        ClassName: "Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499",
                        File: "Batch2\\BridgeIssues\\N1499.cs"
                    } );
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests)],
        statics: {
            methods: {
                TestInt32: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestInt32()",
                        Line: "190"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.TestInt32();
                },
                TestUInt32: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestUInt32()",
                        Line: "234"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.TestUInt32();
                },
                TestLong: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestLong()",
                        Line: "276"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.TestLong();
                },
                TestULong: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestULong()",
                        Line: "320"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.TestULong();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                if (this.context == null) {
                    this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                        Project: "Batch2",
                        ClassName: "Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests",
                        File: "Batch2\\CheckedUncheckedTests.cs"
                    } );
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests)],
        statics: {
            methods: {
                TestInt32: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestInt32()",
                        Line: "25"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.TestInt32();
                },
                TestUInt32: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestUInt32()",
                        Line: "66"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.TestUInt32();
                },
                TestLong: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestLong()",
                        Line: "105"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.TestLong();
                },
                TestULong: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestULong()",
                        Line: "146"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.TestULong();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                if (this.context == null) {
                    this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                        Project: "Batch2",
                        ClassName: "Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests",
                        File: "Batch2\\CheckedUncheckedTests.cs"
                    } );
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1122)],
        statics: {
            methods: {
                TestClippingInJavaScriptOverflowMode: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestClippingInJavaScriptOverflowMode()",
                        Line: "12"
                    } ));
                    Bridge.ClientTest.Batch2.BridgeIssues.N1122.TestClippingInJavaScriptOverflowMode();
                },
                TestIntegerDivisionInJavaScriptOverflowMode: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestIntegerDivisionInJavaScriptOverflowMode()",
                        Line: "30"
                    } ));
                    Bridge.ClientTest.Batch2.BridgeIssues.N1122.TestIntegerDivisionInJavaScriptOverflowMode();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                if (this.context == null) {
                    this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                        Project: "Batch2",
                        ClassName: "Bridge.ClientTest.Batch2.BridgeIssues.N1122",
                        File: "Batch2\\BridgeIssues\\N1122.cs"
                    } );
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1204", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1204)],
        statics: {
            methods: {
                TestStrictNullChecksOptionForNulls: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1204).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1204, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestStrictNullChecksOptionForNulls()",
                        Line: "10"
                    } ));
                    Bridge.ClientTest.Batch2.BridgeIssues.N1204.TestStrictNullChecksOptionForNulls();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                if (this.context == null) {
                    this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                        Project: "Batch2",
                        ClassName: "Bridge.ClientTest.Batch2.BridgeIssues.N1204",
                        File: "Batch2\\BridgeIssues\\N1204.cs"
                    } );
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772)],
        statics: {
            methods: {
                TypePropertiesAreCorrect: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TypePropertiesAreCorrect()",
                        Line: "36"
                    } ));
                    t.Fixture.TypePropertiesAreCorrect();
                },
                LengthWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "LengthWorks()",
                        Line: "50"
                    } ));
                    t.Fixture.LengthWorks();
                },
                RankIsOne: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "RankIsOne()",
                        Line: "58"
                    } ));
                    t.Fixture.RankIsOne();
                },
                GetLengthWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "GetLengthWorks()",
                        Line: "64"
                    } ));
                    t.Fixture.GetLengthWorks();
                },
                GetLowerBound: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "GetLowerBound()",
                        Line: "72"
                    } ));
                    t.Fixture.GetLowerBound();
                },
                GetUpperBoundWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "GetUpperBoundWorks()",
                        Line: "80"
                    } ));
                    t.Fixture.GetUpperBoundWorks();
                },
                GettingValueByIndexWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "GettingValueByIndexWorks()",
                        Line: "88"
                    } ));
                    t.Fixture.GettingValueByIndexWorks();
                },
                GetValueWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "GetValueWorks()",
                        Line: "95"
                    } ));
                    t.Fixture.GetValueWorks();
                },
                SettingValueByIndexWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "SettingValueByIndexWorks()",
                        Line: "102"
                    } ));
                    t.Fixture.SettingValueByIndexWorks();
                },
                SetValueWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "SetValueWorks()",
                        Line: "112"
                    } ));
                    t.Fixture.SetValueWorks();
                },
                ForeachWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "ForeachWorks()",
                        Line: "122"
                    } ));
                    t.Fixture.ForeachWorks();
                },
                CloneWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "CloneWorks()",
                        Line: "133"
                    } ));
                    t.Fixture.CloneWorks();
                },
                ConcatWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "ConcatWorks()",
                        Line: "142"
                    } ));
                    t.Fixture.ConcatWorks();
                },
                ContainsWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "ContainsWorks()",
                        Line: "151"
                    } ));
                    t.Fixture.ContainsWorks();
                },
                ContainsUsesEqualsMethod: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "ContainsUsesEqualsMethod()",
                        Line: "159"
                    } ));
                    t.Fixture.ContainsUsesEqualsMethod();
                },
                AllWithArrayItemFilterCallbackWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "AllWithArrayItemFilterCallbackWorks()",
                        Line: "167"
                    } ));
                    t.Fixture.AllWithArrayItemFilterCallbackWorks();
                },
                SliceWithoutEndWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "SliceWithoutEndWorks()",
                        Line: "174"
                    } ));
                    t.Fixture.SliceWithoutEndWorks();
                },
                ForeachWithArrayItemCallbackWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "ForeachWithArrayItemCallbackWorks()",
                        Line: "181"
                    } ));
                    t.Fixture.ForeachWithArrayItemCallbackWorks();
                },
                ForeachWithArrayCallbackWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "ForeachWithArrayCallbackWorks()",
                        Line: "189"
                    } ));
                    t.Fixture.ForeachWithArrayCallbackWorks();
                },
                IndexOfWithoutStartIndexWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "IndexOfWithoutStartIndexWorks()",
                        Line: "197"
                    } ));
                    t.Fixture.IndexOfWithoutStartIndexWorks();
                },
                IndexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "IndexOfWithoutStartIndexUsesEqualsMethod()",
                        Line: "203"
                    } ));
                    t.Fixture.IndexOfWithoutStartIndexUsesEqualsMethod();
                },
                IndexOfWithStartIndexWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "IndexOfWithStartIndexWorks()",
                        Line: "211"
                    } ));
                    t.Fixture.IndexOfWithStartIndexWorks();
                },
                JoinWithoutDelimiterWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "JoinWithoutDelimiterWorks()",
                        Line: "217"
                    } ));
                    t.Fixture.JoinWithoutDelimiterWorks();
                },
                ReverseWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "ReverseWorks()",
                        Line: "225"
                    } ));
                    t.Fixture.ReverseWorks();
                },
                AnyWithArrayItemFilterCallbackWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "AnyWithArrayItemFilterCallbackWorks()",
                        Line: "233"
                    } ));
                    t.Fixture.AnyWithArrayItemFilterCallbackWorks();
                },
                BinarySearch1Works: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "BinarySearch1Works()",
                        Line: "240"
                    } ));
                    t.Fixture.BinarySearch1Works();
                },
                BinarySearch2Works: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "BinarySearch2Works()",
                        Line: "249"
                    } ));
                    t.Fixture.BinarySearch2Works();
                },
                BinarySearch3Works: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "BinarySearch3Works()",
                        Line: "266"
                    } ));
                    t.Fixture.BinarySearch3Works();
                },
                BinarySearch4Works: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "BinarySearch4Works()",
                        Line: "275"
                    } ));
                    t.Fixture.BinarySearch4Works();
                },
                BinarySearchExceptionsWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "BinarySearchExceptionsWorks()",
                        Line: "284"
                    } ));
                    t.Fixture.BinarySearchExceptionsWorks();
                },
                SortWithDefaultCompareWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "SortWithDefaultCompareWorks()",
                        Line: "295"
                    } ));
                    t.Fixture.SortWithDefaultCompareWorks();
                },
                Sort1Works: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "Sort1Works()",
                        Line: "303"
                    } ));
                    t.Fixture.Sort1Works();
                },
                Sort2Works: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "Sort2Works()",
                        Line: "311"
                    } ));
                    t.Fixture.Sort2Works();
                },
                Sort3Works: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "Sort3Works()",
                        Line: "319"
                    } ));
                    t.Fixture.Sort3Works();
                },
                Sort4Works: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "Sort4Works()",
                        Line: "327"
                    } ));
                    t.Fixture.Sort4Works();
                },
                SortExceptionsWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "SortExceptionsWorks()",
                        Line: "335"
                    } ));
                    t.Fixture.SortExceptionsWorks();
                },
                ForeachWhenCastToIListWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "ForeachWhenCastToIListWorks()",
                        Line: "343"
                    } ));
                    t.Fixture.ForeachWhenCastToIListWorks();
                },
                ICollectionCountWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "ICollectionCountWorks()",
                        Line: "355"
                    } ));
                    t.Fixture.ICollectionCountWorks();
                },
                ICollectionAddWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "ICollectionAddWorks()",
                        Line: "362"
                    } ));
                    t.Fixture.ICollectionAddWorks();
                },
                ICollectionClearWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "ICollectionClearWorks()",
                        Line: "369"
                    } ));
                    t.Fixture.ICollectionClearWorks();
                },
                ICollectionContainsWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "ICollectionContainsWorks()",
                        Line: "376"
                    } ));
                    t.Fixture.ICollectionContainsWorks();
                },
                ICollectionContainsUsesEqualsMethod: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "ICollectionContainsUsesEqualsMethod()",
                        Line: "384"
                    } ));
                    t.Fixture.ICollectionContainsUsesEqualsMethod();
                },
                ICollectionRemoveWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "ICollectionRemoveWorks()",
                        Line: "392"
                    } ));
                    t.Fixture.ICollectionRemoveWorks();
                },
                IListIndexingWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "IListIndexingWorks()",
                        Line: "399"
                    } ));
                    t.Fixture.IListIndexingWorks();
                },
                IListIndexOfWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "IListIndexOfWorks()",
                        Line: "408"
                    } ));
                    t.Fixture.IListIndexOfWorks();
                },
                IListIndexOfUsesEqualsMethod: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "IListIndexOfUsesEqualsMethod()",
                        Line: "416"
                    } ));
                    t.Fixture.IListIndexOfUsesEqualsMethod();
                },
                IListInsertWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "IListInsertWorks()",
                        Line: "424"
                    } ));
                    t.Fixture.IListInsertWorks();
                },
                IListRemoveAtWorks: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "IListRemoveAtWorks()",
                        Line: "431"
                    } ));
                    t.Fixture.IListRemoveAtWorks();
                },
                TestUseCase: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, 10, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestUseCase()",
                        Line: "438"
                    } ));
                    Bridge.ClientTest.Batch2.BridgeIssues.N772.TestUseCase();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                if (this.context == null) {
                    this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                        Project: "Batch2",
                        ClassName: "Bridge.ClientTest.Batch2.BridgeIssues.N772",
                        File: "Batch2\\BridgeIssues\\N772.cs"
                    } );
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests)],
        statics: {
            methods: {
                TestInt32: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestInt32()",
                        Line: "565"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.TestInt32();
                },
                TestUInt32: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestUInt32()",
                        Line: "617"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.TestUInt32();
                },
                TestLong: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestLong()",
                        Line: "669"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.TestLong();
                },
                TestULong: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestULong()",
                        Line: "721"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.TestULong();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                if (this.context == null) {
                    this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                        Project: "Batch2",
                        ClassName: "Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests",
                        File: "Batch2\\CheckedUncheckedTests.cs"
                    } );
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests)],
        statics: {
            methods: {
                TestInt32: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestInt32()",
                        Line: "367"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.TestInt32();
                },
                TestUInt32: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestUInt32()",
                        Line: "416"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.TestUInt32();
                },
                TestLong: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestLong()",
                        Line: "465"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.TestLong();
                },
                TestULong: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestULong()",
                        Line: "514"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.TestULong();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                if (this.context == null) {
                    this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                        Project: "Batch2",
                        ClassName: "Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests",
                        File: "Batch2\\CheckedUncheckedTests.cs"
                    } );
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests)],
        statics: {
            methods: {
                TestInt32: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestInt32()",
                        Line: "775"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.TestInt32();
                },
                TestUInt32: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestUInt32()",
                        Line: "821"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.TestUInt32();
                },
                TestLong: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestLong()",
                        Line: "867"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.TestLong();
                },
                TestULong: function (assert) {
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                        Method: "TestULong()",
                        Line: "913"
                    } ));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.TestULong();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                if (this.context == null) {
                    this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                        Project: "Batch2",
                        ClassName: "Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests",
                        File: "Batch2\\CheckedUncheckedTests.cs"
                    } );
                }
                return this.context;
            }
        }
    });
});
