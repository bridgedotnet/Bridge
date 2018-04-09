using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in ensuring extension methods parameters are
    /// correctly evaluated regarding their type and position. E.g. do not
    /// try to instantiate a decimal (1st parameter, but absent in the call)
    /// whenever a string is passed (2nd parameter, but first one in the actual
    /// call).
    /// </summary>
    [TestFixture(TestNameFormat = "#3404 - {0}")]
    public class Bridge3404
    {
        /// <summary>
        /// To test, we call the extension method passing a string. It should
        /// not try to convert the string to a decimal.
        /// </summary>
        [Test]
        public static void TestExtensionMethodDecimal()
        {
            decimal a = 0;
            Assert.AreEqual("text", a.M("text"), "Calling the extension method works the way it is expected to.");
        }
    }

    /// <summary>
    /// A dummy extension method for decimal, takin a string parameter.
    /// </summary>
    public static class Bridge3404Ex
    {
        public static string M(this decimal a, string b)
        {
            return b;
        }
    }
}