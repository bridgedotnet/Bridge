using System;
using System.Linq;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2181 - {0}")]
    public class Bridge2181
    {
        [Test]
        public static void TestStringPadForEmptyString()
        {
            Assert.AreEqual("LLL", "".PadLeft(3, 'L'));
            Assert.AreEqual("RRR", "".PadRight(3, 'R'));
        }
    }
}
