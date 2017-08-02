using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2962 - {0}")]
    public class Bridge2962
    {
        public class Class1
        {
            public void Method1<T>(string parameter1)
            {
                Assert.AreEqual("parameter1value", parameter1);
            }
        }

        public class Class2 : Class1
        {
            public void Method2()
            {
                Method1<string>
                (
                    parameter1: "parameter1value"
                );
            }
        }

        [Test]
        public static void TestGenericMethodIdentifier()
        {
            new Class2().Method2();
        }
    }
}