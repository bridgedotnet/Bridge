using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2916 - {0}")]
    public class Bridge2916
    {
        public struct MyStruct
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

        private static void Test(List<MyStruct> values)
        {
            for (int i = 0; i < values.Count; i++)
                values[i].Intersect(new MyStruct(5, 20));
        }

        [Test]
        public static void TestIndexerClone()
        {
            var x = new List<MyStruct>(new[] { new MyStruct(1, 10) });
            Assert.AreEqual("1-10", x[0].ToString());
            Test(x);
            Assert.AreEqual("1-10", x[0].ToString());
        }
    }
}