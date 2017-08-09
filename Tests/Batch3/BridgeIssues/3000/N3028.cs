using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3028 - {0}")]
    public class Bridge3028
    {
        public static T ToEnum<T>(string name)
                where T : struct
        {
            T value = (T)Enum.Parse(typeof(T), name, true);

            return value;
        }

        [Test]
        public static void TestEnumParseCast()
        {
            Assert.AreEqual(DayOfWeek.Monday, ToEnum<DayOfWeek>("Monday"));
        }
    }
}