using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2538 - {0}")]
    public class Bridge2538
    {
        [Test]
        public static void TestArraySegment()
        {
            var arr = new byte[ushort.MaxValue];
            ArraySegment<byte> buffer = new ArraySegment<byte>(arr);

            Assert.AreEqual(ushort.MaxValue, buffer.Count);
            Assert.AreEqual(arr, buffer.Array);
            Assert.AreEqual(0, buffer.Offset);
        }
    }
}