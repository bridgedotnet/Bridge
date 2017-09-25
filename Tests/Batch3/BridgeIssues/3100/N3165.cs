using System;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Reflection;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3165 - {0}")]
    public class Bridge3165
    {
        [Reflectable]
        public class NinjaScript
        {
            public string Name
            {
                get; set;
            }
        }

        [Test]
        public void TestSetValueWithIndex()
        {
            NinjaScript ns1 = new NinjaScript { Name = "Test" };

            var pi = ns1.GetType().GetProperty("Name");
            string val = (string)pi.GetValue(ns1, null);
            pi.SetValue(ns1, val + "1", null);

            Assert.AreEqual("Test1", ns1.Name);
        }
    }
}