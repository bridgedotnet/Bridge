using System;

namespace Bridge.Html5
{
    /// <summary>
    /// JavaScript Date instances inherit from Date.prototype. You can modify the constructor's prototype object to affect properties and methods inherited by JavaScript Date instances.
    /// </summary>
    [External]
    [Name("Date")]
    public class Date
    {
        /// <summary>
        /// The Date.now() method returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
        /// </summary>
        /// <remarks>
        /// Because now() is a static method of Date, you always use it as Date.now().
        /// </remarks>
        /// <returns>A Number representing the milliseconds elapsed since the UNIX epoch.</returns>
        public static extern double Now();

        /// <summary>
        /// The Date.UTC() method accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time.
        /// </summary>
        /// <remarks>
        /// UTC() takes comma-delimited date parameters and returns the number of milliseconds between January 1, 1970, 00:00:00, universal time and the time you specified.
        ///
        /// You should specify a full year for the year; for example, 1998. If a year between 0 and 99 is specified, the method converts the year to a year in the 20th century(1900 + year); for example, if you specify 95, the year 1995 is used.
        /// </remarks>
        /// <param name="year">A year after 1900.</param>
        /// <param name="month">An integer between 0 and 11 representing the month.</param>
        /// <returns>A number representing the number of milliseconds in the given Date object since January 1, 1970, 00:00:00, universal time.</returns>
        [Name("UTC")]
        public static extern double UTC(int year, int month);

        /// <summary>
        /// The Date.UTC() method accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time.
        /// </summary>
        /// <remarks>
        /// UTC() takes comma-delimited date parameters and returns the number of milliseconds between January 1, 1970, 00:00:00, universal time and the time you specified.
        ///
        /// You should specify a full year for the year; for example, 1998. If a year between 0 and 99 is specified, the method converts the year to a year in the 20th century(1900 + year); for example, if you specify 95, the year 1995 is used.
        /// </remarks>
        /// <param name="year">A year after 1900.</param>
        /// <param name="month">An integer between 0 and 11 representing the month.</param>
        /// <param name="day">An integer between 1 and 31 representing the day of the month.</param>
        /// <returns>A number representing the number of milliseconds in the given Date object since January 1, 1970, 00:00:00, universal time.</returns>
        [Name("UTC")]
        public static extern double UTC(int year, int month, int day);

        /// <summary>
        /// The Date.UTC() method accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time.
        /// </summary>
        /// <remarks>
        /// UTC() takes comma-delimited date parameters and returns the number of milliseconds between January 1, 1970, 00:00:00, universal time and the time you specified.
        ///
        /// You should specify a full year for the year; for example, 1998. If a year between 0 and 99 is specified, the method converts the year to a year in the 20th century(1900 + year); for example, if you specify 95, the year 1995 is used.
        /// </remarks>
        /// <param name="year">A year after 1900.</param>
        /// <param name="month">An integer between 0 and 11 representing the month.</param>
        /// <param name="day">An integer between 1 and 31 representing the day of the month.</param>
        /// <param name="hour">An integer between 0 and 23 representing the hours.</param>
        /// <returns>A number representing the number of milliseconds in the given Date object since January 1, 1970, 00:00:00, universal time.</returns>
        [Name("UTC")]
        public static extern double UTC(int year, int month, int day, int hour);

        /// <summary>
        /// The Date.UTC() method accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time.
        /// </summary>
        /// <remarks>
        /// UTC() takes comma-delimited date parameters and returns the number of milliseconds between January 1, 1970, 00:00:00, universal time and the time you specified.
        ///
        /// You should specify a full year for the year; for example, 1998. If a year between 0 and 99 is specified, the method converts the year to a year in the 20th century(1900 + year); for example, if you specify 95, the year 1995 is used.
        /// </remarks>
        /// <param name="year">A year after 1900.</param>
        /// <param name="month">An integer between 0 and 11 representing the month.</param>
        /// <param name="day">An integer between 1 and 31 representing the day of the month.</param>
        /// <param name="hour">An integer between 0 and 23 representing the hours.</param>
        /// <param name="minute">An integer between 0 and 59 representing the minutes.</param>
        /// <returns>A number representing the number of milliseconds in the given Date object since January 1, 1970, 00:00:00, universal time.</returns>
        [Name("UTC")]
        public static extern double UTC(int year, int month, int day, int hour, int minute);

