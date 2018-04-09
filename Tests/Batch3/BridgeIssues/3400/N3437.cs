using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether DateTime arithmetic
    /// correctly accounts time zone shifting.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3437 - {0}")]
    public class Bridge3437
    {
        /// <summary>
        /// Test if time zone is considered by checking whether
        /// now - UTC now == -TZ
        /// </summary>
        [Test]
        public static void TestDateTimeMathTZ()
        {
            // to ensure there will not be a minute/hour/day shift between the
            // two queries, we'll first get now and utc now from the same
            // variable
            var now = DateTime.Now;
            var utcNow = now.ToUniversalTime();
            var dtDiff = DateTime.Now - DateTime.UtcNow;

            // If now and utcNow are equal, then we are at UTC == GMT, so
            // there's no sense in having this test run at all.
            if (now.Day == utcNow.Day && now.Hour == utcNow.Hour && now.Minute == utcNow.Minute)
            {
                Assert.True(true, "Host's time zone is in UTC, so there's no way on testing this.");
            }
            else
            {
                Assert.AreNotEqual("00:00:00", dtDiff.ToString(), "DateTime difference between now and UTC now is non-zero.");
            }
        }
    }
}