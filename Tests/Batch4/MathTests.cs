using Bridge.Test;
using System;

namespace Bridge.ClientTest.Batch4
{
    [TestFixture(TestNameFormat = "MathTests - {0}")]
    public class MathTests
    {
        private void AssertAlmostEqual(double d1, double d2)
        {
            var diff = d2 - d1;
            if (diff < 0)
                diff = -diff;
            Assert.True(diff < 1e-8);
        }

        private void AssertIsDecimalAndEqualTo(object v, double d)
        {
            Assert.True(v is decimal);
            Assert.AreStrictEqual(d.ToString(), v.ToString());
        }

        [Test]
        public void ConstantsWork()
        {
            AssertAlmostEqual(Math.E, 2.718281828459045);
            AssertAlmostEqual(Math.LN2, 0.6931471805599453);
            AssertAlmostEqual(Math.LN10, 2.302585092994046);
            AssertAlmostEqual(Math.LOG2E, 1.4426950408889634);
            AssertAlmostEqual(Math.LOG10E, 0.4342944819032518);
            AssertAlmostEqual(Math.PI, 3.141592653589793);
            AssertAlmostEqual(Math.SQRT1_2, 0.7071067811865476);
            AssertAlmostEqual(Math.SQRT2, 1.4142135623730951);
        }

        [Test]
        public void AbsOfDoubleWorks()
        {
            Assert.AreEqual(12.5, Math.Abs(-12.5));
        }

        [Test]
        public void AbsOfIntWorks()
        {
            Assert.AreEqual(12, Math.Abs(-12));
        }

        [Test]
        public void AbsOfLongWorks()
        {
            Assert.AreEqual(12L, Math.Abs(-12L));
        }

        [Test]
        public void AbsOfSbyteWorks()
        {
            Assert.AreEqual((sbyte)15, Math.Abs((sbyte)-15));
        }

        [Test]
        public void AbsOfShortWorks()
        {
            Assert.AreEqual((short)15, Math.Abs((short)-15));
        }

        [Test]
        public void AbsOfFloatWorks()
        {
            Assert.AreEqual(17.5f, Math.Abs(-17.5f));
        }

        [Test]
        public void AbsOfDecimalWorks()
        {
            AssertIsDecimalAndEqualTo(Math.Abs(10.5m), 10.5);
            AssertIsDecimalAndEqualTo(Math.Abs(-10.5m), 10.5);
            AssertIsDecimalAndEqualTo(Math.Abs(0m), 0);
        }

        [Test]
        public void AcosWorks()
        {
            AssertAlmostEqual(Math.Acos(0.5), 1.0471975511965979);
        }

        [Test]
        public void AsinWorks()
        {
            AssertAlmostEqual(Math.Asin(0.5), 0.5235987755982989);
        }

        [Test]
        public void AtanWorks()
        {
            AssertAlmostEqual(Math.Atan(0.5), 0.4636476090008061);
        }

        [Test]
        public void Atan2Works()
        {
            AssertAlmostEqual(Math.Atan2(1, 2), 0.4636476090008061);
        }

        [Test]
        public void CeilingOfDoubleWorks()
        {
            Assert.AreEqual(4.0, Math.Ceiling(3.2));
            Assert.AreEqual(-3.0, Math.Ceiling(-3.2));
        }

        [Test]
        public void CeilingOfDecimalWorks()
        {
            AssertIsDecimalAndEqualTo(Math.Ceiling(3.1m), 4);
            AssertIsDecimalAndEqualTo(Math.Ceiling(-3.9m), -3);
            AssertIsDecimalAndEqualTo(Math.Ceiling(3m), 3);
        }

        [Test]
        public void CosWorks()
        {
            AssertAlmostEqual(Math.Cos(0.5), 0.8775825618903728);
        }

        [Test]
        public void CoshWorks()
        {
            AssertAlmostEqual(Math.Cosh(0.1), 1.0050041680558035E+000);
        }

        [Test]
        public void SinhWorks()
        {
            AssertAlmostEqual(Math.Sinh(-0.98343), -1.1497925156481d);
        }

