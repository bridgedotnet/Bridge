using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1744 - {0}")]
    public class Bridge1744
    {
        [Test]
        public void TestMethodInvocationWithParams()
        {
            Assert.AreEqual(0, Invoke(), "Invoke()");
            Assert.AreEqual(-1, Invoke(null), "Invoke(null)");
        }

        public static int Invoke(params object[] args)
        {
            if (args == null)
            {
                return -1;
            }

            return args.Length;
        }
    }
}