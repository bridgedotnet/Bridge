using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here consists in ensuring that trailing semicolons are
    /// removed from template strings and also conditional inlining
    /// </summary>
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

        /// <summary>
        /// Tests whether 
        /// </summary>
        [Test]
        public static void TestNullConditional()
        {
            DateTime? test = null;
            var x = test?.ToString();

            Assert.Null(x, "Null inline conditional's ToString() resolves to empty string.");
        }

        /// <summary>
        /// Tests whether semicolon is stripped from templates.
        /// </summary>
        [Test]
        public static void TestSemicolonStripping()
        {
            SomeFeature feature = new SomeFeature();
            feature?.DoSomething("test");

            Assert.AreEqual("test", feature.type, "Template ending with semicolon has its semicolon stripped at build time.");
        }
    }
}