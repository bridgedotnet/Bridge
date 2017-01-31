using Bridge.Test.NUnit;

using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#1122]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1122 - {0}")]
    public class N1122
    {
        public static void AssertNumber(object expected, object actual, string message = null)
        {
            var a = actual != null ? actual.ToString() : "null";
            var e = expected != null ? expected.ToString() : "null";

            Assert.AreEqual(e, a, message);
        }

        [Test(ExpectedCount = 4)]
        public static void TestClippingInDefaultOverflowMode()
        {
            var x = double.MaxValue;

            var y1 = (int)Math.Floor(x / 0.2);
            AssertNumber(int.MinValue, y1, "int");

            var y2 = (uint)Math.Floor(x / 0.2);
            AssertNumber(uint.MinValue, y2, "uint");

            var z1 = (long)Math.Floor(x / 0.2);
            AssertNumber(long.MinValue, z1, "long");

            var z2 = (ulong)Math.Floor(x / 0.2);
            AssertNumber(ulong.MinValue, z2, "ulong");
        }

        [Test(ExpectedCount = 4)]
        public static void TestIntegerDivisionInDefaultMode()
        {
            var x = 1.1;

            int y1 = (int)(1 / x);
            AssertNumber((int)0, y1, "int");

            uint y2 = (uint)(1 / x);
            AssertNumber((uint)0, y2, "uint");

            long z1 = (long)(1 / x);
            AssertNumber((long)0, z1, "long");

            ulong z2 = (ulong)(1 / x);
            AssertNumber((ulong)0, z2, "ulong");
        }

        [Test(ExpectedCount = 16)]
        public static void TestInfinityCastDefaultOverflowMode()
        {
            var pi = double.PositiveInfinity;

            var y1 = (byte)pi;
            var y2 = (sbyte)pi;
            var y3 = (short)pi;
            var y4 = (ushort)pi;
            var y5 = (int)pi;
            var y6 = (uint)pi;
            var y7 = (long)pi;
            var y8 = (ulong)pi;

            // https://msdn.microsoft.com/en-us/library/aa691289(v=vs.71).aspx
            // If the value of the operand is NaN or infinite, the result of the conversion is an unspecified value of the destination type.
            AssertNumber(byte.MinValue, y1, "PositiveInfinity -> byte");
            AssertNumber(sbyte.MinValue, y2, "PositiveInfinity -> sbyte");
            AssertNumber(short.MinValue, y3, "PositiveInfinity -> short");
            AssertNumber(ushort.MinValue, y4, "PositiveInfinity -> ushort");
            AssertNumber(int.MinValue, y5, "PositiveInfinity -> int");
            AssertNumber(uint.MinValue, y6, "PositiveInfinity -> uint");
            AssertNumber(long.MinValue, y7, "PositiveInfinity -> long");
            AssertNumber(ulong.MinValue, y8, "PositiveInfinity -> ulong");

            var ni = double.NegativeInfinity;

            var z1 = (byte)ni;
            var z2 = (sbyte)ni;
            var z3 = (short)ni;
            var z4 = (ushort)ni;
            var z5 = (int)ni;
            var z6 = (uint)ni;
            var z7 = (long)ni;
            var z8 = (ulong)ni;

            // https://msdn.microsoft.com/en-us/library/aa691289(v=vs.71).aspx
            // If the value of the operand is NaN or infinite, the result of the conversion is an unspecified value of the destination type.
            AssertNumber(byte.MinValue, z1, "NegativeInfinity -> byte");
            AssertNumber(sbyte.MinValue, z2, "NegativeInfinity -> sbyte");
            AssertNumber(short.MinValue, z3, "NegativeInfinity -> short");
            AssertNumber(ushort.MinValue, z4, "NegativeInfinity -> ushort");
            AssertNumber(int.MinValue, z5, "NegativeInfinity -> int");
            AssertNumber(uint.MinValue, z6, "NegativeInfinity -> uint");
            AssertNumber(long.MinValue, z7, "NegativeInfinity -> long");
            AssertNumber(ulong.MinValue, z8, "NegativeInfinity -> ulong");
        }

        [Test(ExpectedCount = 16)]
        public static void TestInfinityCastWithNullable1DefaultOverflowMode()
        {
            var pi = double.PositiveInfinity;

            var y1 = (byte?)pi;
            var y2 = (sbyte?)pi;
            var y3 = (short?)pi;
            var y4 = (ushort?)pi;
            var y5 = (int?)pi;
            var y6 = (uint?)pi;
            var y7 = (long?)pi;
            var y8 = (ulong?)pi;

            // https://msdn.microsoft.com/en-us/library/aa691289(v=vs.71).aspx
            // If the value of the operand is NaN or infinite, the result of the conversion is an unspecified value of the destination type.
            AssertNumber(byte.MinValue, y1, "PositiveInfinity -> byte");
            AssertNumber(sbyte.MinValue, y2, "PositiveInfinity -> sbyte");
            AssertNumber(short.MinValue, y3, "PositiveInfinity -> short");
            AssertNumber(ushort.MinValue, y4, "PositiveInfinity -> ushort");
            AssertNumber(int.MinValue, y5, "PositiveInfinity -> int");
            AssertNumber(uint.MinValue, y6, "PositiveInfinity -> uint");
            AssertNumber(long.MinValue, y7, "PositiveInfinity -> long");
            AssertNumber(ulong.MinValue, y8, "PositiveInfinity -> ulong");

            var ni = double.NegativeInfinity;

            var z1 = (byte?)ni;
            var z2 = (sbyte?)ni;
            var z3 = (short?)ni;
            var z4 = (ushort?)ni;
            var z5 = (int?)ni;
            var z6 = (uint?)ni;
            var z7 = (long?)ni;
            var z8 = (ulong?)ni;

            // https://msdn.microsoft.com/en-us/library/aa691289(v=vs.71).aspx
            // If the value of the operand is NaN or infinite, the result of the conversion is an unspecified value of the destination type.
            AssertNumber(byte.MinValue, z1, "NegativeInfinity -> byte");
            AssertNumber(sbyte.MinValue, z2, "NegativeInfinity -> sbyte");
            AssertNumber(short.MinValue, z3, "NegativeInfinity -> short");
            AssertNumber(ushort.MinValue, z4, "NegativeInfinity -> ushort");
            AssertNumber(int.MinValue, z5, "NegativeInfinity -> int");
            AssertNumber(uint.MinValue, z6, "NegativeInfinity -> uint");
            AssertNumber(long.MinValue, z7, "NegativeInfinity -> long");
            AssertNumber(ulong.MinValue, z8, "NegativeInfinity -> ulong");
        }

        [Test(ExpectedCount = 16)]
        public static void TestInfinityCastWithNullable2DefaultOverflowMode()
        {
            var pi = double.PositiveInfinity;

            byte? y1 = (byte)pi;
            sbyte? y2 = (sbyte)pi;
            short? y3 = (short)pi;
            ushort? y4 = (ushort)pi;
            int? y5 = (int)pi;
            uint? y6 = (uint)pi;
            long? y7 = (long)pi;
            ulong? y8 = (ulong)pi;

            // https://msdn.microsoft.com/en-us/library/aa691289(v=vs.71).aspx
            // If the value of the operand is NaN or infinite, the result of the conversion is an unspecified value of the destination type.
            AssertNumber(byte.MinValue, y1.Value, "PositiveInfinity -> byte");
            AssertNumber(sbyte.MinValue, y2.Value, "PositiveInfinity -> sbyte");
            AssertNumber(short.MinValue, y3.Value, "PositiveInfinity -> short");
            AssertNumber(ushort.MinValue, y4.Value, "PositiveInfinity -> ushort");
            AssertNumber(int.MinValue, y5.Value, "PositiveInfinity -> int");
            AssertNumber(uint.MinValue, y6.Value, "PositiveInfinity -> uint");
            AssertNumber(long.MinValue, y7.Value, "PositiveInfinity -> long");
            AssertNumber(ulong.MinValue, y8.Value, "PositiveInfinity -> ulong");

            var ni = double.NegativeInfinity;

            byte? z1 = (byte)ni;
            sbyte? z2 = (sbyte)ni;
            short? z3 = (short)ni;
            ushort? z4 = (ushort)ni;
            int? z5 = (int)ni;
            uint? z6 = (uint)ni;
            long? z7 = (long)ni;
            ulong? z8 = (ulong)ni;

            // https://msdn.microsoft.com/en-us/library/aa691289(v=vs.71).aspx
            // If the value of the operand is NaN or infinite, the result of the conversion is an unspecified value of the destination type.
            AssertNumber(byte.MinValue, z1.Value, "NegativeInfinity -> byte");
            AssertNumber(sbyte.MinValue, z2.Value, "NegativeInfinity -> sbyte");
            AssertNumber(short.MinValue, z3.Value, "NegativeInfinity -> short");
            AssertNumber(ushort.MinValue, z4.Value, "NegativeInfinity -> ushort");
            AssertNumber(int.MinValue, z5.Value, "NegativeInfinity -> int");
            AssertNumber(uint.MinValue, z6.Value, "NegativeInfinity -> uint");
            AssertNumber(long.MinValue, z7.Value, "NegativeInfinity -> long");
            AssertNumber(ulong.MinValue, z8.Value, "NegativeInfinity -> ulong");
        }
    }
}