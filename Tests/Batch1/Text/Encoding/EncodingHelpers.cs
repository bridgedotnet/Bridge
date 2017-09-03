using Bridge.Test.NUnit;
using System;
using System.Text;

namespace Bridge.ClientTest.Text
{
    public class EncodingHelpers
    {
        public static string ToString(int[] codes)
        {
            string s = "";
            foreach (var code in codes)
            {
                s += ((char) code).ToString();
            }

            return s;
        }

        [Unbox(true)]
        public static void AreEqual(object o1, object o2, string message = null)
        {
            if (o1 != o2)
            {
                Assert.AreEqual(o1, o2, message);
            }
        }

        public static void Encode(Encoding encoding, string chars, int index, int count, byte[] expected)
        {
            GetByteCount(encoding, chars, index, count, expected.Length);
            GetBytes(encoding, chars, index, count, expected);
        }

        private static void GetByteCount(Encoding encoding, string chars, int index, int count, int expected)
        {
            char[] charArray = chars.ToCharArray();
            if (index == 0 && count == chars.Length)
            {
                // Use GetByteCount(string) or GetByteCount(char[])
                EncodingHelpers.AreEqual(expected, encoding.GetByteCount(chars));
                EncodingHelpers.AreEqual(expected, encoding.GetByteCount(charArray));
            }

            // Use GetByteCount(char[], int, int)
            EncodingHelpers.AreEqual(expected, encoding.GetByteCount(charArray, index, count));
        }

        private static void GetBytes(Encoding encoding, string source, int index, int count, byte[] expectedBytes)
        {
            byte[] fullArray = new byte[expectedBytes.Length + 4];
            for (int i = 0; i < fullArray.Length; i++)
            {
                fullArray[i] = (byte)i;
            }

            VerifyGetBytes(encoding, source, index, count, new byte[expectedBytes.Length], 0, expectedBytes);
            VerifyGetBytes(encoding, source, index, count, fullArray, 2, expectedBytes);

            if (count == 0)
            {
                // If count == 0, GetBytes should not throw even though byteIndex is invalid
                VerifyGetBytes(encoding, source, index, count, new byte[10], 10, expectedBytes);
            }
        }

        private static void VerifyGetBytes(Encoding encoding, string source, int index, int count, byte[] bytes, int byteIndex, byte[] expectedBytes)
        {
            byte[] originalBytes = (byte[])bytes.Clone();

            if (index == 0 && count == source.Length)
            {
                // Use GetBytes(string)
                byte[] stringResultBasic = encoding.GetBytes(source);
                VerifyGetBytes(stringResultBasic, 0, stringResultBasic.Length, originalBytes, expectedBytes);

                // Use GetBytes(char[])
                byte[] charArrayResultBasic = encoding.GetBytes(source.ToCharArray());
                VerifyGetBytes(charArrayResultBasic, 0, charArrayResultBasic.Length, originalBytes, expectedBytes);
            }

            // Use GetBytes(char[], int, int)
            byte[] charArrayResultAdvanced = encoding.GetBytes(source.ToCharArray(), index, count);
            VerifyGetBytes(charArrayResultAdvanced, 0, charArrayResultAdvanced.Length, originalBytes, expectedBytes);

            // Use GetBytes(string, int, int, byte[], int)
            byte[] stringBytes = (byte[])bytes.Clone();
            int stringByteCount = encoding.GetBytes(source, index, count, stringBytes, byteIndex);
            VerifyGetBytes(stringBytes, byteIndex, stringByteCount, originalBytes, expectedBytes);
            EncodingHelpers.AreEqual(expectedBytes.Length, stringByteCount);

            // Use GetBytes(char[], int, int, byte[], int)
            byte[] charArrayBytes = (byte[])bytes.Clone();
            int charArrayByteCount = encoding.GetBytes(source.ToCharArray(), index, count, charArrayBytes, byteIndex);
            VerifyGetBytes(charArrayBytes, byteIndex, charArrayByteCount, originalBytes, expectedBytes);
            EncodingHelpers.AreEqual(expectedBytes.Length, charArrayByteCount);
        }

