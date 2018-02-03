using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in ensuring that a list with DateTime entries
    /// is orderable by System.Linq.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3307 - {0}")]
    public class Bridge3307
    {
        /// <summary>
        /// Checks whether a rewound date, after added to a list of dates, can
        /// correctly be ordered using .OrderBy().
        /// </summary>
        [Test]
        public static void TestOrderedDateTimeList()
        {
            List<DateTime> times = new List<DateTime>();

            DateTime dt1 = DateTime.UtcNow;
            times.Add(dt1);
            DateTime dt2 = dt1.AddMinutes(-10);
            times.Add(dt2);

            times = times.OrderBy(dt => dt).ToList();

            Assert.True(dt1 > dt2, "The initial date is effectively after the rewound date.");
            Assert.True(times[0] < times[1], "Result is ordered correctly.");
            Assert.AreEqual(dt1, times[1], "The initial date is after the rewound one within the ordered list.");
            Assert.AreEqual(dt2, times[0], "The rewound date is before the initial date within the ordered list.");
        }
    }
}