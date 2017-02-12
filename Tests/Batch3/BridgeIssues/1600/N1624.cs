using Bridge.Test.NUnit;
using Bridge.Html5;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1624 - {0}")]
    public class Bridge1624
    {
        [Test]
        public void DateNowIsWorking()
        {
            var now = Date.Now();
            var d1 = new Date().GetTime();
            var d2 = new Date(Date.Now());

            Assert.AreEqual(d1, now);
            Assert.AreEqual(d2.GetTime(), now);
        }

        [Test]
        public void DateUTCIsWorking()
        {
            var d = new Date(2017, 1, 11, 21, 36, 55, 255);
            var year = d.GetUTCFullYear(); // 2017
            var month = d.GetUTCMonth(); // 1
            var day = d.GetUTCDate(); // 12
            var hour = d.GetUTCHours(); // 4
            var minute = d.GetUTCMinutes(); // 36
            var second = d.GetUTCSeconds(); // 55
            var millisecond = d.GetUTCMilliseconds(); // 255

            var utc1 = Date.UTC(year, month); // 1485907200000
            var utc2 = Date.UTC(year, month, day); // 1486857600000
            var utc3 = Date.UTC(year, month, day, hour); // 1486872000000
            var utc4 = Date.UTC(year, month, day, hour, minute); // 1486874160000
            var utc5 = Date.UTC(year, month, day, hour, minute, second); // 1486874215000
            var utc6 = Date.UTC(year, month, day, hour, minute, second, millisecond); // 1486874215255

            Assert.AreEqual("1485907200000", utc1.ToString());
            Assert.AreEqual("1486857600000", utc2.ToString());
            Assert.AreEqual("1486872000000", utc3.ToString());
            Assert.AreEqual("1486874160000", utc4.ToString());
            Assert.AreEqual("1486874215000", utc5.ToString());
            Assert.AreEqual("1486874215255", utc6.ToString());
        }

        [Test]
        public void ToLocaleDateStringIsWorking()
        {
            var d1 = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

            // Tough to test because varies by timezone/location
            // Just testing that a string is generated
            Assert.True(!string.IsNullOrEmpty(d1.ToLocaleDateString()));

            //var d2 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

            //// formats below assume the local time zone of the locale;
            //// America/Los_Angeles for the US

            //// US English uses month-day-year order
            //Assert.AreEqual("12/19/2012", d2.ToLocaleDateString("en-US")); // → "12/19/2012"

            //// British English uses day-month-year order
            //Assert.AreEqual("20/12/2012", d2.ToLocaleDateString("en-GB")); // → "20/12/2012"

            //// Korean uses year-month-day order
            //Assert.AreEqual("2012. 12. 20.", d2.ToLocaleDateString("ko-KR")); // → "2012. 12. 20."

            //// for Japanese, applications may want to use the Japanese calendar,
            //// where 2012 was the year 24 of the Heisei era
            //Assert.AreEqual("24/12/20", d2.ToLocaleDateString("ja-JP-u-ca-japanese")); // → "24/12/20"

            //// when requesting a language that may not be supported, such as
            //// Balinese, include a fallback language, in this case Indonesian
            //Assert.AreEqual("20/12/2012", d2.ToLocaleDateString(new string[] { "ban", "id" })); // → "20/12/2012"

            //var d3 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

            //// request a weekday along with a long date
            //var options = new Date.ToLocaleStringOptions
            //{
            //    Weekday = "long",
            //    Year = "numeric",
            //    Month = "long",
            //    Day = "numeric"
            //};

            //Assert.AreEqual("Donnerstag, 20. Dezember 2012", d3.ToLocaleDateString("de-DE", options)); // → "Donnerstag, 20. Dezember 2012"

            //// an application may want to use UTC and make that visible
            //options.TimeZone = "UTC";
            //options.TimeZoneName = "short";

            //Assert.AreEqual("Thursday, December 20, 2012, GMT", d3.ToLocaleDateString("en-US", options)); // → "Thursday, December 20, 2012, GMT"
        }

        [Test]
        public void ValueOfIsWorking()
        {
            var d1 = Date.UTC(2017, 1, 12, 4, 36, 55, 255); // 1486874215255
            var d2 = new Date(d1);

            var d3 = new Date();

            Assert.AreEqual("1486874215255", d2.ValueOf().ToString());
            Assert.AreEqual(d3.GetTime().ToString(), d3.ValueOf().ToString());
        }
    }
}