        [Test]
        public void TanhWorks()
        {
            AssertAlmostEqual(Math.Tanh(5.4251848), 0.999961205877d);
        }

        [Test]
        public void ExpWorks()
        {
            AssertAlmostEqual(Math.Exp(0.5), 1.6487212707001282);
        }

        [Test]
        public void FloorOfDoubleWorks()
        {
            Assert.AreEqual(3.0, Math.Floor(3.6));
            Assert.AreEqual(-4.0, Math.Floor(-3.6));
        }

        [Test]
        public void FloorOfDecimalWorks()
        {
            AssertIsDecimalAndEqualTo(decimal.Floor(3.9m), 3);
            AssertIsDecimalAndEqualTo(decimal.Floor(-3.1m), -4);
            AssertIsDecimalAndEqualTo(decimal.Floor(3m), 3);
        }

        [Test]
        public void LogWorks()
        {
            AssertAlmostEqual(Math.Log(0.5), -0.6931471805599453);
        }

        [Test]
        public void LogWithBaseWorks_SPI_1566()
        {
            // #1566
            // Test restructure to keep assertion count correct (prevent uncaught test exception)
            var d1 = 0d;
            TestHelper.Safe(() => d1 = Math.Log(16, 2));
            Assert.AreEqual(4.0, d1);

            var d2 = 0d;
            TestHelper.Safe(() => d2 = Math.Log(16, 4));
            Assert.AreEqual(2.0, d2);
        }

        // #SPI
        [Test]
        public void Log10Works_SPI_1629()
        {
            // #1629
            Assert.AreEqual(Math.Log10(10), 1.0);
            Assert.AreEqual(Math.Log10(100), 2.0);
        }

        [Test]
        public void MaxOfByteWorks()
        {
            Assert.AreEqual(3.0, Math.Max((byte)1, (byte)3));
            Assert.AreEqual(5.0, Math.Max((byte)5, (byte)3));
        }

        [Test]
        public void MaxOfDecimalWorks()
        {
            AssertIsDecimalAndEqualTo(Math.Max(-14.5m, 3.0m), 3.0);
            AssertIsDecimalAndEqualTo(Math.Max(5.4m, 3.0m), 5.4);
        }

        [Test]
        public void MaxOfDoubleWorks()
        {
            Assert.AreEqual(3.0, Math.Max(1.0, 3.0));
            Assert.AreEqual(4.0, Math.Max(4.0, 3.0));
        }

        [Test]
        public void MaxOfShortWorks()
        {
            Assert.AreEqual((short)3, Math.Max((short)1, (short)3));
            Assert.AreEqual((short)4, Math.Max((short)4, (short)3));
        }

        [Test]
        public void MaxOfIntWorks()
        {
            Assert.AreEqual(3, Math.Max(1, 3));
            Assert.AreEqual(4, Math.Max(4, 3));
        }

        [Test]
        public void MaxOfLongWorks()
        {
            Assert.AreEqual(3L, Math.Max(1L, 3L));
            Assert.AreEqual(4L, Math.Max(4L, 3L));
        }

        [Test]
        public void MaxOfSByteWorks()
        {
            Assert.AreEqual((sbyte)3, Math.Max((sbyte)-1, (sbyte)3));
            Assert.AreEqual((sbyte)5, Math.Max((sbyte)5, (sbyte)3));
        }

        [Test]
        public void MaxOfFloatWorks()
        {
            Assert.AreEqual(3.0f, Math.Max(-14.5f, 3.0f));
            Assert.AreEqual(5.4f, Math.Max(5.4f, 3.0f));
        }

        [Test]
        public void MaxOfUShortWorks()
        {
            Assert.AreEqual((ushort)3, Math.Max((ushort)1, (ushort)3));
            Assert.AreEqual((ushort)5, Math.Max((ushort)5, (ushort)3));
        }

        [Test]
        public void MaxOfUIntWorks()
        {
            Assert.AreEqual((uint)3, Math.Max((uint)1, (uint)3));
            Assert.AreEqual((uint)5, Math.Max((uint)5, (uint)3));
        }

