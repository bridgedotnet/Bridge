using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2587 - {0}")]
    public class Bridge2587
    {
        private static class Test
        {
            public static int Method(string useless = null, params string[] list)
            {
                return list.Length;
            }
        }

        [Test]
        public static void TestNamedParams()
        {
            var result = Test.Method(list: "test");
            Assert.AreEqual(1, result);
        }
    }
}