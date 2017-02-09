// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToUInt16.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToUInt16 - {0}")]
    public class ConvertToUInt16Tests : ConvertTestBase<ushort>
    {
        [Test]
        public void FromBoolean()
        {
            bool[] testValues = { true, false };
            ushort[] expectedValues = { 1, 0 };
            VerifyViaObj(Convert.ToUInt16, testValues, expectedValues);
        }

        [Test]
        public void FromByte()
        {
            byte[] testValues = { byte.MaxValue, byte.MinValue };
            ushort[] expectedValues = { 255, 0 };
            VerifyViaObj(Convert.ToUInt16, testValues, expectedValues);
        }

        [Test]
        public void FromChar()
        {
            char[] testValues = { char.MaxValue, char.MinValue, 'b' };
            ushort[] expectedValues = { char.MaxValue, char.MinValue, 98 };
            VerifyViaObj(Convert.ToUInt16, testValues, expectedValues);
        }

        [Test]
        public void FromDecimal()
        {
            decimal[] testValues = { 1000m, 0m };
            ushort[] expectedValues = { 1000, 0 };
            VerifyViaObj(Convert.ToUInt16, testValues, expectedValues);

            decimal[] overflowValues = { decimal.MaxValue, decimal.MinValue };
            VerifyThrowsViaObj<OverflowException, decimal>(Convert.ToUInt16, overflowValues);
        }

        [Test]
        public void FromDouble()
        {
            double[] testValues = { 1000.0, 0.0 };
            ushort[] expectedValues = { 1000, 0 };
            VerifyViaObj(Convert.ToUInt16, testValues, expectedValues);

            double[] overflowValues = { double.MaxValue, -100.0 };
            VerifyThrowsViaObj<OverflowException, double>(Convert.ToUInt16, overflowValues);
        }

        [Test]
        public void FromInt16()
        {
            short[] testValues = { 1000, 0, short.MaxValue };
            ushort[] expectedValues = { 1000, 0, (ushort)short.MaxValue };
            VerifyViaObj(Convert.ToUInt16, testValues, expectedValues);

            short[] overflowValues = { short.MinValue };
            VerifyThrowsViaObj<OverflowException, short>(Convert.ToUInt16, overflowValues);
        }

        [Test]
        public void FromInt32()
        {
            int[] testValues = { 1000, 0 };
            ushort[] expectedValues = { 1000, 0 };
            VerifyViaObj(Convert.ToUInt16, testValues, expectedValues);

            int[] overflowValues = { int.MinValue, int.MaxValue };
            VerifyThrowsViaObj<OverflowException, int>(Convert.ToUInt16, overflowValues);
        }

        [Test]
        public void FromInt64()
        {
            long[] testValues = { 1000, 0 };
            ushort[] expectedValues = { 1000, 0 };
            VerifyViaObj(Convert.ToUInt16, testValues, expectedValues);

            long[] overflowValues = { long.MinValue, long.MaxValue };
            VerifyThrowsViaObj<OverflowException, long>(Convert.ToUInt16, overflowValues);
        }

        [Test]
        public void FromObject()
        {
            object[] testValues = { null };
            ushort[] expectedValues = { 0 };
            VerifyFromObject(Convert.ToUInt16, Convert.ToUInt16, testValues, expectedValues);

            object[] invalidValues = { new object(), DateTime.Now };
            VerifyFromObjectThrows<InvalidCastException>(Convert.ToUInt16, Convert.ToUInt16, invalidValues);
        }

        [Test]
        public void FromSByte()
        {
            sbyte[] testValues = { 100, 0 };
            ushort[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToUInt16, testValues, expectedValues);

            sbyte[] values = { sbyte.MinValue };
            VerifyThrowsViaObj<OverflowException, sbyte>(Convert.ToUInt16, values);
        }

        [Test]
        public void FromSingle()
        {
            float[] testValues = { 1000.0f, 0.0f };
            ushort[] expectedValues = { 1000, 0 };
            VerifyViaObj(Convert.ToUInt16, testValues, expectedValues);

            float[] values = { float.MaxValue, -100.0f };
            VerifyThrowsViaObj<OverflowException, float>(Convert.ToUInt16, values);
        }

        [Test]
        public void FromString()
        {
            var ushortMaxValue = ushort.MaxValue;

            string[] testValues = { "1000", ushort.MinValue.ToString(), ushortMaxValue.ToString(), null };
            ushort[] expectedValues = { 1000, ushort.MinValue, ushortMaxValue, 0 };
            VerifyFromString(Convert.ToUInt16, Convert.ToUInt16, testValues, expectedValues);

            string[] overflowValues = { ConvertConstants.UINT16_OVERFLOW_MIN_STRING, decimal.MaxValue.ToFixed(0, MidpointRounding.AwayFromZero) };
            VerifyFromStringThrows<OverflowException>(Convert.ToUInt16, Convert.ToUInt16, overflowValues);

            string[] formatExceptionValues = { "abba" };
            VerifyFromStringThrows<FormatException>(Convert.ToUInt16, Convert.ToUInt16, formatExceptionValues);
        }

        [Test]
        public void FromStringWithBase()
        {
            string[] testValues = { null, null, null, null, ConvertConstants.UINT16_MAX_STRING_BASE_16, ushort.MaxValue.ToString(), ConvertConstants.UINT16_MAX_STRING_BASE_8, ConvertConstants.UINT16_MAX_STRING_BASE_2, ushort.MinValue.ToString(), ushort.MinValue.ToString(), ushort.MinValue.ToString(), ushort.MinValue.ToString() };
            int[] testBases = { 10, 2, 8, 16, 16, 10, 8, 2, 16, 10, 8, 2 };
            ushort[] expectedValues = { 0, 0, 0, 0, ushort.MaxValue, ushort.MaxValue, ushort.MaxValue, ushort.MaxValue, ushort.MinValue, ushort.MinValue, ushort.MinValue, ushort.MinValue };
            VerifyFromStringWithBase(Convert.ToUInt16, testValues, testBases, expectedValues);

            string[] overflowValues = { ConvertConstants.UINT16_OVERFLOW_MAX_STRING, ConvertConstants.UINT16_OVERFLOW_MIN_STRING, ConvertConstants.UINT16_OVERFLOW_MAX_STRING_BASE_2, ConvertConstants.UINT16_OVERFLOW_MAX_STRING_BASE_16, ConvertConstants.UINT16_OVERFLOW_MAX_STRING_BASE_8 };
            int[] overflowBases = { 10, 10, 2, 16, 8 };
            VerifyFromStringWithBaseThrows<OverflowException>(Convert.ToUInt16, overflowValues, overflowBases);

            string[] formatExceptionValues = { "12", "ffffffffffffffffffff" };
            int[] formatExceptionBases = { 2, 8 };
            VerifyFromStringWithBaseThrows<FormatException>(Convert.ToUInt16, formatExceptionValues, formatExceptionBases);

            string[] argumentExceptionValues = { "10", "11", "abba", "-ab" };
            int[] argumentExceptionBases = { -1, 3, 0, 16 };
            VerifyFromStringWithBaseThrows<ArgumentException>(Convert.ToUInt16, argumentExceptionValues, argumentExceptionBases);
        }

        [Test]
        public void FromUInt16()
        {
            ushort[] testValues = { ushort.MaxValue, ushort.MinValue };
            ushort[] expectedValues = { ushort.MaxValue, ushort.MinValue };
            VerifyViaObj(Convert.ToUInt16, testValues, expectedValues);
        }

        [Test]
        public void FromUInt32()
        {
            uint[] testValues = { 100, 0 };
            ushort[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToUInt16, testValues, expectedValues);

            uint[] overflowValues = { uint.MaxValue };
            VerifyThrowsViaObj<OverflowException, uint>(Convert.ToUInt16, overflowValues);
        }

        [Test]
        public void FromUInt64()
        {
            ulong[] testValues = { 100, 0 };
            ushort[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToUInt16, testValues, expectedValues);

            ulong[] overflowValues = { ulong.MaxValue };
            VerifyThrowsViaObj<OverflowException, ulong>(Convert.ToUInt16, overflowValues);
        }
    }
}