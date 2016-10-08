using System;
using Bridge.Test;

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

    class MyType : MyOtherType
    {
    }

    class MyOtherType
    {
        public int Value;
    }

    class Test
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