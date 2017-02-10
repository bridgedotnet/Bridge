using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1144 - {0}")]
    public class Bridge1144
    {
        [Test]
        public static void TestStringFormat()
        {
            decimal z = -1.122m;
            Assert.AreEqual("-1.12", z.ToString("##.##"));
            Assert.AreEqual("-1.12", z.ToString("##.00"));
            Assert.AreEqual("-01.12", z.ToString("00.##"));

            decimal x = 0m;
            Assert.AreEqual("0", x.ToString("#0"));
            Assert.AreEqual("", x.ToString("##"));
            Assert.AreEqual("", x.ToString("##.##"));
            Assert.AreEqual(".0", x.ToString("##.0#"));
            Assert.AreEqual(".00", x.ToString("##.#0"));
            Assert.AreEqual(".00", x.ToString("##.00"));

            decimal y = 0.2m;
            Assert.AreEqual("", y.ToString("##"));
            Assert.AreEqual(".2", y.ToString("##.##"));
            Assert.AreEqual(".2", y.ToString("##.0#"));
            Assert.AreEqual(".20", y.ToString("##.#0"));
            Assert.AreEqual(".20", y.ToString("##.00"));

            decimal d = 2m;
            Assert.AreEqual("2", d.ToString("."));
            Assert.AreEqual("2", d.ToString(".#"));
            Assert.AreEqual("2", d.ToString(".##"));
            Assert.AreEqual("%200", d.ToString("%.##"));
        }
    }
}