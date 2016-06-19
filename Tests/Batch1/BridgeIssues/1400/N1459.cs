using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1459 - {0}")]
    public class Bridge1459
    {
        [Test]
        public static void TestHtmlElements()
        {
            var root = Document.GetElementById("qunit-fixture");

            var button = new HTMLButtonElement();
            root.AppendChild(button);

            Assert.NotNull(button, "HTMLButtonElement created");

            Node n = button as Node;
            Assert.NotNull(n, "Node");

            Element el = n as Element;
            Assert.NotNull(el, "Element");

            HTMLElement he = el as HTMLElement;
            Assert.NotNull(el, "HTMLElement");
        }
    }
}
