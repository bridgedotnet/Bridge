using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#637]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#637 - {0}")]
    public class Bridge637
    {
        public enum Operator
        {
            Add = 0
        }

        [Test]
        public static void TestUseCase()
        {
            var Operator = (Operator)0;
            Assert.AreEqual(Operator.Add, Operator);
        }
    }
}