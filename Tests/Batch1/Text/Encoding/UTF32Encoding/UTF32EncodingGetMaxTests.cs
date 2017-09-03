using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridge.ClientTest.Text
{
    [Category(Constants.MODULE_ENCODING)]
    [TestFixture(TestNameFormat = "UTF32Encoding - {0}")]
    public class UTF32EncodingGetMaxTests
    {
        [Test]
        public void GetMaxByteCount()
        {
            var data = new int[] {0, 1, 2, 4, 10, 268435455, int.MaxValue / 4 - 1 };
            foreach (var charCount in data)
            {
                int expected = (charCount + 1) * 4;
                Assert.AreEqual(expected, new UTF32Encoding(true, false, false).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UTF32Encoding(true, true, false).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UTF32Encoding(true, false, true).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UTF32Encoding(true, true, true).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UTF32Encoding(false, true, true).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UTF32Encoding(false, true, false).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UTF32Encoding(false, false, true).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UTF32Encoding(false, false, false).GetMaxByteCount(charCount));
            }
        }

        [Test]
        public void GetMaxCharCount()
        {
            var data = new Dictionary<int, int>
            {
                {0, 2}, {1, 2}, {2, 3}, {3, 3}, {4, 4}, {5, 4}, {6, 5}, {7, 5}, {8, 6}, {9, 6}, {10, 7},
                {11, 7}, {12, 8}, {13, 8}, {14, 9}, {int.MaxValue, 1073741825}
            };
            foreach (var pair in data)
            {
                var byteCount = pair.Key;
                var expected = pair.Value;
                Assert.AreEqual(expected, new UTF32Encoding(true, false, false).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UTF32Encoding(true, true, false).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UTF32Encoding(true, false, true).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UTF32Encoding(true, true, true).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UTF32Encoding(false, true, true).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UTF32Encoding(false, true, false).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UTF32Encoding(false, false, true).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UTF32Encoding(false, false, false).GetMaxCharCount(byteCount));
            }
        }
    }
}