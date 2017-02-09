using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1206 - {0}")]
    public class Bridge1206
    {
        [Test]
        public static void TestDocumentURLProperty()
        {
            var raw = Script.Get<string>("document.URL");
            var actual = Document.URL;

            Assert.AreEqual(raw, actual);
        }
    }
}