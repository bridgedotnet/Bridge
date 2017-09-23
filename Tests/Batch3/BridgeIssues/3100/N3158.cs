using System;
using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3158 - {0}")]
    public class Bridge3158
    {
        [Test]
        public void TestParenthesizedBlock()
        {
            var CurrentLeft = 40;

            var x = ((int)(CurrentLeft % 60)).ToString().PadLeft(2, '0');

            Assert.AreEqual("40", x);
        }
    }
}