        private static void VerifyGetBytes(byte[] bytes, int byteIndex, int byteCount, byte[] originalBytes, byte[] expectedBytes)
        {
            for (int i = 0; i < byteIndex; i++)
            {
                if (originalBytes[i] != bytes[i])
                {
                    Assert.Fail($"EncodingHelpers.VerifyGetBytes - {originalBytes[i]} != {bytes[i]}");
                }
            }
            for (int i = byteIndex; i < byteIndex + byteCount; i++)
            {
                if (expectedBytes[i - byteIndex] != bytes[i])
                {
                    Assert.Fail($"EncodingHelpers.VerifyGetBytes - {expectedBytes[i - byteIndex]} != {bytes[i]}");
                }
            }
            for (int i = byteIndex + byteCount; i < bytes.Length; i++)
            {
                // Bytes outside the range should be ignored
                if (originalBytes[i] != bytes[i])
                {
                    Assert.Fail($"EncodingHelpers.VerifyGetBytes - {originalBytes[i]} != {bytes[i]}");
                }
            }

            //Assert.True(true, "VerifyGetBytes passed");
        }

        public static void Decode(Encoding encoding, byte[] bytes, int index, int count, string expected)
        {
            GetCharCount(encoding, bytes, index, count, expected.Length);
            GetChars(encoding, bytes, index, count, expected.ToCharArray());
            GetString(encoding, bytes, index, count, expected);
        }

        private static void GetCharCount(Encoding encoding, byte[] bytes, int index, int count, int expected)
        {
            if (index == 0 && count == bytes.Length)
            {
                // Use GetCharCount(byte[])
                EncodingHelpers.AreEqual(expected, encoding.GetCharCount(bytes));
            }
            // Use GetCharCount(byte[], int, int)
            EncodingHelpers.AreEqual(expected, encoding.GetCharCount(bytes, index, count));
        }

        private static void GetChars(Encoding encoding, byte[] bytes, int index, int count, char[]
         expectedChars)
        {
            char[] fullArray = new char[expectedChars.Length + 4];
            for (int i = 0; i < fullArray.Length; i++)
            {
                fullArray[i] = (char)i;
            }

            VerifyGetChars(encoding, bytes, index, count, new char[expectedChars.Length], 0, expectedChars);
            VerifyGetChars(encoding, bytes, index, count, fullArray, 2, expectedChars);

            if (count == 0)
            {
                // If count == 0, GetChars should not throw even though charIndex is invalid
                VerifyGetChars(encoding, bytes, index, count, new char[10], 10, expectedChars);
            }
        }

        private static void VerifyGetChars(Encoding encoding, byte[] bytes, int byteIndex, int byteCount, char[] chars, int charIndex, char[] expectedChars)
        {
            char[] originalChars = (char[])chars.Clone();

            // Use GetChars(byte[])
            if (byteIndex == 0 && byteCount == bytes.Length)
            {
                char[] resultBasic = encoding.GetChars(bytes);
                VerifyGetChars(resultBasic, 0, resultBasic.Length, originalChars, expectedChars);
            }

            // Use GetChars(byte[], int, int)
            char[] resultAdvanced = encoding.GetChars(bytes, byteIndex, byteCount);
            VerifyGetChars(resultAdvanced, 0, resultAdvanced.Length, originalChars, expectedChars);

            // Use GetChars(byte[], int, int, char[], int)
            char[] byteChars = (char[])chars.Clone();
            int charCount = encoding.GetChars(bytes, byteIndex, byteCount, byteChars, charIndex);
            VerifyGetChars(byteChars, charIndex, charCount, originalChars, expectedChars);
            EncodingHelpers.AreEqual(expectedChars.Length, charCount);
        }

        private static void VerifyGetChars(char[] chars, int charIndex, int charCount, char[] originalChars, char[] expectedChars)
        {
            for (int i = 0; i < charIndex; i++)
            {
                // Chars outside the range should be ignored
                if (originalChars[i] != chars[i])
                {
                    Assert.Fail($"EncodingHelpers.VerifyGetChars - {originalChars[i]} != {chars[i]}");
                }
            }
            for (int i = charIndex; i < charIndex + charCount; i++)
            {
                if (expectedChars[i - charIndex] != chars[i])
                {
                    Assert.Fail($"EncodingHelpers.VerifyGetChars - {expectedChars[i - charIndex]} != {chars[i]}");
                }
            }
            for (int i = charIndex + charCount; i < chars.Length; i++)
            {
                // Chars outside the range should be ignored
                if (originalChars[i] != chars[i])
                {
                    Assert.Fail($"EncodingHelpers.VerifyGetChars - {originalChars[i]} != {chars[i]}");
                }
            }
            //Assert.True(true, "VerifyGetChars passed");
        }

        private static void GetString(Encoding encoding, byte[] bytes, int index, int count, string expected)
        {
            if (index == 0 && count == bytes.Length)
            {
                // Use GetString(byte[])
                EncodingHelpers.AreEqual(expected, encoding.GetString(bytes));
            }
            // Use GetString(byte[], int, int)
            EncodingHelpers.AreEqual(expected, encoding.GetString(bytes, index, count));
        }
    }
}