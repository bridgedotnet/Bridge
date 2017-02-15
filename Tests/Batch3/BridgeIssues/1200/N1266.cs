using Bridge.Test.NUnit;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1266 - {0}")]
    public class Bridge1266
    {
        [Test]
        public static void TestArrayToEnumerable()
        {
            var arr = new[] { 1, 2, 3 };
            var x = arr.ToArray().ToEnumerable();
            var index = 0;
            foreach (var i in x)
            {
                Assert.AreEqual(arr[index++], i);
            }
        }
    }
}