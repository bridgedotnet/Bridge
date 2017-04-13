using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test.NUnit;

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

            // X
            public string X = "X";

            // CONFIG_VAL1
            public string CONFIG_VAL1 = "CONFIG_VAL1";

            public string PROP1
            {
                get;
                set;
            }

            // FOO
            public void FOO()
            {
            }

            // M
            public void M(int i)
            {
            }

            // M$1
            public void M(string s)
            {
            }

            // AB
            public void AB(int i)
            {
            }

            // AB$1
            public void AB(string s)
            {
            }

            public event EventHandler SOME_EVENT;

            public event EventHandler ANOTHER_EVENt;

            // Just to prevent compiler warning
            private void UseEvents()
            {
                if (SOME_EVENT != null)
                {
                    SOME_EVENT(null, null);
                }

                if (ANOTHER_EVENt != null)
                {
                    ANOTHER_EVENt(null, null);
                }
            }
        }

        [Test]
        public void TestAllUpperCaseNames()
        {
            var app = new App();

            app.PROP1 = "PROP1";
            app.SOME_EVENT += (sender, e) => { };
            app.ANOTHER_EVENt += (sender, e) => { };

            Assert.AreEqual("ID", app["ID"]);
            Assert.AreEqual("X", app["X"]);
            Assert.AreEqual("PROP1", app["PROP1"]);
            Assert.NotNull(app["FOO"], "FOO");
            Assert.NotNull(app["M"], "M");
            Assert.NotNull(app["M$1"], "M$1");
            Assert.NotNull(app["AB"], "AB");
            // We do not change event name case
            Assert.NotNull(app["SOME_EVENT"], "SOME_EVENT");
            Assert.NotNull(app["ANOTHER_EVENt"], "ANOTHER_EVENt");
        }
    }
}