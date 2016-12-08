using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1430 - {0}")]
    public class Bridge1430
    {
        [Test]
        public static void TestEqOperatorWithNull()
        {
            Assert.AreEqual("test", InnerNamespace1430.Constants.TestConst);
        }
    }

    namespace InnerNamespace1430
    {
        public class Constants
        {
            public const string TestConst = "test";
        }
    }
}