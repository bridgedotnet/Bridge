using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1615 - {0}")]
    public class Bridge1615
    {
        [Test]
        public void TestStringBuilderSubstringConstructor()
        {
            var sb = new StringBuilder("some text", 5, 3, 55);
            Assert.AreEqual("tex", sb.ToString(), "Text");
            Assert.AreEqual(3, sb.Length, "Length");
            Assert.AreEqual(55, sb.Capacity, "Capacity");
        }
    }
}