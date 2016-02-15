using System;
using System.Threading.Tasks;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#830]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#830 - {0}")]
    public class Bridge830
    {
        private static async Task<Exception> TestMethod(string method, bool throwException)
        {
            if (method == null)
            {
                throw new ArgumentNullException("method");
            }

            try
            {
                var task = Task.FromResult(new Exception("Success"));
                if (throwException)
                {
                    throw new Exception("test");    
                }
                
                return await task;
            }
            catch (Exception exception)
            {
                return new Exception("Fail: " + exception.Message);
            }
        }

        [Test(ExpectedCount = 2)]
        public async static void TestUseCase()
        {
            var done = Assert.Async();

            var res = await TestMethod("", false);
            Assert.AreEqual("Success", res.Message);

            res = await TestMethod("", true);
            Assert.AreEqual("Fail: test", res.Message);

            done();
        }
    }
}