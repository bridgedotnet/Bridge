using Bridge.Test.NUnit;

using System;

namespace Bridge.ClientTest.Format
{
    [Category(Constants.MODULE_STRING)]
    [TestFixture(TestNameFormat = "StringFormatTests - {0}")]
    public class StringFormatTests
    {
        [Test]
        public void Simple()
        {
            Decimal pricePerOunce = 17.36m;
            string s = String.Format("The current price is {0} per ounce.", pricePerOunce);
            Assert.AreEqual("The current price is 17.36 per ounce.", s);
        }

        [Test]
        public void ValueFormating()
        {
            Decimal pricePerOunce = 17.36m;
            string s = String.Format("The current price is {0:C2} per ounce.", pricePerOunce);
            Assert.AreEqual("The current price is ¤17.36 per ounce.", s);
        }

        [Test]
        public void SpaceControlling()
        {
            int[] years = { 2013, 2014, 2015 };
            int[] population = { 1025632, 1105967, 1148203 };
            String s = String.Format("{0,6} {1,15}", "Year", "Population");
            Assert.AreEqual("  Year      Population", s);

            s = String.Format("{0,6} {1,15:N0}", years[0], population[0]);
            Assert.AreEqual("  2013       1,025,632", s);

            s = String.Format("{0,6} {1,15:N0}", years[1], population[1]);
            Assert.AreEqual("  2014       1,105,967", s);

            s = String.Format("{0,6} {1,15:N0}", years[2], population[2]);
            Assert.AreEqual("  2015       1,148,203", s);
        }

        [Test]
        public void Aligment()
        {
            // Create array of 5-tuples with population data for three U.S. cities, 1940-1950.
            Tuple<string, DateTime, int, DateTime, int>[] cities =
            {
                Tuple.Create("Los Angeles", new DateTime(1940, 1, 1), 1504277, new DateTime(1950, 1, 1), 1970358),
                Tuple.Create("New York", new DateTime(1940, 1, 1), 7454995, new DateTime(1950, 1, 1), 7891957),
                Tuple.Create("Chicago", new DateTime(1940, 1, 1), 3396808, new DateTime(1950, 1, 1), 3620962),
                Tuple.Create("Detroit", new DateTime(1940, 1, 1), 1623452, new DateTime(1950, 1, 1), 1849568)
            };

            // Display header
            string header = String.Format("{0,-12}{1,8}{2,12}{1,8}{2,12}{3,14}", "City", "Year", "Population", "Change (%)");
            Assert.AreEqual("City            Year  Population    Year  Population    Change (%)", header);

            string output = String.Format("{0,-12}{1,8:yyyy}{2,12:N0}{3,8:yyyy}{4,12:N0}{5,14:P1}",
                                       cities[0].Item1, cities[0].Item2, cities[0].Item3, cities[0].Item4, cities[0].Item5,
                                       (cities[0].Item5 - cities[0].Item3) / (double)cities[0].Item3);
            Assert.AreEqual("Los Angeles     1940   1,504,277    1950   1,970,358        31.0 %", output);

            output = String.Format("{0,-12}{1,8:yyyy}{2,12:N0}{3,8:yyyy}{4,12:N0}{5,14:P1}",
                                       cities[1].Item1, cities[1].Item2, cities[1].Item3, cities[1].Item4, cities[1].Item5,
                                       (cities[1].Item5 - cities[1].Item3) / (double)cities[1].Item3);
            Assert.AreEqual("New York        1940   7,454,995    1950   7,891,957         5.9 %", output);

            output = String.Format("{0,-12}{1,8:yyyy}{2,12:N0}{3,8:yyyy}{4,12:N0}{5,14:P1}",
                                      cities[2].Item1, cities[2].Item2, cities[2].Item3, cities[2].Item4, cities[2].Item5,
                                      (cities[2].Item5 - cities[2].Item3) / (double)cities[2].Item3);
            Assert.AreEqual("Chicago         1940   3,396,808    1950   3,620,962         6.6 %", output);

            output = String.Format("{0,-12}{1,8:yyyy}{2,12:N0}{3,8:yyyy}{4,12:N0}{5,14:P1}",
                                      cities[3].Item1, cities[3].Item2, cities[3].Item3, cities[3].Item4, cities[3].Item5,
                                      (cities[3].Item5 - cities[3].Item3) / (double)cities[3].Item3);
            Assert.AreEqual("Detroit         1940   1,623,452    1950   1,849,568        13.9 %", output);
        }

