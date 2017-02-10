using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2186 - {0}")]
    public class Bridge2186
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
            Bridge.Utils.Console.Hide();
        }

        [Test]
        public static void TestConsoleWriteLineParameterless()
        {
            Console.WriteLine();
            Assert.AreEqual(String.Empty, Output);
        }
    }
}