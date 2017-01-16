using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2246 - {0}")]
    public class Bridge2246
    {
        public static string[] array = { "string" };
        private static bool isExecuted = false;

        public static void Main()
        {
            if (Bridge2246.isExecuted)
            {
                throw new InvalidOperationException("Double entry point execution");
            }

            Bridge2246.isExecuted = true;
        }

        [Test]
        public static void TestEntryPoint()
        {
            Assert.True(Bridge2246.isExecuted);
        }
    }
}