        [Test]
        public void PadIntegerWithLeadingZeros()
        {
            byte byteValue = 254;
            short shortValue = 10342;
            int intValue = 1023983;
            long lngValue = 6985321;
            ulong ulngValue = UInt64.MaxValue;

            Assert.AreEqual("              00000254               000000FE", string.Format("{0,22} {1,22}", byteValue.ToString("D8"), byteValue.ToString("X8")));
            Assert.AreEqual("              00010342               00002866", string.Format("{0,22} {1,22}", shortValue.ToString("D8"), shortValue.ToString("X8")));
            Assert.AreEqual("              01023983               000F9FEF", string.Format("{0,22} {1,22}", intValue.ToString("D8"), intValue.ToString("X8")));
            Assert.AreEqual("              06985321               006A9669", string.Format("{0,22} {1,22}", lngValue.ToString("D8"), lngValue.ToString("X8")));
            Assert.AreEqual("  18446744073709551615       FFFFFFFFFFFFFFFF", string.Format("{0,22} {1,22}", ulngValue.ToString("D8"), ulngValue.ToString("X8")));
            Assert.AreEqual("              00000254               000000FE", string.Format("{0,22:D8} {0,22:X8}", byteValue));
            Assert.AreEqual("              00010342               00002866", string.Format("{0,22:D8} {0,22:X8}", shortValue));
            Assert.AreEqual("              01023983               000F9FEF", string.Format("{0,22:D8} {0,22:X8}", intValue));
            Assert.AreEqual("              06985321               006A9669", string.Format("{0,22:D8} {0,22:X8}", lngValue));
            Assert.AreEqual("  18446744073709551615       FFFFFFFFFFFFFFFF", string.Format("{0,22:D8} {0,22:X8}", ulngValue));
        }

        [Test]
        public void PadIntegerWithSpecificNumberLeadingZeros()
        {
            int value = 160934;
            int decimalLength = value.ToString("D").Length + 5;
            int hexLength = value.ToString("X").Length + 5;
            Assert.AreEqual("00000160934", string.Format(value.ToString("D" + decimalLength.ToString())));
            Assert.AreEqual("00000274A6", string.Format(value.ToString("X" + hexLength.ToString())));
        }

        [Test]
        public void PadNumericWithLeadingZerosToLength()
        {
            string fmt = "00000000.##";
            int intValue = 1053240;
            decimal decValue = 103932.52m;
            double dblValue = 9034521202.93217412;

            // Display the numbers using composite formatting.
            string formatString = " {0,15:" + fmt + "}";
            Assert.AreEqual("        01053240", string.Format(formatString, intValue));
            Assert.AreEqual("     00103932.52", string.Format(formatString, decValue));
            Assert.AreEqual("   9034521202.93", string.Format(formatString, dblValue));
        }

        [Test]
        public void PadNumericWithSpecificNumberOfLeadingZeros()
        {
            double[] dblValues = { 9034521202.93217412, 9034521202 };
            string[] result = { "  000009034521202.93", "          9034521202" };
            int i = 0;
            foreach (double dblValue in dblValues)
            {
                string decSeparator = System.Globalization.NumberFormatInfo.CurrentInfo.NumberDecimalSeparator;
                string fmt, formatString;

                if (dblValue.ToString().Contains(decSeparator))
                {
                    int digits = dblValue.ToString().IndexOf(decSeparator);
                    fmt = new String('0', 5) + new String('#', digits) + ".##";
                }
                else
                {
                    fmt = new String('0', dblValue.ToString().Length);
                }
                formatString = "{0,20:" + fmt + "}";

                Assert.AreEqual(result[i++], string.Format(formatString, dblValue));
            }
        }
    }
}