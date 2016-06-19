using Bridge.Test;


namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#554]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#554 - {0}")]
    public class Bridge554
    {
        [Test(ExpectedCount = 4)]
        public static void TestUseCase()
        {
            var s = "0123456789";

            Assert.AreEqual("01234", s.Remove(5), "Remove(5)");
            Assert.AreEqual("012345678", s.Remove(9), "Remove(9)");
            Assert.AreEqual("03456789", s.Remove(1, 2), "Remove(1, 2)");
            Assert.AreEqual("0", s.Remove(1, 9), "Remove(1, 9)");
        }
    }
}
