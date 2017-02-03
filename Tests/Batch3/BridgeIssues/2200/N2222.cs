using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2222 - {0}")]
    [Reflectable]
    public class Bridge2222
    {
        [Test]
        public static void TestGetTypeWithNullArgument()
        {
            Assert.Throws<ArgumentNullException>(() =>
            {
                Type.GetType(null);
            });
        }
    }
}