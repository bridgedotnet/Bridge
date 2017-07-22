using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridge.ClientTest.Text
{
    [Category(Constants.MODULE_ENCODING)]
    [TestFixture(TestNameFormat = "UnicodeEncoding - {0}")]
    public class UnicodeEncodingGetMaxTests
    {
        [Test]
        public void GetMaxByteCount()
        {
            var data = new int[] {0, 1, int.MaxValue / 2 - 1 };
            foreach (var charCount in data)
            {
                int expected = (charCount + 1) * 2;
                Assert.AreEqual(expected, new UnicodeEncoding(false, true, false).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UnicodeEncoding(false, false, false).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UnicodeEncoding(true, true, false).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UnicodeEncoding(true, false, false).GetMaxByteCount(charCount));

                Assert.AreEqual(expected, new UnicodeEncoding(false, true, true).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UnicodeEncoding(false, false, true).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UnicodeEncoding(true, true, true).GetMaxByteCount(charCount));
                Assert.AreEqual(expected, new UnicodeEncoding(true, false, true).GetMaxByteCount(charCount));
            }
        }

        [Test]
        public void GetMaxCharCount()
        {
            var data = new Dictionary<int, int>
            {
                {0, 1}, {1, 2}, {10, 6}, {int.MaxValue, 1073741825}
            };
            foreach (var pair in data)
            {
                var byteCount = pair.Key;
                var expected = pair.Value;

                Assert.AreEqual(expected, new UnicodeEncoding(false, true, false).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UnicodeEncoding(false, false, false).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UnicodeEncoding(true, true, false).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UnicodeEncoding(true, false, false).GetMaxCharCount(byteCount));

                Assert.AreEqual(expected, new UnicodeEncoding(false, true, true).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UnicodeEncoding(false, false, true).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UnicodeEncoding(true, true, true).GetMaxCharCount(byteCount));
                Assert.AreEqual(expected, new UnicodeEncoding(true, false, true).GetMaxCharCount(byteCount));
            }
        }
    }
}