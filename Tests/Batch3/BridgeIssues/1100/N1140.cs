using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1140 - {0}")]
    public class Bridge1140
    {
        [Test]
        public static void TestDefaultNullable()
        {
            var d = default(double?);
            var m = default(decimal?);
            var l = default(long?);
            var c = default(char?);

            Assert.AreEqual(null, d, "double?");
            Assert.AreEqual(null, m, "decimal?");
            Assert.AreEqual(null, l, "long?");
            Assert.AreEqual(null, c, "char?");
        }
    }
}