        [Test]
        public void MaxOfULongWorks()
        {
            Assert.AreEqual((ulong)300, Math.Max((ulong)100, (ulong)300));
            Assert.AreEqual((ulong)500, Math.Max((ulong)500, (ulong)300));
        }

        [Test]
        public void MinOfByteWorks()
        {
            Assert.AreEqual(1.0, Math.Min((byte)1, (byte)3));
            Assert.AreEqual(3.0, Math.Min((byte)5, (byte)3));
        }

        [Test]
        public void MinOfDecimalWorks()
        {
            AssertIsDecimalAndEqualTo(Math.Min(-14.5m, 3.0m), -14.5);
            AssertIsDecimalAndEqualTo(Math.Min(5.4m, 3.0m), 3.0);
        }

        [Test]
        public void MinOfDoubleWorks()
        {
            Assert.AreEqual(1.0, Math.Min(1.0, 3.0));
            Assert.AreEqual(3.0, Math.Min(4.0, 3.0));
        }

        [Test]
        public void MinOfShortWorks()
        {
            Assert.AreEqual((short)1, Math.Min((short)1, (short)3));
            Assert.AreEqual((short)3, Math.Min((short)4, (short)3));
        }

        [Test]
        public void MinOfIntWorks()
        {
            Assert.AreEqual(1, Math.Min(1, 3));
            Assert.AreEqual(3, Math.Min(4, 3));
        }

        [Test]
        public void MinOfLongWorks()
        {
            Assert.AreEqual(1L, Math.Min(1L, 3L));
            Assert.AreEqual(3L, Math.Min(4L, 3L));
        }

        [Test]
        public void MinOfSByteWorks()
        {
            Assert.AreEqual((sbyte)-1, Math.Min((sbyte)-1, (sbyte)3));
            Assert.AreEqual((sbyte)3, Math.Min((sbyte)5, (sbyte)3));
        }

        [Test]
        public void MinOfFloatWorks()
        {
            Assert.AreEqual(-14.5f, Math.Min(-14.5f, 3.0f));
            Assert.AreEqual(3.0f, Math.Min(5.4f, 3.0f));
        }

        [Test]
        public void MinOfUShortWorks()
        {
            Assert.AreEqual((ushort)1, Math.Min((ushort)1, (ushort)3));
            Assert.AreEqual((ushort)3, Math.Min((ushort)5, (ushort)3));
        }

        [Test]
        public void MinOfUIntWorks()
        {
            Assert.AreEqual((uint)1, Math.Min((uint)1, (uint)3));
            Assert.AreEqual((uint)3, Math.Min((uint)5, (uint)3));
        }

        [Test]
        public void MinOfULongWorks()
        {
            Assert.AreEqual((ulong)100, Math.Min((ulong)100, (ulong)300));
            Assert.AreEqual((ulong)300, Math.Min((ulong)500, (ulong)300));
        }

        [Test]
        public void PowWorks()
        {
            AssertAlmostEqual(Math.Pow(3, 0.5), 1.7320508075688772);
        }

        [Test]
        public void RandomWorks()
        {
            for (int i = 0; i < 5; i++)
            {
                double d = Math.Random();
                Assert.True(d >= 0);
                Assert.True(d < 1);
            }
        }

        [Test]
        public void RoundOfDoubleWorks()
        {
            Assert.AreEqual(3.0, Math.Round(3.432));
            Assert.AreEqual(4.0, Math.Round(3.6));
            Assert.AreEqual(4.0, Math.Round(3.5));
            Assert.AreEqual(4.0, Math.Round(4.5));
            Assert.AreEqual(-4.0, Math.Round(-3.5));
            Assert.AreEqual(-4.0, Math.Round(-4.5));
        }

