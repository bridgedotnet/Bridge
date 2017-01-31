using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1146 - {0}")]
    public class Bridge1146
    {
        [Test]
        public static void TestLongIssues()
        {
            Assert.True(IntUintEquality(0, 0), "int == uint uses .Equals() between long: System.Int64(a).equals(System.Int64(b))");
            Assert.True(Precedence(), "Correct order for `a += b >> 1` -> `(a + (b >>> 1))`");
        }

        private static bool IntUintEquality(int a, uint b)
        {
            return a == b;
        }

        private static bool Precedence()
        {
            uint a = 1;
            uint b = 2;
            a += b >> 1;
            return a == 2;
        }
    }
}