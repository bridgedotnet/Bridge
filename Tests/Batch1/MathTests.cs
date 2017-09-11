using Bridge.ClientTestHelper;
using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_MATH)]
    [TestFixture(TestNameFormat = "Math - {0}")]
    public class MathTests
    {
        public const double E2 = Math.E;
        public const double PI2 = Math.PI;

        [Test]
        public void ConstantsWork()
        {
            NumberHelper.AssertDoubleWithEpsilon8(Math.E, 2.718281828459045);
            NumberHelper.AssertDoubleWithEpsilon8(Math.PI, 3.141592653589793);
        }

        // #2473
        [Test]
        public void ConstantsWork_N2473()
        {
            NumberHelper.AssertDoubleWithEpsilon8(E2, 2.718281828459045);
            NumberHelper.AssertDoubleWithEpsilon8(PI2, 3.141592653589793);
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
            NumberHelper.AssertDecimal(10.0, Math.Abs(-10.0m));
            NumberHelper.AssertDecimal(10.5, Math.Abs(10.5m));
            NumberHelper.AssertDecimal(10.5, Math.Abs(-10.5m));
            NumberHelper.AssertDecimal(0, Math.Abs(0m));
        }

        [Test]
        public void AcosWorks()
        {
            NumberHelper.AssertDoubleWithEpsilon8(Math.Acos(0.5), 1.0471975511965979);
        }

        [Test]
        public void AsinWorks()
        {
            NumberHelper.AssertDoubleWithEpsilon8(Math.Asin(0.5), 0.5235987755982989);
        }

        [Test]
        public void AtanWorks()
        {
            NumberHelper.AssertDoubleWithEpsilon8(Math.Atan(0.5), 0.4636476090008061);
        }

        [Test]
        public void Atan2Works()
        {
            NumberHelper.AssertDoubleWithEpsilon8(Math.Atan2(1, 2), 0.4636476090008061);
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
            NumberHelper.AssertDecimal(4, Math.Ceiling(3.1m));
            NumberHelper.AssertDecimal(-3, Math.Ceiling(-3.9m));
            NumberHelper.AssertDecimal(3, Math.Ceiling(3m));
        }

        [Test]
        public void CosWorks()
        {
            NumberHelper.AssertDoubleWithEpsilon8(Math.Cos(0.5), 0.8775825618903728);
        }

        [Test]
        public void CoshWorks()
        {
            NumberHelper.AssertDoubleWithEpsilon8(Math.Cosh(0.1), 1.0050041680558035E+000);
        }

        [Test]
        public void SinhWorks()
        {
            NumberHelper.AssertDoubleWithEpsilon8(Math.Sinh(-0.98343), -1.1497925156481d);
        }

        [Test]
        public void TanhWorks()
        {
            NumberHelper.AssertDoubleWithEpsilon8(Math.Tanh(5.4251848), 0.999961205877d);
        }

        [Test]
        public void DivRemWorks()
        {
            int resultInt;

            Math.DivRem(1, 2, out resultInt);
            Assert.AreEqual(1, resultInt);

            Math.DivRem(234, 157, out resultInt);
            Assert.AreEqual(77, resultInt);

            Math.DivRem(0, 20, out resultInt);
            Assert.AreEqual(0, resultInt);

            long resultLong;

            Math.DivRem(2, 4, out resultLong);
            Assert.True(2 == resultLong);

            Math.DivRem(2341, 157, out resultLong);
            Assert.True(143 == resultLong);

            int result;
            Assert.AreEqual(1073741823, Math.DivRem(2147483647, 2, out result));
            Assert.AreEqual(1, result);
            long longResult;
            Assert.AreEqual(23058430092136L, Math.DivRem(92233720368547L, 4L, out longResult));
            Assert.AreEqual(3L, longResult);
        }

        [Test]
        public void ExpWorks()
        {
            NumberHelper.AssertDoubleWithEpsilon8(Math.Exp(0.5), 1.6487212707001282);
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
            NumberHelper.AssertDecimal(3.0, Math.Floor(3.6m));
            NumberHelper.AssertDecimal(-4.0, Math.Floor(-3.6m));
            NumberHelper.AssertDecimal(3, decimal.Floor(3m));
        }

        [Test]
        public void LogWorks()
        {
            NumberHelper.AssertDoubleWithEpsilon8(Math.Log(0.5), -0.6931471805599453);
        }

        [Test]
        public void LogWithBaseWorks_SPI_1566()
        {
            // #1566
            // Test restructure to keep assertion count correct (prevent uncaught test exception)
            var d1 = 0d;
            CommonHelper.Safe(() => d1 = Math.Log(16, 2));
            Assert.AreEqual(4.0, d1);

            var d2 = 0d;
            CommonHelper.Safe(() => d2 = Math.Log(16, 4));
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
            NumberHelper.AssertDecimal(3.0, Math.Max(-14.5m, 3.0m));
            NumberHelper.AssertDecimal(5.4, Math.Max(5.4m, 3.0m));
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
            NumberHelper.AssertDecimal(-14.5, Math.Min(-14.5m, 3.0m));
            NumberHelper.AssertDecimal(3.0, Math.Min(5.4m, 3.0m));
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
            NumberHelper.AssertDoubleWithEpsilon8(Math.Pow(3, 0.5), 1.7320508075688772);

            NumberHelper.AssertDoubleWithEpsilon8(Math.Pow(3, 2), 9);
            NumberHelper.AssertDoubleWithEpsilon8(Math.Pow(2, 3), 8);
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
        public void RoundDecimalWithModeWorks()
        {
            NumberHelper.AssertDecimal(4, Math.Round(3.8m), "3.8m");
            NumberHelper.AssertDecimal(4, Math.Round(3.5m), "3.5m");
            NumberHelper.AssertDecimal(3, Math.Round(3.2m), "3.2m");
            NumberHelper.AssertDecimal(-3, Math.Round(-3.2m), "-3.2m");
            NumberHelper.AssertDecimal(-4, Math.Round(-3.5m), "-3.5");
            NumberHelper.AssertDecimal(-4, Math.Round(-3.8m), "-3.8m");

            NumberHelper.AssertDecimal(4, Math.Round(3.8m, MidpointRounding.Up), "Up 3.8m");
            NumberHelper.AssertDecimal(4, Math.Round(3.5m, MidpointRounding.Up), "Up 3.5m");
            NumberHelper.AssertDecimal(4, Math.Round(3.2m, MidpointRounding.Up), "Up 3.2m");
            NumberHelper.AssertDecimal(-4, Math.Round(-3.2m, MidpointRounding.Up), "Up -3.2m");
            NumberHelper.AssertDecimal(-4, Math.Round(-3.5m, MidpointRounding.Up), "Up -3.5");
            NumberHelper.AssertDecimal(-4, Math.Round(-3.8m, MidpointRounding.Up), "Up -3.8m");

            NumberHelper.AssertDecimal(3, Math.Round(3.8m, MidpointRounding.Down), "Down 3.8m");
            NumberHelper.AssertDecimal(3, Math.Round(3.5m, MidpointRounding.Down), "Down 3.5m");
            NumberHelper.AssertDecimal(3, Math.Round(3.2m, MidpointRounding.Down), "Down 3.2m");
            NumberHelper.AssertDecimal(-3, Math.Round(-3.2m, MidpointRounding.Down), "Down -3.2m");
            NumberHelper.AssertDecimal(-3, Math.Round(-3.5m, MidpointRounding.Down), "Down -3.5");
            NumberHelper.AssertDecimal(-3, Math.Round(-3.8m, MidpointRounding.Down), "Down -3.8m");

            NumberHelper.AssertDecimal(4, Math.Round(3.8m, MidpointRounding.InfinityPos), "InfinityPos 3.8m");
            NumberHelper.AssertDecimal(4, Math.Round(3.5m, MidpointRounding.InfinityPos), "InfinityPos 3.5m");
            NumberHelper.AssertDecimal(4, Math.Round(3.2m, MidpointRounding.InfinityPos), "InfinityPos 3.2m");
            NumberHelper.AssertDecimal(-3, Math.Round(-3.2m, MidpointRounding.InfinityPos), "InfinityPos -3.2m");
            NumberHelper.AssertDecimal(-3, Math.Round(-3.5m, MidpointRounding.InfinityPos), "InfinityPos -3.5");
            NumberHelper.AssertDecimal(-3, Math.Round(-3.8m, MidpointRounding.InfinityPos), "InfinityPos -3.8m");

            NumberHelper.AssertDecimal(3, Math.Round(3.8m, MidpointRounding.InfinityNeg), "InfinityNeg 3.8m");
            NumberHelper.AssertDecimal(3, Math.Round(3.5m, MidpointRounding.InfinityNeg), "InfinityNeg 3.5m");
            NumberHelper.AssertDecimal(3, Math.Round(3.2m, MidpointRounding.InfinityNeg), "InfinityNeg 3.2m");
            NumberHelper.AssertDecimal(-4, Math.Round(-3.2m, MidpointRounding.InfinityNeg), "InfinityNeg -3.2m");
            NumberHelper.AssertDecimal(-4, Math.Round(-3.5m, MidpointRounding.InfinityNeg), "InfinityNeg -3.5");
            NumberHelper.AssertDecimal(-4, Math.Round(-3.8m, MidpointRounding.InfinityNeg), "InfinityNeg -3.8m");

            NumberHelper.AssertDecimal(4, Math.Round(3.8m, MidpointRounding.TowardsZero), "TowardsZero 3.8m");
            NumberHelper.AssertDecimal(3, Math.Round(3.5m, MidpointRounding.TowardsZero), "TowardsZero 3.5m");
            NumberHelper.AssertDecimal(3, Math.Round(3.2m, MidpointRounding.TowardsZero), "TowardsZero 3.2m");
            NumberHelper.AssertDecimal(-3, Math.Round(-3.2m, MidpointRounding.TowardsZero), "TowardsZero -3.2m");
            NumberHelper.AssertDecimal(-3, Math.Round(-3.5m, MidpointRounding.TowardsZero), "TowardsZero -3.5");
            NumberHelper.AssertDecimal(-4, Math.Round(-3.8m, MidpointRounding.TowardsZero), "TowardsZero -3.8m");

            NumberHelper.AssertDecimal(4, Math.Round(3.8m, MidpointRounding.AwayFromZero), "AwayFromZero 3.8m");
            NumberHelper.AssertDecimal(4, Math.Round(3.5m, MidpointRounding.AwayFromZero), "AwayFromZero 3.5m");
            NumberHelper.AssertDecimal(3, Math.Round(3.2m, MidpointRounding.AwayFromZero), "AwayFromZero 3.2m");
            NumberHelper.AssertDecimal(-3, Math.Round(-3.2m, MidpointRounding.AwayFromZero), "AwayFromZero -3.2m");
            NumberHelper.AssertDecimal(-4, Math.Round(-3.5m, MidpointRounding.AwayFromZero), "AwayFromZero -3.5");
            NumberHelper.AssertDecimal(-4, Math.Round(-3.8m, MidpointRounding.AwayFromZero), "AwayFromZero -3.8m");

            NumberHelper.AssertDecimal(4, Math.Round(3.8m, MidpointRounding.Ceil), "Ceil 3.8m");
            NumberHelper.AssertDecimal(4, Math.Round(3.5m, MidpointRounding.Ceil), "Ceil 3.5m");
            NumberHelper.AssertDecimal(3, Math.Round(3.2m, MidpointRounding.Ceil), "Ceil 3.2m");
            NumberHelper.AssertDecimal(-3, Math.Round(-3.2m, MidpointRounding.Ceil), "Ceil -3.2m");
            NumberHelper.AssertDecimal(-3, Math.Round(-3.5m, MidpointRounding.Ceil), "Ceil -3.5");
            NumberHelper.AssertDecimal(-4, Math.Round(-3.8m, MidpointRounding.Ceil), "Ceil -3.8m");

            NumberHelper.AssertDecimal(4, Math.Round(3.8m, MidpointRounding.Floor), "Floor 3.8m");
            NumberHelper.AssertDecimal(3, Math.Round(3.5m, MidpointRounding.Floor), "Floor 3.5m");
            NumberHelper.AssertDecimal(3, Math.Round(3.2m, MidpointRounding.Floor), "Floor 3.2m");
            NumberHelper.AssertDecimal(-3, Math.Round(-3.2m, MidpointRounding.Floor), "Floor -3.2m");
            NumberHelper.AssertDecimal(-4, Math.Round(-3.5m, MidpointRounding.Floor), "Floor -3.5");
            NumberHelper.AssertDecimal(-4, Math.Round(-3.8m, MidpointRounding.Floor), "Floor -3.8m");

            NumberHelper.AssertDecimal(4, Math.Round(3.8m, MidpointRounding.ToEven), "ToEven 3.8m");
            NumberHelper.AssertDecimal(4, Math.Round(3.5m, MidpointRounding.ToEven), "ToEven 3.5m");
            NumberHelper.AssertDecimal(3, Math.Round(3.2m, MidpointRounding.ToEven), "ToEven 3.2m");
            NumberHelper.AssertDecimal(-3, Math.Round(-3.2m, MidpointRounding.ToEven), "ToEven -3.2m");
            NumberHelper.AssertDecimal(-4, Math.Round(-3.5m, MidpointRounding.ToEven), "ToEven -3.5");
            NumberHelper.AssertDecimal(-4, Math.Round(-3.8m, MidpointRounding.ToEven), "ToEven -3.8m");
        }

        [Test]
        public void RoundDecimalWithPrecisionAndModeWorks()
        {
            NumberHelper.AssertNumber(1.4m, Math.Round(1.45m, 1), "Bridge584 1");
            NumberHelper.AssertNumber(1.6m, Math.Round(1.55m, 1), "Bridge584 2");
            NumberHelper.AssertNumber(123.4568m, Math.Round(123.456789M, 4), "Bridge584 3");
            NumberHelper.AssertNumber(123.456789m, Math.Round(123.456789M, 6), "Bridge584 4");
            NumberHelper.AssertNumber(123.456789m, Math.Round(123.456789M, 8), "Bridge584 5");
            NumberHelper.AssertNumber(-123m, Math.Round(-123.456M, 0), "Bridge584 6");

            NumberHelper.AssertDecimal(1.5, Math.Round(1.45m, 1, MidpointRounding.Up), "Bridge584 Up 1");
            NumberHelper.AssertDecimal(1.6, Math.Round(1.55m, 1, MidpointRounding.Up), "Bridge584 Up 2");
            NumberHelper.AssertDecimal(123.4568, Math.Round(123.456789M, 4, MidpointRounding.Up), "Bridge584 Up 3");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 6, MidpointRounding.Up), "Bridge584 Up 4");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 8, MidpointRounding.Up), "Bridge584 Up 5");
            NumberHelper.AssertDecimal(-124.0, Math.Round(-123.456M, 0, MidpointRounding.Up), "Bridge584 Up 6");

            NumberHelper.AssertDecimal(1.5, Math.Round(1.45m, 1, MidpointRounding.AwayFromZero), "Bridge584 AwayFromZero 1");
            NumberHelper.AssertDecimal(1.6, Math.Round(1.55m, 1, MidpointRounding.AwayFromZero), "Bridge584 AwayFromZero 2");
            NumberHelper.AssertDecimal(123.4568, Math.Round(123.456789M, 4, MidpointRounding.AwayFromZero), "Bridge584 AwayFromZero 3");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 6, MidpointRounding.AwayFromZero), "Bridge584 AwayFromZero 4");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 8, MidpointRounding.AwayFromZero), "Bridge584 AwayFromZero 5");
            NumberHelper.AssertDecimal(-123.0, Math.Round(-123.456M, 0, MidpointRounding.AwayFromZero), "Bridge584 AwayFromZero 6");

            NumberHelper.AssertDecimal(1.4, Math.Round(1.45m, 1, MidpointRounding.Down), "Bridge584 Down 1");
            NumberHelper.AssertDecimal(1.5, Math.Round(1.55m, 1, MidpointRounding.Down), "Bridge584 Down 2");
            NumberHelper.AssertDecimal(123.4567, Math.Round(123.456789M, 4, MidpointRounding.Down), "Bridge584 Down 3");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 6, MidpointRounding.Down), "Bridge584 Down 4");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 8, MidpointRounding.Down), "Bridge584 Down 5");
            NumberHelper.AssertDecimal(-123.0, Math.Round(-123.456M, 0, MidpointRounding.Down), "Bridge584 Down 6");

            NumberHelper.AssertDecimal(1.5, Math.Round(1.45m, 1, MidpointRounding.InfinityPos), "Bridge584 InfinityPos 1");
            NumberHelper.AssertDecimal(1.6, Math.Round(1.55m, 1, MidpointRounding.InfinityPos), "Bridge584 InfinityPos 2");
            NumberHelper.AssertDecimal(123.4568, Math.Round(123.456789M, 4, MidpointRounding.InfinityPos), "Bridge584 InfinityPos 3");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 6, MidpointRounding.InfinityPos), "Bridge584 InfinityPos 4");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 8, MidpointRounding.InfinityPos), "Bridge584 InfinityPos 5");
            NumberHelper.AssertDecimal(-123.0, Math.Round(-123.456M, 0, MidpointRounding.InfinityPos), "Bridge584 InfinityPos 6");

            NumberHelper.AssertDecimal(1.4, Math.Round(1.45m, 1, MidpointRounding.InfinityNeg), "Bridge584 InfinityNeg 1");
            NumberHelper.AssertDecimal(1.5, Math.Round(1.55m, 1, MidpointRounding.InfinityNeg), "Bridge584 InfinityNeg 2");
            NumberHelper.AssertDecimal(123.4567, Math.Round(123.456789M, 4, MidpointRounding.InfinityNeg), "Bridge584 InfinityNeg 3");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 6, MidpointRounding.InfinityNeg), "Bridge584 InfinityNeg 4");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 8, MidpointRounding.InfinityNeg), "Bridge584 InfinityNeg 5");
            NumberHelper.AssertDecimal(-124.0, Math.Round(-123.456M, 0, MidpointRounding.InfinityNeg), "Bridge584 InfinityNeg 6");

            NumberHelper.AssertDecimal(1.4, Math.Round(1.45m, 1, MidpointRounding.TowardsZero), "Bridge584 TowardsZero 1");
            NumberHelper.AssertDecimal(1.5, Math.Round(1.55m, 1, MidpointRounding.TowardsZero), "Bridge584 TowardsZero 2");
            NumberHelper.AssertDecimal(123.4568, Math.Round(123.456789M, 4, MidpointRounding.TowardsZero), "Bridge584 TowardsZero 3");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 6, MidpointRounding.TowardsZero), "Bridge584 TowardsZero 4");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 8, MidpointRounding.TowardsZero), "Bridge584 TowardsZero 5");
            NumberHelper.AssertDecimal(-123.0, Math.Round(-123.456M, 0, MidpointRounding.TowardsZero), "Bridge584 TowardsZero 6");

            NumberHelper.AssertDecimal(1.4, Math.Round(1.45m, 1, MidpointRounding.ToEven), "Bridge584 ToEven 1");
            NumberHelper.AssertDecimal(1.6, Math.Round(1.55m, 1, MidpointRounding.ToEven), "Bridge584 ToEven 2");
            NumberHelper.AssertDecimal(123.4568, Math.Round(123.456789M, 4, MidpointRounding.ToEven), "Bridge584 ToEven 3");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 6, MidpointRounding.ToEven), "Bridge584 ToEven 4");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 8, MidpointRounding.ToEven), "Bridge584 ToEven 5");
            NumberHelper.AssertDecimal(-123.0, Math.Round(-123.456M, 0, MidpointRounding.ToEven), "Bridge584 ToEven 6");

            NumberHelper.AssertDecimal(1.5, Math.Round(1.45m, 1, MidpointRounding.Ceil), "Bridge584 Ceil 1");
            NumberHelper.AssertDecimal(1.6, Math.Round(1.55m, 1, MidpointRounding.Ceil), "Bridge584 Ceil 2");
            NumberHelper.AssertDecimal(123.4568, Math.Round(123.456789M, 4, MidpointRounding.Ceil), "Bridge584 Ceil 3");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 6, MidpointRounding.Ceil), "Bridge584 Ceil 4");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 8, MidpointRounding.Ceil), "Bridge584 Ceil 5");
            NumberHelper.AssertDecimal(-123.0, Math.Round(-123.456M, 0, MidpointRounding.Ceil), "Bridge584 Ceil 6");

            NumberHelper.AssertDecimal(1.4, Math.Round(1.45m, 1, MidpointRounding.Floor), "Bridge584 Floor 1");
            NumberHelper.AssertDecimal(1.5, Math.Round(1.55m, 1, MidpointRounding.Floor), "Bridge584 Floor 2");
            NumberHelper.AssertDecimal(123.4568, Math.Round(123.456789M, 4, MidpointRounding.Floor), "Bridge584 Floor 3");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 6, MidpointRounding.Floor), "Bridge584 Floor 4");
            NumberHelper.AssertDecimal(123.456789, Math.Round(123.456789M, 8, MidpointRounding.Floor), "Bridge584 Floor 5");
            NumberHelper.AssertDecimal(-123.0, Math.Round(-123.456M, 0, MidpointRounding.Floor), "Bridge584 Floor 6");
        }

        [Test]
        public void RoundDoubleWithModeWorks()
        {
            NumberHelper.AssertDouble(4, Math.Round(3.8), "3.8");
            NumberHelper.AssertDouble(4, Math.Round(3.5), "3.5");
            NumberHelper.AssertDouble(3, Math.Round(3.2), "3.2");
            NumberHelper.AssertDouble(-3, Math.Round(-3.2), "-3.2");
            NumberHelper.AssertDouble(-4, Math.Round(-3.5), "-3.5");
            NumberHelper.AssertDouble(-4, Math.Round(-3.8), "-3.8");

            //NumberHelper.AssertNumber(Math.Round(3.8, MidpointRounding.Up), 4, "Up 3.8");
            //NumberHelper.AssertNumber(Math.Round(3.5, MidpointRounding.Up), 4, "Up 3.5");
            //NumberHelper.AssertNumber(Math.Round(3.2, MidpointRounding.Up), 4, "Up 3.2");
            //NumberHelper.AssertNumber(Math.Round(-3.2, MidpointRounding.Up), -4, "Up -3.2");
            //NumberHelper.AssertNumber(Math.Round(-3.5, MidpointRounding.Up), -4, "Up -3.5");
            //NumberHelper.AssertNumber(Math.Round(-3.8, MidpointRounding.Up), -4, "Up -3.8");

            //NumberHelper.AssertNumber(Math.Round(3.8, MidpointRounding.Down), 3, "Down 3.8");
            //NumberHelper.AssertNumber(Math.Round(3.5, MidpointRounding.Down), 3, "Down 3.5");
            //NumberHelper.AssertNumber(Math.Round(3.2, MidpointRounding.Down), 3, "Down 3.2");
            //NumberHelper.AssertNumber(Math.Round(-3.2, MidpointRounding.Down), -3, "Down -3.2");
            //NumberHelper.AssertNumber(Math.Round(-3.5, MidpointRounding.Down), -3, "Down -3.5");
            //NumberHelper.AssertNumber(Math.Round(-3.8, MidpointRounding.Down), -3, "Down -3.8");

            //NumberHelper.AssertNumber(Math.Round(3.8, MidpointRounding.InfinityPos), 4, "InfinityPos 3.8");
            //NumberHelper.AssertNumber(Math.Round(3.5, MidpointRounding.InfinityPos), 4, "InfinityPos 3.5");
            //NumberHelper.AssertNumber(Math.Round(3.2, MidpointRounding.InfinityPos), 4, "InfinityPos 3.2");
            //NumberHelper.AssertNumber(Math.Round(-3.2, MidpointRounding.InfinityPos), -3, "InfinityPos -3.2");
            //NumberHelper.AssertNumber(Math.Round(-3.5, MidpointRounding.InfinityPos), -3, "InfinityPos -3.5");
            //NumberHelper.AssertNumber(Math.Round(-3.8, MidpointRounding.InfinityPos), -3, "InfinityPos -3.8");

            //NumberHelper.AssertNumber(Math.Round(3.8, MidpointRounding.InfinityNeg), 3, "InfinityNeg 3.8");
            //NumberHelper.AssertNumber(Math.Round(3.5, MidpointRounding.InfinityNeg), 3, "InfinityNeg 3.5");
            //NumberHelper.AssertNumber(Math.Round(3.2, MidpointRounding.InfinityNeg), 3, "InfinityNeg 3.2");
            //NumberHelper.AssertNumber(Math.Round(-3.2, MidpointRounding.InfinityNeg), -4, "InfinityNeg -3.2");
            //NumberHelper.AssertNumber(Math.Round(-3.5, MidpointRounding.InfinityNeg), -4, "InfinityNeg -3.5");
            //NumberHelper.AssertNumber(Math.Round(-3.8, MidpointRounding.InfinityNeg), -4, "InfinityNeg -3.8");

            //NumberHelper.AssertNumber(Math.Round(3.8, MidpointRounding.TowardsZero), 4, "TowardsZero 3.8");
            //NumberHelper.AssertNumber(Math.Round(3.5, MidpointRounding.TowardsZero), 3, "TowardsZero 3.5");
            //NumberHelper.AssertNumber(Math.Round(3.2, MidpointRounding.TowardsZero), 3, "TowardsZero 3.2");
            //NumberHelper.AssertNumber(Math.Round(-3.2, MidpointRounding.TowardsZero), -3, "TowardsZero -3.2");
            //NumberHelper.AssertNumber(Math.Round(-3.5, MidpointRounding.TowardsZero), -3, "TowardsZero -3.5");
            //NumberHelper.AssertNumber(Math.Round(-3.8, MidpointRounding.TowardsZero), -4, "TowardsZero -3.8");

            NumberHelper.AssertDouble(4, Math.Round(3.8, MidpointRounding.AwayFromZero), "AwayFromZero 3.8");
            NumberHelper.AssertDouble(4, Math.Round(3.5, MidpointRounding.AwayFromZero), "AwayFromZero 3.5");
            NumberHelper.AssertDouble(3, Math.Round(3.2, MidpointRounding.AwayFromZero), "AwayFromZero 3.2");
            NumberHelper.AssertDouble(-3, Math.Round(-3.2, MidpointRounding.AwayFromZero), "AwayFromZero -3.2");
            NumberHelper.AssertDouble(-4, Math.Round(-3.5, MidpointRounding.AwayFromZero), "AwayFromZero -3.5");
            NumberHelper.AssertDouble(-4, Math.Round(-3.8, MidpointRounding.AwayFromZero), "AwayFromZero -3.8");

            //NumberHelper.AssertNumber(Math.Round(3.8, MidpointRounding.Ceil), 4, "Ceil 3.8");
            //NumberHelper.AssertNumber(Math.Round(3.5, MidpointRounding.Ceil), 4, "Ceil 3.5");
            //NumberHelper.AssertNumber(Math.Round(3.2, MidpointRounding.Ceil), 3, "Ceil 3.2");
            //NumberHelper.AssertNumber(Math.Round(-3.2, MidpointRounding.Ceil), -3, "Ceil -3.2");
            //NumberHelper.AssertNumber(Math.Round(-3.5, MidpointRounding.Ceil), -3, "Ceil -3.5");
            //NumberHelper.AssertNumber(Math.Round(-3.8, MidpointRounding.Ceil), -4, "Ceil -3.8");

            //NumberHelper.AssertNumber(Math.Round(3.8, MidpointRounding.Floor), 4, "Floor 3.8");
            //NumberHelper.AssertNumber(Math.Round(3.5, MidpointRounding.Floor), 3, "Floor 3.5");
            //NumberHelper.AssertNumber(Math.Round(3.2, MidpointRounding.Floor), 3, "Floor 3.2");
            //NumberHelper.AssertNumber(Math.Round(-3.2, MidpointRounding.Floor), -3, "Floor -3.2");
            //NumberHelper.AssertNumber(Math.Round(-3.5, MidpointRounding.Floor), -4, "Floor -3.5");
            //NumberHelper.AssertNumber(Math.Round(-3.8, MidpointRounding.Floor), -4, "Floor -3.8");

            NumberHelper.AssertDouble(4, Math.Round(3.8, MidpointRounding.ToEven), "ToEven 3.8");
            NumberHelper.AssertDouble(4, Math.Round(3.5, MidpointRounding.ToEven), "ToEven 3.5");
            NumberHelper.AssertDouble(3, Math.Round(3.2, MidpointRounding.ToEven), "ToEven 3.2");
            NumberHelper.AssertDouble(-3, Math.Round(-3.2, MidpointRounding.ToEven), "ToEven -3.2");
            NumberHelper.AssertDouble(-4, Math.Round(-3.5, MidpointRounding.ToEven), "ToEven -3.5");
            NumberHelper.AssertDouble(-4, Math.Round(-3.8, MidpointRounding.ToEven), "ToEven -3.8");
        }

        [Test]
        public void RoundDoubleWithPrecisionAndModeWorks()
        {
            NumberHelper.AssertDouble(1.4, Math.Round(1.45, 1), "Bridge584 1");
            NumberHelper.AssertDouble(1.6, Math.Round(1.55, 1), "Bridge584 2");
            NumberHelper.AssertDouble(123.4568, Math.Round(123.456789, 4), "Bridge584 3");
            NumberHelper.AssertDouble(123.456789, Math.Round(123.456789, 6), "Bridge584 4");
            NumberHelper.AssertDouble(123.456789, Math.Round(123.456789, 8), "Bridge584 5");
            NumberHelper.AssertDouble(-123, Math.Round(-123.456, 0), "Bridge584 6");

            //NumberHelper.AssertNumber(Math.Round(1.45, 1, MidpointRounding.Up), 1.5, "Bridge584 Up 1");
            //NumberHelper.AssertNumber(Math.Round(1.55, 1, MidpointRounding.Up), 1.6, "Bridge584 Up 2");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 4, MidpointRounding.Up), 123.4568, "Bridge584 Up 3");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 6, MidpointRounding.Up), 123.456789, "Bridge584 Up 4");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 8, MidpointRounding.Up), 123.456789, "Bridge584 Up 5");
            //NumberHelper.AssertNumber(Math.Round(-123.456, 0, MidpointRounding.Up), -124.0, "Bridge584 Up 6");

            NumberHelper.AssertDouble(1.5, Math.Round(1.45, 1, MidpointRounding.AwayFromZero), "Bridge584 AwayFromZero 1");
            NumberHelper.AssertDouble(1.6, Math.Round(1.55, 1, MidpointRounding.AwayFromZero), "Bridge584 AwayFromZero 2");
            NumberHelper.AssertDouble(123.4568, Math.Round(123.456789, 4, MidpointRounding.AwayFromZero), "Bridge584 AwayFromZero 3");
            NumberHelper.AssertDouble(123.456789, Math.Round(123.456789, 6, MidpointRounding.AwayFromZero), "Bridge584 AwayFromZero 4");
            NumberHelper.AssertDouble(123.456789, Math.Round(123.456789, 8, MidpointRounding.AwayFromZero), "Bridge584 AwayFromZero 5");
            NumberHelper.AssertDouble(-123.0, Math.Round(-123.456, 0, MidpointRounding.AwayFromZero), "Bridge584 AwayFromZero 6");

            //NumberHelper.AssertNumber(Math.Round(1.45, 1, MidpointRounding.Down), 1.4, "Bridge584 Down 1");
            //NumberHelper.AssertNumber(Math.Round(1.55, 1, MidpointRounding.Down), 1.5, "Bridge584 Down 2");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 4, MidpointRounding.Down), 123.4567, "Bridge584 Down 3");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 6, MidpointRounding.Down), 123.456789, "Bridge584 Down 4");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 8, MidpointRounding.Down), 123.456789, "Bridge584 Down 5");
            //NumberHelper.AssertNumber(Math.Round(-123.456, 0, MidpointRounding.Down), -123.0, "Bridge584 Down 6");

            //NumberHelper.AssertNumber(Math.Round(1.45, 1, MidpointRounding.InfinityPos), 1.5, "Bridge584 InfinityPos 1");
            //NumberHelper.AssertNumber(Math.Round(1.55, 1, MidpointRounding.InfinityPos), 1.6, "Bridge584 InfinityPos 2");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 4, MidpointRounding.InfinityPos), 123.4568, "Bridge584 InfinityPos 3");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 6, MidpointRounding.InfinityPos), 123.456789, "Bridge584 InfinityPos 4");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 8, MidpointRounding.InfinityPos), 123.456789, "Bridge584 InfinityPos 5");
            //NumberHelper.AssertNumber(Math.Round(-123.456, 0, MidpointRounding.InfinityPos), -123.0, "Bridge584 InfinityPos 6");

            //NumberHelper.AssertNumber(Math.Round(1.45, 1, MidpointRounding.InfinityNeg), 1.4, "Bridge584 InfinityNeg 1");
            //NumberHelper.AssertNumber(Math.Round(1.55, 1, MidpointRounding.InfinityNeg), 1.5, "Bridge584 InfinityNeg 2");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 4, MidpointRounding.InfinityNeg), 123.4567, "Bridge584 InfinityNeg 3");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 6, MidpointRounding.InfinityNeg), 123.456789, "Bridge584 InfinityNeg 4");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 8, MidpointRounding.InfinityNeg), 123.456789, "Bridge584 InfinityNeg 5");
            //NumberHelper.AssertNumber(Math.Round(-123.456, 0, MidpointRounding.InfinityNeg), -124.0, "Bridge584 InfinityNeg 6");

            //NumberHelper.AssertNumber(Math.Round(1.45, 1, MidpointRounding.TowardsZero), 1.4, "Bridge584 TowardsZero 1");
            //NumberHelper.AssertNumber(Math.Round(1.55, 1, MidpointRounding.TowardsZero), 1.5, "Bridge584 TowardsZero 2");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 4, MidpointRounding.TowardsZero), 123.4568, "Bridge584 TowardsZero 3");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 6, MidpointRounding.TowardsZero), 123.456789, "Bridge584 TowardsZero 4");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 8, MidpointRounding.TowardsZero), 123.456789, "Bridge584 TowardsZero 5");
            //NumberHelper.AssertNumber(Math.Round(-123.456, 0, MidpointRounding.TowardsZero), -123.0, "Bridge584 TowardsZero 6");

            NumberHelper.AssertDouble(1.4, Math.Round(1.45, 1, MidpointRounding.ToEven), "Bridge584 ToEven 1");
            NumberHelper.AssertDouble(1.6, Math.Round(1.55, 1, MidpointRounding.ToEven), "Bridge584 ToEven 2");
            NumberHelper.AssertDouble(123.4568, Math.Round(123.456789, 4, MidpointRounding.ToEven), "Bridge584 ToEven 3");
            NumberHelper.AssertDouble(123.456789, Math.Round(123.456789, 6, MidpointRounding.ToEven), "Bridge584 ToEven 4");
            NumberHelper.AssertDouble(123.456789, Math.Round(123.456789, 8, MidpointRounding.ToEven), "Bridge584 ToEven 5");
            NumberHelper.AssertDouble(-123.0, Math.Round(-123.456, 0, MidpointRounding.ToEven), "Bridge584 ToEven 6");

            //NumberHelper.AssertNumber(Math.Round(1.45, 1, MidpointRounding.Ceil), 1.5, "Bridge584 Ceil 1");
            //NumberHelper.AssertNumber(Math.Round(1.55, 1, MidpointRounding.Ceil), 1.6, "Bridge584 Ceil 2");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 4, MidpointRounding.Ceil), 123.4568, "Bridge584 Ceil 3");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 6, MidpointRounding.Ceil), 123.456789, "Bridge584 Ceil 4");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 8, MidpointRounding.Ceil), 123.456789, "Bridge584 Ceil 5");
            //NumberHelper.AssertNumber(Math.Round(-123.456, 0, MidpointRounding.Ceil), -123.0, "Bridge584 Ceil 6");

            //NumberHelper.AssertNumber(Math.Round(1.45, 1, MidpointRounding.Floor), 1.4, "Bridge584 Floor 1");
            //NumberHelper.AssertNumber(Math.Round(1.55, 1, MidpointRounding.Floor), 1.5, "Bridge584 Floor 2");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 4, MidpointRounding.Floor), 123.4568, "Bridge584 Floor 3");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 6, MidpointRounding.Floor), 123.456789, "Bridge584 Floor 4");
            //NumberHelper.AssertNumber(Math.Round(123.456789, 8, MidpointRounding.Floor), 123.456789, "Bridge584 Floor 5");
            //NumberHelper.AssertNumber(Math.Round(-123.456, 0, MidpointRounding.Floor), -123.0, "Bridge584 Floor 6");
        }

        [Test]
        public void JsRoundWorks()
        {
            Assert.AreEqual(3.0, Math.JsRound(3.432));
            Assert.AreEqual(4.0, Math.JsRound(3.6));
            Assert.AreEqual(4.0, Math.JsRound(3.5));
            Assert.AreEqual(5.0, Math.JsRound(4.5));
            Assert.AreEqual(-3.0, Math.JsRound(-3.5));
            Assert.AreEqual(-4.0, Math.JsRound(-4.5));
        }

        [Test]
        public void IEEERemainderWorks()
        {
            NumberHelper.AssertDoubleWithEpsilon8(Math.IEEERemainder(3.1, 4.0), -0.9);
            NumberHelper.AssertDoubleWithEpsilon8(Math.IEEERemainder(16.1, 4.0), 0.100000000000001);
            NumberHelper.AssertDoubleWithEpsilon8(Math.IEEERemainder(4.0, 16.1), 4.0);
            NumberHelper.AssertDoubleWithEpsilon8(Math.IEEERemainder(3.1, 3.2), -0.1);
            NumberHelper.AssertDoubleWithEpsilon8(Math.IEEERemainder(3.2, 3.1), 0.1);

            Assert.AreEqual(-1.0, Math.IEEERemainder(3.0, 2.0));
            Assert.AreEqual(0.0, Math.IEEERemainder(4.0, 2.0));
            Assert.AreEqual(1.0, Math.IEEERemainder(10.0, 3.0));
            Assert.AreEqual(-1.0, Math.IEEERemainder(11.0, 3.0));
            Assert.AreEqual(-1.0, Math.IEEERemainder(27.0, 4.0));
            Assert.AreEqual(-2.0, Math.IEEERemainder(28.0, 5.0));
            NumberHelper.AssertDoubleWithEpsilon8(Math.IEEERemainder(17.8, 4.0), 1.8);
            NumberHelper.AssertDoubleWithEpsilon8(Math.IEEERemainder(17.8, 4.1), 1.4);
            NumberHelper.AssertDoubleWithEpsilon8(Math.IEEERemainder(-16.3, 4.1), 0.0999999999999979);
            NumberHelper.AssertDoubleWithEpsilon8(Math.IEEERemainder(17.8, -4.1), 1.4);
            NumberHelper.AssertDoubleWithEpsilon8(Math.IEEERemainder(-17.8, -4.1), -1.4);
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
            NumberHelper.AssertDoubleWithEpsilon8(Math.Sin(0.5), 0.479425538604203);
        }

        [Test]
        public void SqrtWorks()
        {
            NumberHelper.AssertDoubleWithEpsilon8(Math.Sqrt((double)3m), 1.73205080756888);
        }

        [Test]
        public void TanWorks()
        {
            NumberHelper.AssertDoubleWithEpsilon8(Math.Tan(0.5), 0.5463024898437905);
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
            NumberHelper.AssertDecimal(3.0, Math.Truncate(3.9m));
            NumberHelper.AssertDecimal(-3.0, Math.Truncate(-3.9m));
        }

        // #SPI
        //[Test]
        //public void BigMulWorks_SPI_1629()
        //{
        //    // #1629
        //    Assert.AreEqual(Math.BigMul(214748364, 214748364), 46116859840676496L);
        //}
    }
}