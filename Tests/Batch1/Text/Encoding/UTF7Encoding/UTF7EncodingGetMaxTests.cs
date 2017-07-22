using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridge.ClientTest.Text
{
    [Category(Constants.MODULE_ENCODING)]
    [TestFixture(TestNameFormat = "UTF7Encoding - {0}")]
    public class UTF7EncodingGetMaxTests
    {
        [Test]
        public void GetMaxByteCount()
        {
            var data = new int[] {0, 1, 8, 10, 715827881, (int.MaxValue - 2) / 3 };
            foreach (var charCount in data)
            {
                int expected = charCount * 3 + 2;
                Assert.AreEqual(expected, new UTF7Encoding(true).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UTF7Encoding(false).GetMaxByteCount(charCount));
            }
        }

        [Test]
        public void GetMaxCharCount()
        {
            var data = new int[] {0, 1, 10, int.MaxValue };
            foreach (var byteCount in data)
            {
                int expected = Math.Max(byteCount, 1);
                Assert.AreEqual(expected, new UTF7Encoding(true).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UTF7Encoding(false).GetMaxCharCount(byteCount));
            }
        }
    }
}