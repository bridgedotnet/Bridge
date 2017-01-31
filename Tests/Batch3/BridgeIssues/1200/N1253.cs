using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1253 - {0}")]
    public class Bridge1253
    {
        private enum Numbers
        {
            // Emitted as ONE by default
            ONE = 1,

            // Emitted as TWO by default
            TWO = 2
        }

        [Test]
        public static void TestDefaultEnumMode()
        {
            var numbers = Script.Write<object>("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253.Numbers");
            Assert.AreEqual(Numbers.ONE, numbers["ONE"]);
            Assert.AreEqual(Numbers.TWO, numbers["TWO"]);
        }
    }
}