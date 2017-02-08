using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1103 - {0}")]
    public class Bridge1103
    {
        [Test]
        public static void TestPropertyOps()
        {
            string res = "";
            if (true)
            {
                decimal scope;
                if (decimal.TryParse("1.0", out scope) && scope == 1)
                {
                    res += "first OK ";
                }
            }

            if (true)
            {
                decimal scope;
                if (decimal.TryParse("2.0", out scope) && scope == 2)
                {
                    res += "second OK ";
                }
            }

            Assert.AreEqual("first OK second OK ", res);
        }
    }
}