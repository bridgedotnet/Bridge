using Bridge;

namespace System
{
    [External]
    [Name("Bridge.TimeSpan")]
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

        public TimeSpan(long ticks)
        {
        }

        public TimeSpan(int hours, int minutes, int seconds)
        {
        }

        public TimeSpan(int days, int hours, int minutes, int seconds)
        {
        }

        public TimeSpan(int days, int hours, int minutes, int seconds, int milliseconds)
        {
        }

        [Template("new Bridge.TimeSpan(-{t}.ticks)")]
        public static TimeSpan operator -(TimeSpan t)
        {
            return new TimeSpan();
        }

        [Template("new Bridge.TimeSpan({t1}.ticks - {t2}.ticks)")]
        public static TimeSpan operator -(TimeSpan t1, TimeSpan t2)
        {
            return new TimeSpan();
        }

        [Template("{t1}.ticks !== {t2}.ticks")]
        public static bool operator !=(TimeSpan t1, TimeSpan t2)
        {
            return false;
        }

        [Template("new Bridge.TimeSpan({t}.ticks)")]
        public static TimeSpan operator +(TimeSpan t)
        {
            return new TimeSpan();
        }

        [Template("new Bridge.TimeSpan({t1}.ticks + {t2}.ticks)")]
        public static TimeSpan operator +(TimeSpan t1, TimeSpan t2)
        {
            return new TimeSpan();
        }

        [Template("{t1}.ticks < {t2}.ticks")]
        public static bool operator <(TimeSpan t1, TimeSpan t2)
        {
            return false;
        }

        [Template("{t1}.ticks <= {t2}.ticks")]
        public static bool operator <=(TimeSpan t1, TimeSpan t2)
        {
            return false;
        }

        [Template("{t1}.ticks === {t2}.ticks")]
        public static bool operator ==(TimeSpan t1, TimeSpan t2)
        {
            return false;
        }

        [Template("{t1}.ticks > {t2}.ticks")]
        public static bool operator >(TimeSpan t1, TimeSpan t2)
        {
            return false;
        }

        [Template("{t1}.ticks >= {t2}.ticks")]
        public static bool operator >=(TimeSpan t1, TimeSpan t2)
        {
            return false;
        }

        public int Days
        {
            get
            {
                return 0;
            }
        }

        public int Hours
        {
            get
            {
                return 0;
            }
        }

        public int Milliseconds
        {
            get
            {
                return 0;
            }
        }

        public int Minutes
        {
            get
            {
                return 0;
            }
        }

        public int Seconds
        {
            get
            {
                return 0;
            }
        }

        public long Ticks
        {
            get
            {
                return 0;
            }
        }

        public double TotalDays
        {
            get
            {
                return 0;
            }
        }

        public double TotalHours
        {
            get
            {
                return 0;
            }
        }

        public double TotalMilliseconds
        {
            get
            {
                return 0;
            }
        }

        public double TotalMinutes
        {
            get
            {
                return 0;
            }
        }

        public double TotalSeconds
        {
            get
            {
                return 0;
            }
        }

        public TimeSpan Add(TimeSpan ts)
        {
            return new TimeSpan();
        }

        [Template("{t1}.compareTo({t2})")]
        public static int Compare(TimeSpan t1, TimeSpan t2)
        {
            return 0;
        }

        public int CompareTo(object value)
        {
            return 0;
        }

        public int CompareTo(TimeSpan value)
        {
            return 0;
        }

        public TimeSpan Duration()
        {
            return new TimeSpan();
        }

        public bool Equals(TimeSpan obj)
        {
            return false;
        }

        [Template("{t1}.ticks === {t2}.ticks")]
        public static bool Equals(TimeSpan t1, TimeSpan t2)
        {
            return false;
        }

        public static TimeSpan FromDays(double value)
        {
            return new TimeSpan();
        }

        public static TimeSpan FromHours(double value)
        {
            return new TimeSpan();
        }

        public static TimeSpan FromMilliseconds(double value)
        {
            return new TimeSpan();
        }

        public static TimeSpan FromMinutes(double value)
        {
            return new TimeSpan();
        }

        public static TimeSpan FromSeconds(double value)
        {
            return new TimeSpan();
        }

        public static TimeSpan FromTicks(long value)
        {
            return new TimeSpan();
        }

        public TimeSpan Negate()
        {
            return new TimeSpan();
        }

        public TimeSpan Subtract(TimeSpan ts)
        {
            return new TimeSpan();
        }

        public string ToString(string format)
        {
            return null;
        }

        public string ToString(string format, IFormatProvider provider)
        {
            return null;
        }

        [Name("toString")]
        public string Format(string format)
        {
            return null;
        }

        [Name("toString")]
        public string Format(string format, IFormatProvider provider)
        {
            return null;
        }
    }
}
