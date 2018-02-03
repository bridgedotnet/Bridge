using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in ensuring that a new datetime instance,
    /// provided an UtcNow datetime + 1 minute, is exactly equal to the
    /// original datetime+1 minute.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3306 - {0}")]
    public class Bridge3306
    {
        /// <summary>
        /// Checks whether the datetime values between addMinutes result
        /// and the new instance with its ticks and kind are equal.
        /// </summary>
        [Test]
        public static void TestDateTimeConsistency()
        {
            var dt = DateTime.UtcNow;
            var dt2 = dt.AddMinutes(1);
            var dt3 = new DateTime(dt2.Ticks, dt2.Kind);

            Assert.AreEqual(dt2, dt3, "New instance of a same UtcNow date is equal to its base.");
        }
    }
}