using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1458 - {0}")]
    public class Bridge1458
    {
        private static string Output
        {
            get
            {
                return Bridge.Utils.Console.Instance.BufferedOutput;
            }

            set
            {
                Bridge.Utils.Console.Instance.BufferedOutput = value;
            }
        }

        [SetUp]
        public static void ClearOutput()
        {
            Output = "";
        }

        [TearDown]
        public static void ResetOutput()
        {
            Output = null;
        }

        [Test(ExpectedCount = 1)]
        public static void TestConsoleWriteLineForLong()
        {
            object v = 1L;

            System.Console.Write(v);
            Assert.AreEqual("1", Output);
            ClearOutput();
        }
    }
}