        /// <summary>
        /// The Date.UTC() method accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time.
        /// </summary>
        /// <remarks>
        /// UTC() takes comma-delimited date parameters and returns the number of milliseconds between January 1, 1970, 00:00:00, universal time and the time you specified.
        ///
        /// You should specify a full year for the year; for example, 1998. If a year between 0 and 99 is specified, the method converts the year to a year in the 20th century(1900 + year); for example, if you specify 95, the year 1995 is used.
        /// </remarks>
        /// <param name="year">A year after 1900.</param>
        /// <param name="month">An integer between 0 and 11 representing the month.</param>
        /// <param name="day">An integer between 1 and 31 representing the day of the month.</param>
        /// <param name="hour">An integer between 0 and 23 representing the hours.</param>
        /// <param name="minute">An integer between 0 and 59 representing the minutes.</param>
        /// <param name="second">An integer between 0 and 59 representing the seconds.</param>
        /// <returns>A number representing the number of milliseconds in the given Date object since January 1, 1970, 00:00:00, universal time.</returns>
        [Name("UTC")]
        public static extern double UTC(int year, int month, int day, int hour, int minute, int second);

        /// <summary>
        /// The Date.UTC() method accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time.
        /// </summary>
        /// <remarks>
        /// UTC() takes comma-delimited date parameters and returns the number of milliseconds between January 1, 1970, 00:00:00, universal time and the time you specified.
        ///
        /// You should specify a full year for the year; for example, 1998. If a year between 0 and 99 is specified, the method converts the year to a year in the 20th century(1900 + year); for example, if you specify 95, the year 1995 is used.
        /// </remarks>
        /// <param name="year">A year after 1900.</param>
        /// <param name="month">An integer between 0 and 11 representing the month.</param>
        /// <param name="day">An integer between 1 and 31 representing the day of the month.</param>
        /// <param name="hour">An integer between 0 and 23 representing the hours.</param>
        /// <param name="minute">An integer between 0 and 59 representing the minutes.</param>
        /// <param name="second">An integer between 0 and 59 representing the seconds.</param>
        /// <param name="millisecond">An integer between 0 and 999 representing the milliseconds.</param>
        /// <returns>A number representing the number of milliseconds in the given Date object since January 1, 1970, 00:00:00, universal time.</returns>
        [Name("UTC")]
        public static extern double UTC(int year, int month, int day, int hour, int minute, int second, int millisecond);

        /// <summary>
        /// The Date.parse() method parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC or NaN if the string is unrecognised or, in some cases, contains illegal date values (e.g. 2015-02-31).
        /// </summary>
        /// <param name="dateString">A string representing an RFC2822 or ISO 8601 date (other formats may be used, but results may be unexpected).</param>
        /// <returns>A number representing the milliseconds elapsed since January 1, 1970, 00:00:00 UTC and the date obtained by parsing the given string representation of a date. If the argument doesn't represent a valid date, NaN is returned.</returns>
        public static extern double Parse(string dateString);

        [Template("new Date({this}.valueOf())")]
        public static extern explicit operator DateTime(Date dt);

        [Template("new Date({this}.valueOf())")]
        public static extern explicit operator Date(DateTime dt);

        public static extern double operator -(Date d1, Date d2);

        public static extern double operator -(Date d1, int d2);

        public static extern double operator -(Date d1, double d2);

        public static extern bool operator <(Date d1, Date d2);

        public static extern bool operator <(Date d1, int d2);

        public static extern bool operator <(Date d1, double d2);

        public static extern bool operator <(int d1, Date d2);

        public static extern bool operator <(double d1, Date d2);

        public static extern bool operator >(Date d1, Date d2);

        public static extern bool operator >(Date d1, int d2);

        public static extern bool operator >(Date d1, double d2);

        public static extern bool operator >(int d1, Date d2);

        public static extern bool operator >(double d1, Date d2);

        public static extern bool operator <=(Date d1, Date d2);

        public static extern bool operator <=(Date d1, int d2);

        public static extern bool operator <=(Date d1, double d2);

        public static extern bool operator <=(int d1, Date d2);

        public static extern bool operator <=(double d1, Date d2);

        public static extern bool operator >=(Date d1, Date d2);

        public static extern bool operator >=(Date d1, int d2);

        public static extern bool operator >=(Date d1, double d2);

        public static extern bool operator >=(int d1, Date d2);

        public static extern bool operator >=(double d1, Date d2);

