using Bridge.Test.NUnit;
using System;
using System.Globalization;

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "DecimalTests - {0}")]
    public class DecimalTests
    {
        private void AssertIsDecimalAndEqualTo(object v, double d)
        {
            Assert.True(v is decimal);
            Assert.AreStrictEqual(d.ToString(), v.ToString());
        }

        [Test]
        public void ConversionsToDecimalWork_SPI_1580()
        {
            int x = 0;

            // #1580
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (decimal)(x + 79228162514264337593543950336f);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (decimal)(x - 79228162514264337593543950336f);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (decimal)(x + 79228162514264337593543950336.0);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (decimal)(x - 79228162514264337593543950336.0);
            });
        }

        [Test]
        public void NullableConversionsToDecimalWork_SPI_1580_1581_1587()
        {
            int? x1 = 0, x2 = null;
            // #1587
            Assert.AreEqual(null, (decimal?)(float?)x2);
            Assert.AreEqual(null, (decimal?)(double?)x2);

            // #1581
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (decimal)(sbyte?)x2;
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (decimal)(byte?)x2;
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (decimal)(short?)x2;
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (decimal)(ushort?)x2;
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (decimal)(char?)x2;
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (decimal)(int?)x2;
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (decimal)(uint?)x2;
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (decimal)(long?)x2;
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (decimal)(ulong?)x2;
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (decimal)(float?)x2;
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (decimal)(double?)x2;
            });

            // #1580
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (decimal?)(x1 + 79228162514264337593543950336f);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (decimal?)(x1 - 79228162514264337593543950336f);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (decimal?)(x1 + 79228162514264337593543950336.0);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (decimal?)(x1 - 79228162514264337593543950336.0);
            });
        }

        [Test]
        public void DecimalToSByte_SPI_1580()
        {
            decimal x = 0;
            // #1580
            Assert.Throws<OverflowException>(() =>
            {
                var _ = decimal.ToSByte(x - 129);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = decimal.ToSByte(x + 128);
            });
        }

        [Test]
        public void DecimalToByte_SPI_1580()
        {
            decimal x = 0;
            // #1580
            Assert.Throws<OverflowException>(() =>
            {
                var _ = decimal.ToByte(x - 1);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = decimal.ToByte(x + 256);
            });
        }

        [Test]
        public void DecimalToShort_SPI_1580()
        {
            decimal x = 0;
            // #1580
            Assert.Throws<OverflowException>(() =>
            {
                var _ = decimal.ToInt16(x - 32769);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = decimal.ToInt16(x + 32768);
            });
        }

        [Test]
        public void DecimalToUShort_SPI_1580()
        {
            decimal x = 0;
            // #1580
            Assert.Throws<OverflowException>(() =>
            {
                var _ = decimal.ToUInt16(x - 1);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = decimal.ToUInt16(x + 65536);
            });
        }

        [Test]
        public void DecimalToInt_SPI_1580()
        {
            decimal x = 0;
            // #1580
            Assert.Throws<OverflowException>(() =>
            {
                var _ = decimal.ToInt32(x - 2147483649);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = decimal.ToInt32(x + 2147483648);
            });
        }

        [Test]
        public void DecimalToUInt_SPI_1580()
        {
            decimal x = 0;
            // #1580
            Assert.Throws<OverflowException>(() =>
            {
                var _ = decimal.ToUInt32(x - 1);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = decimal.ToUInt32(x + 4294967296);
            });
        }

        [Test]
        public void DecimalToLong_SPI_1578()
        {
            decimal x = 0;

            // #1578
            Assert.AreEqual(-21474836480L, decimal.ToInt64(x - 21474836480.9m));
            Assert.AreEqual(21474836470L, decimal.ToInt64(x + 21474836470.9m));
        }

        [Test]
        public void DecimalToULong_SPI_1584_1585()
        {
            decimal x = 0;

            // #1584
            ulong u3 = 0;
            TestHelper.Safe(() => u3 = decimal.ToUInt64(x - 0.9m));
            Assert.AreEqual(0UL, u3);

            ulong u4 = 0;
            TestHelper.Safe(() => u4 = decimal.ToUInt64(x + 42949672950.9m));
            Assert.AreEqual(42949672950UL, u4);

            Assert.Throws<OverflowException>(() =>
            {
                var _ = Decimal.ToUInt64(x - 1);
            });
        }

        [Test]
        public void NullableDecimalToLong_SPI_1582()
        {
            decimal? x1 = 0, x2 = null;
            Assert.AreEqual(-21474836480L, (long?)(x1 - 21474836480));
            Assert.AreEqual(21474836470L, (long?)(x1 + 21474836470));
            Assert.AreEqual(-21474836480L, (long)(x1 - 21474836480));
            Assert.AreEqual(21474836470L, (long)(x1 + 21474836470));
            Assert.AreEqual(null, (long?)x2);

            // #1582
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (long)x2;
            });
        }

        [Test]
        public void NullableDecimalToULong_SPI_1582()
        {
            decimal? x1 = 0, x2 = null;
            Assert.AreEqual(0UL, (ulong?)x1);
            Assert.AreEqual(42949672950UL, (ulong?)(x1 + 42949672950));
            Assert.AreEqual(0UL, (ulong)x1);
            Assert.AreEqual(42949672950UL, (ulong)(x1 + 42949672950));
            Assert.AreEqual(null, (ulong?)x2);
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (ulong?)(x1 - 1);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (ulong)(x1 - 1);
            });

            // #1582
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (ulong)x2;
            });
        }

        [Test]
        public void OperatorsWork_SPI_1583()
        {
            decimal x = 3;
            // #1583
            Assert.Throws<DivideByZeroException>(() =>
            {
                var _ = x / 0m;
            });
            AssertIsDecimalAndEqualTo(14m % x, 2);
            Assert.Throws<DivideByZeroException>(() =>
            {
                var _ = x % 0m;
            });
        }

