using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2911 - {0}")]
    public class Bridge2911
    {
        [Test]
        public static void TestGenericHtmlClass()
        {
            var mouseEventList = new List<MouseEvent<HTMLElement>>();
            Assert.NotNull(mouseEventList);
        }
    }
}