        [Template("Bridge.equals({0}, {1})")]
        public static extern bool operator ==(Date d1, object d2);

        [Template("Bridge.equals({0}, {1})")]
        public static extern bool operator ==(Date d1, Date d2);

        [Template("!Bridge.equals({0}, {1})")]
        public static extern bool operator !=(Date d1, object d2);

        [Template("!Bridge.equals({0}, {1})")]
        public static extern bool operator !=(Date d1, Date d2);

        /// <summary>
        /// Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.
        /// </summary>
        public extern Date();

        /// <summary>
        /// Double value representing the number of milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch).
        /// </summary>
        /// <param name="value">The numberof milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch)</param>
        public extern Date(double value);

        /// <summary>
        /// String value representing a date. The string should be in a format recognized by the Date.parse() method (IETF-compliant RFC 2822 timestamps and also a version of ISO8601).
        /// </summary>
        /// <param name="dateString"></param>
        public extern Date(string dateString);

        /// <summary>
        /// Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.
        /// </summary>
        /// <param name="year">Integer value representing the year. Values from 0 to 99 map to the years 1900 to 1999.</param>
        /// <param name="month">Integer value representing the month, beginning with 0 for January to 11 for December.</param>
        /// <param name="date">Integer value representing the day of the month.</param>
        /// <param name="hours">Integer value representing the hour of the day.</param>
        /// <param name="minutes">Integer value representing the minute segment of a time.</param>
        /// <param name="seconds">Integer value representing the second segment of a time.</param>
        /// <param name="milliseconds">Integer value representing the millisecond segment of a time.</param>
        public extern Date(int year, int month, int date, int hours, int minutes, int seconds, int milliseconds);

        /// <summary>
        /// Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.
        /// </summary>
        /// <param name="year">Integer value representing the year. Values from 0 to 99 map to the years 1900 to 1999.</param>
        /// <param name="month">Integer value representing the month, beginning with 0 for January to 11 for December.</param>
        /// <param name="date">Integer value representing the day of the month.</param>
        /// <param name="hours">Integer value representing the hour of the day.</param>
        /// <param name="minutes">Integer value representing the minute segment of a time.</param>
        /// <param name="seconds">Integer value representing the second segment of a time.</param>
        public extern Date(int year, int month, int date, int hours, int minutes, int seconds);

        /// <summary>
        /// Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.
        /// </summary>
        /// <param name="year">Integer value representing the year. Values from 0 to 99 map to the years 1900 to 1999.</param>
        /// <param name="month">Integer value representing the month, beginning with 0 for January to 11 for December.</param>
        /// <param name="date">Integer value representing the day of the month.</param>
        /// <param name="hours">Integer value representing the hour of the day.</param>
        /// <param name="minutes">Integer value representing the minute segment of a time.</param>
        public extern Date(int year, int month, int date, int hours, int minutes);

        /// <summary>
        /// Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.
        /// </summary>
        /// <param name="year">Integer value representing the year. Values from 0 to 99 map to the years 1900 to 1999.</param>
        /// <param name="month">Integer value representing the month, beginning with 0 for January to 11 for December.</param>
        /// <param name="date">Integer value representing the day of the month.</param>
        /// <param name="hours">Integer value representing the hour of the day.</param>
        public extern Date(int year, int month, int date, int hours);

        /// <summary>
        /// Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.
        /// </summary>
        /// <param name="year">Integer value representing the year. Values from 0 to 99 map to the years 1900 to 1999.</param>
        /// <param name="month">Integer value representing the month, beginning with 0 for January to 11 for December.</param>
        /// <param name="date">Integer value representing the day of the month.</param>
        public extern Date(int year, int month, int date);

        /// <summary>
        /// Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.
        /// </summary>
        /// <param name="year">Integer value representing the year. Values from 0 to 99 map to the years 1900 to 1999.</param>
        /// <param name="month">Integer value representing the month, beginning with 0 for January to 11 for December.</param>
        public extern Date(int year, int month);

        /// <summary>
        /// The toDateString() method returns the date portion of a Date object in human readable form in American English.
        /// </summary>
        /// <returns>A string representing the date portion of the given Date object in human readable form in American English.</returns>
        public extern string ToDateString();

        /// <summary>
        /// The toTimeString() method returns the time portion of a Date object in human readable form in American English.
        /// </summary>
        /// <returns>A string representing the time portion of the given date in human readable form in American English.</returns>
        public extern string ToTimeString();

