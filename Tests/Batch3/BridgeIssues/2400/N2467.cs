using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2467 - {0}")]
    public class Bridge2467
    {
        public struct MyStruct
        {
            public static MyStruct Example { get; } = new MyStruct(123);

            public MyStruct(int value)
            {
                Value = value;
            }
            public int Value { get; }
        }

        [Test]
        public static void TestPropertyInitializerInStruct()
        {
            Assert.AreEqual(123, MyStruct.Example.Value);
        }
    }
}