using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1355 - {0}")]
    public class Bridge1355
    {
        [Test]
        public static void TestLocalVariableWithNameWindow()
        {
            var window = "1";
            var r = Script.Get<string>("$window");

            Assert.AreEqual("1", window, "window");
            Assert.AreEqual("1", r, "r");
        }
    }
}