using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2225 - {0}")]
    public class Bridge2225
    {
        private class VolatileTest
        {
            public volatile int i;

            public void Test(int _i)
            {
                i = _i;
            }
        }

        [Test]
        public static void TestVolatile()
        {
            var c = new VolatileTest();
            c.Test(5);
            Assert.AreEqual(5, c.i);
        }
    }
}