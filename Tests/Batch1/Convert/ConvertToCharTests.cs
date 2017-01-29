// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToChar.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToChar - {0}")]
    public class ConvertToCharTests : ConvertTestBase<char>
    {
        [Test]
        public void FromByte()
        {
            byte[] testValues = { byte.MaxValue, byte.MinValue };
            char[] expectedValues = { (char)byte.MaxValue, (char)byte.MinValue };
            Verify(Convert.ToChar, testValues, expectedValues);
        }

        [Test]
        public void FromChar()
        {
            char[] testValues = { char.MaxValue, char.MinValue, 'b' };
            char[] expectedValues = { char.MaxValue, char.MinValue, 'b' };
            Verify(Convert.ToChar, testValues, expectedValues);
        }

        [Test]
        public void FromDecimal()
        {
            decimal[] invalidValues = { 0m, decimal.MinValue, decimal.MaxValue };
            VerifyThrows<InvalidCastException, decimal>(Convert.ToChar, invalidValues);
        }

        [Test]
        public void FromDecimalViaObject()
        {
            object[] invalidValues = { 0m, decimal.MinValue, decimal.MaxValue };
            VerifyFromObjectThrows<InvalidCastException>(Convert.ToChar, Convert.ToChar, invalidValues);
        }

        [Test]
        public void FromDouble()
        {
            double[] invalidValues = { 0.0, double.MinValue, double.MaxValue };
            VerifyThrows<InvalidCastException, double>(Convert.ToChar, invalidValues);
        }

        [Test]
        public void FromDoubleViaObject()
        {
            object[] invalidValues = { 0.0, double.MinValue, double.MaxValue };
            VerifyFromObjectThrows<InvalidCastException>(Convert.ToChar, Convert.ToChar, invalidValues);
        }

        [Test]
        public void FromInt16()
        {
            short[] testValues = { short.MaxValue, 0 };
            char[] expectedValues = { (char)short.MaxValue, '\0' };
            Verify(Convert.ToChar, testValues, expectedValues);

            short[] overflowValues = { short.MinValue, -1000 };
            VerifyThrows<OverflowException, short>(Convert.ToChar, overflowValues);
        }

        [Test]
        public void FromInt32()
        {
            int[] testValues = { char.MaxValue, char.MinValue };
            char[] expectedValues = { char.MaxValue, char.MinValue };
            Verify(Convert.ToChar, testValues, expectedValues);

            int[] overflowValues = { int.MinValue, int.MaxValue, (int)ushort.MaxValue + 1, -1000 };
            VerifyThrows<OverflowException, int>(Convert.ToChar, overflowValues);
        }

        [Test]
        public void FromInt64()
        {
            long[] testValues = { 0, 98, ushort.MaxValue };
            char[] expectedValues = { '\0', 'b', char.MaxValue };
            Verify(Convert.ToChar, testValues, expectedValues);

            long[] overflowValues = { long.MinValue, long.MaxValue, -1 };
            VerifyThrows<OverflowException, long>(Convert.ToChar, overflowValues);
        }

        [Test]
        public void FromObject()
        {
            object[] testValues = { null };
            char[] expectedValues = { '\0' };
            Verify(Convert.ToChar, testValues, expectedValues);

            object[] invalidValues = { new object(), DateTime.Now };
            VerifyThrows<InvalidCastException, object>(Convert.ToChar, invalidValues);
        }

        [Test]
        public void FromSByte()
        {
            sbyte[] testValues = { sbyte.MaxValue, 0 };
            char[] expectedValues = { (char)sbyte.MaxValue, '\0' };
            Verify(Convert.ToChar, testValues, expectedValues);

            sbyte[] overflowValues = { sbyte.MinValue, -100, -1 };
            VerifyThrows<OverflowException, sbyte>(Convert.ToChar, overflowValues);
        }

        [Test]
        public void FromSingle()
        {
            float[] invalidValues = { 0f, float.MinValue, float.MaxValue };
            VerifyThrows<InvalidCastException, float>(Convert.ToChar, invalidValues);
        }

        [Test]
        public void FromSingleViaObject()
        {
            object[] invalidValues = { 0f, float.MinValue, float.MaxValue };
            VerifyFromObjectThrows<InvalidCastException>(Convert.ToChar, Convert.ToChar, invalidValues);
        }

        [Test]
        public void FromString()
        {
            string[] testValues = { "a", "T", "z", "a" };
            char[] expectedValues = { 'a', 'T', 'z', 'a' };
            VerifyFromString(Convert.ToChar, Convert.ToChar, testValues, expectedValues);

            string[] formatExceptionValues = { string.Empty, "ab" };
            VerifyFromStringThrows<FormatException>(Convert.ToChar, Convert.ToChar, formatExceptionValues);
            VerifyFromStringThrows<ArgumentNullException>(Convert.ToChar, Convert.ToChar, new string[] { null });
        }

        [Test]
        public void FromUInt16()
        {
            ushort[] testValues = { 0, 98, ushort.MaxValue };
            char[] expectedValues = { '\0', 'b', char.MaxValue };
            Verify(Convert.ToChar, testValues, expectedValues);
        }

        [Test]
        public void FromUInt32()
        {
            uint[] testValues = { ushort.MaxValue, 0 };
            char[] expectedValues = { (char)ushort.MaxValue, '\0' };
            Verify(Convert.ToChar, testValues, expectedValues);

            uint[] overflowValues = { uint.MaxValue };
            VerifyThrows<OverflowException, uint>(Convert.ToChar, overflowValues);
        }

        [Test]
        public void FromUInt64()
        {
            ulong[] testValues = { 0, 98, ushort.MaxValue };
            char[] expectedValues = { '\0', 'b', char.MaxValue };
            Verify(Convert.ToChar, testValues, expectedValues);

            ulong[] overflowValues = { ulong.MaxValue, (ulong)ushort.MaxValue + 1 };
            VerifyThrows<OverflowException, ulong>(Convert.ToChar, overflowValues);
        }
    }
}