using System;
using Bridge.Test.NUnit;
using Bridge.ClientTestHelper;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2644 - {0}")]
    public class Bridge2644
    {
        [Test]
        public static void TestMax()
        {
            byte byte1 = 10;
            byte byte2 = 20;
            byte1 = Math.Max(byte1, byte2);
            NumberHelper.AssertNumber((byte)20, (object)byte1, "byte");

            sbyte sbyte1 = 10;
            sbyte sbyte2 = 20;
            sbyte1 = Math.Max(sbyte1, sbyte2);
            NumberHelper.AssertDouble((sbyte)20, sbyte1, "sbyte");

            short short1 = 10;
            short short2 = 20;
            short1 = Math.Max(short1, short2);
            NumberHelper.AssertDouble((short)20, short1, "short");

            ushort ushort1 = 10;
            ushort ushort2 = 20;
            ushort1 = Math.Max(ushort1, ushort2);
            NumberHelper.AssertDouble((ushort)20, ushort1, "ushort");

            int int1 = 10;
            int int2 = 20;
            int1 = Math.Max(int1, int2);
            NumberHelper.AssertDouble((int)20, int1, "int");

            uint uint1 = 10;
            uint uint2 = 20;
            uint1 = Math.Max(uint1, uint2);
            NumberHelper.AssertDouble((uint)20, uint1, "unit");

            long long1 = 10;
            long long2 = 20;
            long1 = Math.Max(long1, long2);
            NumberHelper.AssertDouble(20L, long1, "long");

            ulong ulong1 = 10;
            ulong ulong2 = 20;
            ulong1 = Math.Max(ulong1, ulong2);
            NumberHelper.AssertDouble(20UL, ulong1, "ulong");

            float float1 = 10;
            float float2 = 20;
            float1 = Math.Max(float1, float2);
            NumberHelper.AssertDouble(20.0f, float1, "float");

            double double1 = 10;
            double double2 = 20;
            double1 = Math.Max(double1, double2);
            NumberHelper.AssertDouble(20.0d, double1, "double");

            decimal decimal1 = 10;
            decimal decimal2 = 20;
            decimal1 = Math.Max(decimal1, decimal2);
            NumberHelper.AssertNumber(20.0m, decimal1, "decimal");
        }

        [Test]
        public static void TestMin()
        {
            byte byte1 = 10;
            byte byte2 = 20;
            byte2 = Math.Min(byte1, byte2);
            NumberHelper.AssertDouble((byte)10, byte2, "byte");

            sbyte sbyte1 = 10;
            sbyte sbyte2 = 20;
            sbyte2 = Math.Min(sbyte1, sbyte2);
            NumberHelper.AssertDouble((sbyte)10, sbyte2, "sbyte");

            short short1 = 10;
            short short2 = 20;
            short2 = Math.Min(short1, short2);
            NumberHelper.AssertDouble((short)10, short2, "short");

            ushort ushort1 = 10;
            ushort ushort2 = 20;
            ushort2 = Math.Min(ushort1, ushort2);
            NumberHelper.AssertDouble((ushort)10, ushort2, "ushort");

            int int1 = 10;
            int int2 = 20;
            int2 = Math.Min(int1, int2);
            NumberHelper.AssertDouble((int)10, int2, "int");

            uint uint1 = 10;
            uint uint2 = 20;
            uint2 = Math.Min(uint1, uint2);
            NumberHelper.AssertDouble((uint)10, uint2, "uint");

            long long1 = 10;
            long long2 = 20;
            long2 = Math.Min(long1, long2);
            NumberHelper.AssertDouble(10L, long2, "long");

            ulong ulong1 = 10;
            ulong ulong2 = 20;
            ulong2 = Math.Min(ulong1, ulong2);
            NumberHelper.AssertDouble(10UL, ulong2, "ulong");

            float float1 = 10;
            float float2 = 20;
            float2 = Math.Min(float1, float2);
            NumberHelper.AssertDouble(10.0f, float2, "float");

            double double1 = 10;
            double double2 = 20;
            double2 = Math.Min(double1, double2);
            NumberHelper.AssertDouble(10.0d, double2, "double");

            decimal decimal1 = 10;
            decimal decimal2 = 20;
            decimal2 = Math.Min(decimal1, decimal2);
            NumberHelper.AssertNumber(10.0m, decimal2, "decimal");
        }
    }
}