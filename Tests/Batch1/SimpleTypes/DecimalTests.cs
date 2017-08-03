using Bridge.ClientTestHelper;
using Bridge.Test.NUnit;
using System;
using System.Globalization;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_DECIMAL)]
    [TestFixture(TestNameFormat = "Decimal - {0}")]
    public class DecimalTests
    {
        private void AssertIsDecimalAndEqualTo(object v, object d, string message = null)
        {
            Assert.AreEqual(true, v is decimal, "Is decimal: " + message);
            Assert.AreEqual(d.ToString(), v.ToString(), "Value correct: " + message);
        }

        [Test]
        public void TypePropertiesAreCorrect_SPI_1717()
        {
            Assert.True((object)(decimal)0.5 is decimal);
            Assert.AreEqual("System.Decimal", typeof(decimal).FullName);
            Assert.False(typeof(decimal).IsClass);
            Assert.True(typeof(IComparable<decimal>).IsAssignableFrom(typeof(decimal)));
            Assert.True(typeof(IEquatable<decimal>).IsAssignableFrom(typeof(decimal)));
            Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(decimal)));
            object d = (decimal)0;
            Assert.True(d is decimal);
            Assert.True(d is IComparable<decimal>);
            Assert.True(d is IEquatable<decimal>);
            Assert.True(d is IFormattable);

            var interfaces = typeof(decimal).GetInterfaces();
            Assert.AreEqual(4, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<decimal>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<decimal>)));
            Assert.True(interfaces.Contains(typeof(IFormattable)));
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIsDecimal0()
        {
            AssertIsDecimalAndEqualTo(GetDefaultValue<decimal>(), 0);
        }

        [Test]
        public void CreatingInstanceReturnsZero()
        {
            AssertIsDecimalAndEqualTo(Activator.CreateInstance<decimal>(), 0);
        }

        [Test]
        public void LiteralDecimalsWork_SPI_1590()
        {
            AssertIsDecimalAndEqualTo(1m, 1);
            AssertIsDecimalAndEqualTo(-1m, -1);

            // #1590
            AssertIsDecimalAndEqualTo(7922816251426433759354395033m, "7922816251426433759354395033");
            AssertIsDecimalAndEqualTo(-7922816251426433759354395033m, "-7922816251426433759354395033");
        }

        [Test]
        public void ConstantsWork_SPI_1590()
        {
            AssertIsDecimalAndEqualTo(decimal.One, 1);
            AssertIsDecimalAndEqualTo(decimal.Zero, 0);
            AssertIsDecimalAndEqualTo(decimal.MinusOne, -1);
            // #1590
            AssertIsDecimalAndEqualTo(decimal.MinValue, "-79228162514264337593543950335");
            AssertIsDecimalAndEqualTo(decimal.MaxValue, "79228162514264337593543950335");
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            AssertIsDecimalAndEqualTo(new Decimal(), 0);
        }

        [Test]
        public void ConvertingConstructorsWork()
        {
            AssertIsDecimalAndEqualTo(new decimal((double)0.5), 0.5);
            AssertIsDecimalAndEqualTo(new decimal((float)1.5), 1.5);
            AssertIsDecimalAndEqualTo(new decimal((int)2), 2);
            AssertIsDecimalAndEqualTo(new decimal((long)3), 3);
            AssertIsDecimalAndEqualTo(new decimal((uint)4), 4);
            AssertIsDecimalAndEqualTo(new decimal((ulong)5), 5);
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual("123", 291m.Format("x"));
        }

        [Test]
        public void ToStringWithRadixWorks()
        {
            Assert.AreEqual("123", 291m.ToString("x"));
        }

        [Test]
        public void ToStringWithoutRadixWorks()
        {
            Assert.AreEqual("123", 123m.ToString());
        }

        [Test]
        public void ToStringWithFormatAndProviderWorks()
        {
            Assert.AreEqual("123", 291m.ToString("x", CultureInfo.InvariantCulture));
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual("291", ((IFormattable)291m).ToString("", CultureInfo.InvariantCulture));
        }

        //[Test]
        //public void ToStringWithRadixWorks()
        //{
        //    Assert.AreEqual(291m.ToString(10), "291");
        //    Assert.AreEqual(291m.ToString(16), "123");
        //}

        //[Test]
        //public void ToExponentialWorks()
        //{
        //    Assert.AreEqual(123m.ToExponential(), "1.23e+2");
        //}

        //[Test]
        //public void ToExponentialWithFractionalDigitsWorks()
        //{
        //    Assert.AreEqual(123m.ToExponential(1), "1.2e+2");
        //}

        //[Test]
        //public void ToFixed()
        //{
        //    Assert.AreEqual(123m.ToFixed(), "123");
        //}

        //[Test]
        //public void ToFixedWithFractionalDigitsWorks()
        //{
        //    Assert.AreEqual(123m.ToFixed(1), "123.0");
        //}

        //[Test]
        //public void ToPrecisionWorks()
        //{
        //    Assert.AreEqual(12345m.ToPrecision(), "12345");
        //}

        //[Test]
        //public void ToPrecisionWithPrecisionWorks()
        //{
        //    Assert.AreEqual(12345m.ToPrecision(2), "1.2e+4");
        //}

        // Not C# API
        //[Test]
        //public void LocaleFormatWorks()
        //{
        //    Assert.AreEqual(291m.LocaleFormat("x"), "123");
        //}

        [Test]
        public void AddWithStringWorks()
        {
            decimal? d1 = 1m;
            var s1 = d1 + "#";

            Assert.AreEqual("1#", s1, "decimal?");

            decimal d2 = 2m;
            var s2 = d2 + "!";

            Assert.AreEqual("2!", s2, "decimal");
        }

        [Test]
        public void ConversionsToDecimalWork_SPI_1580()
        {
            int x = 0;
            AssertIsDecimalAndEqualTo((decimal)(sbyte)(x + 1), 1);
            AssertIsDecimalAndEqualTo((decimal)(byte)(x + 2), 2);
            AssertIsDecimalAndEqualTo((decimal)(short)(x + 3), 3);
            AssertIsDecimalAndEqualTo((decimal)(ushort)(x + 4), 4);
            AssertIsDecimalAndEqualTo((decimal)(char)(x + '\x5'), 5);
            AssertIsDecimalAndEqualTo((decimal)(int)(x + 6), 6);
            AssertIsDecimalAndEqualTo((decimal)(uint)(x + 7), 7);
            AssertIsDecimalAndEqualTo((decimal)(long)(x + 8), 8);
            AssertIsDecimalAndEqualTo((decimal)(ulong)(x + 9), 9);
            AssertIsDecimalAndEqualTo((decimal)(float)(x + 10.5), 10.5);
            AssertIsDecimalAndEqualTo((decimal)(double)(x + 11.5), 11.5);

            // #1580
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = (decimal)(x + 79228162514264337593543950336f);
            //});
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = (decimal)(x - 79228162514264337593543950336f);
            //});
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = (decimal)(x + 79228162514264337593543950336.0);
            //});
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = (decimal)(x - 79228162514264337593543950336.0);
            //});
        }

        [Test]
        public void ConversionsFromDecimalWork()
        {
            int x = 0;
            Assert.AreEqual(1, (byte)(decimal)(x + 1));
            Assert.AreEqual(2, (sbyte)(decimal)(x + 2));
            Assert.AreEqual(3, (short)(decimal)(x + 3));
            Assert.AreEqual(4, (ushort)(decimal)(x + 4));
            Assert.AreEqual(5, (int)(char)(decimal)(x + '\x5'));
            Assert.AreEqual(6, (int)(decimal)(x + 6));
            Assert.AreEqual(7, (uint)(decimal)(x + 7));
            Assert.True(8 == (long)(decimal)(x + 8));
            Assert.True(9 == (ulong)(decimal)(x + 9));
            Assert.AreEqual(10.5, (float)(decimal)(x + 10.5));
            Assert.AreEqual(11.5, (double)(decimal)(x + 11.5));
        }

        [Test]
        public void NullableConversionsToDecimalWork_SPI_1580_1581_1587()
        {
            int? x1 = 0, x2 = null;
            AssertIsDecimalAndEqualTo((decimal?)(sbyte?)(x1 + 1), 1);
            AssertIsDecimalAndEqualTo((decimal?)(byte?)(x1 + 2), 2);
            AssertIsDecimalAndEqualTo((decimal?)(short?)(x1 + 3), 3);
            AssertIsDecimalAndEqualTo((decimal?)(ushort?)(x1 + 4), 4);
            AssertIsDecimalAndEqualTo((decimal?)(char?)(x1 + '\x5'), 5);
            AssertIsDecimalAndEqualTo((decimal?)(int?)(x1 + 6), 6);
            AssertIsDecimalAndEqualTo((decimal?)(uint?)(x1 + 7), 7);
            AssertIsDecimalAndEqualTo((decimal?)(long?)(x1 + 8), 8);
            AssertIsDecimalAndEqualTo((decimal?)(ulong?)(x1 + 9), 9);
            AssertIsDecimalAndEqualTo((decimal?)(float?)(x1 + 10.5), 10.5);
            AssertIsDecimalAndEqualTo((decimal?)(double?)(x1 + 11.5), 11.5);
            Assert.AreEqual(null, (decimal?)(sbyte?)x2);
            Assert.AreEqual(null, (decimal?)(byte?)x2);
            Assert.AreEqual(null, (decimal?)(short?)x2);
            Assert.AreEqual(null, (decimal?)(ushort?)x2);
            Assert.AreEqual(null, (decimal?)(char?)x2);
            Assert.AreEqual(null, (decimal?)(int?)x2);
            Assert.AreEqual(null, (decimal?)(uint?)x2);
            Assert.AreEqual(null, (decimal?)(long?)x2);
            Assert.AreEqual(null, (decimal?)(ulong?)x2);

            // #1587
            //Assert.AreEqual(null, (decimal?)(float?)x2);
            //Assert.AreEqual(null, (decimal?)(double?)x2);

            // #1581
            //Assert.Throws<InvalidOperationException>(() =>
            //{
            //    var _ = (decimal)(sbyte?)x2;
            //});
            //Assert.Throws<InvalidOperationException>(() =>
            //{
            //    var _ = (decimal)(byte?)x2;
            //});
            //Assert.Throws<InvalidOperationException>(() =>
            //{
            //    var _ = (decimal)(short?)x2;
            //});
            //Assert.Throws<InvalidOperationException>(() =>
            //{
            //    var _ = (decimal)(ushort?)x2;
            //});
            //Assert.Throws<InvalidOperationException>(() =>
            //{
            //    var _ = (decimal)(char?)x2;
            //});
            //Assert.Throws<InvalidOperationException>(() =>
            //{
            //    var _ = (decimal)(int?)x2;
            //});
            //Assert.Throws<InvalidOperationException>(() =>
            //{
            //    var _ = (decimal)(uint?)x2;
            //});
            //Assert.Throws<InvalidOperationException>(() =>
            //{
            //    var _ = (decimal)(long?)x2;
            //});
            //Assert.Throws<InvalidOperationException>(() =>
            //{
            //    var _ = (decimal)(ulong?)x2;
            //});
            //Assert.Throws<InvalidOperationException>(() =>
            //{
            //    var _ = (decimal)(float?)x2;
            //});
            //Assert.Throws<InvalidOperationException>(() =>
            //{
            //    var _ = (decimal)(double?)x2;
            //});

            // #1580
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = (decimal?)(x1 + 79228162514264337593543950336f);
            //});
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = (decimal?)(x1 - 79228162514264337593543950336f);
            //});
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = (decimal?)(x1 + 79228162514264337593543950336.0);
            //});
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = (decimal?)(x1 - 79228162514264337593543950336.0);
            //});
        }

        [Test]
        public void DecimalToSByte_SPI_1580()
        {
            decimal x = 0;
            Assert.AreEqual(-128, (sbyte)(x - 128.9m));
            Assert.AreEqual(127, (sbyte)(x + 127.9m));
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (sbyte)(x - 129);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (sbyte)(x + 128);
            });

            Assert.AreEqual(-128, decimal.ToSByte(x - 128.9m));
            Assert.AreEqual(127, decimal.ToSByte(x + 127.9m));

            // #1580
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = decimal.ToSByte(x - 129);
            //});
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = decimal.ToSByte(x + 128);
            //});
        }

        [Test]
        public void DecimalToByte_SPI_1580()
        {
            decimal x = 0;
            Assert.AreEqual(0, (byte)(x - 0.9m));
            Assert.AreEqual(255, (byte)(x + 255.9m));
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (byte)(x - 1);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (byte)(x + 256);
            });

            Assert.AreEqual(0, decimal.ToByte(x - 0.9m));
            Assert.AreEqual(255, decimal.ToByte(x + 255.9m));

            // #1580
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = decimal.ToByte(x - 1);
            //});
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = decimal.ToByte(x + 256);
            //});
        }

        [Test]
        public void DecimalToShort_SPI_1580()
        {
            decimal x = 0;
            Assert.AreEqual(-32768, (short)(x - 32768.9m));
            Assert.AreEqual(32767, (short)(x + 32767.9m));
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (short)(x - 32769);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (short)(x + 32768);
            });

            Assert.AreEqual(-32768, decimal.ToInt16(x - 32768.9m));
            Assert.AreEqual(32767, decimal.ToInt16(x + 32767.9m));

            // #1580
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = decimal.ToInt16(x - 32769);
            //});
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = decimal.ToInt16(x + 32768);
            //});
        }

        [Test]
        public void DecimalToUShort_SPI_1580()
        {
            decimal x = 0;
            Assert.AreEqual(0, (ushort)(x - 0.9m));
            Assert.AreEqual(65535, (ushort)(x + 65535.9m));
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (ushort)(x - 1);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (ushort)(x + 65536);
            });

            Assert.AreEqual(0, decimal.ToUInt16(x - 0.9m));
            Assert.AreEqual(65535, decimal.ToUInt16(x + 65535.9m));

            // #1580
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = decimal.ToUInt16(x - 1);
            //});
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = decimal.ToUInt16(x + 65536);
            //});
        }

        [Test]
        public void DecimalToChar()
        {
            decimal x = 0;
            Assert.AreEqual(0, (int)(char)(x - 0.9m));
            Assert.AreEqual(65535, (int)(char)(x + 65535.9m));
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (char)(x - 1);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (char)(x + 65536);
            });
        }

        [Test]
        public void DecimalToInt_SPI_1580()
        {
            decimal x = 0;
            Assert.AreEqual(-2147483648, (int)(x - 2147483648.9m));
            Assert.AreEqual(2147483647, (int)(x + 2147483647.9m));
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (int)(x - 2147483649);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (int)(x + 2147483648);
            });

            Assert.AreEqual(-2147483648, decimal.ToInt32(x - 2147483648.9m));
            Assert.AreEqual(2147483647, decimal.ToInt32(x + 2147483647.9m));

            // #1580
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = decimal.ToInt32(x - 2147483649);
            //});
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = decimal.ToInt32(x + 2147483648);
            //});
        }

        [Test]
        public void DecimalToUInt_SPI_1580()
        {
            decimal x = 0;
            Assert.AreEqual(0, (uint)(x - 0.9m));
            Assert.AreEqual(4294967295, (uint)(x + 4294967295.9m));
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (uint)(x - 1);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (uint)(x + 4294967296);
            });

            Assert.AreEqual(0, decimal.ToUInt32(x - 0.9m));
            Assert.AreEqual(4294967295, decimal.ToUInt32(x + 4294967295.9m));

            // #1580
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = decimal.ToUInt32(x - 1);
            //});
            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = decimal.ToUInt32(x + 4294967296);
            //});
        }

        [Test]
        public void DecimalToLong_SPI_1578()
        {
            decimal x = 0;
            Assert.AreEqual(-21474836480L, (long)(x - 21474836480.9m));
            Assert.AreEqual(21474836470L, (long)(x + 21474836470.9m));

            // #1578
            //Assert.AreEqual(-21474836480L, decimal.ToInt64(x - 21474836480.9m));
            //Assert.AreEqual(21474836470L, decimal.ToInt64(x + 21474836470.9m));
        }

        [Test]
        public void DecimalToULong_SPI_1584_1585()
        {
            decimal x = 0;

            // #1585
            // Test restructure to keep assertion count correct(prevent uncaught test exception)
            //ulong u1 = 0;
            //CommonHelper.Safe(() => u1 = (ulong)(x - 0.9m));
            //Assert.AreEqual(0UL, u1);

            ulong u2 = 0;
            CommonHelper.Safe(() => u2 = (ulong)(x + 42949672950.9m));
            Assert.AreEqual(42949672950UL, u2);
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (ulong)(x - 1);
            });

            // #1584
            //ulong u3 = 0;
            //CommonHelper.Safe(() => u3 = decimal.ToUInt64(x - 0.9m));
            //Assert.AreEqual(0UL, u3);

            //ulong u4 = 0;
            //CommonHelper.Safe(() => u4 = decimal.ToUInt64(x + 42949672950.9m));
            //Assert.AreEqual(42949672950UL, u4);

            //Assert.Throws<OverflowException>(() =>
            //{
            //    var _ = Decimal.ToUInt64(x - 1);
            //});
        }

        [Test]
        public void DecimalToFloat()
        {
            decimal x = 0;
            Assert.AreEqual(10.5, (float)(x + 10.5m));
            Assert.AreEqual(10.5, decimal.ToSingle(x + 10.5m));
        }

        [Test]
        public void DecimalToDouble()
        {
            decimal x = 0;
            Assert.AreEqual(10.5, (double)(x + 10.5m));
            Assert.AreEqual(10.5, decimal.ToDouble(x + 10.5m));
        }

        [Test]
        public void NullableDecimalToSByte()
        {
            decimal? x1 = 0, x2 = null;
            Assert.AreEqual(-128, (sbyte?)(x1 - 128));
            Assert.AreEqual(127, (sbyte?)(x1 + 127));
            Assert.AreEqual(-128, (sbyte)(x1 - 128));
            Assert.AreEqual(127, (sbyte)(x1 + 127));
            Assert.AreEqual(null, (sbyte?)x2);
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (sbyte?)(x1 - 129);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (sbyte?)(x1 + 128);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (sbyte)(x1 - 129);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (sbyte)(x1 + 128);
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (sbyte)x2;
            });
        }

        [Test]
        public void NullableDecimalToByte()
        {
            decimal? x1 = 0, x2 = null;
            Assert.AreEqual(0, (byte?)x1);
            Assert.AreEqual(255, (byte?)(x1 + 255));
            Assert.AreEqual(0, (byte)x1);
            Assert.AreEqual(255, (byte)(x1 + 255));
            Assert.AreEqual(null, (byte?)x2);
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (byte?)(x1 - 1);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (byte?)(x1 + 256);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (byte)(x1 - 1);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (byte)(x1 + 256);
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (sbyte)x2;
            });
        }

        [Test]
        public void NullableDecimalToShort()
        {
            decimal? x1 = 0, x2 = null;
            Assert.AreEqual(-32768, (short?)(x1 - 32768));
            Assert.AreEqual(32767, (short?)(x1 + 32767));
            Assert.AreEqual(-32768, (short)(x1 - 32768));
            Assert.AreEqual(32767, (short)(x1 + 32767));
            Assert.AreEqual(null, (short?)x2);
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (short?)(x1 - 32769);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (short?)(x1 + 32768);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (short)(x1 - 32769);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (short)(x1 + 32768);
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (short)x2;
            });
        }

        [Test]
        public void NullableDecimalToUShort()
        {
            decimal? x1 = 0, x2 = null;
            Assert.AreEqual(0, (ushort?)x1);
            Assert.AreEqual(65535, (ushort?)(x1 + 65535));
            Assert.AreEqual(0, (ushort)x1);
            Assert.AreEqual(65535, (ushort)(x1 + 65535));
            Assert.AreEqual(null, (ushort?)x2);
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (ushort?)(x1 - 1);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (ushort?)(x1 + 65536);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (ushort)(x1 - 1);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (ushort)(x1 + 65536);
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (ushort)x2;
            });
        }

        [Test]
        public void NullableDecimalToChar()
        {
            decimal? x1 = 0, x2 = null;
            Assert.AreEqual(0, (int?)(char?)x1);
            Assert.AreEqual(65535, (int?)(char?)(x1 + 65535));
            Assert.AreEqual(0, (int)(char)x1);
            Assert.AreEqual(65535, (int)(char)(x1 + 65535));
            Assert.AreEqual(null, (int?)(char?)x2);
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (char?)(x1 - 1);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (char?)(x1 + 65536);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (char)(x1 - 1);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (char)(x1 + 65536);
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (char)x2;
            });
        }

        [Test]
        public void NullableDecimalToInt()
        {
            decimal? x1 = 0, x2 = null;
            Assert.AreEqual(-2147483648, (int?)(x1 - 2147483648));
            Assert.AreEqual(2147483647, (int?)(x1 + 2147483647));
            Assert.AreEqual(-2147483648, (int)(x1 - 2147483648));
            Assert.AreEqual(2147483647, (int)(x1 + 2147483647));
            Assert.AreEqual(null, (int?)x2);
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (int?)(x1 - 2147483649);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (int?)(x1 + 2147483648);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (int)(x1 - 2147483649);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (int)(x1 + 2147483648);
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (int)x2;
            });
        }

        [Test]
        public void NullableDecimalToUInt()
        {
            decimal? x1 = 0, x2 = null;
            Assert.AreEqual(0, (uint?)x1);
            Assert.AreEqual(4294967295, (uint?)(x1 + 4294967295));
            Assert.AreEqual(0, (uint)x1);
            Assert.AreEqual(4294967295, (uint)(x1 + 4294967295));
            Assert.AreEqual(null, (uint?)x2);
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (uint?)(x1 - 1);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (uint?)(x1 + 4294967296);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (uint)(x1 - 1);
            });
            Assert.Throws<OverflowException>(() =>
            {
                var _ = (uint)(x1 + 4294967296);
            });
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (uint)x2;
            });
        }

        //[Test]
        //public void NullableDecimalToLong_SPI_1582()
        //{
        //    decimal? x1 = 0, x2 = null;
        //    Assert.AreEqual(-21474836480L, (long?)(x1 - 21474836480));
        //    Assert.AreEqual(21474836470L, (long?)(x1 + 21474836470));
        //    Assert.AreEqual(-21474836480L, (long)(x1 - 21474836480));
        //    Assert.AreEqual(21474836470L, (long)(x1 + 21474836470));
        //    Assert.AreEqual(null, (long?)x2);

        //    // #1582
        //    Assert.Throws<InvalidOperationException>(() =>
        //    {
        //        var _ = (long)x2;
        //    });
        //}

        //[Test]
        //public void NullableDecimalToULong_SPI_1582()
        //{
        //    decimal? x1 = 0, x2 = null;
        //    Assert.AreEqual(0UL, (ulong?)x1);
        //    Assert.AreEqual(42949672950UL, (ulong?)(x1 + 42949672950));
        //    Assert.AreEqual(0UL, (ulong)x1);
        //    Assert.AreEqual(42949672950UL, (ulong)(x1 + 42949672950));
        //    Assert.AreEqual(null, (ulong?)x2);
        //    Assert.Throws<OverflowException>(() =>
        //    {
        //        var _ = (ulong?)(x1 - 1);
        //    });
        //    Assert.Throws<OverflowException>(() =>
        //    {
        //        var _ = (ulong)(x1 - 1);
        //    });

        //    // #1582
        //    Assert.Throws<InvalidOperationException>(() =>
        //    {
        //        var _ = (ulong)x2;
        //    });
        //}

        [Test]
        public void NullableDecimalToFloat_SPI_1579()
        {
            decimal? x1 = 0, x2 = null;

            float? f1 = null;
            CommonHelper.Safe(() => f1 = (float?)(x1 + 10.5m));
            Assert.AreEqual(10.5, f1);
            // #1579
            // Test restructure to keep assertion count correct (prevent uncaught test exception)
            float f2 = 0;
            CommonHelper.Safe(() => f2 = (float)(x1 + 10.5m));
            Assert.AreEqual(10.5, f2);

            float? f3 = null;
            CommonHelper.Safe(() => f3 = (float?)x2);
            Assert.AreEqual(null, f3);
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (float)x2;
            });
        }

        [Test]
        public void NullableDecimalToDouble_SPI_1579()
        {
            decimal? x1 = 0, x2 = null;
            Assert.AreEqual(10.5, (double?)(x1 + 10.5m));

            // #1579
            // Test restructure to keep assertion count correct(prevent uncaught test exception)
            double d1 = 0;
            CommonHelper.Safe(() => d1 = (double)(x1 + 10.5m));
            Assert.AreEqual(10.5, d1);

            double? d2 = null;
            CommonHelper.Safe(() => d2 = (double?)x2);
            Assert.AreEqual(null, d2);
            Assert.Throws<InvalidOperationException>(() =>
            {
                var _ = (double)x2;
            });
        }

        [Test]
        public void OperatorsWork_SPI_1583()
        {
            decimal x = 3;
            AssertIsDecimalAndEqualTo(+x, 3);
            AssertIsDecimalAndEqualTo(-x, -3);
            AssertIsDecimalAndEqualTo(x + 4m, 7);
            AssertIsDecimalAndEqualTo(x - 2m, 1);
            AssertIsDecimalAndEqualTo(x++, 3);
            AssertIsDecimalAndEqualTo(x, 4);
            AssertIsDecimalAndEqualTo(++x, 5);
            AssertIsDecimalAndEqualTo(x, 5);
            AssertIsDecimalAndEqualTo(x--, 5);
            AssertIsDecimalAndEqualTo(x, 4);
            AssertIsDecimalAndEqualTo(--x, 3);
            AssertIsDecimalAndEqualTo(x, 3);
            AssertIsDecimalAndEqualTo(x * 3m, 9);
            AssertIsDecimalAndEqualTo(x / 2m, 1.5);

            // #1583
            //Assert.Throws<DivideByZeroException>(() =>
            //{
            //    var _ = x / 0m;
            //});
            //AssertIsDecimalAndEqualTo(14m % x, 2);
            //Assert.Throws<DivideByZeroException>(() =>
            //{
            //    var _ = x % 0m;
            //});

            Assert.True(x == 3m);
            Assert.False(x == 4m);
            Assert.False(x != 3m);
            Assert.True(x != 4m);
            Assert.True(x > 1m);
            Assert.False(x > 3m);
            Assert.True(x >= 3m);
            Assert.False(x >= 4m);
            Assert.True(x < 4m);
            Assert.False(x < 3m);
            Assert.True(x <= 3m);
            Assert.False(x <= 2m);
        }

