using Bridge.Html5;
using Bridge.Test;
using Bridge.ClientTestHelper;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#816]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#816 - {0}")]
    public class Bridge816
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            var textArea = new HTMLTextAreaElement();
            textArea.Id = "textArea1";
            textArea.Value = "Test";

            var root = HtmlHelper.FixtureElement;
            root.AppendChild(textArea);

            var ta = Document.GetElementById("textArea1");
            Assert.AreEqual("Test", ta["value"], "Bridge816 textArea1.value");
        }
    }
}