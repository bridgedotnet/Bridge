using System;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether Bridge's TryParse
    /// implementation does not touch the output variable if the parsing fails.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3346 - {0}")]
    public class Bridge3346
    {
        enum TestEnum
        {
            One = 0
        }

        enum TestOtherEnum
        {
            Two = 2,
            One = 1
        }

        /// <summary>
        /// Check if whenever parsing fails, the target variable won't be
        /// changed.
        /// </summary>
        [Test]
        public static void TestEnumTryParseFail()
        {
            TestEnum i;
            var result = Enum.TryParse("FF", out i);

            Assert.False(result, "TryParse() 'FF' into an enum returned 'false'.");
            Assert.AreEqual(TestEnum.One, i, "Failed TryParse() call initialized value with enum's 0 (\"One\").");

            TestOtherEnum j;
            var result_j = Enum.TryParse("FF", out j);

            Assert.False(result_j, "TryParse() 'FF' into another enum returned 'false'.");
            Assert.AreEqual(0, j, "Failed TryParse() call initialized value with enum's 0 (no match in enum).");
        }
    }
}