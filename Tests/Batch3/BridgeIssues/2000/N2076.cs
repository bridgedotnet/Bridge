using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2076 - {0}")]
    public class Bridge2076
    {
        [Test]
        public static void TestLinqGlobalPollution()
        {
            var en = Window.ToDynamic().Enumerable;
            Assert.Null(en);
        }
    }
}