using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3111 - {0}")]
    public class Bridge3111
    {
        [Test]
        public static void TestNullableFloatMul()
        {
            float? a = 0.9f;
            float b = 1f;
            var c = a * b;
            Assert.AreEqual(0.9, c);
        }
    }
}