using Bridge;

namespace System
{
    [External]
    [Name("Date")]
    public struct DateTime : IComparable, IComparable<DateTime>, IEquatable<DateTime>, IFormattable
    {
        [Template("new Date(864e13)")]
        public static readonly DateTime MaxValue = new DateTime(123);

        [Template("new Date(-864e13)")]
        public static readonly DateTime MinValue = new DateTime(0);

        /// <summary>
        /// Double value representing the number of milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch).
        /// </summary>
        /// <param name="value">The numberof milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch)</param>
        public DateTime(long value)
        {
        }

        /// <summary>
        /// String value representing a date. The string should be in a format recognized by the Date.parse() method (IETF-compliant RFC 2822 timestamps and also a version of ISO8601).
        /// </summary>
        /// <param name="dateString"></param>
        public DateTime(string dateString)
        {
        }

        [Template("new Date({year}, {month} - 1)")]
        public DateTime(int year, int month)
        {
        }

        [Template("new Date({year}, {month} - 1, {day})")]
        public DateTime(int year, int month, int day)
        {
        }

        [Template("new Date({year}, {month} - 1, {day}, {hours})")]
        public DateTime(int year, int month, int day, int hours)
        {
        }

        [Template("new Date({year}, {month} - 1, {day}, {hours}, {minutes})")]
        public DateTime(int year, int month, int day, int hours, int minutes)
        {
        }

        [Template("new Date({year}, {month} - 1, {day}, {hours}, {minutes}, {seconds})")]
        public DateTime(int year, int month, int day, int hours, int minutes, int seconds)
        {
        }

        [Template("new Date({year}, {month} - 1, {day}, {hours}, {minutes}, {seconds}, {milliseconds})")]
        public DateTime(int year, int month, int day, int hours, int minutes, int seconds, int milliseconds)
        {
        }

        [Template("Date.UTC({year}, {month} - 1, {day}, {hours}, {minutes}, {seconds}, {ms})")]
        public static long Utc(int year, int month, int day, int hours, int minutes, int seconds, int ms)
        {
            return 0;
        }

        [Template("Date.UTC({year}, {month} - 1, {day}, {hours}, {minutes}, {seconds})")]
        public static long Utc(int year, int month, int day, int hours, int minutes, int seconds)
        {
            return 0;
        }

        [Template("Date.UTC({year}, {month} - 1, {day}, {hours}, {minutes})")]
        public static long Utc(int year, int month, int day, int hours, int minutes)
        {
            return 0;
        }

        [Template("Date.UTC({year}, {month} - 1, {day}, {hours})")]
        public static long Utc(int year, int month, int day, int hours)
        {
            return 0;
        }

        [Template("Date.UTC({year}, {month} - 1, {day})")]
        public static long Utc(int year, int month, int day)
        {
            return 0;
        }

        [Template("Date.UTC({year}, {month} - 1)")]
        public static long Utc(int year, int month)
        {
            return 0;
        }

        public static DateTime Now
        {
            [Template("new Date()")]
            get
            {
                return default(DateTime);
            }
        }

        public static DateTime UtcNow
        {
            [Template("Bridge.Date.utcNow()")]
            get
            {
                return default(DateTime);
            }
        }

        public static DateTime Today
        {
            [Template("Bridge.Date.today()")]
            get
            {
                return default(DateTime);
            }
        }

        [Template("Bridge.Date.format({this}, {format})")]
        public string Format(string format)
        {
            return null;
        }

        [Template("Bridge.Date.format({this}, {format}, {provider})")]
        public string Format(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("Bridge.Date.format({this})")]
        public override string ToString()
        {
            return null;
        }

        [Template("Bridge.Date.format({this}, {format})")]
        public string ToString(string format)
        {
            return null;
        }

        [Template("Bridge.Date.format({this}, {format}, {provider})")]
        public string ToString(string format, IFormatProvider provider)
        {
            return null;
        }

        public int GetDate()
        {
            return 0;
        }

        public int GetDay()
        {
            return 0;
        }

        public int GetFullYear()
        {
            return 0;
        }

        public int GetHours()
        {
            return 0;
        }

        public int GetMilliseconds()
        {
            return 0;
        }

        public int GetMinutes()
        {
            return 0;
        }

        [Template("({this}.getMonth() + 1)")]
        public int GetMonth()
        {
            return 0;
        }

