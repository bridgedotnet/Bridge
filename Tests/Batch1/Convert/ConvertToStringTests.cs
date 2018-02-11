// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToString.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using Bridge.Test.NUnit;
using System;
using System.Globalization;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToString - {0}")]
    public class ConvertToStringTests
    {
        [Test]
        public static void FromBoxedObject()
        {
            object[] testValues =
            {
            // Boolean
            true,
            false,

            // Decimal
            decimal.Zero,
            decimal.One,
            decimal.MinusOne,
            decimal.MaxValue,
            decimal.MinValue,
            decimal.Parse("1.234567890123456789012345678", NumberFormatInfo.InvariantInfo),
            decimal.Parse("1234.56", NumberFormatInfo.InvariantInfo),
            decimal.Parse("-1234.56", NumberFormatInfo.InvariantInfo),

            // Double
            -12.2364,
            -12.236465923406483,
            -1.7753E-83,
            +12.345e+234,
            +12e+1,
            double.NegativeInfinity,
            double.PositiveInfinity,
            double.NaN,

            // Single
            -12.2364f,
            -1.7753e-83f,
            +12e+1f,
            float.NegativeInfinity,
            float.PositiveInfinity,
            float.NaN,

            // TODO: Uncomment when IConvertible is implemented. #822
            //-12.2364659234064826243f,
            //(float)+12.345e+234,

            //// TimeSpan
            //TimeSpan.Zero,
            //TimeSpan.Parse("1999.9:09:09"),
            //TimeSpan.Parse("-1111.1:11:11"),
            //TimeSpan.Parse("1:23:45"),
            //TimeSpan.Parse("-2:34:56"),

            // SByte
            sbyte.MinValue,
            (sbyte)0,
            sbyte.MaxValue,

            // Int16
            short.MinValue,
            0,
            short.MaxValue,

            // Int32
            int.MinValue,
            0,
            int.MaxValue,

            // Int64
            long.MinValue,
            (long)0,
            long.MaxValue,

            // Byte
            byte.MinValue,
            (byte)100,
            byte.MaxValue,

            // UInt16
            ushort.MinValue,
            (ushort)100,
            ushort.MaxValue,

            // UInt32
            uint.MinValue,
            (uint)100,
            uint.MaxValue,

            // UInt64
            ulong.MinValue,
            (ulong)100,
            ulong.MaxValue
        };

            string[] expectedValues =
            {
            // Boolean
            "True",
            "False",

            // Decimal
            "0",
            "1",
            "-1",
            ConvertConstants.DECIMAL_MAX_STRING,
            ConvertConstants.DECIMAL_MIN_STRING,
            "1.234567890123456789012345678",
            "1234.56",
            "-1234.56",

            // Double
            "-12.2364",
            "-12.2364659234065",
            "-1.7753e-83",
            "1.2345e+235",
            "120",
            "-Infinity",
            "Infinity",
            "NaN",

            // Single
            "-12.2364",
            "0",
            "120",
            "-Infinity",
            "Infinity",
            "NaN",

            // TODO : Uncomment when IConvertible is implemented. #822
            //"-12.23647",
            //"Infinity",

            //// TimeSpan
            //"00:00:00",
            //"1999.09:09:09",
            //"-1111.01:11:11",
            //"01:23:45",
            //"-02:34:56",

            // SByte
            sbyte.MinValue.ToString(),
            "0",
            sbyte.MaxValue.ToString(),

            // Int16
            short.MinValue.ToString(),
            "0",
            short.MaxValue.ToString(),

            // Int32
            int.MinValue.ToString(),
            "0",
            int.MaxValue.ToString(),

            // Int64
            long.MinValue.ToString(),
            "0",
            long.MaxValue.ToString(),

            // Byte
            byte.MinValue.ToString(),
            "100",
            byte.MaxValue.ToString(),

            // UInt16
            ushort.MinValue.ToString(),
            "100",
            ushort.MaxValue.ToString(),

            // UInt32
            uint.MinValue.ToString(),
            "100",
            uint.MaxValue.ToString(),

            // UInt64
           ulong.MinValue.ToString(),
            "100",
           ulong.MaxValue.ToString(),
        };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(
                    expectedValues[i].ToLower(),
                    Convert.ToString(testValues[i], NumberFormatInfo.InvariantInfo).ToLower(),
                    "Index in testValues " + i);
            }
        }

        [Test]
        public static void FromObject()
        {
            Assert.AreEqual("Bridge.ClientTest.ConvertTests.ConvertToStringTests", Convert.ToString(new ConvertToStringTests()));
        }

        [Test]
        public static void FromDateTime()
        {
            DateTime[] testValues = { new DateTime(2000, 8, 15, 16, 59, 59), new DateTime(1901, 1, 1, 1, 1, 1) };
            string[] expectedValues = { "08/15/2000 16:59:59", "01/01/1901 01:01:01" };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(testValues[i].ToString(), Convert.ToString(testValues[i]));
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], DateTimeFormatInfo.InvariantInfo));
            }
        }

        [Test]
        public static void FromChar()
        {
            char[] testValues = { 'a', 'A', '@', '\n' };
            string[] expectedValues = { "a", "A", "@", "\n" };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i]));
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], CultureInfo.InvariantCulture));
            }
        }

        [Test]
        public static void FromByteBase2()
        {
            byte[] testValues = { byte.MinValue, 100, byte.MaxValue };
            string[] expectedValues = { byte.MinValue.ToString(), "1100100", ConvertConstants.UINT8_MAX_STRING_BASE_2 };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], 2));
            }
        }

        [Test]
        public static void FromByteBase8()
        {
            byte[] testValues = { byte.MinValue, 100, byte.MaxValue };
            string[] expectedValues = { byte.MinValue.ToString(), "144", ConvertConstants.UINT8_MAX_STRING_BASE_8 };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], 8));
            }
        }

        [Test]
        public static void FromByteBase10()
        {
            byte[] testValues = { byte.MinValue, 100, byte.MaxValue };
            string[] expectedValues = { byte.MinValue.ToString(), "100", byte.MaxValue.ToString() };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], 10));
            }
        }

        [Test]
        public static void FromByteBase16()
        {
            byte[] testValues = { byte.MinValue, 100, byte.MaxValue };
            string[] expectedValues = { byte.MinValue.ToString(), "64", ConvertConstants.UINT8_MAX_STRING_BASE_16 };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], 16));
            }
        }

        [Test]
        public static void FromByteInvalidBase()
        {
            Assert.Throws(() => Convert.ToString(byte.MaxValue, 13), err => err is ArgumentException);
        }

        [Test]
        public static void FromInt16Base2()
        {
            short[] testValues = { short.MinValue, 0, short.MaxValue };
            string[] expectedValues = { ConvertConstants.INT16_MIN_STRING_BASE_2, "0", ConvertConstants.INT16_MAX_STRING_BASE_2 };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], 2));
            }
        }

        [Test]
        public static void FromInt16Base8()
        {
            short[] testValues = { short.MinValue, 0, short.MaxValue };
            string[] expectedValues = { ConvertConstants.INT16_MIN_STRING_BASE_8, "0", ConvertConstants.INT16_MAX_STRING_BASE_8 };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], 8));
            }
        }

        [Test]
        public static void FromInt16Base10()
        {
            short[] testValues = { short.MinValue, 0, short.MaxValue };
            string[] expectedValues = { short.MinValue.ToString(), "0", short.MaxValue.ToString() };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], 10));
            }
        }

        [Test]
        public static void FromInt16Base16()
        {
            short[] testValues = { short.MinValue, 0, short.MaxValue };
            string[] expectedValues = { ConvertConstants.INT16_MIN_STRING_BASE_16, "0", ConvertConstants.INT16_MAX_STRING_BASE_16 };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], 16));
            }
        }

        [Test]
        public static void FromInt16InvalidBase()
        {
            Assert.Throws(() => Convert.ToString(short.MaxValue, 0), err => err is ArgumentException);
        }

        [Test]
        public static void FromInt32Base2()
        {
            int[] testValues = { int.MinValue, 0, int.MaxValue };
            string[] expectedValues = { ConvertConstants.INT32_MIN_STRING_BASE_2, "0", ConvertConstants.INT32_MAX_STRING_BASE_2 };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], 2));
            }
        }

        [Test]
        public static void FromInt32Base8()
        {
            int[] testValues = { int.MinValue, 0, int.MaxValue };
            string[] expectedValues = { ConvertConstants.INT32_MIN_STRING_BASE_8, "0", ConvertConstants.INT32_MAX_STRING_BASE_8 };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], 8));
            }
        }

        [Test]
        public static void FromInt32Base10()
        {
            int[] testValues = { int.MinValue, 0, int.MaxValue };
            string[] expectedValues = { int.MinValue.Format(null), "0", int.MaxValue.Format(null) };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], 10));
            }
        }

        [Test]
        public static void FromInt32Base16()
        {
            int[] testValues = { int.MinValue, 0, int.MaxValue };
            string[] expectedValues = { ConvertConstants.INT32_MIN_STRING_BASE_16, "0", ConvertConstants.INT32_MAX_STRING_BASE_16 };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], 16));
            }
        }

        [Test]
        public static void FromInt32InvalidBase()
        {
            Assert.Throws(() => Convert.ToString(int.MaxValue, 9), err => err is ArgumentException);
        }

        [Test]
        public static void FromInt64Base2()
        {
            long[] testValues = { long.MinValue, 0, long.MaxValue };
            string[] expectedValues = { ConvertConstants.INT64_MIN_STRING_BASE_2, "0", ConvertConstants.INT64_MAX_STRING_BASE_2 };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], 2));
            }
        }

        [Test]
        public static void FromInt64Base8()
        {
            long[] testValues = { long.MinValue, 0, long.MaxValue };
            string[] expectedValues = { ConvertConstants.INT64_MIN_STRING_BASE_8, "0", ConvertConstants.INT64_MAX_STRING_BASE_8 };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], 8));
            }
        }

        [Test]
        public static void FromInt64Base10()
        {
            long[] testValues = { long.MinValue, 0, long.MaxValue };
            string[] expectedValues = { long.MinValue.ToString(), "0", long.MaxValue.ToString() };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], 10));
            }
        }

        [Test]
        public static void FromInt64Base16()
        {
            long[] testValues = { long.MinValue, 0, long.MaxValue };
            string[] expectedValues = { ConvertConstants.INT64_MIN_STRING_BASE_16, "0", ConvertConstants.INT64_MAX_STRING_BASE_16 };

            for (int i = 0; i < testValues.Length; i++)
            {
                Assert.AreEqual(expectedValues[i], Convert.ToString(testValues[i], 16));
            }
        }

        [Test]
        public static void FromInt64InvalidBase()
        {
            Assert.Throws(() => Convert.ToString(long.MaxValue, 1), err => err is ArgumentException);
        }

        [Test]
        public static void FromBoolean()
        {
            bool[] testValues = new[] { true, false };
            string[] expectedValues = new[] { "True", "False" };

            for (int i = 0; i < testValues.Length; i++)
            {
                string expected = expectedValues[i];
                string actual = Convert.ToString(testValues[i]);
                Assert.AreEqual(expected, actual);
                actual = Convert.ToString(testValues[i], NumberFormatInfo.CurrentInfo);
                Assert.AreEqual(expected, actual);
            }
        }

        [Test]
        public static void FromSByte()
        {
            sbyte[] testValues = new sbyte[] { sbyte.MinValue, -1, 0, 1, sbyte.MaxValue };

            for (int i = 0; i < testValues.Length; i++)
            {
                string result = Convert.ToString(testValues[i]);
                Assert.AreEqual(testValues[i].ToString(), result);
                result = Convert.ToString(testValues[i], NumberFormatInfo.CurrentInfo);
                Assert.AreEqual(testValues[i].ToString(null, NumberFormatInfo.CurrentInfo), result);
            }
        }

        [Test]
        public static void FromByte()
        {
            byte[] testValues = new byte[] { byte.MinValue, 0, 1, 100, byte.MaxValue };

            for (int i = 0; i < testValues.Length; i++)
            {
                string result = Convert.ToString(testValues[i]);
                Assert.AreEqual(testValues[i].ToString(), result);
                result = Convert.ToString(testValues[i], NumberFormatInfo.CurrentInfo);
                Assert.AreEqual(testValues[i].ToString(null, NumberFormatInfo.CurrentInfo), result);
            }
        }

        [Test]
        public static void FromInt16Array()
        {
            short[] testValues = new short[] { short.MinValue, -1000, -1, 0, 1, 1000, short.MaxValue };

            for (int i = 0; i < testValues.Length; i++)
            {
                string result = Convert.ToString(testValues[i]);
                Assert.AreEqual(testValues[i].ToString(), result);
                result = Convert.ToString(testValues[i], NumberFormatInfo.CurrentInfo);
                Assert.AreEqual(testValues[i].ToString(null, NumberFormatInfo.CurrentInfo), result);
            }
        }

        [Test]
        public static void FromUInt16Array()
        {
            ushort[] testValues = new ushort[] { ushort.MinValue, 0, 1, 1000, ushort.MaxValue };

            for (int i = 0; i < testValues.Length; i++)
            {
                string result = Convert.ToString(testValues[i]);
                Assert.AreEqual(testValues[i].ToString(), result);
                result = Convert.ToString(testValues[i], NumberFormatInfo.CurrentInfo);
                Assert.AreEqual(testValues[i].ToString(null, NumberFormatInfo.CurrentInfo), result);
            }
        }

        [Test]
        public static void FromInt32Array()
        {
            int[] testValues = new int[] { int.MinValue, -1000, -1, 0, 1, 1000, int.MaxValue };

            for (int i = 0; i < testValues.Length; i++)
            {
                string result = Convert.ToString(testValues[i]);
                Assert.AreEqual(testValues[i].ToString(), result);
                result = Convert.ToString(testValues[i], NumberFormatInfo.CurrentInfo);
                Assert.AreEqual(testValues[i].ToString(null, NumberFormatInfo.CurrentInfo), result);
            }
        }

        [Test]
        public static void FromUInt32Array()
        {
            uint[] testValues = new uint[] { uint.MinValue, 0, 1, 1000, uint.MaxValue };

            for (int i = 0; i < testValues.Length; i++)
            {
                string result = Convert.ToString(testValues[i]);
                Assert.AreEqual(testValues[i].ToString(), result);
                result = Convert.ToString(testValues[i], NumberFormatInfo.CurrentInfo);
                Assert.AreEqual(testValues[i].ToString(null, NumberFormatInfo.CurrentInfo), result);
            }
        }

        [Test]
        public static void FromInt64Array()
        {
            long[] testValues = new long[] { long.MinValue, -1000, -1, 0, 1, 1000, long.MaxValue };

            for (int i = 0; i < testValues.Length; i++)
            {
                string result = Convert.ToString(testValues[i]);
                Assert.AreEqual(testValues[i].ToString(), result);
                result = Convert.ToString(testValues[i], NumberFormatInfo.CurrentInfo);
                Assert.AreEqual(testValues[i].ToString(null, NumberFormatInfo.CurrentInfo), result);
            }
        }

        [Test]
        public static void FromUInt64Array()
        {
            ulong[] testValues = new ulong[] { ulong.MinValue, 0, 1, 1000, ulong.MaxValue };

            for (int i = 0; i < testValues.Length; i++)
            {
                string result = Convert.ToString(testValues[i]);
                Assert.AreEqual(testValues[i].ToString(), result);
                result = Convert.ToString(testValues[i], NumberFormatInfo.CurrentInfo);
                Assert.AreEqual(testValues[i].ToString(null, NumberFormatInfo.CurrentInfo), result);
            }
        }

        [Test]
        public static void FromSingleArray()
        {
            float[] testValues = new float[] { float.MinValue, 0.0f, 1.0f, 1000.0f, float.MaxValue, float.NegativeInfinity, float.PositiveInfinity, float.Epsilon, float.NaN };
            string[] expectedValues1 = new string[] { ConvertConstants.SINGLE_MIN_STRING, "0", "1", "1000", ConvertConstants.SINGLE_MAX_STRING, "-Infinity", "Infinity", ConvertConstants.SINGLE_EPSILON_STRING, "NaN" };
            string[] expectedValues2 = new string[] { ConvertConstants.SINGLE_MIN_STRING, "0", "1", "1000", ConvertConstants.SINGLE_MAX_STRING, "-Infinity", "Infinity", ConvertConstants.SINGLE_EPSILON_STRING, "NaN" };

            for (int i = 0; i < testValues.Length; i++)
            {
                string result = Convert.ToString(testValues[i]);
                Assert.AreEqual(expectedValues1[i], result);

                result = Convert.ToString(testValues[i], NumberFormatInfo.CurrentInfo);
                Assert.AreEqual(expectedValues2[i], result);
            }
        }

        [Test]
        public static void FromDoubleArray()
        {
            double[] testValues = new double[] { -double.MaxValue, 0.0, 1.0, 1000.0, double.MaxValue, double.NegativeInfinity, double.PositiveInfinity, double.Epsilon, double.NaN };
            string[] expectedValues = new string[] { ConvertConstants.DOUBLE_MIN_STRING, "0", "1", "1000", ConvertConstants.DOUBLE_MAX_STRING, "-Infinity", "Infinity", ConvertConstants.DOUBLE_EPSILON_STRING, "NaN" };

            // Vanila Test Cases
            for (int i = 0; i < testValues.Length; i++)
            {
                string result = Convert.ToString(testValues[i], NumberFormatInfo.CurrentInfo);
                Assert.AreEqual(expectedValues[i], result);
            }
        }

        [Test]
        public static void FromDecimalArray()
        {
            decimal[] testValues = new decimal[] { decimal.MinValue, decimal.Parse("-1.234567890123456789012345678", NumberFormatInfo.InvariantInfo), (decimal)0.0, (decimal)1.0, (decimal)1000.0, decimal.MaxValue, decimal.One, decimal.Zero, decimal.MinusOne };
            string[] expectedValues = new string[] { ConvertConstants.DECIMAL_MIN_STRING, "-1.234567890123456789012345678", "0", "1", "1000", ConvertConstants.DECIMAL_MAX_STRING, "1", "0", "-1" };

            for (int i = 0; i < testValues.Length; i++)
            {
                string result = Convert.ToString(testValues[i]);
                Assert.AreEqual(expectedValues[i], result);
            }
        }

        [Test]
        public static void FromDateTimeArray()
        {
            DateTime[] testValues = new DateTime[] {
            DateTime.Parse("08/15/2000 16:59:59", DateTimeFormatInfo.InvariantInfo),
            DateTime.Parse("01/01/0001 01:01:01", DateTimeFormatInfo.InvariantInfo) };

            IFormatProvider formatProvider = DateTimeFormatInfo.InvariantInfo;

            for (int i = 0; i < testValues.Length; i++)
            {
                string result = Convert.ToString(testValues[i]);
                Assert.AreEqual(testValues[i].ToString(), result);
                result = Convert.ToString(testValues[i], formatProvider);
                string expected = testValues[i].ToString(null, formatProvider);
                Assert.AreEqual(expected, result);
            }
        }

        [Test]
        public static void FromString()
        {
            string[] testValues = new string[] { "Hello", " ", "", "\0" };

            for (int i = 0; i < testValues.Length; i++)
            {
                string result = Convert.ToString(testValues[i]);
                Assert.AreEqual(testValues[i].ToString(), result);
                result = Convert.ToString(testValues[i], NumberFormatInfo.CurrentInfo);
                Assert.AreEqual(testValues[i].ToString(), result);
            }
        }

        [Test]
        public static void FromIFormattable()
        {
            FooFormattable foo = new FooFormattable(3);
            string result = Convert.ToString(foo);
            Assert.AreEqual("FooFormattable: 3", result);
            result = Convert.ToString(foo, NumberFormatInfo.CurrentInfo);
            Assert.AreEqual("System.Globalization.NumberFormatInfo: 3", result);

            foo = null;
            result = Convert.ToString(foo, NumberFormatInfo.CurrentInfo);
            Assert.AreEqual("", result);
        }

        [Test]
        public static void FromNonIConvertible()
        {
            Foo foo = new Foo(3);
            string result = Convert.ToString(foo);
            Assert.AreEqual("Bridge.ClientTest.ConvertTests.ConvertToStringTests+Foo", result);
            result = Convert.ToString(foo, NumberFormatInfo.CurrentInfo);
            Assert.AreEqual("Bridge.ClientTest.ConvertTests.ConvertToStringTests+Foo", result);

            foo = null;
            result = Convert.ToString(foo, NumberFormatInfo.CurrentInfo);
            Assert.AreEqual("", result);
        }

        private class FooFormattable : IFormattable
        {
            private int _value;

            public FooFormattable(int value)
            {
                _value = value;
            }

            public string ToString(string format, IFormatProvider formatProvider)
            {
                if (formatProvider != null)
                {
                    return string.Format("{0}: {1}", formatProvider.GetType().FullName, _value);
                }
                else
                {
                    return string.Format("FooFormattable: {0}", (_value));
                }
            }

            public string Format(string format, IFormatProvider formatProvider)
            {
                return ToString(format, formatProvider);
            }
        }

        private class Foo
        {
            private int _value;

            public Foo(int value)
            {
                _value = value;
            }

            public string ToString(IFormatProvider provider)
            {
                if (provider != null)
                {
                    return string.Format("{0}: {1}", provider, _value);
                }
                else
                {
                    return string.Format("Foo: {0}", _value);
                }
            }
        }
    }
}