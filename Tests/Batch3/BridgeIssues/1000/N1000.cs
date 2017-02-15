using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#1000]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1000 - {0}")]
    public class Bridge1000
    {
        public class TestFixture<T>
        {
            public static string Run()
            {
                return "Test";
            }
        }

        public class ObjectTestFixture : TestFixture<object>
        {
        }

        [Test(ExpectedCount = 1)]
        public static void TestStaticViaChild()
        {
            Assert.AreEqual("Test", ObjectTestFixture.Run());
        }
    }
}