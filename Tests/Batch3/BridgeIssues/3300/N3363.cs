using Bridge.Html5;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether dictionary keys are
    /// correctly handled when they are unsigned long.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3363 - {0}")]
    public class Bridge3363
    {
        /// <summary>
        /// The test plays around with max and min dictionary keys after
        /// feeding it with some out-of-order values.
        /// </summary>
        [Test]
        public static void Test64bitKey()
        {
            IDictionary<ulong, string> dic = new Dictionary<ulong, string>();

            dic.Add(20, "Twenty");
            dic.Add(10, "Ten");
            dic.Add(40, "Forty");
            dic.Add(30, "Thirty");

            Assert.True(10 == dic.Keys.Min(), "Min key is 10.");
            Assert.AreEqual("Ten", dic[10], "Key index 10 has the expected value, 'Ten'.");
            Assert.AreEqual("Ten", dic[dic.Keys.Min()], "Value from min key matches the expected 'Ten'.");

            Assert.True(40 == dic.Keys.Max(), "Max key is 40.");
            Assert.AreEqual("Forty", dic[40], "Key index 40 has the expected value, 'Forty'.");
            Assert.AreEqual("Forty", dic[dic.Keys.Max()], "Value from max key matches the expected 'Forty'.");
        }
    }
}