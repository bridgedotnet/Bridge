using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3607 - {0}")]
    public class Bridge3607
    {
        public class SomeFeature
        {
            public string type;
            public void dowork(object obj)
            {
                type = obj["type"].ToString();
            }

            [Template("dowork({ type: {0} });")]
            public virtual extern void DoSomething(string type);
        }

        [Test]
        public static void TestNullConditional()
        {
            DateTime? test = null;
            test?.ToString();

            SomeFeature feature = new SomeFeature();
            feature?.DoSomething("test");

            Assert.AreEqual("test", feature.type);
        }
    }
}