        public int GetSeconds()
        {
            return 0;
        }

        public long GetTime()
        {
            return 0;
        }

        public int GetTimezoneOffset()
        {
            return 0;
        }

        [Name("getUTCDate")]
        public int GetUtcDate()
        {
            return 0;
        }

        [Name("getUTCDay")]
        public int GetUtcDay()
        {
            return 0;
        }

        [Name("getUTCFullYear")]
        public int GetUtcFullYear()
        {
            return 0;
        }

        [Name("getUTCHours")]
        public int GetUtcHours()
        {
            return 0;
        }

        [Name("getUTCMilliseconds")]
        public int GetUtcMilliseconds()
        {
            return 0;
        }

        [Name("getUTCMinutes")]
        public int GetUtcMinutes()
        {
            return 0;
        }

        [Template("({this}.getUTCMonth() + 1)")]
        public int GetUtcMonth()
        {
            return 0;
        }

        [Name("getUTCSeconds")]
        public int GetUtcSeconds()
        {
            return 0;
        }

        [Template("Bridge.Date.parse({value})")]
        public static DateTime Parse(string value)
        {
            return default(DateTime);
        }

        [Template("Bridge.Date.parse({value}, {provider})")]
        public static DateTime Parse(string value, IFormatProvider provider)
        {
            return default(DateTime);
        }

        [Template("Bridge.Date.parse({value}, {provider}, {utc})")]
        public static DateTime Parse(string value, IFormatProvider provider, bool utc)
        {
            return default(DateTime);
        }

        [Template("Bridge.Date.parse({value}, null, {utc})")]
        public static DateTime Parse(string value, bool utc)
        {
            return default(DateTime);
        }

        [Template("Bridge.Date.tryParse({value}, null, {result})")]
        public static bool TryParse(string value, out DateTime result)
        {
            result = default(DateTime);
            return false;
        }

        [Template("Bridge.Date.tryParse({value}, null, {result}, {utc})")]
        public static bool TryParse(string value, out DateTime result, bool utc)
        {
            result = default(DateTime);
            return false;
        }

        [Template("Bridge.Date.tryParse({value}, {provider}, {result})")]
        public static bool TryParse(string value, IFormatProvider provider, out DateTime result)
        {
            result = default(DateTime);
            return false;
        }

        [Template("Bridge.Date.tryParse({value}, {provider}, {result}, {utc})")]
        public static bool TryParse(string value, IFormatProvider provider, out DateTime result, bool utc)
        {
            result = default(DateTime);
            return false;
        }

        [Template("Bridge.Date.parseExact({value}, {format})")]
        public static DateTime ParseExact(string value, string format)
        {
            return default(DateTime);
        }

        [Template("Bridge.Date.parseExact({value}, {format}, null, {utc})")]
        public static DateTime ParseExact(string value, string format, bool utc)
        {
            return default(DateTime);
        }

        [Template("Bridge.Date.parseExact({value}, {formats})")]
        public static DateTime ParseExact(string value, string[] formats)
        {
            return default(DateTime);
        }

        [Template("Bridge.Date.parseExact({value}, {formats}, null, {utc})")]
        public static DateTime ParseExact(string value, string[] formats, bool utc)
        {
            return default(DateTime);
        }

        [Template("Bridge.Date.parseExact({value}, {format}, {provider})")]
        public static DateTime ParseExact(string value, string format, IFormatProvider provider)
        {
            return default(DateTime);
        }

        [Template("Bridge.Date.parseExact({value}, {format}, {provider}, {utc})")]
        public static DateTime ParseExact(string value, string format, IFormatProvider provider, bool utc)
        {
            return default(DateTime);
        }

        [Template("Bridge.Date.parseExact({value}, {formats}, {provider})")]
        public static DateTime ParseExact(string value, string[] formats, IFormatProvider provider)
        {
            return default(DateTime);
        }

        [Template("Bridge.Date.parseExact({value}, {formats}, {provider}, {utc})")]
        public static DateTime ParseExact(string value, string[] formats, IFormatProvider provider, bool utc)
        {
            return default(DateTime);
        }

        [Template("Bridge.Date.tryParseExact({value}, {format}, null, {result})")]
        public static bool TryParseExact(string value, string format, out DateTime result)
        {
            result = default(DateTime);
            return false;
        }

