// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToInt32.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToInt32 - {0}")]
    public class ConvertToInt32Tests : ConvertTestBase<int>
    {
        [Test]
        public void FromBoolean()
        {
            bool[] testValues = { true, false };
            int[] expectedValues = { 1, 0 };
            VerifyViaObj(Convert.ToInt32, testValues, expectedValues);
        }

        [Test]
        public void FromByte()
        {
            byte[] testValues = { byte.MaxValue, byte.MinValue };
            int[] expectedValues = { 255, 0 };
            VerifyViaObj(Convert.ToInt32, testValues, expectedValues);
        }

        [Test]
        public void FromChar()
        {
            char[] testValues = { char.MinValue, char.MaxValue, 'b' };
            int[] expectedValues = { char.MinValue, char.MaxValue, 98 };
            VerifyViaObj(Convert.ToInt32, testValues, expectedValues);
        }

        [Test]
        public void FromDecimal()
        {
            decimal[] testValues = { 100m, -100m, 0m };
            int[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToInt32, testValues, expectedValues);

            decimal[] overflowValues = { decimal.MaxValue, decimal.MinValue };
            VerifyThrowsViaObj<OverflowException, decimal>(Convert.ToInt32, overflowValues);
        }

        [Test]
        public void FromDouble()
        {
            double[] testValues = { 100.0, -100.0, 0 };
            int[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToInt32, testValues, expectedValues);

            double[] overflowValues = { double.MaxValue, -double.MaxValue };
            VerifyThrowsViaObj<OverflowException, double>(Convert.ToInt32, overflowValues);
        }

        [Test]
        public void FromInt16()
        {
            short[] testValues = { 100, -100, 0, };
            int[] expectedValues = { 100, -100, 0, };
            VerifyViaObj(Convert.ToInt32, testValues, expectedValues);
        }

        [Test]
        public void FromInt32()
        {
            int[] testValues = { int.MaxValue, int.MinValue, 0 };
            int[] expectedValues = { int.MaxValue, int.MinValue, 0 };
            VerifyViaObj(Convert.ToInt32, testValues, expectedValues);
        }

        [Test]
        public void FromInt64()
        {
            long[] testValues = { 100, -100, 0 };
            int[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToInt32, testValues, expectedValues);

            long[] overflowValues = { long.MaxValue, long.MinValue };
            VerifyThrowsViaObj<OverflowException, long>(Convert.ToInt32, overflowValues);
        }

        [Test]
        public void FromObject()
        {
            object[] testValues = { null };
            int[] expectedValues = { 0 };
            VerifyFromObject(Convert.ToInt32, Convert.ToInt32, testValues, expectedValues);

            object[] invalidValues = { new object() };
            VerifyFromObjectThrows<InvalidCastException>(Convert.ToInt32, Convert.ToInt32, invalidValues);
        }

        [Test]
        public void FromSByte()
        {
            sbyte[] testValues = { 100, -100, 0 };
            int[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToInt32, testValues, expectedValues);
        }

        [Test]
        public void FromSingle()
        {
            float[] testValues = { 100.0f, -100.0f, 0.0f };
            int[] expectedValues = { 100, -100, 0 };
            VerifyViaObj(Convert.ToInt32, testValues, expectedValues);

            float[] overflowValues = { float.MaxValue, float.MinValue };
            VerifyThrowsViaObj<OverflowException, float>(Convert.ToInt32, overflowValues);
        }

        [Test]
        public void FromString()
        {
            var intMinValue = int.MinValue;
            var intMaxValue = int.MaxValue;
            var longMinValue = long.MinValue;
            var longMaxValue = long.MaxValue;

            string[] testValues = { "100", "-100", "0", intMinValue.ToString(), intMaxValue.ToString(), null };
            int[] expectedValues = { 100, -100, 0, intMinValue, intMaxValue, 0 };
            VerifyFromString(Convert.ToInt32, Convert.ToInt32, testValues, expectedValues);

            string[] overflowValues = { longMinValue.ToString(), longMaxValue.ToString() };
            VerifyFromStringThrows<OverflowException>(Convert.ToInt32, Convert.ToInt32, overflowValues);

            string[] formatExceptionValues = { "abba" };
            VerifyFromStringThrows<FormatException>(Convert.ToInt32, Convert.ToInt32, formatExceptionValues);
        }

        [Test]
        public void FromStringWithBase()
        {
            string[] testValues = {
                null, null, null, null,
                ConvertConstants.INT32_MAX_STRING_BASE_16, int.MaxValue.ToString(), ConvertConstants.INT32_MAX_STRING_BASE_8, ConvertConstants.INT32_MAX_STRING_BASE_2,
                ConvertConstants.INT32_MIN_STRING_BASE_16, int.MinValue.ToString(), ConvertConstants.INT32_MIN_STRING_BASE_8, ConvertConstants.INT32_MIN_STRING_BASE_2
            };
            int[] testBases = {
                10, 2, 8, 16,
                16, 10, 8, 2,
                16, 10, 8, 2
            };
            int[] expectedValues = {
                0, 0, 0, 0,
                int.MaxValue, int.MaxValue, int.MaxValue, int.MaxValue,
                int.MinValue, int.MinValue, int.MinValue, int.MinValue
            };
            VerifyFromStringWithBase(Convert.ToInt32, testValues, testBases, expectedValues);

            string[] overflowValues = { ConvertConstants.INT32_OVERFLOW_MAX_STRING, ConvertConstants.INT32_OVERFLOW_MIN_STRING, ConvertConstants.INT32_OVERFLOW_MAX_STRING_BASE_2, ConvertConstants.INT32_OVERFLOW_MAX_STRING_BASE_16, ConvertConstants.INT32_OVERFLOW_MAX_STRING_BASE_8 };
            int[] overflowBases = { 10, 10, 2, 16, 8 };
            VerifyFromStringWithBaseThrows<OverflowException>(Convert.ToInt32, overflowValues, overflowBases);

            string[] formatExceptionValues = { "12", "ffffffffffffffffffff" };
            int[] formatExceptionBases = { 2, 8 };
            VerifyFromStringWithBaseThrows<FormatException>(Convert.ToInt32, formatExceptionValues, formatExceptionBases);

            string[] argumentExceptionValues = { "10", "11", "abba", "-ab" };
            int[] argumentExceptionBases = { -1, 3, 0, 16 };
            VerifyFromStringWithBaseThrows<ArgumentException>(Convert.ToInt32, argumentExceptionValues, argumentExceptionBases);
        }

        [Test]
        public void FromUInt16()
        {
            ushort[] testValues = { 100, 0 };
            int[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToInt32, testValues, expectedValues);
        }

        [Test]
        public void FromUInt32()
        {
            uint[] testValues = { 100, 0 };
            int[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToInt32, testValues, expectedValues);

            uint[] overflowValues = { uint.MaxValue };
            VerifyThrowsViaObj<OverflowException, uint>(Convert.ToInt32, overflowValues);
        }

        [Test]
        public void FromUInt64()
        {
            ulong[] testValues = { 100, 0 };
            int[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToInt32, testValues, expectedValues);

            ulong[] overflowValues = { ulong.MaxValue };
            VerifyThrowsViaObj<OverflowException, ulong>(Convert.ToInt32, overflowValues);
        }
    }
}