        /// <summary>
        /// The toLocaleDateString() method returns a string with a language sensitive representation of the date portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and allow to customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.
        /// </summary>
        /// <returns>A string representing the date portion of the given Date instance according to language-specific conventions.</returns>
        public extern string ToLocaleDateString();

        /// <summary>
        /// The toLocaleDateString() method returns a string with a language sensitive representation of the date portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and allow to customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.
        /// </summary>
        /// <param name="locales">A string with a BCP 47 language tag, or an array of such strings.</param>
        /// <returns>A string representing the date portion of the given Date instance according to language-specific conventions.</returns>
        public extern string ToLocaleDateString(Union<string, string[]> locales);

        /// <summary>
        /// The toLocaleDateString() method returns a string with a language sensitive representation of the date portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and allow to customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.
        /// </summary>
        /// <param name="locales">A string with a BCP 47 language tag, or an array of such strings.</param>
        /// <param name="options">An object with some or all of the following properties:</param>
        /// <returns>A string representing the date portion of the given Date instance according to language-specific conventions.</returns>
        public extern string ToLocaleDateString(Union<string, string[]> locales, ToLocaleStringOptions options);

        /// <summary>
        /// The toLocaleTimeString() method returns a string with a language sensitive representation of the time portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.
        /// </summary>
        /// <returns>A string representing the time portion of the given Date instance according to language-specific conventions.</returns>
        public extern string ToLocaleTimeString();

        /// <summary>
        /// The toLocaleTimeString() method returns a string with a language sensitive representation of the time portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.
        /// </summary>
        /// <param name="locales">A string with a BCP 47 language tag, or an array of such strings.</param>
        /// <returns>A string representing the time portion of the given Date instance according to language-specific conventions.</returns>
        public extern string ToLocaleTimeString(Union<string, string[]> locales);

        /// <summary>
        /// The toLocaleTimeString() method returns a string with a language sensitive representation of the time portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.
        /// </summary>
        /// <param name="locales">A string with a BCP 47 language tag, or an array of such strings.</param>
        /// <param name="options">An object with some or all of the following properties:</param>
        /// <returns>A string representing the time portion of the given Date instance according to language-specific conventions.</returns>
        public extern string ToLocaleTimeString(Union<string, string[]> locales, ToLocaleStringOptions options);

        /// <summary>
        /// An object with some or all of the following properties:
        /// </summary>
        /// <remarks>The default value for each date-time component property is undefined, but if the weekday, year, month, day properties are all undefined, then year, month, and day are assumed to be "numeric".</remarks>
        [ObjectLiteral]
        public class ToLocaleStringOptions
        {
            /// <summary>
            /// The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". For information about this option, see the Intl page.
            /// </summary>
            public string LocaleMatcher { get; set; }

            /// <summary>
            /// The time zone to use. The only value implementations must recognize is "UTC"; the default is the runtime's default time zone. Implementations may also recognize the time zone names of the IANA time zone database, such as "Asia/Shanghai", "Asia/Kolkata", "America/New_York".
            /// </summary>
            public string TimeZone { get; set; }

            /// <summary>
            /// Whether to use 12-hour time (as opposed to 24-hour time). Possible values are true and false; the default is locale dependent.
            /// </summary>
            public bool Hour12 { get; set; }

            /// <summary>
            /// The format matching algorithm to use. Possible values are "basic" and "best fit"; the default is "best fit". See the following paragraphs for information about the use of this property.
            /// </summary>
            public string FormatMatcher { get; set; }

            /// <summary>
            /// The representation of the weekday. Possible values are "narrow", "short", "long".
            /// </summary>
            public string Weekday { get; set; }

            /// <summary>
            /// The representation of the era. Possible values are "narrow", "short", "long".
            /// </summary>
            public string Era { get; set; }

            /// <summary>
            /// The representation of the year. Possible values are "numeric", "2-digit".
            /// </summary>
            public string Year { get; set; }

            /// <summary>
            /// The representation of the month. Possible values are "numeric", "2-digit", "narrow", "short", "long".
            /// </summary>
            public string Month { get; set; }

            /// <summary>
            /// The representation of the day. Possible values are "numeric", "2-digit".
            /// </summary>
            public string Day { get; set; }

            /// <summary>
            /// The representation of the hour. Possible values are "numeric", "2-digit".
            /// </summary>
            public string Hour { get; set; }

