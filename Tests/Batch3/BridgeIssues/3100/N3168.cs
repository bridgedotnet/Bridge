using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3168 - {0}")]
    public class Bridge3168
    {
        [Test]
        public void TestToLocalTime()
        {
            DateTime now1 = new DateTime(2017, 6, 8, 12, 59, 0);
            now1 = now1.AddMinutes(-1);
            now1 = now1.ToLocalTime();

            Assert.AreEqual(2017, now1.Year);
            Assert.AreEqual(6, now1.Month);
            Assert.AreEqual(8, now1.Day);

            DateTime now2 = new DateTime(2017, 6, 8, 12, 59, 0);
            now2 = now2.ToLocalTime();
            now2 = now2.AddMinutes(-1);

            Assert.AreEqual(2017, now2.Year);
            Assert.AreEqual(6, now2.Month);
            Assert.AreEqual(8, now2.Day);
        }
    }
}