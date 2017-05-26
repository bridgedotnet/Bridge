using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1348 - {0}")]
    public class Bridge1348
    {
        [Test]
        public static void TestVoidTypeOf()
        {
            var value = typeof(void);
            Assert.AreEqual("System.Void", value.FullName);
            Assert.AreEqual("Function", value.GetType().FullName);
        }
    }
}