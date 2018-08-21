using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// Ensures fetching nullable variable value with the null conditional operator works.
    /// </summary>
    /// <remarks>
    /// The operator is documented at: https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/null-conditional-operators
    /// </remarks>
    [TestFixture(TestNameFormat = "#3667 - {0}")]
    public class Bridge3667
    {
        [Test]
        public static void TestNullableTuple()
        {
            (string Prop1, string Prop2)? val = ("test1", "test2");

            Assert.AreEqual("test1", val.Value.Prop1, "Fetching value via the nullable's .Value property works.");
            Assert.AreEqual("test1", val?.Prop1, "Fetching value using the the null conditional operator works.");
        }
    }
}