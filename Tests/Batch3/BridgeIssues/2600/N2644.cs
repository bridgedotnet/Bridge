using System;
using System.Text.RegularExpressions;
using Bridge.Html5;
using Bridge.Test.NUnit;

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
            Assert.AreEqual(20, byte1);

            sbyte sbyte1 = 10;
            sbyte sbyte2 = 20;
            sbyte1 = Math.Max(sbyte1, sbyte2);
            Assert.AreEqual(20, sbyte1);

            short short1 = 10;
            short short2 = 20;
            short1 = Math.Max(short1, short2);
            Assert.AreEqual(20, short1);

            ushort ushort1 = 10;
            ushort ushort2 = 20;
            ushort1 = Math.Max(ushort1, ushort2);
            Assert.AreEqual(20, ushort1);

            int int1 = 10;
            int int2 = 20;
            int1 = Math.Max(int1, int2);
            Assert.AreEqual(20, int1);

            uint uint1 = 10;
            uint uint2 = 20;
            uint1 = Math.Max(uint1, uint2);
            Assert.AreEqual(20, uint1);

            long long1 = 10;
            long long2 = 20;
            long1 = Math.Max(long1, long2);
            Assert.True(20 == long1);

            ulong ulong1 = 10;
            ulong ulong2 = 20;
            ulong1 = Math.Max(ulong1, ulong2);
            Assert.True(20 == ulong1);

            float float1 = 10;
            float float2 = 20;
            float1 = Math.Max(float1, float2);
            Assert.AreEqual(20, float1);

            double double1 = 10;
            double double2 = 20;
            double1 = Math.Max(double1, double2);
            Assert.AreEqual(20, double1);

            decimal decimal1 = 10;
            decimal decimal2 = 20;
            decimal1 = Math.Max(decimal1, decimal2);
            Assert.True(20 == decimal1);
        }

        [Test]
        public static void TestMin()
        {
            byte byte1 = 10;
            byte byte2 = 20;
            byte1 = Math.Min(byte1, byte2);
            Assert.AreEqual(10, byte1);

            sbyte sbyte1 = 10;
            sbyte sbyte2 = 20;
            sbyte1 = Math.Min(sbyte1, sbyte2);
            Assert.AreEqual(10, sbyte1);

            short short1 = 10;
            short short2 = 20;
            short1 = Math.Min(short1, short2);
            Assert.AreEqual(10, short1);

            ushort ushort1 = 10;
            ushort ushort2 = 20;
            ushort1 = Math.Min(ushort1, ushort2);
            Assert.AreEqual(10, ushort1);

            int int1 = 10;
            int int2 = 20;
            int1 = Math.Min(int1, int2);
            Assert.AreEqual(10, int1);

            uint uint1 = 10;
            uint uint2 = 20;
            uint1 = Math.Min(uint1, uint2);
            Assert.AreEqual(10, uint1);

            long long1 = 10;
            long long2 = 20;
            long1 = Math.Min(long1, long2);
            Assert.True(10 == long1);

            ulong ulong1 = 10;
            ulong ulong2 = 20;
            ulong1 = Math.Min(ulong1, ulong2);
            Assert.True(10 == ulong1);

            float float1 = 10;
            float float2 = 20;
            float1 = Math.Min(float1, float2);
            Assert.AreEqual(10, float1);

            double double1 = 10;
            double double2 = 20;
            double1 = Math.Min(double1, double2);
            Assert.AreEqual(10, double1);

            decimal decimal1 = 10;
            decimal decimal2 = 20;
            decimal1 = Math.Min(decimal1, decimal2);
            Assert.True(10 == decimal1);
        }
    }
}