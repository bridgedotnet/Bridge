using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2046 - {0}")]
    public class Bridge2046
    {
        [Test]
        public static void TestCase()
        {
            var dt = DateTime.Now;
            var ndt = (DateTime?)dt;
            var s1 = ndt?.ToString("yyyy-MM-dd HH:mm:ss");
            var s2 = ((DateTime?)dt)?.ToString("yyyy-MM-dd HH:mm:ss");

            Assert.AreEqual(s1, s2);
        }
    }
}