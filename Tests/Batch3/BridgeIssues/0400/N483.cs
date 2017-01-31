using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#483 - {0}")]
    public class Bridge483
    {
        [Test]
        public void TestPropertyWithNameSameAsType()
        {
            var t = new Test() { MyType = new MyType() { Value = 7 } };

            Assert.AreEqual(7, t.MyOtherType.Value);
        }
    }

    internal class MyType : MyOtherType
    {
    }

    internal class MyOtherType
    {
        public int Value;
    }

    internal class Test
    {
        public MyType MyType;

        public MyOtherType MyOtherType
        {
            get
            {
                return MyType.As<MyOtherType>();
            }
        }
    }
}