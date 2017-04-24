using System;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2565 - {0}")]
    public class Bridge2565
    {
        static async Task RunTest(Action callback)
        {
            await Task.Delay(1);
            callback();
        }

        [Test]
        public static async void TestLambdaInAsyncLoop()
        {
            var done = Assert.Async();
            int counter = 0;
            Action action;
            for (var i = 0; i < 5; i++)
            {
                action = () => counter++;
                await RunTest(() => action());
            }

            Assert.AreEqual(5, counter);
            done();
        }
    }
}