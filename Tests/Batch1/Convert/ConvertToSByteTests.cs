// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToSByte.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToSByte - {0}")]
    public class ConvertToSByteTests : ConvertTestBase<sbyte>
    {
        [Test]
        public void FromBoolean()
        {
            bool[] testValues = { true, false };
            sbyte[] expectedValues = { 1, 0 };
            VerifyViaObj(Convert.ToSByte, testValues, expectedValues);
        }

        [Test]
        public void FromByte()
        {
            byte[] testValues = { 100, 0 };
            sbyte[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToSByte, testValues, expectedValues);

            byte[] overflowValues = { byte.MaxValue };
            VerifyThrowsViaObj<OverflowException, byte>(Convert.ToSByte, overflowValues);
        }

        [Test]
        public void FromChar()
        {
            char[] testValues = { 'A', char.MinValue, };
            sbyte[] expectedValues = { 65, (sbyte)char.MinValue };
            VerifyViaObj(Convert.ToSByte, testValues, expectedValues);
        }

        [Test]
        public void FromDecimal()
        {
            decimal[] testValues = { 100m, -100m, 0m };
            sbyte[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToSByte, testValues, expectedValues);

            decimal[] overflowValues = { decimal.MaxValue, decimal.MinValue };
            VerifyThrowsViaObj<OverflowException, decimal>(Convert.ToSByte, overflowValues);
        }

        [Test]
        public void FromDouble()
        {
            double[] testValues = { 100.0, -100.0, 0 };
            sbyte[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToSByte, testValues, expectedValues);

            double[] overflowValues = { double.MaxValue, -double.MaxValue };
            VerifyThrowsViaObj<OverflowException, double>(Convert.ToSByte, overflowValues);
        }

        [Test]
        public void FromInt16()
        {
            short[] testValues = { 100, -100, 0 };
            sbyte[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToSByte, testValues, expectedValues);

            long[] overflowValues = { long.MaxValue, long.MinValue };
            VerifyThrowsViaObj<OverflowException, long>(Convert.ToSByte, overflowValues);
        }

        [Test]
        public void FromInt32()
        {
            int[] testValues = { 100, -100, 0 };
            sbyte[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToSByte, testValues, expectedValues);

            int[] overflowValues = { int.MaxValue, int.MinValue };
            VerifyThrowsViaObj<OverflowException, int>(Convert.ToSByte, overflowValues);
        }

        [Test]
        public void FromInt64()
        {
            long[] testValues = { 100, -100, 0 };
            sbyte[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToSByte, testValues, expectedValues);

            long[] overflowValues = { long.MaxValue, long.MinValue };
            VerifyThrowsViaObj<OverflowException, long>(Convert.ToSByte, overflowValues);
        }

        [Test]
        public void FromObject()
        {
            object[] testValues = { null };
            sbyte[] expectedValues = { 0 };
            VerifyFromObject(Convert.ToSByte, Convert.ToSByte, testValues, expectedValues);

            object[] invalidValues = { new object(), DateTime.Now };
            VerifyFromObjectThrows<InvalidCastException>(Convert.ToSByte, Convert.ToSByte, invalidValues);
        }

        [Test]
        public void FromSByte()
        {
            sbyte[] testValues = { sbyte.MaxValue, sbyte.MinValue };
            sbyte[] expectedValues = { sbyte.MaxValue, sbyte.MinValue };
            VerifyViaObj(Convert.ToSByte, testValues, expectedValues);
        }

        [Test]
        public void FromSingle()
        {
            float[] testValues = { 100.0f, -100.0f, 0.0f, };
            sbyte[] expectedValues = { 100, -100, 0, };
            VerifyViaObj(Convert.ToSByte, testValues, expectedValues);

            float[] overflowValues = { float.MaxValue, float.MinValue };
            VerifyThrowsViaObj<OverflowException, float>(Convert.ToSByte, overflowValues);
        }

        [Test]
        public void FromString()
        {
            var sbyteMinValue = sbyte.MinValue;
            var sbyteMaxValue = sbyte.MaxValue;
            var shortMinValue = short.MinValue;
            var shortMaxValue = short.MaxValue;

            string[] testValues = { "100", "-100", "0", sbyteMinValue.ToString(), sbyteMaxValue.ToString() };
            sbyte[] expectedValues = { 100, -100, 0, sbyteMinValue, sbyteMaxValue };
            VerifyFromString(Convert.ToSByte, Convert.ToSByte, testValues, expectedValues);

            string[] overflowValues = { shortMinValue.ToString(), shortMaxValue.ToString() };
            VerifyFromStringThrows<OverflowException>(Convert.ToSByte, Convert.ToSByte, overflowValues);

            string[] formatExceptionValues = { "abba" };
            VerifyFromStringThrows<FormatException>(Convert.ToSByte, Convert.ToSByte, formatExceptionValues);

            // Note: Only the Convert.ToSByte(String, IFormatProvider) overload throws an ArgumentNullException.
            // This is inconsistent with the other numeric conversions, but fixing this behavior is not worth making
            // a breaking change which will affect the desktop CLR.
            VerifyThrows<ArgumentNullException, string>(input => Convert.ToSByte(input, TestFormatProvider.s_instance), new string[] { null });
        }

        [Test]
        public void FromStringWithBase()
        {
            string[] testValues = { null, null, null, null, ConvertConstants.INT8_MAX_STRING_BASE_16, sbyte.MaxValue.ToString(), ConvertConstants.INT8_MAX_STRING_BASE_8, ConvertConstants.INT8_MAX_STRING_BASE_2, ConvertConstants.INT8_MIN_STRING_BASE_16, sbyte.MinValue.ToString(), ConvertConstants.INT8_MIN_STRING_BASE_8, ConvertConstants.INT8_MIN_STRING_BASE_2 };
            int[] testBases = { 10, 2, 8, 16, 16, 10, 8, 2, 16, 10, 8, 2 };
            sbyte[] expectedValues = { 0, 0, 0, 0, sbyte.MaxValue, sbyte.MaxValue, sbyte.MaxValue, sbyte.MaxValue, sbyte.MinValue, sbyte.MinValue, sbyte.MinValue, sbyte.MinValue };
            VerifyFromStringWithBase(Convert.ToSByte, testValues, testBases, expectedValues);

            string[] overflowValues = { ConvertConstants.INT8_OVERFLOW_MAX_STRING, ConvertConstants.INT8_OVERFLOW_MIN_STRING, ConvertConstants.INT8_OVERFLOW_MAX_STRING_BASE_2, ConvertConstants.INT8_OVERFLOW_MAX_STRING_BASE_16, ConvertConstants.INT8_OVERFLOW_MAX_STRING_BASE_8 };
            int[] overflowBases = { 10, 10, 2, 16, 8 };
            VerifyFromStringWithBaseThrows<OverflowException>(Convert.ToSByte, overflowValues, overflowBases);

            string[] formatExceptionValues = { "12", "ffffffffffffffffffff" };
            int[] formatExceptionBases = { 2, 8 };
            VerifyFromStringWithBaseThrows<FormatException>(Convert.ToSByte, formatExceptionValues, formatExceptionBases);

            string[] argumentExceptionValues = { "10", "11", "abba", "-ab" };
            int[] argumentExceptionBases = { -1, 3, 0, 16 };
            VerifyFromStringWithBaseThrows<ArgumentException>(Convert.ToSByte, argumentExceptionValues, argumentExceptionBases);
        }

        [Test]
        public void FromUInt16()
        {
            ushort[] testValues = { 100, 0 };
            sbyte[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToSByte, testValues, expectedValues);

            ushort[] overflowValues = { ushort.MaxValue };
            VerifyThrowsViaObj<OverflowException, ushort>(Convert.ToSByte, overflowValues);
        }

        [Test]
        public void FromUInt32()
        {
            uint[] testValues = { 100, 0 };
            sbyte[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToSByte, testValues, expectedValues);

            uint[] overflowValues = { uint.MaxValue };
            VerifyThrowsViaObj<OverflowException, uint>(Convert.ToSByte, overflowValues);
        }

        [Test]
        public void FromUInt64()
        {
            ulong[] testValues = { 100, 0 };
            sbyte[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToSByte, testValues, expectedValues);

            ulong[] overflowValues = { ulong.MaxValue };
            VerifyThrowsViaObj<OverflowException, ulong>(Convert.ToSByte, overflowValues);
        }
    }
}