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

        [External]
        public class ExternalClass
        {
            public extern string Foo();

            public extern string Foo(string msg);

            public string Foo(bool msg)
            {
                return "bool";
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

        [Test]
        public static void TestExternalClass()
        {
            /*@ Bridge.ClientTest.Batch3.BridgeIssues.Bridge2770.ExternalClass = function() {
                this.Foo = function(s) {
                    if (s == null) {
                        return "Empty";
                    }
                    return s.toString();
                }
            };
            */

            var c = new ExternalClass();

            Assert.AreEqual("test", c.Foo("test"));
            Assert.AreEqual("true", c.Foo(true));
            Assert.AreEqual("Empty", c.Foo());
        }
    }
}