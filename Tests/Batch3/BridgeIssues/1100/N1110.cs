using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1110 - {0}")]
    public class Bridge1110
    {
        [Test]
        public static void TestOverflowForConditionInParenthesized()
        {
            long v = 1;
            v = (v > 1 ? 1 : 0);
            var res = v == 1;
            Assert.False(res);
        }

        [Test]
        public static void TestOverflowForIndexer()
        {
            uint[] data = new uint[] { 1 };
            long v = data[0];
            v = (v > 1 ? 1 : 0);
            var res = v == 1;
            Assert.False(res);
        }

        [Test]
        public static void TestOverflowForBitwise()
        {
            uint v2 = 0xFFFFFFFF;
            uint shifted = v2 << 31;
            var res2 = shifted == 0x80000000;
            Assert.True(res2);

            checked
            {
                uint v3 = 0xFFFFFFFF;
                uint shifted3 = v3 << 31;
                var res3 = shifted == 0x80000000;
                Assert.True(res3);
            }
        }
    }
}