        [Template("Bridge.Date.tryParseExact({value}, {format}, null, {result}, {utc})")]
        public static bool TryParseExact(string value, string format, out DateTime result, bool utc)
        {
            result = default(DateTime);
            return false;
        }

        [Template("Bridge.Date.tryParseExact({value}, {formats}, null, {result})")]
        public static bool TryParseExact(string value, string[] formats, out DateTime result)
        {
            result = default(DateTime);
            return false;
        }

        [Template("Bridge.Date.tryParseExact({value}, {formats}, null, {result}, {utc})")]
        public static bool TryParseExact(string value, string[] formats, out DateTime result, bool utc)
        {
            result = default(DateTime);
            return false;
        }

        [Template("Bridge.Date.tryParseExact({value}, {format}, {provider}, {result})")]
        public static bool TryParseExact(string value, string format, IFormatProvider provider, out DateTime result)
        {
            result = default(DateTime);
            return false;
        }

        [Template("Bridge.Date.tryParseExact({value}, {format}, {provider}, {result}, {utc})")]
        public static bool TryParseExact(string value, string format, IFormatProvider provider, out DateTime result, bool utc)
        {
            result = default(DateTime);
            return false;
        }

        [Template("Bridge.Date.tryParseExact({value}, {formats}, {provider}, {result})")]
        public static bool TryParseExact(string value, string[] formats, IFormatProvider provider, out DateTime result)
        {
            result = default(DateTime);
            return false;
        }

        [Template("Bridge.Date.tryParseExact({value}, {formats}, {provider}, {result}, {utc})")]
        public static bool TryParseExact(string value, string[] formats, IFormatProvider provider, out DateTime result, bool utc)
        {
            result = default(DateTime);
            return false;
        }

        public string ToDateString()
        {
            return null;
        }

        public string ToLocaleDateString()
        {
            return null;
        }

        public string ToLocaleTimeString()
        {
            return null;
        }

        public string ToTimeString()
        {
            return null;
        }

        [Name("toUTCString")]
        public string ToUtcString()
        {
            return null;
        }

        [Template("Bridge.Date.subdt({d}, {t})")]
        public static DateTime operator -(DateTime d, TimeSpan t)
        {
            return default(DateTime);
        }

        [Template("Bridge.Date.adddt({d}, {t})")]
        public static DateTime operator +(DateTime d, TimeSpan t)
        {
            return default(DateTime);
        }

        [Template("Bridge.Date.subdd({a}, {b})")]
        public static TimeSpan operator -(DateTime a, DateTime b)
        {
            return default(TimeSpan);
        }

        [Template("Bridge.Date.subdd({this}, {value})")]
        public TimeSpan Subtract(DateTime value)
        {
            return default(TimeSpan);
        }

        [Template("Bridge.equals({a}, {b})")]
        public static bool operator ==(DateTime a, DateTime b)
        {
            return false;
        }

        [Template("!Bridge.equals({a}, {b})")]
        public static bool operator !=(DateTime a, DateTime b)
        {
            return false;
        }

        [Template("Bridge.Date.lt({a}, {b})")]
        public static bool operator <(DateTime a, DateTime b)
        {
            return false;
        }

        [Template("Bridge.Date.gt({a}, {b})")]
        public static bool operator >(DateTime a, DateTime b)
        {
            return false;
        }

        [Template("Bridge.Date.lte({a}, {b})")]
        public static bool operator <=(DateTime a, DateTime b)
        {
            return false;
        }

        [Template("Bridge.Date.gte({a}, {b})")]
        public static bool operator >=(DateTime a, DateTime b)
        {
            return false;
        }

        [Template("new Date({this}.valueOf())")]
        public static explicit operator DateTime(Date dt)
        {
            return default(DateTime);
        }

        [Template("new Date({this}.valueOf())")]
        public static explicit operator Date(DateTime dt)
        {
            return null;
        }

        public DateTime Date
        {
            [Template("new Date({this}.getFullYear(), {this}.getMonth(), {this}.getDate())")]
            get
            {
                return default(DateTime);
            }
        }

        public int Day
        {
            [Template("{this}.getDate()")]
            get
            {
                return 0;
            }
        }

        public DayOfWeek DayOfWeek
        {
            [Template("{this}.getDay()")]
            get
            {
                return 0;
            }
        }

