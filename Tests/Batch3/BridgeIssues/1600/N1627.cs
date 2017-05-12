using System;
using System.Collections.Generic;
using Bridge;
using Bridge.Test.NUnit;


namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1627 - {0}")]
    public class Bridge1627
    {
        [Test]
        public void ForeachWithListItemCallbackWorks()
        {
            string result = "";
            new List<string> { "a", "b", "c" }.ForEach(s => result += s);

            Assert.AreEqual(result, "abc");
        }
    }
}