using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3360 - {0}")]
    public class Bridge3360
    {
        [Test]
        public static void TestDoubleParse()
        {
            double test;
            var result = double.TryParse("2/1", out test);

            Assert.False(result);
        }
    }
}