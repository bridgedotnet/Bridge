using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1345 - {0}")]
    public class Bridge1345
    {
        [Test]
        public static void TestBoolInConsole()
        {
            try
            {
                string value = "hello world";

                Bridge.Utils.Console.Instance.BufferedOutput = "";
                Console.Write(true);
                Console.Write(false);
                Console.Write(value == "hello world");

                Assert.AreEqual("TrueFalseTrue", Bridge.Utils.Console.Instance.BufferedOutput);

                Bridge.Utils.Console.Instance.BufferedOutput = "";
                Console.WriteLine(true);
                Console.WriteLine(false);
                Console.WriteLine(value == "hello world");

                Assert.AreEqual("TrueFalseTrue", Bridge.Utils.Console.Instance.BufferedOutput);
            }
            finally
            {
                Bridge.Utils.Console.Instance.BufferedOutput = null;
                Bridge.Utils.Console.Hide();
            }
        }
    }
}