using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1343 - {0}")]
    public class Bridge1343
    {
        [Test]
        public static void TestDoubleTemplate()
        {
            var s1 = string.Format("{0} {1}", 1, 2);
            var s2 = string.Format("{0} {1}", 1, 2).GetHashCode();

            Assert.AreEqual(s1.GetHashCode(), s2);
        }

        [Test]
        public static void TestInlineInGetHashCode()
        {
            var s1 = new M().GetHashCode();
            var s2 = new M().GetHashCode();

            Assert.AreEqual(s1, s2);
        }

        private class M
        {
            public override int GetHashCode()
            {
                return string.Format("{0} {1}", 1, 2).GetHashCode();
            }
        }
    }
}