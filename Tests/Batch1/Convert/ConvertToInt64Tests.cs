// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToInt64.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToInt64 - {0}")]
    public class ConvertToInt64Tests : ConvertTestBase<long>
    {
        [Test]
        public void FromBoolean()
        {
            bool[] testValues = { true, false };
            long[] expectedValues = { 1, 0 };
            VerifyViaObj(Convert.ToInt64, testValues, expectedValues);
        }

        [Test]
        public void FromByte()
        {
            byte[] testValues = { byte.MaxValue, byte.MinValue };
            long[] expectedValues = { 255, 0 };
            VerifyViaObj(Convert.ToInt64, testValues, expectedValues);
        }

        [Test]
        public void FromChar()
        {
            char[] testValues = { char.MaxValue, char.MinValue, 'b' };
            long[] expectedValues = { char.MaxValue, char.MinValue, 98 };
            VerifyViaObj(Convert.ToInt64, testValues, expectedValues);
        }

        [Test]
        public void FromDecimal()
        {
            decimal[] testValues = { 100m, -100m, 0m };
            long[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToInt64, testValues, expectedValues);

            decimal[] overflowValues = { decimal.MaxValue, decimal.MinValue };
            VerifyThrowsViaObj<OverflowException, decimal>(Convert.ToInt64, overflowValues);
        }

        [Test]
        public void FromDouble()
        {
            double[] testValues = { 100.0, -100.0, 0 };
            long[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToInt64, testValues, expectedValues);

            double[] overflowValues = { double.MaxValue, -double.MaxValue };
            VerifyThrowsViaObj<OverflowException, double>(Convert.ToInt64, overflowValues);
        }

        [Test]
        public void FromInt16()
        {
            short[] testValues = { 100, -100, 0, };
            long[] expectedValues = { 100, -100, 0, };
            VerifyViaObj(Convert.ToInt64, testValues, expectedValues);
        }

        [Test]
        public void FromInt32()
        {
            int[] testValues = { int.MaxValue, int.MinValue, 0 };
            long[] expectedValues = { int.MaxValue, int.MinValue, 0 };
            VerifyViaObj(Convert.ToInt64, testValues, expectedValues);
        }

        [Test]
        public void FromInt64()
        {
            long[] testValues = { long.MaxValue, long.MinValue, 0 };
            long[] expectedValues = { long.MaxValue, long.MinValue, 0 };
            VerifyViaObj(Convert.ToInt64, testValues, expectedValues);
        }

        [Test]
        public void FromObject()
        {
            object[] testValues = { null };
            long[] expectedValues = { 0 };
            VerifyFromObject(Convert.ToInt64, Convert.ToInt64, testValues, expectedValues);

            object[] invalidValues = { new object(), DateTime.Now };
            VerifyFromObjectThrows<InvalidCastException>(Convert.ToInt64, Convert.ToInt64, invalidValues);
        }

        [Test]
        public void FromSByte()
        {
            sbyte[] testValues = { 100, -100, 0 };
            long[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToInt64, testValues, expectedValues);
        }

        [Test]
        public void FromSingle()
        {
            float[] testValues = { 100.0f, -100.0f, 0.0f, };
            long[] expectedValues = { 100, -100, 0, };
            VerifyViaObj(Convert.ToInt64, testValues, expectedValues);

            float[] overflowValues = { float.MaxValue, float.MinValue };
            VerifyThrowsViaObj<OverflowException, float>(Convert.ToInt64, overflowValues);
        }

        [Test]
        public void FromString()
        {
            var longMinValue = Int64.MinValue;
            var longMaxValue = Int64.MaxValue;

            string[] testValues = { "100", "-100", "0", longMinValue.ToString(), longMaxValue.ToString(), null };
            long[] expectedValues = { 100, -100, 0, longMinValue, longMaxValue, 0 };
            VerifyFromString(Convert.ToInt64, Convert.ToInt64, testValues, expectedValues, useTrue: true);

            string[] overflowValues = { ConvertConstants.INT64_OVERFLOW_MAX_STRING, ConvertConstants.INT64_OVERFLOW_MIN_STRING };
            VerifyFromStringThrows<OverflowException>(Convert.ToInt64, Convert.ToInt64, overflowValues);

            string[] formatExceptionValues = { "abba" };
            VerifyFromStringThrows<FormatException>(Convert.ToInt64, Convert.ToInt64, formatExceptionValues);
        }

        [Test]
        public void FromStringWithBase()
        {
            var minSafeValue = Int64.MinValue;
            var maxSafeValue = Int64.MaxValue;

            string[] testValues = {
                null, null, null, null,
                ConvertConstants.INT64_MAX_STRING_BASE_16, maxSafeValue.ToString(), ConvertConstants.INT64_MAX_STRING_BASE_8, ConvertConstants.INT64_MAX_STRING_BASE_2,
                ConvertConstants.INT64_MIN_STRING_BASE_16, minSafeValue.ToString(), ConvertConstants.INT64_MIN_STRING_BASE_8, ConvertConstants.INT64_MIN_STRING_BASE_2
            };
            int[] testBases = {
                10, 2, 8, 16,
                16, 10, 8, 2,
                16, 10, 8, 2
            };
            long[] expectedValues = {0, 0, 0, 0,
                maxSafeValue, maxSafeValue, maxSafeValue, maxSafeValue,
                minSafeValue, minSafeValue, minSafeValue, minSafeValue
            };
            VerifyFromStringWithBase(Convert.ToInt64, testValues, testBases, expectedValues, true);

            string[] overflowValues = { "FFE0000000000001", "1777400000000000000001", "1111111111100000000000000000000000000000000000000000000000000001", "9223372036854775808", "-9223372036854775809", "11111111111111111111111111111111111111111111111111111111111111111", "1FFFFffffFFFFffff", "7777777777777777777777777" };
            int[] overflowBases = { 16, 8, 2, 10, 10, 2, 16, 8 };
            VerifyFromStringWithBaseThrows<OverflowException>(Convert.ToInt64, overflowValues, overflowBases);

            string[] formatExceptionValues = { "12", "ffffffffffffffffffff" };
            int[] formatExceptionBases = { 2, 8 };
            VerifyFromStringWithBaseThrows<FormatException>(Convert.ToInt64, formatExceptionValues, formatExceptionBases);

            string[] argumentExceptionValues = { "10", "11", "abba", "-ab" };
            int[] argumentExceptionBases = { -1, 3, 0, 16 };
            VerifyFromStringWithBaseThrows<ArgumentException>(Convert.ToInt64, argumentExceptionValues, argumentExceptionBases);
        }

        [Test]
        public void FromUInt16()
        {
            ushort[] testValues = { 100, 0 };
            long[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToInt64, testValues, expectedValues);
        }

        [Test]
        public void FromUInt32()
        {
            uint[] testValues = { 100, 0 };
            long[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToInt64, testValues, expectedValues);
        }

        [Test]
        public void FromUInt64()
        {
            ulong[] testValues = { 100, 0 };
            long[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToInt64, testValues, expectedValues);

            ulong[] overflowValues = { (ulong)long.MaxValue + 1 };
            VerifyThrowsViaObj<OverflowException, ulong>(Convert.ToInt64, overflowValues);
        }
    }
}