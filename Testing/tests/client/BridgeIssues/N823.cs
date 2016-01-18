using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#823]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#823 - {0}")]
    public class Bridge823
    {
        [Test(ExpectedCount = 3)]
        public static void GetTicksReturnsCorrectValue()
        {
            var val = 946710000000;
            var result = 9467100000000000;

            var ticks = new DateTime(val).Ticks;
            var ticksPlusOne = new DateTime(val).Ticks + 1;
            var ticksString = new DateTime(val).Ticks.ToString();

            Assert.AreDeepEqual(ticks, result, "Ticks returning correct int value");
            Assert.AreDeepEqual(ticksPlusOne, result + 1, "Adding to a Tick value is correct");
            Assert.AreDeepEqual(ticksString, result.ToString(), "Ticks returning correct value if .ToString() called on int");
        }
    }
}