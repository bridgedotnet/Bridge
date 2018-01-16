using Bridge.Html5;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3363 - {0}")]
    public class Bridge3363
    {
        [Test]
        public static void Test64bitKey()
        {
            IDictionary<ulong, string> dic = new Dictionary<ulong, string>();

            dic.Add(20, "Diez");
            dic.Add(10, "Diez");
            dic.Add(30, "Diez");

            Assert.True(10 == dic.Keys.Min());
            Assert.AreEqual("Diez", dic[10]);
            Assert.AreEqual("Diez", dic[dic.Keys.Min()]);
        }
    }
}