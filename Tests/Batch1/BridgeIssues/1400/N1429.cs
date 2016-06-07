using Bridge.Test;
using System;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1429 - {0}")]
#pragma warning disable 660,661
    public class Bridge1429
#pragma warning restore 660,661
    {
        public static bool operator ==(Bridge1429 a, object b) { return true; }
        public static bool operator !=(Bridge1429 a, object b) { return true; }

        [Test]
        public static void TestEqOperatorWithNull()
        {
            Assert.True(new Bridge1429() == null, "new Bridge1429() == null");

            var a = new Bridge1429();
            var b = new Bridge1429();
            var aa = a;

            Assert.True(a == b, "a == b");
            Assert.True(a != aa, "a != aa");

            Bridge1429 c = null;
            Bridge1429 d = null;

            Assert.True(c != d, "c != d");
        }
    }
}
