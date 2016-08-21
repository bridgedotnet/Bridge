using Bridge.Test;

using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1472 - {0}")]
    public class Bridge1472
    {
        static bool time = true;

        public static int[] GetArray()
        {
            return (time = !time) ? new[] { 1, 2, 3, 4 } : new[] { 1, 2, 3 };
        }

        [Test]
        public void TestMultiplyThisInTemplate()
        {
            int[] v = new int[4];
            Bridge1472.GetArray().CopyTo(v, 0);
            Assert.AreEqual(0, v[3]);
        }

        [Test]
        public void TestSimpleMultipleKeyTemplate()
        {
            string[] sa = { "Hello", "There" };
            string[] sa2 = new string[2];
            sa.CopyTo(sa2, 0);
            Assert.AreEqual(sa.Length, sa2.Length);
            Assert.AreEqual(sa[0], sa2[0]);
            Assert.AreEqual(sa[1], sa2[1]);

            int[] ia1;
            int[] dst;
            ia1 = new int[] { 1, 2, 3, 4 };
            dst = new int[4];
            ia1.CopyTo(dst, 0);
            Assert.AreEqual(ia1.Length, dst.Length);
            Assert.AreEqual(ia1[0], dst[0]);
            Assert.AreEqual(ia1[3], dst[3]);
        }
    }
}