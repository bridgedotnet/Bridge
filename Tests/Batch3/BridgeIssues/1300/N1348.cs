using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1348 - {0}")]
    public class Bridge1348
    {
        [Test]
        public static void TestVoidTypeOf()
        {
            object value = typeof(void);
            Assert.AreEqual("Function", value.GetType().FullName);
        }
    }
}