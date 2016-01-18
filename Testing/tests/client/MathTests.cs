using System;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_MATH)]
    [TestFixture(TestNameFormat = "Math - {0}")]
    public class MathTests
    {
        private void AssertAlmostEqual(double d1, double d2)
        {
            var diff = d2 - d1;
            if (diff < 0)
                diff = -diff;
            Assert.True(diff < 1e-8);
        }

        private void AssertIsDecimalAndEqualTo(object v, object d, string message = null)
        {
            Assert.AreStrictEqual(v is decimal, true, message);
            Assert.AreStrictEqual(v.ToString(), d.ToString(), message);
        }

        private void AssertIsDoubleAndEqualTo(object v, object d, string message = null)
        {
            Assert.AreStrictEqual(v is double, true, message);
            Assert.AreStrictEqual(v.ToString(), d.ToString(), message);
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
            Assert.AreEqual(Math.Abs(-12.5), 12.5);
        }

        [Test]
        public void AbsOfIntWorks()
        {
            Assert.AreEqual(Math.Abs(-12), 12);
        }

        [Test]
        public void AbsOfLongWorks()
        {
            Assert.AreEqual(Math.Abs(-12L), 12L);
        }

        [Test]
        public void AbsOfSbyteWorks()
        {
            Assert.AreEqual(Math.Abs((sbyte)-15), (sbyte)15);
        }

        [Test]
        public void AbsOfShortWorks()
        {
            Assert.AreEqual(Math.Abs((short)-15), (short)15);
        }

        [Test]
        public void AbsOfFloatWorks()
        {
            Assert.AreEqual(Math.Abs(-17.5f), 17.5f);
        }

        [Test]
        public void AbsOfDecimalWorks()
        {
            AssertIsDecimalAndEqualTo(Math.Abs(-10.0m), 10.0);
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
        public void CosWorks()
        {
            AssertAlmostEqual(Math.Cos(0.5), 0.8775825618903728);
        }

        [Test]
        public void DivRemWorks()
        {
            int resultInt;

            Math.DivRem(1, 2, out resultInt);
            Assert.AreEqual(resultInt, 1);

            Math.DivRem(234, 157, out resultInt);
            Assert.AreEqual(resultInt, 77);

            Math.DivRem(0, 20, out resultInt);
            Assert.AreEqual(resultInt, 0);

            long resultLong;

            Math.DivRem(2, 4, out resultLong);
            Assert.AreEqual(resultLong, 2);

            Math.DivRem(2341, 157, out resultLong);
            Assert.AreEqual(resultLong, 143);
        }

        [Test]
        public void ExpWorks()
        {
            AssertAlmostEqual(Math.Exp(0.5), 1.6487212707001282);
        }

        [Test]
        public void FloorOfDoubleWorks()
        {
            Assert.AreEqual(Math.Floor(3.6), 3.0);
            Assert.AreEqual(Math.Floor(-3.6), -4.0);
        }

        [Test]
        public void FloorOfDecimalWorks()
        {
            AssertIsDecimalAndEqualTo(Math.Floor(3.6m), 3.0);
            AssertIsDecimalAndEqualTo(Math.Floor(-3.6m), -4.0);
        }

        [Test]
        public void LogWorks()
        {
            AssertAlmostEqual(Math.Log(0.5), -0.6931471805599453);
        }

        [Test]
        public void MaxOfByteWorks()
        {
            Assert.AreEqual(Math.Max((byte)1, (byte)3), 3.0);
            Assert.AreEqual(Math.Max((byte)5, (byte)3), 5.0);
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
            Assert.AreEqual(Math.Max(1.0, 3.0), 3.0);
            Assert.AreEqual(Math.Max(4.0, 3.0), 4.0);
        }

        [Test]
        public void MaxOfShortWorks()
        {
            Assert.AreEqual(Math.Max((short)1, (short)3), (short)3);
            Assert.AreEqual(Math.Max((short)4, (short)3), (short)4);
        }

        [Test]
        public void MaxOfIntWorks()
        {
            Assert.AreEqual(Math.Max(1, 3), 3);
            Assert.AreEqual(Math.Max(4, 3), 4);
        }

        [Test]
        public void MaxOfLongWorks()
        {
            Assert.AreEqual(Math.Max(1L, 3L), 3L);
            Assert.AreEqual(Math.Max(4L, 3L), 4L);
        }

        [Test]
        public void MaxOfSByteWorks()
        {
            Assert.AreEqual(Math.Max((sbyte)-1, (sbyte)3), (sbyte)3);
            Assert.AreEqual(Math.Max((sbyte)5, (sbyte)3), (sbyte)5);
        }

        [Test]
        public void MaxOfFloatWorks()
        {
            Assert.AreEqual(Math.Max(-14.5f, 3.0f), 3.0f);
            Assert.AreEqual(Math.Max(5.4f, 3.0f), 5.4f);
        }

        [Test]
        public void MaxOfUShortWorks()
        {
            Assert.AreEqual(Math.Max((ushort)1, (ushort)3), (ushort)3);
            Assert.AreEqual(Math.Max((ushort)5, (ushort)3), (ushort)5);
        }

        [Test]
        public void MaxOfUIntWorks()
        {
            Assert.AreEqual(Math.Max((uint)1, (uint)3), (uint)3);
            Assert.AreEqual(Math.Max((uint)5, (uint)3), (uint)5);
        }

        [Test]
        public void MaxOfULongWorks()
        {
            Assert.AreEqual(Math.Max((ulong)100, (ulong)300), (ulong)300);
            Assert.AreEqual(Math.Max((ulong)500, (ulong)300), (ulong)500);
        }

        [Test]
        public void MinOfByteWorks()
        {
            Assert.AreEqual(Math.Min((byte)1, (byte)3), 1.0);
            Assert.AreEqual(Math.Min((byte)5, (byte)3), 3.0);
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
            Assert.AreEqual(Math.Min(1.0, 3.0), 1.0);
            Assert.AreEqual(Math.Min(4.0, 3.0), 3.0);
        }

        [Test]
        public void MinOfShortWorks()
        {
            Assert.AreEqual(Math.Min((short)1, (short)3), (short)1);
            Assert.AreEqual(Math.Min((short)4, (short)3), (short)3);
        }

        [Test]
        public void MinOfIntWorks()
        {
            Assert.AreEqual(Math.Min(1, 3), 1);
            Assert.AreEqual(Math.Min(4, 3), 3);
        }

        [Test]
        public void MinOfLongWorks()
        {
            Assert.AreEqual(Math.Min(1L, 3L), 1L);
            Assert.AreEqual(Math.Min(4L, 3L), 3L);
        }

        [Test]
        public void MinOfSByteWorks()
        {
            Assert.AreEqual(Math.Min((sbyte)-1, (sbyte)3), (sbyte)-1);
            Assert.AreEqual(Math.Min((sbyte)5, (sbyte)3), (sbyte)3);
        }

        [Test]
        public void MinOfFloatWorks()
        {
            Assert.AreEqual(Math.Min(-14.5f, 3.0f), -14.5f);
            Assert.AreEqual(Math.Min(5.4f, 3.0f), 3.0f);
        }

        [Test]
        public void MinOfUShortWorks()
        {
            Assert.AreEqual(Math.Min((ushort)1, (ushort)3), (ushort)1);
            Assert.AreEqual(Math.Min((ushort)5, (ushort)3), (ushort)3);
        }

        [Test]
        public void MinOfUIntWorks()
        {
            Assert.AreEqual(Math.Min((uint)1, (uint)3), (uint)1);
            Assert.AreEqual(Math.Min((uint)5, (uint)3), (uint)3);
        }

        [Test]
        public void MinOfULongWorks()
        {
            Assert.AreEqual(Math.Min((ulong)100, (ulong)300), (ulong)100);
            Assert.AreEqual(Math.Min((ulong)500, (ulong)300), (ulong)300);
        }

        [Test]
        public void PowWorks()
        {
            AssertAlmostEqual(Math.Pow(3, 0.5), 1.7320508075688772);

            AssertAlmostEqual(Math.Pow(3, 2), 9);
            AssertAlmostEqual(Math.Pow(2, 3), 8);
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
            Assert.AreEqual(Math.Round(3.432), 3.0);
            Assert.AreEqual(Math.Round(3.6), 4.0);
            Assert.AreEqual(Math.Round(3.5), 4.0);
            Assert.AreEqual(Math.Round(4.5), 4.0);
            Assert.AreEqual(Math.Round(-3.5), -4.0);
            Assert.AreEqual(Math.Round(-4.5), -4.0);
        }

        [Test]
        public void RoundDecimalWithModeWorks()
        {
            AssertIsDecimalAndEqualTo(Math.Round(3.8m), 4, "3.8m");
            AssertIsDecimalAndEqualTo(Math.Round(3.5m), 4, "3.5m");
            AssertIsDecimalAndEqualTo(Math.Round(3.2m), 3, "3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.2m), -3, "-3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.5m), -4, "-3.5");
            AssertIsDecimalAndEqualTo(Math.Round(-3.8m), -4, "-3.8m");


            AssertIsDecimalAndEqualTo(Math.Round(3.8m, MidpointRounding.Up), 4, "Up 3.8m");
            AssertIsDecimalAndEqualTo(Math.Round(3.5m, MidpointRounding.Up), 4, "Up 3.5m");
            AssertIsDecimalAndEqualTo(Math.Round(3.2m, MidpointRounding.Up), 4, "Up 3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.2m, MidpointRounding.Up), -4, "Up -3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.5m, MidpointRounding.Up), -4, "Up -3.5");
            AssertIsDecimalAndEqualTo(Math.Round(-3.8m, MidpointRounding.Up), -4, "Up -3.8m");

            AssertIsDecimalAndEqualTo(Math.Round(3.8m, MidpointRounding.Down), 3, "Down 3.8m");
            AssertIsDecimalAndEqualTo(Math.Round(3.5m, MidpointRounding.Down), 3, "Down 3.5m");
            AssertIsDecimalAndEqualTo(Math.Round(3.2m, MidpointRounding.Down), 3, "Down 3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.2m, MidpointRounding.Down), -3, "Down -3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.5m, MidpointRounding.Down), -3, "Down -3.5");
            AssertIsDecimalAndEqualTo(Math.Round(-3.8m, MidpointRounding.Down), -3, "Down -3.8m");

            AssertIsDecimalAndEqualTo(Math.Round(3.8m, MidpointRounding.InfinityPos), 4, "InfinityPos 3.8m");
            AssertIsDecimalAndEqualTo(Math.Round(3.5m, MidpointRounding.InfinityPos), 4, "InfinityPos 3.5m");
            AssertIsDecimalAndEqualTo(Math.Round(3.2m, MidpointRounding.InfinityPos), 4, "InfinityPos 3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.2m, MidpointRounding.InfinityPos), -3, "InfinityPos -3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.5m, MidpointRounding.InfinityPos), -3, "InfinityPos -3.5");
            AssertIsDecimalAndEqualTo(Math.Round(-3.8m, MidpointRounding.InfinityPos), -3, "InfinityPos -3.8m");

            AssertIsDecimalAndEqualTo(Math.Round(3.8m, MidpointRounding.InfinityNeg), 3, "InfinityNeg 3.8m");
            AssertIsDecimalAndEqualTo(Math.Round(3.5m, MidpointRounding.InfinityNeg), 3, "InfinityNeg 3.5m");
            AssertIsDecimalAndEqualTo(Math.Round(3.2m, MidpointRounding.InfinityNeg), 3, "InfinityNeg 3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.2m, MidpointRounding.InfinityNeg), -4, "InfinityNeg -3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.5m, MidpointRounding.InfinityNeg), -4, "InfinityNeg -3.5");
            AssertIsDecimalAndEqualTo(Math.Round(-3.8m, MidpointRounding.InfinityNeg), -4, "InfinityNeg -3.8m");

            AssertIsDecimalAndEqualTo(Math.Round(3.8m, MidpointRounding.TowardsZero), 4, "TowardsZero 3.8m");
            AssertIsDecimalAndEqualTo(Math.Round(3.5m, MidpointRounding.TowardsZero), 3, "TowardsZero 3.5m");
            AssertIsDecimalAndEqualTo(Math.Round(3.2m, MidpointRounding.TowardsZero), 3, "TowardsZero 3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.2m, MidpointRounding.TowardsZero), -3, "TowardsZero -3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.5m, MidpointRounding.TowardsZero), -3, "TowardsZero -3.5");
            AssertIsDecimalAndEqualTo(Math.Round(-3.8m, MidpointRounding.TowardsZero), -4, "TowardsZero -3.8m");

            AssertIsDecimalAndEqualTo(Math.Round(3.8m, MidpointRounding.AwayFromZero), 4, "AwayFromZero 3.8m");
            AssertIsDecimalAndEqualTo(Math.Round(3.5m, MidpointRounding.AwayFromZero), 4, "AwayFromZero 3.5m");
            AssertIsDecimalAndEqualTo(Math.Round(3.2m, MidpointRounding.AwayFromZero), 3, "AwayFromZero 3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.2m, MidpointRounding.AwayFromZero), -3, "AwayFromZero -3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.5m, MidpointRounding.AwayFromZero), -4, "AwayFromZero -3.5");
            AssertIsDecimalAndEqualTo(Math.Round(-3.8m, MidpointRounding.AwayFromZero), -4, "AwayFromZero -3.8m");

            AssertIsDecimalAndEqualTo(Math.Round(3.8m, MidpointRounding.Ceil), 4, "Ceil 3.8m");
            AssertIsDecimalAndEqualTo(Math.Round(3.5m, MidpointRounding.Ceil), 4, "Ceil 3.5m");
            AssertIsDecimalAndEqualTo(Math.Round(3.2m, MidpointRounding.Ceil), 3, "Ceil 3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.2m, MidpointRounding.Ceil), -3, "Ceil -3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.5m, MidpointRounding.Ceil), -3, "Ceil -3.5");
            AssertIsDecimalAndEqualTo(Math.Round(-3.8m, MidpointRounding.Ceil), -4, "Ceil -3.8m");

            AssertIsDecimalAndEqualTo(Math.Round(3.8m, MidpointRounding.Floor), 4, "Floor 3.8m");
            AssertIsDecimalAndEqualTo(Math.Round(3.5m, MidpointRounding.Floor), 3, "Floor 3.5m");
            AssertIsDecimalAndEqualTo(Math.Round(3.2m, MidpointRounding.Floor), 3, "Floor 3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.2m, MidpointRounding.Floor), -3, "Floor -3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.5m, MidpointRounding.Floor), -4, "Floor -3.5");
            AssertIsDecimalAndEqualTo(Math.Round(-3.8m, MidpointRounding.Floor), -4, "Floor -3.8m");

            AssertIsDecimalAndEqualTo(Math.Round(3.8m, MidpointRounding.ToEven), 4, "ToEven 3.8m");
            AssertIsDecimalAndEqualTo(Math.Round(3.5m, MidpointRounding.ToEven), 4, "ToEven 3.5m");
            AssertIsDecimalAndEqualTo(Math.Round(3.2m, MidpointRounding.ToEven), 3, "ToEven 3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.2m, MidpointRounding.ToEven), -3, "ToEven -3.2m");
            AssertIsDecimalAndEqualTo(Math.Round(-3.5m, MidpointRounding.ToEven), -4, "ToEven -3.5");
            AssertIsDecimalAndEqualTo(Math.Round(-3.8m, MidpointRounding.ToEven), -4, "ToEven -3.8m");
        }

        [Test]
        public void RoundDecimalWithPrecisionAndModeWorks()
        {
            AssertIsDecimalAndEqualTo(Math.Round(1.45m, 1), 1.4m, "Bridge584 1");
            AssertIsDecimalAndEqualTo(Math.Round(1.55m, 1), 1.6m, "Bridge584 2");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 4), 123.4568m, "Bridge584 3");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 6), 123.456789m, "Bridge584 4");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 8), 123.456789m, "Bridge584 5");
            AssertIsDecimalAndEqualTo(Math.Round(-123.456M, 0), -123m, "Bridge584 6");

            AssertIsDecimalAndEqualTo(Math.Round(1.45m, 1, MidpointRounding.Up), 1.5, "Bridge584 Up 1");
            AssertIsDecimalAndEqualTo(Math.Round(1.55m, 1, MidpointRounding.Up), 1.6, "Bridge584 Up 2");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 4, MidpointRounding.Up), 123.4568, "Bridge584 Up 3");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 6, MidpointRounding.Up), 123.456789, "Bridge584 Up 4");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 8, MidpointRounding.Up), 123.456789, "Bridge584 Up 5");
            AssertIsDecimalAndEqualTo(Math.Round(-123.456M, 0, MidpointRounding.Up), -124.0, "Bridge584 Up 6");

            AssertIsDecimalAndEqualTo(Math.Round(1.45m, 1, MidpointRounding.AwayFromZero), 1.5, "Bridge584 AwayFromZero 1");
            AssertIsDecimalAndEqualTo(Math.Round(1.55m, 1, MidpointRounding.AwayFromZero), 1.6, "Bridge584 AwayFromZero 2");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 4, MidpointRounding.AwayFromZero), 123.4568, "Bridge584 AwayFromZero 3");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 6, MidpointRounding.AwayFromZero), 123.456789, "Bridge584 AwayFromZero 4");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 8, MidpointRounding.AwayFromZero), 123.456789, "Bridge584 AwayFromZero 5");
            AssertIsDecimalAndEqualTo(Math.Round(-123.456M, 0, MidpointRounding.AwayFromZero), -123.0, "Bridge584 AwayFromZero 6");

            AssertIsDecimalAndEqualTo(Math.Round(1.45m, 1, MidpointRounding.Down), 1.4, "Bridge584 Down 1");
            AssertIsDecimalAndEqualTo(Math.Round(1.55m, 1, MidpointRounding.Down), 1.5, "Bridge584 Down 2");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 4, MidpointRounding.Down), 123.4567, "Bridge584 Down 3");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 6, MidpointRounding.Down), 123.456789, "Bridge584 Down 4");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 8, MidpointRounding.Down), 123.456789, "Bridge584 Down 5");
            AssertIsDecimalAndEqualTo(Math.Round(-123.456M, 0, MidpointRounding.Down), -123.0, "Bridge584 Down 6");

            AssertIsDecimalAndEqualTo(Math.Round(1.45m, 1, MidpointRounding.InfinityPos), 1.5, "Bridge584 InfinityPos 1");
            AssertIsDecimalAndEqualTo(Math.Round(1.55m, 1, MidpointRounding.InfinityPos), 1.6, "Bridge584 InfinityPos 2");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 4, MidpointRounding.InfinityPos), 123.4568, "Bridge584 InfinityPos 3");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 6, MidpointRounding.InfinityPos), 123.456789, "Bridge584 InfinityPos 4");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 8, MidpointRounding.InfinityPos), 123.456789, "Bridge584 InfinityPos 5");
            AssertIsDecimalAndEqualTo(Math.Round(-123.456M, 0, MidpointRounding.InfinityPos), -123.0, "Bridge584 InfinityPos 6");

            AssertIsDecimalAndEqualTo(Math.Round(1.45m, 1, MidpointRounding.InfinityNeg), 1.4, "Bridge584 InfinityNeg 1");
            AssertIsDecimalAndEqualTo(Math.Round(1.55m, 1, MidpointRounding.InfinityNeg), 1.5, "Bridge584 InfinityNeg 2");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 4, MidpointRounding.InfinityNeg), 123.4567, "Bridge584 InfinityNeg 3");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 6, MidpointRounding.InfinityNeg), 123.456789, "Bridge584 InfinityNeg 4");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 8, MidpointRounding.InfinityNeg), 123.456789, "Bridge584 InfinityNeg 5");
            AssertIsDecimalAndEqualTo(Math.Round(-123.456M, 0, MidpointRounding.InfinityNeg), -124.0, "Bridge584 InfinityNeg 6");

            AssertIsDecimalAndEqualTo(Math.Round(1.45m, 1, MidpointRounding.TowardsZero), 1.4, "Bridge584 TowardsZero 1");
            AssertIsDecimalAndEqualTo(Math.Round(1.55m, 1, MidpointRounding.TowardsZero), 1.5, "Bridge584 TowardsZero 2");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 4, MidpointRounding.TowardsZero), 123.4568, "Bridge584 TowardsZero 3");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 6, MidpointRounding.TowardsZero), 123.456789, "Bridge584 TowardsZero 4");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 8, MidpointRounding.TowardsZero), 123.456789, "Bridge584 TowardsZero 5");
            AssertIsDecimalAndEqualTo(Math.Round(-123.456M, 0, MidpointRounding.TowardsZero), -123.0, "Bridge584 TowardsZero 6");

            AssertIsDecimalAndEqualTo(Math.Round(1.45m, 1, MidpointRounding.ToEven), 1.4, "Bridge584 ToEven 1");
            AssertIsDecimalAndEqualTo(Math.Round(1.55m, 1, MidpointRounding.ToEven), 1.6, "Bridge584 ToEven 2");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 4, MidpointRounding.ToEven), 123.4568, "Bridge584 ToEven 3");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 6, MidpointRounding.ToEven), 123.456789, "Bridge584 ToEven 4");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 8, MidpointRounding.ToEven), 123.456789, "Bridge584 ToEven 5");
            AssertIsDecimalAndEqualTo(Math.Round(-123.456M, 0, MidpointRounding.ToEven), -123.0, "Bridge584 ToEven 6");

            AssertIsDecimalAndEqualTo(Math.Round(1.45m, 1, MidpointRounding.Ceil), 1.5, "Bridge584 Ceil 1");
            AssertIsDecimalAndEqualTo(Math.Round(1.55m, 1, MidpointRounding.Ceil), 1.6, "Bridge584 Ceil 2");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 4, MidpointRounding.Ceil), 123.4568, "Bridge584 Ceil 3");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 6, MidpointRounding.Ceil), 123.456789, "Bridge584 Ceil 4");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 8, MidpointRounding.Ceil), 123.456789, "Bridge584 Ceil 5");
            AssertIsDecimalAndEqualTo(Math.Round(-123.456M, 0, MidpointRounding.Ceil), -123.0, "Bridge584 Ceil 6");

            AssertIsDecimalAndEqualTo(Math.Round(1.45m, 1, MidpointRounding.Floor), 1.4, "Bridge584 Floor 1");
            AssertIsDecimalAndEqualTo(Math.Round(1.55m, 1, MidpointRounding.Floor), 1.5, "Bridge584 Floor 2");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 4, MidpointRounding.Floor), 123.4568, "Bridge584 Floor 3");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 6, MidpointRounding.Floor), 123.456789, "Bridge584 Floor 4");
            AssertIsDecimalAndEqualTo(Math.Round(123.456789M, 8, MidpointRounding.Floor), 123.456789, "Bridge584 Floor 5");
            AssertIsDecimalAndEqualTo(Math.Round(-123.456M, 0, MidpointRounding.Floor), -123.0, "Bridge584 Floor 6");
        }

        [Test]
        public void RoundDoubleWithModeWorks()
        {
            AssertIsDoubleAndEqualTo(Math.Round(3.8), 4, "3.8");
            AssertIsDoubleAndEqualTo(Math.Round(3.5), 4, "3.5");
            AssertIsDoubleAndEqualTo(Math.Round(3.2), 3, "3.2");
            AssertIsDoubleAndEqualTo(Math.Round(-3.2), -3, "-3.2");
            AssertIsDoubleAndEqualTo(Math.Round(-3.5), -4, "-3.5");
            AssertIsDoubleAndEqualTo(Math.Round(-3.8), -4, "-3.8");

            //AssertIsDoubleAndEqualTo(Math.Round(3.8, MidpointRounding.Up), 4, "Up 3.8");
            //AssertIsDoubleAndEqualTo(Math.Round(3.5, MidpointRounding.Up), 4, "Up 3.5");
            //AssertIsDoubleAndEqualTo(Math.Round(3.2, MidpointRounding.Up), 4, "Up 3.2");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.2, MidpointRounding.Up), -4, "Up -3.2");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.5, MidpointRounding.Up), -4, "Up -3.5");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.8, MidpointRounding.Up), -4, "Up -3.8");

            //AssertIsDoubleAndEqualTo(Math.Round(3.8, MidpointRounding.Down), 3, "Down 3.8");
            //AssertIsDoubleAndEqualTo(Math.Round(3.5, MidpointRounding.Down), 3, "Down 3.5");
            //AssertIsDoubleAndEqualTo(Math.Round(3.2, MidpointRounding.Down), 3, "Down 3.2");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.2, MidpointRounding.Down), -3, "Down -3.2");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.5, MidpointRounding.Down), -3, "Down -3.5");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.8, MidpointRounding.Down), -3, "Down -3.8");

            //AssertIsDoubleAndEqualTo(Math.Round(3.8, MidpointRounding.InfinityPos), 4, "InfinityPos 3.8");
            //AssertIsDoubleAndEqualTo(Math.Round(3.5, MidpointRounding.InfinityPos), 4, "InfinityPos 3.5");
            //AssertIsDoubleAndEqualTo(Math.Round(3.2, MidpointRounding.InfinityPos), 4, "InfinityPos 3.2");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.2, MidpointRounding.InfinityPos), -3, "InfinityPos -3.2");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.5, MidpointRounding.InfinityPos), -3, "InfinityPos -3.5");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.8, MidpointRounding.InfinityPos), -3, "InfinityPos -3.8");

            //AssertIsDoubleAndEqualTo(Math.Round(3.8, MidpointRounding.InfinityNeg), 3, "InfinityNeg 3.8");
            //AssertIsDoubleAndEqualTo(Math.Round(3.5, MidpointRounding.InfinityNeg), 3, "InfinityNeg 3.5");
            //AssertIsDoubleAndEqualTo(Math.Round(3.2, MidpointRounding.InfinityNeg), 3, "InfinityNeg 3.2");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.2, MidpointRounding.InfinityNeg), -4, "InfinityNeg -3.2");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.5, MidpointRounding.InfinityNeg), -4, "InfinityNeg -3.5");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.8, MidpointRounding.InfinityNeg), -4, "InfinityNeg -3.8");

            //AssertIsDoubleAndEqualTo(Math.Round(3.8, MidpointRounding.TowardsZero), 4, "TowardsZero 3.8");
            //AssertIsDoubleAndEqualTo(Math.Round(3.5, MidpointRounding.TowardsZero), 3, "TowardsZero 3.5");
            //AssertIsDoubleAndEqualTo(Math.Round(3.2, MidpointRounding.TowardsZero), 3, "TowardsZero 3.2");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.2, MidpointRounding.TowardsZero), -3, "TowardsZero -3.2");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.5, MidpointRounding.TowardsZero), -3, "TowardsZero -3.5");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.8, MidpointRounding.TowardsZero), -4, "TowardsZero -3.8");

            AssertIsDoubleAndEqualTo(Math.Round(3.8, MidpointRounding.AwayFromZero), 4, "AwayFromZero 3.8");
            AssertIsDoubleAndEqualTo(Math.Round(3.5, MidpointRounding.AwayFromZero), 4, "AwayFromZero 3.5");
            AssertIsDoubleAndEqualTo(Math.Round(3.2, MidpointRounding.AwayFromZero), 3, "AwayFromZero 3.2");
            AssertIsDoubleAndEqualTo(Math.Round(-3.2, MidpointRounding.AwayFromZero), -3, "AwayFromZero -3.2");
            AssertIsDoubleAndEqualTo(Math.Round(-3.5, MidpointRounding.AwayFromZero), -4, "AwayFromZero -3.5");
            AssertIsDoubleAndEqualTo(Math.Round(-3.8, MidpointRounding.AwayFromZero), -4, "AwayFromZero -3.8");

            //AssertIsDoubleAndEqualTo(Math.Round(3.8, MidpointRounding.Ceil), 4, "Ceil 3.8");
            //AssertIsDoubleAndEqualTo(Math.Round(3.5, MidpointRounding.Ceil), 4, "Ceil 3.5");
            //AssertIsDoubleAndEqualTo(Math.Round(3.2, MidpointRounding.Ceil), 3, "Ceil 3.2");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.2, MidpointRounding.Ceil), -3, "Ceil -3.2");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.5, MidpointRounding.Ceil), -3, "Ceil -3.5");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.8, MidpointRounding.Ceil), -4, "Ceil -3.8");

            //AssertIsDoubleAndEqualTo(Math.Round(3.8, MidpointRounding.Floor), 4, "Floor 3.8");
            //AssertIsDoubleAndEqualTo(Math.Round(3.5, MidpointRounding.Floor), 3, "Floor 3.5");
            //AssertIsDoubleAndEqualTo(Math.Round(3.2, MidpointRounding.Floor), 3, "Floor 3.2");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.2, MidpointRounding.Floor), -3, "Floor -3.2");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.5, MidpointRounding.Floor), -4, "Floor -3.5");
            //AssertIsDoubleAndEqualTo(Math.Round(-3.8, MidpointRounding.Floor), -4, "Floor -3.8");

            AssertIsDoubleAndEqualTo(Math.Round(3.8, MidpointRounding.ToEven), 4, "ToEven 3.8");
            AssertIsDoubleAndEqualTo(Math.Round(3.5, MidpointRounding.ToEven), 4, "ToEven 3.5");
            AssertIsDoubleAndEqualTo(Math.Round(3.2, MidpointRounding.ToEven), 3, "ToEven 3.2");
            AssertIsDoubleAndEqualTo(Math.Round(-3.2, MidpointRounding.ToEven), -3, "ToEven -3.2");
            AssertIsDoubleAndEqualTo(Math.Round(-3.5, MidpointRounding.ToEven), -4, "ToEven -3.5");
            AssertIsDoubleAndEqualTo(Math.Round(-3.8, MidpointRounding.ToEven), -4, "ToEven -3.8");
        }

        [Test]
        public void RoundDoubleWithPrecisionAndModeWorks()
        {
            AssertIsDoubleAndEqualTo(Math.Round(1.45, 1), 1.4, "Bridge584 1");
            AssertIsDoubleAndEqualTo(Math.Round(1.55, 1), 1.6, "Bridge584 2");
            AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4), 123.4568, "Bridge584 3");
            AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6), 123.456789, "Bridge584 4");
            AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8), 123.456789, "Bridge584 5");
            AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0), -123, "Bridge584 6");

            //AssertIsDoubleAndEqualTo(Math.Round(1.45, 1, MidpointRounding.Up), 1.5, "Bridge584 Up 1");
            //AssertIsDoubleAndEqualTo(Math.Round(1.55, 1, MidpointRounding.Up), 1.6, "Bridge584 Up 2");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4, MidpointRounding.Up), 123.4568, "Bridge584 Up 3");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6, MidpointRounding.Up), 123.456789, "Bridge584 Up 4");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8, MidpointRounding.Up), 123.456789, "Bridge584 Up 5");
            //AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0, MidpointRounding.Up), -124.0, "Bridge584 Up 6");

            AssertIsDoubleAndEqualTo(Math.Round(1.45, 1, MidpointRounding.AwayFromZero), 1.5, "Bridge584 AwayFromZero 1");
            AssertIsDoubleAndEqualTo(Math.Round(1.55, 1, MidpointRounding.AwayFromZero), 1.6, "Bridge584 AwayFromZero 2");
            AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4, MidpointRounding.AwayFromZero), 123.4568, "Bridge584 AwayFromZero 3");
            AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6, MidpointRounding.AwayFromZero), 123.456789, "Bridge584 AwayFromZero 4");
            AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8, MidpointRounding.AwayFromZero), 123.456789, "Bridge584 AwayFromZero 5");
            AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0, MidpointRounding.AwayFromZero), -123.0, "Bridge584 AwayFromZero 6");

            //AssertIsDoubleAndEqualTo(Math.Round(1.45, 1, MidpointRounding.Down), 1.4, "Bridge584 Down 1");
            //AssertIsDoubleAndEqualTo(Math.Round(1.55, 1, MidpointRounding.Down), 1.5, "Bridge584 Down 2");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4, MidpointRounding.Down), 123.4567, "Bridge584 Down 3");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6, MidpointRounding.Down), 123.456789, "Bridge584 Down 4");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8, MidpointRounding.Down), 123.456789, "Bridge584 Down 5");
            //AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0, MidpointRounding.Down), -123.0, "Bridge584 Down 6");

            //AssertIsDoubleAndEqualTo(Math.Round(1.45, 1, MidpointRounding.InfinityPos), 1.5, "Bridge584 InfinityPos 1");
            //AssertIsDoubleAndEqualTo(Math.Round(1.55, 1, MidpointRounding.InfinityPos), 1.6, "Bridge584 InfinityPos 2");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4, MidpointRounding.InfinityPos), 123.4568, "Bridge584 InfinityPos 3");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6, MidpointRounding.InfinityPos), 123.456789, "Bridge584 InfinityPos 4");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8, MidpointRounding.InfinityPos), 123.456789, "Bridge584 InfinityPos 5");
            //AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0, MidpointRounding.InfinityPos), -123.0, "Bridge584 InfinityPos 6");

            //AssertIsDoubleAndEqualTo(Math.Round(1.45, 1, MidpointRounding.InfinityNeg), 1.4, "Bridge584 InfinityNeg 1");
            //AssertIsDoubleAndEqualTo(Math.Round(1.55, 1, MidpointRounding.InfinityNeg), 1.5, "Bridge584 InfinityNeg 2");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4, MidpointRounding.InfinityNeg), 123.4567, "Bridge584 InfinityNeg 3");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6, MidpointRounding.InfinityNeg), 123.456789, "Bridge584 InfinityNeg 4");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8, MidpointRounding.InfinityNeg), 123.456789, "Bridge584 InfinityNeg 5");
            //AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0, MidpointRounding.InfinityNeg), -124.0, "Bridge584 InfinityNeg 6");

            //AssertIsDoubleAndEqualTo(Math.Round(1.45, 1, MidpointRounding.TowardsZero), 1.4, "Bridge584 TowardsZero 1");
            //AssertIsDoubleAndEqualTo(Math.Round(1.55, 1, MidpointRounding.TowardsZero), 1.5, "Bridge584 TowardsZero 2");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4, MidpointRounding.TowardsZero), 123.4568, "Bridge584 TowardsZero 3");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6, MidpointRounding.TowardsZero), 123.456789, "Bridge584 TowardsZero 4");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8, MidpointRounding.TowardsZero), 123.456789, "Bridge584 TowardsZero 5");
            //AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0, MidpointRounding.TowardsZero), -123.0, "Bridge584 TowardsZero 6");

            AssertIsDoubleAndEqualTo(Math.Round(1.45, 1, MidpointRounding.ToEven), 1.4, "Bridge584 ToEven 1");
            AssertIsDoubleAndEqualTo(Math.Round(1.55, 1, MidpointRounding.ToEven), 1.6, "Bridge584 ToEven 2");
            AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4, MidpointRounding.ToEven), 123.4568, "Bridge584 ToEven 3");
            AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6, MidpointRounding.ToEven), 123.456789, "Bridge584 ToEven 4");
            AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8, MidpointRounding.ToEven), 123.456789, "Bridge584 ToEven 5");
            AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0, MidpointRounding.ToEven), -123.0, "Bridge584 ToEven 6");

            //AssertIsDoubleAndEqualTo(Math.Round(1.45, 1, MidpointRounding.Ceil), 1.5, "Bridge584 Ceil 1");
            //AssertIsDoubleAndEqualTo(Math.Round(1.55, 1, MidpointRounding.Ceil), 1.6, "Bridge584 Ceil 2");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4, MidpointRounding.Ceil), 123.4568, "Bridge584 Ceil 3");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6, MidpointRounding.Ceil), 123.456789, "Bridge584 Ceil 4");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8, MidpointRounding.Ceil), 123.456789, "Bridge584 Ceil 5");
            //AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0, MidpointRounding.Ceil), -123.0, "Bridge584 Ceil 6");

            //AssertIsDoubleAndEqualTo(Math.Round(1.45, 1, MidpointRounding.Floor), 1.4, "Bridge584 Floor 1");
            //AssertIsDoubleAndEqualTo(Math.Round(1.55, 1, MidpointRounding.Floor), 1.5, "Bridge584 Floor 2");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 4, MidpointRounding.Floor), 123.4568, "Bridge584 Floor 3");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 6, MidpointRounding.Floor), 123.456789, "Bridge584 Floor 4");
            //AssertIsDoubleAndEqualTo(Math.Round(123.456789, 8, MidpointRounding.Floor), 123.456789, "Bridge584 Floor 5");
            //AssertIsDoubleAndEqualTo(Math.Round(-123.456, 0, MidpointRounding.Floor), -123.0, "Bridge584 Floor 6");
        }

        [Test]
        public void JsRoundWorks()
        {
            Assert.AreEqual(Math.JsRound(3.432), 3.0);
            Assert.AreEqual(Math.JsRound(3.6), 4.0);
            Assert.AreEqual(Math.JsRound(3.5), 4.0);
            Assert.AreEqual(Math.JsRound(4.5), 5.0);
            Assert.AreEqual(Math.JsRound(-3.5), -3.0);
            Assert.AreEqual(Math.JsRound(-4.5), -4.0);
        }

        [Test]
        public void IEEERemainderWorks()
        {
            AssertAlmostEqual(Math.IEEERemainder(3.1, 4.0), -0.9);
            AssertAlmostEqual(Math.IEEERemainder(16.1, 4.0), 0.100000000000001);
            AssertAlmostEqual(Math.IEEERemainder(4.0, 16.1), 4.0);
            AssertAlmostEqual(Math.IEEERemainder(3.1, 3.2), -0.1);
            AssertAlmostEqual(Math.IEEERemainder(3.2, 3.1), 0.1);
        }

        [Test]
        public void SinWorks()
        {
            AssertAlmostEqual(Math.Sin(0.5), 0.479425538604203);
        }

        [Test]
        public void SqrtWorks()
        {
            AssertIsDecimalAndEqualTo(Math.Sqrt(3m), "1.7320508075688772935274463415");
        }

        [Test]
        public void TanWorks()
        {
            AssertAlmostEqual(Math.Tan(0.5), 0.5463024898437905);
        }
    }
}
