using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2322 - {0}")]
    public class Bridge2322
    {
        public struct MyStruct
        {
            public double Value;
            public MyStruct(double value)
            {
                Value = value;
            }

            public static MyStruct Add(MyStruct a, MyStruct b)
            {
                a.Value += b.Value;
                return a;
            }

            public static MyStruct operator +(MyStruct a, MyStruct b)
            {
                a.Value += b.Value;
                return a;
            }
        }

        [Test]
        public static void TestSequence()
        {
            MyStruct x1 = new MyStruct(1.0);
            MyStruct x2 = MyStruct.Add(x1, new MyStruct(2.0));
            Assert.AreEqual(1, x1.Value);
            Assert.AreEqual(3, x2.Value);

            MyStruct y1 = new MyStruct(1.0);
            MyStruct y2 = y1 + new MyStruct(2.0);
            Assert.AreEqual(1, y1.Value);
            Assert.AreEqual(3, y2.Value);
        }
    }
}