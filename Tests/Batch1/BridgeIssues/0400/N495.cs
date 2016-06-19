using Bridge;
using Bridge.Html5;
using Bridge.Test;

using System.Linq;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#495]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#495 - {0}")]
    public class Bridge495
    {
        [Test(ExpectedCount = 3)]
        public static void TestUseCase()
        {
            var root = Document.GetElementById("qunit-fixture");

            var button1 = new HTMLButtonElement();
            button1.InnerHTML = "Button 1";
            button1.Id = "button1";
            button1.Style.Color = HTMLColor.Green;

            root.AppendChild(button1);

            var b1 = Document.GetElementById("button1");
            Assert.AreEqual("green", b1.Style.Color, "b1.Style.Color green");

            var button2 = new HTMLButtonElement();
            button2.InnerHTML = "Button 2";
            button2.Id = "button2";
            button2.Style.BackgroundColor = "yellow";

            root.AppendChild(button2);

            var b2 = Document.GetElementById("button2");
            Assert.AreEqual(HTMLColor.Yellow, b2.Style.BackgroundColor, "b2.Style.BackgroundColor HTMLColor.Yellow");

            var hexColor = "#FFEEAA";
            var divElement1 = new HTMLDivElement();
            divElement1.InnerHTML = "Div 1";
            divElement1.Id = "div1";
            divElement1.Style.Color = hexColor;

            root.AppendChild(divElement1);

            var div1 = Document.GetElementById("div1");
            Assert.AreEqual("rgb(255, 238, 170)", div1.Style.Color, "div1.Style.Color " + hexColor);
        }
    }
}