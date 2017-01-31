using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#1020]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1029 - {0}")]
    public class Bridge1029
    {
        [Test(ExpectedCount = 6)]
        public static void TestNullableMethods()
        {
            int? a = 1;
            int? b = 1;
            Assert.True(a.Equals(b));
            Assert.AreEqual("1", a.ToString());
            Assert.AreEqual(1, a.GetHashCode());
            a = null;
            Assert.False(a.Equals(b));
            Assert.AreEqual("", a.ToString());
            Assert.AreEqual(0, a.GetHashCode());
        }
    }
}