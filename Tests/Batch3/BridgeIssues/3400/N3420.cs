using System;
using Bridge.Test.NUnit;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3420 - {0}")]
    public class Bridge3420
    {
        [Test]
        public async static void TestTaskFromResult()
        {
            var done = Assert.Async();
            Task t = Task.FromResult(3);
            Task<int> t2 = (Task<int>)t;
            Assert.AreEqual(3, await t2);
            done();
        }
    }
}