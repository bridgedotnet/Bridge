using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1490 - {0}")]
    public class Bridge1490
    {
        enum Enum : long
        {
            A,
        }
        enum Enum2 : long
        {
            A = 0
        }

        [Test]
        public void TestEnumLong()
        {
            Enum a = Enum.A;
            Assert.True(a == 0L);

            Enum2 b = Enum2.A;
            Assert.True(b == 0L);
        }
    }
}