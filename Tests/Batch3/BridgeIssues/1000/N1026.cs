using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#1026]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1026 - {0}")]
    public class Bridge1026
    {
        [Test(ExpectedCount = 3)]
        public static void TestReservedWordIfRefOut()
        {
            string function;
            int i = 1;
            TestFunction(ref i, out function);
            Assert.AreEqual(2, i);
            Assert.AreEqual("1", function);

            var res = Function(function);
            Assert.AreEqual("11", res);
        }

        private static void TestFunction(ref int i, out string function)
        {
            function = i.ToString();
            i++;
        }

        private static string Function(string function)
        {
            return function + "1";
        }
    }
}