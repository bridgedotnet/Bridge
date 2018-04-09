using System;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether TimeSpan can be checked
    /// against null when it actually is null.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3352 - {0}")]
    public class Bridge3352
    {
        /// <summary>
        /// Check both whether when result is null, conditions can be evaluated
        /// for both equals and different than null.
        /// </summary>
        [Test]
        public static void TestTimeSpanEqualsNull()
        {
            TimeSpan? result = null;

            Assert.True(result == null, "Null TimeSpan? can be evaluated about being null and results in true.");
            Assert.False(result != null, "Null TimeSpan? can be evaluated about not being null and results in false.");
        }
    }
}