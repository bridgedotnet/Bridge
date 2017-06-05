using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;
using Base2723 = Problem2723.Classes2723.A2723;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2738 - {0}")]
    [Reflectable]
    public class Bridge2738
    {
        [Test(ExpectedCount = 2)]
        public static void TestAmbigiousSymbols()
        {
            IEnumerable<object[]> testDataDates = new[]
            {
                new object[] { new DateTime(2017, 1, 1), new DateTime(2018, 1, 1) }
            };

            var method = typeof(Bridge2738).GetMethod("LogDates");

            foreach (var dates in testDataDates)
            {
                method.Invoke(null, dates);
            }
        }

        public static void LogDates(DateTime a, DateTime b)
        {
            Assert.AreEqual(2017, a.Year);
            Assert.AreEqual(2018, b.Year);
        }
    }
}