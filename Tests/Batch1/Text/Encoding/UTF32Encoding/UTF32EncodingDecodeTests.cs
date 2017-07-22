using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridge.ClientTest.Text
{
    [Category(Constants.MODULE_ENCODING)]
    [TestFixture(TestNameFormat = "UTF32Encoding - {0}")]
    public class UTF32EncodingDecodeTests
    {
        public static IEnumerable<object[]> Decode_TestData()
        {
            var list = new List<object[]>();
            // All ASCII chars
            for (char c = char.MinValue; c <= 0xFF; c++)
            {
                list.Add(new object[] { new byte[] { (byte)c, 0, 0, 0 }, 0, 4, c.ToString() });
                list.Add(new object[] { new byte[] { 97, 0, 0, 0, (byte)c, 0, 0, 0, 98, 0, 0, 0 }, 4, 4, c.ToString() });
                list.Add(new object[] { new byte[] { 97, 0, 0, 0, (byte)c, 0, 0, 0, 98, 0, 0, 0 }, 0, 12, "a" + c.ToString() + "b" });
            }

            // Surrogate pairs
            list.Add(new object[] { new byte[] { 0, 0, 1, 0 }, 0, 4, EncodingHelpers.ToString(new[] { 0xD800, 0xDC00 }) });
            list.Add(new object[] { new byte[] { 97, 0, 0, 0, 0, 0, 1, 0, 98, 0, 0, 0 }, 0, 12, "a" + EncodingHelpers.ToString(new[] { 0xD800, 0xDC00 }) + "b" });

            list.Add(new object[] { new byte[] { 0x00, 0x00, 0x01, 0x00, 0xFF, 0xFF, 0x10, 0x00 }, 0, 8, EncodingHelpers.ToString(new[] { 0xD800, 0xDC00, 0xDBFF, 0xDFFF }) });

            // Mixture of ASCII and Unciode
            list.Add(new object[] { new byte[] { 70, 0, 0, 0, 111, 0, 0, 0, 111, 0, 0, 0, 66, 0, 0, 0, 65, 0, 0, 0, 0, 4, 0, 0, 82, 0, 0, 0 }, 0, 28, "FooBA" + EncodingHelpers.ToString(new[] { 0x0400 }) + "R" });

            // U+FDD0 - U+FDEF
            list.Add(new object[] { new byte[] { 0xD0, 0xFD, 0x00, 0x00, 0xEF, 0xFD, 0x00, 0x00 }, 0, 8, EncodingHelpers.ToString(new[] { 0xFDD0, 0xFDEF }) });
            list.Add(new object[] { new byte[] { 0xD0, 0xFD, 0x00, 0x00, 0xEF, 0xFD, 0x00, 0x00 }, 0, 8, EncodingHelpers.ToString(new[] { 0xFDD0, 0xFDEF }) });

            // High BMP non-chars: U+FFFF, U+FFFE, U+FFFD
            list.Add(new object[] { new byte[] { 253, 255, 0, 0 }, 0, 4, EncodingHelpers.ToString(new[] { 0xFFFD }) });
            list.Add(new object[] { new byte[] { 254, 255, 0, 0 }, 0, 4, EncodingHelpers.ToString(new[] { 0xFFFE }) });
            list.Add(new object[] { new byte[] { 255, 255, 0, 0 }, 0, 4, EncodingHelpers.ToString(new[] { 0xFFFF }) });
            list.Add(new object[] { new byte[] { 0xFF, 0xFF, 0x00, 0x00, 0xFE, 0xFF, 0x00, 0x00, 0xFD, 0xFF, 0x00, 0x00 }, 0, 12, EncodingHelpers.ToString(new[] { 0xFFFF, 0xFFFE, 0xFFFD }) });

            // Empty strings
            list.Add(new object[] { new byte[0], 0, 0, string.Empty });
            list.Add(new object[] { new byte[10], 10, 0, string.Empty });

            return list;
        }

        [Test(ExpectedCount = 0)]
        public void Decode()
        {
            foreach (var objectse in UTF32EncodingDecodeTests.Decode_TestData())
            {
                byte[] littleEndianBytes = objectse[0] as byte[];
                int index = (int) objectse[1];
                int count = (int) objectse[2];
                string expected = objectse[3] as string;

                byte[] bigEndianBytes = GetBigEndianBytes(littleEndianBytes, index, count);

                EncodingHelpers.Decode(new UTF32Encoding(true, true, false), bigEndianBytes, index, count, expected);
                EncodingHelpers.Decode(new UTF32Encoding(true, false, false), bigEndianBytes, index, count, expected);
                EncodingHelpers.Decode(new UTF32Encoding(false, true, false), littleEndianBytes, index, count, expected);
                EncodingHelpers.Decode(new UTF32Encoding(false, false, false), littleEndianBytes, index, count, expected);

                EncodingHelpers.Decode(new UTF32Encoding(true, true, true), bigEndianBytes, index, count, expected);
                EncodingHelpers.Decode(new UTF32Encoding(true, false, true), bigEndianBytes, index, count, expected);
                EncodingHelpers.Decode(new UTF32Encoding(false, true, true), littleEndianBytes, index, count, expected);
                EncodingHelpers.Decode(new UTF32Encoding(false, false, true), littleEndianBytes, index, count, expected);
            }
        }

        public static IEnumerable<object[]> Decode_InvalidBytes_TestData()
        {
            var list = new List<object[]>();
            list.Add(new object[] { new byte[] { 123 }, 0, 1, EncodingHelpers.ToString(new[] { 0xFFFD }) });
            list.Add(new object[] { new byte[] { 123, 123 }, 0, 2, EncodingHelpers.ToString(new[] { 0xFFFD }) });
            list.Add(new object[] { new byte[] { 123, 123, 123 }, 0, 3, EncodingHelpers.ToString(new[] { 0xFFFD }) });
            list.Add(new object[] { new byte[] { 123, 123, 123, 123 }, 1, 3, EncodingHelpers.ToString(new[] { 0xFFFD }) });
            list.Add(new object[] { new byte[] { 97, 0, 0, 0, 0 }, 0, 5, "a" + EncodingHelpers.ToString(new[] { 0xFFFD }) });
            list.Add(new object[] { new byte[] { 0xFF, 0xDB, 0x00, 0x00, 0xFF, 0xDF, 0x00, 0x00 }, 0, 8, EncodingHelpers.ToString(new[] { 0xFFFD, 0xFFFD }) });
            list.Add(new object[] { new byte[] { 0xFF, 0xDB, 0x00, 0x00, 0xFF, 0xDF, 0x00, 0x00 }, 0, 4, EncodingHelpers.ToString(new[] { 0xFFFD }) });
            list.Add(new object[] { new byte[] { 0xFF, 0xDB, 0x00, 0x00, 0xFF, 0xDF, 0x00, 0x00 }, 4, 4, EncodingHelpers.ToString(new[] { 0xFFFD }) });
            list.Add(new object[] { new byte[] { 0x00, 0xD8, 0x00, 0x00, 0x00, 0xDC, 0x00, 0x00 }, 0, 8, EncodingHelpers.ToString(new[] { 0xFFFD, 0xFFFD }) });
            list.Add(new object[] { new byte[] { 0xFF, 0xDB, 0x00, 0x00, 0xFD, 0xFF, 0x00, 0x00 }, 0, 8, EncodingHelpers.ToString(new[] { 0xFFFD, 0xFFFD }) });
            list.Add(new object[] { new byte[] { 0x00, 0x80, 0x00, 0x00, 0xFF, 0xDF, 0x00, 0x00 }, 0, 8, EncodingHelpers.ToString(new[] { 0x8000, 0xFFFD }) });
            list.Add(new object[] { new byte[] { 0xFF, 0xFF, 0x11, 0x00 }, 0, 4, EncodingHelpers.ToString(new[] { 0xFFFD }) });
            list.Add(new object[] { new byte[] { 0x00, 0x00, 0x11, 0x00 }, 0, 4, EncodingHelpers.ToString(new[] { 0xFFFD }) });
            list.Add(new object[] { new byte[] { 0x00, 0x00, 0x00, 0x01 }, 0, 4, EncodingHelpers.ToString(new[] { 0xFFFD }) });
            list.Add(new object[] { new byte[] { 0xFF, 0xFF, 0x10, 0x01 }, 0, 4, EncodingHelpers.ToString(new[] { 0xFFFD }) });
            list.Add(new object[] { new byte[] { 0x00, 0x00, 0x00, 0xFF }, 0, 4, EncodingHelpers.ToString(new[] { 0xFFFD }) });
            list.Add(new object[] { new byte[] { 0xFF, 0xFF, 0xFF, 0xFF }, 0, 4, EncodingHelpers.ToString(new[] { 0xFFFD }) });
            return list;
        }

        [Test]
        public void Decode_InvalidBytes()
        {
            foreach (var objectse in UTF32EncodingDecodeTests.Decode_InvalidBytes_TestData())
            {
                byte[] littleEndianBytes = objectse[0] as byte[];
                int index = (int) objectse[1];
                int count = (int) objectse[2];
                string expected = objectse[3] as string;

                byte[] bigEndianBytes = GetBigEndianBytes(littleEndianBytes, index, count);

                EncodingHelpers.Decode(new UTF32Encoding(true, true, false), bigEndianBytes, index, count, expected);
                EncodingHelpers.Decode(new UTF32Encoding(true, false, false), bigEndianBytes, index, count, expected);
                EncodingHelpers.Decode(new UTF32Encoding(false, true, false), littleEndianBytes, index, count, expected);
                EncodingHelpers.Decode(new UTF32Encoding(false, false, false), littleEndianBytes, index, count, expected);

                NegativeEncodingTests.Decode_Invalid(new UTF32Encoding(true, true, true), bigEndianBytes, index, count);
                NegativeEncodingTests.Decode_Invalid(new UTF32Encoding(true, false, true), bigEndianBytes, index, count);
                NegativeEncodingTests.Decode_Invalid(new UTF32Encoding(false, true, true), littleEndianBytes, index, count);
                NegativeEncodingTests.Decode_Invalid(new UTF32Encoding(false, false, true), littleEndianBytes, index, count);
            }
        }

        public static byte[] GetBigEndianBytes(byte[] littleEndianBytes, int index, int count)
        {
            byte[] bytes = new byte[littleEndianBytes.Length];

            int i;
            for (i = index; i + 3 < index + count; i += 4)
            {
                bytes[i] = littleEndianBytes[i + 3];
                bytes[i + 1] = littleEndianBytes[i + 2];
                bytes[i + 2] = littleEndianBytes[i + 1];
                bytes[i + 3] = littleEndianBytes[i];
            }

            // Invalid byte arrays may not have a multiple of 4 length
            // Since they are invalid in both big and little endian orderings,
            // we don't need to convert the ordering.
            for (; i < index + count; i++)
            {
                bytes[i] = littleEndianBytes[i];
            }

            return bytes;
        }
    }
}