        [Test]
        public void RoundOfDecimalWorks()
        {
            AssertIsDecimalAndEqualTo(Math.Round(3.432m), 3.0);
            AssertIsDecimalAndEqualTo(Math.Round(3.6m), 4.0);
            AssertIsDecimalAndEqualTo(Math.Round(3.5m), 4.0);
            AssertIsDecimalAndEqualTo(Math.Round(4.5m), 4.0);
            AssertIsDecimalAndEqualTo(Math.Round(-3.5m), -4.0);
            AssertIsDecimalAndEqualTo(Math.Round(-4.5m), -4.0);
        }

        [Test]
        public void JsRoundOfDoubleWorks()
        {
            Assert.AreEqual(3.0, Math.JsRound(3.432));
            Assert.AreEqual(4.0, Math.JsRound(3.6));
            Assert.AreEqual(4.0, Math.JsRound(3.5));
            Assert.AreEqual(5.0, Math.JsRound(4.5));
            Assert.AreEqual(-3.0, Math.JsRound(-3.5));
            Assert.AreEqual(-4.0, Math.JsRound(-4.5));
        }

        [Test]
        public void RoundOfDoubleWithDigitsWorks()
        {
            Assert.AreEqual(3.43, Math.Round(3.432, 2));
            Assert.AreEqual(4.0, Math.Round(3.6, 0));
            Assert.AreEqual(3.4, Math.Round(3.35, 1));
            Assert.AreEqual(3.4, Math.Round(3.45, 1));
            Assert.AreEqual(-3.4, Math.Round(-3.35, 1));
            Assert.AreEqual(-3.4, Math.Round(-3.45, 1));
        }

        [Test]
        public void RoundOfDecimalWithDigitsWorks()
        {
            AssertIsDecimalAndEqualTo(Math.Round(3.432m, 2), 3.43);
            AssertIsDecimalAndEqualTo(Math.Round(3.6m, 0), 4.0);
            AssertIsDecimalAndEqualTo(Math.Round(3.35m, 1), 3.4);
            AssertIsDecimalAndEqualTo(Math.Round(3.45m, 1), 3.4);
            AssertIsDecimalAndEqualTo(Math.Round(-3.35m, 1), -3.4);
            AssertIsDecimalAndEqualTo(Math.Round(-3.45m, 1), -3.4);
        }

        [Test]
        public void SignWithDecimalWorks()
        {
            Assert.AreEqual(-1, Math.Sign(-0.5m));
            Assert.AreEqual(0, Math.Sign(0.0m));
            Assert.AreEqual(1, Math.Sign(3.35m));
        }

        [Test]
        public void SignWithDoubleWorks()
        {
            Assert.AreEqual(-1, Math.Sign(-0.5));
            Assert.AreEqual(0, Math.Sign(0.0));
            Assert.AreEqual(1, Math.Sign(3.35));
        }

        // #SPI
        //[Test]
        //public void SignWithShortWorks_SPI_1629()
        //{
        //    // #1629
        //    Assert.AreEqual(Math.Sign((short)-15), -1);
        //    Assert.AreEqual(Math.Sign((short)0), 0);
        //    Assert.AreEqual(Math.Sign((short)4), 1);
        //}

        // #SPI
        //[Test]
        //public void SignWithIntWorks_SPI_1629()
        //{
        //    // #1629
        //    Assert.AreEqual(Math.Sign(-15), -1);
        //    Assert.AreEqual(Math.Sign(0), 0);
        //    Assert.AreEqual(Math.Sign(4), 1);
        //}

        // #SPI
        //[Test]
        //public void SignWithLongWorks_SPI_1629()
        //{
        //    // #1629
        //    Assert.AreEqual(Math.Sign(-15L), -1);
        //    Assert.AreEqual(Math.Sign(0L), 0);
        //    Assert.AreEqual(Math.Sign(4L), 1);
        //}

        // #SPI
        //[Test]
        //public void SignWithSByteWorks_SPI_1629()
        //{
        //    // #1629
        //    Assert.AreEqual(Math.Sign((sbyte)-15), -1);
        //    Assert.AreEqual(Math.Sign((sbyte)0), 0);
        //    Assert.AreEqual(Math.Sign((sbyte)4), 1);
        //}

