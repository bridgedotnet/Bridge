using System;

namespace Bridge.Html5
{
    [External]
    [Name("Date")]
    public class Date
    {
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

        public extern Date(int year, int month, int date, int hours, int minutes, int seconds, int ms);

        public extern Date(int year, int month, int date, int hours, int minutes, int seconds);

        public extern Date(int year, int month, int date, int hours, int minutes);

        public extern Date(int year, int month, int date, int hours);

        public extern Date(int year, int month, int date);

        public extern Date(int year, int month);

        public static extern double Parse(string value);

        public extern string ToDateString();

        public extern string ToTimeString();

        public extern string ToLocaleDateString(string value);

        public extern string ToLocaleTimeString();

        public extern string ToISOString();

        public extern string ToUTCString();

        public extern double GetTime();

        public extern void SetTime(double time);

        public extern int GetTimezoneOffset();

        public extern int GetFullYear();

        public extern int GetUTCFullYear();

        public extern int GetMonth();

        public extern int GetUTCMonth();

        public extern int GetDate();

        public extern int GetUTCDate();

        public extern int GetDay();

        public extern int GetUTCDay();

        public extern int GetHours();

        public extern int GetUTCHours();

        public extern int GetMinutes();

        public extern int GetUTCMinutes();

        public extern int GetSeconds();

        public extern int GetUTCSeconds();

        public extern int GetMilliseconds();

        public extern int GetUTCMilliseconds();

        public extern void SetMilliseconds(int ms);

        public extern void SetUTCMilliseconds(int ms);

        public extern void SetSeconds(int sec);

        public extern void SetSeconds(int sec, int ms);

        public extern void SetUTCSeconds(int sec);

        public extern void SetUTCSeconds(int sec, int ms);

        public extern void SetMinutes(int min);

        public extern void SetMinutes(int min, int sec);

        public extern void SetMinutes(int min, int sec, int ms);

        public extern void SetUTCMinutes(int min);

        public extern void SetUTCMinutes(int min, int sec);

        public extern void SetUTCMinutes(int min, int sec, int ms);

        public extern void SetHours(int hour);

        public extern void SetHours(int hour, int min);

        public extern void SetHours(int hour, int min, int sec);

        public extern void SetHours(int hour, int min, int sec, int ms);

        public extern void SetUTCHours(int hour);

        public extern void SetUTCHours(int hour, int min);

        public extern void SetUTCHours(int hour, int min, int sec);

        public extern void SetUTCHours(int hour, int min, int sec, int ms);

        public extern void SetDate(int day);

        public extern void SetUTCDate(int day);

        public extern void SetMonth(int month);

        public extern void SetMonth(int month, int date);

        public extern void SetUTCMonth(int month);

        public extern void SetUTCMonth(int month, int date);

        public extern void SetFullYear(int year);

        public extern void SetFullYear(int year, int month);

        public extern void SetFullYear(int year, int month, int date);

        public extern void SetUTCFullYear(int year);

        public extern void SetUTCFullYear(int year, int month);

        public extern void SetUTCFullYear(int year, int month, int date);
    }
}