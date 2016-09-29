using System.Text.RegularExpressions;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1897 - {0}")]
    public class Bridge1897
    {
        [Test]
        public void TestCase()
        {
            const string pattern = @"([)])";
            const string text = ")";

            var rx = new Regex(pattern);
            var m = rx.Match(text);
            Assert.True(m.Success);
        }
    }
}