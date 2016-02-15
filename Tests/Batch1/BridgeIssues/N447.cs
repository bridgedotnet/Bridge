using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#447]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#447 - {0}")]
    public class Bridge447
    {
        public const int Five = 5;
        public const string Another = "Another";
        public const decimal Ten = 10m;

        [InlineConst]
        public const int InlineFifteen = 15;
        [InlineConst]
        public const string InlineSome = "Some";
        [InlineConst]
        public const decimal InlineHalf = 0.5m;

        [Test(ExpectedCount = 3)]
        public static void CheckInlineExpression()
        {
            Assert.AreEqual("AnotherSome", Another + InlineSome, "AnotherSome");
            Assert.AreEqual(20, Five + InlineFifteen, "20");
            Assert.AreEqual(10.5m, Ten + InlineHalf, "10.5m");
        }

        [Test(ExpectedCount = 3)]
        public static void CheckInlineCalls()
        {
            Assert.AreEqual("AnotherSome", GetSum(Another, InlineSome), "AnotherSome");
            Assert.AreEqual(20, GetSum(Five, InlineFifteen), "20");
            Assert.AreEqual(10.5m, GetSum(Ten, InlineHalf), "10.5m");
        }

        private static int GetSum(int a, int b)
        {
            return a + b;
        }

        private static string GetSum(string a, string b)
        {
            return a + b;
        }

        private static decimal GetSum(decimal a, decimal b)
        {
            return a + b;
        }
    }
}
