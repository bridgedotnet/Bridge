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
            Assert.AreEqual(item11.IsNullOrUndefined(), false, "Bridge655 IsNullOrUndefined11");
            Assert.AreEqual(item11(), 11, "Bridge655 item11");

            Func<int, int> item12 = (i) => i;
            Assert.AreEqual(item12.IsNullOrUndefined(), false, "Bridge655 IsNullOrUndefined12");
            Assert.AreEqual(item12(12), 12, "Bridge655 item12");

            Func<object> item21 = () => 21;
            Assert.AreEqual(item21.IsNullOrUndefined(21), false, "Bridge655 IsNullOrUndefined21 false");
            Assert.AreEqual(item21.IsNullOrUndefined(0), true, "Bridge655 IsNullOrUndefined21 true");
            Assert.AreEqual(item21(), 21, "Bridge655 item21");

            Func<int, string, int> item22 = (i, s) => i + s.Length;
            Assert.AreEqual(item22.IsNullOrUndefined("22"), "false", "Bridge655 IsNullOrUndefined22 false");
            Assert.AreEqual(item22.IsNullOrUndefined(string.Empty), "true", "Bridge655 IsNullOrUndefined22 true");
            Assert.AreEqual(item22(19, "two"), 22, "Bridge655 item22");

            Action<int, string> item32 = (i, s) => { var b = i == s.Length; };
            Assert.AreEqual(item32.IsNullOrUndefined("32"), "false", "Bridge655 IsNullOrUndefined32 false");
            Assert.AreEqual(item32.IsNullOrUndefined(string.Empty), "true", "Bridge655 IsNullOrUndefined32 true");
        }
    }
}