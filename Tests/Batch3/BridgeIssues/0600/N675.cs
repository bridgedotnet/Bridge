using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#675]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#675 - {0}")]
    public class Bridge675
    {
        [Test(ExpectedCount = 3)]
        public static void TestUseCase()
        {
            var me = Global.ToDynamic().Bridge.ClientTest.Batch3.BridgeIssues.Bridge675;
            me.id = "str1";
            me.i1 = 1;
            me.i2 = 2;

            Assert.AreEqual("str1", me.dynMethod(me.id), "Bridge675 DynMethod");
            Assert.AreEqual("str1", Method1(me.id), "Bridge675 Method1 id");
            Assert.AreEqual(3, Method1(me.i1, me.i2), "Bridge675 Method1 i1 i2");
        }

        public static string DynMethod(string s)
        {
            return s;
        }

        public static string Method1(string s)
        {
            return s;
        }

        public static int Method1(int i1, int i2)
        {
            return i1 + i2;
        }
    }
}