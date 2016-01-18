using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public static class Bridge615A
    {
        public static string Method1(this object o)
        {
            return "object";
        }

        public static string Method1(this int i)
        {
            return "int";
        }
    }

    // Bridge[#615]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#615 - {0}")]
    public class Bridge615
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            int i = 0;
            object o = null;

            Assert.AreEqual(o.Method1(), "object", "Bridge615 object");
            Assert.AreEqual(i.Method1(), "int", "Bridge615 int");
        }
    }
}