using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2067 - {0}")]
    public class Bridge2067
    {
        [Test]
        public static void TestGetGenericTypeDefinition()
        {
            Assert.Throws<InvalidOperationException>(() =>
            {
                var t = typeof (int).GetGenericTypeDefinition();
            });
        }
    }
}