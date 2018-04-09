using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This test consists in ensuring double.TryParse's result
    /// matches the .NET implementation.
    /// </summary>
    [TestFixture(TestNameFormat = "#3360 - {0}")]
    public class Bridge3360
    {
        /// <summary>
        /// Call TryParse() over '2/1' string, which can result in a different
        /// interpretation if resolving is greedy (thus actually dividing 2
        /// by 1 instead of analyzing the actual string, that is not parseable
        /// to double.
        /// </summary>
        [Test]
        public static void TestDoubleParse()
        {
            double test;
            var result = double.TryParse("2/1", out test);

            Assert.False(result, "The '2/1' string does not parse into double.");
        }
    }
}