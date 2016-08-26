using Bridge.Test;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#706]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#706 - {0}")]
    public class Bridge706
    {
        [FieldProperty]
        public static object Value
        {
            get;
            set;
        } = 7;

        [Test(ExpectedCount = 1)]
        public static void TestFieldPropertyWithInitializer()
        {
            Assert.AreEqual(7, Bridge706.Value);
        }
    }
}