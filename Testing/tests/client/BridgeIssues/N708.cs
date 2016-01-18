using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#708]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#708 - {0}")]
    public class Bridge708
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            Assert.AreEqual(TestIssue(), 12, "Bridge708 TestIssue");
        }

        private static int TestIssue()
        {
            int sum = 0;
            Action f = () =>
            {
                foreach (var n in new int[] { 1, 2, 3 })
                {
                    Action<int> g = (i) => { sum += i; };
                    g(n);
                }
                Action h = () => { sum *= 2; };
                h();
            };

            f();

            return sum;
        }
    }
}