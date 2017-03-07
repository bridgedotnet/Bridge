// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToSingle.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToSingle - {0}")]
    public class ConvertToSingleTests : ConvertTestBase<float>
    {
        [Test]
        public void FromBoolean()
        {
            bool[] testValues = { false, true };
            float[] expectedValues = { 0.0f, 1.0f };
            VerifyViaObj(Convert.ToSingle, testValues, expectedValues);
        }

        [Test]
        public void FromByte()
        {
            byte[] testValues = { byte.MaxValue, byte.MinValue };
            float[] expectedValues = { byte.MaxValue, byte.MinValue };
            VerifyViaObj(Convert.ToSingle, testValues, expectedValues);
        }

        [Test]
        public void FromDecimal()
        {
            decimal[] testValues = { 1000m, 0m, -1000m, decimal.MaxValue, decimal.MinValue };
            decimal max = decimal.MaxValue;
            decimal min = decimal.MinValue;
            float[] expectedValues = { 1000f, 0.0f, -1000f, (float)max, (float)min };
            VerifyViaObj(Convert.ToSingle, testValues, expectedValues);
        }

        [Test]
        public void FromDouble()
        {
            double[] testValues = { 1000.0, 100.0, 0.0, -100.0, -1000.0, double.MaxValue, -double.MaxValue };
            float[] expectedValues = { 1000.0f, 100.0f, 0.0f, -100.0f, -1000.0f, float.PositiveInfinity, float.NegativeInfinity };
            VerifyViaObj(Convert.ToSingle, testValues, expectedValues);
        }

        [Test]
        public void FromInt16()
        {
            short[] testValues = { short.MaxValue, short.MinValue, 0 };
            float[] expectedValues = { short.MaxValue, short.MinValue, 0f };
            VerifyViaObj(Convert.ToSingle, testValues, expectedValues);
        }

        [Test]
        public void FromInt32()
        {
            int[] testValues = { int.MaxValue, int.MinValue, 0 };
            float[] expectedValues = { int.MaxValue, int.MinValue, 0f };
            VerifyViaObj(Convert.ToSingle, testValues, expectedValues);
        }

        [Test]
        public void FromInt64()
        {
            long[] testValues = { long.MaxValue, long.MinValue, 0 };
            float[] expectedValues = { long.MaxValue, long.MinValue, 0f };
            VerifyViaObj(Convert.ToSingle, testValues, expectedValues);
        }

        [Test]
        public void FromObject()
        {
            object[] testValues = { null };
            float[] expectedValues = { 0f };
            VerifyFromObject(Convert.ToSingle, Convert.ToSingle, testValues, expectedValues);

            object[] invalidValues = { new object(), DateTime.Now };
            VerifyFromObjectThrows<InvalidCastException>(Convert.ToSingle, Convert.ToSingle, invalidValues);
        }

        [Test]
        public void FromSByte()
        {
            sbyte[] testValues = { 100, -100, 0 };
            float[] expectedValues = { 100f, -100f, 0f };
            VerifyViaObj(Convert.ToSingle, testValues, expectedValues);
        }

        [Test]
        public void FromSingle()
        {
            float[] testValues = { float.MaxValue, float.MinValue, new float(), float.NegativeInfinity, float.PositiveInfinity, float.Epsilon };
            float[] expectedValues = { float.MaxValue, float.MinValue, new float(), float.NegativeInfinity, float.PositiveInfinity, float.Epsilon };
            VerifyViaObj(Convert.ToSingle, testValues, expectedValues);
        }

        [Test]
        public void FromString()
        {
            string[] testValues = { float.MaxValue.ToString("R"), (0f).ToString(), float.MinValue.ToString("R"), null };
            float[] expectedValues = { float.MaxValue, 0f, float.MinValue, 0f };
            VerifyFromString(Convert.ToSingle, Convert.ToSingle, testValues, expectedValues);

            var doubleMaxValue = double.MaxValue;
            var doubleMinValue = -double.MaxValue;
            string[] overflowValues = { doubleMinValue.ToString("R"), doubleMaxValue.ToString("R") };
            VerifyFromStringThrows<OverflowException>(Convert.ToSingle, Convert.ToSingle, overflowValues);

            string[] formatExceptionValues = { "1f2d" };
            VerifyFromStringThrows<FormatException>(Convert.ToSingle, Convert.ToSingle, formatExceptionValues);
        }

        [Test]
        public void FromUInt16()
        {
            ushort[] testValues = { ushort.MaxValue, ushort.MinValue, };
            float[] expectedValues = { ushort.MaxValue, ushort.MinValue };
            VerifyViaObj(Convert.ToSingle, testValues, expectedValues);
        }

        [Test]
        public void FromUInt32()
        {
            uint[] testValues = { uint.MaxValue, uint.MinValue };
            float[] expectedValues = { uint.MaxValue, uint.MinValue };
            VerifyViaObj(Convert.ToSingle, testValues, expectedValues);
        }

        [Test]
        public void FromUInt64()
        {
            ulong[] testValues = { ulong.MaxValue, ulong.MinValue };
            float[] expectedValues = { ulong.MaxValue, ulong.MinValue };
            VerifyViaObj(Convert.ToSingle, testValues, expectedValues);
        }
    }
}