using System;
using Bridge.Test.NUnit;

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

            Assert.AreEqual("test", config.Name);
        }
    }
}