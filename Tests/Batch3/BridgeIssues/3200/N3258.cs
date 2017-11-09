using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3258 - {0}")]
    public class Bridge3258
    {
        public class O
        {
            [Bridge.Template("{d}")]
            static extern public implicit operator O(double d);
        }

        [Test]
        public static void TestUnaryImplicitOperator()
        {
            double i = 1;
            O a = -(i);
            O b = (-(i));

            Assert.AreEqual(-1, a);
            Assert.AreEqual(-1, b);
        }
    }
}