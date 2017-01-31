using Bridge.Test.NUnit;

using System;
using System.Globalization;

namespace Bridge.ClientTest.Format
{
    [Category(Constants.MODULE_NUMBERFORMATINFO)]
    [TestFixture(TestNameFormat = "NumberFormatSpecifiersTests - {0}")]
    public class NumberFormatSpecifiersTests
    {
        [Test]
        public void CurrencyFormatSpecifierWorks()
        {
            double value = 12345.6789;
            Assert.AreEqual("¤12,345.68", value.ToString("C"));
            Assert.AreEqual("¤12,345.68", value.ToString("C2"));
            Assert.AreEqual("¤12,345.679", value.ToString("C3"));
            Assert.AreEqual("12 345,679 ₽", value.ToString("C3", CultureInfo.GetCultureInfo("ru-RU")));
        }

        [Test]
        public void DecimalFormatSpecifierWorks()
        {
            double value = 12345;
            Assert.AreEqual("12345", value.ToString("D"));
            Assert.AreEqual("00012345", value.ToString("D8"));
            value = -12345;
            Assert.AreEqual("-12345", value.ToString("D"));
            Assert.AreEqual("-00012345", value.ToString("D8"));
        }

        [Test]
        public void ExponentialFormatSpecifierWorks()
        {
            double value = 12345.6789;
            Assert.AreEqual("1.234568E+004", value.ToString("E"));
            Assert.AreEqual("1.2345678900E+004", value.ToString("E10"));
            Assert.AreEqual("1.2346e+004", value.ToString("e4"));
            Assert.AreEqual("1,234568E+004", value.ToString("E", CultureInfo.GetCultureInfo("ru-RU")));
        }

        [Test]
        public void FixedPointFormatSpecifierWorks()
        {
            int integerNumber = 17843;
            Assert.AreEqual("17843.00", integerNumber.ToString("F"));

            integerNumber = -29541;
            Assert.AreEqual("-29541.000", integerNumber.ToString("F3"));

            double doubleNumber = 18934.1879;
            Assert.AreEqual("18934.19", doubleNumber.ToString("F"));
            Assert.AreEqual("18934", doubleNumber.ToString("F0"));

            doubleNumber = -1898300.1987;
            Assert.AreEqual("-1898300.2", doubleNumber.ToString("F1"));
            Assert.AreEqual("-1898300,199", doubleNumber.ToString("F3", CultureInfo.GetCultureInfo("ru-RU")));
        }

        [Test]
        public void GeneralFormatSpecifierWorks()
        {
            double number = 12345.6789;
            Assert.AreEqual("12345.6789", number.ToString("G"));
            Assert.AreEqual("12345,6789", number.ToString("G", CultureInfo.GetCultureInfo("ru-RU")));
            Assert.AreEqual("12345.68", number.ToString("G7"));

            number = .0000023;
            Assert.AreEqual("2.3E-06", number.ToString("G"));
            Assert.AreEqual("2,3E-06", number.ToString("G", CultureInfo.GetCultureInfo("ru-RU")));

            number = .0023;
            Assert.AreEqual("0.0023", number.ToString("G"));

            number = 1234;
            Assert.AreEqual("1.2E+03", number.ToString("G2"));

            number = Math.PI;
            Assert.AreEqual("3.1416", number.ToString("G5"));
        }

        [Test]
        public void NumericFormatSpecifierWorks()
        {
            double dblValue = -12445.6789;
            Assert.AreEqual("-12,445.68", dblValue.ToString("N"));
            Assert.AreEqual("-12\u00A0445,7", dblValue.ToString("N1", CultureInfo.GetCultureInfo("ru-RU")));

            int intValue = 123456789;
            Assert.AreEqual("123,456,789.0", intValue.ToString("N1"));
        }

        [Test]
        public void PercentFormatSpecifierWorks()
        {
            double number = .2468013;
            Assert.AreEqual("24.68 %", number.ToString("P"));
            Assert.AreEqual("24,68%", number.ToString("P", CultureInfo.GetCultureInfo("ru-RU")));
            Assert.AreEqual("24.7 %", number.ToString("P1"));
        }

        [Test]
        public void RoundTripFormatSpecifierWorks()
        {
            double value = Math.PI;
            Assert.AreEqual("3.141592653589793", value.ToString("r"));
            Assert.AreEqual("3,141592653589793", value.ToString("r", CultureInfo.GetCultureInfo("ru-RU")));

            value = 1.623e-21;
            Assert.AreEqual("1.623E-21", value.ToString("r"));
        }

