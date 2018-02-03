using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This test consists in ensuring types that can't be represented in
    /// JavaScript are converted to string when their .ToJson() method is
    /// called.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3361 - {0}")]
    public class Bridge3361
    {
        [Test]
        public static void Test64bitSerialize()
        {
            long small = 9007199254740991;
            long big = 9007199254740992;
            long negSmall = -9007199254740991;
            long negBig = -9007199254740992;

            ulong usmall = 9007199254740991;
            ulong ubig = 9007199254740992;

            var smallStr = JSON.Stringify(small);
            var bigStr = JSON.Stringify(big);
            var smallNegStr = JSON.Stringify(negSmall);
            var bigNegStr = JSON.Stringify(negBig);

            var usmallStr = JSON.Stringify(usmall);
            var ubigStr = JSON.Stringify(ubig);

            Assert.AreEqual(smallStr, "9007199254740991", "Smaller long number is serialized as a JavaScript number/integer.");
            Assert.AreEqual(bigStr, "\"9007199254740992\"", "Big long number is serialized as a JavaScript string.");

            Assert.AreEqual(smallNegStr, "-9007199254740991", "Smaller negative long number is serialized as a JavaScript number/integer.");
            Assert.AreEqual(bigNegStr, "\"-9007199254740992\"", "Big negative long number is serialized as a JavaScript string.");

            Assert.AreEqual(usmallStr, "9007199254740991", "Smaller unsigned long number is serialized as a JavaScript number/integer.");
            Assert.AreEqual(ubigStr, "\"9007199254740992\"", "Big unsigned long number is serialized as a JavaScript string.");
        }
    }
}