using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2114 - {0}")]
    public class Bridge2114
    {
        private class TestClass1
        {
            [Name("0a")]
            public int TestField;

            public static int STestField = 1;

            [Name("0a3")]
            public int TestField3 = STestField + 1;

            [Name("0l")]
            public long TestField2;

            [Name("0p")]
            [FieldProperty]
            public int TespProp
            {
                get; set;
            }

            [Name("0a4")]
#pragma warning disable 169
#pragma warning disable 649
            public int TestField4;

#pragma warning restore 649
#pragma warning restore 169

            [Name("0p1")]
            [FieldProperty]
            public static int TespProp1
            {
                get; set;
            }

            public TestClass1(int value)
            {
                TestField = value;
                this.TestField = value;
                var v = this.TestField;
                v = TestField;

                TespProp = value;
                this.TespProp = value;
                v = this.TespProp;
                v = TespProp;

                TespProp1 = value;
                TestClass1.TespProp1 = value;
                v = TestClass1.TespProp1;
                v = TespProp1;

                TestField2 = value;
                this.TestField2 = value;
                v = (int)this.TestField2;
                v = (int)TestField2;
                var l = this.TestField2++;
                l = TestField2++;
            }
        }

        private class TestClass2
        {
            [Template("{this}[\"0a\"]")]
            public int TestField;

            [Template("{this}.testMethod({0})")]
            public int TestField2;

            private int f;

            public int testMethod()
            {
                if (Arguments.Length > 0)
                {
                    this.f = (int)Arguments.GetArgument(0);
                }
                return this.f;
            }

            public TestClass2(int value)
            {
                TestField = value;
                this.TestField = value;
                var v = this.TestField;
                v = TestField;

                TestField2 = value;
                this.TestField2 = value;
                v = this.TestField2;
                v = TestField2;
            }
        }

        [Test]
        public static void TestNonStandardNames()
        {
            var c1 = new TestClass1(5);
            Assert.AreEqual(5, c1.TestField);
            Assert.AreEqual(c1["0a"], c1.TestField);

            Assert.AreEqual(5, c1.TespProp);
            Assert.AreEqual(c1["0p"], c1.TespProp);

            Assert.AreEqual(5, TestClass1.TespProp1);

            Assert.True(7 == c1.TestField2);
            Assert.True((long)c1["0l"] == c1.TestField2);

            Assert.AreEqual(2, c1.TestField3);
            Assert.AreEqual(c1["0a3"], c1.TestField3);

            Assert.AreEqual(0, c1.TestField4);
            Assert.AreEqual(c1["0a4"], c1.TestField4);
        }

        [Test]
        public static void TestFieldTemplates()
        {
            var c2 = new TestClass2(5);
            Assert.AreEqual(5, c2.TestField);
            Assert.AreEqual(5, c2.TestField2);
        }
    }
}