using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#1041]
    public class Bridge1041
    {
        [Category(Constants.MODULE_ISSUES)]
        [TestFixture(TestNameFormat = "#1041 - Integer {0}")]
        public class Bridge1041Integer
        {
            [Test(ExpectedCount = 12)]
            public static void TestPropertyOps()
            {
                Prop1 = 5;

                Prop1 /= 2;
                Assert.AreEqual(2, Prop1);

                Prop1 += 2;
                Assert.AreEqual(4, Prop1);

                Prop1++;
                Assert.AreEqual(5, Prop1);

                ++Prop1;
                Assert.AreEqual(6, Prop1);

                Assert.AreEqual(3, Method(Prop1 /= 2));
                Assert.AreEqual(3, Prop1);

                Assert.AreEqual(4, Method(Prop1 += 1));
                Assert.AreEqual(4, Prop1);

                Assert.AreEqual(4, Method(Prop1++));
                Assert.AreEqual(5, Prop1);

                Assert.AreEqual(6, Method(++Prop1));
                Assert.AreEqual(6, Prop1);
            }

            [Test(ExpectedCount = 12)]
            public static void TestIndexerOps()
            {
                var app = new Bridge1041Integer();
                app[0] = 5;

                app[0] /= 2;
                Assert.AreEqual(2, app[0]);

                app[0] += 2;
                Assert.AreEqual(4, app[0]);

                app[0]++;
                Assert.AreEqual(5, app[0]);

                ++app[0];
                Assert.AreEqual(6, app[0]);

                Assert.AreEqual(3, Method(app[0] /= 2));
                Assert.AreEqual(3, app[0]);

                Assert.AreEqual(4, Method(app[0] += 1));
                Assert.AreEqual(4, app[0]);

                Assert.AreEqual(4, Method(app[0]++));
                Assert.AreEqual(5, app[0]);

                Assert.AreEqual(6, Method(++app[0]));
                Assert.AreEqual(6, app[0]);
            }

            [Test(ExpectedCount = 12)]
            public static void TestDictOps()
            {
                var dict = new Dictionary<int, int> { { 0, 5 } };

                dict[0] /= 2;
                Assert.AreEqual(2, dict[0]);

                dict[0] += 2;
                Assert.AreEqual(4, dict[0]);

                dict[0]++;
                Assert.AreEqual(5, dict[0]);

                ++dict[0];
                Assert.AreEqual(6, dict[0]);

                Assert.AreEqual(3, Method(dict[0] /= 2));
                Assert.AreEqual(3, dict[0]);

                Assert.AreEqual(4, Method(dict[0] += 1));
                Assert.AreEqual(4, dict[0]);

                Assert.AreEqual(4, Method(dict[0]++));
                Assert.AreEqual(5, dict[0]);

                Assert.AreEqual(6, Method(++dict[0]));
                Assert.AreEqual(6, dict[0]);
            }

            [Test(ExpectedCount = 12)]
            public static void TestVariableOps()
            {
                int i1 = 5;

                i1 /= 2;
                Assert.AreEqual(2, i1);

                i1 += 2;
                Assert.AreEqual(4, i1);

                i1++;
                Assert.AreEqual(5, i1);

                ++i1;
                Assert.AreEqual(6, i1);

                Assert.AreEqual(3, Method(i1 /= 2));
                Assert.AreEqual(3, i1);

                Assert.AreEqual(4, Method(i1 += 1));
                Assert.AreEqual(4, i1);

                Assert.AreEqual(4, Method(i1++));
                Assert.AreEqual(5, i1);

                Assert.AreEqual(6, Method(++i1));
                Assert.AreEqual(6, i1);
            }

            public static int Prop1
            {
                get; set;
            }

            public static int Method(int i)
            {
                return i;
            }

            private Dictionary<int, int> dict = new Dictionary<int, int>();

            public int this[int i]
            {
                get
                {
                    return dict[i];
                }
                set
                {
                    dict[i] = value;
                }
            }
        }

        [Category(Constants.MODULE_ISSUES)]
        [TestFixture(TestNameFormat = "#1041 - Decimal {0}")]
        public class Bridge1041Decimal
        {
            [Test(ExpectedCount = 24)]
            public static void TestPropertyOps()
            {
                Prop1 = 5m;

                Prop1 /= 2;
                AssertIsDecimalAndEqualTo(2.5m, Prop1);

                Prop1 += 2;
                AssertIsDecimalAndEqualTo(4.5m, Prop1);

                Prop1++;
                AssertIsDecimalAndEqualTo(5.5m, Prop1);

                ++Prop1;
                AssertIsDecimalAndEqualTo(6.5m, Prop1);

                AssertIsDecimalAndEqualTo(3.25m, Method(Prop1 /= 2));
                AssertIsDecimalAndEqualTo(3.25m, Prop1);

                AssertIsDecimalAndEqualTo(4.25m, Method(Prop1 += 1));
                AssertIsDecimalAndEqualTo(4.25m, Prop1);

                AssertIsDecimalAndEqualTo(4.25m, Method(Prop1++));
                AssertIsDecimalAndEqualTo(5.25m, Prop1);

                AssertIsDecimalAndEqualTo(6.25m, Method(++Prop1));
                AssertIsDecimalAndEqualTo(6.25m, Prop1);
            }

            [Test(ExpectedCount = 24)]
            public static void TestIndexerOps()
            {
                var app = new Bridge1041Decimal();
                app[0] = 5m;

                app[0] /= 2;
                AssertIsDecimalAndEqualTo(2.5m, app[0]);

                app[0] += 2;
                AssertIsDecimalAndEqualTo(4.5m, app[0]);

                app[0]++;
                AssertIsDecimalAndEqualTo(5.5m, app[0]);

                ++app[0];
                AssertIsDecimalAndEqualTo(6.5m, app[0]);

                AssertIsDecimalAndEqualTo(3.25m, Method(app[0] /= 2));
                AssertIsDecimalAndEqualTo(3.25m, app[0]);

                AssertIsDecimalAndEqualTo(4.25m, Method(app[0] += 1));
                AssertIsDecimalAndEqualTo(4.25m, app[0]);

                AssertIsDecimalAndEqualTo(4.25m, Method(app[0]++));
                AssertIsDecimalAndEqualTo(5.25m, app[0]);

                AssertIsDecimalAndEqualTo(6.25m, Method(++app[0]));
                AssertIsDecimalAndEqualTo(6.25m, app[0]);
            }

            [Test(ExpectedCount = 24)]
            public static void TestDictOps()
            {
                var dict = new Dictionary<int, decimal> { { 0, 5m } };

                dict[0] /= 2;
                AssertIsDecimalAndEqualTo(2.5m, dict[0]);

                dict[0] += 2;
                AssertIsDecimalAndEqualTo(4.5m, dict[0]);

                dict[0]++;
                AssertIsDecimalAndEqualTo(5.5m, dict[0]);

                ++dict[0];
                AssertIsDecimalAndEqualTo(6.5m, dict[0]);

                AssertIsDecimalAndEqualTo(3.25m, Method(dict[0] /= 2));
                AssertIsDecimalAndEqualTo(3.25m, dict[0]);

                AssertIsDecimalAndEqualTo(4.25m, Method(dict[0] += 1));
                AssertIsDecimalAndEqualTo(4.25m, dict[0]);

                AssertIsDecimalAndEqualTo(4.25m, Method(dict[0]++));
                AssertIsDecimalAndEqualTo(5.25m, dict[0]);

                AssertIsDecimalAndEqualTo(6.25m, Method(++dict[0]));
                AssertIsDecimalAndEqualTo(6.25m, dict[0]);
            }

            [Test(ExpectedCount = 24)]
            public static void TestVariableOps()
            {
                decimal i1 = 5;

                i1 /= 2;
                AssertIsDecimalAndEqualTo(2.5m, i1);

                i1 += 2;
                AssertIsDecimalAndEqualTo(4.5m, i1);

                i1++;
                AssertIsDecimalAndEqualTo(5.5m, i1);

                ++i1;
                AssertIsDecimalAndEqualTo(6.5m, i1);

                AssertIsDecimalAndEqualTo(3.25m, Method(i1 /= 2));
                AssertIsDecimalAndEqualTo(3.25m, i1);

                AssertIsDecimalAndEqualTo(4.25m, Method(i1 += 1));
                AssertIsDecimalAndEqualTo(4.25m, i1);

                AssertIsDecimalAndEqualTo(4.25m, Method(i1++));
                AssertIsDecimalAndEqualTo(5.25m, i1);

                AssertIsDecimalAndEqualTo(6.25m, Method(++i1));
                AssertIsDecimalAndEqualTo(6.25m, i1);
            }

            public static decimal Prop1
            {
                get; set;
            }

            public static decimal Method(decimal i)
            {
                return i;
            }

            private Dictionary<int, decimal> dict = new Dictionary<int, decimal>();

            public decimal this[int i]
            {
                get
                {
                    return dict[i];
                }
                set
                {
                    dict[i] = value;
                }
            }

            private static void AssertIsDecimalAndEqualTo(object expected, object actual, string message = null)
            {
                Assert.True(expected is decimal, message);
                Assert.AreStrictEqual(expected.ToString(), actual.ToString(), message);
            }
        }
    }
}