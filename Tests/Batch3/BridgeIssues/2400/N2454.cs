using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2454 - {0}")]
    public class Bridge2454
    {
        private struct MyStruct
        {
            public MyStruct(int x1, int x2)
            {
                X1 = x1;
                X2 = x2;
            }
            public int X1 { get; private set; }
            public int X2 { get; private set; }

            public void Intersect(MyStruct other)
            {
                var x1 = Math.Max(X1, other.X1);
                var x2 = Math.Min(X2, other.X2);
                X1 = x1;
                X2 = x2;
            }

            public override string ToString()
            {
                return X1 + "-" + X2;
            }
        }

        private static void Test(IEnumerable<MyStruct> values)
        {
            foreach (var value in values)
            {
                value.Intersect(new MyStruct(5, 20));
                Assert.AreEqual("5-10", value.ToString());
            }
        }

        [Test]
        public static void TestForEachClone()
        {
            var x = new[] { new MyStruct(1, 10) };
            Assert.AreEqual("1-10", x[0].ToString());
            Bridge2454.Test(x);
            Assert.AreEqual("1-10", x[0].ToString());
        }
    }
}