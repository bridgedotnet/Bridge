using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1896 - {0}")]
    public class Bridge1896
    {
        [Test]
        public void TestHexStringToInt()
        {
            int radix = 16;

            var v1 = uint.Parse("ffff", radix);
            Assert.AreEqual(0xFFFF, v1);

            Assert.Throws<FormatException>(() => { uint.Parse("0xffff", radix); });

            uint v2;
            var b2 = uint.TryParse("1700ffff", out v2, radix);
            Assert.True(b2, "b2");
            Assert.AreEqual(0x1700FFFF, v2);

            uint v3;
            var b3 = uint.TryParse("0x1700fffА", out v3, radix);
            Assert.False(b3, "b3: " + v3);

            uint v4;
            var b4 = uint.TryParse("1700fffg", out v4, radix);
            Assert.False(b4, "b4: " + v4);
        }
    }
}