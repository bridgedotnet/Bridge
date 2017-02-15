using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2221 - {0}")]
    [Reflectable]
    public class Bridge2221
    {
        [Test]
        public static void TestMakeArrayType()
        {
            Type t = typeof(Bridge2221).MakeArrayType();
            Assert.AreEqual(typeof(Bridge2221[]), t);

            t = typeof(Bridge2221).MakeArrayType(2);
            Assert.AreEqual(typeof(Bridge2221[,]), t);
        }
    }
}