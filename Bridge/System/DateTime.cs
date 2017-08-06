using System.Runtime.CompilerServices;
using Bridge;

namespace System
{
    /// <summary>
    /// Represents an instant in time, typically expressed as a date and time of day.
    /// </summary>
    [External]
    [Reflectable]
    public struct DateTime : IComparable, IComparable<DateTime>, IEquatable<DateTime>, IFormattable
    {
        /// <summary>
        /// Represents the largest possible value of DateTime. This field is read-only.
        /// </summary>
        [Template("System.DateTime.getMaxValue()")]
        public static readonly DateTime MaxValue;

        /// <summary>
        /// Represents the smallest possible value of DateTime. This field is read-only.
        /// </summary>
        [Template("System.DateTime.getMinValue()")]
        public static readonly DateTime MinValue;

        /// <summary>
        /// Initializes a new instance of the DateTime structure.
        /// </summary>
        [Template("System.DateTime.getDefaultValue()")]
        private extern DateTime(DummyTypeUsedToAddAttributeToDefaultValueTypeConstructor _);

        /// <summary>
        /// Initializes a new instance of the DateTime structure to a specified number of ticks.
        /// </summary>
        /// <param name="ticks">A date and time expressed in the number of 100-nanosecond intervals that have elapsed since January 1, 0001 at 00:00:00.000 in the Gregorian calendar.</param>
        [Template("System.DateTime.create$2({0})")]
        public extern DateTime(long ticks);

        /// <summary>
        /// Initializes a new instance of the DateTime structure to a specified number of ticks and to Coordinated Universal Time (UTC) or local time.
        /// </summary>
        /// <param name="ticks">A date and time expressed in the number of 100-nanosecond intervals that have elapsed since January 1, 0001 at 00:00:00.000 in the Gregorian calendar.</param>
        /// <param name="kind">One of the enumeration values that indicates whether ticks specifies a local time, Coordinated Universal Time (UTC), or neither.</param>
        [Template("System.DateTime.create$2({0}, {1})")]
        public extern DateTime(long ticks, DateTimeKind kind);

        /// <summary>
        /// Initializes a new instance of the DateTime structure to the specified year, month, and day.
        /// </summary>
        /// <param name="year">The year (1 through 9999).</param>
        /// <param name="month">The month (1 through 12).</param>
        /// <param name="day">The day (1 through the number of days in month).</param>
        [Template("System.DateTime.create({0}, {1}, {2})")]
        public extern DateTime(int year, int month, int day);

        /// <summary>
        /// Initializes a new instance of the DateTime structure to the specified year, month, day, hour, minute, and second.
        /// </summary>
        /// <param name="year">The year (1 through 9999).</param>
        /// <param name="month">The month (1 through 12).</param>
        /// <param name="day">The day (1 through the number of days in month).</param>
        /// <param name="hour">The hours (0 through 23).</param>
        /// <param name="minute">The minutes (0 through 59).</param>
        /// <param name="second">The seconds (0 through 59).</param>
        [Template("System.DateTime.create({0}, {1}, {2}, {3}, {4}, {5})")]
        public extern DateTime(int year, int month, int day, int hour, int minute, int second);

        /// <summary>
        /// Initializes a new instance of the DateTime structure to the specified year, month, day, hour, minute, second, and Coordinated Universal Time (UTC) or local time.
        /// </summary>
        /// <param name="year">The year (1 through 9999).</param>
        /// <param name="month">The month (1 through 12).</param>
        /// <param name="day">The day (1 through the number of days in month).</param>
        /// <param name="hour">The hours (0 through 23).</param>
        /// <param name="minute">The minutes (0 through 59).</param>
        /// <param name="second">The seconds (0 through 59).</param>
        /// <param name="kind">One of the enumeration values that indicates whether year, month, day, hour, minute, second, and millisecond specify a local time, Coordinated Universal Time (UTC), or neither.</param>
        [Template("System.DateTime.create({0}, {1}, {2}, {3}, {4}, {5}, 0, {6})")]
        public extern DateTime(int year, int month, int day, int hour, int minute, int second, DateTimeKind kind);

