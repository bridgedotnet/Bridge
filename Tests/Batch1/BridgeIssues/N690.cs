using System;
using System.Threading.Tasks;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public class Bridge690A
    {
        private int i3 = 3;
        public async Task<int> AsyncSum(int i1, int i2)
        {
            await Task.Delay(100);
            return i1 + i2 + this.i3;
        }

        public async Task<int> Start()
        {
            return await this.AsyncSum(2, 3);
        }
    }
    public class Bridge690B
    {
        private static int i3 = 17;
        public static async Task<int> AsyncSum(int i1, int i2)
        {
            await Task.Delay(100);
            return i1 + i2 + i3;
        }

        public static async Task<int> Start()
        {
            return await AsyncSum(19, 23);
        }
    }

    // Bridge[#690]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#690 - {0}")]
    public class Bridge690
    {
        [Test(ExpectedCount = 1)]
        public static async void TestUseCaseForInstance()
        {
            var done = Assert.Async();
            var c = new Bridge690A();
            var r = await c.Start();

            Assert.AreEqual(8, r, "Bridge690 TestUseCaseForInstance");
            done();
        }

        [Test(ExpectedCount = 1)]
        public static async void TestUseCaseForStatic()
        {
            var done = Assert.Async();
            var r = await Bridge690B.Start();

            Assert.AreEqual(59, r, "Bridge690 TestUseCaseForStatic");
            done();
        }
    }
}