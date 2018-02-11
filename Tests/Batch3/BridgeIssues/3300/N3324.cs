using System;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3324 - {0}")]
    public class Bridge3324
    {
        [Test]
        public static void TestGetTypeForNull()
        {
            float? v = null;
            Assert.Throws<NullReferenceException>(() => { var name = v.GetType().FullName; });
        }
    }
}