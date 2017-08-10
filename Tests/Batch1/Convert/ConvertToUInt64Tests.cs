// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToUInt64.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToUInt64 - {0}")]
    public class ConvertToUInt64Tests : ConvertTestBase<ulong>
    {
        [Test]
        public void FromBoolean()
        {
            bool[] testValues = { true, false };
            ulong[] expectedValues = { 1, 0 };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);
        }

        [Test]
        public void FromByte()
        {
            byte[] testValues = { byte.MaxValue, byte.MinValue };
            ulong[] expectedValues = { byte.MaxValue, byte.MinValue };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);
        }

        [Test]
        public void FromChar()
        {
            char[] testValues = { char.MaxValue, char.MinValue, 'b' };
            ulong[] expectedValues = { char.MaxValue, char.MinValue, 98 };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);
        }

        [Test]
        public void FromDecimal()
        {
            decimal[] testValues = { 1000m, 0m };
            ulong[] expectedValues = { 1000, 0 };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);

            decimal[] overflowValues = { decimal.MinValue, decimal.MaxValue };
            VerifyThrowsViaObj<OverflowException, decimal>(Convert.ToUInt64, overflowValues);
        }

        [Test]
        public void FromDouble()
        {
            double[] testValues = { 1000.0, 0.0 };
            ulong[] expectedValues = { (ulong)1000, (ulong)0 };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);

            double[] overflowValues = { double.MaxValue, -100.0 };
            VerifyThrowsViaObj<OverflowException, double>(Convert.ToUInt64, overflowValues);
        }

        [Test]
        public void FromInt16()
        {
            short[] testValues = { 1000, 0, short.MaxValue };
            ulong[] expectedValues = { 1000, 0, (ulong)short.MaxValue };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);

            short[] overflowValues = { short.MinValue };
            VerifyThrowsViaObj<OverflowException, short>(Convert.ToUInt64, overflowValues);
        }

        [Test]
        public void FromInt32()
        {
            int[] testValues = { 1000, 0, int.MaxValue };
            ulong[] expectedValues = { 1000, 0, int.MaxValue };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);

            int[] overflowValues = { int.MinValue };
            VerifyThrowsViaObj<OverflowException, int>(Convert.ToUInt64, overflowValues);
        }

        [Test]
        public void FromInt64()
        {
            long[] testValues = { 1000, 0, long.MaxValue };
            ulong[] expectedValues = { 1000, 0, long.MaxValue };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);

            long[] overflowValues = { long.MinValue };
            VerifyThrowsViaObj<OverflowException, long>(Convert.ToUInt64, overflowValues);
        }

        [Test]
        public void FromObject()
        {
            object[] testValues = { null };
            ulong[] expectedValues = { 0 };
            VerifyFromObject(Convert.ToUInt64, Convert.ToUInt64, testValues, expectedValues);

            object[] invalidValues = { new object(), DateTime.Now };
            VerifyFromObjectThrows<InvalidCastException>(Convert.ToUInt64, Convert.ToUInt64, invalidValues);
        }

        [Test]
        public void FromSByte()
        {
            sbyte[] testValues = { 100, 0 };
            ulong[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);

            sbyte[] overflowValues = { sbyte.MinValue };
            VerifyThrowsViaObj<OverflowException, sbyte>(Convert.ToUInt64, overflowValues);
        }

        [Test]
        public void FromSingle()
        {
            float[] testValues = { 1000.0f, 0.0f };
            ulong[] expectedValues = { 1000, 0 };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);

            float[] overflowValues = { float.MaxValue, -100.0f };
            VerifyThrowsViaObj<OverflowException, float>(Convert.ToUInt64, overflowValues);
        }

        [Test]
        public void FromString()
        {
            var ushortMaxValue = ushort.MaxValue;
            var uintMaxValue = uint.MaxValue;

            string[] testValues = { "1000", "0", ushortMaxValue.ToString(), uintMaxValue.ToString(), null, "0000000000000010", "00" };
            ulong[] expectedValues = { 1000, 0, ushort.MaxValue, uint.MaxValue, 0, 10, 0 };
            VerifyFromString(Convert.ToUInt64, Convert.ToUInt64, testValues, expectedValues);

            var longMaxValue = ulong.MaxValue;
            string[] testValuesLong = { longMaxValue.ToString() };
            ulong[] expectedValuesLong = { longMaxValue };
            VerifyFromString(Convert.ToUInt64, Convert.ToUInt64, testValuesLong, expectedValuesLong);

            string[] overflowValues = { ConvertConstants.UINT64_OVERFLOW_MIN_STRING, decimal.MaxValue.ToFixed(0, MidpointRounding.AwayFromZero) };
            VerifyFromStringThrows<OverflowException>(Convert.ToUInt64, Convert.ToUInt64, overflowValues);

            string[] formatExceptionValues = { "abba" };
            VerifyFromStringThrows<FormatException>(Convert.ToUInt64, Convert.ToUInt64, formatExceptionValues);
        }

        [Test]
        public void FromStringWithBase()
        {
            var maxSafeValue = UInt64.MaxValue;

            string[] testValues = { null, null, null, null, ConvertConstants.UINT64_MAX_STRING_BASE_16, maxSafeValue.ToString(), ConvertConstants.UINT64_MAX_STRING_BASE_8, ConvertConstants.UINT64_MAX_STRING_BASE_2, "0000000000000010", "00", "0" };
            int[] testBases = { 10, 2, 8, 16, 16, 10, 8, 2, 16, 16, 16 };
            ulong[] expectedValues = { 0, 0, 0, 0, maxSafeValue, maxSafeValue, maxSafeValue, maxSafeValue, 16, 0, 0 };
            VerifyFromStringWithBase(Convert.ToUInt64, testValues, testBases, expectedValues, true);

            string[] overflowValues = { ConvertConstants.UINT64_OVERFLOW_MAX_STRING, ConvertConstants.UINT64_OVERFLOW_MIN_STRING };
            int[] overflowBases = { 10, 10 };
            VerifyFromStringWithBaseThrows<OverflowException>(Convert.ToUInt64, overflowValues, overflowBases);

            string[] overflowValuesBig = { ConvertConstants.UINT64_OVERFLOW_MAX_STRING_BASE_2, ConvertConstants.UINT64_OVERFLOW_MAX_STRING_BASE_16, ConvertConstants.UINT64_OVERFLOW_MAX_STRING_BASE_8 };
            int[] overflowBasesBig = { 2, 16, 8 };
            VerifyFromStringWithBaseThrows<OverflowException>(Convert.ToUInt64, overflowValuesBig, overflowBasesBig);

            string[] formatExceptionValues = { "12", "ffffffffffffffffffff" };
            int[] formatExceptionBases = { 2, 8 };
            VerifyFromStringWithBaseThrows<FormatException>(Convert.ToUInt64, formatExceptionValues, formatExceptionBases);

            string[] argumentExceptionValues = { "10", "11", "abba", "-ab" };
            int[] argumentExceptionBases = { -1, 3, 0, 16 };
            VerifyFromStringWithBaseThrows<ArgumentException>(Convert.ToUInt64, argumentExceptionValues, argumentExceptionBases);
        }

        [Test]
        public void FromUInt16()
        {
            ushort[] testValues = { 100, 0 };
            ulong[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);
        }

        [Test]
        public void FromUInt32()
        {
            uint[] testValues = { uint.MinValue, uint.MaxValue };
            ulong[] expectedValues = { uint.MinValue, uint.MaxValue };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);
        }

        [Test]
        public void FromUInt64()
        {
            ulong[] testValues = { ulong.MaxValue, ulong.MinValue };
            ulong[] expectedValues = { ulong.MaxValue, ulong.MinValue };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);
        }
    }
}