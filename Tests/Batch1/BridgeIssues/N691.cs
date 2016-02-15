using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#691]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#691 - {0}")]
    public class Bridge691
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            var pos = 0;
            var lines = new string[] { "", "", "str" };
            while (pos < lines.Length)
            {
                while (pos < lines.Length && lines[pos].Length == 0)
                {
                    pos++;
                }

                if (!(pos < lines.Length))
                {
                    break;
                }

                Action<int> a = p => { };

                if (pos > 0)
                {
                    break;
                }
            }

            Assert.AreEqual(2, pos, "Bridge691");
        }
    }
}