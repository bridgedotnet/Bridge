using System;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2445 - {0}")]
    public class Bridge2445
    {
        [Test]
        public static async void TestEmptyForLoop()
        {
            var done = Assert.Async();
            int i = 0;
            for (;;)
            {
                await Task.Delay(1);

                if (++i > 10)
                {
                    break;
                }
            }

            Assert.AreEqual(11, i);

            done();
        }
    }
}