using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1130 - {0}")]
    public class Bridge1130
    {
        [Test]
        public static void TestUlongDivision()
        {
            ulong a = 34359738368;
            ulong b = 2656901066;
            ulong x = a / b;
            ulong y = 3850086465;
            ulong z = 2476925576;
            bool res = (x * y) > (z << 32);

            Assert.False(res);
        }
    }
}