            /// <summary>
            /// The representation of the minute. Possible values are "numeric", "2-digit".
            /// </summary>
            public string Minute { get; set; }

            /// <summary>
            /// The representation of the second. Possible values are "numeric", "2-digit".
            /// </summary>
            public string Second { get; set; }

            /// <summary>
            /// The representation of the time zone name. Possible values are "short", "long".
            /// </summary>
            public string TimeZoneName { get; set; }
        }

        /// <summary>
        /// The valueOf() method returns the primitive value of a Date object.
        /// </summary>
        /// <remarks>The valueOf() method returns the primitive value of a Date object as a number data type, the number of milliseconds since midnight 01 January, 1970 UTC.</remarks>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the given date.</returns>
        public new extern double ValueOf();

        /// <summary>
        /// The toISOString() method returns a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively). The timezone is always zero UTC offset, as denoted by the suffix "Z".
        /// </summary>
        /// <returns>A string representing the given date in the ISO 8601 format according to universal time.</returns>
        public extern string ToISOString();

        /// <summary>
        /// The toUTCString() method converts a date to a string, using the UTC time zone.
        /// </summary>
        /// <returns>A string representing the given date using the UTC time zone.</returns>
        public extern string ToUTCString();

        /// <summary>
        /// The getTime() method returns the numeric value corresponding to the time for the specified date according to universal time. You can use this method to help assign a date and time to another Date object. This method is functionally equivalent to the valueOf() method.
        /// </summary>
        /// <returns>A number representing the milliseconds elapsed between 1 January 1970 00:00:00 UTC and the given date.</returns>
        public extern double GetTime();

        /// <summary>
        /// The setTime() method sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
        /// </summary>
        /// <param name="time">The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date (effectively, the value of the argument).</param>
        public extern void SetTime(double time);

        /// <summary>
        /// The getTimezoneOffset() method returns the time zone difference, in minutes, from current locale (host system settings) to UTC.
        /// </summary>
        /// <returns>A number representing the time-zone offset from UTC, in minutes, for the date based on current host system settings.</returns>
        public extern int GetTimezoneOffset();

        /// <summary>
        /// The getFullYear() method returns the year of the specified date according to local time. Use this method instead of the getYear() method.
        /// </summary>
        /// <returns>A number corresponding to the year of the given date, according to local time.</returns>
        public extern int GetFullYear();

        /// <summary>
        /// The getUTCFullYear() method returns the year in the specified date according to universal time.
        /// </summary>
        /// <returns>A number representing the year in the given date according to universal time.</returns>
        public extern int GetUTCFullYear();

        /// <summary>
        /// The getMonth() method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).
        /// </summary>
        /// <returns>An integer number, between 0 and 11, representing the month in the given date according to local time. 0 corresponds to January, 1 to February, and so on.</returns>
        public extern int GetMonth();

        /// <summary>
        /// The getUTCMonth() returns the month of the specified date according to universal time, as a zero-based value (where zero indicates the first month of the year).
        /// </summary>
        /// <returns>An integer number, between 0 and 11, corresponding to the month of the given date according to universal time. 0 for January, 1 for February, 2 for March, and so on.</returns>
        public extern int GetUTCMonth();

        /// <summary>
        /// The getDate() method returns the day of the month for the specified date according to local time.
        /// </summary>
        /// <returns>An integer number, between 1 and 31, representing the day of the month for the given date according to local time.</returns>
        public extern int GetDate();

        /// <summary>
        /// The getUTCDate() method returns the day (date) of the month in the specified date according to universal time.
        /// </summary>
        /// <returns>An integer number, between 1 and 31, representing the day of the month in the given date according to universal time.</returns>
        public extern int GetUTCDate();

        /// <summary>
        /// The getDay() method returns the day of the week for the specified date according to local time, where 0 represents Sunday.
        /// </summary>
        /// <returns>An integer number corresponding to the day of the week for the given date, according to local time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.</returns>
        public extern int GetDay();

        /// <summary>
        /// The getUTCDay() method returns the day of the week in the specified date according to universal time, where 0 represents Sunday.
        /// </summary>
        /// <returns>An integer number corresponding to the day of the week for the given date, according to universal time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.</returns>
        public extern int GetUTCDay();

        /// <summary>
        /// The getHours() method returns the hour for the specified date, according to local time.
        /// </summary>
        /// <returns>An integer number, between 0 and 23, representing the hour for the given date according to local time.</returns>
        public extern int GetHours();

