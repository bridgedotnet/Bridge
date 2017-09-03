using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridge.ClientTest.Text
{
    [Category(Constants.MODULE_ENCODING)]
    [TestFixture(TestNameFormat = "ASCIIEncoding - {0}")]
    public class ASCIIEncodingEncodeTests
    {
        public static IEnumerable<object[]> Encode_TestData()
        {
            var list = new List<object[]>();
            // All ASCII chars
            for (int i = 0; i <= 0x7F; i++)
            {
                char b = (char)i;
                list.Add(new object[] { b.ToString(), 0, 1 });
                list.Add(new object[] { "a" + b + "c", 1, 1 });
                list.Add(new object[] { "a" + b + "c", 2, 1 });
                list.Add(new object[] { "a" + b + "c", 0, 3 });
            }

            string testString = "Hello World123#?!";
            list.Add(new object[] { testString, 0, testString.Length });
            list.Add(new object[] { testString, 4, 5 });

            list.Add(new object[] { "ABCDEFGH", 0, 8 });

            // Empty strings
            list.Add(new object[] { string.Empty, 0, 0 });
            list.Add(new object[] { "abc", 3, 0 });
            list.Add(new object[] { "abc", 0, 0 });

            return list;
        }

        [Test(ExpectedCount = 0)]
        public void Encode()
        {
            foreach (var objectse in ASCIIEncodingEncodeTests.Encode_TestData())
            {
                string source = objectse[0] as string;
                int index = (int)objectse[1];
                int count = (int)objectse[2];

                byte[] expected = GetBytes(source, index, count);
                EncodingHelpers.Encode(new ASCIIEncoding(), source, index, count, expected);
            }
        }

        public static IEnumerable<object[]> Encode_InvalidChars_TestData()
        {
            var list = new List<object[]>();
            // All non-ASCII Latin1 chars
            for (int i = 0x80; i <= 0xFF; i++)
            {
                char b = (char)i;
                list.Add(new object[] { b.ToString(), 0, 1 });
            }

            // Unicode chars
            list.Add(new object[] { "\u1234\u2345", 0, 2 });
            list.Add(new object[] { "a\u1234\u2345b", 0, 4 });

            list.Add(new object[] { "\uD800\uDC00", 0, 2 });
            list.Add(new object[] { "a\uD800\uDC00b", 0, 2 });

            list.Add(new object[] { "\uD800\uDC00\u0061\u0CFF", 0, 4 });

            // Invalid Unicode
            list.Add(new object[] { "\uD800", 0, 1 }); // Lone high surrogate
            list.Add(new object[] { "\uDC00", 0, 1 }); // Lone low surrogate
            list.Add(new object[] { "\uD800\uDC00", 0, 1 }); // Surrogate pair out of range
            list.Add(new object[] { "\uD800\uDC00", 1, 1 }); // Surrogate pair out of range

            list.Add(new object[] { "\uD800\uD800", 0, 2 }); // High, high
            list.Add(new object[] { "\uDC00\uD800", 0, 2 }); // Low, high
            list.Add(new object[] { "\uDC00\uDC00", 0, 2 }); // Low, low

            list.Add(new object[] { "\u0080\u00FF\u0B71\uFFFF\uD800\uDFFF", 0, 6 });

            // High BMP non-chars
            list.Add(new object[] { "\uFFFD", 0, 1 });
            list.Add(new object[] { "\uFFFE", 0, 1 });
            list.Add(new object[] { "\uFFFF", 0, 1 });

            return list;
        }

        [Test(ExpectedCount = 0)]
        public void Encode_InvalidChars()
        {
            foreach (var objectse in ASCIIEncodingEncodeTests.Encode_InvalidChars_TestData())
            {
                string source = objectse[0] as string;
                int index = (int)objectse[1];
                int count = (int)objectse[2];

                byte[] expected = GetBytes(source, index, count);
                EncodingHelpers.Encode(new ASCIIEncoding(), source, index, count, expected);
            }
        }

        private static byte[] GetBytes(string source, int index, int count)
        {
            byte[] bytes = new byte[count];
            for (int i = 0; i < bytes.Length; i++)
            {
                if (source[i] <= 0x7f)
                {
                    bytes[i] = (byte)source[i + index];
                }
                else
                {
                    // Verify the fallback character for non-ASCII chars
                    bytes[i] = (byte)'?';
                }
            }
            return bytes;
        }
    }
}