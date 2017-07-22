using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridge.ClientTest.Text
{
    [Category(Constants.MODULE_ENCODING)]
    [TestFixture(TestNameFormat = "UTF7Encoding - {0}")]
    public class UTF7EncodingEncodeTests
    {
        public static IEnumerable<object[]> Encode_Basic_TestData()
        {
            // ASCII
            yield return new object[] { "\t\n\rXYZabc123", 0, 12, new byte[] { 9, 10, 13, 88, 89, 90, 97, 98, 99, 49, 50, 51 } };
            yield return new object[] { "A\t\r\n /z", 0, 7, new byte[] { 0x41, 0x09, 0x0D, 0x0A, 0x20, 0x2F, 0x7A } };
            yield return new object[] { "", 0, 1, new byte[] { 0x2B, 0x41, 0x41, 0x77, 0x2D } };

            string chars2 = "UTF7 Encoding Example";
            yield return new object[] { chars2, 1, 2, new byte[] { 84, 70 } };

            // Unicode
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x0E59, 0x05D1 }), 0, 2, new byte[] { 0x2B, 0x44, 0x6C, 0x6B, 0x46, 0x30, 0x51, 0x2D } };

            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x212B }), 0, 1, new byte[] { 0x2B, 0x49, 0x53, 0x73, 0x2D } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x03A0, 0x03A3 }), 0, 2, new byte[] { 43, 65, 54, 65, 68, 111, 119, 45 } };

            // Surrogate pairs
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xD800, 0xDC00 }), 0, 2, new byte[] { 43, 50, 65, 68, 99, 65, 65, 45 } };
            yield return new object[] { "a" + EncodingHelpers.ToString(new int[] { 0xD800, 0xDC00 }) + "b", 0, 4, new byte[] { 97, 43, 50, 65, 68, 99, 65, 65, 45, 98 } };

            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xD800, 0xDFFF }), 0, 2, new byte[] { 0x2B, 0x32, 0x41, 0x44, 0x66, 0x2F, 0x77, 0x2D } };

            // Plus and minus
            yield return new object[] { "+", 0, 1, new byte[] { 43, 45 } };
            yield return new object[] { "-", 0, 1, new byte[] { 0x2D } };
            yield return new object[] { "+-", 0, 2, new byte[] { 0x2B, 0x2D, 0x2D } };

            // Empty strings
            yield return new object[] { string.Empty, 0, 0, new byte[0] };
            yield return new object[] { "abc", 3, 0, new byte[0] };
            yield return new object[] { "abc", 0, 0, new byte[0] };

            // Invalid Unicode
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xD800 }), 0, 1, new byte[] { 43, 50, 65, 65, 45 } }; // Lone high surrogate
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xDC00 }), 0, 1, new byte[] { 43, 51, 65, 65, 45 } }; // Lone low surrogate
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xDFFF }), 0, 1, new byte[] { 0x2B, 0x33, 0x2F, 0x38, 0x2D } }; // Lone low surrogate
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xD800, 0xDC00 }), 0, 1, new byte[] { 43, 50, 65, 65, 45 } }; // Surrogate pair out of range
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xD800, 0xDC00 }), 1, 1, new byte[] { 43, 51, 65, 65, 45 } }; // Surrogate pair out of range

            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xD800, 0xD800 }), 0, 2, new byte[] { 43, 50, 65, 68, 89, 65, 65, 45 } }; // High, high
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xDC00, 0xD800 }), 0, 2, new byte[] { 43, 51, 65, 68, 89, 65, 65, 45 } }; // Low, high
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xDC00, 0xDC00 }), 0, 2, new byte[] { 43, 51, 65, 68, 99, 65, 65, 45 } }; // Low, low

            // High BMP non-chars
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xFFFD }), 0, 1, new byte[] { 43, 47, 47, 48, 45 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xFFFE }), 0, 1, new byte[] { 43, 47, 47, 52, 45 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xFFFF }), 0, 1, new byte[] { 43, 47, 47, 56, 45 } };

        }

        [Test(ExpectedCount = 0)]
        public void Encode()
        {
            foreach (var objectse in UTF7EncodingEncodeTests.Encode_Basic_TestData())
            {
                string source = (string) objectse[0];
                int index = (int) objectse[1];
                int count = (int)objectse[2];
                byte[] expected = (byte[])objectse[3];

                EncodingHelpers.Encode(new UTF7Encoding(true), source, index, count, expected);
                EncodingHelpers.Encode(new UTF7Encoding(false), source, index, count, expected);
            }
        }

        public static IEnumerable<object[]> Encode_Advanced_TestData()
        {
            string optionalChars1 = "!\"#$%&*;<=>@[]^_`{|}";
            byte[] optionalFalseBytes = new byte[]
            {
                43, 65, 67, 69, 65, 73, 103, 65,
                106, 65, 67, 81, 65, 74, 81, 65,
                109, 65, 67, 111, 65, 79, 119, 65,
                56, 65, 68, 48, 65, 80, 103, 66, 65,
                65, 70, 115, 65, 88, 81, 66, 101, 65,
                70, 56, 65, 89, 65, 66, 55, 65,
                72, 119, 65, 102, 81, 45
            };
            byte[] optionalTrueBytes = new byte[]
            {
                33, 34, 35, 36, 37, 38, 42, 59, 60, 61, 62,
                64, 91, 93, 94, 95, 96, 123, 124, 125
            };

            yield return new object[] { false, optionalChars1, 0, optionalChars1.Length, optionalFalseBytes };
            yield return new object[] { true, optionalChars1, 0, optionalChars1.Length, optionalTrueBytes };

            yield return new object[] { false, EncodingHelpers.ToString(new int[] { 0x0023, 0x0025, 0x03A0, 0x03A3 }), 1, 2, new byte[] { 43, 65, 67, 85, 68, 111, 65, 45 } };
            yield return new object[] { true, EncodingHelpers.ToString(new int[] { 0x0023, 0x0025, 0x03A0, 0x03A3 }), 1, 2, new byte[] { 37, 43, 65, 54, 65, 45 } };

            yield return new object[] { false, "!}", 0, 2, new byte[] { 0x2B, 0x41, 0x43, 0x45, 0x41, 0x66, 0x51, 0x2D } };
            yield return new object[] { false, "!}", 1, 1, new byte[] { 0x2B, 0x41, 0x48, 0x30, 0x2D } };

            yield return new object[] { false, EncodingHelpers.ToString(new int[] { 0x0041, 0x0021, 0x007D, 0x0009, 0x0E59, 0x05D1 }), 0, 6, new byte[] { 0x41, 0x2B, 0x41, 0x43, 0x45, 0x41, 0x66, 0x51, 0x2D, 0x09, 0x2B, 0x44, 0x6C, 0x6B, 0x46, 0x30, 0x51, 0x2D } };
        }

        [Test(ExpectedCount = 0)]
        public void EncodeAdvanced()
        {
            foreach (var objectse in UTF7EncodingEncodeTests.Encode_Advanced_TestData())
            {
                bool allowOptionals = (bool) objectse[0];
                string source = (string)objectse[1];
                int index = (int)objectse[2];
                int count = (int)objectse[3];
                byte[] expected = (byte[])objectse[4];

                EncodingHelpers.Encode(new UTF7Encoding(allowOptionals), source, index, count, expected);
            }
        }
    }
}