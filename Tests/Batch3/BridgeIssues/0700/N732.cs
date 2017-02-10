using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#732]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "# 732- {0}")]
    public class Bridge732
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            var decimalValue = 5m;
            bool assign = false;
            decimal test = assign ? decimalValue : 2;
            var test2 = test * decimalValue;

            Assert.True(test2 == 10, "Bridge732");
        }
    }
}