using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#580]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#580 - {0}")]
    public class Bridge580
    {
        [Test(ExpectedCount = 10)]
        public static void TestUseCase()
        {
            string[] arrs = new string[] { "s1", "s2" };

            int intIndex;

            string[] dst = new string[2];
            intIndex = 0;
            arrs.CopyTo(dst, intIndex);

            Assert.AreEqual(2, dst.Length, "Bridge580 Length Int");
            Assert.AreEqual(arrs[0], dst[0], "Bridge580 0 Int");
            Assert.AreEqual(arrs[1], dst[1], "Bridge580 1 Int");

            dst = new string[3];
            intIndex = 1;
            arrs.CopyTo(dst, intIndex);

            Assert.AreEqual(3, dst.Length, "Bridge580 Length 3 Int");
            Assert.AreEqual(arrs[1], dst[2], "Bridge580 1_1 Int");

            long longIndex;

            dst = new string[2];
            longIndex = 0;
            arrs.CopyTo(dst, longIndex);

            Assert.AreEqual(2, dst.Length, "Bridge580 Length Long");
            Assert.AreEqual(arrs[0], dst[0], "Bridge580 0 Long");
            Assert.AreEqual(arrs[1], dst[1], "Bridge580 1 Long");

            dst = new string[3];
            longIndex = 1;
            arrs.CopyTo(dst, longIndex);

            Assert.AreEqual(3, dst.Length, "Bridge580 Length 1 Long");
            Assert.AreEqual(arrs[1], dst[2], "Bridge580 1_1 Long");
        }
    }
}