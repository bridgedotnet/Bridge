using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.ClientTest.Batch3.BridgeIssues.NS2;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    namespace NS1
    {
        public abstract class Base
        {
            protected enum Wrong
            {
                Something1,
                Something2
            }
        }
    }

    namespace NS2
    {
        using System;
        using NS1;

        public class Program : Base
        {
            public static void Test()
            {
                string test = nameof(Wrong.Something1);

                Assert.AreEqual("Something1", test);
            }
        }
    }

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2957 - {0}")]
    public class Bridge2957
    {
        [Test]
        public static void TestNameof()
        {
            Program.Test();
        }
    }
}