        /// <summary>
        /// Initializes a new instance of the DateTime structure to the specified year, month, day, hour, minute, second, and millisecond.
        /// </summary>
        /// <param name="year">The year (1 through 9999).</param>
        /// <param name="month">The month (1 through 12).</param>
        /// <param name="day">The day (1 through the number of days in month).</param>
        /// <param name="hour">The hours (0 through 23).</param>
        /// <param name="minute">The minutes (0 through 59).</param>
        /// <param name="second">The seconds (0 through 59).</param>
        /// <param name="millisecond">The milliseconds (0 through 999).</param>
        [Template("System.DateTime.create({0}, {1}, {2}, {3}, {4}, {5}, {6})")]
        public extern DateTime(int year, int month, int day, int hour, int minute, int second, int millisecond);

        /// <summary>
        /// Initializes a new instance of the DateTime structure to the specified year, month, day, hour, minute, second, millisecond, and Coordinated Universal Time (UTC) or local time.
        /// </summary>
        /// <param name="year">The year (1 through 9999).</param>
        /// <param name="month">The month (1 through 12).</param>
        /// <param name="day">The day (1 through the number of days in month).</param>
        /// <param name="hour">The hours (0 through 23).</param>
        /// <param name="minute">The minutes (0 through 59).</param>
        /// <param name="second">The seconds (0 through 59).</param>
        /// <param name="millisecond">The milliseconds (0 through 999).</param>
        /// <param name="kind">One of the enumeration values that indicates whether year, month, day, hour, minute, second, and millisecond specify a local time, Coordinated Universal Time (UTC), or neither.</param>
        [Template("System.DateTime.create({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7})")]
        public extern DateTime(int year, int month, int day, int hour, int minute, int second, int millisecond, DateTimeKind kind);

        /// <summary>
        /// Gets the current date.
        /// </summary>
        public static extern DateTime Today
        {
            [Template("System.DateTime.getToday()")]
            get;
        }

        /// <summary>
        /// Gets a DateTime object that is set to the current date and time on this computer, expressed as the local time.
        /// </summary>
        public static extern DateTime Now
        {
            [Template("System.DateTime.getNow()")]
            get;
        }

        /// <summary>
        /// Gets a DateTime object that is set to the current date and time on this computer, expressed as the Coordinated Universal Time (UTC).
        /// </summary>
        public static extern DateTime UtcNow
        {
            [Template("System.DateTime.getUtcNow()")]
            get;
        }

        /// <summary>
        /// Gets a value that indicates whether the time represented by this instance is based on local time, Coordinated Universal Time (UTC), or neither.
        /// </summary>
        public DateTimeKind Kind
        {
            [Template("System.DateTime.getKind({this})")]
            get;
        }

        /// <summary>
        /// Creates a new DateTime object that has the same number of ticks as the specified DateTime, but is designated as either local time, Coordinated Universal Time (UTC), or neither, as indicated by the specified DateTimeKind value.
        /// </summary>
        /// <param name="value">A date and time.</param>
        /// <param name="kind">One of the enumeration values that indicates whether the new object represents local time, UTC, or neither.</param>
        /// <returns>A new object that has the same number of ticks as the object represented by the value parameter and the DateTimeKind value specified by the kind parameter.</returns>
        [Template("System.DateTime.specifyKind({0}, {1})")]
        public extern static DateTime SpecifyKind(DateTime value, DateTimeKind kind);

        [Template(Fn = "System.DateTime.format")]
        public override extern string ToString();

        [Template("System.DateTime.format({this}, {0})")]
        public extern string ToString(string format);

