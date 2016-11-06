using Bridge.Test;
using static Bridge.ClientTest.Batch3.BridgeIssues.Bridge2024.Class2;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2024 - {0}")]
    public class Bridge2024
    {
        public class Class2
        {
            public enum Options
            {
                Hello,
                Goodbyte
            }

            public class Inner
            {
                public static string Name => "Test";
            }
        }

        public static void TestCase()
        {
            Assert.AreEqual(0, Options.Hello);
            Assert.AreEqual("Test", Inner.Name);
        }
    }
}