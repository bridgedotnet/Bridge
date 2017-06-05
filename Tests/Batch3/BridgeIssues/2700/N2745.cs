using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2745 - {0}")]
    public class Bridge2745
    {
        public class Asd
        {
            public string Test1;
            public string Test2
            {
                get; protected set;
            }

            public Asd(string forTest2)
            {
                this.Test2 = forTest2;
            }

            public Asd()
            {
            }
        }

        public class Hoho
        {
            public Asd AsdInstance = new Asd("haha") { Test1 = "hoho" };
            public Asd Property
            {
                get; set;
            }
        }

        [Test]
        public static void TestFieldInitialization()
        {
            Hoho hoho = new Hoho();
            Assert.AreEqual("hoho", hoho.AsdInstance.Test1);
            Assert.AreEqual("haha", hoho.AsdInstance.Test2);
        }
    }
}