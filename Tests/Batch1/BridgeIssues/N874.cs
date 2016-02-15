using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#874]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#874 - {0}")]
    public class Bridge874
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            int myValue = 1;

            switch (myValue)
            {
                case 0:
                    /*@
                    myValue = 2;
                    */
                    break;
                case 1:
                    /*@
                    myValue = 3;
                    */
                    break;
            }

            Assert.AreEqual(3, myValue);
        }
    }
}