#pragma warning disable 464

        [Test]
        public void LiftedOperatorsWork_SPI_1583()
        {
            decimal? x1 = 3, x2 = null;
            AssertIsDecimalAndEqualTo(+x1, 3);
            AssertIsDecimalAndEqualTo(-x1, -3);
            AssertIsDecimalAndEqualTo(x1 + 4m, 7);
            AssertIsDecimalAndEqualTo(x1 - 2m, 1);
            AssertIsDecimalAndEqualTo(x1++, 3);
            AssertIsDecimalAndEqualTo(x1, 4);
            AssertIsDecimalAndEqualTo(++x1, 5);
            AssertIsDecimalAndEqualTo(x1, 5);
            AssertIsDecimalAndEqualTo(x1--, 5);
            AssertIsDecimalAndEqualTo(x1, 4);
            AssertIsDecimalAndEqualTo(--x1, 3);
            AssertIsDecimalAndEqualTo(x1, 3);
            AssertIsDecimalAndEqualTo(x1 * 3m, 9);
            AssertIsDecimalAndEqualTo(x1 / 2m, 1.5);

            // #1583
            //Assert.Throws<DivideByZeroException>(() =>
            //{
            //    var _ = x1 / 0m;
            //});
            //AssertIsDecimalAndEqualTo(14m % x1, 2);
            //Assert.Throws<DivideByZeroException>(() =>
            //{
            //    var _ = x1 % 0m;
            //});

            Assert.AreEqual(null, +x2);
            Assert.AreEqual(null, -x2);
            Assert.AreEqual(null, x2 + 4m);
            Assert.AreEqual(null, 4m + x2);
            Assert.AreEqual(null, x2 - 2m);
            Assert.AreEqual(null, 2m - x2);
            Assert.AreEqual(null, x2++);
            Assert.AreEqual(null, x2);
            Assert.AreEqual(null, ++x2);
            Assert.AreEqual(null, x2);
            Assert.AreEqual(null, x2--);
            Assert.AreEqual(null, x2);
            Assert.AreEqual(null, --x2);
            Assert.AreEqual(null, x2);
            Assert.AreEqual(null, x2 * 3m);
            Assert.AreEqual(null, 3m * x2);
            Assert.AreEqual(null, x2 / 2m);
            Assert.AreEqual(null, 2m / x2);
            Assert.AreEqual(null, x2 / 0m);
            Assert.AreEqual(null, 14m % x2);
            Assert.AreEqual(null, x2 % 14m);
            Assert.AreEqual(null, x2 % 0m);

            Assert.True(x1 == 3m);
            Assert.False(x1 == 4m);
            Assert.False(x1 == null);
            Assert.False(null == x1);
            Assert.True(x2 == null);

            Assert.False(x1 != 3m);
            Assert.True(x1 != 4m);
            Assert.True(x1 != null);
            Assert.True(null != x1);
            Assert.False(x2 != null);

            Assert.True(x1 > 1m);
            Assert.False(x1 > 3m);
            Assert.False(x1 > null);
            Assert.False(null > x1);
            Assert.False(x2 > null);

            Assert.True(x1 >= 3m);
            Assert.False(x1 >= 4m);
            Assert.False(x1 >= null);
            Assert.False(null >= x1);
            Assert.False(x2 >= null);

            Assert.True(x1 < 4m);
            Assert.False(x1 < 3m);
            Assert.False(x1 < null);
            Assert.False(null < x1);
            Assert.False(x2 < null);

            Assert.True(x1 <= 3m);
            Assert.False(x1 <= 2m);
            Assert.False(x1 <= null);
            Assert.False(null <= x1);
            Assert.False(x2 <= null);
        }

