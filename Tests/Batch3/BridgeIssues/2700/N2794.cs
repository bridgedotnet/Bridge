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

        [Convention(Notation.LowerCase)]
        [Template("{$}({i})")]
        public static extern object DoSomething(bool b);

        [Unbox(true)]
        public static object DoSomething(object o)
        {
            return o;
        }

        [Unbox(true)]
        public static object dosomething(object o)
        {
            return 77;
        }

        [Name("{@}_1")]
        public int M(int i)
        {
            return 1;
        }

        [Name("{$}_2")]
        public int M(string s)
        {
            return 2;
        }

        [Convention(Notation.LowerCase)]
        [Name("{$}_3")]
        public int M(bool b)
        {
            return 3;
        }

        [Test]
        public static void TestTemplateTokens()
        {
            Assert.AreEqual("test", DoSomething("test"));
            Assert.AreEqual(5, Bridge2794.DoSomething(5));
            Assert.AreEqual(77, Bridge2794.DoSomething(true));
        }

        [Test]
        public static void TestNameTokens()
        {
            var c = new Bridge2794();
            Assert.AreEqual(1, c.M(1));
            Assert.AreEqual(1, c["M_1"].As<Func<int>>()());

            Assert.AreEqual(2, c.M(""));
            Assert.AreEqual(2, c["M_2"].As<Func<int>>()());

            Assert.AreEqual(3, c.M(true));
            Assert.AreEqual(3, c["m_3"].As<Func<int>>()());
        }
    }
}