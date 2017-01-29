using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1199 - {0}")]
    public class Bridge1199
    {
        public delegate string SomeDel();

        private class NotWorking<T>
        {
            public event SomeDel IsNotWorking;

            public string Validate()
            {
                return IsNotWorking == null ? "no subscribers" : IsNotWorking();
            }
        }

        [Test]
        public static void TestEventNameCase()
        {
            var wrong = new NotWorking<int>();
            wrong.IsNotWorking += () => "somevalue";
            Assert.AreEqual("somevalue", wrong.Validate());
        }
    }
}