        [Template("System.DateTime.format({this}, {0}, {1})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Template("System.DateTime.parse({0})")]
        public static extern DateTime Parse(string s);

        [Template("System.DateTime.parse({0}, {1})")]
        public static extern DateTime Parse(string s, IFormatProvider provider);

        [Template("System.DateTime.tryParse({0}, null, {1})")]
        public static extern bool TryParse(string s, out DateTime result);

        [Template("System.DateTime.parseExact({0}, {1}, {2})")]
        public static extern DateTime ParseExact(string s, string format, IFormatProvider provider);

        [Template("System.DateTime.tryParseExact({0}, {1}, {2}, {3})")]
        public static extern bool TryParseExact(string s, string format, IFormatProvider provider, out DateTime result);

        [Template("System.DateTime.subdt({0}, {1})")]
        public static extern DateTime operator -(DateTime d, TimeSpan t);

        [Template("System.DateTime.adddt({0}, {1})")]
        public static extern DateTime operator +(DateTime d, TimeSpan t);

        [Template("System.DateTime.subdd({0}, {1})")]
        public static extern TimeSpan operator -(DateTime a, DateTime b);

        [Template("System.DateTime.subdd({this}, {0})")]
        public extern TimeSpan Subtract(DateTime value);

        [Template("Bridge.equals({0}, {1})")]
        public static extern bool operator ==(DateTime a, DateTime b);

        [Template("!Bridge.equals({0}, {1})")]
        public static extern bool operator !=(DateTime a, DateTime b);

        [Template("System.DateTime.lt({0}, {1})")]
        public static extern bool operator <(DateTime a, DateTime b);

        [Template("System.DateTime.gt({0}, {1})")]
        public static extern bool operator >(DateTime a, DateTime b);

        [Template("System.DateTime.lte({0}, {1})")]
        public static extern bool operator <=(DateTime a, DateTime b);

        [Template("System.DateTime.gte({0}, {1})")]
        public static extern bool operator >=(DateTime a, DateTime b);

        /// <summary>
        /// Gets the date component of this instance.
        /// </summary>
        public extern DateTime Date
        {
            [Template("System.DateTime.getDate({this})")]
            get;
        }

        /// <summary>
        /// Gets the day of the year represented by this instance.
        /// </summary>
        public extern int DayOfYear
        {
            [Template("System.DateTime.getDayOfYear({this})")]
            get;
        }

        /// <summary>
        /// Gets the day of the week represented by this instance.
        /// </summary>
        public extern DayOfWeek DayOfWeek
        {
            [Template("System.DateTime.getDayOfWeek({this})")]
            get;
        }

        /// <summary>
        /// Gets the year component of the date represented by this instance.
        /// </summary>
        public extern int Year
        {
            [Template("System.DateTime.getYear({this})")]
            get;
        }

        /// <summary>
        /// Gets the month component of the date represented by this instance.
        /// </summary>
        public extern int Month
        {
            [Template("System.DateTime.getMonth({this})")]
            get;
        }

        /// <summary>
        /// Gets the day of the month represented by this instance.
        /// </summary>
        public extern int Day
        {
            [Template("System.DateTime.getDay({this})")]
            get;
        }

        /// <summary>
        /// Gets the hour component of the date represented by this instance.
        /// </summary>
        public extern int Hour
        {
            [Template("System.DateTime.getHour({this})")]
            get;
        }

        /// <summary>
        /// Gets the milliseconds component of the date represented by this instance.
        /// </summary>
        public extern int Millisecond
        {
            [Template("System.DateTime.getMillisecond({this})")]
            get;
        }

        /// <summary>
        /// Gets the minute component of the date represented by this instance.
        /// </summary>
        public extern int Minute
        {
            [Template("System.DateTime.getMinute({this})")]
            get;
        }

        /// <summary>
        /// Gets the seconds component of the date represented by this instance.
        /// </summary>
        public extern int Second
        {
            [Template("System.DateTime.getSecond({this})")]
            get;
        }

        /// <summary>
        /// Gets the time of day for this instance.
        /// </summary>
        public extern TimeSpan TimeOfDay
        {
            [Template("System.DateTime.getTimeOfDay({this})")]
            get;
        }

        /// <summary>
        /// Gets the number of ticks that represent the date and time of this instance.
        /// </summary>
        public extern long Ticks
        {
            [Template("System.DateTime.getTicks({this})")]
            get;
        }

        /// <summary>
        /// Returns a new DateTime that adds the specified number of years to the value of this instance.
        /// </summary>
        /// <param name="value">A number of years. The value parameter can be negative or positive.</param>
        /// <returns>An object whose value is the sum of the date and time represented by this instance and the number of years represented by value.</returns>
        [Template("System.DateTime.addYears({this}, {0})")]
        public extern DateTime AddYears(int value);

        /// <summary>
        /// Returns a new DateTime that adds the specified number of months to the value of this instance.
        /// </summary>
        /// <param name="months">A number of months. The months parameter can be negative or positive.</param>
        /// <returns>An object whose value is the sum of the date and time represented by this instance and months.</returns>
        [Template("System.DateTime.addMonths({this}, {0})")]
        public extern DateTime AddMonths(int months);

        /// <summary>
        /// Returns a new DateTime that adds the specified number of days to the value of this instance.
        /// </summary>
        /// <param name="value">A number of whole and fractional days. The value parameter can be negative or positive.</param>
        /// <returns>An object whose value is the sum of the date and time represented by this instance and the number of days represented by value.</returns>
        [Template("System.DateTime.addDays({this}, {0})")]
        public extern DateTime AddDays(double value);

        /// <summary>
        /// Returns a new DateTime that adds the specified number of hours to the value of this instance.
        /// </summary>
        /// <param name="value">A number of whole and fractional hours. The value parameter can be negative or positive.</param>
        /// <returns>An object whose value is the sum of the date and time represented by this instance and the number of hours represented by value.</returns>
        [Template("System.DateTime.addHours({this}, {0})")]
        public extern DateTime AddHours(double value);

        /// <summary>
        /// Returns a new DateTime that adds the specified number of minutes to the value of this instance.
        /// </summary>
        /// <param name="value">A number of whole and fractional minutes. The value parameter can be negative or positive.</param>
        /// <returns>An object whose value is the sum of the date and time represented by this instance and the number of minutes represented by value.</returns>
        [Template("System.DateTime.addMinutes({this}, {0})")]
        public extern DateTime AddMinutes(double value);

        /// <summary>
        /// Returns a new DateTime that adds the specified number of seconds to the value of this instance.
        /// </summary>
        /// <param name="value">A number of whole and fractional seconds. The value parameter can be negative or positive.</param>
        /// <returns>An object whose value is the sum of the date and time represented by this instance and the number of seconds represented by value.</returns>
        [Template("System.DateTime.addSeconds({this}, {0})")]
        public extern DateTime AddSeconds(double value);

        /// <summary>
        /// Returns a new DateTime that adds the specified number of milliseconds to the value of this instance.
        /// </summary>
        /// <param name="value">A number of whole and fractional milliseconds. The value parameter can be negative or positive. Note that this value is rounded to the nearest integer.</param>
        /// <returns>An object whose value is the sum of the date and time represented by this instance and the number of milliseconds represented by value.</returns>
        [Template("System.DateTime.addMilliseconds({this}, {0})")]
        public extern DateTime AddMilliseconds(double value);

        /// <summary>
        /// Returns a new DateTime that adds the specified number of ticks to the value of this instance.
        /// </summary>
        /// <param name="value">A number of 100-nanosecond ticks. The value parameter can be positive or negative.</param>
        /// <returns>An object whose value is the sum of the date and time represented by this instance and the time represented by value.</returns>
        [Template("System.DateTime.addTicks({this}, {0})")]
        public extern DateTime AddTicks(long value);

        /// <summary>
        /// Returns a new DateTime that adds the value of the specified TimeSpan to the value of this instance.
        /// </summary>
        /// <param name="value">A positive or negative time interval.</param>
        /// <returns>An object whose value is the sum of the date and time represented by this instance and the time interval represented by value.</returns>
        [Template("System.DateTime.add({this}, {0})")]
        public extern DateTime Add(TimeSpan value);

        /// <summary>
        /// Subtracts the specified time or duration from this instance.
        /// </summary>
        /// <param name="value">The time interval to subtract.</param>
        /// <returns>An object that is equal to the date and time represented by this instance minus the time interval represented by value.</returns>
        [Template("System.DateTime.subtract({this}, {0})")]
        public extern DateTime Subtract(TimeSpan value);

        /// <summary>
        /// Returns the number of days in the specified month and year.
        /// </summary>
        /// <param name="year">The year.</param>
        /// <param name="month">The month (a number ranging from 1 to 12).</param>
        /// <returns>The number of days in month for the specified year.</returns>
        [Template("System.DateTime.getDaysInMonth({0}, {1})")]
        public static extern int DaysInMonth(int year, int month);

        /// <summary>
        /// Returns an indication whether the specified year is a leap year.
        /// </summary>
        /// <param name="year">A 4-digit year.</param>
        /// <returns>true if year is a leap year; otherwise, false.</returns>
        [Template("System.DateTime.getIsLeapYear({0})")]
        public static extern bool IsLeapYear(int year);

        [Template("Bridge.compare({this}, {0})")]
        public extern int CompareTo(DateTime other);

        [Template("Bridge.compare({this}, {0})")]
        public extern int CompareTo(object other);

        [Template("Bridge.compare({t1}, {t2})")]
        public static extern int Compare(DateTime t1, DateTime t2);

        [Template("Bridge.equalsT({this}, {0})")]
        public extern bool Equals(DateTime other);

        [Template("Bridge.equalsT({0}, {1})")]
        public static extern bool Equals(DateTime t1, DateTime t2);

        /// <summary>
        /// Indicates whether this instance of DateTime is within the daylight saving time range for the current time zone.
        /// </summary>
        /// <returns>true if the value of the Kind property is Local or Unspecified and the value of this instance of DateTime is within the daylight saving time range for the local time zone; false if Kind is Utc.</returns>
        [Template("System.DateTime.isDaylightSavingTime({this})")]
        public extern bool IsDaylightSavingTime();

        /// <summary>
        /// Converts the value of the current DateTime object to Coordinated Universal Time (UTC).
        /// </summary>
        /// <returns>An object whose Kind property is Utc, and whose value is the UTC equivalent to the value of the current DateTime object, or MaxValue if the converted value is too large to be represented by a DateTime object, or MinValue if the converted value is too small to be represented by a DateTime object.</returns>
        [Template("System.DateTime.toUniversalTime({this})")]
        public extern DateTime ToUniversalTime();

        /// <summary>
        /// Converts the value of the current DateTime object to local time.
        /// </summary>
        /// <returns>An object whose Kind property is Local, and whose value is the local time equivalent to the value of the current DateTime object, or MaxValue if the converted value is too large to be represented by a DateTime object, or MinValue if the converted value is too small to be represented as a DateTime object.</returns>
        [Template("System.DateTime.toLocalTime({this})")]
        public extern DateTime ToLocalTime();

        /// <summary>
        /// Converts the value of the current DateTime object to its equivalent short date string representation.
        /// </summary>
        /// <returns>A string that contains the short date string representation of the current DateTime object.</returns>
        [Template("System.DateTime.format({this}, \"d\")")]
        public extern string ToShortDateString();

        /// <summary>
        /// Converts the value of the current DateTime object to its equivalent short time string representation.
        /// </summary>
        /// <returns>A string that contains the short time string representation of the current DateTime object.</returns>
        [Template("System.DateTime.format({this}, \"t\")")]
        public extern string ToShortTimeString();
    }
}