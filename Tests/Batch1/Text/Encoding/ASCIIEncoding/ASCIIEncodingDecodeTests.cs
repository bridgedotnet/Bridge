using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridge.ClientTest.Text
{
    [Category(Constants.MODULE_ENCODING)]
    [TestFixture(TestNameFormat = "ASCIIEncoding - {0}")]
    public class ASCIIEncodingDecodeTests
    {
        public static IEnumerable<object[]> Decode_TestData()
        {
            var list = new List<object[]>();
            // All ASCII chars
            for (int i = 0; i <= 0x7F; i++)
            {
                byte b = (byte)i;
                list.Add(new object[] { new byte[] { b }, 0, 1 });
                list.Add(new object[] { new byte[] { 96, b, 97 }, 1, 1 });
                list.Add(new object[] { new byte[] { 96, b, 98 }, 2, 1 });
                list.Add(new object[] { new byte[] { 97, b, 97 }, 0, 3 });
            }

            // Empty strings
            list.Add(new object[] { new byte[0], 0, 0 });
            list.Add(new object[] { new byte[10], 5, 0 });
            list.Add(new object[] { new byte[10], 5, 5 });

            return list;
        }

        [Test(ExpectedCount = 0)]
        public void Decode()
        {
            foreach (var objectse in ASCIIEncodingDecodeTests.Decode_TestData())
            {
                byte[] bytes = objectse[0] as byte[];
                int index = (int)objectse[1];
                int count = (int)objectse[2];

                string expected = GetString(bytes, index, count);
                EncodingHelpers.Decode(new ASCIIEncoding(), bytes, index, count, expected);
            }
        }

        public static IEnumerable<object[]> Decode_InvalidBytes_TestData()
        {
            var list = new List<object[]>();
            // All Latin-1 Supplement bytes
            for (int i = 0x80; i <= byte.MaxValue; i++)
            {
                byte b = (byte)i;
                list.Add(new object[] { new byte[] { b }, 0, 1 });
                list.Add(new object[] { new byte[] { 96, b, 97 }, 1, 1 });
                list.Add(new object[] { new byte[] { 97, b, 97 }, 0, 3 });
            }

            list.Add(new object[] { new byte[] { 0xC1, 0x41, 0xF0, 0x42 }, 0, 4 });
            return list;
        }

        [Test(ExpectedCount = 0)]
        public void Decode_InvalidBytes()
        {
            foreach (var objectse in ASCIIEncodingDecodeTests.Decode_InvalidBytes_TestData())
            {
                byte[] bytes = objectse[0] as byte[];
                int index = (int)objectse[1];
                int count = (int)objectse[2];

                string expected = GetString(bytes, index, count);
                EncodingHelpers.Decode(new ASCIIEncoding(), bytes, index, count, expected);
            }
        }

        public static string GetString(byte[] bytes, int index, int count)
        {
            char[] chars = new char[count];
            for (int i = 0; i < count; i++)
            {
                byte b = bytes[i + index];
                chars[i] = b <= 0x7F ? (char)b : '?';
            }
            return new string(chars);
        }
    }
}