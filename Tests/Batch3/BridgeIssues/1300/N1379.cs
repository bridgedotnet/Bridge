using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1379 - {0}")]
    public class Bridge1379
    {
        private static void AssertDoubleNaN(object value)
        {
            Assert.AreEqual("System.Double", value.GetType().FullName);
        }

        private static void AssertSingleNaN(object value)
        {
            Assert.AreEqual("System.Single", value.GetType().FullName);
        }

        [Test]
        public static void TestNanFiniteType()
        {
            object value1 = 0.0 / 0.0;
            AssertDoubleNaN(value1);

            object value2 = 1.0 / 0.0;
            AssertDoubleNaN(value2);

            object value3 = -1.0 / 0.0;
            AssertDoubleNaN(value3);

            object value4 = 0.0f / 0.0f;
            AssertSingleNaN(value4);

            object value5 = 1.0f / 0.0f;
            AssertSingleNaN(value5);

            object value6 = -1.0f / 0.0f;
            AssertSingleNaN(value6);
        }
    }
}