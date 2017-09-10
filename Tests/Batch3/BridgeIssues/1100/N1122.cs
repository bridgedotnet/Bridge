using Bridge.Test.NUnit;
using Bridge.ClientTestHelper;

using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#1122]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1122 - {0}")]
    public class N1122
    {
        [Test(ExpectedCount = 4)]
        public static void TestClippingInDefaultOverflowMode()
        {
            var x = double.MaxValue;

            var y1 = (int)Math.Floor(x / 0.2);
            NumberHelper.AssertNumberByRepresentation(int.MinValue, y1, "int");

            var y2 = (uint)Math.Floor(x / 0.2);
            NumberHelper.AssertNumberByRepresentation(uint.MinValue, y2, "uint");

            var z1 = (long)Math.Floor(x / 0.2);
            NumberHelper.AssertNumberByRepresentation(long.MinValue, z1, "long");

            var z2 = (ulong)Math.Floor(x / 0.2);
            NumberHelper.AssertNumberByRepresentation(ulong.MinValue, z2, "ulong");
        }

        [Test(ExpectedCount = 4)]
        public static void TestIntegerDivisionInDefaultMode()
        {
            var x = 1.1;

            int y1 = (int)(1 / x);
            NumberHelper.AssertNumberByRepresentation((int)0, y1, "int");

            uint y2 = (uint)(1 / x);
            NumberHelper.AssertNumberByRepresentation((uint)0, y2, "uint");

            long z1 = (long)(1 / x);
            NumberHelper.AssertNumberByRepresentation((long)0, z1, "long");

            ulong z2 = (ulong)(1 / x);
            NumberHelper.AssertNumberByRepresentation((ulong)0, z2, "ulong");
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
            NumberHelper.AssertNumberByRepresentation(byte.MinValue, y1, "PositiveInfinity -> byte");
            NumberHelper.AssertNumberByRepresentation(sbyte.MinValue, y2, "PositiveInfinity -> sbyte");
            NumberHelper.AssertNumberByRepresentation(short.MinValue, y3, "PositiveInfinity -> short");
            NumberHelper.AssertNumberByRepresentation(ushort.MinValue, y4, "PositiveInfinity -> ushort");
            NumberHelper.AssertNumberByRepresentation(int.MinValue, y5, "PositiveInfinity -> int");
            NumberHelper.AssertNumberByRepresentation(uint.MinValue, y6, "PositiveInfinity -> uint");
            NumberHelper.AssertNumberByRepresentation(long.MinValue, y7, "PositiveInfinity -> long");
            NumberHelper.AssertNumberByRepresentation(ulong.MinValue, y8, "PositiveInfinity -> ulong");

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
            NumberHelper.AssertNumberByRepresentation(byte.MinValue, z1, "NegativeInfinity -> byte");
            NumberHelper.AssertNumberByRepresentation(sbyte.MinValue, z2, "NegativeInfinity -> sbyte");
            NumberHelper.AssertNumberByRepresentation(short.MinValue, z3, "NegativeInfinity -> short");
            NumberHelper.AssertNumberByRepresentation(ushort.MinValue, z4, "NegativeInfinity -> ushort");
            NumberHelper.AssertNumberByRepresentation(int.MinValue, z5, "NegativeInfinity -> int");
            NumberHelper.AssertNumberByRepresentation(uint.MinValue, z6, "NegativeInfinity -> uint");
            NumberHelper.AssertNumberByRepresentation(long.MinValue, z7, "NegativeInfinity -> long");
            NumberHelper.AssertNumberByRepresentation(ulong.MinValue, z8, "NegativeInfinity -> ulong");
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
            NumberHelper.AssertNumberByRepresentation(byte.MinValue, y1, "PositiveInfinity -> byte");
            NumberHelper.AssertNumberByRepresentation(sbyte.MinValue, y2, "PositiveInfinity -> sbyte");
            NumberHelper.AssertNumberByRepresentation(short.MinValue, y3, "PositiveInfinity -> short");
            NumberHelper.AssertNumberByRepresentation(ushort.MinValue, y4, "PositiveInfinity -> ushort");
            NumberHelper.AssertNumberByRepresentation(int.MinValue, y5, "PositiveInfinity -> int");
            NumberHelper.AssertNumberByRepresentation(uint.MinValue, y6, "PositiveInfinity -> uint");
            NumberHelper.AssertNumberByRepresentation(long.MinValue, y7, "PositiveInfinity -> long");
            NumberHelper.AssertNumberByRepresentation(ulong.MinValue, y8, "PositiveInfinity -> ulong");

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
            NumberHelper.AssertNumberByRepresentation(byte.MinValue, z1, "NegativeInfinity -> byte");
            NumberHelper.AssertNumberByRepresentation(sbyte.MinValue, z2, "NegativeInfinity -> sbyte");
            NumberHelper.AssertNumberByRepresentation(short.MinValue, z3, "NegativeInfinity -> short");
            NumberHelper.AssertNumberByRepresentation(ushort.MinValue, z4, "NegativeInfinity -> ushort");
            NumberHelper.AssertNumberByRepresentation(int.MinValue, z5, "NegativeInfinity -> int");
            NumberHelper.AssertNumberByRepresentation(uint.MinValue, z6, "NegativeInfinity -> uint");
            NumberHelper.AssertNumberByRepresentation(long.MinValue, z7, "NegativeInfinity -> long");
            NumberHelper.AssertNumberByRepresentation(ulong.MinValue, z8, "NegativeInfinity -> ulong");
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
            NumberHelper.AssertNumberByRepresentation(byte.MinValue, y1.Value, "PositiveInfinity -> byte");
            NumberHelper.AssertNumberByRepresentation(sbyte.MinValue, y2.Value, "PositiveInfinity -> sbyte");
            NumberHelper.AssertNumberByRepresentation(short.MinValue, y3.Value, "PositiveInfinity -> short");
            NumberHelper.AssertNumberByRepresentation(ushort.MinValue, y4.Value, "PositiveInfinity -> ushort");
            NumberHelper.AssertNumberByRepresentation(int.MinValue, y5.Value, "PositiveInfinity -> int");
            NumberHelper.AssertNumberByRepresentation(uint.MinValue, y6.Value, "PositiveInfinity -> uint");
            NumberHelper.AssertNumberByRepresentation(long.MinValue, y7.Value, "PositiveInfinity -> long");
            NumberHelper.AssertNumberByRepresentation(ulong.MinValue, y8.Value, "PositiveInfinity -> ulong");

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
            NumberHelper.AssertNumberByRepresentation(byte.MinValue, z1.Value, "NegativeInfinity -> byte");
            NumberHelper.AssertNumberByRepresentation(sbyte.MinValue, z2.Value, "NegativeInfinity -> sbyte");
            NumberHelper.AssertNumberByRepresentation(short.MinValue, z3.Value, "NegativeInfinity -> short");
            NumberHelper.AssertNumberByRepresentation(ushort.MinValue, z4.Value, "NegativeInfinity -> ushort");
            NumberHelper.AssertNumberByRepresentation(int.MinValue, z5.Value, "NegativeInfinity -> int");
            NumberHelper.AssertNumberByRepresentation(uint.MinValue, z6.Value, "NegativeInfinity -> uint");
            NumberHelper.AssertNumberByRepresentation(long.MinValue, z7.Value, "NegativeInfinity -> long");
            NumberHelper.AssertNumberByRepresentation(ulong.MinValue, z8.Value, "NegativeInfinity -> ulong");
        }
    }
}