using System;
using Bridge.Test.NUnit;
using System.Globalization;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3192 - {0}")]
    public class Bridge3192
    {
        [Test]
        public void TestStringFormat()
        {
            int[] i = new int[] { 1 };
            int[] j = new int[] { 2 };

            Assert.AreEqual("1", string.Format("{0}", i, j));

            object cpy = i;
            Assert.AreEqual("1", string.Format("{0}", cpy));

            Assert.AreEqual("12test", string.Format("{0}{1}{2}", i, j, "test"));
        }
    }
}