using Bridge.Test.NUnit;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1061 - {0}")]
    public class Bridge1061
    {
        [Test]
        public static void TestIsDigitFromLinq()
        {
            Assert.True(char.IsDigit('1'));
            Assert.True("1".Any(c => char.IsDigit(c)));

            string s = "s1*";
            Assert.AreEqual(1, s.Count(c => char.IsDigit(c)), "String IsDigit");
            Assert.AreEqual(1, s.Count(c => char.IsLetter(c)), "String IsLetter");
            Assert.AreEqual(2, s.Count(c => char.IsLetterOrDigit(c)), "String IsLetterOrDigit");
        }
    }
}