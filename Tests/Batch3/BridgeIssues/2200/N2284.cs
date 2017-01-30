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

            //@ p.setNAME("Frank1");
            //@ v = p.getNAME();
            Assert.AreEqual("Frank1", v);
            p.Name = "John1";
            Assert.AreEqual("John1", p.Name);

            //@ p.setN2("Frank2");
            //@ v = p.getN2();
            Assert.AreEqual("Frank2", v);
            p.Name2 = "John2";
            Assert.AreEqual("John2", p.Name2);

            //@ p.nm3("Frank3");
            //@ v = p.nm3();
            Assert.AreEqual("Frank3", v);
            p.Name3 = "John3";
            Assert.AreEqual("John3", p.Name3);
        }
    }
}
