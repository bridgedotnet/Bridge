using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// Ensures linq's OrderBy and ThenBy default sort behavior matches native
    /// .NET logic.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3477 - {0}")]
    public class Bridge3477
    {
        /// <summary>
        /// Tests by just joining an array after ordering and checking whether
        /// it mathces the expected string.
        /// </summary>
        [Test]
        public static void TestOrderByComparer()
        {
            Assert.AreEqual("a - A - b - B", string.Join(" - ", new[] { "A", "a", "b", "B" }.OrderBy(x => x)), "OrderBy 'A-a-b-B' results in 'a-A-b-B'.");
            Assert.AreEqual("a - A - b - B", string.Join(" - ", new[] { "A", "a", "b", "B" }.OrderBy(x => true).ThenBy(x => x)), "OrderBy.ThenBy 'A-a-b-B' results in 'a-A-b-B'.");
            Assert.AreEqual("B - b - A - a", string.Join(" - ", new[] { "A", "a", "b", "B" }.OrderByDescending(x => x)), "OrderByDescending 'A-a-b-B' results in 'B-b-A-a'.");
            Assert.AreEqual("B - b - A - a", string.Join(" - ", new[] { "A", "a", "b", "B" }.OrderBy(x => true).ThenByDescending(x => x)), "OrderBy.ThenByDescending 'A-a-b-B' results in 'B-b-A-a'.");
        }
    }
}