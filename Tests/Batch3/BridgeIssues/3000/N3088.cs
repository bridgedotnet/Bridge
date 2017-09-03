using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3088 - {0}")]
    public class Bridge3088
    {
        public class Base
        {
            public virtual int x
            {
                get
                {
                    return 1;
                }
            }

        }
        public class A : Base
        {
            public override int x
            {
                get
                {
                    return base.x + 1;
                }
            }
        }

        [Test(ExpectedCount = 2)]
        public static void TestBaseProperty()
        {
            for (var i = 0; i < 2; i++)
            {
                var a = new A();
                Assert.AreEqual(2, a.x);
            }
        }
    }
}