        [Test]
        public void SignWithFloatWorks()
        {
            Assert.AreEqual(-1, Math.Sign(-0.5f));
            Assert.AreEqual(0, Math.Sign(0.0f));
            Assert.AreEqual(1, Math.Sign(3.35f));
        }

        [Test]
        public void SinWorks()
        {
            AssertAlmostEqual(Math.Sin(0.5), 0.479425538604203);
        }

        [Test]
        public void SqrtWorks()
        {
            AssertAlmostEqual(Math.Sqrt(3), 1.7320508075688772);
        }

        [Test]
        public void TanWorks()
        {
            AssertAlmostEqual(Math.Tan(0.5), 0.5463024898437905);
        }

        [Test]
        public void TruncateWithDoubleWorks()
        {
            Assert.AreEqual(3.0, Math.Truncate(3.9));
            Assert.AreEqual(-3.0, Math.Truncate(-3.9));
        }

        [Test]
        public void TruncateWithDecimalWorks()
        {
            AssertIsDecimalAndEqualTo(Math.Truncate(3.9m), 3.0);
            AssertIsDecimalAndEqualTo(Math.Truncate(-3.9m), -3.0);
        }

        [Test]
        public void IEEERemainderWorks()
        {
            Assert.AreEqual(-1.0, Math.IEEERemainder(3.0, 2.0));
            Assert.AreEqual(0.0, Math.IEEERemainder(4.0, 2.0));
            Assert.AreEqual(1.0, Math.IEEERemainder(10.0, 3.0));
            Assert.AreEqual(-1.0, Math.IEEERemainder(11.0, 3.0));
            Assert.AreEqual(-1.0, Math.IEEERemainder(27.0, 4.0));
            Assert.AreEqual(-2.0, Math.IEEERemainder(28.0, 5.0));
            AssertAlmostEqual(Math.IEEERemainder(17.8, 4.0), 1.8);
            AssertAlmostEqual(Math.IEEERemainder(17.8, 4.1), 1.4);
            AssertAlmostEqual(Math.IEEERemainder(-16.3, 4.1), 0.0999999999999979);
            AssertAlmostEqual(Math.IEEERemainder(17.8, -4.1), 1.4);
            AssertAlmostEqual(Math.IEEERemainder(-17.8, -4.1), -1.4);
        }

        [Test]
        public void RoundOfDoubleWithMidpointRoundingWorks()
        {
            Assert.AreEqual(3.0, Math.Round(3.432, MidpointRounding.AwayFromZero));
            Assert.AreEqual(3.0, Math.Round(3.432, MidpointRounding.ToEven));
            Assert.AreEqual(4.0, Math.Round(3.5, MidpointRounding.AwayFromZero));
            Assert.AreEqual(4.0, Math.Round(3.5, MidpointRounding.ToEven));
            Assert.AreEqual(4.0, Math.Round(3.64, MidpointRounding.AwayFromZero));
            Assert.AreEqual(4.0, Math.Round(3.64, MidpointRounding.ToEven));
            Assert.AreEqual(3.0, Math.Round(2.5, MidpointRounding.AwayFromZero));
            Assert.AreEqual(2.0, Math.Round(2.5, MidpointRounding.ToEven));
            Assert.AreEqual(-3.0, Math.Round(-2.5, MidpointRounding.AwayFromZero));
            Assert.AreEqual(-2.0, Math.Round(-2.5, MidpointRounding.ToEven));
        }