        /// <summary>
        /// The getUTCHours() method returns the hours in the specified date according to universal time.
        /// </summary>
        /// <returns>An integer number, between 0 and 23, representing the hours in the given date according to universal time.</returns>
        public extern int GetUTCHours();

        /// <summary>
        /// The getMinutes() method returns the minutes in the specified date according to local time.
        /// </summary>
        /// <returns>An integer number, between 0 and 59, representing the minutes in the given date according to local time.</returns>
        public extern int GetMinutes();

        /// <summary>
        /// The getUTCMinutes() method returns the minutes in the specified date according to universal time.
        /// </summary>
        /// <returns>An integer number, between 0 and 59, representing the minutes in the given date according to universal time.</returns>
        public extern int GetUTCMinutes();

        /// <summary>
        /// The getSeconds() method returns the seconds in the specified date according to local time.
        /// </summary>
        /// <returns>An integer number, between 0 and 59, representing the seconds in the given date according to local time.</returns>
        public extern int GetSeconds();

        /// <summary>
        /// The getUTCSeconds() method returns the seconds in the specified date according to universal time.
        /// </summary>
        /// <returns>An integer number, between 0 and 59, representing the seconds in the given date according to universal time.</returns>
        public extern int GetUTCSeconds();

        /// <summary>
        /// The getMilliseconds() method returns the milliseconds in the specified date according to local time.
        /// </summary>
        /// <returns>A number, between 0 and 999, representing the milliseconds for the given date according to local time.</returns>
        public extern int GetMilliseconds();

        /// <summary>
        /// The getUTCMilliseconds() method returns the milliseconds in the specified date according to universal time.
        /// </summary>
        /// <returns>An integer number, between 0 and 999, representing the milliseconds in the given date according to universal time.</returns>
        public extern int GetUTCMilliseconds();

        /// <summary>
        /// The setMilliseconds() method sets the milliseconds for a specified date according to local time.
        /// </summary>
        /// <param name="milliseconds">A number between 0 and 999, representing the milliseconds.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetMilliseconds(int milliseconds);

        /// <summary>
        /// The setUTCMilliseconds() method sets the milliseconds for a specified date according to universal time.
        /// </summary>
        /// <param name="milliseconds">A number between 0 and 999, representing the milliseconds.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetUTCMilliseconds(int milliseconds);

        /// <summary>
        /// The setSeconds() method sets the seconds for a specified date according to local time.
        /// </summary>
        /// <param name="secondsValue">An integer between 0 and 59, representing the seconds.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetSeconds(int secondsValue);

        /// <summary>
        /// The setSeconds() method sets the seconds for a specified date according to local time.
        /// </summary>
        /// <param name="secondsValue">An integer between 0 and 59, representing the seconds.</param>
        /// <param name="msValue">A number between 0 and 999, representing the milliseconds.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetSeconds(int secondsValue, int msValue);

        /// <summary>
        /// The setUTCSeconds() method sets the seconds for a specified date according to universal time.
        /// </summary>
        /// <param name="secondsValue">An integer between 0 and 59, representing the seconds.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetUTCSeconds(int secondsValue);

        /// <summary>
        /// The setUTCSeconds() method sets the seconds for a specified date according to universal time.
        /// </summary>
        /// <param name="secondsValue">An integer between 0 and 59, representing the seconds.</param>
        /// <param name="msValue">A number between 0 and 999, representing the milliseconds.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetUTCSeconds(int secondsValue, int msValue);

        /// <summary>
        /// The setMinutes() method sets the minutes for a specified date according to local time.
        /// </summary>
        /// <param name="minutesValue">An integer between 0 and 59, representing the minutes.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetMinutes(int minutesValue);

        /// <summary>
        /// The setMinutes() method sets the minutes for a specified date according to local time.
        /// </summary>
        /// <param name="minutesValue">An integer between 0 and 59, representing the minutes.</param>
        /// <param name="secondsValue">An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter, you must also specify the minutesValue.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetMinutes(int minutesValue, int secondsValue);

        /// <summary>
        /// The setMinutes() method sets the minutes for a specified date according to local time.
        /// </summary>
        /// <param name="minutesValue">An integer between 0 and 59, representing the minutes.</param>
        /// <param name="secondsValue">An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter, you must also specify the minutesValue.</param>
        /// <param name="msValue">A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter, you must also specify the minutesValue and secondsValue.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetMinutes(int minutesValue, int secondsValue, int msValue);

