using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1492 - {0}")]
    public class Bridge1492
    {
        enum Enum : long
        {
            A = 0L
        }

        [Test]
        public void TestEnumLong()
        {
            Enum @enum = Enum.A;

            Assert.True(@enum == (Enum)0, "0");
            Assert.True(@enum == (Enum)0L, "0L");
            Assert.True(@enum == (Enum)0u, "0u");
        }
    }
}