/**
 * @compiler Bridge.NET 16.0.0
 */
Bridge.assembly("Bridge.Test.Bridge.ClientTest.Batch2", function ($asm, globals) {
    

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner", {
        main: function Main () {
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
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1385, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIsTypedArrayForByte()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385.TestIsTypedArrayForByte();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385", $t.File = "Batch2\\BridgeIssues\\N1385.cs", $t);
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
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1499, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestObjectStringCoalesceWorks()", $t.Line = "9", $t));
                    t.Fixture.TestObjectStringCoalesceWorks();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499", $t.File = "Batch2\\BridgeIssues\\N1499.cs", $t);
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
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInt32()", $t.Line = "190", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.TestInt32();
                },
                TestUInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUInt32()", $t.Line = "234", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.TestUInt32();
                },
                TestLong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLong()", $t.Line = "276", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.TestLong();
                },
                TestULong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestULong()", $t.Line = "320", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.TestULong();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests", $t.File = "Batch2\\CheckedUncheckedTests.cs", $t);
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
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInt32()", $t.Line = "25", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.TestInt32();
                },
                TestUInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUInt32()", $t.Line = "66", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.TestUInt32();
                },
                TestLong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLong()", $t.Line = "105", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.TestLong();
                },
                TestULong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestULong()", $t.Line = "146", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.TestULong();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests", $t.File = "Batch2\\CheckedUncheckedTests.cs", $t);
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
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestClippingInJavaScriptOverflowMode()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch2.BridgeIssues.N1122.TestClippingInJavaScriptOverflowMode();
                },
                TestIntegerDivisionInJavaScriptOverflowMode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIntegerDivisionInJavaScriptOverflowMode()", $t.Line = "30", $t));
                    Bridge.ClientTest.Batch2.BridgeIssues.N1122.TestIntegerDivisionInJavaScriptOverflowMode();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.BridgeIssues.N1122", $t.File = "Batch2\\BridgeIssues\\N1122.cs", $t);
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
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1204).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1204, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStrictNullChecksOptionForNulls()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch2.BridgeIssues.N1204.TestStrictNullChecksOptionForNulls();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.BridgeIssues.N1204", $t.File = "Batch2\\BridgeIssues\\N1204.cs", $t);
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
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect()", $t.Line = "35", $t));
                    t.Fixture.TypePropertiesAreCorrect();
                },
                LengthWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LengthWorks()", $t.Line = "49", $t));
                    t.Fixture.LengthWorks();
                },
                RankIsOne: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RankIsOne()", $t.Line = "57", $t));
                    t.Fixture.RankIsOne();
                },
                GetLengthWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetLengthWorks()", $t.Line = "63", $t));
                    t.Fixture.GetLengthWorks();
                },
                GetLowerBound: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetLowerBound()", $t.Line = "71", $t));
                    t.Fixture.GetLowerBound();
                },
                GetUpperBoundWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetUpperBoundWorks()", $t.Line = "79", $t));
                    t.Fixture.GetUpperBoundWorks();
                },
                GettingValueByIndexWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GettingValueByIndexWorks()", $t.Line = "87", $t));
                    t.Fixture.GettingValueByIndexWorks();
                },
                GetValueWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetValueWorks()", $t.Line = "94", $t));
                    t.Fixture.GetValueWorks();
                },
                SettingValueByIndexWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SettingValueByIndexWorks()", $t.Line = "101", $t));
                    t.Fixture.SettingValueByIndexWorks();
                },
                SetValueWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetValueWorks()", $t.Line = "111", $t));
                    t.Fixture.SetValueWorks();
                },
                ForeachWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ForeachWorks()", $t.Line = "121", $t));
                    t.Fixture.ForeachWorks();
                },
                CloneWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CloneWorks()", $t.Line = "132", $t));
                    t.Fixture.CloneWorks();
                },
                ConcatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConcatWorks()", $t.Line = "141", $t));
                    t.Fixture.ConcatWorks();
                },
                ContainsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ContainsWorks()", $t.Line = "150", $t));
                    t.Fixture.ContainsWorks();
                },
                ContainsUsesEqualsMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ContainsUsesEqualsMethod()", $t.Line = "158", $t));
                    t.Fixture.ContainsUsesEqualsMethod();
                },
                AllWithArrayItemFilterCallbackWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AllWithArrayItemFilterCallbackWorks()", $t.Line = "166", $t));
                    t.Fixture.AllWithArrayItemFilterCallbackWorks();
                },
                SliceWithoutEndWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SliceWithoutEndWorks()", $t.Line = "173", $t));
                    t.Fixture.SliceWithoutEndWorks();
                },
                ForeachWithArrayItemCallbackWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ForeachWithArrayItemCallbackWorks()", $t.Line = "180", $t));
                    t.Fixture.ForeachWithArrayItemCallbackWorks();
                },
                IndexOfWithoutStartIndexWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IndexOfWithoutStartIndexWorks()", $t.Line = "188", $t));
                    t.Fixture.IndexOfWithoutStartIndexWorks();
                },
                IndexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IndexOfWithoutStartIndexUsesEqualsMethod()", $t.Line = "194", $t));
                    t.Fixture.IndexOfWithoutStartIndexUsesEqualsMethod();
                },
                IndexOfWithStartIndexWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IndexOfWithStartIndexWorks()", $t.Line = "202", $t));
                    t.Fixture.IndexOfWithStartIndexWorks();
                },
                JoinWithoutDelimiterWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "JoinWithoutDelimiterWorks()", $t.Line = "208", $t));
                    t.Fixture.JoinWithoutDelimiterWorks();
                },
                ReverseWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ReverseWorks()", $t.Line = "216", $t));
                    t.Fixture.ReverseWorks();
                },
                AnyWithArrayItemFilterCallbackWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AnyWithArrayItemFilterCallbackWorks()", $t.Line = "224", $t));
                    t.Fixture.AnyWithArrayItemFilterCallbackWorks();
                },
                BinarySearch1Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "BinarySearch1Works()", $t.Line = "231", $t));
                    t.Fixture.BinarySearch1Works();
                },
                BinarySearch2Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "BinarySearch2Works()", $t.Line = "240", $t));
                    t.Fixture.BinarySearch2Works();
                },
                BinarySearch3Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "BinarySearch3Works()", $t.Line = "257", $t));
                    t.Fixture.BinarySearch3Works();
                },
                BinarySearch4Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "BinarySearch4Works()", $t.Line = "266", $t));
                    t.Fixture.BinarySearch4Works();
                },
                BinarySearchExceptionsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "BinarySearchExceptionsWorks()", $t.Line = "275", $t));
                    t.Fixture.BinarySearchExceptionsWorks();
                },
                SortWithDefaultCompareWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SortWithDefaultCompareWorks()", $t.Line = "286", $t));
                    t.Fixture.SortWithDefaultCompareWorks();
                },
                Sort1Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Sort1Works()", $t.Line = "294", $t));
                    t.Fixture.Sort1Works();
                },
                Sort2Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Sort2Works()", $t.Line = "302", $t));
                    t.Fixture.Sort2Works();
                },
                Sort3Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Sort3Works()", $t.Line = "310", $t));
                    t.Fixture.Sort3Works();
                },
                Sort4Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Sort4Works()", $t.Line = "318", $t));
                    t.Fixture.Sort4Works();
                },
                SortExceptionsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SortExceptionsWorks()", $t.Line = "326", $t));
                    t.Fixture.SortExceptionsWorks();
                },
                ForeachWhenCastToIListWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ForeachWhenCastToIListWorks()", $t.Line = "334", $t));
                    t.Fixture.ForeachWhenCastToIListWorks();
                },
                ICollectionCountWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ICollectionCountWorks()", $t.Line = "346", $t));
                    t.Fixture.ICollectionCountWorks();
                },
                ICollectionAddWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ICollectionAddWorks()", $t.Line = "353", $t));
                    t.Fixture.ICollectionAddWorks();
                },
                ICollectionClearWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ICollectionClearWorks()", $t.Line = "360", $t));
                    t.Fixture.ICollectionClearWorks();
                },
                ICollectionContainsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ICollectionContainsWorks()", $t.Line = "367", $t));
                    t.Fixture.ICollectionContainsWorks();
                },
                ICollectionContainsUsesEqualsMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ICollectionContainsUsesEqualsMethod()", $t.Line = "375", $t));
                    t.Fixture.ICollectionContainsUsesEqualsMethod();
                },
                ICollectionRemoveWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ICollectionRemoveWorks()", $t.Line = "383", $t));
                    t.Fixture.ICollectionRemoveWorks();
                },
                IListIndexingWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IListIndexingWorks()", $t.Line = "390", $t));
                    t.Fixture.IListIndexingWorks();
                },
                IListIndexOfWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IListIndexOfWorks()", $t.Line = "399", $t));
                    t.Fixture.IListIndexOfWorks();
                },
                IListIndexOfUsesEqualsMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IListIndexOfUsesEqualsMethod()", $t.Line = "407", $t));
                    t.Fixture.IListIndexOfUsesEqualsMethod();
                },
                IListInsertWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IListInsertWorks()", $t.Line = "415", $t));
                    t.Fixture.IListInsertWorks();
                },
                IListRemoveAtWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IListRemoveAtWorks()", $t.Line = "422", $t));
                    t.Fixture.IListRemoveAtWorks();
                },
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, 10, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "429", $t));
                    Bridge.ClientTest.Batch2.BridgeIssues.N772.TestUseCase();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.BridgeIssues.N772", $t.File = "Batch2\\BridgeIssues\\N772.cs", $t);
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
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInt32()", $t.Line = "565", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.TestInt32();
                },
                TestUInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUInt32()", $t.Line = "617", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.TestUInt32();
                },
                TestLong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLong()", $t.Line = "669", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.TestLong();
                },
                TestULong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestULong()", $t.Line = "721", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.TestULong();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests", $t.File = "Batch2\\CheckedUncheckedTests.cs", $t);
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
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInt32()", $t.Line = "367", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.TestInt32();
                },
                TestUInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUInt32()", $t.Line = "416", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.TestUInt32();
                },
                TestLong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLong()", $t.Line = "465", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.TestLong();
                },
                TestULong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestULong()", $t.Line = "514", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.TestULong();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests", $t.File = "Batch2\\CheckedUncheckedTests.cs", $t);
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
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInt32()", $t.Line = "775", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.TestInt32();
                },
                TestUInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUInt32()", $t.Line = "821", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.TestUInt32();
                },
                TestLong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLong()", $t.Line = "867", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.TestLong();
                },
                TestULong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestULong()", $t.Line = "913", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.TestULong();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests", $t.File = "Batch2\\CheckedUncheckedTests.cs", $t);
                }
                return this.context;
            }
        }
    });
});
