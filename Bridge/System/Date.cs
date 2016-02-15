using Bridge;

namespace System
{
    [External]
    [Name("Date")]
    public class Date
    {
        public static double operator -(Date d1, Date d2)
        {
            return 0;
        }

        public static double operator -(Date d1, int d2)
        {
            return 0;
        }

        public static double operator -(Date d1, double d2)
        {
            return 0;
        }

        public static bool operator <(Date d1, Date d2)
        {
            return false;
        }

        public static bool operator <(Date d1, int d2)
        {
            return false;
        }

        public static bool operator <(Date d1, double d2)
        {
            return false;
        }

        public static bool operator <(int d1, Date d2)
        {
            return false;
        }

        public static bool operator <(double d1, Date d2)
        {
            return false;
        }

        public static bool operator >(Date d1, Date d2)
        {
            return false;
        }

        public static bool operator >(Date d1, int d2)
        {
            return false;
        }

        public static bool operator >(Date d1, double d2)
        {
            return false;
        }

        public static bool operator >(int d1, Date d2)
        {
            return false;
        }

        public static bool operator >(double d1, Date d2)
        {
            return false;
        }

        public static bool operator <=(Date d1, Date d2)
        {
            return false;
        }

        public static bool operator <=(Date d1, int d2)
        {
            return false;
        }

        public static bool operator <=(Date d1, double d2)
        {
            return false;
        }

        public static bool operator <=(int d1, Date d2)
        {
            return false;
        }

        public static bool operator <=(double d1, Date d2)
        {
            return false;
        }

        public static bool operator >=(Date d1, Date d2)
        {
            return false;
        }

        public static bool operator >=(Date d1, int d2)
        {
            return false;
        }

        public static bool operator >=(Date d1, double d2)
        {
            return false;
        }

        public static bool operator >=(int d1, Date d2)
        {
            return false;
        }

        public static bool operator >=(double d1, Date d2)
        {
            return false;
        }

        [Template("Bridge.equals({0}, {1})")]
        public static bool operator ==(Date d1, object d2)
        {
            return false;
        }

        [Template("Bridge.equals({0}, {1})")]
        public static bool operator ==(Date d1, Date d2)
        {
            return false;
        }

        [Template("!Bridge.equals({0}, {1})")]
        public static bool operator !=(Date d1, object d2)
        {
            return false;
        }

        [Template("!Bridge.equals({0}, {1})")]
        public static bool operator !=(Date d1, Date d2)
        {
            return false;
        }

        public Date()
        {
        }

        /// <summary>
        /// Double value representing the number of milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch).
        /// </summary>
        /// <param name="value">The numberof milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch)</param>
        public Date(double value)
        {
        }

        /// <summary>
        /// String value representing a date. The string should be in a format recognized by the Date.parse() method (IETF-compliant RFC 2822 timestamps and also a version of ISO8601).
        /// </summary>
        /// <param name="dateString"></param>
        public Date(string dateString)
        {
        }

        public Date(int year, int month, int date, int hours, int minutes, int seconds, int ms)
        {
        }

        public Date(int year, int month, int date, int hours, int minutes, int seconds)
        {
        }

        public Date(int year, int month, int date, int hours, int minutes)
        {
        }

        public Date(int year, int month, int date, int hours)
        {
        }

        public Date(int year, int month, int date)
        {
        }

        public Date(int year, int month)
        {
        }

        public static extern double Parse(string value);

        public virtual extern string ToDateString();

        public virtual extern string ToTimeString();

        public virtual extern string ToLocaleDateString(string value);

        public virtual extern string ToLocaleTimeString();

        public virtual extern string ToUTCString();

        public virtual extern double GetTime();

        public virtual extern void SetTime(double time);

        public virtual extern int GetTimezoneOffset();

        public virtual extern int GetFullYear();

        public virtual extern int GetUTCFullYear();

        public virtual extern int GetMonth();

        public virtual extern int GetUTCMonth();

        public virtual extern int GetDate();

        public virtual extern int GetUTCDate();

        public virtual extern int GetDay();

        public virtual extern int GetUTCDay();

        public virtual extern int GetHours();

        public virtual extern int GetUTCHours();

        public virtual extern int GetMinutes();

        public virtual extern int GetUTCMinutes();

        public virtual extern int GetSeconds();

        public virtual extern int GetUTCSeconds();

        public virtual extern int GetMilliseconds();

        public virtual extern int GetUTCMilliseconds();

        public virtual extern void SetMilliseconds(int ms);

        public virtual extern void SetUTCMilliseconds(int ms);

        public virtual extern void SetSeconds(int sec);

        public virtual extern void SetSeconds(int sec, int ms);

        public virtual extern void SetUTCSeconds(int sec);

        public virtual extern void SetUTCSeconds(int sec, int ms);

        public virtual extern void SetMinutes(int min);

        public virtual extern void SetMinutes(int min, int sec);

        public virtual extern void SetMinutes(int min, int sec, int ms);

        public virtual extern void SetUTCMinutes(int min);

        public virtual extern void SetUTCMinutes(int min, int sec);

        public virtual extern void SetUTCMinutes(int min, int sec, int ms);

        public virtual extern void SetHours(int hour);

        public virtual extern void SetHours(int hour, int min);

        public virtual extern void SetHours(int hour, int min, int sec);

        public virtual extern void SetHours(int hour, int min, int sec, int ms);

        public virtual extern void SetUTCHours(int hour);

        public virtual extern void SetUTCHours(int hour, int min);

        public virtual extern void SetUTCHours(int hour, int min, int sec);

        public virtual extern void SetUTCHours(int hour, int min, int sec, int ms);

        public virtual extern void SetDate(int day);

        public virtual extern void SetUTCDate(int day);

        public virtual extern void SetMonth(int month);

        public virtual extern void SetMonth(int month, int date);

        public virtual extern void SetUTCMonth(int month);

        public virtual extern void SetUTCMonth(int month, int date);

        public virtual extern void SetFullYear(int year);

        public virtual extern void SetFullYear(int year, int month);

        public virtual extern void SetFullYear(int year, int month, int date);

        public virtual extern void SetUTCFullYear(int year);

        public virtual extern void SetUTCFullYear(int year, int month);

        public virtual extern void SetUTCFullYear(int year, int month, int date);
    }
}