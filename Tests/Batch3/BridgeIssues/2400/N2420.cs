using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2419 - {0}")]
    public class Bridge2419
    {
        [External]
        [Enum(Emit.StringName)]
        public enum Format1
        {
            One,
            Two
        }

        [External]
        [Enum(Emit.Value)]
        public enum Format2
        {
            One,
            Two
        }

        [Test]
        public static void TestExternalEnum()
        {
            var s1 = Format1.One.ToString();
            var s2 = Format2.One.ToString();

            Assert.AreEqual("one", s1);
            Assert.AreEqual("0", s2);
        }
    }
}