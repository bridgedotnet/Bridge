using System;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3346 - {0}")]
    public class Bridge3346
    {
        enum TestEnum
        {
            One = 0
        }

        [Test]
        public static void TestEnumTryParseFail()
        {
            TestEnum i;
            var result = Enum.TryParse("FF", out i);

            Assert.False(result);
            Assert.AreEqual(TestEnum.One, i);
        }
    }
}