using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1298 - {0}")]
    public class Bridge1298
    {
        [Test(ExpectedCount = 3)]
        public static void TestLongSwitch()
        {
            long[] a = { 1, 2, long.MaxValue };
            foreach (var v in a)
            {
                switch (v)
                {
                    case 1L:
                        {
                            Assert.True(v == 1);
                            break;
                        }
                    case 2:
                        {
                            Assert.True(v == 2);
                            break;
                        }
                    case long.MaxValue:
                        {
                            Assert.True(v == long.MaxValue);
                            break;
                        }
                    default:
                        {
                            Assert.Fail();
                            break;
                        }
                }
            }
        }
    }
}