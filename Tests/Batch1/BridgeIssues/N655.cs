using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    static class Bridge655A
    {
        internal static bool IsNullOrUndefined(this object subject)
        {
            return subject == Script.Undefined || subject == null;
        }

        internal static bool IsNullOrUndefined(this object subject, int i)
        {
            return subject == Script.Undefined || subject == null || i == 0;
        }

        internal static string IsNullOrUndefined(this object subject, string s)
        {
            if (subject == Script.Undefined || subject == null || string.IsNullOrEmpty(s))
            {
                return "true";
            }

            return "false";
        }
    }

    // Bridge[#655]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#655 - {0}")]
    public class Bridge655
    {
        [Test(ExpectedCount = 12)]
        public static void TestUseCase()
        {
            Func<object> item11 = () => 11;
            Assert.AreEqual(false, item11.IsNullOrUndefined(), "Bridge655 IsNullOrUndefined11");
            Assert.AreEqual(11, item11(), "Bridge655 item11");

            Func<int, int> item12 = (i) => i;
            Assert.AreEqual(false, item12.IsNullOrUndefined(), "Bridge655 IsNullOrUndefined12");
            Assert.AreEqual(12, item12(12), "Bridge655 item12");

            Func<object> item21 = () => 21;
            Assert.AreEqual(false, item21.IsNullOrUndefined(21), "Bridge655 IsNullOrUndefined21 false");
            Assert.AreEqual(true, item21.IsNullOrUndefined(0), "Bridge655 IsNullOrUndefined21 true");
            Assert.AreEqual(21, item21(), "Bridge655 item21");

            Func<int, string, int> item22 = (i, s) => i + s.Length;
            Assert.AreEqual("false", item22.IsNullOrUndefined("22"), "Bridge655 IsNullOrUndefined22 false");
            Assert.AreEqual("true", item22.IsNullOrUndefined(string.Empty), "Bridge655 IsNullOrUndefined22 true");
            Assert.AreEqual(22, item22(19, "two"), "Bridge655 item22");

            Action<int, string> item32 = (i, s) => { var b = i == s.Length; };
            Assert.AreEqual("false", item32.IsNullOrUndefined("32"), "Bridge655 IsNullOrUndefined32 false");
            Assert.AreEqual("true", item32.IsNullOrUndefined(string.Empty), "Bridge655 IsNullOrUndefined32 true");
        }
    }
}