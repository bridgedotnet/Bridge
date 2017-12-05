using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether System.DateTime tests works
    /// with current date and max/min values.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3293 - {0}")]
    public class Bridge3293
    {
        /// <summary>
        /// Tests the comparison variations between datetime values.
        /// </summary>
        [Test]
        public static void TestDateTimeComparisons()
        {
            var minTim = DateTime.MinValue;
            var now = DateTime.Now;
            var maxTim = DateTime.MaxValue;

            Assert.True(now > minTim, "Now is greater than minTime.");
            Assert.False(now < minTim, "Now is not greater than minimum time.");

            Assert.True(now < maxTim, "Now is smaller than maxTime.");
            Assert.False(now > maxTim, "Now is not smaller than maxTime.");

            Assert.True(now >= minTim, "Now is greater than or equal minTime.");
            Assert.False(now <= minTim, "Now is not greater than or equal minimum time.");

            Assert.True(now <= maxTim, "Now is smaller than or equal maxTime.");
            Assert.False(now >= maxTim, "Now is not smaller than or equal maxTime.");

            Assert.True(now != minTim, "Now is different than minimum time.");
            Assert.False(now == minTim, "Now is not equal to minimum time.");
            Assert.True(now != maxTim, "Now is different than maximum time.");
            Assert.False(now == maxTim, "Now is not equal to maximum time.");
        }
    }
}