        /// <summary>
        /// The setUTCMinutes() method sets the minutes for a specified date according to universal time.
        /// </summary>
        /// <param name="minutesValue">An integer between 0 and 59, representing the minutes.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetUTCMinutes(int minutesValue);

        /// <summary>
        /// The setUTCMinutes() method sets the minutes for a specified date according to universal time.
        /// </summary>
        /// <param name="minutesValue">An integer between 0 and 59, representing the minutes.</param>
        /// <param name="secondsValue">An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter, you must also specify the minutesValue.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetUTCMinutes(int minutesValue, int secondsValue);

        /// <summary>
        /// The setUTCMinutes() method sets the minutes for a specified date according to universal time.
        /// </summary>
        /// <param name="minutesValue">An integer between 0 and 59, representing the minutes.</param>
        /// <param name="secondsValue">An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter, you must also specify the minutesValue.</param>
        /// <param name="msValue">A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter, you must also specify the minutesValue and secondsValue.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetUTCMinutes(int minutesValue, int secondsValue, int msValue);

        /// <summary>
        /// The setHours() method sets the hours for a specified date according to local time, and returns the number of milliseconds since 1 January 1970 00:00:00 UTC until the time represented by the updated Date instance.
        /// </summary>
        /// <param name="hoursValue">An integer between 0 and 23, representing the hour.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetHours(int hoursValue);

        /// <summary>
        /// The setHours() method sets the hours for a specified date according to local time, and returns the number of milliseconds since 1 January 1970 00:00:00 UTC until the time represented by the updated Date instance.
        /// </summary>
        /// <param name="hoursValue">An integer between 0 and 23, representing the hour.</param>
        /// <param name="minutesValue">An integer between 0 and 59, representing the minutes.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetHours(int hoursValue, int minutesValue);

        /// <summary>
        /// The setHours() method sets the hours for a specified date according to local time, and returns the number of milliseconds since 1 January 1970 00:00:00 UTC until the time represented by the updated Date instance.
        /// </summary>
        /// <param name="hoursValue">An integer between 0 and 23, representing the hour.</param>
        /// <param name="minutesValue">An integer between 0 and 59, representing the minutes.</param>
        /// <param name="secondsValue">An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter, you must also specify the minutesValue.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetHours(int hoursValue, int minutesValue, int secondsValue);

        /// <summary>
        /// The setHours() method sets the hours for a specified date according to local time, and returns the number of milliseconds since 1 January 1970 00:00:00 UTC until the time represented by the updated Date instance.
        /// </summary>
        /// <param name="hoursValue">An integer between 0 and 23, representing the hour.</param>
        /// <param name="minutesValue">An integer between 0 and 59, representing the minutes.</param>
        /// <param name="secondsValue">An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter, you must also specify the minutesValue.</param>
        /// <param name="msValue">A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter, you must also specify the minutesValue and secondsValue.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetHours(int hoursValue, int minutesValue, int secondsValue, int msValue);

        /// <summary>
        /// The setUTCHours() method sets the hour for a specified date according to universal time, and returns the number of milliseconds since 1 January 1970 00:00:00 UTC until the time represented by the updated Date instance.
        /// </summary>
        /// <param name="hoursValue">An integer between 0 and 23, representing the hour.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetUTCHours(int hoursValue);

        /// <summary>
        /// The setUTCHours() method sets the hour for a specified date according to universal time, and returns the number of milliseconds since 1 January 1970 00:00:00 UTC until the time represented by the updated Date instance.
        /// </summary>
        /// <param name="hoursValue">An integer between 0 and 23, representing the hour.</param>
        /// <param name="minutesValue">An integer between 0 and 59, representing the minutes.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetUTCHours(int hoursValue, int minutesValue);

        /// <summary>
        /// The setUTCHours() method sets the hour for a specified date according to universal time, and returns the number of milliseconds since 1 January 1970 00:00:00 UTC until the time represented by the updated Date instance.
        /// </summary>
        /// <param name="hoursValue">An integer between 0 and 23, representing the hour.</param>
        /// <param name="minutesValue">An integer between 0 and 59, representing the minutes.</param>
        /// <param name="secondsValue">An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter, you must also specify the minutesValue.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetUTCHours(int hoursValue, int minutesValue, int secondsValue);

