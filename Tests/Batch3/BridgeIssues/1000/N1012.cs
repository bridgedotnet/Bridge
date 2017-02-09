using Bridge.Test.NUnit;

using System;
using System.Diagnostics;
using System.Threading;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#1012]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1012 - {0}")]
    public class Bridge1012
    {
        private const int DELTA = 3;

        [Test(ExpectedCount = 2)]
        public static void TestSleepZero()
        {
            var delay = 0;
            var maxDelay = 100;

            var stopwatch = new Stopwatch();
            stopwatch.Start();

            Thread.Sleep(delay);

            stopwatch.Stop();

            Assert.True(stopwatch.ElapsedMilliseconds >= delay - DELTA, ">= " + delay + ", elapsed " + stopwatch.ElapsedMilliseconds);
            Assert.True(stopwatch.ElapsedMilliseconds < maxDelay, "< " + maxDelay + ", elapsed " + stopwatch.ElapsedMilliseconds);
        }

        [Test(ExpectedCount = 2)]
        public static void TestSleepInt()
        {
            var delay = 100;
            var maxDelay = 200;

            var stopwatch = new Stopwatch();
            stopwatch.Start();

            Thread.Sleep(delay);

            stopwatch.Stop();

            Assert.True(stopwatch.ElapsedMilliseconds >= delay - DELTA, ">= " + delay + ", elapsed " + stopwatch.ElapsedMilliseconds);
            Assert.True(stopwatch.ElapsedMilliseconds < maxDelay, "< " + maxDelay + ", elapsed " + stopwatch.ElapsedMilliseconds);
        }

        [Test(ExpectedCount = 2)]
        public static void TestSleepTimeSpan()
        {
            var delay = 100;
            var maxDelay = 200;

            var stopwatch = new Stopwatch();
            stopwatch.Start();

            Thread.Sleep(TimeSpan.FromMilliseconds(delay));

            stopwatch.Stop();

            Assert.True(stopwatch.ElapsedMilliseconds >= delay - DELTA, ">= " + delay + ", elapsed " + stopwatch.ElapsedMilliseconds);
            Assert.True(stopwatch.ElapsedMilliseconds < maxDelay, "< " + maxDelay + ", elapsed " + stopwatch.ElapsedMilliseconds);
        }

        [Test(ExpectedCount = 3)]
        public static void TestSleepThrows()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() => { Thread.Sleep(-2); }, "-2");
            Assert.Throws<ArgumentOutOfRangeException>(() => { Thread.Sleep(TimeSpan.FromMilliseconds(-2)); }, "FromMilliseconds(-2)");
            Assert.Throws<ArgumentOutOfRangeException>(() => { Thread.Sleep(TimeSpan.FromMilliseconds((long)int.MaxValue + 1)); }, "(long)int.MaxValue + 1");
        }
    }
}