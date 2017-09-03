using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridge.ClientTest.Text
{
    [Category(Constants.MODULE_ENCODING)]
    [TestFixture(TestNameFormat = "UTF32Encoding - {0}")]
    public class UTF32EncodingEncodeTests
    {
        public static IEnumerable<object[]> Encode_TestData()
        {
            var list = new List<object[]>(); 
            // All ASCII chars
            for (char c = char.MinValue; c <= 0xFF; c++)
            {
                list.Add(new object[] { c.ToString(), 0, 1, new byte[] { (byte)c, 0, 0, 0 } });
                list.Add(new object[] { "a" + c.ToString() + "b", 1, 1, new byte[] { (byte)c, 0, 0, 0 } });
                list.Add(new object[] { "a" + c.ToString() + "b", 2, 1, new byte[] { 98, 0, 0, 0 } });
                list.Add(new object[] { "a" + c.ToString() + "b", 0, 3, new byte[] { 97, 0, 0, 0, (byte)c, 0, 0, 0, 98, 0, 0, 0 } });
            }

            // Surrogate pairs
            list.Add(new object[] { EncodingHelpers.ToString(new []{0xD800, 0xDC00}), 0, 2, new byte[] { 0, 0, 1, 0 } });
            list.Add(new object[] { "a" + EncodingHelpers.ToString(new[] { 0xD800, 0xDC00 }) + "b", 0, 4, new byte[] { 97, 0, 0, 0, 0, 0, 1, 0, 98, 0, 0, 0 } });

            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0xD800, 0xDFFF }), 0, 2, new byte[] { 0xFF, 0x03, 0x01, 0x00 } });
            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0xDBFF, 0xDC00 }), 0, 2, new byte[] { 0x00, 0xFC, 0x10, 0x00 } });
            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0xDBFF, 0xDFFF }), 0, 2, new byte[] { 0xFF, 0xFF, 0x10, 0x00 } });

            // Mixture of ASCII and Unciode
            list.Add(new object[] { "FooBA" + EncodingHelpers.ToString(new[] { 0x0400}) + "R", 0, 7, new byte[] { 70, 0, 0, 0, 111, 0, 0, 0, 111, 0, 0, 0, 66, 0, 0, 0, 65, 0, 0, 0, 0, 4, 0, 0, 82, 0, 0, 0 } });

            // High BMP non-chars: U+FFFF, U+FFFE, U+FFFD
            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0xFFFD }), 0, 1, new byte[] { 253, 255, 0, 0 } });
            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0xFFFE }), 0, 1, new byte[] { 254, 255, 0, 0 } });
            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0xFFFF }), 0, 1, new byte[] { 255, 255, 0, 0 } });
            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0xFFFF, 0xFFFE, 0xFFFD }), 0, 3, new byte[] { 0xFF, 0xFF, 0x00, 0x00, 0xFE, 0xFF, 0x00, 0x00, 0xFD, 0xFF, 0x00, 0x00 } });

            // Empty strings
            list.Add(new object[] { "abc", 3, 0, new byte[0] });
            list.Add(new object[] { "abc", 0, 0, new byte[0] });
            list.Add(new object[] { string.Empty, 0, 0, new byte[0] });

            return list;
        }

        [Test(ExpectedCount = 0)]
        public void Encode()
        {
            foreach (var objectse in UTF32EncodingEncodeTests.Encode_TestData())
            {
                string chars = objectse[0] as string;
                int index = (int)objectse[1];
                int count = (int)objectse[2];
                byte[] littleEndianExpected = objectse[3] as byte[];

                byte[] bigEndianExpected = GetBigEndianBytes(littleEndianExpected);

                EncodingHelpers.Encode(new UTF32Encoding(true, true, false), chars, index, count, bigEndianExpected);
                EncodingHelpers.Encode(new UTF32Encoding(true, false, false), chars, index, count, bigEndianExpected);
                EncodingHelpers.Encode(new UTF32Encoding(false, true, false), chars, index, count, littleEndianExpected);
                EncodingHelpers.Encode(new UTF32Encoding(false, false, false), chars, index, count, littleEndianExpected);

                EncodingHelpers.Encode(new UTF32Encoding(true, true, true), chars, index, count, bigEndianExpected);
                EncodingHelpers.Encode(new UTF32Encoding(true, false, true), chars, index, count, bigEndianExpected);
                EncodingHelpers.Encode(new UTF32Encoding(false, true, true), chars, index, count, littleEndianExpected);
                EncodingHelpers.Encode(new UTF32Encoding(false, false, true), chars, index, count, littleEndianExpected);
            }
        }

        public static IEnumerable<object[]> Encode_InvalidChars_TestData()
        {
            var list = new List<object[]>();

            byte[] unicodeReplacementBytes1 = new byte[] { 253, 255, 0, 0 };
            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0xD800 }), 0, 1, unicodeReplacementBytes1 }); // Lone high surrogate
            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0xDD75 }), 0, 1, unicodeReplacementBytes1 }); // Lone high surrogate
            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0xDC00 }), 0, 1, unicodeReplacementBytes1 }); // Lone low surrogate
            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0xD800, 0xDC00 }), 0, 1, unicodeReplacementBytes1 }); // Surrogate pair out of range
            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0xD800, 0xDC00 }), 1, 1, unicodeReplacementBytes1 }); // Surrogate pair out of range

            byte[] unicodeReplacementBytes2 = new byte[] { 253, 255, 0, 0, 253, 255, 0, 0 };
            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0xD800, 0xD800 }), 0, 2, unicodeReplacementBytes2 }); // High, high
            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0xDC00, 0xD800 }), 0, 2, unicodeReplacementBytes2 }); // Low, high
            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0xDC00, 0xDC00 }), 0, 2, unicodeReplacementBytes2 }); // Low, low

            // Invalid first/second in surrogate pair
            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0xD800, 0x0041 }), 0, 2, new byte[] { 0xFD, 0xFF, 0x00, 0x00, 0x41, 0x00, 0x00, 0x00 } });
            list.Add(new object[] { EncodingHelpers.ToString(new[] { 0x0065, 0xDC00 }), 0, 2, new byte[] { 0x65, 0x00, 0x00, 0x00, 0xFD, 0xFF, 0x00, 0x00 } });

            return list;
        }

        [Test]
        public void Encode_InvalidChars()
        {
            foreach (var objectse in UTF32EncodingEncodeTests.Encode_InvalidChars_TestData())
            {
                string chars = objectse[0] as string;
                int index = (int)objectse[1];
                int count = (int)objectse[2];
                byte[] littleEndianExpected = objectse[3] as byte[];

                byte[] bigEndianExpected = GetBigEndianBytes(littleEndianExpected);

                EncodingHelpers.Encode(new UTF32Encoding(true, true, false), chars, index, count, bigEndianExpected);
                EncodingHelpers.Encode(new UTF32Encoding(true, false, false), chars, index, count, bigEndianExpected);
                EncodingHelpers.Encode(new UTF32Encoding(false, true, false), chars, index, count, littleEndianExpected);
                EncodingHelpers.Encode(new UTF32Encoding(false, false, false), chars, index, count, littleEndianExpected);

                NegativeEncodingTests.Encode_Invalid(new UTF32Encoding(true, true, true), chars, index, count);
                NegativeEncodingTests.Encode_Invalid(new UTF32Encoding(true, false, true), chars, index, count);
                NegativeEncodingTests.Encode_Invalid(new UTF32Encoding(false, true, true), chars, index, count);
                NegativeEncodingTests.Encode_Invalid(new UTF32Encoding(false, false, true), chars, index, count);
            }
        }

        public static byte[] GetBigEndianBytes(byte[] littleEndianBytes)
        {
            byte[] bigEndianBytes = (byte[])littleEndianBytes.Clone();
            for (int i = 0; i < littleEndianBytes.Length; i += 4)
            {
                byte b1 = bigEndianBytes[i];
                byte b2 = bigEndianBytes[i + 1];
                byte b3 = bigEndianBytes[i + 2];
                byte b4 = bigEndianBytes[i + 3];

                bigEndianBytes[i] = b4;
                bigEndianBytes[i + 1] = b3;
                bigEndianBytes[i + 2] = b2;
                bigEndianBytes[i + 3] = b1;
            }
            return bigEndianBytes;
        }
    }
}