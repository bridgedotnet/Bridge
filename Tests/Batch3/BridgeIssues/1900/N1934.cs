using System.Text.RegularExpressions;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1934 - {0}")]
    public class Bridge1934
    {
        [Test]
        public void TestEscapeSequencesInRegex()
        {
            var patterns = new[] {@"\\", @"\@", @"\<", @"\>"};
            var inputs = new[] { @"\", "@", "<", ">" };
            var expResults = new[] { true, true, true, true };

            for (var i = 0; i < patterns.Length; i++)
            {
                var pattern = patterns[i];
                var input = inputs[i];
                var expected = expResults[i];

                var rgx = new Regex(pattern);
                var actual = rgx.IsMatch(input);

                Assert.AreEqual(expected, actual);
            }
        }
    }
}