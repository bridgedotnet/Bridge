using System;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Reflection;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3168 - {0}")]
    public class Bridge3168
    {        
        [Test]
        public void TestToLocalTime()
        {
            DateTime now = new DateTime(2017, 6, 8, 12, 59 , 0);
            now = now.AddMinutes(-1);
            now = now.ToLocalTime();

            Assert.AreEqual(2017, now.Year);
            Assert.AreEqual(6, now.Month);
            Assert.AreEqual(8, now.Day);
        }
    }
}