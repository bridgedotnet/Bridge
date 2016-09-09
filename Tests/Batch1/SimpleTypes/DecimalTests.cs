using Bridge.Test;
using System;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_DECIMAL)]
    [TestFixture(TestNameFormat = "Decimal - {0}")]
    public class DecimalTests
    {
        private void AssertIsDecimalAndEqualTo(object v, double d, string message = null)
        {
            Assert.AreStrictEqual(true, v is decimal, message);
            Assert.AreStrictEqual(d.ToString(), v.ToString(), message);
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.True((object)(decimal)0.5 is decimal);
            Assert.AreEqual("System.Decimal", typeof(decimal).FullName);
            object d = (decimal)0;
            Assert.True(d is decimal);
            Assert.True(d is IFormattable);
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            AssertIsDecimalAndEqualTo(GetDefaultValue<decimal>(), 0);
        }

        [Test]
        public void CreatingInstanceReturnsZero()
        {
            AssertIsDecimalAndEqualTo(Activator.CreateInstance<decimal>(), 0);
        }

        [Test]
        public void ConstantsWork()
        {
            AssertIsDecimalAndEqualTo(decimal.One, 1);
            AssertIsDecimalAndEqualTo(decimal.Zero, 0);
            AssertIsDecimalAndEqualTo(decimal.MinusOne, -1);
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
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual("123", 291m.ToString("x"));
        }

        [Test]
        public void ToStringWithoutRadixWorks()
        {
            Assert.AreEqual("123", 123m.ToString());
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
        public void ConversionsToDecimalWork()
        {
            int x = 0;
            Assert.AreDeepEqual(1m, (decimal)(byte)(x + 1));
            Assert.AreDeepEqual(2m, (decimal)(sbyte)(x + 2));
            Assert.AreDeepEqual(3m, (decimal)(short)(x + 3));
            Assert.AreDeepEqual(4m, (decimal)(ushort)(x + 4));
            Assert.AreDeepEqual(5m, (decimal)(char)(x + '\x5'));
            Assert.AreDeepEqual(6m, (decimal)(int)(x + 6));
            Assert.AreDeepEqual(7m, (decimal)(uint)(x + 7));
            Assert.AreDeepEqual(8m, (decimal)(long)(x + 8));
            Assert.AreDeepEqual(9m, (decimal)(ulong)(x + 9));
            Assert.AreDeepEqual(10.5m, (decimal)(float)(x + 10.5));
            Assert.AreDeepEqual(11.5m, (decimal)(double)(x + 11.5));
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
        public void OperatorsWork()
        {
            decimal x = 3;
            AssertIsDecimalAndEqualTo(+x, 3);
            AssertIsDecimalAndEqualTo(-x, -3);
            AssertIsDecimalAndEqualTo(x + 4m, 7);
            AssertIsDecimalAndEqualTo(x - 2m, 1);
            AssertIsDecimalAndEqualTo(x++, 3);
            AssertIsDecimalAndEqualTo(++x, 5);
            AssertIsDecimalAndEqualTo(x--, 5);
            AssertIsDecimalAndEqualTo(--x, 3);
            AssertIsDecimalAndEqualTo(x * 3m, 9);
            AssertIsDecimalAndEqualTo(x / 2m, 1.5);
            AssertIsDecimalAndEqualTo(14m % x, 2);
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

        [Test]
        public void AddWorks()
        {
            Assert.AreDeepEqual(7m, decimal.Add(3m, 4m));
        }

        [Test]
        public void CeilingWorks()
        {
            AssertIsDecimalAndEqualTo(decimal.Ceiling(3.4m), 4);
        }

        [Test]
        public void DivideWorks()
        {
            AssertIsDecimalAndEqualTo(decimal.Divide(3m, 4m), 0.75);
        }

        [Test]
        public void FloorWorks()
        {
            AssertIsDecimalAndEqualTo(decimal.Floor(3.2m), 3);
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
        public void SubtractWorks()
        {
            AssertIsDecimalAndEqualTo(decimal.Subtract(7m, 3m), 4);
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreDeepEqual(((decimal)0).GetHashCode(), ((decimal)0).GetHashCode());
            Assert.AreDeepEqual(((decimal)1).GetHashCode(), ((decimal)1).GetHashCode());
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
        public void CompareToWorks()
        {
            Assert.True(((decimal)0).CompareTo((decimal)0) == 0);
            Assert.True(((decimal)1).CompareTo((decimal)0) > 0);
            Assert.True(((decimal)0).CompareTo((decimal)0.5) < 0);
            Assert.True(((decimal)1).CompareTo((decimal)1) == 0);
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
    }
}