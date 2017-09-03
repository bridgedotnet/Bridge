using Bridge.Test.NUnit;
using System;
using System.Text;

namespace Bridge.ClientTest.Text
{
    public static partial class NegativeEncodingTests
    {
        public static void Encode_Invalid(Encoding encoding, string chars, int index, int count)
        {
            char[] charsArray = chars.ToCharArray();
            byte[] bytes = new byte[encoding.GetMaxByteCount(count)];

            if (index == 0 && count == chars.Length)
            {
                Assert.Throws<Exception>(() => encoding.GetByteCount(chars));
                Assert.Throws<Exception>(() => encoding.GetByteCount(charsArray));

                Assert.Throws<Exception>(() => encoding.GetBytes(chars));
                Assert.Throws<Exception>(() => encoding.GetBytes(charsArray));
            }

            Assert.Throws<Exception>(() => encoding.GetByteCount(charsArray, index, count));

            Assert.Throws<Exception>(() => encoding.GetBytes(charsArray, index, count));

            Assert.Throws<Exception>(() => encoding.GetBytes(chars, index, count, bytes, 0));
            Assert.Throws<Exception>(() => encoding.GetBytes(charsArray, index, count, bytes, 0));
        }

        public static void Decode_Invalid(Encoding encoding, byte[] bytes, int index, int count)
        {
            char[] chars = new char[encoding.GetMaxCharCount(count)];

            if (index == 0 && count == bytes.Length)
            {
                Assert.Throws<Exception>(() => encoding.GetCharCount(bytes));

                Assert.Throws<Exception>(() => encoding.GetChars(bytes));
                Assert.Throws<Exception>(() => encoding.GetString(bytes));
            }

            Assert.Throws<Exception>(() => encoding.GetCharCount(bytes, index, count));

            Assert.Throws<Exception>(() => encoding.GetChars(bytes, index, count));
            Assert.Throws<Exception>(() => encoding.GetString(bytes, index, count));

            Assert.Throws<Exception>(() => encoding.GetChars(bytes, index, count, chars, 0));
        }
    }
}