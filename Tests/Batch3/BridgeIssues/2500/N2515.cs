using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2515 - {0}")]
    public class Bridge2515
    {
        private int DoSomething()
        {
            return 1;
        }

        [Test]
        public static void TestPreprocessorConditionalAccess()
        {
            var p = new Bridge2515();
            int? i = null;
#if true
            i = p?.DoSomething();
#endif
            Assert.True(i.HasValue);
            Assert.AreEqual(1, i.Value);
        }
    }
}