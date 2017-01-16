using System;
using Bridge.Html5;
using Bridge.Test;
using Bridge.ClientTestHelper;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2243 - {0}")]
    public class Bridge2243
    {
        [Test]
        public static void TestElementHiddenField()
        {
            Element d = new HTMLDivElement();
            var root = HtmlHelper.FixtureElement;
            root.AppendChild(d);

            Script.Write("{0}.hidden = true;", d);
            Assert.True(d.Hidden);

            Script.Write("{0}.hidden = false;", d);
            Assert.False(d.Hidden);

            d.Hidden = true;
            Assert.True(d.Hidden);

            d.Hidden = false;
            Assert.False(d.Hidden);
        }
    }
}