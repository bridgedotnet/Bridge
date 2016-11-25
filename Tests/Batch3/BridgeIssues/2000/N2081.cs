using System;
using System.Collections.Generic;
using Bridge.Test;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2081 - {0}")]
    public class Bridge2081
    {
        public static async Task<string> TestMethod()
        {
            try
            {
                //await to force state-machine generation
                await Task.Delay(1);

                //raise exception
                int j = 1;
                j = j / 0;

                return "OK";
            }
            catch (Exception)
            {
                return "ERROR";
            }
            finally
            {
                //may be empty
            }
        }

        [Test]
        public static async void TestReturnFromCatch()
        {
            var done = Assert.Async();
            var s = await TestMethod();
            Assert.AreEqual("ERROR", s);

            done();
        }
    }
}