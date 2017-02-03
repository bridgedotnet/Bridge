using Bridge.Test.NUnit;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    public class Bridge597A
    {
        private string _something = "HI!";

        public string Get()
        {
            var items = new[] { "a" };
            var mappedItemsWithoutInstanceMemberAccess = items.Select((value, index) => index + ":" + value).ToArray();
            return mappedItemsWithoutInstanceMemberAccess[0];
        }

        public string GetWithMember()
        {
            var items = new[] { "a" };
            var mappedItemsWithInstanceMemberAccess = items.Select((value, index) => _something + ":" + index + ":" + value).ToArray();
            return mappedItemsWithInstanceMemberAccess[0];
        }
    }

    // Bridge[#597]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#597 - {0}")]
    public class Bridge597
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            var inst = new Bridge597A();
            Assert.AreEqual("0:a", inst.Get(), "Bridge597 Without instance member access");
            Assert.AreEqual("HI!:0:a", inst.GetWithMember(), "Bridge597 With instance member access");
        }
    }
}