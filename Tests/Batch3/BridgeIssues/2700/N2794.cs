using System;
using System.Collections.Generic;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2794 - {0}")]
    public class Bridge2794
    {
        [Template("{this}.{@}({msg})")]
        public static extern object DoSomething(string msg);

        [Template("{$}({i})")]
        public static extern object DoSomething(int i);

        [Unbox(true)]
        public static object DoSomething(object o)
        {
            return o;
        }

        [Test]
        public static void TestTemplateTokens()
        {
            Assert.AreEqual("test", DoSomething("test"));
            Assert.AreEqual(5, Bridge2794.DoSomething(5));
        }
    }
}