using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridge.ClientTest.Text
{
    [Category(Constants.MODULE_ENCODING)]
    [TestFixture(TestNameFormat = "UTF8Encoding - {0}")]
    public class UTF8EncodingGetMaxTests
    {
        [Test]
        public void GetMaxByteCount()
        {
            var data = new int[] {0, 1, 10, 715827881, int.MaxValue / 3 - 1 };
            foreach (var charCount in data)
            {
                int expected = (charCount + 1) * 3;
                Assert.AreEqual(expected, new UTF8Encoding(true, true).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UTF8Encoding(true, false).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UTF8Encoding(false, true).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UTF8Encoding(false, false).GetMaxByteCount(charCount));
            }
        }

        [Test]
        public void GetMaxCharCount()
        {
            var data = new int[] {0, 1, 10, int.MaxValue - 1 };
            foreach (var byteCount in data)
            {
                int expected = byteCount + 1;
                Assert.AreEqual(expected, new UTF8Encoding(true, true).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UTF8Encoding(true, false).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UTF8Encoding(false, true).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UTF8Encoding(false, false).GetMaxCharCount(byteCount));
            }
        }
    }
}