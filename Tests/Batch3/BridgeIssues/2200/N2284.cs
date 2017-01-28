using System;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2284 - {0}")]
    public class Bridge2284
    {
        public class Person
        {
            [Name("NAME")]
            public string Name { get; set; }

            public string Name2
            {
                [Name("getN2")]
                get;

                [Name("setN2")]
                set;
            }

            public string Name3
            {
                [Name("nm3")]
                get;

                [Name("nm3")]
                set;
            }
        }

        [Test]
        public static void TestNameAttrOnProperty()
        {
            var p = new Person();
            string v = null;

            //@ p.setNAME("Frank");
            //@ v = p.getNAME();
            Assert.AreEqual("Frank", v);
            p.Name = "John";
            Assert.AreEqual("John", p.Name);

            //@ p.setN2("Frank");
            //@ v = p.getN2();
            Assert.AreEqual("Frank", v);
            p.Name2 = "John";
            Assert.AreEqual("John", p.Name2);

            //@ p.nm3("Frank");
            //@ v = p.nm3();
            Assert.AreEqual("Frank", v);
            p.Name3 = "John";
            Assert.AreEqual("John", p.Name3);
        }
    }
}