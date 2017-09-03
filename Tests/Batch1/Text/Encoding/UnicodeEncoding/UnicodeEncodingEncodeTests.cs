using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridge.ClientTest.Text
{
    [Category(Constants.MODULE_ENCODING)]
    [TestFixture(TestNameFormat = "UnicodeEncoding - {0}")]
    public class UnicodeEncodingEncodeTests
    {
        public static IEnumerable<object[]> Encode_TestData()
        {
            // All ASCII chars
            for (int i = 0; i <= byte.MaxValue; i++)
            {
                char c = (char)i;
                yield return new object[] { "a" + c + "b", 0, 3, new byte[] { 97, 0, (byte)c, 0, 98, 0 } };
                yield return new object[] { "a" + c + "b", 1, 1, new byte[] { (byte)c, 0 } };
                yield return new object[] { "a" + c + "b", 2, 1, new byte[] { 98, 0 } };
            }

            // Unicode
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x0061, 0x1234, 0x0062 }), 0, 3, new byte[] { 97, 0, 52, 18, 98, 0 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x0061, 0x1234, 0x0062 }), 1, 1, new byte[] { 52, 18 } };

            // Surrogate pairs
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xD800, 0xDC00 }), 0, 2, new byte[] { 0, 216, 0, 220 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x0061, 0xD800, 0xDC00, 0x0062 }), 0, 4, new byte[] { 97, 0, 0, 216, 0, 220, 98, 0 } };

            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xD800, 0xDC00, 0xFFFD, 0xFEB7 }), 0, 4, new byte[] { 0x00, 0xD8, 0x00, 0xDC, 0xFD, 0xFF, 0xB7, 0xFE } };

            // Mixture of ASCII and Unicode
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x0046, 0x006F, 0x006F, 0x0042, 0x0041, 0x0400, 0x0052 }), 0, 7, new byte[] { 70, 0, 111, 0, 111, 0, 66, 0, 65, 0, 0, 4, 82, 0 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x00C0, 0x006E, 0x0069, 0x006D, 0x0061, 0x0300, 0x006C }), 0, 7, new byte[] { 192, 0, 110, 0, 105, 0, 109, 0, 97, 0, 0, 3, 108, 0 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x0054, 0x0065, 0x0073, 0x0074, 0xD803, 0xDD75, 0x0054, 0x0065, 0x0073, 0x0074 }), 0, 10, new byte[] { 84, 0, 101, 0, 115, 0, 116, 0, 3, 216, 117, 221, 84, 0, 101, 0, 115, 0, 116, 0 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xD803, 0xDD75, 0xD803, 0xDD75, 0xD803, 0xDD75 }), 0, 6, new byte[] { 3, 216, 117, 221, 3, 216, 117, 221, 3, 216, 117, 221 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x0130 }), 0, 1, new byte[] { 48, 1 } };

            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x007A, 0x0061, 0x0306, 0x01FD, 0x03B2 }), 0, 5, new byte[] { 122, 0, 97, 0, 6, 3, 253, 1, 178, 3 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x007A, 0x0061, 0x0306, 0x01FD, 0x03B2, 0xD8FF, 0xDCFF }), 0, 7, new byte[] { 122, 0, 97, 0, 6, 3, 253, 1, 178, 3, 255, 216, 255, 220 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x007A, 0x0061, 0x0306, 0x01FD, 0x03B2, 0xD8FF, 0xDCFF }), 4, 3, new byte[] { 178, 3, 255, 216, 255, 220 } };

            // High BMP non-chars
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xFFFD }), 0, 1, new byte[] { 253, 255 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xFFFE }), 0, 1, new byte[] { 254, 255 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xFFFF }), 0, 1, new byte[] { 255, 255 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xFFFF, 0xFFFE }), 0, 2, new byte[] { 0xFF, 0xFF, 0xFE, 0xFF } };

            // Empty strings
            yield return new object[] { string.Empty, 0, 0, new byte[0] };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x0061, 0x1234, 0x0062 }), 3, 0, new byte[0] };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x0061, 0x1234, 0x0062 }), 0, 0, new byte[0] };
        }

        [Test(ExpectedCount = 0)]
        public void Encode()
        {
            foreach (var objectse in UnicodeEncodingEncodeTests.Encode_TestData())
            {
                string source = (string)objectse[0];
                int index = (int)objectse[1]; 
                int count = (int)objectse[2];
                byte[] expectedLittleEndian = (byte[])objectse[3];

                byte[] expectedBigEndian = GetBigEndianBytes(expectedLittleEndian);

                EncodingHelpers.Encode(new UnicodeEncoding(false, true, false), source, index, count, expectedLittleEndian);
                EncodingHelpers.Encode(new UnicodeEncoding(false, false, false), source, index, count, expectedLittleEndian);
                EncodingHelpers.Encode(new UnicodeEncoding(true, true, false), source, index, count, expectedBigEndian);
                EncodingHelpers.Encode(new UnicodeEncoding(true, false, false), source, index, count, expectedBigEndian);

                EncodingHelpers.Encode(new UnicodeEncoding(false, true, true), source, index, count, expectedLittleEndian);
                EncodingHelpers.Encode(new UnicodeEncoding(false, false, true), source, index, count, expectedLittleEndian);
                EncodingHelpers.Encode(new UnicodeEncoding(true, true, true), source, index, count, expectedBigEndian);
                EncodingHelpers.Encode(new UnicodeEncoding(true, false, true), source, index, count, expectedBigEndian);
            }

            
        }

        public static IEnumerable<object[]> Encode_InvalidChars_TestData()
        {
            byte[] unicodeReplacementBytes1 = new byte[] { 253, 255 };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xD800 }), 0, 1, unicodeReplacementBytes1 }; // Lone high surrogate
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xDC00 }), 0, 1, unicodeReplacementBytes1 }; // Lone low surrogate

            // Surrogate pair out of range
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xD800, 0xDC00 }), 0, 1, unicodeReplacementBytes1 };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xD800, 0xDC00 }), 1, 1, unicodeReplacementBytes1 };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xDBFF, 0xDFFF }), 0, 1, unicodeReplacementBytes1 };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xDBFF, 0xDFFF }), 1, 1, unicodeReplacementBytes1 };

            byte[] unicodeReplacementBytes2 = new byte[] { 253, 255, 253, 255 };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xD800, 0xD800 }), 0, 2, unicodeReplacementBytes2 }; // High, high
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xDC00, 0xD800 }), 0, 2, unicodeReplacementBytes2 }; // Low, high
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xDC00, 0xDC00 }), 0, 2, unicodeReplacementBytes2 }; // Low, low

            // Mixture of ASCII, valid Unicode and invalid Unicode
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x0054, 0x0065, 0x0073, 0x0074, 0xD803, 0x0054, 0x0065, 0x0073, 0x0074 }), 0, 9, new byte[] { 84, 0, 101, 0, 115, 0, 116, 0, 253, 255, 84, 0, 101, 0, 115, 0, 116, 0 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x0054, 0x0065, 0x0073, 0x0074, 0xDD75, 0x0054, 0x0065, 0x0073, 0x0074 }), 0, 9, new byte[] { 84, 0, 101, 0, 115, 0, 116, 0, 253, 255, 84, 0, 101, 0, 115, 0, 116, 0 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x0054, 0x0065, 0x0073, 0x0074, 0x0054, 0x0065, 0x0073, 0x0074, 0xDD75 }), 0, 9, new byte[] { 84, 0, 101, 0, 115, 0, 116, 0, 84, 0, 101, 0, 115, 0, 116, 0, 253, 255 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0x0054, 0x0065, 0x0073, 0x0074, 0x0054, 0x0065, 0x0073, 0x0074, 0xD803 }), 0, 9, new byte[] { 84, 0, 101, 0, 115, 0, 116, 0, 84, 0, 101, 0, 115, 0, 116, 0, 253, 255 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xDD75 }), 0, 1, new byte[] { 253, 255 } };
            yield return new object[] { EncodingHelpers.ToString(new int[] { 0xDD75, 0xDD75, 0xD803, 0xDD75, 0xDD75, 0xDD75, 0xDD75, 0xD803, 0xD803, 0xD803, 0xDD75, 0xDD75, 0xDD75, 0xDD75 }), 0, 14, new byte[] { 253, 255, 253, 255, 3, 216, 117, 221, 253, 255, 253, 255, 253, 255, 253, 255, 253, 255, 3, 216, 117, 221, 253, 255, 253, 255, 253, 255 } };
        }

        [Test]
        public void Encode_InvalidChars()
        {
            foreach (var objectse in UnicodeEncodingEncodeTests.Encode_InvalidChars_TestData())
            {
                string source = (string) objectse[0];
                int index = (int) objectse[1];
                int count = (int) objectse[2];
                byte[] expectedLittleEndian = (byte[]) objectse[3];

                byte[] expectedBigEndian = GetBigEndianBytes(expectedLittleEndian);

                EncodingHelpers.Encode(new UnicodeEncoding(false, true, false), source, index, count,
                    expectedLittleEndian);
                EncodingHelpers.Encode(new UnicodeEncoding(false, false, false), source, index, count,
                    expectedLittleEndian);
                EncodingHelpers.Encode(new UnicodeEncoding(true, true, false), source, index, count, expectedBigEndian);
                EncodingHelpers.Encode(new UnicodeEncoding(true, false, false), source, index, count, expectedBigEndian);

                NegativeEncodingTests.Encode_Invalid(new UnicodeEncoding(false, true, true), source, index, count);
                NegativeEncodingTests.Encode_Invalid(new UnicodeEncoding(false, false, true), source, index, count);
                NegativeEncodingTests.Encode_Invalid(new UnicodeEncoding(true, true, true), source, index, count);
                NegativeEncodingTests.Encode_Invalid(new UnicodeEncoding(true, false, true), source, index, count);
            }
        }

        public static byte[] GetBigEndianBytes(byte[] littleEndianBytes)
        {
            byte[] bigEndianBytes = (byte[])littleEndianBytes.Clone();
            for (int i = 0; i < bigEndianBytes.Length; i += 2)
            {
                byte b1 = bigEndianBytes[i];
                byte b2 = bigEndianBytes[i + 1];

                bigEndianBytes[i] = b2;
                bigEndianBytes[i + 1] = b1;
            }
            return bigEndianBytes;
        }
    }
}