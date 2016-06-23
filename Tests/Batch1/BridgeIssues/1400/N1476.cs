using Bridge.Test;

using System.Text.RegularExpressions;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1476 - {0}")]
    public class Bridge1476
    {
        [Test]
        public void TestEscapedBrackets()
        {
            var r = new Regex(@"(?<leftSet>(\[|\())(?<left>[^,]+)?,(?<right>[^\]\)]+)?(?<rightSet>(\]|\)))");
            var m = r.Match("[0,1)]");

            Assert.AreEqual(true, m.Success);
        }
    }
}