        [Test]
        public void HexadecimalFormatSpecifierWorks()
        {
            int value = 0x2045e;
            Assert.AreEqual("2045e", value.ToString("x"));
            Assert.AreEqual("2045E", value.ToString("X"));
            Assert.AreEqual("0002045E", value.ToString("X8"));

            value = 123456789;
            Assert.AreEqual("75BCD15", value.ToString("X"));
            Assert.AreEqual("75BCD15", value.ToString("X2"));
        }

        [Test]
        public void CustomZeroFormatSpecifierWorks()
        {
            double value = 123;
            Assert.AreEqual("00123", value.ToString("00000"));

            value = 1.2;
            Assert.AreEqual("1.20", value.ToString("0.00"));
            Assert.AreEqual("01.20", value.ToString("00.00"));
            Assert.AreEqual("01,20", value.ToString("00.00", CultureInfo.GetCultureInfo("ru-RU")));

            value = .56;
            Assert.AreEqual("0.6", value.ToString("0.0"));

            value = 1234567890;
            Assert.AreEqual("1,234,567,890", value.ToString("0,0"));
            Assert.AreEqual("1\u00A0234\u00A0567\u00A0890", value.ToString("0,0", CultureInfo.GetCultureInfo("ru-RU")));

            value = 1234567890.123456;
            Assert.AreEqual("1,234,567,890.1", value.ToString("0,0.0"));

            value = 1234.567890;
            Assert.AreEqual("1,234.57", value.ToString("0,0.00"));
        }

        [Test]
        public void CustomHashFormatSpecifierWorks()
        {
            double value = 1.2;
            Assert.AreEqual("1.2", value.ToString("#.##"));

            value = 123;
            Assert.AreEqual("123", value.ToString("#####"));

            value = 123456;
            Assert.AreEqual("[12-34-56]", value.ToString("[##-##-##]"));

            value = 1234567890;
            Assert.AreEqual("1234567890", value.ToString("#"));
            Assert.AreEqual("(123) 456-7890", value.ToString("(###) ###-####"));

            value = 42;
            Assert.AreEqual("My Number = 42", value.ToString("My Number = #"));
        }

        [Test]
        public void CustomDotFormatSpecifierWorks()
        {
            double value = 1.2;
            Assert.AreEqual("1.20", value.ToString("0.00"));
            Assert.AreEqual("01.20", value.ToString("00.00"));
            Assert.AreEqual("01,20", value.ToString("00.00", CultureInfo.GetCultureInfo("ru-RU")));

            value = .086;
            Assert.AreEqual("8.6%", value.ToString("#0.##%"));
        }

        [Test]
        public void CustomCommaFormatSpecifierWorks()
        {
            double value = 1234567890;
            Assert.AreEqual("1,234,567,890", value.ToString("#,#"));
            Assert.AreEqual("1,235", value.ToString("#,##0,,"));

            value = 1234567890;
            Assert.AreEqual("1235", value.ToString("#,,"));
            Assert.AreEqual("1", value.ToString("#,,,"));
            Assert.AreEqual("1,235", value.ToString("#,##0,,"));
        }

        [Test]
        public void CustomPercentFormatSpecifierWorks()
        {
            double value = .086;
            Assert.AreEqual("8.6%", value.ToString("#0.##%"));
        }

        [Test]
        public void CustomPerMileFormatSpecifierWorks()
        {
            double value = .00354;
            Assert.AreEqual("3.54 ‰", value.ToString("#0.## " + '\u2030'));
        }

        [Test]
        public void CustomEscapeFormatSpecifierWorks()
        {
            int value = 123;
            Assert.AreEqual("### 123 dollars and 00 cents ###", value.ToString("\\#\\#\\# ##0 dollars and \\0\\0 cents \\#\\#\\#"));
            Assert.AreEqual("### 123 dollars and 00 cents ###", value.ToString(@"\#\#\# ##0 dollars and \0\0 cents \#\#\#"));
            Assert.AreEqual(@"\\\ 123 dollars and 00 cents \\\", value.ToString("\\\\\\\\\\\\ ##0 dollars and \\0\\0 cents \\\\\\\\\\\\"));
            Assert.AreEqual(@"\\\ 123 dollars and 00 cents \\\", value.ToString(@"\\\\\\ ##0 dollars and \0\0 cents \\\\\\"));
        }

        [Test]
        public void CustomSemicolonFormatSpecifierWorks()
        {
            double posValue = 1234;
            double negValue = -1234;
            double zeroValue = 0;

            string fmt2 = "##;(##)";
            string fmt3 = "##;(##);**Zero**";

            Assert.AreEqual("1234", posValue.ToString(fmt2));
            Assert.AreEqual("(1234)", negValue.ToString(fmt2));
            Assert.AreEqual("**Zero**", zeroValue.ToString(fmt3));
        }
    }
}