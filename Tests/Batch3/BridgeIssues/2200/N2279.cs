using System;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2279 - {0}")]
    public class Bridge2279
    {
        public class NestedClass
        {
            public string Value { get; set; } = "test1";

            public static string Value2 { get; } = "test2";

            public class Config { }
        }

        [Test]
        public static void TestPropertyWithInitializerAndNestedClass()
        {
            Assert.AreEqual("test1", new NestedClass().Value);
            Assert.AreEqual("test2", NestedClass.Value2);
        }
    }
}