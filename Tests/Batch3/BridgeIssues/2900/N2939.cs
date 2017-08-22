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
    [TestFixture(TestNameFormat = "#2939 - {0}")]
    public class Bridge2939
    {
        public class ADisposable : IDisposable
        {
            public void Dispose()
            {
                Bridge2939.pass = true;
            }
        }

        public static ADisposable Disposable = new ADisposable();
        public static bool pass;

        public static int Something
        {
            get
            {
                using (Disposable)
                    return 1;
            }
        }

        [Test]
        public static void TestUsingForIdentifier()
        {
            pass = false;
            var t = Something;
            Assert.True(pass);
        }
    }
}