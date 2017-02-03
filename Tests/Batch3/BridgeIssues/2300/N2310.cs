using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2310 - {0}")]
    public class Bridge2310
    {
        public class Component
        {
            public object config;
            public object any = new object();
        }

        [Test]
        public static void TestConfigField()
        {
            var c = new Component();
            Assert.NotNull(c.any);
        }
    }
}