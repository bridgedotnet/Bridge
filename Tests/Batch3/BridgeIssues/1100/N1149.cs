using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1149 - {0}")]
    public class Bridge1149
    {
        [Test]
        public static void TestBitwiseOrAnd()
        {
            bar_str = "";
            var foo = true;
            foo = foo | Bar();
            foo |= Bar();

            Assert.AreEqual("barbar", bar_str);
        }

        private static string bar_str;

        public static bool Bar()
        {
            bar_str += "bar";
            return false;
        }
    }
}