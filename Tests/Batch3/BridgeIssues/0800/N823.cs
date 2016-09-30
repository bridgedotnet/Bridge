using Bridge.Test;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#823]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#823 - {0}")]
    public class Bridge823
    {
        [Test(ExpectedCount = 3)]
        public static void GetTicksReturnsCorrectValue()
        {
            long val = 9467100000000000;

            var ticks = new DateTime(val).Ticks;
            var ticksPlusOne = new DateTime(val).Ticks + 1;
            var ticksString = new DateTime(val).Ticks.ToString();

            Assert.AreDeepEqual(val, ticks, "Ticks returning correct int value");
            Assert.AreDeepEqual(val + 1, ticksPlusOne, "Adding to a Tick value is correct");
            Assert.AreDeepEqual(val.ToString(), ticksString, "Ticks returning correct value if .ToString() called on int");
        }
    }
}