using System;
using System.Globalization;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2137 - {0}")]
    public class Bridge2137
    {
        public static object E1 { get; } = new string('E', 3);
        public static object E2 { get; } = E1 + new string('E', 3);
        public object E3 { get; } = "test" + E1;
        public object E4 { get; }

        public Bridge2137()
        {
            this.E4 = "_" + E3;
        }

        [Test]
        public static void TestPropertiesWithNonPrimitiveInitializers()
        {
            var c = new Bridge2137();
            Assert.AreEqual("EEE", E1);
            Assert.AreEqual("EEEEEE", E2);
            Assert.AreEqual("testEEE", c.E3);
            Assert.AreEqual("_testEEE", c.E4);
        }
    }
}
