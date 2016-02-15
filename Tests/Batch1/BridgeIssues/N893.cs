using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public enum Bridge893A
    {
        TestA1,
        TestA2
    }

    [System.Flags]
    public enum Bridge893B
    {
        TestB1 = 1,
        TestB2 = 2,
        TestB3 = 4,
    }

    // Bridge[#893]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#893 - {0}")]
    public class Bridge893
    {
        [Test(ExpectedCount = 5)]
        public static void EnumToStringWorks()
        {
            Assert.AreEqual("TestA1", Bridge893A.TestA1.ToString());

            var a = (Bridge893A)100;
            Assert.AreEqual("100", a.ToString());

            Assert.AreEqual("TestB3", Bridge893B.TestB3.ToString());

            var t = Bridge893B.TestB1 | Bridge893B.TestB2;
            Assert.AreEqual("TestB1, TestB2", t.ToString());

            var t1 = Bridge893B.TestB3 | Bridge893B.TestB2;
            Assert.AreEqual("TestB2, TestB3", t1.ToString());
        }
    }
}