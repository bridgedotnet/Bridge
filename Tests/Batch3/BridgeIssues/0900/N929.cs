using Bridge.Test.NUnit;
using System;
using System.Threading.Tasks;

#pragma warning disable 162

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#929]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#929 - {0}")]
    public class Bridge929
    {
        [Test(ExpectedCount = 1)]
        public async static void TestAsyncException()
        {
            var done = Assert.Async();

            try
            {
                await Test();
                Assert.Fail("Exception should be rethrowed in catch block");
            }
            catch (Exception e)
            {
                Assert.AreEqual("test", e.Message);
            }

            done();
        }

        private static async Task Test()
        {
            try
            {
                await Task.Delay(1);
                throw new Exception("test");
            }
            catch (Exception)
            {
                try
                {
                    throw new Exception("catch");
                }
                catch
                {
                }
                throw;
            }
        }
    }
}