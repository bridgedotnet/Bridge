using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#968]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#968 - {0}")]
    public class Bridge968
    {
        [Test(ExpectedCount = 1)]
        public static void TestDecimalDoesNotParseIncorrectValue()
        {
            decimal d;
            var b = decimal.TryParse("123e", out d);

            Assert.False(b);
        }

        [Test(ExpectedCount = 3)]
        public static void TestDecimalParsesCorrectValues()
        {
            decimal d1 = decimal.Parse("123e1");
            Assert.AreEqual(123e1m, d1, "123e1");

            decimal d2 = decimal.Parse("123e+1");
            Assert.AreEqual(123e+1m, d2, "123e+1");

            decimal d3 = decimal.Parse("123e-1");
            Assert.AreEqual(123e-1m, d3, "123e-1");
        }
    }
}