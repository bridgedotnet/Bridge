using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [External]
    [ObjectLiteral(ObjectInitializationMode.Ignore)]
    public class Bridge647A
    {
        [Name("bar")]
        public int foo;
    }

    [External]
    [ObjectLiteral]
    public class Bridge647B
    {
        [Name("bar")]
        public int foo;

        [Name("bar1")]
        public int foo1 = 12;
    }

    // Bridge[#647]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#647 - {0}")]
    public class Bridge647
    {
        [Test(ExpectedCount = 3)]
        public static void TestUseCase()
        {
            var a = new Bridge647A { foo = 1 };
            Assert.AreEqual(1, a["bar"], "Bridge647 A");

            var b = new Bridge647B { foo = 1 };
            Assert.AreEqual(1, b["bar"], "Bridge647 B bar");
            Assert.AreEqual(12, b["bar1"], "Bridge647 B bar1");
        }
    }
}