using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2720 - {0}")]
    public class Bridge2720
    {
        public static async Task<long> Test()
        {
            await Task.Delay(1);
            return 1;
        }

        [Test]
        public static async void TestAsyncAssignment()
        {
            var done = Assert.Async();
            long ret = 0;
            ret = await Test();
            Assert.True(ret == 1);
            done();
        }
    }
}