using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1379 - {0}")]
    public class Bridge1379
    {
        private static void AssertNaN(object value)
        {
            Assert.AreEqual("System.Double", value.GetType().FullName);
        }

        [Test]
        public static void TestNanFiniteType()
        {
            object value1 = 0.0 / 0.0;
            AssertNaN(value1);

            object value2 = 1.0 / 0.0;
            AssertNaN(value2);

            object value3 = -1.0 / 0.0;
            AssertNaN(value3);

            object value4 = 0.0f / 0.0f;
            AssertNaN(value4);

            object value5 = 1.0f / 0.0f;
            AssertNaN(value5);

            object value6 = -1.0f / 0.0f;
            AssertNaN(value6);
        }
    }
}