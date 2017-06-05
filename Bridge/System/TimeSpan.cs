using Bridge;

namespace System
{
    [External]
    [Reflectable]
    public struct TimeSpan : IComparable, IComparable<TimeSpan>, IEquatable<TimeSpan>, IFormattable, IBridgeClass
    {
        [InlineConst]
        public const long TicksPerDay = 864000000000;

        [InlineConst]
        public const long TicksPerHour = 36000000000;

        [InlineConst]
        public const long TicksPerMillisecond = 10000;

        [InlineConst]
        public const long TicksPerMinute = 600000000;

        [InlineConst]
        public const long TicksPerSecond = 10000000;

        public static readonly TimeSpan MaxValue;
        public static readonly TimeSpan MinValue;
        public static readonly TimeSpan Zero;

        public extern TimeSpan(long ticks);

        public extern TimeSpan(int hours, int minutes, int seconds);

        public extern TimeSpan(int days, int hours, int minutes, int seconds);

        public extern TimeSpan(int days, int hours, int minutes, int seconds, int milliseconds);

        [Template("System.TimeSpan.neg({t})")]
        public static extern TimeSpan operator -(TimeSpan t);

        [Template("System.TimeSpan.sub({t1}, {t2})")]
        public static extern TimeSpan operator -(TimeSpan t1, TimeSpan t2);

        [Template("System.TimeSpan.neq({t1}, {t2})")]
        public static extern bool operator !=(TimeSpan t1, TimeSpan t2);

        [Template("System.TimeSpan.plus({t})")]
        public static extern TimeSpan operator +(TimeSpan t);

        [Template("System.TimeSpan.add({t1}, {t2})")]
        public static extern TimeSpan operator +(TimeSpan t1, TimeSpan t2);

        [Template("System.TimeSpan.lt({t1}, {t2})")]
        public static extern bool operator <(TimeSpan t1, TimeSpan t2);

        [Template("System.TimeSpan.lte({t1}, {t2})")]
        public static extern bool operator <=(TimeSpan t1, TimeSpan t2);

        [Template("System.TimeSpan.eq({t1}, {t2})")]
        public static extern bool operator ==(TimeSpan t1, TimeSpan t2);

        [Template("System.TimeSpan.gt({t1}, {t2})")]
        public static extern bool operator >(TimeSpan t1, TimeSpan t2);

        [Template("System.TimeSpan.gte({t1}, {t2})")]
        public static extern bool operator >=(TimeSpan t1, TimeSpan t2);

        public extern int Days
        {
            [Template("getDays()")]
            get;
        }

        public extern int Hours
        {
            [Template("getHours()")]
            get;
        }

        public extern int Milliseconds
        {
            [Template("getMilliseconds()")]
            get;
        }

        public extern int Minutes
        {
            [Template("getMinutes()")]
            get;
        }

        public extern int Seconds
        {
            [Template("getSeconds()")]
            get;
        }

        public extern long Ticks
        {
            [Template("getTicks()")]
            get;
        }

        public extern double TotalDays
        {
            [Template("getTotalDays()")]
            get;
        }

        public extern double TotalHours
        {
            [Template("getTotalHours()")]
            get;
        }

        public extern double TotalMilliseconds
        {
            [Template("getTotalMilliseconds()")]
            get;
        }

        public extern double TotalMinutes
        {
            [Template("getTotalMinutes()")]
            get;
        }

        public extern double TotalSeconds
        {
            [Template("getTotalSeconds()")]
            get;
        }

        public extern TimeSpan Add(TimeSpan ts);

        [Template("{t1}.compareTo({t2})")]
        public static extern int Compare(TimeSpan t1, TimeSpan t2);

        public extern int CompareTo(object value);

        public extern int CompareTo(TimeSpan value);

        public extern TimeSpan Duration();

        public extern bool Equals(TimeSpan obj);

        [Template("({t1}).ticks.eq(({t2}).ticks)")]
        public static extern bool Equals(TimeSpan t1, TimeSpan t2);

        public static extern TimeSpan FromDays(double value);

        public static extern TimeSpan FromHours(double value);

        public static extern TimeSpan FromMilliseconds(double value);

        public static extern TimeSpan FromMinutes(double value);

        public static extern TimeSpan FromSeconds(double value);

        public static extern TimeSpan FromTicks(long value);

        public extern TimeSpan Negate();

        public extern TimeSpan Subtract(TimeSpan ts);

        public extern string ToString(string format);

        public extern string ToString(string format, IFormatProvider provider);

        [Name("toString")]
        public extern string Format(string format);

        [Name("toString")]
        public extern string Format(string format, IFormatProvider provider);
    }
}