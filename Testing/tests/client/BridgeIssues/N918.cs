using System.Threading.Tasks;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#918]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#918 - {0}")]
    public class Bridge918
    {
        public async Task<int> Test()
        {
            await Task.Delay(1);
            return 1;
        }
        
        [Test(ExpectedCount = 1)]
        public static async void TestDynamicAsyncResult()
        {
            var asyncComplete = Assert.Async();
            dynamic a = new Bridge918();
            var result = (int)await a.test();

            Assert.AreEqual(result, 1);

            asyncComplete();
        }
    }
}