#pragma warning disable 464

        [Test]
        public void LiftedOperatorsWork_SPI_1583()
        {
            decimal? x1 = 3;

            // #1583
            Assert.Throws<DivideByZeroException>(() =>
            {
                var _ = x1 / 0m;
            });
            AssertIsDecimalAndEqualTo(14m % x1, 2);
            Assert.Throws<DivideByZeroException>(() =>
            {
                var _ = x1 % 0m;
            });
        }

#pragma warning restore 464

        [Test]
        public void ParseWorks_SPI_1586()
        {
            // #1586
            // Test restructure to keep assertion count correct (prevent uncaught test exception)
            decimal d1 = 0;
            TestHelper.Safe(() => d1 = decimal.Parse("+123.456"));
            AssertIsDecimalAndEqualTo(d1, 123.456);
            decimal d2 = 0;
            TestHelper.Safe(() => d2 = decimal.Parse("  +123.456  "));
            AssertIsDecimalAndEqualTo(d2, 123.456);

            //Assert.Throws<OverflowException>(() => decimal.Parse("999999999999999999999999999999"));
        }

        [Test]
        public void TryParseWorks_SPI_1586()
        {
            decimal d;
            bool b;

            // #1586
            b = decimal.TryParse("+123.456", out d);
            Assert.True(b);
            AssertIsDecimalAndEqualTo(d, 123.456);

            b = decimal.TryParse("  +123.456  ", out d);
            Assert.True(b);
            AssertIsDecimalAndEqualTo(d, 123.456);

            //b = decimal.TryParse("999999999999999999999999999999", out d);
            //Assert.False(b);
            //AssertIsDecimalAndEqualTo(d, 0);
        }

        [Test]
        public void ImplementationTests_SPI_1588_1590_1650()
        {
            // #1650
            Assert.AreEqual("0.0000000000000184016013412280", ((decimal.Parse("0.00000070385779892274")) * decimal.Parse("0.00000002614391908336")).ToString(), "(new Decimal(\"0.00000070385779892274\")).mul(\"0.00000002614391908336\").toString() == \"0.0000000000000184016013412280\" FAILED");
            // #1650
            Assert.AreEqual("0.0000000000000211764764198660", ((decimal.Parse("0.00000000801082840562")) * decimal.Parse("0.00000264348146628751")).ToString(), "(new Decimal(\"0.00000000801082840562\")).mul(\"0.00000264348146628751\").toString() == \"0.0000000000000211764764198660\" FAILED");
            // #1650
            Assert.AreEqual("0.8703972221908718709658421930", ((decimal.Parse("1970.18939162148")) * decimal.Parse("0.000441783528980698")).ToString(), "(new Decimal(\"1970.18939162148\")).mul(\"0.000441783528980698\").toString() == \"0.8703972221908718709658421930\" FAILED");
            // #1650
            Assert.AreEqual("0.0002938065361778543390344760", ((decimal.Parse("0.00000388761161541921")) * decimal.Parse("75.5750741695869")).ToString(), "(new Decimal(\"0.00000388761161541921\")).mul(\"75.5750741695869\").toString() == \"0.0002938065361778543390344760\" FAILED");
            // #1650
            Assert.AreEqual("248795975759.24153521774922170", ((decimal.Parse("274391.580035161")) * decimal.Parse("906718.696424141")).ToString(), "(new Decimal(\"274391.580035161\")).mul(\"906718.696424141\").toString() == \"248795975759.24153521774922170\" FAILED");
            // #1650
            Assert.AreEqual("0.0000000667441803526521607590", ((decimal.Parse("0.0000688309593912358")) * decimal.Parse("0.000969682551906296")).ToString(), "(new Decimal(\"0.0000688309593912358\")).mul(\"0.000969682551906296\").toString() == \"0.0000000667441803526521607590\" FAILED");
            // #1650
            Assert.AreEqual("0.0000001434686776916788182810", ((decimal.Parse("4.70885837669897")) * decimal.Parse("0.0000000304678260025")).ToString(), "(new Decimal(\"4.70885837669897\")).mul(\"0.0000000304678260025\").toString() == \"0.0000001434686776916788182810\" FAILED");
            // #1650
            Assert.AreEqual("40912917253931.602151150686830", ((decimal.Parse("9044513.99065764")) * decimal.Parse("4523506.43674075")).ToString(), "(new Decimal(\"9044513.99065764\")).mul(\"4523506.43674075\").toString() == \"40912917253931.602151150686830\" FAILED");
            // #1650
            Assert.AreEqual("0.0000000381173298826073792060", ((decimal.Parse("0.701377586322547")) * decimal.Parse("0.00000005434637579804")).ToString(), "(new Decimal(\"0.701377586322547\")).mul(\"0.00000005434637579804\").toString() == \"0.0000000381173298826073792060\" FAILED");
            // #1650
            Assert.AreEqual("0.0007832908360437819528979290", ((decimal.Parse("8.61752288817313")) * decimal.Parse("0.0000908951268488984")).ToString(), "(new Decimal(\"8.61752288817313\")).mul(\"0.0000908951268488984\").toString() == \"0.0007832908360437819528979290\" FAILED");
            // #1650
            Assert.AreEqual("16214.400846511121144041207000", ((decimal.Parse("7016.24042681243")) * decimal.Parse("2.31098136040893")).ToString(), "(new Decimal(\"7016.24042681243\")).mul(\"2.31098136040893\").toString() == \"16214.400846511121144041207000\" FAILED");
            // #1650
            Assert.AreEqual("0.0344964205226649308283349310", ((decimal.Parse("0.0000244098234104038")) * decimal.Parse("1413.21876617764")).ToString(), "(new Decimal(\"0.0000244098234104038\")).mul(\"1413.21876617764\").toString() == \"0.0344964205226649308283349310\" FAILED");
            // #1650
            Assert.AreEqual("0.0000000000429259949352215200", ((decimal.Parse("0.00000008143559702739")) * decimal.Parse("0.000527115862130707")).ToString(), "(new Decimal(\"0.00000008143559702739\")).mul(\"0.000527115862130707\").toString() == \"0.0000000000429259949352215200\" FAILED");
        }
    }
}