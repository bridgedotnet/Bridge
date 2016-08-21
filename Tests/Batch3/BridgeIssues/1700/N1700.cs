using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1700 - {0}")]
    public class Bridge1700
    {
        [Test]
        public void TestULongAsIndex()
        {
            var array = new int[2, 2];
            var n = 1;
            array[n % 1u, n / 1u] = 7;
            n = 4;
            array[n % 3u, n / 4u] = 8;

            Assert.AreEqual(7, array[0, 1]);
            Assert.AreEqual(8, array[1, 1]);
        }

        [Test]
        public void TestLongAsIndex()
        {
            var array = new int[2, 2];
            var n = 1;
            array[n % 1L, n / 1L] = 3;
            n = 4;
            array[n % 3L, n / 4L] = 5;

            Assert.AreEqual(3, array[0, 1]);
            Assert.AreEqual(5, array[1, 1]);
        }
    }
}