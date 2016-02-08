using System.Threading.Tasks;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#912]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#912 - {0}")]
    public class Bridge912
    {
        public static async Task<int> myfunc()
        {
            await Task.Delay(1);
            return 1;
        }
        
        [Test(ExpectedCount = 1)]
        public static async void TestAsyncMethodInBlock()
        {
            var asyncComplete = Assert.Async();
            var result = 0;
            {
                result = await myfunc();
            }

            Assert.AreEqual(result, 1);

            asyncComplete();
        }
    }
}