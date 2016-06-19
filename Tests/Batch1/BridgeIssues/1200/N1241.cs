using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1241 - {0}")]
    public class Bridge1241
    {
        [Test(ExpectedCount = 4)]
        public static void TestMarkElement()
        {
            var root = Document.GetElementById("qunit-fixture");

            var markElement1 = new MarkElement();
            Assert.NotNull(markElement1, "MarkElement created");
            Assert.AreEqual(markElement1.TagName, "MARK");

            var p = new HTMLParagraphElement();
            root.AppendChild(p);

            markElement1.Id = "markElement1";
            p.AppendChild(markElement1);
            markElement1.InnerHTML = "I'm highlighted";

            var m1 = Document.GetElementById("markElement1");
            Assert.AreEqual("I'm highlighted", m1.InnerHTML, "m1.InnerHTML");

            var markElement2 = new MarkElement();
            markElement2.Id = "markElement2";
            p.AppendChild(markElement2);
            markElement2.InnerHTML = "Me too";

            var m2 = Document.GetElementById("markElement2");
            Assert.AreEqual("Me too", m2.InnerHTML, "m2.InnerHTML");
        }
    }
}