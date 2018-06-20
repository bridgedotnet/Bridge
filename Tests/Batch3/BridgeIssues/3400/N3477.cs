using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// 
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3477 - {0}")]
    public class Bridge3477
    {
        [Test]
        public static void TestOrderByComparer()
        {
            Assert.AreEqual("a - A - b - B", string.Join(" - ", new[] { "A", "a", "b", "B" }.OrderBy(x => x)));
            Assert.AreEqual("a - A - b - B", string.Join(" - ", new[] { "A", "a", "b", "B" }.OrderBy(x => true).ThenBy(x => x)));
            Assert.AreEqual("B - b - A - a", string.Join(" - ", new[] { "A", "a", "b", "B" }.OrderByDescending(x => x)));
            Assert.AreEqual("B - b - A - a", string.Join(" - ", new[] { "A", "a", "b", "B" }.OrderBy(x => true).ThenByDescending(x => x)));
        }
    }
}