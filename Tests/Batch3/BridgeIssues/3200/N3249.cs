using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This test consists in checking whether TimeSpan() supports checking if
    /// it equals to different types of input.
    /// True, false, null, and objects used to make this fail.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3249 - {0}")]
    public class Bridge3249
    {
        /// <summary>
        /// Checks a TimeSpan instance's Equal() method against different
        /// types of values.
        /// </summary>
        [Test]
        public static void TestTimeSpanEquals()
        {
            // Calling 'new TimeSpan()' directly in the call or setting a
            // single common instance does not affect the issue at all.
            var ts = new TimeSpan();
            Assert.False(ts.Equals(true), "TimeSpan not equal to 'true' constant");
            Assert.False(ts.Equals(false), "TimeSpan not equal to 'false' constant");
            Assert.False(ts.Equals(null), "TimeSpan not equal to null");
            Assert.False(ts.Equals(3.2), "TimeSpan not equal to double constant");

            // Non-anonymous objects should follow the rule here and no
            // additional checks will be made.
            Assert.False(ts.Equals(new { Value = 0 }), "TimeSpan not equal to anonymous object");

            // Try with explicitly typed nullable variables
            int? nint = 0;
            int? nint2 = null;
            Assert.False(ts.Equals(nint), "TimeSpan not equal to nullable int with value");
            Assert.False(ts.Equals(nint2), "TimeSpan not equal to nullable int without value (null)");
        }
    }
}