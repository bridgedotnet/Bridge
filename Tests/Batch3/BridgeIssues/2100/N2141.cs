using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2141 - {0}")]
    public class Bridge2141
    {
        [External]
        [ObjectLiteral]
        public class Config
        {
            public string Name { get; set; }
        }

        [Test]
        public static void TestExternalObjectLiteral()
        {
            var config = new Config
            {
                Name = "test"
            };

            Assert.AreEqual(1, Object.Keys(config).Length);
            Assert.AreEqual("test", config.Name);
        }
    }
}
