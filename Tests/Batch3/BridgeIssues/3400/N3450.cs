using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// Testing to ensure that DateTime DayOfYear property is returning the correct values at various times throughout a normal year and leapyear. 
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3450 - {0}")]
    public class Bridge3450
    {
        [Test]
        public static void TestIsDateTimeDayOfYearWorking()
        {
            var val1 = new DateTime(2018, 3, 6, 1, 1, 1).DayOfYear;
            var val2 = new DateTime(2018, 2, 20, 1, 1, 1).DayOfYear;
            var val3 = new DateTime(2019, 3, 6, 1, 1, 1).DayOfYear;
            var val4 = new DateTime(2019, 2, 20, 1, 1, 1).DayOfYear;
            var val5 = new DateTime(2020, 3, 6, 1, 1, 1).DayOfYear;
            var val6 = new DateTime(2020, 2, 20, 1, 1, 1).DayOfYear;
            var val7 = new DateTime(2021, 3, 6, 1, 1, 1).DayOfYear;
            var val8 = new DateTime(2021, 2, 20, 1, 1, 1).DayOfYear;

            var val9 = new DateTime(2018, 3, 6).DayOfYear;
            var val10 = new DateTime(2018, 2, 20).DayOfYear;
            var val11 = new DateTime(2019, 3, 6).DayOfYear;
            var val12 = new DateTime(2019, 2, 20).DayOfYear;
            var val13 = new DateTime(2020, 3, 6).DayOfYear;
            var val14 = new DateTime(2020, 2, 20).DayOfYear;
            var val15 = new DateTime(2021, 3, 6).DayOfYear;
            var val16 = new DateTime(2021, 2, 20).DayOfYear;

            var val17 = new DateTime(2018, 1, 1).DayOfYear;
            var val18 = new DateTime(2018, 12, 31).DayOfYear;
            var val19 = new DateTime(2019, 1, 1).DayOfYear;
            var val20 = new DateTime(2019, 12, 31).DayOfYear;
            var val21 = new DateTime(2020, 1, 1).DayOfYear;
            var val22 = new DateTime(2020, 12, 31).DayOfYear;
            var val23 = new DateTime(2021, 1, 1).DayOfYear;
            var val24 = new DateTime(2021, 12, 31).DayOfYear;

            var val25 = new DateTime(2018, 3, 6, 1, 1, 1).Date.DayOfYear;
            var val26 = new DateTime(2018, 2, 20, 1, 1, 1).Date.DayOfYear;
            var val27 = new DateTime(2019, 3, 6, 1, 1, 1).Date.DayOfYear;
            var val28 = new DateTime(2019, 2, 20, 1, 1, 1).Date.DayOfYear;
            var val29 = new DateTime(2020, 3, 6, 1, 1, 1).Date.DayOfYear;
            var val30 = new DateTime(2020, 2, 20, 1, 1, 1).Date.DayOfYear;
            var val31 = new DateTime(2021, 3, 6, 1, 1, 1).Date.DayOfYear;
            var val32 = new DateTime(2021, 2, 20, 1, 1, 1).Date.DayOfYear;

            var val33 = new DateTime(2018, 1, 1, 1, 1, 1).Date.DayOfYear;
            var val34 = new DateTime(2018, 12, 31, 1, 1, 1).Date.DayOfYear;
            var val35 = new DateTime(2019, 1, 1, 1, 1, 1).Date.DayOfYear;
            var val36 = new DateTime(2019, 12, 31, 1, 1, 1).Date.DayOfYear;
            var val37 = new DateTime(2020, 1, 1, 1, 1, 1).Date.DayOfYear;
            var val38 = new DateTime(2020, 12, 31, 1, 1, 1).Date.DayOfYear;
            var val39 = new DateTime(2021, 1, 1, 1, 1, 1).Date.DayOfYear;
            var val40 = new DateTime(2021, 12, 31, 1, 1, 1).Date.DayOfYear;

            Assert.AreEqual(65, val1);
            Assert.AreEqual(51, val2);
            Assert.AreEqual(65, val3);
            Assert.AreEqual(51, val4);
            Assert.AreEqual(66, val5);
            Assert.AreEqual(51, val6);
            Assert.AreEqual(65, val7);
            Assert.AreEqual(51, val8);

            Assert.AreEqual(65, val9);
            Assert.AreEqual(51, val10);
            Assert.AreEqual(65, val11);
            Assert.AreEqual(51, val12);
            Assert.AreEqual(66, val13);
            Assert.AreEqual(51, val14);
            Assert.AreEqual(65, val15);
            Assert.AreEqual(51, val16);

            Assert.AreEqual(1, val17);
            Assert.AreEqual(365, val18);
            Assert.AreEqual(1, val19);
            Assert.AreEqual(365, val20);
            Assert.AreEqual(1, val21);
            Assert.AreEqual(366, val22);
            Assert.AreEqual(1, val23);
            Assert.AreEqual(365, val24);

            Assert.AreEqual(val1, val25);
            Assert.AreEqual(val2, val26);
            Assert.AreEqual(val3, val27);
            Assert.AreEqual(val4, val28);
            Assert.AreEqual(val5, val29);
            Assert.AreEqual(val6, val30);
            Assert.AreEqual(val7, val31);
            Assert.AreEqual(val8, val32);

            Assert.AreEqual(val17, val33);
            Assert.AreEqual(val18, val34);
            Assert.AreEqual(val19, val35);
            Assert.AreEqual(val20, val36);
            Assert.AreEqual(val21, val37);
            Assert.AreEqual(val22, val38);
            Assert.AreEqual(val23, val39);
            Assert.AreEqual(val24, val40);
        }
    }
}