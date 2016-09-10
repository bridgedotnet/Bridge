using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1509 - {0}")]
    public class Bridge1509
    {
        [Test]
        public void TestPreformanceNowIsDouble()
        {
            double p;
            for (int i = 0; i < 10; i++)
            {
                p = Bridge.Html5.Global.Performance.Now();
                if (!HasNoFraction(p))
                {
                    Assert.True(true, "performance.now() returns float");
                    return;
                }
            }

            Assert.Fail("performance.now() did 10 attemps to check if it returns float");
        }

        private bool HasNoFraction(double n)
        {
            return n % 1 == 0;
        }
    }
}