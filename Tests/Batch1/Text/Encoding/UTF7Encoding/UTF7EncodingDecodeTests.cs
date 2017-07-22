using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridge.ClientTest.Text
{
    [Category(Constants.MODULE_ENCODING)]
    [TestFixture(TestNameFormat = "UTF7Encoding - {0}")]
    public class UTF7EncodingDecodeTests
    {
        public static IEnumerable<object[]> Decode_TestData()
        {
            // All ASCII chars
            for (int i = 0; i <= byte.MaxValue; i++)
            {
                char c = (char)i;
                if (c == 43)
                {
                    continue;
                }
                yield return new object[] { new byte[] { (byte)c }, 0, 1, c.ToString() };
                yield return new object[] { new byte[] { 97, (byte)c, 98 }, 1, 1, c.ToString() };
                yield return new object[] { new byte[] { 97, (byte)c, 98 }, 2, 1, "b" };
                yield return new object[] { new byte[] { 97, (byte)c, 98 }, 0, 3, "a" + c.ToString() + "b" };
            }

            // Plus
            yield return new object[] { new byte[] { (byte)'+' }, 0, 1, string.Empty };
            yield return new object[] { new byte[] { 43, 45 }, 0, 2, "+" };
            yield return new object[] { new byte[] { 43, 45, 65 }, 0, 3, "+A" };
            yield return new object[] { new byte[] { 0x2B, 0x2D, 0x2D }, 0, 3, "+-" };

            // UTF7 code points can be represented in different sequences of bytes
            yield return new object[] { new byte[] { 0x41, 0x09, 0x0D, 0x0A, 0x20, 0x2F, 0x7A }, 0, 7, "A\t\r\n /z" };

            yield return new object[] { new byte[] { 0x2B, 0x41, 0x45, 0x45, 0x41, 0x43, 0x51 }, 0, 7, "A\t" };
            yield return new object[] { new byte[] { 0x2B, 0x09 }, 0, 2, "\t" };
            yield return new object[] { new byte[] { 0x2B, 0x09, 0x2D }, 0, 3, "\t-" };

            yield return new object[] { new byte[] { 0x2B, 0x1E, 0x2D }, 0, 3, EncodingHelpers.ToString(new int[] {0x001E}) + "-" };
            yield return new object[] { new byte[] { 0x2B, 0x7F, 0x1E, 0x2D }, 0, 4, EncodingHelpers.ToString(new int[] { 0x007F, 0x001E }) + "-" };
            yield return new object[] { new byte[] { 0x1E }, 0, 1, EncodingHelpers.ToString(new int[] { 0x001E }) };

            yield return new object[] { new byte[] { 0x21 }, 0, 1, "!" };
            yield return new object[] { new byte[] { 0x2B, 0x21, 0x2D }, 0, 3, "!-" };
            yield return new object[] { new byte[] { 0x2B, 0x21, 0x41, 0x41, 0x2D }, 0, 5, "!AA-" };

            yield return new object[] { new byte[] { 0x2B, 0x80, 0x81, 0x82, 0x2D }, 0, 5, EncodingHelpers.ToString(new int[] { 0x0080, 0x0081, 0x0082 }) + "-" };
            yield return new object[] { new byte[] { 0x2B, 0x80, 0x81, 0x82, 0x2D }, 0, 4, EncodingHelpers.ToString(new int[] { 0x0080, 0x0081, 0x0082 }) };
            yield return new object[] { new byte[] { 0x80, 0x81 }, 0, 2, EncodingHelpers.ToString(new int[] { 0x0080, 0x0081 }) };
            yield return new object[] { new byte[] { 0x2B, 0x80, 0x21, 0x80, 0x21, 0x1E, 0x2D }, 0, 7, EncodingHelpers.ToString(new int[] { 0x0080 }) + "!" + EncodingHelpers.ToString(new int[] { 0x0080 }) + "!-" };

            // Exclamation mark
            yield return new object[] { new byte[] { 0x2B, 0x41, 0x43, 0x45, 0x41, 0x66, 0x51 }, 0, 7, "!}" };
            yield return new object[] { new byte[] { 0x2B, 0x41, 0x43, 0x45, 0x41, 0x66, 0x51, 0x2D }, 0, 8, "!}" };
            yield return new object[] { new byte[] { 0x21, 0x7D }, 0, 2, "!}" };
            yield return new object[] { new byte[] { 0x2B, 0x41, 0x43, 0x45, 0x41, 0x66, 0x51, 0x2D }, 1, 2, "AC" };

            yield return new object[] { new byte[] { 0x2B, 0x41, 0x43, 0x45, 0x2D }, 0, 5, "!" };
            yield return new object[] { new byte[] { 0x2B, 0x41, 0x43, 0x45, 0x2D }, 0, 2, string.Empty };
            yield return new object[] { new byte[] { 0x2B, 0x41, 0x43, 0x45, 0x2D }, 0, 3, string.Empty };

            yield return new object[] { new byte[] { 0x2B, 0x41, 0x43, 0x48, 0x2D }, 0, 5, "!" };

            // Unicode
            yield return new object[] { new byte[] { 0x2B, 0x44, 0x6C, 0x6B, 0x46, 0x30, 0x51, 0x2D }, 0, 8, EncodingHelpers.ToString(new int[] { 0x0E59, 0x05D1 }) };
            yield return new object[] { new byte[] { 0x2B, 0x44, 0x6C, 0x6B, 0x46, 0x30, 0x51 }, 0, 7, EncodingHelpers.ToString(new int[] { 0x0E59, 0x05D1 }) };

            yield return new object[] { new byte[] { 0x41, 0x2B, 0x41, 0x43, 0x45, 0x41, 0x66, 0x51, 0x2D, 0x09, 0x2B, 0x44, 0x6C, 0x6B, 0x46, 0x30, 0x51 }, 0, 17, EncodingHelpers.ToString(new int[] { 0x0041, 0x0021, 0x007D, 0x009, 0x0E59, 0x05D1})};
            yield return new object[] { new byte[] { 0x41, 0x2B, 0x41, 0x43, 0x45, 0x41, 0x66, 0x51, 0x2D, 0x09, 0x2B, 0x44, 0x6C, 0x6B, 0x46, 0x30, 0x51, 0x2D }, 0, 18, EncodingHelpers.ToString(new int[] { 0x0041, 0x0021, 0x007D, 0x0009, 0x0E59, 0x05D1 }) };

            yield return new object[] { new byte[] { 0x41, 0x21, 0x7D, 0x09, 0x2B, 0x44, 0x6C, 0x6B, 0x46, 0x30, 0x51, 0x2D }, 0, 12, EncodingHelpers.ToString(new int[] { 0x0041, 0x0021, 0x007D, 0x0009, 0x0E59, 0x05D1 }) };
            yield return new object[] { new byte[] { 0x41, 0x21, 0x7D, 0x09, 0x2B, 0x44, 0x6C, 0x6B, 0x46, 0x30, 0x51 }, 0, 11, EncodingHelpers.ToString(new int[] { 0x0041, 0x0021, 0x007D, 0x0009, 0x0E59, 0x05D1 }) };

            //TODO: this test case is failed, need to fix it
            //yield return new object[] { new byte[] { 0x2B, 0x2B, 0x41, 0x41, 0x2D }, 0, 5, EncodingHelpers.ToString(new int[] { 0xF800 }) };
            yield return new object[] { new byte[] { 0x2B, 0x41, 0x43, 0x48, 0x35, 0x41, 0x41, 0x2D }, 0, 8, EncodingHelpers.ToString(new int[] { 0x0021, 0xF900 }) };
            yield return new object[] { new byte[] { 0x2B, 0x41, 0x43, 0x48, 0x35, 0x41, 0x41, 0x2D }, 0, 4, "!" };

            // Surrogate pairs
            yield return new object[] { new byte[] { 0x2B, 0x32, 0x41, 0x44, 0x66, 0x2F, 0x77, 0x2D }, 0, 8, EncodingHelpers.ToString(new int[] { 0xD800, 0xDFFF }) };

            // Invalid Unicode
            yield return new object[] { new byte[] { 43, 50, 65, 65, 45 }, 0, 5, EncodingHelpers.ToString(new int[] { 0xD800 }) }; // Lone high surrogate
            yield return new object[] { new byte[] { 43, 51, 65, 65, 45 }, 0, 5, EncodingHelpers.ToString(new int[] { 0xDC00 }) }; // Lone low surrogate
            yield return new object[] { new byte[] { 0x2B, 0x33, 0x2F, 0x38, 0x2D }, 0, 5, EncodingHelpers.ToString(new int[] { 0xDFFF }) }; // Lone low surrogate

            yield return new object[] { new byte[] { 43, 50, 65, 68, 89, 65, 65, 45 }, 0, 8, EncodingHelpers.ToString(new int[] { 0xD800, 0xD800 }) }; // High, high
            yield return new object[] { new byte[] { 43, 51, 65, 68, 89, 65, 65, 45 }, 0, 8, EncodingHelpers.ToString(new int[] { 0xDC00, 0xD800 }) }; // Low, high
            yield return new object[] { new byte[] { 43, 51, 65, 68, 99, 65, 65, 45 }, 0, 8, EncodingHelpers.ToString(new int[] { 0xDC00, 0xDC00 }) }; // Low, low

            // High BMP non-chars
            yield return new object[] { new byte[] { 43, 47, 47, 48, 45 }, 0, 5, EncodingHelpers.ToString(new int[] { 0xFFFD }) };
            yield return new object[] { new byte[] { 43, 47, 47, 52, 45 }, 0, 5, EncodingHelpers.ToString(new int[] { 0xFFFE }) };
            yield return new object[] { new byte[] { 43, 47, 47, 56, 45 }, 0, 5, EncodingHelpers.ToString(new int[] { 0xFFFF }) };

            // Empty strings
            yield return new object[] { new byte[0], 0, 0, string.Empty };
            yield return new object[] { new byte[10], 0, 0, string.Empty };
            yield return new object[] { new byte[10], 10, 0, string.Empty };
        }

        [Test(ExpectedCount = 0)]
        public void Decode()
        {
            foreach (var objectse in UTF7EncodingDecodeTests.Decode_TestData())
            {
                byte[] bytes = objectse[0] as byte[];
                int index = (int) objectse[1];
                int count = (int) objectse[2];
                string expected = objectse[3] as string;

                EncodingHelpers.Decode(new UTF7Encoding(true), bytes, index, count, expected);
                EncodingHelpers.Decode(new UTF7Encoding(false), bytes, index, count, expected);
            }
        }

        
    }
}