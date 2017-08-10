using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2931 - {0}")]
    public class Bridge2931
    {
#pragma warning disable 1998
        static async Task<int> _3() => 3;
#pragma warning restore 1998

        [Test]
        public static async void TestAsyncVarInitializer()
        {
            var done = Assert.Async();
#pragma warning disable 219
            int a = 3, b = await _3();
#pragma warning restore 219
            Assert.AreEqual(3, b);
            done();
        }
    }
}