using Bridge.Test;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1065 - {0}")]
    public class Bridge1065
    {
        [Test]
        public static void TestDecimalLongWithDictionary()
        {
            var decimalDict = new Dictionary<long, decimal> { { 0, 5 } };
            Assert.AreEqual("System.Decimal", decimalDict[0].GetType().FullName);
            Assert.AreEqual("5", decimalDict[0].ToString());
            decimalDict[0] = 1;
            Assert.AreEqual("System.Decimal", decimalDict[0].GetType().FullName);
            Assert.AreEqual("1", decimalDict[0].ToString());
        }
    }
}