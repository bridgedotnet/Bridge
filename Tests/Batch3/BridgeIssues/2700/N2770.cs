using System;
using System.Collections.Generic;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2770 - {0}")]
    public class Bridge2770
    {
        public class Person
        {
            public extern string Foo();

            public string Foo(string msg)
            {
                return msg ?? "Empty";
            }
        }

        public class SubClass
        {
            public string toString(string s)
            {
                return s;
            }
        }

        [Test]
        public static void TestExternalMethodName()
        {
            var p = new Person();
            Assert.AreEqual("test", p.Foo("test"));
            Assert.AreEqual("Empty", p.Foo());
            Assert.Null(p["Foo$1"]);
        }

        [Test]
        public static void TestExternalMethodOverload()
        {
            var c = new SubClass();
            Assert.AreEqual("test", c.toString("test"));
            Assert.NotNull(c.ToString());
            Assert.NotNull(c["toString$1"]);
        }
    }
}