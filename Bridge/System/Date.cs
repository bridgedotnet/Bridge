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

        public static double Parse(string value)
        {
            return 0;
        }

        public virtual string ToDateString()
        {
            return null;
        }

        public virtual string ToTimeString()
        {
            return null;
        }

        public virtual string ToLocaleDateString(string value)
        {
            return null;
        }

        public virtual string ToLocaleTimeString()
        {
            return null;
        }

        public virtual string ToUTCString()
        {
            return null;
        }

        public virtual double GetTime()
        {
            return 0;
        }

        public virtual void SetTime(double time)
        {
        }

        public virtual int GetTimezoneOffset()
        {
            return 0;
        }

        public virtual int GetFullYear()
        {
            return 0;
        }

        public virtual int GetUTCFullYear()
        {
            return 0;
        }

        public virtual int GetMonth()
        {
            return 0;
        }

        public virtual int GetUTCMonth()
        {
            return 0;
        }

        public virtual int GetDate()
        {
            return 0;
        }

        public virtual int GetUTCDate()
        {
            return 0;
        }

        public virtual int GetDay()
        {
            return 0;
        }

        public virtual int GetUTCDay()
        {
            return 0;
        }

        public virtual int GetHours()
        {
            return 0;
        }

        public virtual int GetUTCHours()
        {
            return 0;
        }

        public virtual int GetMinutes()
        {
            return 0;
        }

        public virtual int GetUTCMinutes()
        {
            return 0;
        }

        public virtual int GetSeconds()
        {
            return 0;
        }

        public virtual int GetUTCSeconds()
        {
            return 0;
        }

        public virtual int GetMilliseconds()
        {
            return 0;
        }

        public virtual int GetUTCMilliseconds()
        {
            return 0;
        }

        public virtual void SetMilliseconds(int ms)
        {
        }

        public virtual void SetUTCMilliseconds(int ms)
        {
        }

        public virtual void SetSeconds(int sec)
        {
        }

        public virtual void SetSeconds(int sec, int ms)
        {
        }

        public virtual void SetUTCSeconds(int sec)
        {
        }

        public virtual void SetUTCSeconds(int sec, int ms)
        {
        }

        public virtual void SetMinutes(int min)
        {
        }

        public virtual void SetMinutes(int min, int sec)
        {
        }

        public virtual void SetMinutes(int min, int sec, int ms)
        {
        }

        public virtual void SetUTCMinutes(int min)
        {
        }

        public virtual void SetUTCMinutes(int min, int sec)
        {
        }

        public virtual void SetUTCMinutes(int min, int sec, int ms)
        {
        }

        public virtual void SetHours(int hour)
        {
        }

        public virtual void SetHours(int hour, int min)
        {
        }

        public virtual void SetHours(int hour, int min, int sec)
        {
        }

        public virtual void SetHours(int hour, int min, int sec, int ms)
        {
        }

        public virtual void SetUTCHours(int hour)
        {
        }

        public virtual void SetUTCHours(int hour, int min)
        {
        }

        public virtual void SetUTCHours(int hour, int min, int sec)
        {
        }

        public virtual void SetUTCHours(int hour, int min, int sec, int ms)
        {
        }

        public virtual void SetDate(int day)
        {
        }

        public virtual void SetUTCDate(int day)
        {
        }

        public virtual void SetMonth(int month)
        {
        }

        public virtual void SetMonth(int month, int date)
        {
        }

        public virtual void SetUTCMonth(int month)
        {
        }

        public virtual void SetUTCMonth(int month, int date)
        {
        }

        public virtual void SetFullYear(int year)
        {
        }

        public virtual void SetFullYear(int year, int month)
        {
        }

        public virtual void SetFullYear(int year, int month, int date)
        {
        }

        public virtual void SetUTCFullYear(int year)
        {
        }

        public virtual void SetUTCFullYear(int year, int month)
        {
        }

        public virtual void SetUTCFullYear(int year, int month, int date)
        {
        }
    }
}
