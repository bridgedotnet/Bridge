// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToDecimal.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToDecimal - {0}")]
    public class ConvertToDecimalTests : ConvertTestBase<decimal>
    {
        [Test]
        public void FromBoolean()
        {
            bool[] testValues = { true, false };
            decimal[] expectedValues = { 1.0m, decimal.Zero };
            VerifyViaObj(Convert.ToDecimal, testValues, expectedValues);
        }

        [Test]
        public void FromByte()
        {
            byte[] testValues = { byte.MaxValue, byte.MinValue };
            decimal[] expectedValues = { byte.MaxValue, byte.MinValue };
            VerifyViaObj(Convert.ToDecimal, testValues, expectedValues);
        }

        [Test]
        public void FromDecimal()
        {
            decimal[] testValues = { decimal.MaxValue, decimal.MinValue, 0 };
            decimal[] expectedValues = { decimal.MaxValue, decimal.MinValue, 0 };
            VerifyViaObj(Convert.ToDecimal, testValues, expectedValues);
        }

        [Test]
        public void FromDouble()
        {
            double[] testValues = { 1000.0, 100.0, 0.0, 0.001, -1000.0, -100.0, };
            decimal[] expectedValues = { 1000.0m, 100.0m, 0.0m, 0.001m, -1000.0m, -100.0m };
            VerifyViaObj(Convert.ToDecimal, testValues, expectedValues);

            double[] overflowValues = { double.MaxValue, -double.MaxValue };
            VerifyThrowsViaObj<OverflowException, double>(Convert.ToDecimal, overflowValues);
        }

        [Test]
        public void FromInt16()
        {
            short[] testValues = { short.MaxValue, short.MinValue, 0 };
            decimal[] expectedValues = { short.MaxValue, short.MinValue, 0 };
            VerifyViaObj(Convert.ToDecimal, testValues, expectedValues);
        }

        [Test]
        public void FromInt32()
        {
            int[] testValues = { int.MaxValue, int.MinValue, 0 };
            decimal[] expectedValues = { int.MaxValue, int.MinValue, 0 };
            VerifyViaObj(Convert.ToDecimal, testValues, expectedValues);
        }

        [Test]
        public void FromInt64()
        {
            var longMinValue = long.MinValue;
            var longMaxValue = long.MaxValue;

            long[] testValues = { longMaxValue, longMinValue, 0 };
            decimal[] expectedValues = { longMaxValue, longMinValue, 0 };
            VerifyViaObj(Convert.ToDecimal, testValues, expectedValues);
        }

        [Test]
        public void FromObject()
        {
            object[] testValues = { null };
            decimal[] expectedValues = { 0 };
            VerifyFromObject(Convert.ToDecimal, Convert.ToDecimal, testValues, expectedValues);

            object[] invalidValues = { new object(), DateTime.Now };
            VerifyFromObjectThrows<InvalidCastException>(Convert.ToDecimal, Convert.ToDecimal, invalidValues);
        }

        [Test]
        public void FromSByte()
        {
            sbyte[] testValues = { sbyte.MinValue, sbyte.MaxValue, 0 };
            decimal[] expectedValues = { sbyte.MinValue, sbyte.MaxValue, 0 };
            VerifyViaObj(Convert.ToDecimal, testValues, expectedValues);
        }

        [Test]
        public void FromSingle()
        {
            float[] testValues = { 1000.0f, 100.0f, 0.0f, -1.0f, -100.0f };
            decimal[] expectedValues = { 1000.0m, 100.0m, 0.0m, -1.0m, -100.0m };
            VerifyViaObj(Convert.ToDecimal, testValues, expectedValues);

            float[] overflowValues = { float.MaxValue, float.MinValue };
            VerifyThrowsViaObj<OverflowException, float>(Convert.ToDecimal, overflowValues);
        }

        [Test]
        public void FromString()
        {
            var longMaxValue = long.MaxValue;
            var intMaxValue = int.MaxValue;

            var decimalMaxValueStr = decimal.MaxValue.ToFixed(0, MidpointRounding.AwayFromZero);
            var decimalMinValueStr = decimal.MinValue.ToFixed(0, MidpointRounding.AwayFromZero);

            string[] testValues = { intMaxValue.ToString(), longMaxValue.ToString(), decimalMaxValueStr, decimalMinValueStr, "0", null };
            decimal[] expectedValues = { intMaxValue, longMaxValue, decimal.MaxValue, decimal.MinValue, 0, 0 };
            VerifyFromString(Convert.ToDecimal, Convert.ToDecimal, testValues, expectedValues);

            string[] overflowValues = { "792281625142643000000000000000" };
            VerifyFromStringThrows<OverflowException>(Convert.ToDecimal, Convert.ToDecimal, overflowValues);

            string[] formatExceptionValues = { "100E12" };
            VerifyFromStringThrows<FormatException>(Convert.ToDecimal, Convert.ToDecimal, formatExceptionValues);
        }

        [Test]
        public void FromUInt16()
        {
            ushort[] testValues = { ushort.MaxValue, ushort.MinValue };
            decimal[] expectedValues = { ushort.MaxValue, ushort.MinValue };
            VerifyViaObj(Convert.ToDecimal, testValues, expectedValues);
        }

        [Test]
        public void FromUInt32()
        {
            uint[] testValues = { uint.MaxValue, uint.MinValue };
            decimal[] expectedValues = { uint.MaxValue, uint.MinValue };
            VerifyViaObj(Convert.ToDecimal, testValues, expectedValues);
        }

        [Test]
        public void FromUInt64()
        {
            var ulongMaxValue = ulong.MaxValue;

            ulong[] testValues = { ulongMaxValue, 0u };
            decimal[] expectedValues = { ulongMaxValue, 0u };
            VerifyViaObj(Convert.ToDecimal, testValues, expectedValues);
        }
    }
}