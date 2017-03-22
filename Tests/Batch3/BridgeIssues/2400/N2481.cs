using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2481 - {0}")]
    public class Bridge2481
    {
        public class c1 : IDisposable
        {
            public void Dispose()
            {
            }
        }

        public static Task<string> bug6_m()
        {
            return Task.FromResult("a");
        }

        public async static Task<string> bug6()
        {
            using (c1 oC1 = new c1())
            {
                string s = await bug6_m();
                if (s != "")
                {
                    return "1" + s;
                }

                string z = await bug6_m();
                if (z != "")
                {
                    return "2" + z;
                }
            }

            return "";
        }

        [Test]
        public static async void TestReturnInAsyncUsing()
        {
            var done = Assert.Async();

            var msg = await bug6();

            Assert.AreEqual("1a", msg);

            done();
        }
    }
}