using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public enum Bridge881A
    {
        Name
    }

    // Bridge[#881]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#881 - {0}")]
    public class Bridge881
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            var i = Bridge881A.Name;
            Assert.AreEqual(Bridge881A.Name, i);
        }
    }
}