using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#674]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#674 - {0}")]
    public class Bridge674
    {
        [Test(ExpectedCount = 2)]
        public static void TestUndefinedToReferenceType()
        {
            // Undefined is considerd as null by default
            // In .Net the code below produces null and does not fail. Changing the test to reflect this
            object o = Script.Undefined;

            Assert.AreEqual(Script.Undefined, (string)o, "Cast 'undefined' to string results in undefined");
            Assert.AreEqual(Script.Undefined, (int[])o, "Cast 'undefined' to int[] results in undefined");
        }

        [Test(ExpectedCount = 1)]
        public static void TestUndefinedToValueType()
        {
            object o = Script.Undefined;
            Assert.Throws(() => { var i = (int)o; }, "Unable to cast 'undefined' to type int");
        }
    }
}