using System;
using System.Linq;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2190 - {0}")]
    public class Bridge2190
    {
        [Test]
        public static void TestInternalsVisibleTo()
        {
            Assert.AreEqual("Hi", Bridge.ClientTestHelper.N2190.Greeting());
        }
    }
}
