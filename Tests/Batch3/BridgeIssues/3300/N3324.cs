using System;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in forcing a situation where GetType() should
    /// throw a null reference exception and ensure the exception is
    /// effectively thrown.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3324 - {0}")]
    public class Bridge3324
    {
        /// <summary>
        /// Calls GetType() from a null-valued nullable variable.
        /// </summary>
        [Test]
        public static void TestGetTypeForNull()
        {
            float? v = null;
            Assert.Throws<NullReferenceException>(
                () => { var name = v.GetType().FullName; },
                "Exception thrown for null-valued variable's GetType() call."
            );
        }
    }
}