using System;
using Bridge.Test.NUnit;
using System.Threading.Tasks;
#pragma warning disable 162

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2502 - {0}")]
    public class Bridge2502
    {
        public static async Task<int> Test()
        {
            while (true)
            {
                int i = -1;

                await Task.Delay(1);

                switch (i)
                {
                    case -1:
                        break;
                }

                for (i = 0; i < 10; i++)
                {
                    break;
                }

                return i;
            }

            return -1;
        }

        [Test]
        public static async void TestAsyncBreak()
        {
            var done = Assert.Async();
            Assert.AreEqual(0, await Bridge2502.Test());
            done();
        }
    }
}