#pragma warning restore 464

        [Test]
        public void AddWorks()
        {
            AssertIsDecimalAndEqualTo(decimal.Add(3m, 4m), 7);
        }

        [Test]
        public void CeilingWorks()
        {
            AssertIsDecimalAndEqualTo(decimal.Ceiling(3.1m), 4);
            AssertIsDecimalAndEqualTo(decimal.Ceiling(-3.9m), -3);
            AssertIsDecimalAndEqualTo(decimal.Ceiling(3m), 3);
        }

        [Test]
        public void DivideWorks()
        {
            AssertIsDecimalAndEqualTo(decimal.Divide(3m, 4m), 0.75);
        }

        [Test]
        public void FloorWorks()
        {
            AssertIsDecimalAndEqualTo(decimal.Floor(3.9m), 3);
            AssertIsDecimalAndEqualTo(decimal.Floor(-3.1m), -4);
            AssertIsDecimalAndEqualTo(decimal.Floor(3m), 3);
        }

        [Test]
        public void RemainderWorks()
        {
            AssertIsDecimalAndEqualTo(decimal.Remainder(14m, 3m), 2);
        }

        [Test]
        public void MultiplyWorks()
        {
            AssertIsDecimalAndEqualTo(decimal.Multiply(3m, 2m), 6);
        }

        [Test]
        public void NegateWorks()
        {
            AssertIsDecimalAndEqualTo(decimal.Negate(3m), -3);
        }

        [Test]
        public void RoundWorks()
        {
            AssertIsDecimalAndEqualTo(decimal.Round(3.2m), 3);
        }

        [Test]
        public void RoundWithModeWorks()
        {
            AssertIsDecimalAndEqualTo(decimal.Round(3.8m, MidpointRounding.Up), 4, "Up 3.8m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.5m, MidpointRounding.Up), 4, "Up 3.5m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.2m, MidpointRounding.Up), 4, "Up 3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.2m, MidpointRounding.Up), -4, "Up -3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.5m, MidpointRounding.Up), -4, "Up -3.5");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.8m, MidpointRounding.Up), -4, "Up -3.8m");

            AssertIsDecimalAndEqualTo(decimal.Round(3.8m, MidpointRounding.Down), 3, "Down 3.8m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.5m, MidpointRounding.Down), 3, "Down 3.5m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.2m, MidpointRounding.Down), 3, "Down 3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.2m, MidpointRounding.Down), -3, "Down -3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.5m, MidpointRounding.Down), -3, "Down -3.5");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.8m, MidpointRounding.Down), -3, "Down -3.8m");

            AssertIsDecimalAndEqualTo(decimal.Round(3.8m, MidpointRounding.InfinityPos), 4, "InfinityPos 3.8m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.5m, MidpointRounding.InfinityPos), 4, "InfinityPos 3.5m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.2m, MidpointRounding.InfinityPos), 4, "InfinityPos 3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.2m, MidpointRounding.InfinityPos), -3, "InfinityPos -3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.5m, MidpointRounding.InfinityPos), -3, "InfinityPos -3.5");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.8m, MidpointRounding.InfinityPos), -3, "InfinityPos -3.8m");

            AssertIsDecimalAndEqualTo(decimal.Round(3.8m, MidpointRounding.InfinityNeg), 3, "InfinityNeg 3.8m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.5m, MidpointRounding.InfinityNeg), 3, "InfinityNeg 3.5m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.2m, MidpointRounding.InfinityNeg), 3, "InfinityNeg 3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.2m, MidpointRounding.InfinityNeg), -4, "InfinityNeg -3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.5m, MidpointRounding.InfinityNeg), -4, "InfinityNeg -3.5");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.8m, MidpointRounding.InfinityNeg), -4, "InfinityNeg -3.8m");

            AssertIsDecimalAndEqualTo(decimal.Round(3.8m, MidpointRounding.TowardsZero), 4, "TowardsZero 3.8m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.5m, MidpointRounding.TowardsZero), 3, "TowardsZero 3.5m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.2m, MidpointRounding.TowardsZero), 3, "TowardsZero 3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.2m, MidpointRounding.TowardsZero), -3, "TowardsZero -3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.5m, MidpointRounding.TowardsZero), -3, "TowardsZero -3.5");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.8m, MidpointRounding.TowardsZero), -4, "TowardsZero -3.8m");

            AssertIsDecimalAndEqualTo(decimal.Round(3.8m, MidpointRounding.AwayFromZero), 4, "AwayFromZero 3.8m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.5m, MidpointRounding.AwayFromZero), 4, "AwayFromZero 3.5m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.2m, MidpointRounding.AwayFromZero), 3, "AwayFromZero 3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.2m, MidpointRounding.AwayFromZero), -3, "AwayFromZero -3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.5m, MidpointRounding.AwayFromZero), -4, "AwayFromZero -3.5");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.8m, MidpointRounding.AwayFromZero), -4, "AwayFromZero -3.8m");

            AssertIsDecimalAndEqualTo(decimal.Round(3.8m, MidpointRounding.Ceil), 4, "Ceil 3.8m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.5m, MidpointRounding.Ceil), 4, "Ceil 3.5m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.2m, MidpointRounding.Ceil), 3, "Ceil 3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.2m, MidpointRounding.Ceil), -3, "Ceil -3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.5m, MidpointRounding.Ceil), -3, "Ceil -3.5");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.8m, MidpointRounding.Ceil), -4, "Ceil -3.8m");

            AssertIsDecimalAndEqualTo(decimal.Round(3.8m, MidpointRounding.Floor), 4, "Floor 3.8m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.5m, MidpointRounding.Floor), 3, "Floor 3.5m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.2m, MidpointRounding.Floor), 3, "Floor 3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.2m, MidpointRounding.Floor), -3, "Floor -3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.5m, MidpointRounding.Floor), -4, "Floor -3.5");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.8m, MidpointRounding.Floor), -4, "Floor -3.8m");

            AssertIsDecimalAndEqualTo(decimal.Round(3.8m, MidpointRounding.ToEven), 4, "ToEven 3.8m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.5m, MidpointRounding.ToEven), 4, "ToEven 3.5m");
            AssertIsDecimalAndEqualTo(decimal.Round(3.2m, MidpointRounding.ToEven), 3, "ToEven 3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.2m, MidpointRounding.ToEven), -3, "ToEven -3.2m");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.5m, MidpointRounding.ToEven), -4, "ToEven -3.5");
            AssertIsDecimalAndEqualTo(decimal.Round(-3.8m, MidpointRounding.ToEven), -4, "ToEven -3.8m");
        }

        [Test]
        public void ParseWorks_SPI_1586()
        {
            AssertIsDecimalAndEqualTo(decimal.Parse("123"), 123);
            AssertIsDecimalAndEqualTo(decimal.Parse("0.123"), .123);
            AssertIsDecimalAndEqualTo(decimal.Parse(".123"), .123);
            AssertIsDecimalAndEqualTo(decimal.Parse("123.456"), 123.456);
            AssertIsDecimalAndEqualTo(decimal.Parse("-123.456"), -123.456);

            // #1586
            // Test restructure to keep assertion count correct (prevent uncaught test exception)
            //decimal d1 = 0;
            //CommonHelper.Safe(() => d1 = decimal.Parse("+123.456"));
            //AssertIsDecimalAndEqualTo(d1, 123.456);
            //decimal d2 = 0;
            //CommonHelper.Safe(() => d2 = decimal.Parse("  +123.456  "));
            //AssertIsDecimalAndEqualTo(d2, 123.456);

            Assert.Throws<FormatException>(() => decimal.Parse("A123"));
            Assert.Throws<FormatException>(() => decimal.Parse("12.34.56"));
            Assert.AreEqual(12d.ToString(), decimal.Parse("12.").ToString());
            //Assert.Throws<OverflowException>(() => decimal.Parse("999999999999999999999999999999"));
        }

        [Test]
        public void TryParseWorks_SPI_1586()
        {
            decimal d;
            bool b;
            b = decimal.TryParse("123", out d);
            Assert.True(b);
            AssertIsDecimalAndEqualTo(d, 123);

            b = decimal.TryParse("0.123", out d);
            Assert.True(b);
            AssertIsDecimalAndEqualTo(d, .123);

            b = decimal.TryParse(".123", out d);
            Assert.True(b);
            AssertIsDecimalAndEqualTo(d, .123);

            b = decimal.TryParse("123.456", out d);
            Assert.True(b);
            AssertIsDecimalAndEqualTo(d, 123.456);

            b = decimal.TryParse("-123.456", out d);
            Assert.True(b);
            AssertIsDecimalAndEqualTo(d, -123.456);

            // #1586
            //b = decimal.TryParse("+123.456", out d);
            //Assert.True(b);
            //AssertIsDecimalAndEqualTo(d, 123.456);

            //b = decimal.TryParse("  +123.456  ", out d);
            //Assert.True(b);
            //AssertIsDecimalAndEqualTo(d, 123.456);

            b = decimal.TryParse("A123", out d);
            Assert.False(b);
            AssertIsDecimalAndEqualTo(d, 0);

            b = decimal.TryParse("12.34.56", out d);
            Assert.False(b);
            AssertIsDecimalAndEqualTo(d, 0);

            b = decimal.TryParse("12.", out d);
            Assert.True(b);
            AssertIsDecimalAndEqualTo(d, 12);

            //b = decimal.TryParse("999999999999999999999999999999", out d);
            //Assert.False(b);
            //AssertIsDecimalAndEqualTo(d, 0);
        }

        [Test]
        public void TruncateWorks()
        {
            AssertIsDecimalAndEqualTo(decimal.Truncate(3.9m), 3);
            AssertIsDecimalAndEqualTo(decimal.Truncate(-3.9m), -3);
            AssertIsDecimalAndEqualTo(decimal.Truncate(3m), 3);
        }

        [Test]
        public void SubtractWorks()
        {
            AssertIsDecimalAndEqualTo(decimal.Subtract(7m, 3m), 4);
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(((decimal)0).GetHashCode(), ((decimal)0).GetHashCode());
            Assert.AreEqual(((decimal)1).GetHashCode(), ((decimal)1).GetHashCode());
            Assert.AreNotEqual(((decimal)1).GetHashCode(), ((decimal)0).GetHashCode());
            Assert.AreNotEqual(((decimal)0.5).GetHashCode(), ((decimal)0).GetHashCode());
        }

        [Test]
        public void ObjectEqualsWorks()
        {
            Assert.True(((decimal)0).Equals((object)(decimal)0));
            Assert.False(((decimal)1).Equals((object)(decimal)0));
            Assert.False(((decimal)0).Equals((object)(decimal)0.5));
            Assert.True(((decimal)1).Equals((object)(decimal)1));
            Assert.False(((decimal)0).Equals((object)Decimal.MaxValue));
        }

        [Test]
        public void DecimalEqualsWorks()
        {
            Assert.True(((decimal)0).Equals((decimal)0));
            Assert.False(((decimal)1).Equals((decimal)0));
            Assert.False(((decimal)0).Equals((decimal)0.5));
            Assert.True(((decimal)1).Equals((decimal)1));
            Assert.False(((decimal)0).Equals(Decimal.MaxValue));
        }

        [Test]
        public void IEquatableEqualsWorks()
        {
            Assert.True(((IEquatable<decimal>)((decimal)0)).Equals((decimal)0));
            Assert.False(((IEquatable<decimal>)((decimal)1)).Equals((decimal)0));
            Assert.False(((IEquatable<decimal>)((decimal)0)).Equals((decimal)0.5));
            Assert.True(((IEquatable<decimal>)((decimal)1)).Equals((decimal)1));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(((decimal)0).CompareTo((decimal)0) == 0);
            Assert.True(((decimal)1).CompareTo((decimal)0) > 0);
            Assert.True(((decimal)0).CompareTo((decimal)0.5) < 0);
            Assert.True(((decimal)1).CompareTo((decimal)1) == 0);
        }

        [Test]
        public void StaticCompareWorks()
        {
            Assert.True(decimal.Compare(0m, 0m) == 0);
            Assert.True(decimal.Compare(1m, 0m) > 0);
            Assert.True(decimal.Compare(0m, 0.5m) < 0);
            Assert.True(decimal.Compare(1m, 1m) == 0);
        }

        [Test]
        public void IComparableCompareToWorks()
        {
            Assert.True(((IComparable<decimal>)((decimal)0)).CompareTo((decimal)0) == 0);
            Assert.True(((IComparable<decimal>)((decimal)1)).CompareTo((decimal)0) > 0);
            Assert.True(((IComparable<decimal>)((decimal)0)).CompareTo((decimal)0.5) < 0);
            Assert.True(((IComparable<decimal>)((decimal)1)).CompareTo((decimal)1) == 0);
        }

        [Test]
        public void FullCoalesceWorks()
        {
            var a = 1m;
            var b = a == 1m ? 2m : 3m;

            AssertIsDecimalAndEqualTo(b, 2);
        }

        [Test]
        public void ShortCoalesceWorks()
        {
            object c = 1m;
            var d = c ?? 2m;

            AssertIsDecimalAndEqualTo(d, 1);

            decimal? e = 3;
            var f = e ?? 0;

            AssertIsDecimalAndEqualTo(f, 3);
        }

        [Test]
        public void ImplementationTests_SPI_1588_1590_1650()
        {
            // #1590 All the tests below use decimal.ToString() that uses Template Bridge.Int.format({this}, 'G') with significant digits 15 instead of 29

            Assert.AreEqual("0", ((new Decimal(-1)) + 1).CompareTo(0).ToString(), "(new Decimal(-1)).add(1).compare(0).ToString() == \"0\" FAILED");
            Assert.AreEqual("0", (decimal.Round(new Decimal(0), 8, MidpointRounding.ToEven)).ToString(), "(Decimal.round(new Decimal(0), 8, Decimal.MidpointRounding.ToEven)).ToString() == \"0\" FAILED");
            Assert.AreEqual("8", ((decimal.Parse("8")) - decimal.Parse("0")).ToString(), "(new Decimal(\"8\").sub(\"0\").ToString() == \"8\" FAILED");
            // #1588
            Assert.AreEqual("0", (decimal.Parse("-0")).ToString(), "(new Decimal(\"-0\")).ToString() == \"0\" FAILED");

            Assert.AreEqual("0", ((decimal.Parse("0.3")) - (decimal.Parse("0.1")) * 3).ToString(), "(new Decimal(\"0.3\")).sub((new Decimal(\"0.1\")).mul(3)).toString() == \"0\" FAILED");
            Assert.AreEqual("10000000000000000000000000000", ((decimal.Parse("9999999999999999999999999999")) + decimal.Parse("1")).ToString(), "(new Decimal(\"9999999999999999999999999999\")).add(\"1\").toString() == \"10000000000000000000000000000\" FAILED");
            Assert.AreEqual("-10000000000000000000000000000", (((decimal.Parse("-9999999999999999999999999999")) - decimal.Parse("1"))).ToString(), "(new Decimal(\"-9999999999999999999999999999\")).sub(\"1\").toString() == \"-10000000000000000000000000000\" FAILED");
            Assert.AreEqual("2", (decimal.Round(decimal.Parse("1.5"), 0, MidpointRounding.ToEven)).ToString(), "(Decimal.round(new Decimal(\"1.5\"), 0, Decimal.MidpointRounding.ToEven)).toString() == \"2\" FAILED");
            Assert.AreEqual("2", (decimal.Round(decimal.Parse("2.5"), 0, MidpointRounding.ToEven)).ToString(), "(Decimal.round(new Decimal(\"2.5\"), 0, Decimal.MidpointRounding.ToEven)).toString() == \"2\" FAILED");
            Assert.AreEqual("3", (decimal.Round(decimal.Parse("2.5"), 0, MidpointRounding.AwayFromZero)).ToString(), "(Decimal.round(new Decimal(\"2.5\"), 0, Decimal.MidpointRounding.AwayFromZero)).toString() == \"3\" FAILED");
            Assert.AreEqual("-3", (decimal.Round(decimal.Parse("-2.5"), 0, MidpointRounding.AwayFromZero)).ToString(), "(Decimal.round(new Decimal(\"2.5\"), 0, Decimal.MidpointRounding.AwayFromZero)).toString() == \"-3\" FAILED");
            Assert.AreEqual("-2", (decimal.Round(decimal.Parse("-2.5"), 0, MidpointRounding.ToEven)).ToString(), "(Decimal.round(new Decimal(\"2.5\"), 0, Decimal.MidpointRounding.ToEven)).toString() == \"-2\" FAILED");
            Assert.AreEqual("4", (decimal.Round(decimal.Parse("3.5"), 0, MidpointRounding.ToEven)).ToString(), "(Decimal.round(new Decimal(\"3.5\"), 0, Decimal.MidpointRounding.ToEven)).toString() == \"4\" FAILED");
            Assert.AreEqual("-4", (decimal.Round(decimal.Parse("-3.5"), 0, MidpointRounding.ToEven)).ToString(), "(Decimal.round(new Decimal(\"-3.5\"), 0, Decimal.MidpointRounding.ToEven)).toString() == \"-4\" FAILED");
            Assert.AreEqual("0.000000000000000000000000002", (decimal.Round(decimal.Parse("0.0000000000000000000000000015"), 27, MidpointRounding.ToEven)).ToString(), "(Decimal.round(new Decimal(\"0.0000000000000000000000000015\"), 27, Decimal.MidpointRounding.ToEven)).toString() == \"0.000000000000000000000000002\" FAILED");
            Assert.AreEqual("0.000000000000000000002", (decimal.Round(decimal.Parse("0.0000000000000000000015"), 21, MidpointRounding.ToEven)).ToString(), "(Decimal.round(new Decimal(\"0.0000000000000000000015\"), 21, Decimal.MidpointRounding.ToEven)).toString() == \"0.000000000000000000002\" FAILED");
            Assert.AreEqual("4176.1574388808460777044", ((decimal.Parse("4176.15752861656")) - decimal.Parse("0.0000897357139222956")).ToString(), "(new Decimal(\"4176.15752861656\")).sub(\"0.0000897357139222956\").toString() == \"4176.1574388808460777044\" FAILED");
            Assert.AreEqual("0.0000000000000000000000893034", ((decimal.Parse("0.00000008487069606076")) / decimal.Parse("950363559159620")).ToString(), "(new Decimal(\"0.00000008487069606076\")).div(\"950363559159620\").toString() == \"0.0000000000000000000000893034\" FAILED");
            Assert.AreEqual("0.0446138050763932217", ((decimal.Parse("0.0000360056907106217")) + decimal.Parse("0.0445777993856826")).ToString(), "(new Decimal(\"0.0000360056907106217\")).add(\"0.0445777993856826\").toString() == \"0.0446138050763932217\" FAILED");
            Assert.AreEqual("0.3811764806776453983061876207", ((decimal.Parse("264385997906.507")) / decimal.Parse("693605223062.264")).ToString(), "(new Decimal(\"264385997906.507\")).div(\"693605223062.264\").toString() == \"0.3811764806776453983061876207\" FAILED");
            Assert.AreEqual("59.80408060158849245782", ((decimal.Parse("0.00000000734869245782")) + decimal.Parse("59.8040805942398")).ToString(), "(new Decimal(\"0.00000000734869245782\")).add(\"59.8040805942398\").toString() == \"59.80408060158849245782\" FAILED");
            Assert.AreEqual("81663498.972849838663929672", ((decimal.Parse("81663498.9723859")) + decimal.Parse("0.000463938663929672")).ToString(), "(new Decimal(\"81663498.9723859\")).add(\"0.000463938663929672\").toString() == \"81663498.972849838663929672\" FAILED");
            Assert.AreEqual("0.00775515796977892822", ((decimal.Parse("0.00775515796977801")) + decimal.Parse("0.00000000000000091822")).ToString(), "(new Decimal(\"0.00775515796977801\")).add(\"0.00000000000000091822\").toString() == \"0.00775515796977892822\" FAILED");
            Assert.AreEqual("2.1064457175212998398851037786", ((decimal.Parse("0.00000016207366118304")) / decimal.Parse("0.00000007694176965251")).ToString(), "(new Decimal(\"0.00000016207366118304\")).div(\"0.00000007694176965251\").toString() == \"2.1064457175212998398851037786\" FAILED");
            Assert.AreEqual("0.0000000000002340974167914459", ((decimal.Parse("0.00000008179731703447")) / decimal.Parse("349415.71827485")).ToString(), "(new Decimal(\"0.00000008179731703447\")).div(\"349415.71827485\").toString() == \"0.0000000000002340974167914459\" FAILED");
            Assert.AreEqual("0.0002294787101020031897957214", ((decimal.Parse("0.0059732997352133")) / decimal.Parse("26.029864524505")).ToString(), "(new Decimal(\"0.0059732997352133\")).div(\"26.029864524505\").toString() == \"0.0002294787101020031897957214\" FAILED");
            Assert.AreEqual("418.23899073391138947972", ((decimal.Parse("0.00000006466138947972")) + decimal.Parse("418.23899066925")).ToString(), "(new Decimal(\"0.00000006466138947972\")).add(\"418.23899066925\").toString() == \"418.23899073391138947972\" FAILED");
            Assert.AreEqual("0.0131911163190212695095445568", ((decimal.Parse("0.00000034492730644761")) * decimal.Parse("38243.1778303549")).ToString(), "(new Decimal(\"0.00000034492730644761\")).mul(\"38243.1778303549\").toString() == \"0.0131911163190212695095445568\" FAILED");
            Assert.AreEqual("9114466.43914248870254245", ((decimal.Parse("9114466.44883345")) - decimal.Parse("0.00969096129745755")).ToString(), "(new Decimal(\"9114466.44883345\")).sub(\"0.00969096129745755\").toString() == \"9114466.43914248870254245\" FAILED");
            Assert.AreEqual("0.1084411276877017282935587367", ((decimal.Parse("86700.1936243382")) / decimal.Parse("799513.943400008")).ToString(), "(new Decimal(\"86700.1936243382\")).div(\"799513.943400008\").toString() == \"0.1084411276877017282935587367\" FAILED");
            Assert.AreEqual("7026.76928435766970903", ((decimal.Parse("7026.76950349788")) - decimal.Parse("0.00021914021029097")).ToString(), "(new Decimal(\"7026.76950349788\")).sub(\"0.00021914021029097\").toString() == \"7026.76928435766970903\" FAILED");
            Assert.AreEqual("0.096260924858888151563666271", ((decimal.Parse("0.00000857409563314826")) / decimal.Parse("0.0000890714030196291")).ToString(), "(new Decimal(\"0.00000857409563314826\")).div(\"0.0000890714030196291\").toString() == \"0.096260924858888151563666271\" FAILED");
            Assert.AreEqual("0.0008115914662837657985794708", ((decimal.Parse("514.340747387307")) / decimal.Parse("633743.414950438")).ToString(), "(new Decimal(\"514.340747387307\")).div(\"633743.414950438\").toString() == \"0.0008115914662837657985794708\" FAILED");
            Assert.AreEqual("3705.2205420798556425449221712", ((decimal.Parse("36636.1514835787")) / decimal.Parse("9.88771142432825")).ToString(), "(new Decimal(\"36636.1514835787\")).div(\"9.88771142432825\").toString() == \"3705.2205420798556425449221712\" FAILED");
            Assert.AreEqual("6218044.0995191186755705386", ((decimal.Parse("0.0000196286755705386")) + decimal.Parse("6218044.09949949")).ToString(), "(new Decimal(\"0.0000196286755705386\")).add(\"6218044.09949949\").toString() == \"6218044.0995191186755705386\" FAILED");
            Assert.AreEqual("5425486298351.5378945951530291", ((decimal.Parse("9271557.35402906")) * decimal.Parse("585175.293770235")).ToString(), "(new Decimal(\"9271557.35402906\")).mul(\"585175.293770235\").toString() == \"5425486298351.5378945951530291\" FAILED");
            Assert.AreEqual("0.2685349089827301535187896581", ((decimal.Parse("0.00000630784588228345")) * decimal.Parse("42571.5710234696")).ToString(), "(new Decimal(\"0.00000630784588228345\")).mul(\"42571.5710234696\").toString() == \"0.2685349089827301535187896581\" FAILED");
            Assert.AreEqual("0.008990286561656895507628185", ((decimal.Parse("79.3662822709262")) / decimal.Parse("8828.00361552648")).ToString(), "(new Decimal(\"79.3662822709262\")).div(\"8828.00361552648\").toString() == \"0.008990286561656895507628185\" FAILED");
            Assert.AreEqual("0.0000016331518727729320183918", ((decimal.Parse("0.000195716225633266")) * decimal.Parse("0.00834448890217789")).ToString(), "(new Decimal(\"0.000195716225633266\")).mul(\"0.00834448890217789\").toString() == \"0.0000016331518727729320183918\" FAILED");
            Assert.AreEqual("2.7085135033764363901309324465", ((decimal.Parse("1806435.33906268")) / decimal.Parse("666947.141600282")).ToString(), "(new Decimal(\"1806435.33906268\")).div(\"666947.141600282\").toString() == \"2.7085135033764363901309324465\" FAILED");
            Assert.AreEqual("0.0000000000252033112738355342", ((decimal.Parse("0.00000000625330349722")) / decimal.Parse("248.114362008923")).ToString(), "(new Decimal(\"0.00000000625330349722\")).div(\"248.114362008923\").toString() == \"0.0000000000252033112738355342\" FAILED");
            Assert.AreEqual("201.42054334961017180748893008", ((decimal.Parse("8526.34712985081")) * decimal.Parse("0.0236233102267717")).ToString(), "(new Decimal(\"8526.34712985081\")).mul(\"0.0236233102267717\").toString() == \"201.42054334961017180748893008\" FAILED");
            Assert.AreEqual("10.754236522481885", ((decimal.Parse("0.859148376090055")) + decimal.Parse("9.89508814639183")).ToString(), "(new Decimal(\"0.859148376090055\")).add(\"9.89508814639183\").toString() == \"10.754236522481885\" FAILED");
            Assert.AreEqual("0.0000000000264204888310194008", ((decimal.Parse("0.0000334460014633117")) * decimal.Parse("0.00000078994461744556")).ToString(), "(new Decimal(\"0.0000334460014633117\")).mul(\"0.00000078994461744556\").toString() == \"0.0000000000264204888310194008\" FAILED");
            Assert.AreEqual("0.0000000001107996313797422688", ((decimal.Parse("0.00000007144519755218")) * decimal.Parse("0.00155083385834044")).ToString(), "(new Decimal(\"0.00000007144519755218\")).mul(\"0.00155083385834044\").toString() == \"0.0000000001107996313797422688\" FAILED");
            Assert.AreEqual("25826.170172550776692", ((decimal.Parse("0.911257319576692")) + decimal.Parse("25825.2589152312")).ToString(), "(new Decimal(\"0.911257319576692\")).add(\"25825.2589152312\").toString() == \"25826.170172550776692\" FAILED");
            Assert.AreEqual("0.5746307910946065180997849971", ((decimal.Parse("0.00000942942031166955")) * decimal.Parse("60940.2033318487")).ToString(), "(new Decimal(\"0.00000942942031166955\")).mul(\"60940.2033318487\").toString() == \"0.5746307910946065180997849971\" FAILED");
            Assert.AreEqual("-7131030.08640726074029256", ((decimal.Parse("0.00613527925970744")) - decimal.Parse("7131030.09254254")).ToString(), "(new Decimal(\"0.00613527925970744\")).sub(\"7131030.09254254\").toString() == \"-7131030.08640726074029256\" FAILED");
            Assert.AreEqual("135954446978.90433258950744003", ((decimal.Parse("19833.5587139398")) * decimal.Parse("6854768.17044186")).ToString(), "(new Decimal(\"19833.5587139398\")).mul(\"6854768.17044186\").toString() == \"135954446978.90433258950744003\" FAILED");
            // #1650
            // Assert.AreEqual("0.0000000000000184016013412280", ((decimal.Parse("0.00000070385779892274")) * decimal.Parse("0.00000002614391908336")).ToString(), "(new Decimal(\"0.00000070385779892274\")).mul(\"0.00000002614391908336\").toString() == \"0.0000000000000184016013412280\" FAILED");

            Assert.AreEqual("0.0967324902802857563", ((decimal.Parse("0.0966366946681574")) + decimal.Parse("0.0000957956121283563")).ToString(), "(new Decimal(\"0.0966366946681574\")).add(\"0.0000957956121283563\").toString() == \"0.0967324902802857563\" FAILED");
            Assert.AreEqual("3.4858202900689973161525454314", ((decimal.Parse("0.0000390598294507059")) * decimal.Parse("89243.1006251104")).ToString(), "(new Decimal(\"0.0000390598294507059\")).mul(\"89243.1006251104\").toString() == \"3.4858202900689973161525454314\" FAILED");
            Assert.AreEqual("0.2996117010710819", ((decimal.Parse("0.343008653886155")) - decimal.Parse("0.0433969528150731")).ToString(), "(new Decimal(\"0.343008653886155\")).sub(\"0.0433969528150731\").toString() == \"0.2996117010710819\" FAILED");
            Assert.AreEqual("1019564526579.2600710122794931", ((decimal.Parse("675939.590519266")) * decimal.Parse("1508366.34054238")).ToString(), "(new Decimal(\"675939.590519266\")).mul(\"1508366.34054238\").toString() == \"1019564526579.2600710122794931\" FAILED");
            Assert.AreEqual("11701304382166.336357593545003", ((decimal.Parse("9346774.15031324")) / decimal.Parse("0.00000079878053292575")).ToString(), "(new Decimal(\"9346774.15031324\")).div(\"0.00000079878053292575\").toString() == \"11701304382166.336357593545003\" FAILED");
            Assert.AreEqual("18.8587275649694", ((decimal.Parse("0.8043270324377")) + decimal.Parse("18.0544005325317")).ToString(), "(new Decimal(\"0.8043270324377\")).add(\"18.0544005325317\").toString() == \"18.8587275649694\" FAILED");
            Assert.AreEqual("0.3614881075703330391274611142", ((decimal.Parse("8283.88977715927")) / decimal.Parse("22916.0782987792")).ToString(), "(new Decimal(\"8283.88977715927\")).div(\"22916.0782987792\").toString() == \"0.3614881075703330391274611142\" FAILED");
            Assert.AreEqual("0.0179138243756634479624427415", ((decimal.Parse("0.0000051464565215383")) * decimal.Parse("3480.80748388581")).ToString(), "(new Decimal(\"0.0000051464565215383\")).mul(\"3480.80748388581\").toString() == \"0.0179138243756634479624427415\" FAILED");
            Assert.AreEqual("3141.0458269720196", ((decimal.Parse("3232.22058975707")) - decimal.Parse("91.1747627850504")).ToString(), "(new Decimal(\"3232.22058975707\")).sub(\"91.1747627850504\").toString() == \"3141.0458269720196\" FAILED");
            Assert.AreEqual("0.049293336888446162", ((decimal.Parse("0.0490677212593461")) + decimal.Parse("0.000225615629100062")).ToString(), "(new Decimal(\"0.0490677212593461\")).add(\"0.000225615629100062\").toString() == \"0.049293336888446162\" FAILED");
            Assert.AreEqual("0.0000002423683290519788850175", ((decimal.Parse("0.802657312156007")) * decimal.Parse("0.00000030195741742009")).ToString(), "(new Decimal(\"0.802657312156007\")).mul(\"0.00000030195741742009\").toString() == \"0.0000002423683290519788850175\" FAILED");
            Assert.AreEqual("0.2919303207154997", ((decimal.Parse("0.205025212003396")) + decimal.Parse("0.0869051087121037")).ToString(), "(new Decimal(\"0.205025212003396\")).add(\"0.0869051087121037\").toString() == \"0.2919303207154997\" FAILED");
            Assert.AreEqual("-2406054.4941042150782588707", ((decimal.Parse("0.0000560349217411293")) - decimal.Parse("2406054.49416025")).ToString(), "(new Decimal(\"0.0000560349217411293\")).sub(\"2406054.49416025\").toString() == \"-2406054.4941042150782588707\" FAILED");
            Assert.AreEqual("-5980723.48834614900984", ((decimal.Parse("5.51880703099016")) - decimal.Parse("5980729.00715318")).ToString(), "(new Decimal(\"5.51880703099016\")).sub(\"5980729.00715318\").toString() == \"-5980723.48834614900984\" FAILED");
            Assert.AreEqual("35.122946130589056903", ((decimal.Parse("0.000517838589156903")) + decimal.Parse("35.1224282919999")).ToString(), "(new Decimal(\"0.000517838589156903\")).add(\"35.1224282919999\").toString() == \"35.122946130589056903\" FAILED");
            Assert.AreEqual("1.0616395296301390956592254412", ((decimal.Parse("1.59909562747883")) / decimal.Parse("1.50625102292106")).ToString(), "(new Decimal(\"1.59909562747883\")).div(\"1.50625102292106\").toString() == \"1.0616395296301390956592254412\" FAILED");
            Assert.AreEqual("0.000000042829703949835811464", ((decimal.Parse("0.0037773409643105")) / decimal.Parse("88194.4215335857")).ToString(), "(new Decimal(\"0.0037773409643105\")).div(\"88194.4215335857\").toString() == \"0.000000042829703949835811464\" FAILED");
            Assert.AreEqual("0.4558196858208716574150445539", ((decimal.Parse("0.0000338279696804602")) * decimal.Parse("13474.6391854597")).ToString(), "(new Decimal(\"0.0000338279696804602\")).mul(\"13474.6391854597\").toString() == \"0.4558196858208716574150445539\" FAILED");
            Assert.AreEqual("10427310854.650511570542647536", ((decimal.Parse("929163.589109277")) / decimal.Parse("0.0000891086495896376")).ToString(), "(new Decimal(\"929163.589109277\")).div(\"0.0000891086495896376\").toString() == \"10427310854.650511570542647536\" FAILED");
            Assert.AreEqual("0.00007532895142320958", ((decimal.Parse("0.0000743901701990469")) + decimal.Parse("0.00000093878122416268")).ToString(), "(new Decimal(\"0.0000743901701990469\")).add(\"0.00000093878122416268\").toString() == \"0.00007532895142320958\" FAILED");
            Assert.AreEqual("0.0264909276176229880949718672", ((decimal.Parse("0.00000944754593514258")) * decimal.Parse("2804.00093309768")).ToString(), "(new Decimal(\"0.00000944754593514258\")).mul(\"2804.00093309768\").toString() == \"0.0264909276176229880949718672\" FAILED");
            Assert.AreEqual("6656977.0298766358644049502", ((decimal.Parse("0.0000534158644049502")) + decimal.Parse("6656977.02982322")).ToString(), "(new Decimal(\"0.0000534158644049502\")).add(\"6656977.02982322\").toString() == \"6656977.0298766358644049502\" FAILED");
            Assert.AreEqual("45.06192539196946555197", ((decimal.Parse("45.0619251211462")) + decimal.Parse("0.00000027082326555197")).ToString(), "(new Decimal(\"45.0619251211462\")).add(\"0.00000027082326555197\").toString() == \"45.06192539196946555197\" FAILED");
            Assert.AreEqual("0.7532491528292065411818236803", ((decimal.Parse("0.0192431670703195")) * decimal.Parse("39.1437204736954")).ToString(), "(new Decimal(\"0.0192431670703195\")).mul(\"39.1437204736954\").toString() == \"0.7532491528292065411818236803\" FAILED");
            Assert.AreEqual("32841.42265702106787944802", ((decimal.Parse("32841.4226569428")) + decimal.Parse("0.00000007826787944802")).ToString(), "(new Decimal(\"32841.4226569428\")).add(\"0.00000007826787944802\").toString() == \"32841.42265702106787944802\" FAILED");
            Assert.AreEqual("-0.533546652893328", ((decimal.Parse("0.586064839077212")) - decimal.Parse("1.11961149197054")).ToString(), "(new Decimal(\"0.586064839077212\")).sub(\"1.11961149197054\").toString() == \"-0.533546652893328\" FAILED");
            Assert.AreEqual("0.0152641533045431917355310935", ((decimal.Parse("0.0829612452457479")) / decimal.Parse("5.43503747574754")).ToString(), "(new Decimal(\"0.0829612452457479\")).div(\"5.43503747574754\").toString() == \"0.0152641533045431917355310935\" FAILED");
            Assert.AreEqual("2.07943625828976430743030201", ((decimal.Parse("20551.2384514097")) * decimal.Parse("0.0001011830145033")).ToString(), "(new Decimal(\"20551.2384514097\")).mul(\"0.0001011830145033\").toString() == \"2.07943625828976430743030201\" FAILED");
            Assert.AreEqual("0.00200242491956568541", ((decimal.Parse("0.00000000928487284541")) + decimal.Parse("0.00200241563469284")).ToString(), "(new Decimal(\"0.00000000928487284541\")).add(\"0.00200241563469284\").toString() == \"0.00200242491956568541\" FAILED");
            Assert.AreEqual("27474.82141819801736601648", ((decimal.Parse("27474.8214182792")) - decimal.Parse("0.00000008118263398352")).ToString(), "(new Decimal(\"27474.8214182792\")).sub(\"0.00000008118263398352\").toString() == \"27474.82141819801736601648\" FAILED");
            Assert.AreEqual("19505128.063929281919635586038", ((decimal.Parse("6414.16630540703")) * decimal.Parse("3040.9451727946")).ToString(), "(new Decimal(\"6414.16630540703\")).mul(\"3040.9451727946\").toString() == \"19505128.063929281919635586038\" FAILED");
            // #1650
            //Assert.AreEqual("0.0000000000000211764764198660", ((decimal.Parse("0.00000000801082840562")) * decimal.Parse("0.00000264348146628751")).ToString(), "(new Decimal(\"0.00000000801082840562\")).mul(\"0.00000264348146628751\").toString() == \"0.0000000000000211764764198660\" FAILED");

            Assert.AreEqual("29310.7074822921281587436", ((decimal.Parse("29310.7074821883")) + decimal.Parse("0.0000001038281587436")).ToString(), "(new Decimal(\"29310.7074821883\")).add(\"0.0000001038281587436\").toString() == \"29310.7074822921281587436\" FAILED");
            Assert.AreEqual("617351.64866589589161", ((decimal.Parse("1.61116872989161")) + decimal.Parse("617350.037497166")).ToString(), "(new Decimal(\"1.61116872989161\")).add(\"617350.037497166\").toString() == \"617351.64866589589161\" FAILED");
            Assert.AreEqual("337233.524335051926147", ((decimal.Parse("337234.288611093")) - decimal.Parse("0.764276041073853")).ToString(), "(new Decimal(\"337234.288611093\")).sub(\"0.764276041073853\").toString() == \"337233.524335051926147\" FAILED");
            Assert.AreEqual("7.6904022918582991385960050287", ((decimal.Parse("32138.4941377391")) / decimal.Parse("4179.03939456634")).ToString(), "(new Decimal(\"32138.4941377391\")).div(\"4179.03939456634\").toString() == \"7.6904022918582991385960050287\" FAILED");
            Assert.AreEqual("0.0047544230501718142812280295", ((decimal.Parse("0.00000007299932379881")) * decimal.Parse("65129.6861773029")).ToString(), "(new Decimal(\"0.00000007299932379881\")).mul(\"65129.6861773029\").toString() == \"0.0047544230501718142812280295\" FAILED");
            Assert.AreEqual("177.17069194538229090005225569", ((decimal.Parse("61.8418688242519")) * decimal.Parse("2.86489873792273")).ToString(), "(new Decimal(\"61.8418688242519\")).mul(\"2.86489873792273\").toString() == \"177.17069194538229090005225569\" FAILED");
            Assert.AreEqual("-0.00090633373724312275", ((decimal.Parse("0.00000015291550483225")) - decimal.Parse("0.000906486652747955")).ToString(), "(new Decimal(\"0.00000015291550483225\")).sub(\"0.000906486652747955\").toString() == \"-0.00090633373724312275\" FAILED");
            Assert.AreEqual("210814147.39980929140353613261", ((decimal.Parse("201009.576768153")) / decimal.Parse("0.0009534918754145")).ToString(), "(new Decimal(\"201009.576768153\")).div(\"0.0009534918754145\").toString() == \"210814147.39980929140353613261\" FAILED");
            Assert.AreEqual("65.305649646129420352210897086", ((decimal.Parse("61261.8303211694")) / decimal.Parse("938.078568288162")).ToString(), "(new Decimal(\"61261.8303211694\")).div(\"938.078568288162\").toString() == \"65.305649646129420352210897086\" FAILED");
            Assert.AreEqual("0.0000567043665774743633592246", ((decimal.Parse("0.000743901346690907")) * decimal.Parse("0.0762256538850375")).ToString(), "(new Decimal(\"0.000743901346690907\")).mul(\"0.0762256538850375\").toString() == \"0.0000567043665774743633592246\" FAILED");
            Assert.AreEqual("-0.05230421037247136292", ((decimal.Parse("0.00000023104058123708")) - decimal.Parse("0.0523044414130526")).ToString(), "(new Decimal(\"0.00000023104058123708\")).sub(\"0.0523044414130526\").toString() == \"-0.05230421037247136292\" FAILED");
            Assert.AreEqual("0.00017292070654543156", ((decimal.Parse("0.000172902369020927")) + decimal.Parse("0.00000001833752450456")).ToString(), "(new Decimal(\"0.000172902369020927\")).add(\"0.00000001833752450456\").toString() == \"0.00017292070654543156\" FAILED");
            Assert.AreEqual("143190227.86340201590179660913", ((decimal.Parse("3255426.24725747")) * decimal.Parse("43.9850934985956")).ToString(), "(new Decimal(\"3255426.24725747\")).mul(\"43.9850934985956\").toString() == \"143190227.86340201590179660913\" FAILED");
            Assert.AreEqual("0.1676963823218234630227555937", ((decimal.Parse("21.2078276654742")) * decimal.Parse("0.00790728710960005")).ToString(), "(new Decimal(\"21.2078276654742\")).mul(\"0.00790728710960005\").toString() == \"0.1676963823218234630227555937\" FAILED");
            Assert.AreEqual("60489172470134.035656681147318", ((decimal.Parse("4188316.9832585")) / decimal.Parse("0.00000006924077173194")).ToString(), "(new Decimal(\"4188316.9832585\")).div(\"0.00000006924077173194\").toString() == \"60489172470134.035656681147318\" FAILED");
            Assert.AreEqual("0.0000000000318298804579463009", ((decimal.Parse("0.00000895273411132057")) * decimal.Parse("0.00000355532511768645")).ToString(), "(new Decimal(\"0.00000895273411132057\")).mul(\"0.00000355532511768645\").toString() == \"0.0000000000318298804579463009\" FAILED");
            Assert.AreEqual("0.0000089928800565775915465556", ((decimal.Parse("0.00000007554147973449")) / decimal.Parse("0.00840014314204461")).ToString(), "(new Decimal(\"0.00000007554147973449\")).div(\"0.00840014314204461\").toString() == \"0.0000089928800565775915465556\" FAILED");
            // #1650
            //Assert.AreEqual("0.8703972221908718709658421930", ((decimal.Parse("1970.18939162148")) * decimal.Parse("0.000441783528980698")).ToString(), "(new Decimal(\"1970.18939162148\")).mul(\"0.000441783528980698\").toString() == \"0.8703972221908718709658421930\" FAILED");

            Assert.AreEqual("0.0004450282480720230655413695", ((decimal.Parse("85093.5901911434")) * decimal.Parse("0.00000000522986804379")).ToString(), "(new Decimal(\"85093.5901911434\")).mul(\"0.00000000522986804379\").toString() == \"0.0004450282480720230655413695\" FAILED");
            Assert.AreEqual("0.0000029398859004321386304627", ((decimal.Parse("0.00000063867933891652")) / decimal.Parse("0.21724630157335")).ToString(), "(new Decimal(\"0.00000063867933891652\")).div(\"0.21724630157335\").toString() == \"0.0000029398859004321386304627\" FAILED");
            Assert.AreEqual("27880476326.169787243758340455", ((decimal.Parse("1174.96172020909")) / decimal.Parse("0.00000004214281371894")).ToString(), "(new Decimal(\"1174.96172020909\")).div(\"0.00000004214281371894\").toString() == \"27880476326.169787243758340455\" FAILED");
            Assert.AreEqual("3.943883571766263181", ((decimal.Parse("0.000293723326313181")) + decimal.Parse("3.94358984843995")).ToString(), "(new Decimal(\"0.000293723326313181\")).add(\"3.94358984843995\").toString() == \"3.943883571766263181\" FAILED");
            Assert.AreEqual("0.0600993529068002334144135817", ((decimal.Parse("8807.4719481205")) * decimal.Parse("0.00000682367803846657")).ToString(), "(new Decimal(\"8807.4719481205\")).mul(\"0.00000682367803846657\").toString() == \"0.0600993529068002334144135817\" FAILED");
            Assert.AreEqual("0.0000000000431097888386651556", ((decimal.Parse("0.00000003024844593846")) / decimal.Parse("701.660730737103")).ToString(), "(new Decimal(\"0.00000003024844593846\")).div(\"701.660730737103\").toString() == \"0.0000000000431097888386651556\" FAILED");
            Assert.AreEqual("399060.217697562714717", ((decimal.Parse("399059.695377508")) + decimal.Parse("0.522320054714717")).ToString(), "(new Decimal(\"399059.695377508\")).add(\"0.522320054714717\").toString() == \"399060.217697562714717\" FAILED");
            Assert.AreEqual("0.0012047312567642078041930781", ((decimal.Parse("0.0000555624811237503")) / decimal.Parse("0.0461202287329921")).ToString(), "(new Decimal(\"0.0000555624811237503\")).div(\"0.0461202287329921\").toString() == \"0.0012047312567642078041930781\" FAILED");
            Assert.AreEqual("0.00079532968335544253", ((decimal.Parse("0.000795415484716844")) - decimal.Parse("0.00000008580136140147")).ToString(), "(new Decimal(\"0.000795415484716844\")).sub(\"0.00000008580136140147\").toString() == \"0.00079532968335544253\" FAILED");
            Assert.AreEqual("0.0000000000000031232274783683", ((decimal.Parse("0.0000000384458527148")) * decimal.Parse("0.00000008123704529425")).ToString(), "(new Decimal(\"0.0000000384458527148\")).mul(\"0.00000008123704529425\").toString() == \"0.0000000000000031232274783683\" FAILED");
            Assert.AreEqual("7.09650010408205501", ((decimal.Parse("7.10522364224551")) - decimal.Parse("0.00872353816345499")).ToString(), "(new Decimal(\"7.10522364224551\")).sub(\"0.00872353816345499\").toString() == \"7.09650010408205501\" FAILED");
            Assert.AreEqual("0.0007994485260663810953884227", ((decimal.Parse("0.00000104549135595816")) * decimal.Parse("764.66297067919")).ToString(), "(new Decimal(\"0.00000104549135595816\")).mul(\"764.66297067919\").toString() == \"0.0007994485260663810953884227\" FAILED");
            Assert.AreEqual("0.00005958359417346475", ((decimal.Parse("0.00005906747824469")) + decimal.Parse("0.00000051611592877475")).ToString(), "(new Decimal(\"0.00005906747824469\")).add(\"0.00000051611592877475\").toString() == \"0.00005958359417346475\" FAILED");
            Assert.AreEqual("22.984133602578256", ((decimal.Parse("23.9156692400182")) - decimal.Parse("0.931535637439944")).ToString(), "(new Decimal(\"23.9156692400182\")).sub(\"0.931535637439944\").toString() == \"22.984133602578256\" FAILED");
            Assert.AreEqual("9044.376757482239651", ((decimal.Parse("0.847812742389651")) + decimal.Parse("9043.52894473985")).ToString(), "(new Decimal(\"0.847812742389651\")).add(\"9043.52894473985\").toString() == \"9044.376757482239651\" FAILED");
            Assert.AreEqual("6.0742324680822732941708751327", ((decimal.Parse("0.00575696487713464")) / decimal.Parse("0.000947768283052262")).ToString(), "(new Decimal(\"0.00575696487713464\")).div(\"0.000947768283052262\").toString() == \"6.0742324680822732941708751327\" FAILED");
            Assert.AreEqual("6530598.5049727231538", ((decimal.Parse("1.5620848031538")) + decimal.Parse("6530596.94288792")).ToString(), "(new Decimal(\"1.5620848031538\")).add(\"6530596.94288792\").toString() == \"6530598.5049727231538\" FAILED");
            Assert.AreEqual("0.83028435898026679", ((decimal.Parse("0.828937773047452")) + decimal.Parse("0.00134658593281479")).ToString(), "(new Decimal(\"0.828937773047452\")).add(\"0.00134658593281479\").toString() == \"0.83028435898026679\" FAILED");
            Assert.AreEqual("325484.521350383343706", ((decimal.Parse("0.376231768343706")) + decimal.Parse("325484.145118615")).ToString(), "(new Decimal(\"0.376231768343706\")).add(\"325484.145118615\").toString() == \"325484.521350383343706\" FAILED");
            Assert.AreEqual("0.0000000000777304608453940168", ((decimal.Parse("0.00000590405144537988")) / decimal.Parse("75955.4411638321")).ToString(), "(new Decimal(\"0.00000590405144537988\")).div(\"75955.4411638321\").toString() == \"0.0000000000777304608453940168\" FAILED");
            Assert.AreEqual("12434660348.106831437568180728", ((decimal.Parse("3653.47703623282")) * decimal.Parse("3403514.0291804")).ToString(), "(new Decimal(\"3653.47703623282\")).mul(\"3403514.0291804\").toString() == \"12434660348.106831437568180728\" FAILED");
            Assert.AreEqual("-9833.95711193194680614", ((decimal.Parse("0.00173078235319386")) - decimal.Parse("9833.9588427143")).ToString(), "(new Decimal(\"0.00173078235319386\")).sub(\"9833.9588427143\").toString() == \"-9833.95711193194680614\" FAILED");
            Assert.AreEqual("0.0015484436906515457496509768", ((decimal.Parse("0.00744602976247949")) / decimal.Parse("4.80871846191991")).ToString(), "(new Decimal(\"0.00744602976247949\")).div(\"4.80871846191991\").toString() == \"0.0015484436906515457496509768\" FAILED");
            Assert.AreEqual("-0.00052546074370409361", ((decimal.Parse("0.00000004717649661339")) - decimal.Parse("0.000525507920200707")).ToString(), "(new Decimal(\"0.00000004717649661339\")).sub(\"0.000525507920200707\").toString() == \"-0.00052546074370409361\" FAILED");
            Assert.AreEqual("0.00714578542212060626", ((decimal.Parse("0.00714523922984732")) + decimal.Parse("0.00000054619227328626")).ToString(), "(new Decimal(\"0.00714523922984732\")).add(\"0.00000054619227328626\").toString() == \"0.00714578542212060626\" FAILED");
            Assert.AreEqual("11896454.256511241955105336836", ((decimal.Parse("0.597390746975965")) / decimal.Parse("0.00000005021586550875")).ToString(), "(new Decimal(\"0.597390746975965\")).div(\"0.00000005021586550875\").toString() == \"11896454.256511241955105336836\" FAILED");
            Assert.AreEqual("364.437275047617911", ((decimal.Parse("363.565448840878")) + decimal.Parse("0.871826206739911")).ToString(), "(new Decimal(\"363.565448840878\")).add(\"0.871826206739911\").toString() == \"364.437275047617911\" FAILED");
            Assert.AreEqual("0.0000147725045250754551933182", ((decimal.Parse("0.932537071375426")) / decimal.Parse("63126.5382110731")).ToString(), "(new Decimal(\"0.932537071375426\")).div(\"63126.5382110731\").toString() == \"0.0000147725045250754551933182\" FAILED");
            Assert.AreEqual("0.4315077590098242678457705989", ((decimal.Parse("0.000505016916666653")) * decimal.Parse("854.442187517156")).ToString(), "(new Decimal(\"0.000505016916666653\")).mul(\"854.442187517156\").toString() == \"0.4315077590098242678457705989\" FAILED");
            Assert.AreEqual("412.7330880174277915666407937", ((decimal.Parse("0.00000767397499069291")) / decimal.Parse("0.00000001859306950057")).ToString(), "(new Decimal(\"0.00000767397499069291\")).div(\"0.00000001859306950057\").toString() == \"412.7330880174277915666407937\" FAILED");
            Assert.AreEqual("4.8954788657062800977983135139", ((decimal.Parse("48.1948680468811")) / decimal.Parse("9.84477093436046")).ToString(), "(new Decimal(\"48.1948680468811\")).div(\"9.84477093436046\").toString() == \"4.8954788657062800977983135139\" FAILED");
            Assert.AreEqual("0.0064424440545718793484521534", ((decimal.Parse("35741.8810649504")) / decimal.Parse("5547876.0486226")).ToString(), "(new Decimal(\"35741.8810649504\")).div(\"5547876.0486226\").toString() == \"0.0064424440545718793484521534\" FAILED");
            Assert.AreEqual("-7840059.26355683558168130721", ((decimal.Parse("0.00000038441831869279")) - decimal.Parse("7840059.26355722")).ToString(), "(new Decimal(\"0.00000038441831869279\")).sub(\"7840059.26355722\").toString() == \"-7840059.26355683558168130721\" FAILED");
            Assert.AreEqual("0.0000010412673718308481481839", ((decimal.Parse("0.58575165205903")) * decimal.Parse("0.00000177766015370267")).ToString(), "(new Decimal(\"0.58575165205903\")).mul(\"0.00000177766015370267\").toString() == \"0.0000010412673718308481481839\" FAILED");
            Assert.AreEqual("0.0231355645607838738592882811", ((decimal.Parse("0.257475164838822")) * decimal.Parse("0.0898555189789532")).ToString(), "(new Decimal(\"0.257475164838822\")).mul(\"0.0898555189789532\").toString() == \"0.0231355645607838738592882811\" FAILED");
            Assert.AreEqual("0.89438686678278632674", ((decimal.Parse("0.894392650525269")) - decimal.Parse("0.00000578374248267326")).ToString(), "(new Decimal(\"0.894392650525269\")).sub(\"0.00000578374248267326\").toString() == \"0.89438686678278632674\" FAILED");
            Assert.AreEqual("337199.86960434358937474129803", ((decimal.Parse("0.866065117468156")) * decimal.Parse("389347.016527013")).ToString(), "(new Decimal(\"0.866065117468156\")).mul(\"389347.016527013\").toString() == \"337199.86960434358937474129803\" FAILED");
            Assert.AreEqual("6945.02700940949904670415", ((decimal.Parse("6945.02700909275")) + decimal.Parse("0.00000031674904670415")).ToString(), "(new Decimal(\"6945.02700909275\")).add(\"0.00000031674904670415\").toString() == \"6945.02700940949904670415\" FAILED");
            Assert.AreEqual("-0.6270357829644514", ((decimal.Parse("0.0701352525829036")) - decimal.Parse("0.697171035547355")).ToString(), "(new Decimal(\"0.0701352525829036\")).sub(\"0.697171035547355\").toString() == \"-0.6270357829644514\" FAILED");
            Assert.AreEqual("4701135155925.6905911960346018", ((decimal.Parse("4111897.07187558")) / decimal.Parse("0.00000087466046720495")).ToString(), "(new Decimal(\"4111897.07187558\")).div(\"0.00000087466046720495\").toString() == \"4701135155925.6905911960346018\" FAILED");
            Assert.AreEqual("1.2422351601221653564432762392", ((decimal.Parse("586.657266871378")) / decimal.Parse("472.25942857203")).ToString(), "(new Decimal(\"586.657266871378\")).div(\"472.25942857203\").toString() == \"1.2422351601221653564432762392\" FAILED");
            Assert.AreEqual("110083.27919112734183960167159", ((decimal.Parse("5794135.34411887")) / decimal.Parse("52.6341092552217")).ToString(), "(new Decimal(\"5794135.34411887\")).div(\"52.6341092552217\").toString() == \"110083.27919112734183960167159\" FAILED");
            Assert.AreEqual("2702544.8136089281527176927398", ((decimal.Parse("0.836109915671921")) / decimal.Parse("0.00000030937874238444")).ToString(), "(new Decimal(\"0.836109915671921\")).div(\"0.00000030937874238444\").toString() == \"2702544.8136089281527176927398\" FAILED");
            Assert.AreEqual("9.5559085980678392684631700448", ((decimal.Parse("0.00855813363034191")) / decimal.Parse("0.000895585547152714")).ToString(), "(new Decimal(\"0.00855813363034191\")).div(\"0.000895585547152714\").toString() == \"9.5559085980678392684631700448\" FAILED");
            Assert.AreEqual("0.00800141297577573362", ((decimal.Parse("0.00800136662460927")) + decimal.Parse("0.00000004635116646362")).ToString(), "(new Decimal(\"0.00800136662460927\")).add(\"0.00000004635116646362\").toString() == \"0.00800141297577573362\" FAILED");
            Assert.AreEqual("0.00000763849065389414", ((decimal.Parse("0.00000759593656174649")) + decimal.Parse("0.00000004255409214765")).ToString(), "(new Decimal(\"0.00000759593656174649\")).add(\"0.00000004255409214765\").toString() == \"0.00000763849065389414\" FAILED");
            Assert.AreEqual("8586.7522222217789298276464381", ((decimal.Parse("92.2359921001997")) * decimal.Parse("93.0954611828064")).ToString(), "(new Decimal(\"92.2359921001997\")).mul(\"93.0954611828064\").toString() == \"8586.7522222217789298276464381\" FAILED");
            Assert.AreEqual("0.9931136155639471788378564663", ((decimal.Parse("1609.99809932429")) * decimal.Parse("0.000616841483217125")).ToString(), "(new Decimal(\"1609.99809932429\")).mul(\"0.000616841483217125\").toString() == \"0.9931136155639471788378564663\" FAILED");
            Assert.AreEqual("4.8983950361677169391106759502", ((decimal.Parse("7466.33106724654")) * decimal.Parse("0.000656064537193656")).ToString(), "(new Decimal(\"7466.33106724654\")).mul(\"0.000656064537193656\").toString() == \"4.8983950361677169391106759502\" FAILED");
            Assert.AreEqual("0.0940287920654541467547713549", ((decimal.Parse("5.9157444098572")) / decimal.Parse("62.9141806452135")).ToString(), "(new Decimal(\"5.9157444098572\")).div(\"62.9141806452135\").toString() == \"0.0940287920654541467547713549\" FAILED");
            Assert.AreEqual("0.0000081194917301801093808069", ((decimal.Parse("0.00000000478547779135")) / decimal.Parse("0.00058938144780201")).ToString(), "(new Decimal(\"0.00000000478547779135\")).div(\"0.00058938144780201\").toString() == \"0.0000081194917301801093808069\" FAILED");
            Assert.AreEqual("0.0000000237129540524444766519", ((decimal.Parse("0.242301107962756")) * decimal.Parse("0.00000009786564432916")).ToString(), "(new Decimal(\"0.242301107962756\")).mul(\"0.00000009786564432916\").toString() == \"0.0000000237129540524444766519\" FAILED");
            Assert.AreEqual("1985896464.0383833019058040956", ((decimal.Parse("414250.732126763")) * decimal.Parse("4793.94798855947")).ToString(), "(new Decimal(\"414250.732126763\")).mul(\"4793.94798855947\").toString() == \"1985896464.0383833019058040956\" FAILED");
            Assert.AreEqual("3.2317284500242951973203537433", ((decimal.Parse("2102650.26060056")) / decimal.Parse("650627.146777989")).ToString(), "(new Decimal(\"2102650.26060056\")).div(\"650627.146777989\").toString() == \"3.2317284500242951973203537433\" FAILED");
            Assert.AreEqual("105.92536134455608", ((decimal.Parse("111.791148368172")) - decimal.Parse("5.86578702361592")).ToString(), "(new Decimal(\"111.791148368172\")).sub(\"5.86578702361592\").toString() == \"105.92536134455608\" FAILED");
            Assert.AreEqual("0.8746476497299917849874735069", ((decimal.Parse("1.16457231397022")) * decimal.Parse("0.751046233228895")).ToString(), "(new Decimal(\"1.16457231397022\")).mul(\"0.751046233228895\").toString() == \"0.8746476497299917849874735069\" FAILED");
            Assert.AreEqual("-8083400.16197386453424333806", ((decimal.Parse("0.00000185546575666194")) - decimal.Parse("8083400.16197572")).ToString(), "(new Decimal(\"0.00000185546575666194\")).sub(\"8083400.16197572\").toString() == \"-8083400.16197386453424333806\" FAILED");
            Assert.AreEqual("1498.0600060982110689932047605", ((decimal.Parse("90.5140531205172")) / decimal.Parse("0.0604208461290323")).ToString(), "(new Decimal(\"90.5140531205172\")).div(\"0.0604208461290323\").toString() == \"1498.0600060982110689932047605\" FAILED");
            Assert.AreEqual("0.0408729994202976123433973094", ((decimal.Parse("0.00000006767841650531")) * decimal.Parse("603929.606081885")).ToString(), "(new Decimal(\"0.00000006767841650531\")).mul(\"603929.606081885\").toString() == \"0.0408729994202976123433973094\" FAILED");
            Assert.AreEqual("0.00008319630302265116", ((decimal.Parse("0.000082278563073966")) + decimal.Parse("0.00000091773994868516")).ToString(), "(new Decimal(\"0.000082278563073966\")).add(\"0.00000091773994868516\").toString() == \"0.00008319630302265116\" FAILED");
            Assert.AreEqual("5.499829306499955", ((decimal.Parse("6.2219416937893")) - decimal.Parse("0.722112387289345")).ToString(), "(new Decimal(\"6.2219416937893\")).sub(\"0.722112387289345\").toString() == \"5.499829306499955\" FAILED");
            Assert.AreEqual("367.786135251658876272", ((decimal.Parse("367.786185987194")) - decimal.Parse("0.000050735535123728")).ToString(), "(new Decimal(\"367.786185987194\")).sub(\"0.000050735535123728\").toString() == \"367.786135251658876272\" FAILED");
            Assert.AreEqual("10.312338090882360499767870669", ((decimal.Parse("517330.180628845")) / decimal.Parse("50166.1384711816")).ToString(), "(new Decimal(\"517330.180628845\")).div(\"50166.1384711816\").toString() == \"10.312338090882360499767870669\" FAILED");
            Assert.AreEqual("0.0000050661264951214749723215", ((decimal.Parse("0.243327718807071")) / decimal.Parse("48030.3283073149")).ToString(), "(new Decimal(\"0.243327718807071\")).div(\"48030.3283073149\").toString() == \"0.0000050661264951214749723215\" FAILED");
            Assert.AreEqual("-0.00002335923605396378", ((decimal.Parse("0.00000005842985946612")) - decimal.Parse("0.0000234176659134299")).ToString(), "(new Decimal(\"0.00000005842985946612\")).sub(\"0.0000234176659134299\").toString() == \"-0.00002335923605396378\" FAILED");
            Assert.AreEqual("733335461.13670180722389446974", ((decimal.Parse("1060005.08231111")) * decimal.Parse("691.822589697234")).ToString(), "(new Decimal(\"1060005.08231111\")).mul(\"691.822589697234\").toString() == \"733335461.13670180722389446974\" FAILED");
            Assert.AreEqual("508358.93909651945980882198688", ((decimal.Parse("7.63294460141703")) * decimal.Parse("66600.6326054226")).ToString(), "(new Decimal(\"7.63294460141703\")).mul(\"66600.6326054226\").toString() == \"508358.93909651945980882198688\" FAILED");
            Assert.AreEqual("1830847.8153588342112017535059", ((decimal.Parse("60437.9311485393")) * decimal.Parse("30.2930259286859")).ToString(), "(new Decimal(\"60437.9311485393\")).mul(\"30.2930259286859\").toString() == \"1830847.8153588342112017535059\" FAILED");
            Assert.AreEqual("0.0000000000810736550010910727", ((decimal.Parse("0.0000225892997917669")) / decimal.Parse("278626.883066551")).ToString(), "(new Decimal(\"0.0000225892997917669\")).div(\"278626.883066551\").toString() == \"0.0000000000810736550010910727\" FAILED");
            Assert.AreEqual("77.65643053701936456364", ((decimal.Parse("0.00000007573536456364")) + decimal.Parse("77.656430461284")).ToString(), "(new Decimal(\"0.00000007573536456364\")).add(\"77.656430461284\").toString() == \"77.65643053701936456364\" FAILED");
            Assert.AreEqual("0.0248440823395338596229713692", ((decimal.Parse("0.293818466502157")) * decimal.Parse("0.0845558913818355")).ToString(), "(new Decimal(\"0.293818466502157\")).mul(\"0.0845558913818355\").toString() == \"0.0248440823395338596229713692\" FAILED");
            Assert.AreEqual("0.00492439746169578524", ((decimal.Parse("0.00000572612989960524")) + decimal.Parse("0.00491867133179618")).ToString(), "(new Decimal(\"0.00000572612989960524\")).add(\"0.00491867133179618\").toString() == \"0.00492439746169578524\" FAILED");
            Assert.AreEqual("13138076.691468148650986791474", ((decimal.Parse("3923274.88117073")) * decimal.Parse("3.34875253185106")).ToString(), "(new Decimal(\"3923274.88117073\")).mul(\"3.34875253185106\").toString() == \"13138076.691468148650986791474\" FAILED");
            Assert.AreEqual("0.0008676636364626068", ((decimal.Parse("0.000932349686013698")) - decimal.Parse("0.0000646860495510912")).ToString(), "(new Decimal(\"0.000932349686013698\")).sub(\"0.0000646860495510912\").toString() == \"0.0008676636364626068\" FAILED");
            Assert.AreEqual("41516.8349721547454", ((decimal.Parse("41601.7347674825")) - decimal.Parse("84.8997953277546")).ToString(), "(new Decimal(\"41601.7347674825\")).sub(\"84.8997953277546\").toString() == \"41516.8349721547454\" FAILED");
            Assert.AreEqual("0.33506006843864413748", ((decimal.Parse("0.00000371631919113748")) + decimal.Parse("0.335056352119453")).ToString(), "(new Decimal(\"0.00000371631919113748\")).add(\"0.335056352119453\").toString() == \"0.33506006843864413748\" FAILED");
            Assert.AreEqual("216355.8589961767217502328842", ((decimal.Parse("873.952093941137")) / decimal.Parse("0.00403941958399463")).ToString(), "(new Decimal(\"873.952093941137\")).div(\"0.00403941958399463\").toString() == \"216355.8589961767217502328842\" FAILED");
            Assert.AreEqual("45.974464247116189804566774409", ((decimal.Parse("278186.309746553")) * decimal.Parse("0.000165265013540753")).ToString(), "(new Decimal(\"278186.309746553\")).mul(\"0.000165265013540753\").toString() == \"45.974464247116189804566774409\" FAILED");
            Assert.AreEqual("411.8834926940230607258", ((decimal.Parse("411.883402341922")) + decimal.Parse("0.0000903521010607258")).ToString(), "(new Decimal(\"411.883402341922\")).add(\"0.0000903521010607258\").toString() == \"411.8834926940230607258\" FAILED");
            Assert.AreEqual("2010677.7183839557954851115873", ((decimal.Parse("0.280687715057604")) * decimal.Parse("7163397.64984483")).ToString(), "(new Decimal(\"0.280687715057604\")).mul(\"7163397.64984483\").toString() == \"2010677.7183839557954851115873\" FAILED");
            Assert.AreEqual("0.0268467935821811160643869611", ((decimal.Parse("484.96830299728")) * decimal.Parse("0.0000553578314629187")).ToString(), "(new Decimal(\"484.96830299728\")).mul(\"0.0000553578314629187\").toString() == \"0.0268467935821811160643869611\" FAILED");
            Assert.AreEqual("0.0916931643365465232681665674", ((decimal.Parse("0.00000004376192267228")) / decimal.Parse("0.00000047726483199618")).ToString(), "(new Decimal(\"0.00000004376192267228\")).div(\"0.00000047726483199618\").toString() == \"0.0916931643365465232681665674\" FAILED");
            Assert.AreEqual("0.0206632160994641183202944665", ((decimal.Parse("0.00000039209536760677")) / decimal.Parse("0.000018975524706289")).ToString(), "(new Decimal(\"0.00000039209536760677\")).div(\"0.000018975524706289\").toString() == \"0.0206632160994641183202944665\" FAILED");
            Assert.AreEqual("5657.8995636199841461392843417", ((decimal.Parse("6198172.99591292")) * decimal.Parse("0.000912833437748641")).ToString(), "(new Decimal(\"6198172.99591292\")).mul(\"0.000912833437748641\").toString() == \"5657.8995636199841461392843417\" FAILED");
            Assert.AreEqual("36474.31596809736535", ((decimal.Parse("7.05634104416535")) + decimal.Parse("36467.2596270532")).ToString(), "(new Decimal(\"7.05634104416535\")).add(\"36467.2596270532\").toString() == \"36474.31596809736535\" FAILED");
            Assert.AreEqual("0.4258812461246507845677082109", ((decimal.Parse("698.142959595725")) * decimal.Parse("0.000610020111599015")).ToString(), "(new Decimal(\"698.142959595725\")).mul(\"0.000610020111599015\").toString() == \"0.4258812461246507845677082109\" FAILED");
            Assert.AreEqual("-3682769.2669420779522", ((decimal.Parse("88.0442409720478")) - decimal.Parse("3682857.31118305")).ToString(), "(new Decimal(\"88.0442409720478\")).sub(\"3682857.31118305\").toString() == \"-3682769.2669420779522\" FAILED");
            Assert.AreEqual("-8049831.4965358431074197046", ((decimal.Parse("0.0000389968925802954")) - decimal.Parse("8049831.49657484")).ToString(), "(new Decimal(\"0.0000389968925802954\")).sub(\"8049831.49657484\").toString() == \"-8049831.4965358431074197046\" FAILED");
            Assert.AreEqual("36155.62014127020986184166", ((decimal.Parse("0.00000024290986184166")) + decimal.Parse("36155.6201410273")).ToString(), "(new Decimal(\"0.00000024290986184166\")).add(\"36155.6201410273\").toString() == \"36155.62014127020986184166\" FAILED");
            Assert.AreEqual("3294378.802389452177", ((decimal.Parse("3294319.65169232")) + decimal.Parse("59.150697132177")).ToString(), "(new Decimal(\"3294319.65169232\")).add(\"59.150697132177\").toString() == \"3294378.802389452177\" FAILED");
            Assert.AreEqual("126628888131.45293056779587565", ((decimal.Parse("29296.0378012136")) * decimal.Parse("4322389.56648968")).ToString(), "(new Decimal(\"29296.0378012136\")).mul(\"4322389.56648968\").toString() == \"126628888131.45293056779587565\" FAILED");
            Assert.AreEqual("15.17547972741327", ((decimal.Parse("7.7507224575387")) + decimal.Parse("7.42475726987457")).ToString(), "(new Decimal(\"7.7507224575387\")).add(\"7.42475726987457\").toString() == \"15.17547972741327\" FAILED");
            Assert.AreEqual("0.7623358443707398129", ((decimal.Parse("0.762320778221973")) + decimal.Parse("0.0000150661487668129")).ToString(), "(new Decimal(\"0.762320778221973\")).add(\"0.0000150661487668129\").toString() == \"0.7623358443707398129\" FAILED");
            Assert.AreEqual("-30306.453181107727", ((decimal.Parse("745.766049132573")) - decimal.Parse("31052.2192302403")).ToString(), "(new Decimal(\"745.766049132573\")).sub(\"31052.2192302403\").toString() == \"-30306.453181107727\" FAILED");
            Assert.AreEqual("43450065.810652162786851680039", ((decimal.Parse("4.03395124898942")) / decimal.Parse("0.0000000928410849035")).ToString(), "(new Decimal(\"4.03395124898942\")).div(\"0.0000000928410849035\").toString() == \"43450065.810652162786851680039\" FAILED");
            Assert.AreEqual("89.719799308907125", ((decimal.Parse("89.2452192442702")) + decimal.Parse("0.474580064636925")).ToString(), "(new Decimal(\"89.2452192442702\")).add(\"0.474580064636925\").toString() == \"89.719799308907125\" FAILED");
            Assert.AreEqual("7616096.4244623971027726383725", ((decimal.Parse("0.754648202450317")) / decimal.Parse("0.00000009908595695118")).ToString(), "(new Decimal(\"0.754648202450317\")).div(\"0.00000009908595695118\").toString() == \"7616096.4244623971027726383725\" FAILED");
            Assert.AreEqual("0.0001721507228208858110900319", ((decimal.Parse("0.00000000703358706414")) / decimal.Parse("0.0000408571451161323")).ToString(), "(new Decimal(\"0.00000000703358706414\")).div(\"0.0000408571451161323\").toString() == \"0.0001721507228208858110900319\" FAILED");
            Assert.AreEqual("0.0000000000022714462393900636", ((decimal.Parse("0.00000008484566439169")) * decimal.Parse("0.0000267715063070746")).ToString(), "(new Decimal(\"0.00000008484566439169\")).mul(\"0.0000267715063070746\").toString() == \"0.0000000000022714462393900636\" FAILED");
            Assert.AreEqual("95740315594.555877584430293733", ((decimal.Parse("753944.105819773")) / decimal.Parse("0.0000078748863646178")).ToString(), "(new Decimal(\"753944.105819773\")).div(\"0.0000078748863646178\").toString() == \"95740315594.555877584430293733\" FAILED");
            Assert.AreEqual("6.4069192960141739237", ((decimal.Parse("6.40685234982839")) + decimal.Parse("0.0000669461857839237")).ToString(), "(new Decimal(\"6.40685234982839\")).add(\"0.0000669461857839237\").toString() == \"6.4069192960141739237\" FAILED");
            Assert.AreEqual("2.7730492038105317936901033936", ((decimal.Parse("7091326.72152078")) * decimal.Parse("0.00000039104801015512")).ToString(), "(new Decimal(\"7091326.72152078\")).mul(\"0.00000039104801015512\").toString() == \"2.7730492038105317936901033936\" FAILED");
            Assert.AreEqual("39.225255132451082330972995533", ((decimal.Parse("0.0150400641909987")) * decimal.Parse("2608.05104514959")).ToString(), "(new Decimal(\"0.0150400641909987\")).mul(\"2608.05104514959\").toString() == \"39.225255132451082330972995533\" FAILED");
            Assert.AreEqual("2.48947713311905352214", ((decimal.Parse("2.48947596293384")) + decimal.Parse("0.00000117018521352214")).ToString(), "(new Decimal(\"2.48947596293384\")).add(\"0.00000117018521352214\").toString() == \"2.48947713311905352214\" FAILED");
            Assert.AreEqual("880946682.13701250534829592747", ((decimal.Parse("720.791596789282")) / decimal.Parse("0.00000081820115950806")).ToString(), "(new Decimal(\"720.791596789282\")).div(\"0.00000081820115950806\").toString() == \"880946682.13701250534829592747\" FAILED");
            Assert.AreEqual("267.25912423523108411359660085", ((decimal.Parse("378388.367769489")) * decimal.Parse("0.000706309038543286")).ToString(), "(new Decimal(\"378388.367769489\")).mul(\"0.000706309038543286\").toString() == \"267.25912423523108411359660085\" FAILED");
            Assert.AreEqual("-32046.841084978907", ((decimal.Parse("978.517128610293")) - decimal.Parse("33025.3582135892")).ToString(), "(new Decimal(\"978.517128610293\")).sub(\"33025.3582135892\").toString() == \"-32046.841084978907\" FAILED");
            Assert.AreEqual("0.00139737929887948", ((decimal.Parse("0.00217247345120296")) - decimal.Parse("0.00077509415232348")).ToString(), "(new Decimal(\"0.00217247345120296\")).sub(\"0.00077509415232348\").toString() == \"0.00139737929887948\" FAILED");
            Assert.AreEqual("0.0000000000046530416190453426", ((decimal.Parse("0.000136329152219151")) * decimal.Parse("0.0000000341309363647")).ToString(), "(new Decimal(\"0.000136329152219151\")).mul(\"0.0000000341309363647\").toString() == \"0.0000000000046530416190453426\" FAILED");
            Assert.AreEqual("-4850951.788916537256405138", ((decimal.Parse("0.000426702743594862")) - decimal.Parse("4850951.78934324")).ToString(), "(new Decimal(\"0.000426702743594862\")).sub(\"4850951.78934324\").toString() == \"-4850951.788916537256405138\" FAILED");
            Assert.AreEqual("3607.9677572355331381655390708", ((decimal.Parse("219.782070359114")) / decimal.Parse("0.0609157523423972")).ToString(), "(new Decimal(\"219.782070359114\")).div(\"0.0609157523423972\").toString() == \"3607.9677572355331381655390708\" FAILED");
            Assert.AreEqual("-59578.20478480686224", ((decimal.Parse("9.13404255133776")) - decimal.Parse("59587.3388273582")).ToString(), "(new Decimal(\"9.13404255133776\")).sub(\"59587.3388273582\").toString() == \"-59578.20478480686224\" FAILED");
            Assert.AreEqual("7579.1908166668147017746539623", ((decimal.Parse("0.000786728870489974")) / decimal.Parse("0.00000010380116948104")).ToString(), "(new Decimal(\"0.000786728870489974\")).div(\"0.00000010380116948104\").toString() == \"7579.1908166668147017746539623\" FAILED");
            Assert.AreEqual("-4.1981967099609962025", ((decimal.Parse("0.0000004602920037975")) - decimal.Parse("4.198197170253")).ToString(), "(new Decimal(\"0.0000004602920037975\")).sub(\"4.198197170253\").toString() == \"-4.1981967099609962025\" FAILED");
            Assert.AreEqual("0.00008656549534796066", ((decimal.Parse("0.0000866447461706795")) - decimal.Parse("0.00000007925082271884")).ToString(), "(new Decimal(\"0.0000866447461706795\")).sub(\"0.00000007925082271884\").toString() == \"0.00008656549534796066\" FAILED");
            // #1650
            //Assert.AreEqual("0.0002938065361778543390344760", ((decimal.Parse("0.00000388761161541921")) * decimal.Parse("75.5750741695869")).ToString(), "(new Decimal(\"0.00000388761161541921\")).mul(\"75.5750741695869\").toString() == \"0.0002938065361778543390344760\" FAILED");

            Assert.AreEqual("0.07021769672083374498", ((decimal.Parse("0.0702169635660094")) + decimal.Parse("0.00000073315482434498")).ToString(), "(new Decimal(\"0.0702169635660094\")).add(\"0.00000073315482434498\").toString() == \"0.07021769672083374498\" FAILED");
            // #1650
            //Assert.AreEqual("248795975759.24153521774922170", ((decimal.Parse("274391.580035161")) * decimal.Parse("906718.696424141")).ToString(), "(new Decimal(\"274391.580035161\")).mul(\"906718.696424141\").toString() == \"248795975759.24153521774922170\" FAILED");

            Assert.AreEqual("0.0000063518043668020539957365", ((decimal.Parse("0.00000067736893644434")) * decimal.Parse("9.37717102904672")).ToString(), "(new Decimal(\"0.00000067736893644434\")).mul(\"9.37717102904672\").toString() == \"0.0000063518043668020539957365\" FAILED");
            Assert.AreEqual("-25.24833340239167136", ((decimal.Parse("0.00810707191382864")) - decimal.Parse("25.2564404743055")).ToString(), "(new Decimal(\"0.00810707191382864\")).sub(\"25.2564404743055\").toString() == \"-25.24833340239167136\" FAILED");
            Assert.AreEqual("366652481671.12116866091032792", ((decimal.Parse("337218.588375123")) / decimal.Parse("0.0000009197226399182")).ToString(), "(new Decimal(\"337218.588375123\")).div(\"0.0000009197226399182\").toString() == \"366652481671.12116866091032792\" FAILED");
            Assert.AreEqual("0.00097101861317670853", ((decimal.Parse("0.000970961897620448")) + decimal.Parse("0.00000005671555626053")).ToString(), "(new Decimal(\"0.000970961897620448\")).add(\"0.00000005671555626053\").toString() == \"0.00097101861317670853\" FAILED");
            Assert.AreEqual("7179480897.0413794612790482633", ((decimal.Parse("756541.015466927")) * decimal.Parse("9489.8766230279")).ToString(), "(new Decimal(\"756541.015466927\")).mul(\"9489.8766230279\").toString() == \"7179480897.0413794612790482633\" FAILED");
            Assert.AreEqual("-3633.6398901126231489135", ((decimal.Parse("0.0000264943868510865")) - decimal.Parse("3633.63991660701")).ToString(), "(new Decimal(\"0.0000264943868510865\")).sub(\"3633.63991660701\").toString() == \"-3633.6398901126231489135\" FAILED");
            Assert.AreEqual("-492238.57879213989935796", ((decimal.Parse("0.00587727810064204")) - decimal.Parse("492238.584669418")).ToString(), "(new Decimal(\"0.00587727810064204\")).sub(\"492238.584669418\").toString() == \"-492238.57879213989935796\" FAILED");
            Assert.AreEqual("7.9661666768610785486", ((decimal.Parse("7.96619214954143")) - decimal.Parse("0.0000254726803514514")).ToString(), "(new Decimal(\"7.96619214954143\")).sub(\"0.0000254726803514514\").toString() == \"7.9661666768610785486\" FAILED");
            Assert.AreEqual("1.1127217455466662896347686896", ((decimal.Parse("346273.425196425")) / decimal.Parse("311194.983455909")).ToString(), "(new Decimal(\"346273.425196425\")).div(\"311194.983455909\").toString() == \"1.1127217455466662896347686896\" FAILED");
            Assert.AreEqual("4.8468358384313691963755308986", ((decimal.Parse("85.1793199242928")) / decimal.Parse("17.5742118701219")).ToString(), "(new Decimal(\"85.1793199242928\")).div(\"17.5742118701219\").toString() == \"4.8468358384313691963755308986\" FAILED");
            Assert.AreEqual("0.121457026045982637", ((decimal.Parse("0.121196779478899")) + decimal.Parse("0.000260246567083637")).ToString(), "(new Decimal(\"0.121196779478899\")).add(\"0.000260246567083637\").toString() == \"0.121457026045982637\" FAILED");
            Assert.AreEqual("-30759.91316974471503713", ((decimal.Parse("0.00907333258496287")) - decimal.Parse("30759.9222430773")).ToString(), "(new Decimal(\"0.00907333258496287\")).sub(\"30759.9222430773\").toString() == \"-30759.91316974471503713\" FAILED");
            Assert.AreEqual("906.6246250772131248336", ((decimal.Parse("906.624596988142")) + decimal.Parse("0.0000280890711248336")).ToString(), "(new Decimal(\"906.624596988142\")).add(\"0.0000280890711248336\").toString() == \"906.6246250772131248336\" FAILED");
            Assert.AreEqual("279112366.91872199097653690363", ((decimal.Parse("5976325.60691625")) * decimal.Parse("46.7030053710113")).ToString(), "(new Decimal(\"5976325.60691625\")).mul(\"46.7030053710113\").toString() == \"279112366.91872199097653690363\" FAILED");
            Assert.AreEqual("3487.68489765640454528", ((decimal.Parse("3487.68775513754")) - decimal.Parse("0.00285748113545472")).ToString(), "(new Decimal(\"3487.68775513754\")).sub(\"0.00285748113545472\").toString() == \"3487.68489765640454528\" FAILED");
            Assert.AreEqual("0.0000003104791009850215294554", ((decimal.Parse("0.000475329228898198")) / decimal.Parse("1530.95402360473")).ToString(), "(new Decimal(\"0.000475329228898198\")).div(\"1530.95402360473\").toString() == \"0.0000003104791009850215294554\" FAILED");
            Assert.AreEqual("843.49677454265676470597", ((decimal.Parse("843.496774716068")) - decimal.Parse("0.00000017341123529403")).ToString(), "(new Decimal(\"843.496774716068\")).sub(\"0.00000017341123529403\").toString() == \"843.49677454265676470597\" FAILED");
            Assert.AreEqual("27.32456344093503007762349601", ((decimal.Parse("0.00197717379870693")) * decimal.Parse("13820.010895757")).ToString(), "(new Decimal(\"0.00197717379870693\")).mul(\"13820.010895757\").toString() == \"27.32456344093503007762349601\" FAILED");
            Assert.AreEqual("0.0000000133398085305956484381", ((decimal.Parse("0.000708901179353195")) / decimal.Parse("53141.7806880277")).ToString(), "(new Decimal(\"0.000708901179353195\")).div(\"53141.7806880277\").toString() == \"0.0000000133398085305956484381\" FAILED");
            Assert.AreEqual("63225.9975649597083791267", ((decimal.Parse("63225.9976413222")) - decimal.Parse("0.0000763624916208733")).ToString(), "(new Decimal(\"63225.9976413222\")).sub(\"0.0000763624916208733\").toString() == \"63225.9975649597083791267\" FAILED");
            Assert.AreEqual("90165.355585698323663902", ((decimal.Parse("90165.3561229656")) - decimal.Parse("0.000537267276336098")).ToString(), "(new Decimal(\"90165.3561229656\")).sub(\"0.000537267276336098\").toString() == \"90165.355585698323663902\" FAILED");
            Assert.AreEqual("0.0000000004084178640305073762", ((decimal.Parse("0.0000351506077382484")) / decimal.Parse("86065.3042728385")).ToString(), "(new Decimal(\"0.0000351506077382484\")).div(\"86065.3042728385\").toString() == \"0.0000000004084178640305073762\" FAILED");
            Assert.AreEqual("6.36616576073451628351", ((decimal.Parse("6.36616601905141")) - decimal.Parse("0.00000025831689371649")).ToString(), "(new Decimal(\"6.36616601905141\")).sub(\"0.00000025831689371649\").toString() == \"6.36616576073451628351\" FAILED");
            Assert.AreEqual("950819.51903543659609543293061", ((decimal.Parse("0.0188125421380683")) / decimal.Parse("0.00000001978560784822")).ToString(), "(new Decimal(\"0.0188125421380683\")).div(\"0.00000001978560784822\").toString() == \"950819.51903543659609543293061\" FAILED");
            Assert.AreEqual("0.0001281218872841341670208902", ((decimal.Parse("0.0000201579493098696")) * decimal.Parse("6.35589887218359")).ToString(), "(new Decimal(\"0.0000201579493098696\")).mul(\"6.35589887218359\").toString() == \"0.0001281218872841341670208902\" FAILED");
            Assert.AreEqual("100501.68372248376", ((decimal.Parse("96670.6671736532")) + decimal.Parse("3831.01654883056")).ToString(), "(new Decimal(\"96670.6671736532\")).add(\"3831.01654883056\").toString() == \"100501.68372248376\" FAILED");
            Assert.AreEqual("0.007565086812628940345573773", ((decimal.Parse("6377.50250118668")) / decimal.Parse("843017.755003189")).ToString(), "(new Decimal(\"6377.50250118668\")).div(\"843017.755003189\").toString() == \"0.007565086812628940345573773\" FAILED");
            Assert.AreEqual("8.6365193165306442105296800123", ((decimal.Parse("0.00984376350876119")) * decimal.Parse("877.359488456212")).ToString(), "(new Decimal(\"0.00984376350876119\")).mul(\"877.359488456212\").toString() == \"8.6365193165306442105296800123\" FAILED");
            Assert.AreEqual("3395749.5740729445309136648368", ((decimal.Parse("9.97239828574117")) / decimal.Parse("0.00000293672959922661")).ToString(), "(new Decimal(\"9.97239828574117\")).div(\"0.00000293672959922661\").toString() == \"3395749.5740729445309136648368\" FAILED");
            Assert.AreEqual("0.0000503282881253889121331449", ((decimal.Parse("0.00000005182576428718")) * decimal.Parse("971.10556530352")).ToString(), "(new Decimal(\"0.00000005182576428718\")).mul(\"971.10556530352\").toString() == \"0.0000503282881253889121331449\" FAILED");
            Assert.AreEqual("1755687.77683918075262034347", ((decimal.Parse("1755687.77683922")) - decimal.Parse("0.00000003924737965653")).ToString(), "(new Decimal(\"1755687.77683922\")).sub(\"0.00000003924737965653\").toString() == \"1755687.77683918075262034347\" FAILED");
            // #1650
            //Assert.AreEqual("0.0000000667441803526521607590", ((decimal.Parse("0.0000688309593912358")) * decimal.Parse("0.000969682551906296")).ToString(), "(new Decimal(\"0.0000688309593912358\")).mul(\"0.000969682551906296\").toString() == \"0.0000000667441803526521607590\" FAILED");

            Assert.AreEqual("5007756.38734349805052136446", ((decimal.Parse("5007756.38735283")) - decimal.Parse("0.00000933194947863554")).ToString(), "(new Decimal(\"5007756.38735283\")).sub(\"0.00000933194947863554\").toString() == \"5007756.38734349805052136446\" FAILED");
            Assert.AreEqual("8519.28502213539257358044", ((decimal.Parse("8519.28502252292")) - decimal.Parse("0.00000038752742641956")).ToString(), "(new Decimal(\"8519.28502252292\")).sub(\"0.00000038752742641956\").toString() == \"8519.28502213539257358044\" FAILED");
            Assert.AreEqual("8376.91325157743275230985", ((decimal.Parse("8376.9132515308")) + decimal.Parse("0.00000004663275230985")).ToString(), "(new Decimal(\"8376.9132515308\")).add(\"0.00000004663275230985\").toString() == \"8376.91325157743275230985\" FAILED");
            Assert.AreEqual("0.00610815784999223683", ((decimal.Parse("0.0061082019266245")) - decimal.Parse("0.00000004407663226317")).ToString(), "(new Decimal(\"0.0061082019266245\")).sub(\"0.00000004407663226317\").toString() == \"0.00610815784999223683\" FAILED");
            Assert.AreEqual("-6.6857970204242414917", ((decimal.Parse("0.0000091555889785083")) - decimal.Parse("6.68580617601322")).ToString(), "(new Decimal(\"0.0000091555889785083\")).sub(\"6.68580617601322\").toString() == \"-6.6857970204242414917\" FAILED");
            Assert.AreEqual("0.0000049877587914779734645683", ((decimal.Parse("0.679050468690251")) * decimal.Parse("0.00000734519600744601")).ToString(), "(new Decimal(\"0.679050468690251\")).mul(\"0.00000734519600744601\").toString() == \"0.0000049877587914779734645683\" FAILED");
            Assert.AreEqual("1331757.9219696450201665110972", ((decimal.Parse("72.9822536338969")) / decimal.Parse("0.0000548014413354925")).ToString(), "(new Decimal(\"72.9822536338969\")).div(\"0.0000548014413354925\").toString() == \"1331757.9219696450201665110972\" FAILED");
            Assert.AreEqual("0.0002184819375517202908665847", ((decimal.Parse("0.00000018985219774295")) / decimal.Parse("0.000868960610064194")).ToString(), "(new Decimal(\"0.00000018985219774295\")).div(\"0.000868960610064194\").toString() == \"0.0002184819375517202908665847\" FAILED");
            Assert.AreEqual("-873438.38944748009399", ((decimal.Parse("7.31134765190601")) - decimal.Parse("873445.700795132")).ToString(), "(new Decimal(\"7.31134765190601\")).sub(\"873445.700795132\").toString() == \"-873438.38944748009399\" FAILED");
            Assert.AreEqual("4392083.3322472776428269303282", ((decimal.Parse("4389325.52672426")) / decimal.Parse("0.999372096266305")).ToString(), "(new Decimal(\"4389325.52672426\")).div(\"0.999372096266305\").toString() == \"4392083.3322472776428269303282\" FAILED");
            Assert.AreEqual("3511082.4535909329651685", ((decimal.Parse("3511082.54562648")) - decimal.Parse("0.0920355470348315")).ToString(), "(new Decimal(\"3511082.54562648\")).sub(\"0.0920355470348315\").toString() == \"3511082.4535909329651685\" FAILED");
            Assert.AreEqual("619.45098835034374784773429077", ((decimal.Parse("310.688569820807")) / decimal.Parse("0.501554724528247")).ToString(), "(new Decimal(\"310.688569820807\")).div(\"0.501554724528247\").toString() == \"619.45098835034374784773429077\" FAILED");
            Assert.AreEqual("0.0000173331929981605953452824", ((decimal.Parse("0.00000003554128810556")) / decimal.Parse("0.00205047553034987")).ToString(), "(new Decimal(\"0.00000003554128810556\")).div(\"0.00205047553034987\").toString() == \"0.0000173331929981605953452824\" FAILED");
            Assert.AreEqual("2197324.21086973644253935499", ((decimal.Parse("2197324.21086976")) - decimal.Parse("0.00000002355746064501")).ToString(), "(new Decimal(\"2197324.21086976\")).sub(\"0.00000002355746064501\").toString() == \"2197324.21086973644253935499\" FAILED");
            Assert.AreEqual("4.4226279162585874248", ((decimal.Parse("4.42253004499829")) + decimal.Parse("0.0000978712602974248")).ToString(), "(new Decimal(\"4.42253004499829\")).add(\"0.0000978712602974248\").toString() == \"4.4226279162585874248\" FAILED");
            Assert.AreEqual("352307.69884553949094527331", ((decimal.Parse("352307.698853457")) - decimal.Parse("0.00000791750905472669")).ToString(), "(new Decimal(\"352307.698853457\")).sub(\"0.00000791750905472669\").toString() == \"352307.69884553949094527331\" FAILED");
            Assert.AreEqual("17096896.787851146291328234831", ((decimal.Parse("721.870396156735")) * decimal.Parse("23684.1639148463")).ToString(), "(new Decimal(\"721.870396156735\")).mul(\"23684.1639148463\").toString() == \"17096896.787851146291328234831\" FAILED");
            Assert.AreEqual("0.0000000058569075628029528804", ((decimal.Parse("0.000786162371181959")) / decimal.Parse("134228.236104468")).ToString(), "(new Decimal(\"0.000786162371181959\")).div(\"134228.236104468\").toString() == \"0.0000000058569075628029528804\" FAILED");
            Assert.AreEqual("-5591696.2786194911832293", ((decimal.Parse("0.0291847988167707")) - decimal.Parse("5591696.30780429")).ToString(), "(new Decimal(\"0.0291847988167707\")).sub(\"5591696.30780429\").toString() == \"-5591696.2786194911832293\" FAILED");
            Assert.AreEqual("67077.9713607756712", ((decimal.Parse("67027.4105235131")) + decimal.Parse("50.5608372625712")).ToString(), "(new Decimal(\"67027.4105235131\")).add(\"50.5608372625712\").toString() == \"67077.9713607756712\" FAILED");
            Assert.AreEqual("0.0000000442928238101105816891", ((decimal.Parse("0.452668749472438")) * decimal.Parse("0.00000009784820326504")).ToString(), "(new Decimal(\"0.452668749472438\")).mul(\"0.00000009784820326504\").toString() == \"0.0000000442928238101105816891\" FAILED");
            Assert.AreEqual("796.73004845438731539809", ((decimal.Parse("796.730048394171")) + decimal.Parse("0.00000006021631539809")).ToString(), "(new Decimal(\"796.730048394171\")).add(\"0.00000006021631539809\").toString() == \"796.73004845438731539809\" FAILED");
            Assert.AreEqual("0.0000001129027912971335249117", ((decimal.Parse("0.00393717444219495")) / decimal.Parse("34872.2506942564")).ToString(), "(new Decimal(\"0.00393717444219495\")).div(\"34872.2506942564\").toString() == \"0.0000001129027912971335249117\" FAILED");
            Assert.AreEqual("0.0254376983229297496691344205", ((decimal.Parse("0.00680742215216505")) * decimal.Parse("3.73675934213063")).ToString(), "(new Decimal(\"0.00680742215216505\")).mul(\"3.73675934213063\").toString() == \"0.0254376983229297496691344205\" FAILED");
            Assert.AreEqual("-315.51025068765613449375", ((decimal.Parse("0.00000893482386550625")) - decimal.Parse("315.51025962248")).ToString(), "(new Decimal(\"0.00000893482386550625\")).sub(\"315.51025962248\").toString() == \"-315.51025068765613449375\" FAILED");
            Assert.AreEqual("0.0003013325022026421797172656", ((decimal.Parse("0.000027297311009512")) * decimal.Parse("11.0389079018677")).ToString(), "(new Decimal(\"0.000027297311009512\")).mul(\"11.0389079018677\").toString() == \"0.0003013325022026421797172656\" FAILED");
            Assert.AreEqual("402.83617806471816721794725061", ((decimal.Parse("54243.3473999814")) / decimal.Parse("134.653614430993")).ToString(), "(new Decimal(\"54243.3473999814\")).div(\"134.653614430993\").toString() == \"402.83617806471816721794725061\" FAILED");
            Assert.AreEqual("0.0000000000000039584325266911", ((decimal.Parse("0.00000021819561916319")) * decimal.Parse("0.00000001814166820522")).ToString(), "(new Decimal(\"0.00000021819561916319\")).mul(\"0.00000001814166820522\").toString() == \"0.0000000000000039584325266911\" FAILED");
            Assert.AreEqual("0.07274982420726249867", ((decimal.Parse("0.00000006649979439867")) + decimal.Parse("0.0727497577074681")).ToString(), "(new Decimal(\"0.00000006649979439867\")).add(\"0.0727497577074681\").toString() == \"0.07274982420726249867\" FAILED");
            Assert.AreEqual("125.09829068179389161411857875", ((decimal.Parse("0.0942382432959221")) / decimal.Parse("0.000753313596711174")).ToString(), "(new Decimal(\"0.0942382432959221\")).div(\"0.000753313596711174\").toString() == \"125.09829068179389161411857875\" FAILED");
            Assert.AreEqual("3.1072210310858812077194224446", ((decimal.Parse("0.000336303566739105")) * decimal.Parse("9239.33415638252")).ToString(), "(new Decimal(\"0.000336303566739105\")).mul(\"9239.33415638252\").toString() == \"3.1072210310858812077194224446\" FAILED");
            Assert.AreEqual("0.00000293927498163621", ((decimal.Parse("0.00000296421897735643")) - decimal.Parse("0.00000002494399572022")).ToString(), "(new Decimal(\"0.00000296421897735643\")).sub(\"0.00000002494399572022\").toString() == \"0.00000293927498163621\" FAILED");
            Assert.AreEqual("0.95424499521071008787", ((decimal.Parse("0.00000005236202508787")) + decimal.Parse("0.954244942848685")).ToString(), "(new Decimal(\"0.00000005236202508787\")).add(\"0.954244942848685\").toString() == \"0.95424499521071008787\" FAILED");
            Assert.AreEqual("0.0840038726281231661070730835", ((decimal.Parse("0.544814708896361")) / decimal.Parse("6.48559038829319")).ToString(), "(new Decimal(\"0.544814708896361\")).div(\"6.48559038829319\").toString() == \"0.0840038726281231661070730835\" FAILED");
            Assert.AreEqual("5.584384619064811", ((decimal.Parse("5.92341898285012")) - decimal.Parse("0.339034363785309")).ToString(), "(new Decimal(\"5.92341898285012\")).sub(\"0.339034363785309\").toString() == \"5.584384619064811\" FAILED");
            Assert.AreEqual("768961.59481674478", ((decimal.Parse("761069.961246601")) + decimal.Parse("7891.63357014378")).ToString(), "(new Decimal(\"761069.961246601\")).add(\"7891.63357014378\").toString() == \"768961.59481674478\" FAILED");
            Assert.AreEqual("7.1449367324811184962392161905", ((decimal.Parse("0.0057420220671883")) / decimal.Parse("0.000803649112956435")).ToString(), "(new Decimal(\"0.0057420220671883\")).div(\"0.000803649112956435\").toString() == \"7.1449367324811184962392161905\" FAILED");
            Assert.AreEqual("0.0000671343925763854248084927", ((decimal.Parse("0.00000249094584141436")) / decimal.Parse("0.0371038709939941")).ToString(), "(new Decimal(\"0.00000249094584141436\")).div(\"0.0371038709939941\").toString() == \"0.0000671343925763854248084927\" FAILED");
            Assert.AreEqual("3379.636871480214643", ((decimal.Parse("3379.79016051618")) - decimal.Parse("0.153289035965357")).ToString(), "(new Decimal(\"3379.79016051618\")).sub(\"0.153289035965357\").toString() == \"3379.636871480214643\" FAILED");
            Assert.AreEqual("-5537047.53310281883348247913", ((decimal.Parse("0.00000000116651752087")) - decimal.Parse("5537047.53310282")).ToString(), "(new Decimal(\"0.00000000116651752087\")).sub(\"5537047.53310282\").toString() == \"-5537047.53310281883348247913\" FAILED");
            Assert.AreEqual("-119.1551636528016", ((decimal.Parse("46.4980181523124")) - decimal.Parse("165.653181805114")).ToString(), "(new Decimal(\"46.4980181523124\")).sub(\"165.653181805114\").toString() == \"-119.1551636528016\" FAILED");
            Assert.AreEqual("7507411.17052143912417469505", ((decimal.Parse("7507411.17052148")) - decimal.Parse("0.00000004087582530495")).ToString(), "(new Decimal(\"7507411.17052148\")).sub(\"0.00000004087582530495\").toString() == \"7507411.17052143912417469505\" FAILED");
            Assert.AreEqual("3680288.3885330385286851", ((decimal.Parse("3680288.43481107")) - decimal.Parse("0.0462780314713149")).ToString(), "(new Decimal(\"3680288.43481107\")).sub(\"0.0462780314713149\").toString() == \"3680288.3885330385286851\" FAILED");
            Assert.AreEqual("-0.00064079973490480291", ((decimal.Parse("0.00000183056355073609")) - decimal.Parse("0.000642630298455539")).ToString(), "(new Decimal(\"0.00000183056355073609\")).sub(\"0.000642630298455539\").toString() == \"-0.00064079973490480291\" FAILED");
            Assert.AreEqual("-2.057870254878829", ((decimal.Parse("0.390304429638341")) - decimal.Parse("2.44817468451717")).ToString(), "(new Decimal(\"0.390304429638341\")).sub(\"2.44817468451717\").toString() == \"-2.057870254878829\" FAILED");
            Assert.AreEqual("0.82801381893790463861", ((decimal.Parse("0.00000077470167063861")) + decimal.Parse("0.828013044236234")).ToString(), "(new Decimal(\"0.00000077470167063861\")).add(\"0.828013044236234\").toString() == \"0.82801381893790463861\" FAILED");
            Assert.AreEqual("0.0575119050604619002876486373", ((decimal.Parse("71.2106066156228")) * decimal.Parse("0.000807631163302637")).ToString(), "(new Decimal(\"71.2106066156228\")).mul(\"0.000807631163302637\").toString() == \"0.0575119050604619002876486373\" FAILED");
            Assert.AreEqual("0.0000000846380225479673155344", ((decimal.Parse("0.00000009483140771968")) * decimal.Parse("0.892510451792046")).ToString(), "(new Decimal(\"0.00000009483140771968\")).mul(\"0.892510451792046\").toString() == \"0.0000000846380225479673155344\" FAILED");
            Assert.AreEqual("0.0001071853838444661455520212", ((decimal.Parse("2908.7434722617")) * decimal.Parse("0.00000003684937666955")).ToString(), "(new Decimal(\"2908.7434722617\")).mul(\"0.00000003684937666955\").toString() == \"0.0001071853838444661455520212\" FAILED");
            Assert.AreEqual("0.001658638454349077", ((decimal.Parse("0.000959274857751687")) + decimal.Parse("0.00069936359659739")).ToString(), "(new Decimal(\"0.000959274857751687\")).add(\"0.00069936359659739\").toString() == \"0.001658638454349077\" FAILED");
            Assert.AreEqual("24639.663275647384108817333496", ((decimal.Parse("8683.4491690078")) * decimal.Parse("2.83754333054532")).ToString(), "(new Decimal(\"8683.4491690078\")).mul(\"2.83754333054532\").toString() == \"24639.663275647384108817333496\" FAILED");
            Assert.AreEqual("6117906.68505150707818221165", ((decimal.Parse("0.00000935707818221165")) + decimal.Parse("6117906.68504215")).ToString(), "(new Decimal(\"0.00000935707818221165\")).add(\"6117906.68504215\").toString() == \"6117906.68505150707818221165\" FAILED");
            Assert.AreEqual("6.0121773791933949674368568908", ((decimal.Parse("6641.46798972109")) * decimal.Parse("0.000905248265669331")).ToString(), "(new Decimal(\"6641.46798972109\")).mul(\"0.000905248265669331\").toString() == \"6.0121773791933949674368568908\" FAILED");
            Assert.AreEqual("0.0000100639428179333997221056", ((decimal.Parse("0.0000713244643860145")) * decimal.Parse("0.14110085374727")).ToString(), "(new Decimal(\"0.0000713244643860145\")).mul(\"0.14110085374727\").toString() == \"0.0000100639428179333997221056\" FAILED");
            Assert.AreEqual("817567.71241020922149641", ((decimal.Parse("0.00126479322149641")) + decimal.Parse("817567.711145416")).ToString(), "(new Decimal(\"0.00126479322149641\")).add(\"817567.711145416\").toString() == \"817567.71241020922149641\" FAILED");
            Assert.AreEqual("5911522.4475117541555222", ((decimal.Parse("5911522.42660128")) + decimal.Parse("0.0209104741555222")).ToString(), "(new Decimal(\"5911522.42660128\")).add(\"0.0209104741555222\").toString() == \"5911522.4475117541555222\" FAILED");
            Assert.AreEqual("-50.00480793221098247371", ((decimal.Parse("0.00000004386581752629")) - decimal.Parse("50.0048079760768")).ToString(), "(new Decimal(\"0.00000004386581752629\")).sub(\"50.0048079760768\").toString() == \"-50.00480793221098247371\" FAILED");
            Assert.AreEqual("-0.00216393969813354769", ((decimal.Parse("0.00000009429415883231")) - decimal.Parse("0.00216403399229238")).ToString(), "(new Decimal(\"0.00000009429415883231\")).sub(\"0.00216403399229238\").toString() == \"-0.00216393969813354769\" FAILED");
            Assert.AreEqual("149554.64804066385942125034", ((decimal.Parse("0.00000007785942125034")) + decimal.Parse("149554.648040586")).ToString(), "(new Decimal(\"0.00000007785942125034\")).add(\"149554.648040586\").toString() == \"149554.64804066385942125034\" FAILED");
            Assert.AreEqual("0.0000000401579705382523868391", ((decimal.Parse("0.000514483727288658")) * decimal.Parse("0.0000780548896072688")).ToString(), "(new Decimal(\"0.000514483727288658\")).mul(\"0.0000780548896072688\").toString() == \"0.0000000401579705382523868391\" FAILED");
            Assert.AreEqual("4391586.0938727875920041853806", ((decimal.Parse("85.0879618362933")) / decimal.Parse("0.0000193752234426212")).ToString(), "(new Decimal(\"85.0879618362933\")).div(\"0.0000193752234426212\").toString() == \"4391586.0938727875920041853806\" FAILED");
            // #1650
            //Assert.AreEqual("0.0000001434686776916788182810", ((decimal.Parse("4.70885837669897")) * decimal.Parse("0.0000000304678260025")).ToString(), "(new Decimal(\"4.70885837669897\")).mul(\"0.0000000304678260025\").toString() == \"0.0000001434686776916788182810\" FAILED");

            Assert.AreEqual("0.0000061473669992779179347052", ((decimal.Parse("0.00000094580709000389")) / decimal.Parse("0.153855640978485")).ToString(), "(new Decimal(\"0.00000094580709000389\")).div(\"0.153855640978485\").toString() == \"0.0000061473669992779179347052\" FAILED");
            Assert.AreEqual("0.003314572249685679", ((decimal.Parse("0.000613740297785839")) + decimal.Parse("0.00270083195189984")).ToString(), "(new Decimal(\"0.000613740297785839\")).add(\"0.00270083195189984\").toString() == \"0.003314572249685679\" FAILED");
            Assert.AreEqual("68188.770830719145", ((decimal.Parse("68943.9000417217")) - decimal.Parse("755.129211002555")).ToString(), "(new Decimal(\"68943.9000417217\")).sub(\"755.129211002555\").toString() == \"68188.770830719145\" FAILED");
            Assert.AreEqual("0.0185139114429308061", ((decimal.Parse("0.0000109071683655061")) + decimal.Parse("0.0185030042745653")).ToString(), "(new Decimal(\"0.0000109071683655061\")).add(\"0.0185030042745653\").toString() == \"0.0185139114429308061\" FAILED");
            Assert.AreEqual("88.66685930292445486", ((decimal.Parse("0.00319345103725486")) + decimal.Parse("88.6636658518872")).ToString(), "(new Decimal(\"0.00319345103725486\")).add(\"88.6636658518872\").toString() == \"88.66685930292445486\" FAILED");
            Assert.AreEqual("0.00000478017811420382", ((decimal.Parse("0.00000776580248855325")) - decimal.Parse("0.00000298562437434943")).ToString(), "(new Decimal(\"0.00000776580248855325\")).sub(\"0.00000298562437434943\").toString() == \"0.00000478017811420382\" FAILED");
            Assert.AreEqual("0.3859582703495206", ((decimal.Parse("0.364325482567924")) + decimal.Parse("0.0216327877815966")).ToString(), "(new Decimal(\"0.364325482567924\")).add(\"0.0216327877815966\").toString() == \"0.3859582703495206\" FAILED");
            Assert.AreEqual("0.0107406507813914476055243271", ((decimal.Parse("0.00000696548845943319")) / decimal.Parse("0.000648516426164897")).ToString(), "(new Decimal(\"0.00000696548845943319\")).div(\"0.000648516426164897\").toString() == \"0.0107406507813914476055243271\" FAILED");
            Assert.AreEqual("-73.0557380282989268491", ((decimal.Parse("0.0000220559127731509")) - decimal.Parse("73.0557600842117")).ToString(), "(new Decimal(\"0.0000220559127731509\")).sub(\"73.0557600842117\").toString() == \"-73.0557380282989268491\" FAILED");
            Assert.AreEqual("0.00000195673171615076", ((decimal.Parse("0.00000148999663139228")) + decimal.Parse("0.00000046673508475848")).ToString(), "(new Decimal(\"0.00000148999663139228\")).add(\"0.00000046673508475848\").toString() == \"0.00000195673171615076\" FAILED");
            Assert.AreEqual("-838.010941593913", ((decimal.Parse("2.074972690118")) - decimal.Parse("840.085914284031")).ToString(), "(new Decimal(\"2.074972690118\")).sub(\"840.085914284031\").toString() == \"-838.010941593913\" FAILED");
            Assert.AreEqual("0.0000000010790590363188315712", ((decimal.Parse("0.00000059002973120195")) / decimal.Parse("546.800231815688")).ToString(), "(new Decimal(\"0.00000059002973120195\")).div(\"546.800231815688\").toString() == \"0.0000000010790590363188315712\" FAILED");
            Assert.AreEqual("0.0485027328186321794374224174", ((decimal.Parse("0.00000004584207597461")) * decimal.Parse("1058039.62380534")).ToString(), "(new Decimal(\"0.00000004584207597461\")).mul(\"1058039.62380534\").toString() == \"0.0485027328186321794374224174\" FAILED");
            Assert.AreEqual("214.85514206927846582617", ((decimal.Parse("214.855142037782")) + decimal.Parse("0.00000003149646582617")).ToString(), "(new Decimal(\"214.855142037782\")).add(\"0.00000003149646582617\").toString() == \"214.85514206927846582617\" FAILED");
            Assert.AreEqual("0.0001626068155301757850120131", ((decimal.Parse("0.000824154042091292")) / decimal.Parse("5.06838559874724")).ToString(), "(new Decimal(\"0.000824154042091292\")).div(\"5.06838559874724\").toString() == \"0.0001626068155301757850120131\" FAILED");
            Assert.AreEqual("20.9788078560985709559", ((decimal.Parse("20.9787698560296")) + decimal.Parse("0.0000380000689709559")).ToString(), "(new Decimal(\"20.9787698560296\")).add(\"0.0000380000689709559\").toString() == \"20.9788078560985709559\" FAILED");
            Assert.AreEqual("-81.88357175642793468", ((decimal.Parse("0.00617890391786532")) - decimal.Parse("81.8897506603458")).ToString(), "(new Decimal(\"0.00617890391786532\")).sub(\"81.8897506603458\").toString() == \"-81.88357175642793468\" FAILED");
            Assert.AreEqual("36.23358714435498025968", ((decimal.Parse("36.2335875333443")) - decimal.Parse("0.00000038898931974032")).ToString(), "(new Decimal(\"36.2335875333443\")).sub(\"0.00000038898931974032\").toString() == \"36.23358714435498025968\" FAILED");
            Assert.AreEqual("0.0013658861233129413838425724", ((decimal.Parse("0.00000000292342323946")) * decimal.Parse("467221.476820866")).ToString(), "(new Decimal(\"0.00000000292342323946\")).mul(\"467221.476820866\").toString() == \"0.0013658861233129413838425724\" FAILED");
            Assert.AreEqual("0.0000000074105712796113834889", ((decimal.Parse("0.000342916469715031")) / decimal.Parse("46273.958751128")).ToString(), "(new Decimal(\"0.000342916469715031\")).div(\"46273.958751128\").toString() == \"0.0000000074105712796113834889\" FAILED");
            Assert.AreEqual("472.3234209149721", ((decimal.Parse("476.05942677523")) - decimal.Parse("3.7360058602579")).ToString(), "(new Decimal(\"476.05942677523\")).sub(\"3.7360058602579\").toString() == \"472.3234209149721\" FAILED");
            Assert.AreEqual("8039026.45502754950084", ((decimal.Parse("9.76490417950084")) + decimal.Parse("8039016.69012337")).ToString(), "(new Decimal(\"9.76490417950084\")).add(\"8039016.69012337\").toString() == \"8039026.45502754950084\" FAILED");
            // #1650
            //Assert.AreEqual("40912917253931.602151150686830", ((decimal.Parse("9044513.99065764")) * decimal.Parse("4523506.43674075")).ToString(), "(new Decimal(\"9044513.99065764\")).mul(\"4523506.43674075\").toString() == \"40912917253931.602151150686830\" FAILED");

            Assert.AreEqual("-6914.3160116610779745959", ((decimal.Parse("0.0000627560420254041")) - decimal.Parse("6914.31607441712")).ToString(), "(new Decimal(\"0.0000627560420254041\")).sub(\"6914.31607441712\").toString() == \"-6914.3160116610779745959\" FAILED");
            Assert.AreEqual("22.802704082181585914", ((decimal.Parse("22.8028122907518")) - decimal.Parse("0.000108208570214086")).ToString(), "(new Decimal(\"22.8028122907518\")).sub(\"0.000108208570214086\").toString() == \"22.802704082181585914\" FAILED");
            Assert.AreEqual("788.3274362681265223337", ((decimal.Parse("788.327495468933")) - decimal.Parse("0.0000592008064776663")).ToString(), "(new Decimal(\"788.327495468933\")).sub(\"0.0000592008064776663\").toString() == \"788.3274362681265223337\" FAILED");
            Assert.AreEqual("1.6066068917914018575324895115", ((decimal.Parse("8866.23474250838")) / decimal.Parse("5518.60868256474")).ToString(), "(new Decimal(\"8866.23474250838\")).div(\"5518.60868256474\").toString() == \"1.6066068917914018575324895115\" FAILED");
            Assert.AreEqual("26.72254360394047261816", ((decimal.Parse("0.00000009113297261816")) + decimal.Parse("26.7225435128075")).ToString(), "(new Decimal(\"0.00000009113297261816\")).add(\"26.7225435128075\").toString() == \"26.72254360394047261816\" FAILED");
            Assert.AreEqual("0.0000324317078514770886275385", ((decimal.Parse("0.815985052760683")) * decimal.Parse("0.0000397454680594362")).ToString(), "(new Decimal(\"0.815985052760683\")).mul(\"0.0000397454680594362\").toString() == \"0.0000324317078514770886275385\" FAILED");
            Assert.AreEqual("52977.103193989012886457", ((decimal.Parse("0.000779760512886457")) + decimal.Parse("52977.1024142285")).ToString(), "(new Decimal(\"0.000779760512886457\")).add(\"52977.1024142285\").toString() == \"52977.103193989012886457\" FAILED");
            Assert.AreEqual("1913.0060727432645785740118483", ((decimal.Parse("126179.391576992")) / decimal.Parse("65.9586989162297")).ToString(), "(new Decimal(\"126179.391576992\")).div(\"65.9586989162297\").toString() == \"1913.0060727432645785740118483\" FAILED");
            Assert.AreEqual("770.923422558535548909", ((decimal.Parse("0.000830289780548909")) + decimal.Parse("770.922592268755")).ToString(), "(new Decimal(\"0.000830289780548909\")).add(\"770.922592268755\").toString() == \"770.923422558535548909\" FAILED");
            Assert.AreEqual("0.0000000000015660607711989182", ((decimal.Parse("0.00000279982820283614")) * decimal.Parse("0.00000055934173732965")).ToString(), "(new Decimal(\"0.00000279982820283614\")).mul(\"0.00000055934173732965\").toString() == \"0.0000000000015660607711989182\" FAILED");
            Assert.AreEqual("0.00000161712928522245", ((decimal.Parse("0.0000015461405746388")) + decimal.Parse("0.00000007098871058365")).ToString(), "(new Decimal(\"0.0000015461405746388\")).add(\"0.00000007098871058365\").toString() == \"0.00000161712928522245\" FAILED");
            Assert.AreEqual("4253730.76659763509554093941", ((decimal.Parse("0.00000428509554093941")) + decimal.Parse("4253730.76659335")).ToString(), "(new Decimal(\"0.00000428509554093941\")).add(\"4253730.76659335\").toString() == \"4253730.76659763509554093941\" FAILED");
            Assert.AreEqual("0.00008945709535687095", ((decimal.Parse("0.00000074108968849345")) + decimal.Parse("0.0000887160056683775")).ToString(), "(new Decimal(\"0.00000074108968849345\")).add(\"0.0000887160056683775\").toString() == \"0.00008945709535687095\" FAILED");
            Assert.AreEqual("60849.566901590769612814207798", ((decimal.Parse("4.50246398081186")) / decimal.Parse("0.0000739933611704006")).ToString(), "(new Decimal(\"4.50246398081186\")).div(\"0.0000739933611704006\").toString() == \"60849.566901590769612814207798\" FAILED");
            Assert.AreEqual("10025471.773941757", ((decimal.Parse("9073722.60423085")) + decimal.Parse("951749.169710907")).ToString(), "(new Decimal(\"9073722.60423085\")).add(\"951749.169710907\").toString() == \"10025471.773941757\" FAILED");
            Assert.AreEqual("6314.57694669888121625", ((decimal.Parse("6314.57190789029")) + decimal.Parse("0.00503880859121625")).ToString(), "(new Decimal(\"6314.57190789029\")).add(\"0.00503880859121625\").toString() == \"6314.57694669888121625\" FAILED");
            Assert.AreEqual("6410200.86892426925435156992", ((decimal.Parse("6410200.86892424")) + decimal.Parse("0.00000002925435156992")).ToString(), "(new Decimal(\"6410200.86892424\")).add(\"0.00000002925435156992\").toString() == \"6410200.86892426925435156992\" FAILED");
            Assert.AreEqual("-50365.02975549733950225974", ((decimal.Parse("0.00000903436049774026")) - decimal.Parse("50365.0297645317")).ToString(), "(new Decimal(\"0.00000903436049774026\")).sub(\"50365.0297645317\").toString() == \"-50365.02975549733950225974\" FAILED");
            Assert.AreEqual("706275.0020093632", ((decimal.Parse("773516.946366763")) - decimal.Parse("67241.9443573998")).ToString(), "(new Decimal(\"773516.946366763\")).sub(\"67241.9443573998\").toString() == \"706275.0020093632\" FAILED");
            Assert.AreEqual("-0.0007827090090991505", ((decimal.Parse("0.0000758509746174565")) - decimal.Parse("0.000858559983716607")).ToString(), "(new Decimal(\"0.0000758509746174565\")).sub(\"0.000858559983716607\").toString() == \"-0.0007827090090991505\" FAILED");
            Assert.AreEqual("2221.3994020682519670422887012", ((decimal.Parse("0.0072728559734639")) / decimal.Parse("0.00000327399744804669")).ToString(), "(new Decimal(\"0.0072728559734639\")).div(\"0.00000327399744804669\").toString() == \"2221.3994020682519670422887012\" FAILED");
            Assert.AreEqual("0.00797715439281503856", ((decimal.Parse("0.00000002090733708856")) + decimal.Parse("0.00797713348547795")).ToString(), "(new Decimal(\"0.00000002090733708856\")).add(\"0.00797713348547795\").toString() == \"0.00797715439281503856\" FAILED");
            Assert.AreEqual("0.0000000152803982254922538614", ((decimal.Parse("0.0000248115556430125")) * decimal.Parse("0.00061585812858113")).ToString(), "(new Decimal(\"0.0000248115556430125\")).mul(\"0.00061585812858113\").toString() == \"0.0000000152803982254922538614\" FAILED");
            Assert.AreEqual("0.0000000000661183382579908907", ((decimal.Parse("0.00000008056083325323")) * decimal.Parse("0.000820725600617344")).ToString(), "(new Decimal(\"0.00000008056083325323\")).mul(\"0.000820725600617344\").toString() == \"0.0000000000661183382579908907\" FAILED");
            Assert.AreEqual("-0.09307075335419262842", ((decimal.Parse("0.00000025804988167158")) - decimal.Parse("0.0930710114040743")).ToString(), "(new Decimal(\"0.00000025804988167158\")).sub(\"0.0930710114040743\").toString() == \"-0.09307075335419262842\" FAILED");
            Assert.AreEqual("0.04808529221801801214", ((decimal.Parse("0.0480862194896146")) - decimal.Parse("0.00000092727159658786")).ToString(), "(new Decimal(\"0.0480862194896146\")).sub(\"0.00000092727159658786\").toString() == \"0.04808529221801801214\" FAILED");
            Assert.AreEqual("19.1163499301375422", ((decimal.Parse("0.0380818105014422")) + decimal.Parse("19.0782681196361")).ToString(), "(new Decimal(\"0.0380818105014422\")).add(\"19.0782681196361\").toString() == \"19.1163499301375422\" FAILED");
            Assert.AreEqual("0.0029230064326764054146103005", ((decimal.Parse("0.00000030766995358638")) * decimal.Parse("9500.46112271979")).ToString(), "(new Decimal(\"0.00000030766995358638\")).mul(\"9500.46112271979\").toString() == \"0.0029230064326764054146103005\" FAILED");
            Assert.AreEqual("9220576.9255473874609941571388", ((decimal.Parse("8460272.38688444")) * decimal.Parse("1.08986761937377")).ToString(), "(new Decimal(\"8460272.38688444\")).mul(\"1.08986761937377\").toString() == \"9220576.9255473874609941571388\" FAILED");
            Assert.AreEqual("0.00054848860491686019", ((decimal.Parse("0.000548521232115348")) - decimal.Parse("0.00000003262719848781")).ToString(), "(new Decimal(\"0.000548521232115348\")).sub(\"0.00000003262719848781\").toString() == \"0.00054848860491686019\" FAILED");
            // #1650
            //Assert.AreEqual("0.0000000381173298826073792060", ((decimal.Parse("0.701377586322547")) * decimal.Parse("0.00000005434637579804")).ToString(), "(new Decimal(\"0.701377586322547\")).mul(\"0.00000005434637579804\").toString() == \"0.0000000381173298826073792060\" FAILED");

            Assert.AreEqual("700263936625.28684891174652716", ((decimal.Parse("6085116.43301934")) / decimal.Parse("0.00000868974698646448")).ToString(), "(new Decimal(\"6085116.43301934\")).div(\"0.00000868974698646448\").toString() == \"700263936625.28684891174652716\" FAILED");
            Assert.AreEqual("64.24562633156503374337", ((decimal.Parse("64.2456262671601")) + decimal.Parse("0.00000006440493374337")).ToString(), "(new Decimal(\"64.2456262671601\")).add(\"0.00000006440493374337\").toString() == \"64.24562633156503374337\" FAILED");
            Assert.AreEqual("0.00000074888137376349", ((decimal.Parse("0.00000079138978840382")) - decimal.Parse("0.00000004250841464033")).ToString(), "(new Decimal(\"0.00000079138978840382\")).sub(\"0.00000004250841464033\").toString() == \"0.00000074888137376349\" FAILED");
            Assert.AreEqual("0.0065667784902605879636671644", ((decimal.Parse("0.0068165044332")) * decimal.Parse("0.963364515436517")).ToString(), "(new Decimal(\"0.0068165044332\")).mul(\"0.963364515436517\").toString() == \"0.0065667784902605879636671644\" FAILED");
            Assert.AreEqual("369602.432796381529203", ((decimal.Parse("0.259988776529203")) + decimal.Parse("369602.172807605")).ToString(), "(new Decimal(\"0.259988776529203\")).add(\"369602.172807605\").toString() == \"369602.432796381529203\" FAILED");
            Assert.AreEqual("0.0039988533838646743", ((decimal.Parse("0.0000675051699706843")) + decimal.Parse("0.00393134821389399")).ToString(), "(new Decimal(\"0.0000675051699706843\")).add(\"0.00393134821389399\").toString() == \"0.0039988533838646743\" FAILED");
            Assert.AreEqual("0.1176639241828982721945349704", ((decimal.Parse("8668689.53158552")) * decimal.Parse("0.00000001357343849427")).ToString(), "(new Decimal(\"8668689.53158552\")).mul(\"0.00000001357343849427\").toString() == \"0.1176639241828982721945349704\" FAILED");
            Assert.AreEqual("0.3461079909540908953018615851", ((decimal.Parse("0.0000312284355197234")) / decimal.Parse("0.000090227432870412")).ToString(), "(new Decimal(\"0.0000312284355197234\")).div(\"0.000090227432870412\").toString() == \"0.3461079909540908953018615851\" FAILED");
            Assert.AreEqual("245.24585835344678889090583956", ((decimal.Parse("233330.174457901")) / decimal.Parse("951.413312438602")).ToString(), "(new Decimal(\"233330.174457901\")).div(\"951.413312438602\").toString() == \"245.24585835344678889090583956\" FAILED");
            Assert.AreEqual("1664628220.3605620253774984042", ((decimal.Parse("4790708.12686845")) / decimal.Parse("0.00287794479768628")).ToString(), "(new Decimal(\"4790708.12686845\")).div(\"0.00287794479768628\").toString() == \"1664628220.3605620253774984042\" FAILED");
            Assert.AreEqual("246613871.78242208656915520057", ((decimal.Parse("331493.556188184")) * decimal.Parse("743.947709325677")).ToString(), "(new Decimal(\"331493.556188184\")).mul(\"743.947709325677\").toString() == \"246613871.78242208656915520057\" FAILED");
            Assert.AreEqual("1207.9268535512635351310455273", ((decimal.Parse("1259.47609602449")) * decimal.Parse("0.959070884603574")).ToString(), "(new Decimal(\"1259.47609602449\")).mul(\"0.959070884603574\").toString() == \"1207.9268535512635351310455273\" FAILED");
            Assert.AreEqual("0.393178837592885421", ((decimal.Parse("0.393176919963759")) + decimal.Parse("0.000001917629126421")).ToString(), "(new Decimal(\"0.393176919963759\")).add(\"0.000001917629126421\").toString() == \"0.393178837592885421\" FAILED");
            Assert.AreEqual("397.1793180554543142", ((decimal.Parse("0.0851948050713142")) + decimal.Parse("397.094123250383")).ToString(), "(new Decimal(\"0.0851948050713142\")).add(\"397.094123250383\").toString() == \"397.1793180554543142\" FAILED");
            Assert.AreEqual("0.0003282039963622138325073925", ((decimal.Parse("4.38505906815876")) * decimal.Parse("0.0000748459692927291")).ToString(), "(new Decimal(\"4.38505906815876\")).mul(\"0.0000748459692927291\").toString() == \"0.0003282039963622138325073925\" FAILED");
            Assert.AreEqual("0.423324324993102", ((decimal.Parse("0.363335922995273")) + decimal.Parse("0.059988401997829")).ToString(), "(new Decimal(\"0.363335922995273\")).add(\"0.059988401997829\").toString() == \"0.423324324993102\" FAILED");
            Assert.AreEqual("10895.341807538831547999350349", ((decimal.Parse("0.00727318812500368")) / decimal.Parse("0.00000066755024793909")).ToString(), "(new Decimal(\"0.00727318812500368\")).div(\"0.00000066755024793909\").toString() == \"10895.341807538831547999350349\" FAILED");
            Assert.AreEqual("3388.3696656205705172969049326", ((decimal.Parse("0.00994605123994223")) * decimal.Parse("340674.865218194")).ToString(), "(new Decimal(\"0.00994605123994223\")).mul(\"340674.865218194\").toString() == \"3388.3696656205705172969049326\" FAILED");
            Assert.AreEqual("0.0141935145051432937033685765", ((decimal.Parse("545.87652978761")) / decimal.Parse("38459.5745887885")).ToString(), "(new Decimal(\"545.87652978761\")).div(\"38459.5745887885\").toString() == \"0.0141935145051432937033685765\" FAILED");
            Assert.AreEqual("0.0779477186180520150647853816", ((decimal.Parse("73907.2872204274")) / decimal.Parse("948164.853708895")).ToString(), "(new Decimal(\"73907.2872204274\")).div(\"948164.853708895\").toString() == \"0.0779477186180520150647853816\" FAILED");
            Assert.AreEqual("-561579.6279262661092", ((decimal.Parse("21.7019301008908")) - decimal.Parse("561601.329856367")).ToString(), "(new Decimal(\"21.7019301008908\")).sub(\"561601.329856367\").toString() == \"-561579.6279262661092\" FAILED");
            Assert.AreEqual("0.000009299200099480762053694", ((decimal.Parse("0.00000077988295712503")) / decimal.Parse("0.0838655958342671")).ToString(), "(new Decimal(\"0.00000077988295712503\")).div(\"0.0838655958342671\").toString() == \"0.000009299200099480762053694\" FAILED");
            Assert.AreEqual("0.0120314006051025781992414906", ((decimal.Parse("63.5544158814263")) / decimal.Parse("5282.37883247546")).ToString(), "(new Decimal(\"63.5544158814263\")).div(\"5282.37883247546\").toString() == \"0.0120314006051025781992414906\" FAILED");
            Assert.AreEqual("3.6151189261791396129", ((decimal.Parse("3.61511963587958")) - decimal.Parse("0.0000007097004403871")).ToString(), "(new Decimal(\"3.61511963587958\")).sub(\"0.0000007097004403871\").toString() == \"3.6151189261791396129\" FAILED");
            Assert.AreEqual("94217597633.241379272109185751", ((decimal.Parse("466425.827921566")) / decimal.Parse("0.00000495051709699934")).ToString(), "(new Decimal(\"466425.827921566\")).div(\"0.00000495051709699934\").toString() == \"94217597633.241379272109185751\" FAILED");
            Assert.AreEqual("705.645818421918175", ((decimal.Parse("706.5725502123")) - decimal.Parse("0.926731790381825")).ToString(), "(new Decimal(\"706.5725502123\")).sub(\"0.926731790381825\").toString() == \"705.645818421918175\" FAILED");
            Assert.AreEqual("528.8460503226362118", ((decimal.Parse("528.77783893085")) + decimal.Parse("0.0682113917862118")).ToString(), "(new Decimal(\"528.77783893085\")).add(\"0.0682113917862118\").toString() == \"528.8460503226362118\" FAILED");
            Assert.AreEqual("2587.55019575690444875", ((decimal.Parse("2587.55753868611")) - decimal.Parse("0.00734292920555125")).ToString(), "(new Decimal(\"2587.55753868611\")).sub(\"0.00734292920555125\").toString() == \"2587.55019575690444875\" FAILED");
            // #1650
            //Assert.AreEqual("0.0007832908360437819528979290", ((decimal.Parse("8.61752288817313")) * decimal.Parse("0.0000908951268488984")).ToString(), "(new Decimal(\"8.61752288817313\")).mul(\"0.0000908951268488984\").toString() == \"0.0007832908360437819528979290\" FAILED");

            Assert.AreEqual("85388.15485564442", ((decimal.Parse("91330.5146113646")) - decimal.Parse("5942.35975572018")).ToString(), "(new Decimal(\"91330.5146113646\")).sub(\"5942.35975572018\").toString() == \"85388.15485564442\" FAILED");
            Assert.AreEqual("0.0006005125566523128396843158", ((decimal.Parse("0.00754608521589361")) * decimal.Parse("0.0795793500168153")).ToString(), "(new Decimal(\"0.00754608521589361\")).mul(\"0.0795793500168153\").toString() == \"0.0006005125566523128396843158\" FAILED");
            Assert.AreEqual("1020.1981723776409731715", ((decimal.Parse("1020.19813424917")) + decimal.Parse("0.0000381284709731715")).ToString(), "(new Decimal(\"1020.19813424917\")).add(\"0.0000381284709731715\").toString() == \"1020.1981723776409731715\" FAILED");
            Assert.AreEqual("0.0025578204022461232891799586", ((decimal.Parse("874.749045295058")) / decimal.Parse("341990.017957049")).ToString(), "(new Decimal(\"874.749045295058\")).div(\"341990.017957049\").toString() == \"0.0025578204022461232891799586\" FAILED");
            Assert.AreEqual("1191.1626737619095274", ((decimal.Parse("0.0945538378295274")) + decimal.Parse("1191.06811992408")).ToString(), "(new Decimal(\"0.0945538378295274\")).add(\"1191.06811992408\").toString() == \"1191.1626737619095274\" FAILED");
            Assert.AreEqual("0.0000012723850728401263936405", ((decimal.Parse("0.00174284968606329")) * decimal.Parse("0.000730060132560348")).ToString(), "(new Decimal(\"0.00174284968606329\")).mul(\"0.000730060132560348\").toString() == \"0.0000012723850728401263936405\" FAILED");
            Assert.AreEqual("0.3878144949689754244652101063", ((decimal.Parse("0.0000886363427101804")) / decimal.Parse("0.000228553454963748")).ToString(), "(new Decimal(\"0.0000886363427101804\")).div(\"0.000228553454963748\").toString() == \"0.3878144949689754244652101063\" FAILED");
            Assert.AreEqual("0.6276545818966699448042492771", ((decimal.Parse("0.0088596635353098")) / decimal.Parse("0.0141155084195153")).ToString(), "(new Decimal(\"0.0088596635353098\")).div(\"0.0141155084195153\").toString() == \"0.6276545818966699448042492771\" FAILED");
            Assert.AreEqual("887642.763737621356332488", ((decimal.Parse("887642.763968391")) - decimal.Parse("0.000230769643667512")).ToString(), "(new Decimal(\"887642.763968391\")).sub(\"0.000230769643667512\").toString() == \"887642.763737621356332488\" FAILED");
            Assert.AreEqual("453198251.73558506995962676469", ((decimal.Parse("23004.7123148128")) / decimal.Parse("0.0000507608143383455")).ToString(), "(new Decimal(\"23004.7123148128\")).div(\"0.0000507608143383455\").toString() == \"453198251.73558506995962676469\" FAILED");
            Assert.AreEqual("83.7146957344276093754", ((decimal.Parse("83.7147017399383")) - decimal.Parse("0.0000060055106906246")).ToString(), "(new Decimal(\"83.7147017399383\")).sub(\"0.0000060055106906246\").toString() == \"83.7146957344276093754\" FAILED");
            Assert.AreEqual("87.63923156896568", ((decimal.Parse("4.66405350466448")) + decimal.Parse("82.9751780643012")).ToString(), "(new Decimal(\"4.66405350466448\")).add(\"82.9751780643012\").toString() == \"87.63923156896568\" FAILED");
            Assert.AreEqual("1347.836978065024006220719243", ((decimal.Parse("6808.9278446552")) / decimal.Parse("5.05174435444723")).ToString(), "(new Decimal(\"6808.9278446552\")).div(\"5.05174435444723\").toString() == \"1347.836978065024006220719243\" FAILED");
            Assert.AreEqual("7712816.5554913010058030163591", ((decimal.Parse("8813.68504316252")) / decimal.Parse("0.0011427323572071")).ToString(), "(new Decimal(\"8813.68504316252\")).div(\"0.0011427323572071\").toString() == \"7712816.5554913010058030163591\" FAILED");
            Assert.AreEqual("0.0066851887766319767409290909", ((decimal.Parse("0.00000007260315151541")) * decimal.Parse("92078.4929730364")).ToString(), "(new Decimal(\"0.00000007260315151541\")).mul(\"92078.4929730364\").toString() == \"0.0066851887766319767409290909\" FAILED");
            Assert.AreEqual("0.0000000121301184342453339116", ((decimal.Parse("0.00000009849602240068")) / decimal.Parse("8.11995554162187")).ToString(), "(new Decimal(\"0.00000009849602240068\")).div(\"8.11995554162187\").toString() == \"0.0000000121301184342453339116\" FAILED");
            Assert.AreEqual("0.3125741895189851492", ((decimal.Parse("0.312526527006424")) + decimal.Parse("0.0000476625125611492")).ToString(), "(new Decimal(\"0.312526527006424\")).add(\"0.0000476625125611492\").toString() == \"0.3125741895189851492\" FAILED");
            Assert.AreEqual("0.2038677468092889069882980431", ((decimal.Parse("18502.905787203")) / decimal.Parse("90759.3578522836")).ToString(), "(new Decimal(\"18502.905787203\")).div(\"90759.3578522836\").toString() == \"0.2038677468092889069882980431\" FAILED");
            Assert.AreEqual("0.0000000005559422081028409448", ((decimal.Parse("0.00000294573398909799")) / decimal.Parse("5298.63346614811")).ToString(), "(new Decimal(\"0.00000294573398909799\")).div(\"5298.63346614811\").toString() == \"0.0000000005559422081028409448\" FAILED");
            Assert.AreEqual("46411462.077440048464670213145", ((decimal.Parse("3090023.14838116")) / decimal.Parse("0.066578879657471")).ToString(), "(new Decimal(\"3090023.14838116\")).div(\"0.066578879657471\").toString() == \"46411462.077440048464670213145\" FAILED");
            Assert.AreEqual("0.000002581837802588014691071", ((decimal.Parse("0.00000043088218729519")) / decimal.Parse("0.166889719742765")).ToString(), "(new Decimal(\"0.00000043088218729519\")).div(\"0.166889719742765\").toString() == \"0.000002581837802588014691071\" FAILED");
            Assert.AreEqual("662563.86998257370710896", ((decimal.Parse("662563.871900814")) - decimal.Parse("0.00191824029289104")).ToString(), "(new Decimal(\"662563.871900814\")).sub(\"0.00191824029289104\").toString() == \"662563.86998257370710896\" FAILED");
            Assert.AreEqual("4.093541112069757865", ((decimal.Parse("4.09383642677862")) - decimal.Parse("0.000295314708862135")).ToString(), "(new Decimal(\"4.09383642677862\")).sub(\"0.000295314708862135\").toString() == \"4.093541112069757865\" FAILED");
            Assert.AreEqual("0.0519240351822827709748263872", ((decimal.Parse("17.4083959392311")) * decimal.Parse("0.00298270072461232")).ToString(), "(new Decimal(\"17.4083959392311\")).mul(\"0.00298270072461232\").toString() == \"0.0519240351822827709748263872\" FAILED");
            Assert.AreEqual("56614111357.238158837814773558", ((decimal.Parse("1775.79848178467")) / decimal.Parse("0.00000003136671121762")).ToString(), "(new Decimal(\"1775.79848178467\")).div(\"0.00000003136671121762\").toString() == \"56614111357.238158837814773558\" FAILED");
            Assert.AreEqual("0.18047320241517500632", ((decimal.Parse("0.00000057644597700632")) + decimal.Parse("0.180472625969198")).ToString(), "(new Decimal(\"0.00000057644597700632\")).add(\"0.180472625969198\").toString() == \"0.18047320241517500632\" FAILED");
            Assert.AreEqual("-0.00000014875716676412", ((decimal.Parse("0.0000002374956338841")) - decimal.Parse("0.00000038625280064822")).ToString(), "(new Decimal(\"0.0000002374956338841\")).sub(\"0.00000038625280064822\").toString() == \"-0.00000014875716676412\" FAILED");
            Assert.AreEqual("23421549.686072900974999649279", ((decimal.Parse("222.322416595333")) / decimal.Parse("0.00000949221633816707")).ToString(), "(new Decimal(\"222.322416595333\")).div(\"0.00000949221633816707\").toString() == \"23421549.686072900974999649279\" FAILED");
            Assert.AreEqual("3.871063458479728538175789638", ((decimal.Parse("0.0221267636037091")) / decimal.Parse("0.00571593926088695")).ToString(), "(new Decimal(\"0.0221267636037091\")).div(\"0.00571593926088695\").toString() == \"3.871063458479728538175789638\" FAILED");
            // #1650
            //Assert.AreEqual("16214.400846511121144041207000", ((decimal.Parse("7016.24042681243")) * decimal.Parse("2.31098136040893")).ToString(), "(new Decimal(\"7016.24042681243\")).mul(\"2.31098136040893\").toString() == \"16214.400846511121144041207000\" FAILED");

            Assert.AreEqual("0.0019490762786253018034972934", ((decimal.Parse("0.0681883810871227")) * decimal.Parse("0.0285837007353938")).ToString(), "(new Decimal(\"0.0681883810871227\")).mul(\"0.0285837007353938\").toString() == \"0.0019490762786253018034972934\" FAILED");
            Assert.AreEqual("1.157187581135514", ((decimal.Parse("0.85837511246017")) + decimal.Parse("0.298812468675344")).ToString(), "(new Decimal(\"0.85837511246017\")).add(\"0.298812468675344\").toString() == \"1.157187581135514\" FAILED");
            Assert.AreEqual("-5115293.869385163952", ((decimal.Parse("193.647991956048")) - decimal.Parse("5115487.51737712")).ToString(), "(new Decimal(\"193.647991956048\")).sub(\"5115487.51737712\").toString() == \"-5115293.869385163952\" FAILED");
            Assert.AreEqual("0.05504833553420386932", ((decimal.Parse("0.0550483308988848")) + decimal.Parse("0.00000000463531906932")).ToString(), "(new Decimal(\"0.0550483308988848\")).add(\"0.00000000463531906932\").toString() == \"0.05504833553420386932\" FAILED");
            Assert.AreEqual("0.0226105809476949110796916402", ((decimal.Parse("0.0000007991035286333")) * decimal.Parse("28294.9331813934")).ToString(), "(new Decimal(\"0.0000007991035286333\")).mul(\"28294.9331813934\").toString() == \"0.0226105809476949110796916402\" FAILED");
            Assert.AreEqual("0.0000430659364069161812657506", ((decimal.Parse("0.00000001163869482076")) / decimal.Parse("0.000270252914293787")).ToString(), "(new Decimal(\"0.00000001163869482076\")).div(\"0.000270252914293787\").toString() == \"0.0000430659364069161812657506\" FAILED");
            Assert.AreEqual("369.899752887384684", ((decimal.Parse("0.882389189620684")) + decimal.Parse("369.017363697764")).ToString(), "(new Decimal(\"0.882389189620684\")).add(\"369.017363697764\").toString() == \"369.899752887384684\" FAILED");
            Assert.AreEqual("820.35799529420065", ((decimal.Parse("826.882673346848")) - decimal.Parse("6.52467805264735")).ToString(), "(new Decimal(\"826.882673346848\")).sub(\"6.52467805264735\").toString() == \"820.35799529420065\" FAILED");
            Assert.AreEqual("8665.241919876656136", ((decimal.Parse("0.916831304746136")) + decimal.Parse("8664.32508857191")).ToString(), "(new Decimal(\"0.916831304746136\")).add(\"8664.32508857191\").toString() == \"8665.241919876656136\" FAILED");
            Assert.AreEqual("1113295905.5010739272635131771", ((decimal.Parse("3431.67145430654")) * decimal.Parse("324417.975416602")).ToString(), "(new Decimal(\"3431.67145430654\")).mul(\"324417.975416602\").toString() == \"1113295905.5010739272635131771\" FAILED");
            Assert.AreEqual("8694915.9254769790620115834586", ((decimal.Parse("7011684.364179")) / decimal.Parse("0.80641197962985")).ToString(), "(new Decimal(\"7011684.364179\")).div(\"0.80641197962985\").toString() == \"8694915.9254769790620115834586\" FAILED");
            Assert.AreEqual("2.9407816183171732729079339674", ((decimal.Parse("0.0000716280695384499")) * decimal.Parse("41056.2735707761")).ToString(), "(new Decimal(\"0.0000716280695384499\")).mul(\"41056.2735707761\").toString() == \"2.9407816183171732729079339674\" FAILED");
            Assert.AreEqual("0.1127935794278807392120038243", ((decimal.Parse("80.8113612145238")) / decimal.Parse("716.453557236331")).ToString(), "(new Decimal(\"80.8113612145238\")).div(\"716.453557236331\").toString() == \"0.1127935794278807392120038243\" FAILED");
            Assert.AreEqual("89526454.180026033061583476631", ((decimal.Parse("721.107919570575")) / decimal.Parse("0.0000080546909421937")).ToString(), "(new Decimal(\"721.107919570575\")).div(\"0.0000080546909421937\").toString() == \"89526454.180026033061583476631\" FAILED");
            Assert.AreEqual("-0.00000401257101493542", ((decimal.Parse("0.00000087664416240372")) - decimal.Parse("0.00000488921517733914")).ToString(), "(new Decimal(\"0.00000087664416240372\")).sub(\"0.00000488921517733914\").toString() == \"-0.00000401257101493542\" FAILED");
            Assert.AreEqual("1404309.5339384196562537720212", ((decimal.Parse("2861249.48079756")) * decimal.Parse("0.49080289690327")).ToString(), "(new Decimal(\"2861249.48079756\")).mul(\"0.49080289690327\").toString() == \"1404309.5339384196562537720212\" FAILED");
            Assert.AreEqual("11.799501757305484838541059295", ((decimal.Parse("0.329140784372175")) * decimal.Parse("35.8494064471914")).ToString(), "(new Decimal(\"0.329140784372175\")).mul(\"35.8494064471914\").toString() == \"11.799501757305484838541059295\" FAILED");
            Assert.AreEqual("86.579050768902069", ((decimal.Parse("0.887126708350669")) + decimal.Parse("85.6919240605514")).ToString(), "(new Decimal(\"0.887126708350669\")).add(\"85.6919240605514\").toString() == \"86.579050768902069\" FAILED");
            Assert.AreEqual("0.0000000000066113860385206571", ((decimal.Parse("0.00000005458257806235")) / decimal.Parse("8255.84495358907")).ToString(), "(new Decimal(\"0.00000005458257806235\")).div(\"8255.84495358907\").toString() == \"0.0000000000066113860385206571\" FAILED");
            Assert.AreEqual("265.78810758325215556973", ((decimal.Parse("265.788107768534")) - decimal.Parse("0.00000018528184443027")).ToString(), "(new Decimal(\"265.788107768534\")).sub(\"0.00000018528184443027\").toString() == \"265.78810758325215556973\" FAILED");
            Assert.AreEqual("36432462024050.335938886839157", ((decimal.Parse("668461.556857667")) / decimal.Parse("0.00000001834796551538")).ToString(), "(new Decimal(\"668461.556857667\")).div(\"0.00000001834796551538\").toString() == \"36432462024050.335938886839157\" FAILED");
            Assert.AreEqual("0.6342358100146685424", ((decimal.Parse("0.634302762632399")) - decimal.Parse("0.0000669526177304576")).ToString(), "(new Decimal(\"0.634302762632399\")).sub(\"0.0000669526177304576\").toString() == \"0.6342358100146685424\" FAILED");
            Assert.AreEqual("1.926773046574916", ((decimal.Parse("1.00043254485374")) + decimal.Parse("0.926340501721176")).ToString(), "(new Decimal(\"1.00043254485374\")).add(\"0.926340501721176\").toString() == \"1.926773046574916\" FAILED");
            Assert.AreEqual("-1041.94303693225454352791", ((decimal.Parse("0.00000329803545647209")) - decimal.Parse("1041.94304023029")).ToString(), "(new Decimal(\"0.00000329803545647209\")).sub(\"1041.94304023029\").toString() == \"-1041.94303693225454352791\" FAILED");
            Assert.AreEqual("1.7320645654257663", ((decimal.Parse("0.0218895030309863")) + decimal.Parse("1.71017506239478")).ToString(), "(new Decimal(\"0.0218895030309863\")).add(\"1.71017506239478\").toString() == \"1.7320645654257663\" FAILED");
            Assert.AreEqual("6.2932320008966984549725959605", ((decimal.Parse("0.00000850892723934209")) * decimal.Parse("739603.456919828")).ToString(), "(new Decimal(\"0.00000850892723934209\")).mul(\"739603.456919828\").toString() == \"6.2932320008966984549725959605\" FAILED");
            Assert.AreEqual("-41970.90431835076483", ((decimal.Parse("5.53383796733517")) - decimal.Parse("41976.4381563181")).ToString(), "(new Decimal(\"5.53383796733517\")).sub(\"41976.4381563181\").toString() == \"-41970.90431835076483\" FAILED");
            Assert.AreEqual("-3233365.007464948276", ((decimal.Parse("428.763072671724")) - decimal.Parse("3233793.77053762")).ToString(), "(new Decimal(\"428.763072671724\")).sub(\"3233793.77053762\").toString() == \"-3233365.007464948276\" FAILED");
            Assert.AreEqual("0.0000002451461856604290637149", ((decimal.Parse("0.00000003885374662413")) * decimal.Parse("6.3094606559302")).ToString(), "(new Decimal(\"0.00000003885374662413\")).mul(\"6.3094606559302\").toString() == \"0.0000002451461856604290637149\" FAILED");
            Assert.AreEqual("28932456.422151199951443781242", ((decimal.Parse("948527.350532137")) / decimal.Parse("0.0327841969825254")).ToString(), "(new Decimal(\"948527.350532137\")).div(\"0.0327841969825254\").toString() == \"28932456.422151199951443781242\" FAILED");
            Assert.AreEqual("-39125.788708948956168359", ((decimal.Parse("0.000126452543831641")) - decimal.Parse("39125.7888354015")).ToString(), "(new Decimal(\"0.000126452543831641\")).sub(\"39125.7888354015\").toString() == \"-39125.788708948956168359\" FAILED");
            Assert.AreEqual("1.3468627933517452321593950195", ((decimal.Parse("228915.375763977")) * decimal.Parse("0.00000588367115514524")).ToString(), "(new Decimal(\"228915.375763977\")).mul(\"0.00000588367115514524\").toString() == \"1.3468627933517452321593950195\" FAILED");
            Assert.AreEqual("39277185.990111339554907687023", ((decimal.Parse("49193.1172782523")) * decimal.Parse("798.428482747836")).ToString(), "(new Decimal(\"49193.1172782523\")).mul(\"798.428482747836\").toString() == \"39277185.990111339554907687023\" FAILED");
            Assert.AreEqual("0.0000000000000581563489873426", ((decimal.Parse("0.00000052592187771849")) * decimal.Parse("0.00000011057982459226")).ToString(), "(new Decimal(\"0.00000052592187771849\")).mul(\"0.00000011057982459226\").toString() == \"0.0000000000000581563489873426\" FAILED");
            Assert.AreEqual("61797.5944984525442125", ((decimal.Parse("61797.5818746712")) + decimal.Parse("0.0126237813442125")).ToString(), "(new Decimal(\"61797.5818746712\")).add(\"0.0126237813442125\").toString() == \"61797.5944984525442125\" FAILED");
            Assert.AreEqual("198024.145522724504", ((decimal.Parse("198087.806439999")) - decimal.Parse("63.660917274496")).ToString(), "(new Decimal(\"198087.806439999\")).sub(\"63.660917274496\").toString() == \"198024.145522724504\" FAILED");
            Assert.AreEqual("-3200.88940770525903322953", ((decimal.Parse("0.00000982426096677047")) - decimal.Parse("3200.88941752952")).ToString(), "(new Decimal(\"0.00000982426096677047\")).sub(\"3200.88941752952\").toString() == \"-3200.88940770525903322953\" FAILED");
            Assert.AreEqual("5.676451351339672665", ((decimal.Parse("0.000242386010122665")) + decimal.Parse("5.67620896532955")).ToString(), "(new Decimal(\"0.000242386010122665\")).add(\"5.67620896532955\").toString() == \"5.676451351339672665\" FAILED");
            Assert.AreEqual("0.0000000776963950158088336964", ((decimal.Parse("0.00000055833457250071")) * decimal.Parse("0.139157413569818")).ToString(), "(new Decimal(\"0.00000055833457250071\")).mul(\"0.139157413569818\").toString() == \"0.0000000776963950158088336964\" FAILED");
            Assert.AreEqual("5854.1561337260278061898964648", ((decimal.Parse("0.000561036967933661")) / decimal.Parse("0.0000000958356687314")).ToString(), "(new Decimal(\"0.000561036967933661\")).div(\"0.0000000958356687314\").toString() == \"5854.1561337260278061898964648\" FAILED");
            Assert.AreEqual("0.0000000000328245876850082616", ((decimal.Parse("0.00000084970553864246")) / decimal.Parse("25886.2516963325")).ToString(), "(new Decimal(\"0.00000084970553864246\")).div(\"25886.2516963325\").toString() == \"0.0000000000328245876850082616\" FAILED");
            Assert.AreEqual("98.5771713864016781651", ((decimal.Parse("0.0000315344957781651")) + decimal.Parse("98.5771398519059")).ToString(), "(new Decimal(\"0.0000315344957781651\")).add(\"98.5771398519059\").toString() == \"98.5771713864016781651\" FAILED");
            Assert.AreEqual("3769.4758721824018394019909083", ((decimal.Parse("0.355002424845007")) / decimal.Parse("0.0000941781926407377")).ToString(), "(new Decimal(\"0.355002424845007\")).div(\"0.0000941781926407377\").toString() == \"3769.4758721824018394019909083\" FAILED");
            Assert.AreEqual("0.34233483194482226", ((decimal.Parse("0.347713165147096")) - decimal.Parse("0.00537833320227374")).ToString(), "(new Decimal(\"0.347713165147096\")).sub(\"0.00537833320227374\").toString() == \"0.34233483194482226\" FAILED");
            Assert.AreEqual("2450696.875882343227315", ((decimal.Parse("2450696.35214782")) + decimal.Parse("0.523734523227315")).ToString(), "(new Decimal(\"2450696.35214782\")).add(\"0.523734523227315\").toString() == \"2450696.875882343227315\" FAILED");
            Assert.AreEqual("0.0000000000078351005114308196", ((decimal.Parse("0.00000050161292520427")) / decimal.Parse("64021.2495643744")).ToString(), "(new Decimal(\"0.00000050161292520427\")).div(\"64021.2495643744\").toString() == \"0.0000000000078351005114308196\" FAILED");
            Assert.AreEqual("-6281.22716877027720895884", ((decimal.Parse("0.00000091908279104116")) - decimal.Parse("6281.22716968936")).ToString(), "(new Decimal(\"0.00000091908279104116\")).sub(\"6281.22716968936\").toString() == \"-6281.22716877027720895884\" FAILED");
            Assert.AreEqual("0.0519401725231857052", ((decimal.Parse("0.0000851479899069052")) + decimal.Parse("0.0518550245332788")).ToString(), "(new Decimal(\"0.0000851479899069052\")).add(\"0.0518550245332788\").toString() == \"0.0519401725231857052\" FAILED");
            Assert.AreEqual("0.00009138627400546624", ((decimal.Parse("0.00000002975221119344")) + decimal.Parse("0.0000913565217942728")).ToString(), "(new Decimal(\"0.00000002975221119344\")).add(\"0.0000913565217942728\").toString() == \"0.00009138627400546624\" FAILED");
            Assert.AreEqual("0.0927168588963668332272999205", ((decimal.Parse("0.00000086909218266098")) / decimal.Parse("0.00000937361546762922")).ToString(), "(new Decimal(\"0.00000086909218266098\")).div(\"0.00000937361546762922\").toString() == \"0.0927168588963668332272999205\" FAILED");
            Assert.AreEqual("40553324.964360422490740452752", ((decimal.Parse("7678.32436025065")) * decimal.Parse("5281.53319157731")).ToString(), "(new Decimal(\"7678.32436025065\")).mul(\"5281.53319157731\").toString() == \"40553324.964360422490740452752\" FAILED");
            Assert.AreEqual("8581024.565256312363397899", ((decimal.Parse("8581024.56600453")) - decimal.Parse("0.000748217636602101")).ToString(), "(new Decimal(\"8581024.56600453\")).sub(\"0.000748217636602101\").toString() == \"8581024.565256312363397899\" FAILED");
            // #1650
            //Assert.AreEqual("0.0344964205226649308283349310", ((decimal.Parse("0.0000244098234104038")) * decimal.Parse("1413.21876617764")).ToString(), "(new Decimal(\"0.0000244098234104038\")).mul(\"1413.21876617764\").toString() == \"0.0344964205226649308283349310\" FAILED");

            Assert.AreEqual("-0.00144899793000472471", ((decimal.Parse("0.00000002482942213529")) - decimal.Parse("0.00144902275942686")).ToString(), "(new Decimal(\"0.00000002482942213529\")).sub(\"0.00144902275942686\").toString() == \"-0.00144899793000472471\" FAILED");
            Assert.AreEqual("0.0145830863052812570331711621", ((decimal.Parse("0.000910689151338623")) / decimal.Parse("0.0624483139079289")).ToString(), "(new Decimal(\"0.000910689151338623\")).div(\"0.0624483139079289\").toString() == \"0.0145830863052812570331711621\" FAILED");
            Assert.AreEqual("131248.684342948329262", ((decimal.Parse("131248.713532113")) - decimal.Parse("0.029189164670738")).ToString(), "(new Decimal(\"131248.713532113\")).sub(\"0.029189164670738\").toString() == \"131248.684342948329262\" FAILED");
            Assert.AreEqual("5019.003774030302274918", ((decimal.Parse("0.000344105692274918")) + decimal.Parse("5019.00342992461")).ToString(), "(new Decimal(\"0.000344105692274918\")).add(\"5019.00342992461\").toString() == \"5019.003774030302274918\" FAILED");
            Assert.AreEqual("0.0000000000714590274185505401", ((decimal.Parse("0.000617910423603798")) / decimal.Parse("8647058.96407695")).ToString(), "(new Decimal(\"0.000617910423603798\")).div(\"8647058.96407695\").toString() == \"0.0000000000714590274185505401\" FAILED");
            Assert.AreEqual("890433.23457508275525883108", ((decimal.Parse("890433.234577269")) - decimal.Parse("0.00000218624474116892")).ToString(), "(new Decimal(\"890433.234577269\")).sub(\"0.00000218624474116892\").toString() == \"890433.23457508275525883108\" FAILED");
            Assert.AreEqual("0.0000043469111168706293851817", ((decimal.Parse("7.7632498637602")) / decimal.Parse("1785923.30393657")).ToString(), "(new Decimal(\"7.7632498637602\")).div(\"1785923.30393657\").toString() == \"0.0000043469111168706293851817\" FAILED");
            Assert.AreEqual("0.0003295105776320145972457301", ((decimal.Parse("5613.03226538609")) * decimal.Parse("0.00000005870455790251")).ToString(), "(new Decimal(\"5613.03226538609\")).mul(\"0.00000005870455790251\").toString() == \"0.0003295105776320145972457301\" FAILED");
            Assert.AreEqual("6769150.5330613094858", ((decimal.Parse("6769137.76284509")) + decimal.Parse("12.7702162194858")).ToString(), "(new Decimal(\"6769137.76284509\")).add(\"12.7702162194858\").toString() == \"6769150.5330613094858\" FAILED");
            Assert.AreEqual("3245807.691775637069", ((decimal.Parse("987.946705887069")) + decimal.Parse("3244819.74506975")).ToString(), "(new Decimal(\"987.946705887069\")).add(\"3244819.74506975\").toString() == \"3245807.691775637069\" FAILED");
            Assert.AreEqual("373.6556954120196391427", ((decimal.Parse("0.0000970930446391427")) + decimal.Parse("373.655598318975")).ToString(), "(new Decimal(\"0.0000970930446391427\")).add(\"373.655598318975\").toString() == \"373.6556954120196391427\" FAILED");
            Assert.AreEqual("-0.02061165320041153501", ((decimal.Parse("0.00000085500743326499")) - decimal.Parse("0.0206125082078448")).ToString(), "(new Decimal(\"0.00000085500743326499\")).sub(\"0.0206125082078448\").toString() == \"-0.02061165320041153501\" FAILED");
            Assert.AreEqual("0.0000008709359977812961424188", ((decimal.Parse("0.00000001982638995155")) * decimal.Parse("43.9281180239879")).ToString(), "(new Decimal(\"0.00000001982638995155\")).mul(\"43.9281180239879\").toString() == \"0.0000008709359977812961424188\" FAILED");
            Assert.AreEqual("544246.62011017191540368", ((decimal.Parse("544246.617026742")) + decimal.Parse("0.00308342991540368")).ToString(), "(new Decimal(\"544246.617026742\")).add(\"0.00308342991540368\").toString() == \"544246.62011017191540368\" FAILED");
            Assert.AreEqual("51.73313984431529452496", ((decimal.Parse("51.7331402989724")) - decimal.Parse("0.00000045465710547504")).ToString(), "(new Decimal(\"51.7331402989724\")).sub(\"0.00000045465710547504\").toString() == \"51.73313984431529452496\" FAILED");
            Assert.AreEqual("0.000000000046298846889617716", ((decimal.Parse("0.000107662315064884")) / decimal.Parse("2325377.89378566")).ToString(), "(new Decimal(\"0.000107662315064884\")).div(\"2325377.89378566\").toString() == \"0.000000000046298846889617716\" FAILED");
            Assert.AreEqual("18572.0885521773395175914", ((decimal.Parse("18572.0885258969")) + decimal.Parse("0.0000262804395175914")).ToString(), "(new Decimal(\"18572.0885258969\")).add(\"0.0000262804395175914\").toString() == \"18572.0885521773395175914\" FAILED");
            Assert.AreEqual("0.0000027531871725364104883308", ((decimal.Parse("5.44742788907486")) * decimal.Parse("0.00000050541048520497")).ToString(), "(new Decimal(\"5.44742788907486\")).mul(\"0.00000050541048520497\").toString() == \"0.0000027531871725364104883308\" FAILED");
            Assert.AreEqual("-12716.27520800453493739", ((decimal.Parse("0.00937844566506261")) - decimal.Parse("12716.2845864502")).ToString(), "(new Decimal(\"0.00937844566506261\")).sub(\"12716.2845864502\").toString() == \"-12716.27520800453493739\" FAILED");
            Assert.AreEqual("0.0000000003087983018261781959", ((decimal.Parse("0.000613210929377568")) * decimal.Parse("0.00000050357599160801")).ToString(), "(new Decimal(\"0.000613210929377568\")).mul(\"0.00000050357599160801\").toString() == \"0.0000000003087983018261781959\" FAILED");
            Assert.AreEqual("102.32918883824198403740845781", ((decimal.Parse("9.79164098845406")) / decimal.Parse("0.095687663506571")).ToString(), "(new Decimal(\"9.79164098845406\")).div(\"0.095687663506571\").toString() == \"102.32918883824198403740845781\" FAILED");
            Assert.AreEqual("9928.1819875610465252535811176", ((decimal.Parse("3509.39318701131")) * decimal.Parse("2.82903096304696")).ToString(), "(new Decimal(\"3509.39318701131\")).mul(\"2.82903096304696\").toString() == \"9928.1819875610465252535811176\" FAILED");
            Assert.AreEqual("0.005761883809120339", ((decimal.Parse("0.00550658921501906")) + decimal.Parse("0.000255294594101279")).ToString(), "(new Decimal(\"0.00550658921501906\")).add(\"0.000255294594101279\").toString() == \"0.005761883809120339\" FAILED");
            Assert.AreEqual("-0.00000018726902063344", ((decimal.Parse("0.00000003774064715846")) - decimal.Parse("0.0000002250096677919")).ToString(), "(new Decimal(\"0.00000003774064715846\")).sub(\"0.0000002250096677919\").toString() == \"-0.00000018726902063344\" FAILED");
            Assert.AreEqual("0.0000176594645959884060957208", ((decimal.Parse("0.000982163002706209")) * decimal.Parse("0.0179801769638342")).ToString(), "(new Decimal(\"0.000982163002706209\")).mul(\"0.0179801769638342\").toString() == \"0.0000176594645959884060957208\" FAILED");
            Assert.AreEqual("-0.60567620163151359006", ((decimal.Parse("0.00000156584160940994")) - decimal.Parse("0.605677767473123")).ToString(), "(new Decimal(\"0.00000156584160940994\")).sub(\"0.605677767473123\").toString() == \"-0.60567620163151359006\" FAILED");
            Assert.AreEqual("-14377.8227241141224", ((decimal.Parse("83.8072135037776")) - decimal.Parse("14461.6299376179")).ToString(), "(new Decimal(\"83.8072135037776\")).sub(\"14461.6299376179\").toString() == \"-14377.8227241141224\" FAILED");
            Assert.AreEqual("82431.57192252187505207205", ((decimal.Parse("0.00000005587505207205")) + decimal.Parse("82431.571922466")).ToString(), "(new Decimal(\"0.00000005587505207205\")).add(\"82431.571922466\").toString() == \"82431.57192252187505207205\" FAILED");
            Assert.AreEqual("7479590.99871805918841", ((decimal.Parse("7479600.39762761")) - decimal.Parse("9.39890955081159")).ToString(), "(new Decimal(\"7479600.39762761\")).sub(\"9.39890955081159\").toString() == \"7479590.99871805918841\" FAILED");
            Assert.AreEqual("0.85300160231268362844", ((decimal.Parse("0.00000060434978762844")) + decimal.Parse("0.853000997962896")).ToString(), "(new Decimal(\"0.00000060434978762844\")).add(\"0.853000997962896\").toString() == \"0.85300160231268362844\" FAILED");
            Assert.AreEqual("56119.27283704670739007136", ((decimal.Parse("56119.2728374709")) - decimal.Parse("0.00000042419260992864")).ToString(), "(new Decimal(\"56119.2728374709\")).sub(\"0.00000042419260992864\").toString() == \"56119.27283704670739007136\" FAILED");
            // #1650
            //Assert.AreEqual("0.0000000000429259949352215200", ((decimal.Parse("0.00000008143559702739")) * decimal.Parse("0.000527115862130707")).ToString(), "(new Decimal(\"0.00000008143559702739\")).mul(\"0.000527115862130707\").toString() == \"0.0000000000429259949352215200\" FAILED");

            Assert.AreEqual("0.0002210184665192469105090427", ((decimal.Parse("0.177999768954702")) / decimal.Parse("805.361523667984")).ToString(), "(new Decimal(\"0.177999768954702\")).div(\"805.361523667984\").toString() == \"0.0002210184665192469105090427\" FAILED");
            Assert.AreEqual("402.38051609824775058238", ((decimal.Parse("0.00000008959675058238")) + decimal.Parse("402.380516008651")).ToString(), "(new Decimal(\"0.00000008959675058238\")).add(\"402.380516008651\").toString() == \"402.38051609824775058238\" FAILED");
            Assert.AreEqual("1157.9235974952320582596435131", ((decimal.Parse("3201536.39800918")) * decimal.Parse("0.000361677474045045")).ToString(), "(new Decimal(\"3201536.39800918\")).mul(\"0.000361677474045045\").toString() == \"1157.9235974952320582596435131\" FAILED");
            Assert.AreEqual("596105387691.24201370458414998", ((decimal.Parse("9903407.65095475")) * decimal.Parse("60191.9469238221")).ToString(), "(new Decimal(\"9903407.65095475\")).mul(\"60191.9469238221\").toString() == \"596105387691.24201370458414998\" FAILED");
            Assert.AreEqual("159156.866445745", ((decimal.Parse("293261.767501599")) - decimal.Parse("134104.901055854")).ToString(), "(new Decimal(\"293261.767501599\")).sub(\"134104.901055854\").toString() == \"159156.866445745\" FAILED");
            Assert.AreEqual("25483.063870515866677174995489", ((decimal.Parse("0.0000990216107103143")) / decimal.Parse("0.000000003885781208")).ToString(), "(new Decimal(\"0.0000990216107103143\")).div(\"0.000000003885781208\").toString() == \"25483.063870515866677174995489\" FAILED");
            Assert.AreEqual("273.43581025760547419975195832", ((decimal.Parse("0.504111655756883")) * decimal.Parse("542.411204214399")).ToString(), "(new Decimal(\"0.504111655756883\")).mul(\"542.411204214399\").toString() == \"273.43581025760547419975195832\" FAILED");
            Assert.AreEqual("0.0000054983344821540025900927", ((decimal.Parse("0.00000002588138930773")) * decimal.Parse("212.443559995128")).ToString(), "(new Decimal(\"0.00000002588138930773\")).mul(\"212.443559995128\").toString() == \"0.0000054983344821540025900927\" FAILED");
            Assert.AreEqual("0.0401243778893816891004378948", ((decimal.Parse("0.00000005520699944124")) / decimal.Parse("0.00000137589670781786")).ToString(), "(new Decimal(\"0.00000005520699944124\")).div(\"0.00000137589670781786\").toString() == \"0.0401243778893816891004378948\" FAILED");
            Assert.AreEqual("0.00005649102308903403", ((decimal.Parse("0.000056398253821022")) + decimal.Parse("0.00000009276926801203")).ToString(), "(new Decimal(\"0.000056398253821022\")).add(\"0.00000009276926801203\").toString() == \"0.00005649102308903403\" FAILED");
            Assert.AreEqual("1217.5521632644127050450346182", ((decimal.Parse("0.0854362290750426")) / decimal.Parse("0.0000701704876824145")).ToString(), "(new Decimal(\"0.0854362290750426\")).div(\"0.0000701704876824145\").toString() == \"1217.5521632644127050450346182\" FAILED");
            Assert.AreEqual("0.0000000000022138852190770639", ((decimal.Parse("0.00000001968172030509")) / decimal.Parse("8890.12679405982")).ToString(), "(new Decimal(\"0.00000001968172030509\")).div(\"8890.12679405982\").toString() == \"0.0000000000022138852190770639\" FAILED");
            Assert.AreEqual("0.00004304147600337928", ((decimal.Parse("0.00000665923518438788")) + decimal.Parse("0.0000363822408189914")).ToString(), "(new Decimal(\"0.00000665923518438788\")).add(\"0.0000363822408189914\").toString() == \"0.00004304147600337928\" FAILED");
            Assert.AreEqual("0.84670431087102625289", ((decimal.Parse("0.846703634525977")) + decimal.Parse("0.00000067634504925289")).ToString(), "(new Decimal(\"0.846703634525977\")).add(\"0.00000067634504925289\").toString() == \"0.84670431087102625289\" FAILED");
            Assert.AreEqual("0.095390208997479793", ((decimal.Parse("0.0963102136721417")) - decimal.Parse("0.000920004674661907")).ToString(), "(new Decimal(\"0.0963102136721417\")).sub(\"0.000920004674661907\").toString() == \"0.095390208997479793\" FAILED");
            Assert.AreEqual("-0.00981694733288462955", ((decimal.Parse("0.00000990941151041045")) - decimal.Parse("0.00982685674439504")).ToString(), "(new Decimal(\"0.00000990941151041045\")).sub(\"0.00982685674439504\").toString() == \"-0.00981694733288462955\" FAILED");
            Assert.AreEqual("-0.00000990941151041045", (-decimal.Parse("0.00000990941151041045")).ToString(), "new Decimal(\"0.00000990941151041045\").neg().toString() == \"-0.00000990941151041045\" FAILED");
            Assert.AreEqual("0.00000990941151041045", (-decimal.Parse("-0.00000990941151041045")).ToString(), "new Decimal(\"-0.00000990941151041045\").neg().toString() == \"0.00000990941151041045\" FAILED");
            Assert.AreEqual("-544246.617026742", (-decimal.Parse("544246.617026742")).ToString(), "(new Decimal(\"544246.617026742\")).neg().toString() == \"-544246.617026742\" FAILED");
            Assert.AreEqual("544246.617026742", (-decimal.Parse("-544246.617026742")).ToString(), "(new Decimal(\"-544246.617026742\")).neg().toString() == \"544246.617026742\" FAILED");
            // #1588
            Assert.AreEqual("0", (-decimal.Parse("0")).ToString(), "(new Decimal(\"0\")).neg().toString() == \"0\" FAILED");

            Assert.AreEqual("0.8", (decimal.Parse("254.9") % decimal.Parse("12.1")).ToString(), "254.9 % 12.1");
            Assert.AreEqual("-0.8", (decimal.Parse("-254.9") % decimal.Parse("12.1")).ToString(), "-254.9 % 12.1");
            Assert.AreEqual("0.8", (decimal.Parse("254.9") % decimal.Parse("-12.1")).ToString(), "254.9 % -12.1");
            Assert.AreEqual("-0.8", (decimal.Parse("-254.9") % decimal.Parse("-12.1")).ToString(), "-254.9 % -12.1");
            Assert.AreEqual("12.1", (decimal.Parse("12.1") % decimal.Parse("254.9")).ToString(), "12.1 % 254.9");
            Assert.AreEqual("-12.1", (decimal.Parse("-12.1") % decimal.Parse("254.9")).ToString(), "-12.1 % 254.9");
            Assert.AreEqual("12.1", (decimal.Parse("12.1") % decimal.Parse("-254.9")).ToString(), "12.1 % -254.9");
            Assert.AreEqual("-12.1", (decimal.Parse("-12.1") % decimal.Parse("-254.9")).ToString(), "-12.1 % -254.9");
            Assert.AreEqual("0", (decimal.Parse("254.9") % decimal.Parse("254.9")).ToString(), "12.1 % 12.1");
            Assert.AreEqual("0", (decimal.Parse("-254.9") % decimal.Parse("254.9")).ToString(), "-12.1 % 12.1");
            Assert.AreEqual("0", (decimal.Parse("254.9") % decimal.Parse("-254.9")).ToString(), "12.1 % -12.1");
            Assert.AreEqual("0", (decimal.Parse("-254.9") % decimal.Parse("-254.9")).ToString(), "-12.1 % -12.1");

            Assert.AreEqual("0", decimal.Truncate(decimal.Parse(".9")).ToString(), "(new Decimal(\".9\").trunc() == \"0\" FAILED");
            Assert.AreEqual("0", decimal.Truncate(decimal.Parse(".999")).ToString(), "(new Decimal(\".999\").trunc() == \"0\" FAILED");
            Assert.AreEqual("0", decimal.Truncate(decimal.Parse(".999999")).ToString(), "(new Decimal(\".999999\").trunc() == \"0\" FAILED");
            Assert.AreEqual("3", decimal.Truncate(decimal.Parse("3.9999999")).ToString(), "(new Decimal(\"3.9999999\").trunc() == \"3\" FAILED");
            Assert.AreEqual("12312312313123123123123123", decimal.Truncate(decimal.Parse("12312312313123123123123123.99")).ToString(), "(new Decimal(\"12312312313123123123123123.99\").trunc() == \"12312312313123123123123123\" FAILED");
            // #1588
            Assert.AreEqual("0", decimal.Truncate(decimal.Parse("-.9")).ToString(), "(new Decimal(\"-.9\").trunc() == \"0\" FAILED");
            Assert.AreEqual("0", decimal.Truncate(decimal.Parse("-.999")).ToString(), "(new Decimal(\"-.999\").trunc() == \"0\" FAILED");
            Assert.AreEqual("0", decimal.Truncate(decimal.Parse("-.999999")).ToString(), "(new Decimal(\"-.999999\").trunc() == \"0\" FAILED");

            Assert.AreEqual("-3", decimal.Truncate(decimal.Parse("-3.9999999")).ToString(), "(new Decimal(\"-3.9999999\").trunc() == \"-3\" FAILED");
            Assert.AreEqual("-12312312313123123123123123", decimal.Truncate(decimal.Parse("-12312312313123123123123123.99")).ToString(), "(new Decimal(\"-12312312313123123123123123.99\").trunc() == \"-12312312313123123123123123\" FAILED");

            decimal d;
            d = 0;
            Assert.AreEqual("1", (++d).ToString(), "(new Decimal(\"0\").inc() == \"1\" FAILED");
            d = 1;
            Assert.AreEqual("2", (++d).ToString(), "(new Decimal(\"1\").inc() == \"2\" FAILED");
            d = 2;
            Assert.AreEqual("3", (++d).ToString(), "(new Decimal(\"2\").inc() == \"3\" FAILED");
            d = -1;
            Assert.AreEqual("0", (++d).ToString(), "(new Decimal(\"-1\").inc() == \"0\" FAILED");
            d = -2;
            Assert.AreEqual("-1", (++d).ToString(), "(new Decimal(\"2\").inc() == \"-1\" FAILED");
            d = 1.5m;
            Assert.AreEqual("2.5", (++d).ToString(), "(new Decimal(\"1.5\").inc() == \"2.5\" FAILED");
            d = -1.5m;
            Assert.AreEqual("-0.5", (++d).ToString(), "(new Decimal(\"-1.5\").inc() == \"-0.5\" FAILED");

            d = 0;
            Assert.AreEqual("-1", (--d).ToString(), "(new Decimal(\"0\").dec().toString() == \"-1\" FAILED");
            d = 1;
            Assert.AreEqual("0", (--d).ToString(), "(new Decimal(\"1\").dec().toString() == \"0\" FAILED");
            d = 2;
            Assert.AreEqual("3", (++d).ToString(), "(new Decimal(\"2\").inc() == \"1\" FAILED");
            d = -1;
            Assert.AreEqual("-2", (--d).ToString(), "(new Decimal(\"-1\").dec().toString() == \"-2\" FAILED");
            d = -2;
            Assert.AreEqual("-3", (--d).ToString(), "(new Decimal(\"2\").dec().toString() == \"-3\" FAILED");
            d = 1.5m;
            Assert.AreEqual("0.5", (--d).ToString(), "(new Decimal(\"1.5\").dec().toString() == \"0.5\" FAILED");
            d = -1.5m;
            Assert.AreEqual("-2.5", (--d).ToString(), "(new Decimal(\"-1.5\").dec().toString() == \"-2.5\" FAILED");
        }
    }
}