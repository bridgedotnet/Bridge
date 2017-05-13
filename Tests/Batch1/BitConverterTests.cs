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
        public static void RoundtripDoubleToInt64Bits()
        {
            Double input = 123456.3234;

            Int64 result = BitConverter.DoubleToInt64Bits(input);
            Assert.AreEqual(4683220267154373240L.ToString(), result.ToString());

            Double roundtripped = BitConverter.Int64BitsToDouble(result);
            Assert.AreEqual(input, roundtripped);
        }

        [Test]
        public static void Int64BitsToDouble()
        {
            var input = new long[] { long.MaxValue, 1L, 0L, -1L, long.MinValue };
            var expected = new double[] { double.NaN, 4.94065645841247E-324, 0, double.NaN, 0 };

            for (int i = 0; i < input.Length; i++)
            {
                Assert.AreEqual(expected[i], BitConverter.Int64BitsToDouble(input[i]));
            }
        }

        [Test]
        public static void DoubleToInt64Bits()
        {
            var input = new double[] { double.MaxValue, 1d, 0d, -1d, double.MinValue };
            var expected = new long[] { 9218868437227405311L, 4607182418800017408L, 0L, -4616189618054758400L, -4503599627370497L };

            for (int i = 0; i < input.Length; i++)
            {
                Assert.AreEqual(expected[i].ToString(), BitConverter.DoubleToInt64Bits(input[i]).ToString());
            }
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
            Double[] input = new[] { double.MaxValue, 123456.3234d, 0d, -123456.3234d, double.MinValue, double.NaN, 3.14932264628586E-319 };
            Byte[][] expected = new byte[][]
            {
                new byte[] { 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xEF, 0x7F },
                new byte[] { 0x78, 0x7a, 0xa5, 0x2c, 0x05, 0x24, 0xfe, 0x40 },
                new byte[] { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 },
                new byte[] { 0x78, 0x7A, 0xA5, 0x2C, 0x05, 0x24, 0xFE, 0xC0 },
                new byte[] { 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xEF, 0xFF },
                new byte[] { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xF8, 0xFF },
                new byte[] { 0xFF, 0xF8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 }
            };

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
            Int16[] input = new[] { short.MaxValue, (short)4660, (short)0, (short)-4660, short.MinValue };
            Byte[][] expected = new byte[][]
            {
                new byte[] { 0xFF, 0x7F },
                new byte[] { 0x34, 0x12 },
                new byte[] { 0x00, 0x00 },
                new byte[] { 0xCC, 0xED },
                new byte[] { 0x00, 0x80 }
            };

            VerifyRoundtrip(BitConverter.GetBytes, BitConverter.ToInt16, input, expected);
        }

        [Test]
        public static void RoundtripInt32()
        {
            Int32[] input = new[] { int.MaxValue, (int)305419896, (int)0, (int)-305419896, int.MinValue };
            Byte[][] expected = new byte[][]
            {
                new byte[] { 0xFF, 0xFF, 0xFF, 0x7F },
                new byte[] { 0x78, 0x56, 0x34, 0x12 },
                new byte[] { 0x00, 0x00, 0x00, 0x00 },
                new byte[] { 0x88, 0xA9, 0xCB, 0xED },
                new byte[] { 0x00, 0x00, 0x00, 0x80 }
            };

            VerifyRoundtrip(BitConverter.GetBytes, BitConverter.ToInt32, input, expected);
        }

        [Test]
        public static void RoundtripInt64()
        {
            Int64[] input = new[] { long.MaxValue, 0x0123456789abcdefL, 0L, -81985529216486895L, long.MinValue };
            Byte[][] expected = new byte[][]
            {
                new byte[] { 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x7F },
                new byte[] { 0xef, 0xcd, 0xab, 0x89, 0x67, 0x45, 0x23, 0x01 },
                new byte[] { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 },
                new byte[] { 0x11, 0x32, 0x54, 0x76, 0x98, 0xBA, 0xDC, 0xFE },
                new byte[] {  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80 }
            };

            VerifyRoundtrip(BitConverter.GetBytes, BitConverter.ToInt64, input, expected);
        }

        [Test]
        public static void RoundtripUInt16()
        {
            UInt16[] input = new[] { ushort.MaxValue, (ushort)4660, (ushort)0, (ushort)60876, ushort.MinValue };
            Byte[][] expected = new byte[][]
            {
                new byte[] { 0xFF, 0xFF },
                new byte[] { 0x34, 0x12 },
                new byte[] { 0x00, 0x00 },
                new byte[] { 0xCC, 0xED },
                new byte[] { 0x00, 0x00 }
            };

            VerifyRoundtrip(BitConverter.GetBytes, BitConverter.ToUInt16, input, expected);
        }

        [Test]
        public static void RoundtripUInt32()
        {
            UInt32[] input = new[] { uint.MaxValue, (uint)305419896, (uint)0, (uint)3989547400, uint.MinValue };
            Byte[][] expected = new byte[][]
            {
                new byte[] { 0xFF, 0xFF, 0xFF, 0xFF },
                new byte[] { 0x78, 0x56, 0x34, 0x12 },
                new byte[] { 0x00, 0x00, 0x00, 0x00 },
                new byte[] { 0x88, 0xA9, 0xCB, 0xED },
                new byte[] { 0x00, 0x00, 0x00, 0x00 }
            };

            VerifyRoundtrip(BitConverter.GetBytes, BitConverter.ToUInt32, input, expected);
        }

        [Test]
        public static void RoundtripUInt64()
        {
            UInt64[] input = new[] { ulong.MaxValue, 0x0123456789abcdefUL, 0UL, 0xFFEDCBA987654322UL, ulong.MinValue };
            Byte[][] expected = new byte[][]
            {
                new byte[] { 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF },
                new byte[] { 0xef, 0xcd, 0xab, 0x89, 0x67, 0x45, 0x23, 0x01 },
                new byte[] { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 },
                new byte[] { 0x22, 0x43, 0x65, 0x87, 0xA9, 0xCB, 0xED, 0xFF },
                new byte[] {  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 }
            };

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

        private static void VerifyRoundtrip<TInput>(Func<TInput, Byte[]> getBytes, Func<Byte[], int, TInput> convertBack, TInput[] input, Byte[][] expectedBytes)
        {
            for (int i = 0; i < input.Length; i++)
            {
                VerifyRoundtrip(getBytes, convertBack, input[i], expectedBytes[i], "Set " + i + ". ");
            }
        }

        private static void VerifyRoundtrip<TInput>(Func<TInput, Byte[]> getBytes, Func<Byte[], int, TInput> convertBack, TInput input, Byte[] expectedBytes, string message = "")
        {
            Byte[] bytes = getBytes(input);
            Assert.AreEqual(expectedBytes.Length, bytes.Length, message + "GetBytes().Length from " + input);

            if (!BitConverter.IsLittleEndian)
            {
                Array.Reverse(expectedBytes);
            }

            Assert.AreEqual(
                string.Join(" ", expectedBytes.Select(x => x.ToString("X"))),
                string.Join(" ", bytes.Select(x => x.ToString("X"))),
                message + "GetBytes() from " + input);

            var back = convertBack(bytes, 0);
            AssertApproximatelyIfDoubleOrFloat(back, input, message + "Convert back aligned. ");

            // Also try unaligned startIndex
            byte[] longerBytes = new byte[bytes.Length + 1];
            longerBytes[0] = 0;
            Array.Copy(bytes, 0, longerBytes, 1, bytes.Length);
            back = convertBack(longerBytes, 1);
            AssertApproximatelyIfDoubleOrFloat(back, input, message + "Convert back unaligned. ");
        }

        private static void AssertApproximatelyIfDoubleOrFloat<TInput>(TInput back, TInput input, string message)
        {
            var useEpsilon = typeof(TInput) == typeof(double) || typeof(TInput) == typeof(float);

            if (useEpsilon)
            {
                var epsilon = 1e-1;

                if (typeof(TInput) == typeof(double))
                {
                    var diff = input.As<double>() - back.As<double>();

                    if (diff < 0)
                    {
                        diff = -diff;
                    }

                    if (diff < epsilon)
                    {
                        Assert.True(true, message + input + " vs " + back);
                    }
                    else
                    {
                        Assert.AreEqual(input.ToString(), back.ToString(), message + "Counted with epsilon: " + epsilon);
                    }
                }
                else
                {
                    var diff = input.As<float>() - back.As<float>();

                    if (diff < 0)
                    {
                        diff = -diff;
                    }

                    if (diff < epsilon)
                    {
                        Assert.True(true, message + input + " vs " + back);
                    }
                    else
                    {
                        Assert.AreEqual(input.ToString(), back.ToString(), message + "Counted with epsilon: " + epsilon);
                    }
                }
            }
            else
            {
                Assert.AreEqual(input.ToString(), back.ToString(), message);
            }
        }
    }
}
