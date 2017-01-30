using Bridge.Test.NUnit;

using System;
using System.Threading;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Threading
{
    [Category(Constants.MODULE_THREADING)]
    [TestFixture(TestNameFormat = "TimerTests - {0}")]
    public class TimerTests
    {
        private class TimerState
        {
            public int Counter { get; set; }
            public object Data { get; set; }

            public void HandleTimer(object state)
            {
                Counter++;
                Data = state;
            }
        }

        public static int StaticCounter { get; set; }
        public static object StaticData { get; set; }

        public static void StaticHandleTimer(object state)
        {
            StaticCounter++;
            StaticData = state;
        }

        [Test]
        public void TestTimerThrows()
        {
            var ts = new TimerState();
            TimerCallback tc = ts.HandleTimer;

            var okSpan = TimeSpan.FromMilliseconds(1);
            var smallSpan = TimeSpan.FromMilliseconds(-2);
            var bigSpan = TimeSpan.FromMilliseconds((long)uint.MaxValue + 1);

            var small = -2;
            var big = (long)uint.MaxValue + 1;

            Assert.Throws<ArgumentNullException>(() => { new Timer(null, null, 1, 1); }, "Null callback");

            Assert.Throws<ArgumentOutOfRangeException>(() => { new Timer(tc, null, small, 1); }, "Small due int");
            Assert.Throws<ArgumentOutOfRangeException>(() => { new Timer(tc, null, 1, small); }, "Small period int ");

            Assert.Throws<ArgumentOutOfRangeException>(() => { new Timer(tc, null, (long)small, 1); }, "Small due long");
            Assert.Throws<ArgumentOutOfRangeException>(() => { new Timer(tc, null, 1, (long)small); }, "Small period long");
            Assert.Throws<ArgumentOutOfRangeException>(() => { new Timer(tc, null, big, 1); }, "Big due long");
            Assert.Throws<ArgumentOutOfRangeException>(() => { new Timer(tc, null, 1, big); }, "Big period long");

            Assert.Throws<ArgumentOutOfRangeException>(() => { new Timer(tc, null, smallSpan, okSpan); }, "Small due TimeSpan");
            Assert.Throws<ArgumentOutOfRangeException>(() => { new Timer(tc, null, okSpan, smallSpan); }, "Small period TimeSpan");
            Assert.Throws<ArgumentOutOfRangeException>(() => { new Timer(tc, null, bigSpan, okSpan); }, "Big due TimeSpan");
            Assert.Throws<ArgumentOutOfRangeException>(() => { new Timer(tc, null, okSpan, bigSpan); }, "Big period TimeSpan");
        }

        [Test]
        public async static void TestStaticCallbackWithDispose()
        {
            var done = Assert.Async();

            StaticCounter = 0;
            StaticData = null;

            var timer = new Timer(StaticHandleTimer, "SomeState", 1, 1);

            await Task.Delay(200);

            var count = StaticCounter;
            timer.Dispose();

            Assert.Throws<InvalidOperationException>(() => { timer.Change(1, 1); }, "No change after Dispose allowed");
            Assert.True(count > 0, "Ticks: " + count);
            Assert.AreEqual("SomeState", StaticData, "State works");

            await Task.Delay(200);

            Assert.AreEqual(count, StaticCounter, "Timer disposed - no more ticks");

            done();
        }

        [Test]
        public async void TestStaticCallbackWithChange()
        {
            var done = Assert.Async();

            StaticCounter = 0;
            StaticData = null;

            Timer copy = null;

            var timer = new Timer(StaticHandleTimer, "SomeState", 1, 1);

            copy = timer;

            await Task.Delay(200);

            var count = StaticCounter;
            timer.Change(Timeout.Infinite, 0);

            Assert.True(count > 0, "Ticks: " + count);
            Assert.AreEqual("SomeState", StaticData, "State works");

            await Task.Delay(200);

            Assert.AreEqual(count, StaticCounter, "Timer disposed");

            timer.Dispose();

            Assert.Throws<InvalidOperationException>(() => { copy.Change(1, 1); }, "No change after Dispose allowed");

            done();
        }

        [Test]
        public async static void TestInstanceCallbackWithDispose()
        {
            var done = Assert.Async();

            var ts = new TimerState();
            var timer = new Timer(ts.HandleTimer, "SomeState", 1, 1);

            await Task.Delay(200);

            var count = ts.Counter;
            timer.Dispose();

            Assert.Throws<InvalidOperationException>(() => { timer.Change(1, 1); }, "No change after Dispose allowed");
            Assert.True(count > 0, "Ticks: " + count);
            Assert.AreEqual("SomeState", ts.Data, "State works");

            await Task.Delay(200);

            Assert.AreEqual(count, ts.Counter, "Timer disposed - no more ticks");

            done();
        }

        [Test]
        public async void TestInstanceCallbackWithChange()
        {
            var done = Assert.Async();

            var ts = new TimerState();

            Timer copy = null;

            var timer = new Timer(ts.HandleTimer, "SomeState", 1, 1);

            copy = timer;

            await Task.Delay(200);

            var count = ts.Counter;
            timer.Change(-1, 0);

            Assert.True(count > 0, "Ticks: " + count);
            Assert.AreEqual("SomeState", ts.Data, "State works");

            await Task.Delay(200);

            timer.Dispose();

            Assert.AreEqual(count, ts.Counter, "Timer disposed");

            Assert.Throws<InvalidOperationException>(() => { copy.Change(1, 1); }, "No change after Dispose allowed");

            done();
        }

        [Test]
        public async void TestInfiniteTimer()
        {
            var done = Assert.Async();

            var ts = new TimerState();

            var timer = new Timer(ts.HandleTimer, null, -1, 1);
            await Task.Delay(200);
            Assert.AreEqual(ts.Counter, 0, "new -1, 1");

            timer.Change(-1, -1);
            await Task.Delay(200);
            Assert.AreEqual(ts.Counter, 0, "Change -1, -1");

            done();
        }
    }
}