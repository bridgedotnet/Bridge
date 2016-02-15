using System;
using System.Diagnostics;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.Diagnostics
{
    [Category(Constants.MODULE_DIAGNOSTICS)]
    [TestFixture(TestNameFormat = "Stopwatch - {0}")]
    public class StopwatchTests
    {
        [Test]
        public void DefaultConstructorWorks()
        {
            var watch = new Stopwatch();
            Assert.True((object)watch is Stopwatch, "is Stopwatch");
            Assert.False(watch.IsRunning, "IsRunning");
        }

        [Test]
        public void ConstantsWorks()
        {
            Assert.True(Stopwatch.Frequency > 1000, "Frequency");
            Assert.AreEqual("boolean", Script.TypeOf(Stopwatch.IsHighResolution), "IsHighResolution");
        }

        [Test]
        public void StartNewWorks()
        {
            var watch = Stopwatch.StartNew();
            Assert.True((object)watch is Stopwatch, "is Stopwatch");
            Assert.True(watch.IsRunning, "IsRunning");
        }

        [Test]
        public void StartAndStopWork()
        {
            var watch = new Stopwatch();
            Assert.False(watch.IsRunning);
            watch.Start();
            Assert.True(watch.IsRunning);
            watch.Stop();
            Assert.False(watch.IsRunning);
        }

        [Test]
        public void ElapsedWorks()
        {
            var watch = new Stopwatch();
            Assert.AreEqual(0, watch.ElapsedTicks);
            Assert.AreEqual(0, watch.ElapsedMilliseconds);
            Assert.AreEqual(new TimeSpan(), watch.Elapsed);
            watch.Start();
            DateTime before = DateTime.Now;
            bool hasIncreased = false;
            while ((DateTime.Now - before) < TimeSpan.FromMilliseconds(200))
            {
                if (watch.ElapsedTicks > 0)
                {
                    hasIncreased = true;
                }
            }
            watch.Stop();
            Assert.True(hasIncreased, "Times should increase inside the loop");
            Assert.True(watch.ElapsedMilliseconds > 150, "ElapsedMilliseconds");
            Assert.True(watch.Elapsed == new TimeSpan(0, 0, 0, 0, (int)watch.ElapsedMilliseconds), "Elapsed");
            var value = (double)watch.ElapsedTicks / Stopwatch.Frequency;
            Assert.True(value > 0.15 && value < 0.25, "Ticks");
        }

        [Test]
        public void GetTimestampWorks()
        {
            long t1 = Stopwatch.GetTimestamp();
            Assert.True((object)t1 is long, "is long");

            DateTime before = DateTime.Now;
            while ((DateTime.Now - before) < TimeSpan.FromMilliseconds(50))
            {
            }
            long t2 = Stopwatch.GetTimestamp();
            Assert.True(t2 > t1, "Should increase");
        }
    }
}
