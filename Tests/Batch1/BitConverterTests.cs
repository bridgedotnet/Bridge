using Bridge.Linq;
using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest
{

    [Category(Constants.MODULE_BIT_CONVERTER)]
    [TestFixture(TestNameFormat = "BitConverter - {0}")]
    public class BitConverterTests
    {
        //[Test]
        //public static unsafe void IsLittleEndian()
        //{
        //    short s = 1;
        //    Assert.AreEqual(BitConverter.IsLittleEndian, *((byte*)&s) == 1);
        //}

        [Test]
        public static void ValueArgumentNull()
        {
            Assert.Throws<ArgumentNullException>(() => BitConverter.ToBoolean(null, 0));
            Assert.Throws<ArgumentNullException>(() => BitConverter.ToChar(null, 0));
            Assert.Throws<ArgumentNullException>(() => BitConverter.ToDouble(null, 0));
            Assert.Throws<ArgumentNullException>(() => BitConverter.ToInt16(null, 0));
            Assert.Throws<ArgumentNullException>(() => BitConverter.ToInt32(null, 0));
            Assert.Throws<ArgumentNullException>(() => BitConverter.ToInt64(null, 0));
            Assert.Throws<ArgumentNullException>(() => BitConverter.ToSingle(null, 0));
            Assert.Throws<ArgumentNullException>(() => BitConverter.ToUInt16(null, 0));
            Assert.Throws<ArgumentNullException>(() => BitConverter.ToUInt32(null, 0));
            Assert.Throws<ArgumentNullException>(() => BitConverter.ToUInt64(null, 0));
            Assert.Throws<ArgumentNullException>(() => BitConverter.ToString(null));
            Assert.Throws<ArgumentNullException>(() => BitConverter.ToString(null, 0));
            Assert.Throws<ArgumentNullException>(() => BitConverter.ToString(null, 0, 0));
        }

        [Test]
        public static void StartIndexBeyondLength()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToBoolean(new byte[1], -1));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToBoolean(new byte[1], 1));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToBoolean(new byte[1], 2));

            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToChar(new byte[2], -1));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToChar(new byte[2], 2));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToChar(new byte[2], 3));

            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToDouble(new byte[8], -1));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToDouble(new byte[8], 8));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToDouble(new byte[8], 9));

            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToInt16(new byte[2], -1));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToInt16(new byte[2], 2));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToInt16(new byte[2], 3));

            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToInt32(new byte[4], -1));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToInt32(new byte[4], 4));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToInt32(new byte[4], 5));

            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToInt64(new byte[8], -1));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToInt64(new byte[8], 8));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToInt64(new byte[8], 9));

            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToSingle(new byte[4], -1));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToSingle(new byte[4], 4));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToSingle(new byte[4], 5));

            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToUInt16(new byte[2], -1));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToUInt16(new byte[2], 2));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToUInt16(new byte[2], 3));

            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToUInt32(new byte[4], -1));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToUInt32(new byte[4], 4));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToUInt32(new byte[4], 5));

            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToUInt64(new byte[8], -1));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToUInt64(new byte[8], 8));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToUInt64(new byte[8], 9));

            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToString(new byte[1], -1));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToString(new byte[1], 1));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToString(new byte[1], 2));

            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToString(new byte[1], -1, 0));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToString(new byte[1], 1, 0));
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToString(new byte[1], 2, 0));

            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToString(new byte[1], 0, -1));
        }

        [Test]
        public static void StartIndexPlusNeededLengthTooLong()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToBoolean(new byte[0], 0));
            Assert.Throws<ArgumentException>(() => BitConverter.ToChar(new byte[2], 1));
            Assert.Throws<ArgumentException>(() => BitConverter.ToDouble(new byte[8], 1));
            Assert.Throws<ArgumentException>(() => BitConverter.ToInt16(new byte[2], 1));
            Assert.Throws<ArgumentException>(() => BitConverter.ToInt32(new byte[4], 1));
            Assert.Throws<ArgumentException>(() => BitConverter.ToInt64(new byte[8], 1));
            Assert.Throws<ArgumentException>(() => BitConverter.ToSingle(new byte[4], 1));
            Assert.Throws<ArgumentException>(() => BitConverter.ToUInt16(new byte[2], 1));
            Assert.Throws<ArgumentException>(() => BitConverter.ToUInt32(new byte[4], 1));
            Assert.Throws<ArgumentException>(() => BitConverter.ToUInt64(new byte[8], 1));
            Assert.Throws<ArgumentException>(() => BitConverter.ToString(new byte[2], 1, 2));
        }

        [Test]
        public static void DoubleToInt64Bits()
        {
            Double input = 123456.3234;
            Int64 result = BitConverter.DoubleToInt64Bits(input);
            Assert.AreEqual(4683220267154373240L, result);
            Double roundtripped = BitConverter.Int64BitsToDouble(result);
            Assert.AreEqual(input, roundtripped);
        }

        [Test]
        public static void RoundtripBoolean()
        {
            Byte[] bytes = BitConverter.GetBytes(true);
            Assert.AreEqual(1, bytes.Length);
            Assert.AreEqual(1, bytes[0]);
            Assert.True(BitConverter.ToBoolean(bytes, 0));

            bytes = BitConverter.GetBytes(false);
            Assert.AreEqual(1, bytes.Length);
            Assert.AreEqual(0, bytes[0]);
            Assert.False(BitConverter.ToBoolean(bytes, 0));
        }

        [Test]
        public static void RoundtripChar()
        {
            Char input = 'A';
            Byte[] expected = { 0x41, 0 };
            VerifyRoundtrip(BitConverter.GetBytes, BitConverter.ToChar, input, expected);
        }

        [Test]
        public static void RoundtripDouble()
        {
            Double input = 123456.3234;
            Byte[] expected = { 0x78, 0x7a, 0xa5, 0x2c, 0x05, 0x24, 0xfe, 0x40 };
            VerifyRoundtrip(BitConverter.GetBytes, BitConverter.ToDouble, input, expected);
        }

        [Test]
        public static void RoundtripSingle()
        {
            Single input = 8392.34f;
            Byte[] expected = { 0x5c, 0x21, 0x03, 0x46 };
            VerifyRoundtrip(BitConverter.GetBytes, BitConverter.ToSingle, input, expected);
        }

        [Test]
        public static void RoundtripInt16()
        {
            Int16 input = 0x1234;
            Byte[] expected = { 0x34, 0x12 };
            VerifyRoundtrip(BitConverter.GetBytes, BitConverter.ToInt16, input, expected);
        }

        [Test]
        public static void RoundtripInt32()
        {
            Int32 input = 0x12345678;
            Byte[] expected = { 0x78, 0x56, 0x34, 0x12 };
            VerifyRoundtrip(BitConverter.GetBytes, BitConverter.ToInt32, input, expected);
        }

        [Test]
        public static void RoundtripInt64()
        {
            Int64 input = 0x0123456789abcdef;
            Byte[] expected = { 0xef, 0xcd, 0xab, 0x89, 0x67, 0x45, 0x23, 0x01 };
            VerifyRoundtrip(BitConverter.GetBytes, BitConverter.ToInt64, input, expected);
        }

        [Test]
        public static void RoundtripUInt16()
        {
            UInt16 input = 0x1234;
            Byte[] expected = { 0x34, 0x12 };
            VerifyRoundtrip(BitConverter.GetBytes, BitConverter.ToUInt16, input, expected);
        }

        [Test]
        public static void RoundtripUInt32()
        {
            UInt32 input = 0x12345678;
            Byte[] expected = { 0x78, 0x56, 0x34, 0x12 };
            VerifyRoundtrip(BitConverter.GetBytes, BitConverter.ToUInt32, input, expected);
        }

        [Test]
        public static void RoundtripUInt64()
        {
            UInt64 input = 0x0123456789abcdef;
            Byte[] expected = { 0xef, 0xcd, 0xab, 0x89, 0x67, 0x45, 0x23, 0x01 };
            VerifyRoundtrip(BitConverter.GetBytes, BitConverter.ToUInt64, input, expected);
        }

        [Test]
        public static void RoundtripString()
        {
            Byte[] bytes = { 0x12, 0x34, 0x56, 0x78, 0x9a };

            Assert.AreEqual("12-34-56-78-9A", BitConverter.ToString(bytes));
            Assert.AreEqual("56-78-9A", BitConverter.ToString(bytes, 2));
            Assert.AreEqual("56", BitConverter.ToString(bytes, 2, 1));

            Assert.AreEqual(string.Empty, BitConverter.ToString(new byte[0]));
            Assert.AreEqual(string.Empty, BitConverter.ToString(new byte[3], 1, 0));
        }

        [Test]
        public static void ToString_ByteArray_Long()
        {
            byte[] bytes = System.Linq.Enumerable.Range(0, 256 * 4).Select(i => unchecked((byte)i)).ToArray();

            string expected = string.Join("-", bytes.Select(b => b.ToString("X2")));

            Assert.AreEqual(expected, BitConverter.ToString(bytes));
            Assert.AreEqual(expected.Substring(3, expected.Length - 6), BitConverter.ToString(bytes, 1, bytes.Length - 2));
        }

        //[Test]
        //public static void ToString_ByteArrayTooLong_Throws()
        //{
        //    byte[] arr;
        //    try
        //    {
        //        arr = new byte[int.MaxValue / 3 + 1];
        //    }
        //    catch (OutOfMemoryException)
        //    {
        //        // Exit out of the test if we don't have an enough contiguous memory
        //        // available to create a big enough array.
        //        return;
        //    }

        //    Assert.Throws<ArgumentOutOfRangeException>(() => BitConverter.ToString(arr));
        //}

        private static void VerifyRoundtrip<TInput>(Func<TInput, Byte[]> getBytes, Func<Byte[], int, TInput> convertBack, TInput input, Byte[] expectedBytes)
        {
            Byte[] bytes = getBytes(input);
            Assert.AreEqual(expectedBytes.Length, bytes.Length);

            if (!BitConverter.IsLittleEndian)
            {
                Array.Reverse(expectedBytes);
            }

            Assert.AreEqual(expectedBytes, bytes);

            var back = convertBack(bytes, 0);
            AssertApproximatelyIfDoubleOrFloat(back, input);

            // Also try unaligned startIndex
            byte[] longerBytes = new byte[bytes.Length + 1];
            longerBytes[0] = 0;
            Array.Copy(bytes, 0, longerBytes, 1, bytes.Length);
            back = convertBack(longerBytes, 1);

            AssertApproximatelyIfDoubleOrFloat(back, input);
        }

        private static void AssertApproximatelyIfDoubleOrFloat<TInput>(TInput back, TInput input)
        {
            var useEpsilon = typeof(TInput) == typeof(double) || typeof(float) == typeof(float);

            if (useEpsilon)
            {
                if (typeof(TInput) == typeof(double))
                {
                    var diff = input.As<double>() - back.As<double>();

                    if (diff < 0)
                    {
                        diff = -diff;
                    }

                    Assert.True(diff < 1e-1, input + " vs " + back);
                }
                else
                {
                    var diff = input.As<float>() - back.As<float>();

                    if (diff < 0)
                    {
                        diff = -diff;
                    }

                    Assert.True(diff < 1e-1, input + " vs " + back);
                }

            }
            else
            {
                Assert.AreEqual(input, back);
            }
        }
    }
}