        /// <summary>
        /// The setUTCHours() method sets the hour for a specified date according to universal time, and returns the number of milliseconds since 1 January 1970 00:00:00 UTC until the time represented by the updated Date instance.
        /// </summary>
        /// <param name="hoursValue">An integer between 0 and 23, representing the hour.</param>
        /// <param name="minutesValue">An integer between 0 and 59, representing the minutes.</param>
        /// <param name="secondsValue">An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter, you must also specify the minutesValue.</param>
        /// <param name="msValue">A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter, you must also specify the minutesValue and secondsValue.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetUTCHours(int hoursValue, int minutesValue, int secondsValue, int msValue);

        /// <summary>
        /// The setDate() method sets the day of the Date object relative to the beginning of the currently set month.
        /// </summary>
        /// <param name="dayValue">An integer representing the day of the month.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the given date (the Date object is also changed in place).</returns>
        public extern double SetDate(int dayValue);

        /// <summary>
        /// The setUTCDate() method sets the day of the month for a specified date according to universal time.
        /// </summary>
        /// <param name="dayValue">An integer representing the day of the month.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetUTCDate(int dayValue);

        /// <summary>
        /// The setMonth() method sets the month for a specified date according to the currently set year.
        /// </summary>
        /// <param name="monthValue">An integer between 0 and 11, representing the months January through December.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetMonth(int monthValue);

        /// <summary>
        /// The setMonth() method sets the month for a specified date according to the currently set year.
        /// </summary>
        /// <param name="monthValue">An integer between 0 and 11, representing the months January through December.</param>
        /// <param name="dayValue">An integer from 1 to 31, representing the day of the month.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetMonth(int monthValue, int dayValue);

        /// <summary>
        /// The setUTCMonth() method sets the month for a specified date according to universal time.
        /// </summary>
        /// <param name="monthValue">An integer between 0 and 11, representing the months January through December.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetUTCMonth(int monthValue);

        /// <summary>
        /// The setUTCMonth() method sets the month for a specified date according to universal time.
        /// </summary>
        /// <param name="monthValue">An integer between 0 and 11, representing the months January through December.</param>
        /// <param name="dayValue">An integer from 1 to 31, representing the day of the month.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetUTCMonth(int monthValue, int dayValue);

        /// <summary>
        /// The setFullYear() method sets the full year for a specified date according to local time. Returns new timestamp.
        /// </summary>
        /// <param name="yearValue">An integer specifying the numeric value of the year, for example, 1995.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetFullYear(int yearValue);

        /// <summary>
        /// The setFullYear() method sets the full year for a specified date according to local time. Returns new timestamp.
        /// </summary>
        /// <param name="yearValue">An integer specifying the numeric value of the year, for example, 1995.</param>
        /// <param name="monthValue">An integer between 0 and 11 representing the months January through December.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetFullYear(int yearValue, int monthValue);

        /// <summary>
        /// The setFullYear() method sets the full year for a specified date according to local time. Returns new timestamp.
        /// </summary>
        /// <param name="yearValue">An integer specifying the numeric value of the year, for example, 1995.</param>
        /// <param name="monthValue">An integer between 0 and 11 representing the months January through December.</param>
        /// <param name="dayValue">An integer between 1 and 31 representing the day of the month. If you specify the dayValue parameter, you must also specify the monthValue.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetFullYear(int yearValue, int monthValue, int dayValue);

        /// <summary>
        /// The setUTCFullYear() method sets the full year for a specified date according to universal time.
        /// </summary>
        /// <param name="yearValue">An integer specifying the numeric value of the year, for example, 1995.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetUTCFullYear(int yearValue);

        /// <summary>
        /// The setUTCFullYear() method sets the full year for a specified date according to universal time.
        /// </summary>
        /// <param name="yearValue">An integer specifying the numeric value of the year, for example, 1995.</param>
        /// <param name="monthValue">An integer between 0 and 11 representing the months January through December.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetUTCFullYear(int yearValue, int monthValue);

        /// <summary>
        /// The setUTCFullYear() method sets the full year for a specified date according to universal time.
        /// </summary>
        /// <param name="yearValue">An integer specifying the numeric value of the year, for example, 1995.</param>
        /// <param name="monthValue">An integer between 0 and 11 representing the months January through December.</param>
        /// <param name="dayValue">An integer between 1 and 31 representing the day of the month. If you specify the dayValue parameter, you must also specify the monthValue.</param>
        /// <returns>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</returns>
        public extern double SetUTCFullYear(int yearValue, int monthValue, int dayValue);
    }
}