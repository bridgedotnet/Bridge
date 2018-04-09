using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking DateTime.Add() returns the expected
    /// values when negative.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3441 - {0}")]
    public class Bridge3441
    {
        /// <summary>
        /// Test subtracting from today time and "today plus a shift", adding
        /// seconds, minutes and hours, and checking whether the output is the
        /// expected.
        /// </summary>
        [Test]
        public static void TestNegativeTimeSpanValueToString()
        {
            var val1 = (DateTime.Today - DateTime.Today.AddSeconds(7)).ToString();
            var val2 = (DateTime.Today - DateTime.Today.AddSeconds(70)).ToString();
            var val3 = (DateTime.Today - DateTime.Today.AddMinutes(7)).ToString();
            var val4 = (DateTime.Today - DateTime.Today.AddMinutes(70)).ToString();
            var val5 = (DateTime.Today - DateTime.Today.AddHours(7)).ToString();
            var val6 = (DateTime.Today - DateTime.Today.AddHours(70)).ToString();
            var val7 = (DateTime.Today - DateTime.Today.AddHours(700)).ToString();
            var val8 = (DateTime.Today - DateTime.Today.AddHours(7000)).ToString();

            Assert.AreEqual("-00:00:07", val1, "-7 seconds results in '-00:00:07'.");
            Assert.AreEqual("-00:01:10", val2, "-70 seconds results in '-00:01:10'.");
            Assert.AreEqual("-00:07:00", val3, "-7 minutes results in '-00:07:00'.");
            Assert.AreEqual("-01:10:00", val4, "-70 minutes results in '-01:10:00'.");
            Assert.AreEqual("-07:00:00", val5, "-7 hours results in '-07:00:00'.");
            Assert.AreEqual("-2.22:00:00", val6, "-70 hours results in '-2.22:00:00'.");
            Assert.AreEqual("-29.04:00:00", val7, "-700 hours results in '-29.04:00:00'.");
            Assert.AreEqual("-291.16:00:00", val8, "-7000 hours results in '-291.16:00:00'.");
        }
    }
}