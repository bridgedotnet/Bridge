// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToDouble.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToDouble - {0}")]
    public class ConvertToDoubleTests : ConvertTestBase<double>
    {
        [Test]
        public void FromBoolean()
        {
            bool[] testValues = { true, false };
            double[] expectedValues = { 1.0, 0.0 };
            VerifyViaObj(Convert.ToDouble, testValues, expectedValues);
        }

        [Test]
        public void FromByte()
        {
            byte[] testValues = { byte.MaxValue, byte.MinValue };
            double[] expectedValues = { byte.MaxValue, byte.MinValue };
            VerifyViaObj(Convert.ToDouble, testValues, expectedValues);
        }

        [Test]
        public void FromDecimal()
        {
            decimal[] testValues = { decimal.MaxValue, decimal.MinValue, 0.0m };
            double[] expectedValues = { (double)decimal.MaxValue, (double)decimal.MinValue, 0.0 };
            VerifyViaObj(Convert.ToDouble, testValues, expectedValues);
        }

        [Test]
        public void FromDouble()
        {
            double[] testValues = { double.MaxValue, double.MinValue, double.NegativeInfinity, double.PositiveInfinity, double.Epsilon };
            double[] expectedValues = { double.MaxValue, double.MinValue, double.NegativeInfinity, double.PositiveInfinity, double.Epsilon };
            VerifyViaObj(Convert.ToDouble, testValues, expectedValues);
        }

        [Test]
        public void FromInt16()
        {
            short[] testValues = { short.MaxValue, short.MinValue, 0 };
            double[] expectedValues = { short.MaxValue, short.MinValue, 0 };
            VerifyViaObj(Convert.ToDouble, testValues, expectedValues);
        }

        [Test]
        public void FromInt32()
        {
            int[] testValues = { int.MaxValue, int.MinValue, 0 };
            double[] expectedValues = { int.MaxValue, int.MinValue, 0 };
            VerifyViaObj(Convert.ToDouble, testValues, expectedValues);
        }

        [Test]
        public void FromInt64()
        {
            long[] testValues = { long.MaxValue, long.MinValue, 0 };
            double[] expectedValues = { (double)long.MaxValue, (double)long.MinValue, 0 };
            VerifyViaObj(Convert.ToDouble, testValues, expectedValues);
        }

        [Test]
        public void FromObject()
        {
            object[] testValues = { null };
            double[] expectedValues = { 0.0 };
            VerifyFromObject(Convert.ToDouble, Convert.ToDouble, testValues, expectedValues);

            object[] invalidValues = { new object(), DateTime.Now };
            VerifyFromObjectThrows<InvalidCastException>(Convert.ToDouble, Convert.ToDouble, invalidValues);
        }

        [Test]
        public void FromSByte()
        {
            sbyte[] testValues = { sbyte.MaxValue, sbyte.MinValue };
            double[] expectedValues = { sbyte.MaxValue, sbyte.MinValue };
            VerifyViaObj(Convert.ToDouble, testValues, expectedValues);
        }

        [Test]
        public void FromSingle()
        {
            float[] testValues = { float.MaxValue, float.MinValue, 0.0f };
            double[] expectedValues = { float.MaxValue, float.MinValue, 0.0 };
            VerifyViaObj(Convert.ToDouble, testValues, expectedValues);
        }

        [Test]
        public void FromString()
        {
            var doubleMaxValue = double.MaxValue;
            var doubleMinValue = -double.MaxValue;

            string[] testValues = { doubleMinValue.ToString("R"), doubleMaxValue.ToString("R"), (0.0).ToString(), (10.0).ToString(), (-10.0).ToString(), null };
            double[] expectedValues = { -double.MaxValue, double.MaxValue, 0.0, 10.0, -10.0, 0.0 };
            VerifyFromString(Convert.ToDouble, Convert.ToDouble, testValues, expectedValues);

            string[] overflowValues = { "1.79769313486232E+308", "-1.79769313486232E+308" };
            VerifyFromStringThrows<OverflowException>(Convert.ToDouble, Convert.ToDouble, overflowValues);

            string[] formatExceptionValues = { "123xyz" };
            VerifyFromStringThrows<FormatException>(Convert.ToDouble, Convert.ToDouble, formatExceptionValues);
        }

        [Test]
        public void FromUInt16()
        {
            ushort[] testValues = { ushort.MaxValue, ushort.MinValue };
            double[] expectedValues = { ushort.MaxValue, ushort.MinValue };
            VerifyViaObj(Convert.ToDouble, testValues, expectedValues);
        }

        [Test]
        public void FromUInt32()
        {
            uint[] testValues = { uint.MaxValue, uint.MinValue };
            double[] expectedValues = { uint.MaxValue, uint.MinValue };
            VerifyViaObj(Convert.ToDouble, testValues, expectedValues);
        }

        [Test]
        public void FromUInt64()
        {
            ulong[] testValues = { ulong.MaxValue, ulong.MinValue };
            double[] expectedValues = { (double)ulong.MaxValue, (double)ulong.MinValue };
            VerifyViaObj(Convert.ToDouble, testValues, expectedValues);
        }
    }
}