using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1402 - {0}")]
    public class Bridge1402
    {
        [Test]
        public static void TestLongClipping()
        {
            long value = long.MaxValue;
            Assert.AreEqual(0xFF, (byte)(value >> 2));
            Assert.AreEqual(-1, (sbyte)(value >> 2));
            Assert.AreEqual(-1, (short)(value >> 2));
            Assert.AreEqual(0xFFFF, (ushort)(value >> 2));
            Assert.AreEqual(-1, (int)(value >> 2));
            Assert.AreEqual(0xFFFFFFFF, (uint)(value >> 2));
        }
    }
}