using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1344 - {0}")]
    public class Bridge1344
    {
        [Test]
        public static void TestLocalVariableWithNameProto()
        {
            var __proto__ = "1";
            var r = Script.Get<string>("$__proto__");

            Assert.AreEqual("1", __proto__, "$__proto__");
            Assert.AreEqual("1", r, "r");
        }
    }
}