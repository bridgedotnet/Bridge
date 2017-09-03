using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridge.ClientTest.Text
{
    [Category(Constants.MODULE_ENCODING)]
    [TestFixture(TestNameFormat = "ASCIIEncoding - {0}")]
    public class ASCIIEncodingGetMaxTests
    {
        [Test]
        public void GetMaxByteCount()
        {
            var data = new int[] {0, 1, int.MaxValue - 1 };
            foreach (var charCount in data)
            {
                Assert.AreEqual(charCount + 1, new ASCIIEncoding().GetMaxByteCount(charCount));
            }
        }

        [Test]
        public void GetMaxCharCount()
        {
            var data = new int[] { 0, 1, int.MaxValue };
            foreach (var byteCount in data)
            {
                Assert.AreEqual(byteCount, new ASCIIEncoding().GetMaxCharCount(byteCount));
            }
        }
    }
}