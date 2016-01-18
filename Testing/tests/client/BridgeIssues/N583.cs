using Bridge;
using Bridge.Test;

using Bridge.ClientTest.Utilities;

using System;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#583]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#583 - {0}")]
    public class Bridge583
    {
        [Test(ExpectedCount = 120)]
        public static void TestUseCase()
        {
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.45m, 1), 1.4m, "Bridge583 1");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.55m, 1), 1.6m, "Bridge583 2");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 4), 123.4568m, "Bridge583 3");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 6), 123.456789m, "Bridge583 4");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 8), 123.456789m, "Bridge583 5");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(-123.456M, 0), -123m, "Bridge583 6");

            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.45m, 1, MidpointRounding.Up), 1.5, "Bridge583 Up 1");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.55m, 1, MidpointRounding.Up), 1.6, "Bridge583 Up 2");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 4, MidpointRounding.Up), 123.4568, "Bridge583 Up 3");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 6, MidpointRounding.Up), 123.456789, "Bridge583 Up 4");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 8, MidpointRounding.Up), 123.456789, "Bridge583 Up 5");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(-123.456M, 0, MidpointRounding.Up), -124.0, "Bridge583 Up 6");

            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.45m, 1, MidpointRounding.AwayFromZero), 1.5, "Bridge583 AwayFromZero 1");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.55m, 1, MidpointRounding.AwayFromZero), 1.6, "Bridge583 AwayFromZero 2");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 4, MidpointRounding.AwayFromZero), 123.4568, "Bridge583 AwayFromZero 3");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 6, MidpointRounding.AwayFromZero), 123.456789, "Bridge583 AwayFromZero 4");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 8, MidpointRounding.AwayFromZero), 123.456789, "Bridge583 AwayFromZero 5");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(-123.456M, 0, MidpointRounding.AwayFromZero), -123.0, "Bridge583 AwayFromZero 6");

            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.45m, 1, MidpointRounding.Down), 1.4, "Bridge583 Down 1");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.55m, 1, MidpointRounding.Down), 1.5, "Bridge583 Down 2");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 4, MidpointRounding.Down), 123.4567, "Bridge583 Down 3");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 6, MidpointRounding.Down), 123.456789, "Bridge583 Down 4");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 8, MidpointRounding.Down), 123.456789, "Bridge583 Down 5");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(-123.456M, 0, MidpointRounding.Down), -123.0, "Bridge583 Down 6");

            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.45m, 1, MidpointRounding.InfinityPos), 1.5, "Bridge583 InfinityPos 1");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.55m, 1, MidpointRounding.InfinityPos), 1.6, "Bridge583 InfinityPos 2");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 4, MidpointRounding.InfinityPos), 123.4568, "Bridge583 InfinityPos 3");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 6, MidpointRounding.InfinityPos), 123.456789, "Bridge583 InfinityPos 4");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 8, MidpointRounding.InfinityPos), 123.456789, "Bridge583 InfinityPos 5");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(-123.456M, 0, MidpointRounding.InfinityPos), -123.0, "Bridge583 InfinityPos 6");

            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.45m, 1, MidpointRounding.InfinityNeg), 1.4, "Bridge583 InfinityNeg 1");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.55m, 1, MidpointRounding.InfinityNeg), 1.5, "Bridge583 InfinityNeg 2");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 4, MidpointRounding.InfinityNeg), 123.4567, "Bridge583 InfinityNeg 3");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 6, MidpointRounding.InfinityNeg), 123.456789, "Bridge583 InfinityNeg 4");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 8, MidpointRounding.InfinityNeg), 123.456789, "Bridge583 InfinityNeg 5");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(-123.456M, 0, MidpointRounding.InfinityNeg), -124.0, "Bridge583 InfinityNeg 6");

            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.45m, 1, MidpointRounding.TowardsZero), 1.4, "Bridge583 TowardsZero 1");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.55m, 1, MidpointRounding.TowardsZero), 1.5, "Bridge583 TowardsZero 2");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 4, MidpointRounding.TowardsZero), 123.4568, "Bridge583 TowardsZero 3");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 6, MidpointRounding.TowardsZero), 123.456789, "Bridge583 TowardsZero 4");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 8, MidpointRounding.TowardsZero), 123.456789, "Bridge583 TowardsZero 5");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(-123.456M, 0, MidpointRounding.TowardsZero), -123.0, "Bridge583 TowardsZero 6");

            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.45m, 1, MidpointRounding.ToEven), 1.4, "Bridge583 ToEven 1");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.55m, 1, MidpointRounding.ToEven), 1.6, "Bridge583 ToEven 2");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 4, MidpointRounding.ToEven), 123.4568, "Bridge583 ToEven 3");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 6, MidpointRounding.ToEven), 123.456789, "Bridge583 ToEven 4");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 8, MidpointRounding.ToEven), 123.456789, "Bridge583 ToEven 5");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(-123.456M, 0, MidpointRounding.ToEven), -123.0, "Bridge583 ToEven 6");

            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.45m, 1, MidpointRounding.Ceil), 1.5, "Bridge583 Ceil 1");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.55m, 1, MidpointRounding.Ceil), 1.6, "Bridge583 Ceil 2");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 4, MidpointRounding.Ceil), 123.4568, "Bridge583 Ceil 3");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 6, MidpointRounding.Ceil), 123.456789, "Bridge583 Ceil 4");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 8, MidpointRounding.Ceil), 123.456789, "Bridge583 Ceil 5");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(-123.456M, 0, MidpointRounding.Ceil), -123.0, "Bridge583 Ceil 6");

            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.45m, 1, MidpointRounding.Floor), 1.4, "Bridge583 Floor 1");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(1.55m, 1, MidpointRounding.Floor), 1.5, "Bridge583 Floor 2");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 4, MidpointRounding.Floor), 123.4568, "Bridge583 Floor 3");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 6, MidpointRounding.Floor), 123.456789, "Bridge583 Floor 4");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(123.456789M, 8, MidpointRounding.Floor), 123.456789, "Bridge583 Floor 5");
            DecimalHelper.AssertIsDecimalAndEqualTo(decimal.Round(-123.456M, 0, MidpointRounding.Floor), -123.0, "Bridge583 Floor 6");
        }
    }
}