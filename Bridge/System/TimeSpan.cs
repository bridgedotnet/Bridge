namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    public struct TimeSpan : IComparable, IComparable<TimeSpan>, IEquatable<TimeSpan>, IFormattable, Bridge.IBridgeClass
    {
        [Bridge.InlineConst]
        public const long TicksPerDay = 864000000000;

        [Bridge.InlineConst]
        public const long TicksPerHour = 36000000000;

        [Bridge.InlineConst]
        public const long TicksPerMillisecond = 10000;

        [Bridge.InlineConst]
        public const long TicksPerMinute = 600000000;

        [Bridge.InlineConst]
        public const long TicksPerSecond = 10000000;

        public static readonly TimeSpan MaxValue;
        public static readonly TimeSpan MinValue;
        public static readonly TimeSpan Zero;

        public extern TimeSpan(long ticks);

        public extern TimeSpan(int hours, int minutes, int seconds);

        public extern TimeSpan(int days, int hours, int minutes, int seconds);

        public extern TimeSpan(int days, int hours, int minutes, int seconds, int milliseconds);

        [Bridge.Template("System.TimeSpan.neg({t})")]
        public static extern TimeSpan operator -(TimeSpan t);

        [Bridge.Template("System.TimeSpan.sub({t1}, {t2})")]
        public static extern TimeSpan operator -(TimeSpan t1, TimeSpan t2);

        [Bridge.Template("System.TimeSpan.neq({t1}, {t2})")]
        public static extern bool operator !=(TimeSpan t1, TimeSpan t2);

        [Bridge.Template("System.TimeSpan.plus({t})")]
        public static extern TimeSpan operator +(TimeSpan t);

        [Bridge.Template("System.TimeSpan.add({t1}, {t2})")]
        public static extern TimeSpan operator +(TimeSpan t1, TimeSpan t2);

        [Bridge.Template("System.TimeSpan.lt({t1}, {t2})")]
        public static extern bool operator <(TimeSpan t1, TimeSpan t2);

        [Bridge.Template("System.TimeSpan.lte({t1}, {t2})")]
        public static extern bool operator <=(TimeSpan t1, TimeSpan t2);

        [Bridge.Template("System.TimeSpan.eq({t1}, {t2})")]
        public static extern bool operator ==(TimeSpan t1, TimeSpan t2);

        [Bridge.Template("System.TimeSpan.gt({t1}, {t2})")]
        public static extern bool operator >(TimeSpan t1, TimeSpan t2);

        [Bridge.Template("System.TimeSpan.gte({t1}, {t2})")]
        public static extern bool operator >=(TimeSpan t1, TimeSpan t2);

        public extern int Days
        {
            [Bridge.Template("getDays()")]
            get;
        }

        public extern int Hours
        {
            [Bridge.Template("getHours()")]
            get;
        }

        public extern int Milliseconds
        {
            [Bridge.Template("getMilliseconds()")]
            get;
        }

        public extern int Minutes
        {
            [Bridge.Template("getMinutes()")]
            get;
        }

        public extern int Seconds
        {
            [Bridge.Template("getSeconds()")]
            get;
        }
        
        [Bridge.Template("TimeToTicks({0}, {1}, {2})")]
        internal extern static long TimeToTicks(int hour, int minute, int second);
        
        // internal so that DateTime doesn't have to call an extra get
        // method for some arithmetic operations.
        [Bridge.Template("getTicks()")]
        internal long _ticks;

        public extern long Ticks
        {
            [Bridge.Template("getTicks()")]
            get;
        }

        public extern double TotalDays
        {
            [Bridge.Template("getTotalDays()")]
            get;
        }

        public extern double TotalHours
        {
            [Bridge.Template("getTotalHours()")]
            get;
        }

        public extern double TotalMilliseconds
        {
            [Bridge.Template("getTotalMilliseconds()")]
            get;
        }

        public extern double TotalMinutes
        {
            [Bridge.Template("getTotalMinutes()")]
            get;
        }

        public extern double TotalSeconds
        {
            [Bridge.Template("getTotalSeconds()")]
            get;
        }

        public extern TimeSpan Add(TimeSpan ts);

        [Bridge.Template("{t1}.compareTo({t2})")]
        public static extern int Compare(TimeSpan t1, TimeSpan t2);

        public extern int CompareTo(object value);

        public extern int CompareTo(TimeSpan value);

        public extern TimeSpan Duration();

        public extern bool Equals(TimeSpan obj);

        [Bridge.Template("({t1}).ticks.eq(({t2}).ticks)")]
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

        [Bridge.Name("toString")]
        public extern string Format(string format);

        [Bridge.Name("toString")]
        public extern string Format(string format, IFormatProvider provider);

        public static extern TimeSpan Parse(string s);
        public static extern TimeSpan Parse(string s, IFormatProvider provider);

        [Bridge.Template("System.TimeSpan.tryParse({s}, null, {result})")]
        public static extern bool TryParse(string s, out TimeSpan result);

        [Bridge.Template("System.TimeSpan.tryParse({s}, {provider}, {result})")]
        public static extern bool TryParse(string s, IFormatProvider provider, out TimeSpan result);
    }
}