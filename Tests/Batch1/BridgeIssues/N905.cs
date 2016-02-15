using System;
using System.Collections.Generic;

using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#905]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#905 - {0}")]
    public class Bridge905
    {
        [Test(ExpectedCount = 2)]
        public static void DayOfWeekFixed()
        {
            var dictionary = new Dictionary<DayOfWeek, int>();
            dictionary.Add(DayOfWeek.Sunday, 1);

            Assert.AreEqual(1, dictionary[DayOfWeek.Sunday], "1");
            Assert.AreEqual("Saturday", DayOfWeek.Saturday.ToString(), "Saturday");
        }
    }
}