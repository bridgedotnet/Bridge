using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2505 - {0}")]
    public class Bridge2505
    {
        private static long MakeArgb(byte alpha, byte red, byte green, byte blue)
        {
            return (long)(((ulong)((((red << 0x10) | (green << 8)) | blue) | (alpha << 0x18))) & 0xffffffffL);
        }

        [Test]
        public static void TestNegativeNumberToULong()
        {
            Assert.AreEqual("4281808695", MakeArgb(255, 55, 55, 55).ToString());
        }
    }
}