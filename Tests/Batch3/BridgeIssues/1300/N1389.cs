using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1389 - {0}")]
    public class Bridge1389
    {
        [Test]
        public static void TestParamsIndexer()
        {
            var app = new Bridge1389();
            var list = app["1", "2", "3", "4", "5"];

            Assert.NotNull(list);
            Assert.AreEqual(5, list.Count());
            Assert.AreEqual("1", list.First());
            Assert.AreEqual("5", list.Last());
        }

        public IEnumerable<string> this[params string[] keys]
        {
            get { return keys; }
        }
    }
}