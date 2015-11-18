using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using System.Linq;

namespace ClientTestLibrary
{
    // Bridge[#495]
    [FileName("testBridgeIssues.js")]
    internal class Bridge495
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(3);

            var root = Document.GetElementById("qunit-fixture");

            var button1 = new ButtonElement();
            button1.InnerHTML = "Button 1";
            button1.Id = "button1";
            button1.Style.Color = HTMLColor.Green;

            root.AppendChild(button1);

            var b1 = Document.GetElementById("button1");
            assert.Equal(b1.Style.Color, "green", "b1.Style.Color green");

            var button2 = new ButtonElement();
            button2.InnerHTML = "Button 2";
            button2.Id = "button2";
            button2.Style.BackgroundColor = "yellow";

            root.AppendChild(button2);

            var b2 = Document.GetElementById("button2");
            assert.Equal(b2.Style.BackgroundColor, HTMLColor.Yellow, "b2.Style.BackgroundColor HTMLColor.Yellow");

            var hexColor = "#FFEEAA";
            var divElement1 = new DivElement();
            divElement1.InnerHTML = "Div 1";
            divElement1.Id = "div1";
            divElement1.Style.Color = hexColor;

            root.AppendChild(divElement1);

            var div1 = Document.GetElementById("div1");
            assert.Equal(div1.Style.Color, "rgb(255, 238, 170)", "div1.Style.Color " + hexColor);

        }
    }
}
