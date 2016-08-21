using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1512 - {0}")]
    public class Bridge1512
    {
        public static void MethodParams(params object[] arguments)
        {
            Assert.AreEqual(0, arguments.Length, "params");
        }

        public static void MethodDefault(string arguments = "3")
        {
            Assert.AreEqual("3", arguments, "default");
        }

        [Test]
        public void TestParametersReservedNames()
        {
            Bridge1512.MethodParams();
            Bridge1512.MethodDefault();
        }
    }
}
