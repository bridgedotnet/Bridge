// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToByte.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToByte - {0}")]
    public class ConvertToByteTests : ConvertTestBase<byte>
    {
        [Test]
        public void FromBoolean()
        {
            bool[] testValues = { true, false };
            byte[] expectedValues = { 1, 0 };
            VerifyViaObj(Convert.ToByte, testValues, expectedValues);
        }

        [Test]
        public void FromChar()
        {
            char[] testValues = { 'A', char.MinValue };
            byte[] expectedValues = { (byte)'A', (byte)char.MinValue };
            VerifyViaObj(Convert.ToByte, testValues, expectedValues);

            char[] overflowValues = { char.MaxValue };
            VerifyThrowsViaObj<OverflowException, char>(Convert.ToByte, overflowValues);
        }

        [Test]
        public void FromDecimal()
        {
            decimal[] testValues = { byte.MaxValue, byte.MinValue, 254.01m, 254.9m };
            byte[] expectedValues = { byte.MaxValue, byte.MinValue, 254, 255 };
            VerifyViaObj(Convert.ToByte, testValues, expectedValues);

            decimal[] overflowValues = { decimal.MinValue, decimal.MaxValue };
            VerifyThrowsViaObj<OverflowException, decimal>(Convert.ToByte, overflowValues);
        }

        [Test]
        public void FromDouble()
        {
            double[] testValues = { byte.MinValue, byte.MaxValue, 100.0, 254.9, 255.2 };
            byte[] expectedValues = { byte.MinValue, byte.MaxValue, 100, 255, 255 };
            VerifyViaObj(Convert.ToByte, testValues, expectedValues);

            double[] overflowValues = { -double.MaxValue, double.MaxValue };
            VerifyThrowsViaObj<OverflowException, double>(Convert.ToByte, overflowValues);
        }

        [Test]
        public void FromInt16()
        {
            short[] testValues = { byte.MinValue, byte.MaxValue, 10, 2 };
            byte[] expectedValues = { byte.MinValue, byte.MaxValue, 10, 2 };
            VerifyViaObj(Convert.ToByte, testValues, expectedValues);

            short[] overflowValues = { short.MinValue, short.MaxValue };
            VerifyThrowsViaObj<OverflowException, short>(Convert.ToByte, overflowValues);
        }

        [Test]
        public void FromInt32()
        {
            int[] testValues = { byte.MinValue, byte.MaxValue, 10 };
            byte[] expectedValues = { byte.MinValue, byte.MaxValue, 10 };
            VerifyViaObj(Convert.ToByte, testValues, expectedValues);

            int[] overflowValues = { int.MinValue, int.MaxValue };
            VerifyThrowsViaObj<OverflowException, int>(Convert.ToByte, overflowValues);
        }

        [Test]
        public void FromInt64()
        {
            long[] testValues = { byte.MinValue, byte.MaxValue, 10 };
            byte[] expectedValues = { byte.MinValue, byte.MaxValue, 10 };
            VerifyViaObj(Convert.ToByte, testValues, expectedValues);

            long[] overflowValues = { long.MinValue, long.MaxValue };
            VerifyThrowsViaObj<OverflowException, long>(Convert.ToByte, overflowValues);
        }

        [Test]
        public void FromObject()
        {
            object[] testValues = { null };
            byte[] expectedValues = { 0 };
            VerifyFromObject(Convert.ToByte, Convert.ToByte, testValues, expectedValues);

            object[] invalidValues = { new object(), DateTime.Now };
            VerifyFromObjectThrows<InvalidCastException>(Convert.ToByte, Convert.ToByte, invalidValues);
        }

        [Test]
        public void FromSByte()
        {
            sbyte[] testValues = { 0, 10, sbyte.MaxValue };
            byte[] expectedValues = { 0, 10, (byte)sbyte.MaxValue };
            VerifyViaObj(Convert.ToByte, testValues, expectedValues);

            sbyte[] overflowValues = { sbyte.MinValue };
            VerifyThrowsViaObj<OverflowException, sbyte>(Convert.ToByte, overflowValues);
        }

        [Test]
        public void FromSingle()
        {
            float[] testValues = { byte.MaxValue, byte.MinValue, 254.01f, 254.9f };
            byte[] expectedValues = { byte.MaxValue, byte.MinValue, 254, 255 };
            VerifyViaObj(Convert.ToByte, testValues, expectedValues);

            float[] overflowValues = { float.MinValue, float.MaxValue };
            VerifyThrowsViaObj<OverflowException, float>(Convert.ToByte, overflowValues);
        }

        [Test]
        public void FromString()
        {
            var byteMinValue = byte.MinValue;
            var byteMaxValue = byte.MaxValue;
            var intMinValue = int.MinValue;
            var intMaxValue = int.MaxValue;

            string[] testValues = { byteMaxValue.ToString(), byteMinValue.ToString(), "0", "100", null };
            byte[] expectedValues = { byteMaxValue, byteMinValue, 0, 100, 0 };
            VerifyFromString(Convert.ToByte, Convert.ToByte, testValues, expectedValues);

            string[] overflowValues = { intMinValue.ToString(), intMaxValue.ToString() };
            VerifyFromStringThrows<OverflowException>(Convert.ToByte, Convert.ToByte, overflowValues);

            string[] formatExceptionValues = { "abba" };
            VerifyFromStringThrows<FormatException>(Convert.ToByte, Convert.ToByte, formatExceptionValues);
        }

        [Test]
        public void FromStringWithBase()
        {
            string[] testValues = { null, null, null, null, "10", "100", "1011", "ff", "0xff", "77", "11", "11111111" };
            int[] testBases = { 10, 2, 8, 16, 10, 10, 2, 16, 16, 8, 2, 2 };
            byte[] expectedValues = { 0, 0, 0, 0, 10, 100, 11, 255, 255, 63, 3, 255 };
            VerifyFromStringWithBase(Convert.ToByte, testValues, testBases, expectedValues);

            string[] overflowValues = { "256", "111111111", "ffffe", "7777777", "-1" };
            int[] overflowBases = { 10, 2, 16, 8, 10 };
            VerifyFromStringWithBaseThrows<OverflowException>(Convert.ToByte, overflowValues, overflowBases);

            string[] formatExceptionValues = { "fffg", "0xxfff", "8", "112", "!56" };
            int[] formatExceptionBases = { 16, 16, 8, 2, 10 };
            VerifyFromStringWithBaseThrows<FormatException>(Convert.ToByte, formatExceptionValues, formatExceptionBases);

            string[] argumentExceptionValues = { null };
            int[] argumentExceptionBases = { 11 };
            VerifyFromStringWithBaseThrows<ArgumentException>(Convert.ToByte, argumentExceptionValues, argumentExceptionBases);
        }

        [Test]
        public void FromUInt16()
        {
            ushort[] testValues = { byte.MinValue, byte.MaxValue, 10, 100 };
            byte[] expectedValues = { byte.MinValue, byte.MaxValue, 10, 100 };
            VerifyViaObj(Convert.ToByte, testValues, expectedValues);

            ushort[] overflowValues = { ushort.MaxValue };
            VerifyThrowsViaObj<OverflowException, ushort>(Convert.ToByte, overflowValues);
        }

        [Test]
        public void FromUInt32()
        {
            uint[] testValues = { byte.MinValue, byte.MaxValue, 10, 100 };
            byte[] expectedValues = { byte.MinValue, byte.MaxValue, 10, 100 };
            VerifyViaObj(Convert.ToByte, testValues, expectedValues);

            uint[] overflowValues = { uint.MaxValue };
            VerifyThrowsViaObj<OverflowException, uint>(Convert.ToByte, overflowValues);
        }

        [Test]
        public void FromUInt64()
        {
            ulong[] testValues = { byte.MinValue, byte.MaxValue, 10, 100 };
            byte[] expectedValues = { byte.MinValue, byte.MaxValue, 10, 100 };
            VerifyViaObj(Convert.ToByte, testValues, expectedValues);

            ulong[] overflowValues = { ulong.MaxValue };
            VerifyThrowsViaObj<OverflowException, ulong>(Convert.ToByte, overflowValues);
        }
    }
}