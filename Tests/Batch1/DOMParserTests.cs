using Bridge.Html5;
using Bridge.Test.NUnit;
using Bridge.ClientTest.Utilities;
using System;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_HTML5)]
    [TestFixture(TestNameFormat = "DOMParser #1728 - {0}")]
    public class DOMParserTests
    {
        [Test]
        public void ConstructorWorks()
        {
            var parser = new DOMParser();

            Assert.NotNull(parser);
        }

        [Test]
        public void XmlParsingWorks()
        {
            var parser = new DOMParser();

            var d = parser.ParseFromString("<root><customer name=\"John\" address=\"Chicago\"></customer></root>", DOMParser.SupportedType.TextXml);

            Assert.NotNull(d);
            Assert.AreEqual(1, d.ChildNodes.Length);
            Assert.NotNull(d.FirstChild);
            Assert.AreEqual("root", d.FirstChild.NodeName);
            Assert.AreEqual(1, d.FirstChild.ChildNodes.Length);

            var c = d.FirstChild.FirstChild;
            Assert.NotNull(c);
            Assert.AreEqual("customer", c.NodeName);
        }

        [Test]
        public void XmlParsingShouldThrow()
        {
            var parser = new DOMParser();

            if (!BrowserHelper.IsPhantomJs())
            {
                Assert.Throws(() => { parser.ParseFromString("<root></root>", "xml"); });
            }
            else
            {
                var d = parser.ParseFromString("<root></root>", "xml");
                Assert.Null(d);
            }
        }
    }
}