using System;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#928]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#928 - {0}")]
    public class Bridge928
    {
        [Test(ExpectedCount = 1)]
        public async static void TestAsyncMethod()
        {
            var done = Assert.Async();
            var result = false;
            try
            {
                await Task.Delay(1);
            }
            finally
            {
                try
                {
                    throw new Exception("test");
                }
                catch
                {
                }

                result = true;
            }

            Assert.True(result);

            done();
        }
    }
}