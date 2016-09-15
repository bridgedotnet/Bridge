using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1835 - {0}")]
    public class Bridge1835
    {
        private static TValues Go<TValues>(TValues message)
        {
            return message;
        }

        [Test]
        public void TestGenericMethodWithAnonTypeArg()
        {
            Assert.NotNull(Bridge1835.Go(new { Test = 1 }));
        }
    }
}