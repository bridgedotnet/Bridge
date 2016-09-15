using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1834 - {0}")]
    public class Bridge1834
    {
        [IgnoreGeneric]
        public interface ITest1<TValues>
        {
            [IgnoreGeneric]
            string ToRoute(ITest1<TValues> routeDetails);
        }

        public class Test1<TValues> : ITest1<TValues>
        {
            public string ToRoute(ITest1<TValues> ifMatched)
            {
                return "Test1<TValues>";
            }
        }

        private static string Go<TValues>(ITest1<TValues> routeDetails)
        {
            return routeDetails.ToRoute(routeDetails);
        }

        [Test]
        public void TestIgnoreGenericInterface()
        {
            Assert.AreEqual("Test1<TValues>", Go(new Test1<string>()));
        }
    }
}