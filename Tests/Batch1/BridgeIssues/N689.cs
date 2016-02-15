using System;
using Bridge;
using Bridge.Test;
using Bridge.Html5;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#689]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#689 - {0}")]
    public class Bridge689
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            Func<string, int> fn1 = Global.ParseInt;
            Assert.AreEqual(5, fn1("5"), "Bridge689 should equals 5");

            Func<string, int> fn2 = Bridge689.ParseInt;
            Assert.AreEqual(6, fn2("6"), "Bridge689 should equals 6");

            //object a = 7;
            //Func<object, bool> fn3 = a.BridgeEquals;
            //Assert.AreEqual(fn3("7"), 7, "Bridge689 should equals 7");
        }

        [Template("parseInt({0})")]
        public extern static int ParseInt(string value);
    }

    //
    //public static class Bridge689ObjectExtention
    //{
    //    [Template("Bridge.equals({this}, b)")]
    //    public static bool BridgeEquals(this object a, object b)
    //    {
    //        return false;
    //    }
    //}
}