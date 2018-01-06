using System;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here consists in checking whether nullable variables do
    /// support the "is" check and results the same as .NET does.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3323 - {0}")]
    public class Bridge3323
    {
        /// <summary>
        /// Do the tests against a int nullable variable.
        /// </summary>
        [Test]
        public static void TestIsForNullable()
        {
            int? val = null;
            Assert.False(val is int, "Null nullable int is not int.");
            Assert.False(val is int?, "Null nullable int is not 'int?'.");

            val = 1;
            Assert.True(val is int, "Nullable int with value is int.");
            Assert.True(val is int?, "Nullable int with value is 'int?'.");
        }
    }
}