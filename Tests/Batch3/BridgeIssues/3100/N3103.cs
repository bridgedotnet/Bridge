using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3103 - {0}")]
    public class Bridge3103
    {
        [ObjectLiteral]
        public class c1
        {
            public static string Prop1
            {
                get;
                set;
            }

            public static void m1(string p1)
            {
                Prop1 = p1;
            }
        }

        [ObjectLiteral(ObjectCreateMode.Constructor)]
        public class Person
        {
            public string Name { get; set; }
        }

        [ObjectLiteral(ObjectCreateMode.Plain)]
        public class Company
        {
            public string Name { get; set; }
        }

        public static T CheckTypeDefault<T>()
        {
            return default(T);
        }


        [Test]
        public static void TestLiteralStaticMember()
        {
            Action<string> a1 = c1.m1;
            c1.Prop1 = "test";
            Assert.AreEqual("test", Script.Write<string>("Bridge.ClientTest.Batch3.BridgeIssues.Bridge3103.c1.Prop1"));

            c1.m1("1");
            Assert.AreEqual("1", Script.Write<string>("Bridge.ClientTest.Batch3.BridgeIssues.Bridge3103.c1.Prop1"));

            a1("3");
            Assert.AreEqual("3", Script.Write<string>("Bridge.ClientTest.Batch3.BridgeIssues.Bridge3103.c1.Prop1"));
        }

        [Test]
        public static void TestLiteralDefaultValue()
        {
            Assert.Null(CheckTypeDefault<Company>());
            Assert.Null(CheckTypeDefault<Person>());
        }
    }
}