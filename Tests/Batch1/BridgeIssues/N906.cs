using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#906]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#906 - {0}")]
    public class Bridge906
    {
        public static async Task myfunc()
        {
            await Task.Delay(1);
        }
        
        [Test(ExpectedCount = 1)]
        public static async void TestIfAsyncMethod()
        {
            var asyncComplete = Assert.Async();

            var myvar = new [] {new {Value = 1}, new {Value = 2}};
            int sum = 0;
            await myfunc();

            foreach (var d in myvar)
            {
                if (d.Value > 0)
                {
                    sum += d.Value;
                }
            }

            await myfunc();

            Assert.AreEqual(3, sum);

            asyncComplete();
        }

        [Test(ExpectedCount = 1)]
        public static async void TestIfElseAsyncMethod()
        {
            var asyncComplete = Assert.Async();

            var myvar = new[] { new { Value = -3 }, new { Value = 2 } };
            int sum = 0;
            await myfunc();

            foreach (var d in myvar)
            {
                if (d.Value > 0)
                {
                    sum += d.Value;
                }
                else
                {
                    sum -= d.Value;
                }
            }

            await myfunc();

            Assert.AreEqual(5, sum);

            asyncComplete();
        }
    }
}