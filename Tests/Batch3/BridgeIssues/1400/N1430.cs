using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1430 - {0}")]
    public class Bridge1430
    {
        [Test]
        public static void TestNestedNamespaceSupport()
        {
            Assert.AreEqual("Hi from inner namespace", InnerNamespace1430.Constants.TestConst);

            var d = new InnerNamespace1430.Do();
            Assert.AreEqual(4, d.GetFour());
        }
    }

    namespace InnerNamespace1430
    {
        public class Constants
        {
            public const string TestConst = "Hi from inner namespace";
        }

        class Do
        {
            public int GetFour()
            {
                return 4;
            }
        }
    }
}