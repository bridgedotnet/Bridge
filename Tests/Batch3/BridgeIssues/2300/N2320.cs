using System;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2320 - {0}")]
    public class Bridge2320
    {
        private static bool invoked;

        [Ready]
        public static void Main()
        {
            Bridge2320.invoked = true;
        }

        [Test]
        public static void TestReadyAndMain()
        {
            Assert.True(Bridge2320.invoked);
        }
    }
}