        [Test]
        public void RoundOfDecimalWithMidpointRoundingWorks()
        {
            AssertIsDecimalAndEqualTo(Math.Round(3.432m, MidpointRounding.AwayFromZero), 3.0);
            AssertIsDecimalAndEqualTo(Math.Round(3.432m, MidpointRounding.ToEven), 3.0);
            AssertIsDecimalAndEqualTo(Math.Round(3.5m, MidpointRounding.AwayFromZero), 4.0);
            AssertIsDecimalAndEqualTo(Math.Round(3.5m, MidpointRounding.ToEven), 4.0);
            AssertIsDecimalAndEqualTo(Math.Round(3.64m, MidpointRounding.AwayFromZero), 4.0);
            AssertIsDecimalAndEqualTo(Math.Round(3.64m, MidpointRounding.ToEven), 4.0);
            AssertIsDecimalAndEqualTo(Math.Round(2.5m, MidpointRounding.AwayFromZero), 3.0);
            AssertIsDecimalAndEqualTo(Math.Round(2.5m, MidpointRounding.ToEven), 2.0);
            AssertIsDecimalAndEqualTo(Math.Round(-2.5m, MidpointRounding.AwayFromZero), -3.0);
            AssertIsDecimalAndEqualTo(Math.Round(-2.5m, MidpointRounding.ToEven), -2.0);
        }

        [Test]
        public void RoundOfDoubleWithDigitsAndMidpointRoundingWorks()
        {
            Assert.AreEqual(3.5, Math.Round(3.45, 1, MidpointRounding.AwayFromZero));
            Assert.AreEqual(3.4, Math.Round(3.45, 1, MidpointRounding.ToEven));
            Assert.AreEqual(4.0, Math.Round(3.5, 0, MidpointRounding.AwayFromZero));
            Assert.AreEqual(4.0, Math.Round(3.5, 0, MidpointRounding.ToEven));
            Assert.AreEqual(3.65, Math.Round(3.645, 2, MidpointRounding.AwayFromZero));
            Assert.AreEqual(3.64, Math.Round(3.645, 2, MidpointRounding.ToEven));
            Assert.AreEqual(3.0, Math.Round(2.5, 0, MidpointRounding.AwayFromZero));
            Assert.AreEqual(2.0, Math.Round(2.5, 0, MidpointRounding.ToEven));
            Assert.AreEqual(-2.5, Math.Round(-2.5, 1, MidpointRounding.AwayFromZero));
            Assert.AreEqual(-2.5, Math.Round(-2.5, 1, MidpointRounding.ToEven));
        }

        [Test]
        public void RoundOfDecimalWithDigitsAndMidpointRoundingWorks()
        {
            AssertIsDecimalAndEqualTo(Math.Round(3.45m, 1, MidpointRounding.AwayFromZero), 3.5);
            AssertIsDecimalAndEqualTo(Math.Round(3.45m, 1, MidpointRounding.ToEven), 3.4);
            AssertIsDecimalAndEqualTo(Math.Round(3.5m, 0, MidpointRounding.AwayFromZero), 4.0);
            AssertIsDecimalAndEqualTo(Math.Round(3.5m, 0, MidpointRounding.ToEven), 4.0);
            AssertIsDecimalAndEqualTo(Math.Round(3.645m, 2, MidpointRounding.AwayFromZero), 3.65);
            AssertIsDecimalAndEqualTo(Math.Round(3.645m, 2, MidpointRounding.ToEven), 3.64);
            AssertIsDecimalAndEqualTo(Math.Round(2.5m, 0, MidpointRounding.AwayFromZero), 3.0);
            AssertIsDecimalAndEqualTo(Math.Round(2.5m, 0, MidpointRounding.ToEven), 2.0);
            AssertIsDecimalAndEqualTo(Math.Round(-2.5m, 1, MidpointRounding.AwayFromZero), -2.5);
            AssertIsDecimalAndEqualTo(Math.Round(-2.5m, 1, MidpointRounding.ToEven), -2.5);
        }

        // #SPI
        //[Test]
        //public void BigMulWorks_SPI_1629()
        //{
        //    // #1629
        //    Assert.AreEqual(Math.BigMul(214748364, 214748364), 46116859840676496L);
        //}

        [Test]
        public void DivRemWorks()
        {
            int result;
            Assert.AreEqual(1073741823, Math.DivRem(2147483647, 2, out result));
            Assert.AreEqual(1, result);
            long longResult;
            Assert.AreEqual(23058430092136L, Math.DivRem(92233720368547L, 4L, out longResult));
            Assert.AreEqual(3L, longResult);
        }
    }
}
