using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1493 - {0}")]
    public class Bridge1493
    {
        enum Enum : long
        {
            A = 0L
        }

        [Test]
        public void TestEnumLong()
        {
            Enum @enum = Enum.A;
            Assert.True(0 == (ulong)@enum, "ulong");
            Assert.True(0 == (uint)@enum, "uint");
            Assert.True(0 == (int)@enum, "int");
            Assert.True(0 == (short)@enum, "short");
            Assert.True(0 == (ushort)@enum, "ushort");
            Assert.True(0 == (byte)@enum, "byte");
            Assert.True(0 == (sbyte)@enum, "sbyte");
            Assert.True(0 == (float)@enum, "float");
            Assert.True(0 == (double)@enum, "double");
            Assert.True(0 == (decimal)@enum, "decimal");
        }
    }
}