using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1754 - {0}")]
    public class Bridge1754
    {
        public class App
        {
            // ID
            public string ID = "ID";

            // x
            public string X = "x";

            // CONFIG_VAL1
            public string CONFIG_VAL1 = "CONFIG_VAL1";

            public string PROP1
            {
                get;
                set;
            }

            // FOO
            public void FOO() { }
        }

        [Test]
        public void TestAllUpperCaseNames()
        {
            var app = new App();
            app.PROP1 = "PROP1";
            Assert.AreEqual("ID", app["ID"]);
            Assert.AreEqual("x", app["x"]);
            Assert.AreEqual("PROP1", app["getPROP1"].As<Func<string>>()());
        }
    }
}