using System.Text.RegularExpressions;
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
            var v = uint.Parse("0xffff", 16);
            Assert.AreEqual(0xFFFF, v);
        }
    }
}