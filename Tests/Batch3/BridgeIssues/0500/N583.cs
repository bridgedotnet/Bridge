using Bridge.ClientTestHelper;
using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#583]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#583 - {0}")]
    public class Bridge583
    {
        [Test(ExpectedCount = 120)]
        public static void TestUseCase()
        {
            NumberHelper.AssertNumber(1.4m, decimal.Round(1.45m, 1), "Bridge583 1");
            NumberHelper.AssertNumber(1.6m, decimal.Round(1.55m, 1), "Bridge583 2");
            NumberHelper.AssertNumber(123.4568m, decimal.Round(123.456789M, 4), "Bridge583 3");
            NumberHelper.AssertNumber(123.456789m, decimal.Round(123.456789M, 6), "Bridge583 4");
            NumberHelper.AssertNumber(123.456789m, decimal.Round(123.456789M, 8), "Bridge583 5");
            NumberHelper.AssertNumber(-123m, decimal.Round(-123.456M, 0), "Bridge583 6");

            NumberHelper.AssertDouble(decimal.Round(1.45m, 1, MidpointRounding.Up), 1.5, "Bridge583 Up 1");
            NumberHelper.AssertDouble(decimal.Round(1.55m, 1, MidpointRounding.Up), 1.6, "Bridge583 Up 2");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 4, MidpointRounding.Up), 123.4568, "Bridge583 Up 3");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 6, MidpointRounding.Up), 123.456789, "Bridge583 Up 4");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 8, MidpointRounding.Up), 123.456789, "Bridge583 Up 5");
            NumberHelper.AssertDouble(decimal.Round(-123.456M, 0, MidpointRounding.Up), -124.0, "Bridge583 Up 6");

            NumberHelper.AssertDouble(decimal.Round(1.45m, 1, MidpointRounding.AwayFromZero), 1.5, "Bridge583 AwayFromZero 1");
            NumberHelper.AssertDouble(decimal.Round(1.55m, 1, MidpointRounding.AwayFromZero), 1.6, "Bridge583 AwayFromZero 2");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 4, MidpointRounding.AwayFromZero), 123.4568, "Bridge583 AwayFromZero 3");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 6, MidpointRounding.AwayFromZero), 123.456789, "Bridge583 AwayFromZero 4");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 8, MidpointRounding.AwayFromZero), 123.456789, "Bridge583 AwayFromZero 5");
            NumberHelper.AssertDouble(decimal.Round(-123.456M, 0, MidpointRounding.AwayFromZero), -123.0, "Bridge583 AwayFromZero 6");

            NumberHelper.AssertDouble(decimal.Round(1.45m, 1, MidpointRounding.Down), 1.4, "Bridge583 Down 1");
            NumberHelper.AssertDouble(decimal.Round(1.55m, 1, MidpointRounding.Down), 1.5, "Bridge583 Down 2");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 4, MidpointRounding.Down), 123.4567, "Bridge583 Down 3");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 6, MidpointRounding.Down), 123.456789, "Bridge583 Down 4");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 8, MidpointRounding.Down), 123.456789, "Bridge583 Down 5");
            NumberHelper.AssertDouble(decimal.Round(-123.456M, 0, MidpointRounding.Down), -123.0, "Bridge583 Down 6");

            NumberHelper.AssertDouble(decimal.Round(1.45m, 1, MidpointRounding.InfinityPos), 1.5, "Bridge583 InfinityPos 1");
            NumberHelper.AssertDouble(decimal.Round(1.55m, 1, MidpointRounding.InfinityPos), 1.6, "Bridge583 InfinityPos 2");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 4, MidpointRounding.InfinityPos), 123.4568, "Bridge583 InfinityPos 3");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 6, MidpointRounding.InfinityPos), 123.456789, "Bridge583 InfinityPos 4");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 8, MidpointRounding.InfinityPos), 123.456789, "Bridge583 InfinityPos 5");
            NumberHelper.AssertDouble(decimal.Round(-123.456M, 0, MidpointRounding.InfinityPos), -123.0, "Bridge583 InfinityPos 6");

            NumberHelper.AssertDouble(decimal.Round(1.45m, 1, MidpointRounding.InfinityNeg), 1.4, "Bridge583 InfinityNeg 1");
            NumberHelper.AssertDouble(decimal.Round(1.55m, 1, MidpointRounding.InfinityNeg), 1.5, "Bridge583 InfinityNeg 2");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 4, MidpointRounding.InfinityNeg), 123.4567, "Bridge583 InfinityNeg 3");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 6, MidpointRounding.InfinityNeg), 123.456789, "Bridge583 InfinityNeg 4");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 8, MidpointRounding.InfinityNeg), 123.456789, "Bridge583 InfinityNeg 5");
            NumberHelper.AssertDouble(decimal.Round(-123.456M, 0, MidpointRounding.InfinityNeg), -124.0, "Bridge583 InfinityNeg 6");

            NumberHelper.AssertDouble(decimal.Round(1.45m, 1, MidpointRounding.TowardsZero), 1.4, "Bridge583 TowardsZero 1");
            NumberHelper.AssertDouble(decimal.Round(1.55m, 1, MidpointRounding.TowardsZero), 1.5, "Bridge583 TowardsZero 2");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 4, MidpointRounding.TowardsZero), 123.4568, "Bridge583 TowardsZero 3");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 6, MidpointRounding.TowardsZero), 123.456789, "Bridge583 TowardsZero 4");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 8, MidpointRounding.TowardsZero), 123.456789, "Bridge583 TowardsZero 5");
            NumberHelper.AssertDouble(decimal.Round(-123.456M, 0, MidpointRounding.TowardsZero), -123.0, "Bridge583 TowardsZero 6");

            NumberHelper.AssertDouble(decimal.Round(1.45m, 1, MidpointRounding.ToEven), 1.4, "Bridge583 ToEven 1");
            NumberHelper.AssertDouble(decimal.Round(1.55m, 1, MidpointRounding.ToEven), 1.6, "Bridge583 ToEven 2");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 4, MidpointRounding.ToEven), 123.4568, "Bridge583 ToEven 3");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 6, MidpointRounding.ToEven), 123.456789, "Bridge583 ToEven 4");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 8, MidpointRounding.ToEven), 123.456789, "Bridge583 ToEven 5");
            NumberHelper.AssertDouble(decimal.Round(-123.456M, 0, MidpointRounding.ToEven), -123.0, "Bridge583 ToEven 6");

            NumberHelper.AssertDouble(decimal.Round(1.45m, 1, MidpointRounding.Ceil), 1.5, "Bridge583 Ceil 1");
            NumberHelper.AssertDouble(decimal.Round(1.55m, 1, MidpointRounding.Ceil), 1.6, "Bridge583 Ceil 2");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 4, MidpointRounding.Ceil), 123.4568, "Bridge583 Ceil 3");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 6, MidpointRounding.Ceil), 123.456789, "Bridge583 Ceil 4");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 8, MidpointRounding.Ceil), 123.456789, "Bridge583 Ceil 5");
            NumberHelper.AssertDouble(decimal.Round(-123.456M, 0, MidpointRounding.Ceil), -123.0, "Bridge583 Ceil 6");

            NumberHelper.AssertDouble(decimal.Round(1.45m, 1, MidpointRounding.Floor), 1.4, "Bridge583 Floor 1");
            NumberHelper.AssertDouble(decimal.Round(1.55m, 1, MidpointRounding.Floor), 1.5, "Bridge583 Floor 2");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 4, MidpointRounding.Floor), 123.4568, "Bridge583 Floor 3");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 6, MidpointRounding.Floor), 123.456789, "Bridge583 Floor 4");
            NumberHelper.AssertDouble(decimal.Round(123.456789M, 8, MidpointRounding.Floor), 123.456789, "Bridge583 Floor 5");
            NumberHelper.AssertDouble(decimal.Round(-123.456M, 0, MidpointRounding.Floor), -123.0, "Bridge583 Floor 6");
        }
    }
}