using Bridge.Test.NUnit;

using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1311 - {0}")]
    public class Bridge1311
    {
        public enum SimpleEnum
        {
            A,
            B = 3,
            C,
            D = 10
        }

        [Test]
        public static void TestEnumNumberParsing()
        {
            var ec = Enum.Parse(typeof(SimpleEnum), "C");
            Assert.AreEqual(4, ec, "C");

            var e3 = Enum.Parse(typeof(SimpleEnum), "3");
            Assert.AreEqual(3, e3, "3");
        }
    }
}