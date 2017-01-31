// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToInt16.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToInt16 - {0}")]
    public class ConvertToInt16Tests : ConvertTestBase<short>
    {
        [Test]
        public void FromBoolean()
        {
            bool[] testValues = { true, false };
            short[] expectedValues = { 1, 0 };
            VerifyViaObj(Convert.ToInt16, testValues, expectedValues);
        }

        [Test]
        public void FromByte()
        {
            byte[] testValues = { byte.MaxValue, byte.MinValue };
            short[] expectedValues = { 255, 0 };
            VerifyViaObj(Convert.ToInt16, testValues, expectedValues);
        }

        [Test]
        public void FromChar()
        {
            char[] testValues = { 'A', char.MinValue, };
            short[] expectedValues = { 65, (short)char.MinValue };
            VerifyViaObj(Convert.ToInt16, testValues, expectedValues);
        }

        [Test]
        public void FromDecimal()
        {
            decimal[] testValues = { 100m, -100m, 0m };
            short[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToInt16, testValues, expectedValues);

            decimal[] overflowValues = { decimal.MaxValue, decimal.MinValue };
            VerifyThrowsViaObj<OverflowException, decimal>(Convert.ToInt16, overflowValues);
        }

        [Test]
        public void FromDouble()
        {
            double[] testValues = { 100.0, -100.0, 0 };
            short[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToInt16, testValues, expectedValues);

            double[] overflowValues = { double.MaxValue, -double.MaxValue };
            VerifyThrowsViaObj<OverflowException, double>(Convert.ToInt16, overflowValues);
        }

        [Test]
        public void FromInt16()
        {
            short[] testValues = { short.MaxValue, short.MinValue, 0 };
            short[] expectedValues = { short.MaxValue, short.MinValue, 0 };
            VerifyViaObj(Convert.ToInt16, testValues, expectedValues);
        }

        [Test]
        public void FromInt32()
        {
            int[] testValues = { 100, -100, 0 };
            short[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToInt16, testValues, expectedValues);

            int[] overflowValues = { int.MaxValue, int.MinValue };
            VerifyThrowsViaObj<OverflowException, int>(Convert.ToInt16, overflowValues);
        }

        [Test]
        public void FromInt64()
        {
            long[] testValues = { 100, -100, 0 };
            short[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToInt16, testValues, expectedValues);

            long[] overflowValues = { long.MaxValue, long.MinValue };
            VerifyThrowsViaObj<OverflowException, long>(Convert.ToInt16, overflowValues);
        }

        [Test]
        public void FromObject()
        {
            object[] testValues = { null };
            short[] expectedValues = { 0 };
            VerifyFromObject(Convert.ToInt16, Convert.ToInt16, testValues, expectedValues);

            object[] invalidValues = { new object(), DateTime.Now };
            VerifyFromObjectThrows<InvalidCastException>(Convert.ToInt16, Convert.ToInt16, invalidValues);
        }

        [Test]
        public void FromSByte()
        {
            sbyte[] testValues = { 100, -100, 0 };
            short[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToInt16, testValues, expectedValues);
        }

        [Test]
        public void FromSingle()
        {
            float[] testValues = { 100.0f, -100.0f, 0.0f };
            short[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToInt16, testValues, expectedValues);

            float[] overflowValues = { float.MaxValue, float.MinValue };
            VerifyThrowsViaObj<OverflowException, float>(Convert.ToInt16, overflowValues);
        }

        [Test]
        public void FromString()
        {
            var shortMinValue = short.MinValue;
            var shortMaxValue = short.MaxValue;
            var intMinValue = int.MinValue;
            var intMaxValue = int.MaxValue;

            string[] testValues = { "100", "-100", "0", shortMinValue.ToString(), shortMaxValue.ToString(), null };
            short[] expectedValues = { 100, -100, 0, shortMinValue, shortMaxValue, 0 };
            VerifyFromString(Convert.ToInt16, Convert.ToInt16, testValues, expectedValues);

            string[] overflowValues = { intMinValue.ToString(), intMaxValue.ToString() };
            VerifyFromStringThrows<OverflowException>(Convert.ToInt16, Convert.ToInt16, overflowValues);

            string[] formatExceptionValues = { "abba" };
            VerifyFromStringThrows<FormatException>(Convert.ToInt16, Convert.ToInt16, formatExceptionValues);
        }

        [Test]
        public void FromStringWithBase()
        {
            string[] testValues = {
                null, null, null, null,
                ConvertConstants.INT16_MAX_STRING_BASE_16, short.MaxValue.ToString(), ConvertConstants.INT16_MAX_STRING_BASE_8, ConvertConstants.INT16_MAX_STRING_BASE_2,
                ConvertConstants.INT16_MIN_STRING_BASE_16, short.MinValue.ToString(), ConvertConstants.INT16_MIN_STRING_BASE_8, ConvertConstants.INT16_MIN_STRING_BASE_2,
            };
            int[] testBases = {
                10, 2, 8, 16,
                16, 10, 8, 2,
                16, 10, 8, 2
            };
            short[] expectedValues = {
                0, 0, 0, 0,
                short.MaxValue, short.MaxValue, short.MaxValue, short.MaxValue,
                short.MinValue, short.MinValue, short.MinValue, short.MinValue
            };
            VerifyFromStringWithBase(Convert.ToInt16, testValues, testBases, expectedValues);

            string[] overflowValues = { ConvertConstants.INT16_OVERFLOW_MAX_STRING, ConvertConstants.INT16_OVERFLOW_MIN_STRING, ConvertConstants.INT16_OVERFLOW_MAX_STRING_BASE_2, ConvertConstants.INT16_OVERFLOW_MAX_STRING_BASE_16, ConvertConstants.INT16_OVERFLOW_MAX_STRING_BASE_8 };
            int[] overflowBases = { 10, 10, 2, 16, 8 };
            VerifyFromStringWithBaseThrows<OverflowException>(Convert.ToInt16, overflowValues, overflowBases);

            string[] formatExceptionValues = { "12", "ffffffffffffffffffff" };
            int[] formatExceptionBases = { 2, 8 };
            VerifyFromStringWithBaseThrows<FormatException>(Convert.ToInt16, formatExceptionValues, formatExceptionBases);

            string[] argumentExceptionValues = { "10", "11", "abba", "-ab" };
            int[] argumentExceptionBases = { -1, 3, 0, 16 };
            VerifyFromStringWithBaseThrows<ArgumentException>(Convert.ToInt16, argumentExceptionValues, argumentExceptionBases);
        }

        [Test]
        public void FromUInt16()
        {
            ushort[] testValues = { 100, 0 };
            short[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToInt16, testValues, expectedValues);

            ushort[] overflowValues = { ushort.MaxValue };
            VerifyThrowsViaObj<OverflowException, ushort>(Convert.ToInt16, overflowValues);
        }

        [Test]
        public void FromUInt32()
        {
            uint[] testValues = { 100, 0 };
            short[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToInt16, testValues, expectedValues);

            uint[] overflowValues = { uint.MaxValue };
            VerifyThrowsViaObj<OverflowException, uint>(Convert.ToInt16, overflowValues);
        }

        [Test]
        public void FromUInt64()
        {
            ulong[] testValues = { 100, 0 };
            short[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToInt16, testValues, expectedValues);

            ulong[] overflowValues = { ulong.MaxValue };
            VerifyThrowsViaObj<OverflowException, ulong>(Convert.ToInt16, overflowValues);
        }
    }
}