        public int DayOfYear
        {
            [Template("Math.ceil(({this} - new Date({this}.getFullYear(), 0, 1)) / 864e5)")]
            get
            {
                return 0;
            }
        }

        public int Hour
        {
            [Template("{this}.getHours()")]
            get
            {
                return 0;
            }
        }

        public int Millisecond
        {
            [Template("{this}.getMilliseconds()")]
            get
            {
                return 0;
            }
        }

        public int Minute
        {
            [Template("{this}.getMinutes()")]
            get
            {
                return 0;
            }
        }

        public int Month
        {
            [Template("({this}.getMonth() + 1)")]
            get
            {
                return 0;
            }
        }

        public int Second
        {
            [Template("{this}.getSeconds()")]
            get
            {
                return 0;
            }
        }

        public int Year
        {
            [Template("{this}.getFullYear()")]
            get
            {
                return 0;
            }
        }

        [Template("new Date({this}.valueOf() + Math.round(({value}) * 864e5))")]
        public DateTime AddDays(double value)
        {
            return default(DateTime);
        }

        [Template("new Date({this}.valueOf() + Math.round(({value}) * 36e5))")]
        public DateTime AddHours(double value)
        {
            return default(DateTime);
        }

        [Template("new Date({this}.valueOf() + Math.round({value}))")]
        public DateTime AddMilliseconds(double value)
        {
            return default(DateTime);
        }

        [Template("new Date({this}.valueOf() + Math.round(({value}) * 6e4))")]
        public DateTime AddMinutes(double value)
        {
            return default(DateTime);
        }

        [Template("new Date({this}.getFullYear(), {this}.getMonth() + {months}, {this}.getDate(), {this}.getHours(), {this}.getMinutes(), {this}.getSeconds(), {this}.getMilliseconds())")]
        public DateTime AddMonths(int months)
        {
            return default(DateTime);
        }

        [Template("new Date({this}.valueOf() + Math.round(({value}) * 1e3))")]
        public DateTime AddSeconds(double value)
        {
            return default(DateTime);
        }

        [Template("new Date({this}.getFullYear() + {value}, {this}.getMonth(), {this}.getDate(), {this}.getHours(), {this}.getMinutes(), {this}.getSeconds(), {this}.getMilliseconds())")]
        public DateTime AddYears(int value)
        {
            return default(DateTime);
        }

        [Template("(new Date({year}, {month}, -1).getDate() + 1)")]
        public static int DaysInMonth(int year, int month)
        {
            return 0;
        }

        [Template("(new Date({year}, 2, -1).getDate() === 28)")]
        public static bool IsLeapYear(int year)
        {
            return false;
        }

        [Template("Bridge.compare({this}, {other})")]
        public int CompareTo(DateTime other)
        {
            return 0;
        }

        [Template("Bridge.compare({this}, {other})")]
        public int CompareTo(object other)
        {
            return 0;
        }

        [Template("Bridge.compare({t1}, {t2})")]
        public static int Compare(DateTime t1, DateTime t2)
        {
            return 0;
        }

        [Template("Bridge.equalsT({this}, {other})")]
        public bool Equals(DateTime other)
        {
            return false;
        }

        [Template("Bridge.equalsT({t1}, {t2})")]
        public static bool Equals(DateTime t1, DateTime t2)
        {
            return false;
        }

        [Template("Bridge.Date.isDaylightSavingTime({this})")]
        public bool IsDaylightSavingTime()
        {
            return false;
        }

        [Template("Bridge.Date.toUTC({this})")]
        public DateTime ToUniversalTime()
        {
            return default(DateTime);
        }

        [Template("Bridge.Date.toLocal({this})")]
        public DateTime ToLocalTime()
        {
            return default(DateTime);
        }

        [Template("new Date(({this}).getTime() + (({value}).ticks / 10000))")]
        public extern DateTime Add(TimeSpan value);

        [Template("new Date(({this}).getTime() + (({value}) / 10000))")]
        public extern DateTime AddTicks(long value);

        [Template("new Date({this} - new Date(({value}).ticks / 10000))")]
        public extern DateTime Subtract(TimeSpan value);

        public TimeSpan TimeOfDay
        {
            [Template("Bridge.Date.timeOfDay({this})")]
            get
            {
                return default(TimeSpan);
            }
        }

        public long Ticks
        {
            [Template("({this}.getTime() * 10000)")]
            get
            {
                return 0;
            }
        }
    }
}