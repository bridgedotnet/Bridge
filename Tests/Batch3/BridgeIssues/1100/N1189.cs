using Bridge.Test.NUnit;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1189 - {0}")]
    public class Bridge1189
    {
        [Test]
        public async static void TestTaskNumber()
        {
            var done = Assert.Async();
            var resultLong = await Bridge1189.FooLong();
            Assert.True(-5 == resultLong, "Task<long>");

            var resultDecimal = await Bridge1189.FooDecimal();
            Assert.True(-7 == resultDecimal, "Task<decimal>");

            done();
        }

        public static async Task<long> FooLong()
        {
            await Task.Delay(1);
            return -5;
        }

        public static async Task<decimal> FooDecimal()
        {
            await Task.Delay(1);
            return -7;
        }
    }
}