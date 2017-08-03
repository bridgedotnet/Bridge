using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_DATETIME)]
    [TestFixture(TestNameFormat = "TimeSpan - {0}")]
    public class TimeSpanTests
    {
        [Test]
        public void TypePropertiesAreCorrect_SPI_1717()
        {
            Assert.AreEqual("System.TimeSpan", typeof(TimeSpan).FullName);
            Assert.False(typeof(TimeSpan).IsClass);
            Assert.True(typeof(IComparable<TimeSpan>).IsAssignableFrom(typeof(TimeSpan)));
            Assert.True(typeof(IEquatable<TimeSpan>).IsAssignableFrom(typeof(TimeSpan)));
            object d = new TimeSpan();
            Assert.True(d is TimeSpan);
            Assert.True(d is IComparable<TimeSpan>);
            Assert.True(d is IEquatable<TimeSpan>);

            var interfaces = typeof(TimeSpan).GetInterfaces();
            Assert.AreEqual(3, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<TimeSpan>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<TimeSpan>)));
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var time = new TimeSpan();
            Assert.AreEqual(0L, time.Ticks);
        }

        [Test]
        public void DefaultValueWorks()
        {
            var ts = default(TimeSpan);
            Assert.AreEqual(0L, ts.Ticks);
        }

        [Test]
        public void ZeroWorks()
        {
            var ts = TimeSpan.Zero;
            Assert.AreEqual(0L, ts.Ticks);
        }

        [Test]
        public void CreatingInstanceReturnsTimeSpanWithZeroValue()
        {
            var ts = Activator.CreateInstance<TimeSpan>();
            Assert.AreEqual(0L, ts.Ticks);
        }

        [Test]
        public void ParameterConstructorsWorks()
        {
            var time = new TimeSpan(34567L);
            Assert.True((object)time is TimeSpan, "ticks type");
            Assert.AreEqual(34567L, time.Ticks, "ticks value");

            time = new TimeSpan(10, 20, 5);
            Assert.True((object)time is TimeSpan, "h, m, s type");
            Assert.AreEqual(372050000000L, time.Ticks, "h, m, s value");

            time = new TimeSpan(15, 10, 20, 5);
            Assert.True((object)time is TimeSpan, "d, h, m, s type");
            Assert.AreEqual(13332050000000L, time.Ticks, "d, h, m, s value");

            time = new TimeSpan(15, 10, 20, 5, 14);
            Assert.True((object)time is TimeSpan, "full type");
            Assert.AreEqual(13332050140000L, time.Ticks, "full value");
        }

        [Test]
        public void FactoryMethodsWork()
        {
            var time = TimeSpan.FromDays(3);
            Assert.True((object)time is TimeSpan, "FromDays type");
            Assert.AreEqual(2592000000000L, time.Ticks, "FromDays value");

            time = TimeSpan.FromHours(3);
            Assert.True((object)time is TimeSpan, "FromHours type");
            Assert.AreEqual(108000000000L, time.Ticks, "FromHours value");

            time = TimeSpan.FromMinutes(3);
            Assert.True((object)time is TimeSpan, "FromMinutes type");
            Assert.AreEqual(1800000000L, time.Ticks, "FromMinutes value");

            time = TimeSpan.FromSeconds(3);
            Assert.True((object)time is TimeSpan, "FromSeconds type");
            Assert.AreEqual(30000000L, time.Ticks, "FromSeconds value");

            time = TimeSpan.FromMilliseconds(3);
            Assert.True((object)time is TimeSpan, "FromMilliseconds type");
            Assert.AreEqual(30000L, time.Ticks, "FromMilliseconds value");

            time = TimeSpan.FromTicks(3);
            Assert.True((object)time is TimeSpan, "FromTicks type");
            Assert.AreEqual(3L, time.Ticks, "FromTicks value");
        }

        [Test]
        public void PropertiesWork()
        {
            var time = new TimeSpan(15, 10, 20, 5, 14);
            Assert.AreEqual(15, time.Days);
            Assert.AreEqual(10, time.Hours);
            Assert.AreEqual(20, time.Minutes);
            Assert.AreEqual(5, time.Seconds);
            Assert.AreEqual(14, time.Milliseconds);
            AssertAlmostEqual(time.TotalDays, 15.430613587962963d);
            AssertAlmostEqual(time.TotalHours, 370.33472611111108d);
            AssertAlmostEqual(time.TotalMinutes, 22220.083566666668d);
            AssertAlmostEqual(time.TotalSeconds, 1333205.014d);
            AssertAlmostEqual(time.TotalMilliseconds, 1333205014.0d);
            Assert.AreEqual(15 * TimeSpan.TicksPerDay + 10 * TimeSpan.TicksPerHour + 20 * TimeSpan.TicksPerMinute + 5 * TimeSpan.TicksPerSecond + 14 * TimeSpan.TicksPerMillisecond, time.Ticks);
        }

        [Test]
        public void CompareToWorks()
        {
            var time1 = new TimeSpan(15, 10, 20, 5, 14);
            var time2 = new TimeSpan(15, 10, 20, 5, 14);
            var time3 = new TimeSpan(14, 10, 20, 5, 14);
            var time4 = new TimeSpan(15, 11, 20, 5, 14);
            Assert.AreEqual(time1.CompareTo(time1), 0);
            Assert.AreEqual(time1.CompareTo(time2), 0);
            Assert.AreEqual(time1.CompareTo(time3), 1);
            Assert.AreEqual(time1.CompareTo(time4), -1);
        }

        [Test]
        public void CompareWorks()
        {
            var time1 = new TimeSpan(15, 10, 20, 5, 14);
            var time2 = new TimeSpan(15, 10, 20, 5, 14);
            var time3 = new TimeSpan(14, 10, 20, 5, 14);
            var time4 = new TimeSpan(15, 11, 20, 5, 14);
            Assert.AreEqual(TimeSpan.Compare(time1, time1), 0);
            Assert.AreEqual(TimeSpan.Compare(time1, time2), 0);
            Assert.AreEqual(TimeSpan.Compare(time1, time3), 1);
            Assert.AreEqual(TimeSpan.Compare(time1, time4), -1);
        }

        [Test]
        public void StaticEqualsWorks()
        {
            var time1 = new TimeSpan(15, 10, 20, 5, 14);
            var time2 = new TimeSpan(14, 10, 20, 5, 14);
            var time3 = new TimeSpan(15, 10, 20, 5, 14);

            Assert.False(TimeSpan.Equals(time1, time2));
            Assert.True(TimeSpan.Equals(time1, time3));
        }

        [Test]
        public void EqualsWorks()
        {
            var time1 = new TimeSpan(15, 10, 20, 5, 14);
            var time2 = new TimeSpan(14, 10, 20, 5, 14);
            var time3 = new TimeSpan(15, 10, 20, 5, 14);

            Assert.False(time1.Equals(time2));
            Assert.True(time1.Equals(time3));
        }

        [Test]
        public void IEquatableEqualsWorks()
        {
            var time1 = new TimeSpan(15, 10, 20, 5, 14);
            var time2 = new TimeSpan(14, 10, 20, 5, 14);
            var time3 = new TimeSpan(15, 10, 20, 5, 14);

            Assert.False(((IEquatable<TimeSpan>)time1).Equals(time2));
            Assert.True(((IEquatable<TimeSpan>)time1).Equals(time3));
        }

        [Test]
        public void ToStringWorks()
        {
            var time1 = new TimeSpan(15, 10, 20, 5, 14);
            var time2 = new TimeSpan(14, 10, 20, 5, 2);
            var time3 = new TimeSpan(15, 11, 20, 6, 14);
            var time4 = new TimeSpan(1, 2, 3);
            Assert.AreEqual("15.10:20:05.0140000", time1.ToString());
            Assert.AreEqual("14.10:20:05.0020000", time2.ToString());
            Assert.AreEqual("15.11:20:06.0140000", time3.ToString());
            Assert.AreEqual("01:02:03", time4.ToString());
        }

        [Test]
        public void AddWorks()
        {
            var time1 = new TimeSpan(2, 3, 4, 5, 6);
            var time2 = new TimeSpan(3, 4, 5, 6, 7);
            TimeSpan actual = time1.Add(time2);
            Assert.True((object)actual is TimeSpan, "Should be TimeSpan");
            Assert.AreEqual(((((((5 * 24) + 7) * 60) + 9) * 60) + 11) * 1000 + 13, actual.TotalMilliseconds, "TotalMilliseconds should be correct");
        }

        [Test]
        public void SubtractWorks()
        {
            var time1 = new TimeSpan(4, 3, 7, 2, 6);
            var time2 = new TimeSpan(3, 4, 5, 6, 7);
            TimeSpan actual = time1.Subtract(time2);
            Assert.True((object)actual is TimeSpan, "Should be TimeSpan");
            Assert.AreEqual(((((((1 * 24) - 1) * 60) + 2) * 60) - 4) * 1000 - 1, actual.TotalMilliseconds, "TotalMilliseconds should be correct");
        }

        [Test]
        public void DurationWorks()
        {
            var time1 = new TimeSpan(-3, -2, -1, -5, -4);
            var time2 = new TimeSpan(2, 1, 5, 4, 3);
            TimeSpan actual1 = time1.Duration();
            TimeSpan actual2 = time2.Duration();
            Assert.True((object)time1 is TimeSpan, "Should be TimeSpan");
            Assert.AreEqual((((((3 * 24) + 2) * 60 + 1) * 60) + 5) * 1000 + 4, actual1.TotalMilliseconds, "Negative should be negated");
            Assert.AreEqual((((((2 * 24) + 1) * 60 + 5) * 60) + 4) * 1000 + 3, actual2.TotalMilliseconds, "Positive should be preserved");
        }

        [Test]
        public void NegateWorks()
        {
            var time = new TimeSpan(-3, 2, -1, 5, -4);
            TimeSpan actual = time.Negate();
            Assert.True((object)actual is TimeSpan, "Should be TimeSpan");
            Assert.AreEqual((((((3 * 24) - 2) * 60 + 1) * 60) - 5) * 1000 + 4, actual.TotalMilliseconds, "Ticks should be correct");
        }

        private void AssertAlmostEqual(double d1, double d2)
        {
            var diff = d2 - d1;
            if (diff < 0)
                diff = -diff;
            Assert.True(diff < 1e-8);
        }

        [Test]
        public void ComparisonOperatorsWork()
        {
#pragma warning disable 1718
            var time1 = new TimeSpan(15, 10, 20, 5, 14);
            var time2 = new TimeSpan(15, 10, 20, 5, 14);
            var time3 = new TimeSpan(14, 10, 20, 5, 14);
            var time4 = new TimeSpan(15, 11, 20, 5, 14);

            Assert.False(time1 > time2, "> 1");
            Assert.True(time1 > time3, "> 2");
            Assert.False(time1 > time4, "> 3");

            Assert.True(time1 >= time2, ">= 1");
            Assert.True(time1 >= time3, ">= 2");
            Assert.False(time1 >= time4, ">= 3");

            Assert.False(time1 < time2, "< 1");
            Assert.False(time1 < time3, "< 2");
            Assert.True(time1 < time4, "< 3");

            Assert.True(time1 <= time2, "<= 1");
            Assert.False(time1 <= time3, "<= 2");
            Assert.True(time1 <= time4, "<= 3");

            Assert.True(time1 == time1, "== 1");
            Assert.True(time1 == time2, "== 2");
            Assert.False(time1 == time3, "== 3");
            Assert.False(time1 == time4, "== 4");

            Assert.False(time1 != time1, "!= 1");
            Assert.False(time1 != time2, "!= 2");
            Assert.True(time1 != time3, "!= 3");
            Assert.True(time1 != time4, "!= 4");
#pragma warning restore 1718
        }

        [Test]
        public void AdditionOperatorWorks()
        {
            var time1 = new TimeSpan(2, 3, 4, 5, 6);
            var time2 = new TimeSpan(3, 4, 5, 6, 7);
            TimeSpan actual = time1 + time2;
            Assert.True((object)actual is TimeSpan, "Should be TimeSpan");
            Assert.AreEqual(((((((5 * 24) + 7) * 60) + 9) * 60) + 11) * 1000 + 13, actual.TotalMilliseconds, "TotalMilliseconds should be correct");
        }

        [Test]
        public void SubtractionOperatorWorks()
        {
            var time1 = new TimeSpan(4, 3, 7, 2, 6);
            var time2 = new TimeSpan(3, 4, 5, 6, 7);
            TimeSpan actual = time1 - time2;
            Assert.True((object)actual is TimeSpan, "Should be TimeSpan");
            Assert.AreEqual(((((((1 * 24) - 1) * 60) + 2) * 60) - 4) * 1000 - 1, actual.TotalMilliseconds, "TotalMilliseconds should be correct");
        }

        [Test]
        public void UnaryPlusWorks()
        {
            var time = new TimeSpan(-3, 2, -1, 5, -4);
            TimeSpan actual = +time;
            Assert.True((object)actual is TimeSpan, "Should be TimeSpan");
            Assert.AreEqual((((((-3 * 24) + 2) * 60 - 1) * 60) + 5) * 1000 - 4, actual.TotalMilliseconds, "Ticks should be correct");
        }

        [Test]
        public void UnaryMinusWorks()
        {
            var time = new TimeSpan(-3, 2, -1, 5, -4);
            TimeSpan actual = -time;
            Assert.True((object)actual is TimeSpan, "Should be TimeSpan");
            Assert.AreEqual((((((3 * 24) - 2) * 60 + 1) * 60) - 5) * 1000 + 4, actual.TotalMilliseconds, "Ticks should be correct");
        }
    }
}