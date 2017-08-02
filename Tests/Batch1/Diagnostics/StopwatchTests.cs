using Bridge.Test.NUnit;
using System;
using System.Diagnostics;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Diagnostics
{
    [Category(Constants.MODULE_DIAGNOSTICS)]
    [TestFixture(TestNameFormat = "Stopwatch - {0}")]
    public class StopwatchTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Diagnostics.Stopwatch", typeof(Stopwatch).FullName, "Class name");
            Assert.True(typeof(Stopwatch).IsClass, "IsClass");
            var watch = new Stopwatch();
            Assert.True((object)watch is Stopwatch, "is StopWatch");

            Assert.AreEqual(typeof(Stopwatch).GetInterfaces().Length, 0, "Interfaces should be empty");
        }

        [Test]
        public static void GetTimestamp()
        {
            long ts1 = Stopwatch.GetTimestamp();
            Sleep();
            long ts2 = Stopwatch.GetTimestamp();
            Assert.False(ts1 == ts2);
        }

        [Test]
        public static void ConstructStartAndStop()
        {
            Stopwatch watch = new Stopwatch();
            Assert.False(watch.IsRunning);
            watch.Start();
            Assert.True(watch.IsRunning);
            Sleep();
            Assert.True(watch.Elapsed > TimeSpan.Zero);

            watch.Stop();
            Assert.False(watch.IsRunning);

            var e1 = watch.Elapsed;
            Sleep();
            var e2 = watch.Elapsed;
            Assert.AreEqual(e1, e2);
            Assert.True((long)e1.TotalMilliseconds == watch.ElapsedMilliseconds);

            var t1 = watch.ElapsedTicks;
            Sleep();
            var t2 = watch.ElapsedTicks;
            Assert.True(t1 == t2);
        }

        [Test]
        public static void StartNewAndReset()
        {
            Stopwatch watch = Stopwatch.StartNew();
            Assert.True(watch.IsRunning);
            watch.Start(); // should be no-op
            Assert.True(watch.IsRunning);
            Sleep();
            Assert.True(watch.Elapsed > TimeSpan.Zero);

            watch.Reset();
            Assert.False(watch.IsRunning);
            Assert.AreEqual(TimeSpan.Zero, watch.Elapsed);
        }

        [Test]
        public static void StartNewAndRestart()
        {
            Stopwatch watch = Stopwatch.StartNew();
            Assert.True(watch.IsRunning);
            Sleep(10);
            TimeSpan elapsedSinceStart = watch.Elapsed;
            Assert.True(elapsedSinceStart > TimeSpan.Zero);

            const int MaxAttempts = 5; // The comparison below could fail if we get very unlucky with when the thread gets preempted
            int attempt = 0;
            while (true)
            {
                watch.Restart();
                Assert.True(watch.IsRunning);
                try
                {
                    Assert.True(watch.Elapsed < elapsedSinceStart);
                }
                catch
                {
                    if (++attempt < MaxAttempts) continue;
                    throw;
                }
                break;
            }
        }

        [Test]
        public static async void StopShouldContinue()
        {
            var done = Assert.Async();

            long previous = 0;
            Stopwatch w = new Stopwatch();
            for (int i = 0; i < 10; i++)
            {
                w.Start();
                await Task.Delay(10);
                w.Stop();
                Assert.True(w.ElapsedMilliseconds > previous);
                previous = w.ElapsedMilliseconds;
            }

            done();
        }

        private static void Sleep(int milliseconds = 2)
        {
            TimeSpan start = new TimeSpan(DateTime.Now.Ticks);

            while ((new TimeSpan(DateTime.Now.Ticks) - start).TotalMilliseconds < milliseconds)
            {
            }
        }

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
            Assert.True(Stopwatch.Frequency >= 1000, "Frequency");
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

            Assert.True(0 == watch.ElapsedTicks);
            Assert.True(0 == watch.ElapsedMilliseconds);
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
            Assert.True(watch.ElapsedMilliseconds > 150, "ElapsedMilliseconds > 150" + " Actual: " + watch.ElapsedMilliseconds);
            Assert.True(watch.Elapsed == new TimeSpan(0, 0, 0, 0, (int)watch.ElapsedMilliseconds), "Elapsed");

            var value = (double)watch.ElapsedTicks / Stopwatch.Frequency;

            Assert.True(value > 0.15 && value < 0.25, string.Format("value > 0.15 && value < 0.25 Actual: {0}, Ticks: {1}", value, watch.ElapsedTicks));
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