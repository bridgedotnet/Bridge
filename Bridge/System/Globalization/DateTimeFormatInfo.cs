using Bridge;

namespace System.Globalization
{
    [External]
    public sealed class DateTimeFormatInfo : IFormatProvider, ICloneable, IBridgeClass
    {
        public extern DateTimeFormatInfo();

        [Field]
        public static extern DateTimeFormatInfo InvariantInfo
        {
            get;
        }

        [Field]
        [Name("amDesignator")]
        public extern string AMDesignator
        {
            get;
            set;
        }

        [Field]
        [Name("pmDesignator")]
        public extern string PMDesignator
        {
            get;
            set;
        }

        [Field]
        public extern string DateSeparator
        {
            get;
            set;
        }

        [Field]
        public extern string TimeSeparator
        {
            get;
            set;
        }

        [Field]
        public extern string UniversalSortableDateTimePattern
        {
            get;
            set;
        }

        [Field]
        public extern string SortableDateTimePattern
        {
            get;
            set;
        }

        [Field]
        public extern string FullDateTimePattern
        {
            get;
            set;
        }

        [Field]
        public extern string LongDatePattern
        {
            get;
            set;
        }

        [Field]
        public extern string ShortDatePattern
        {
            get;
            set;
        }

        [Field]
        public extern string LongTimePattern
        {
            get;
            set;
        }

        [Field]
        public extern string ShortTimePattern
        {
            get;
            set;
        }

        [Field]
        public extern int FirstDayOfWeek
        {
            get;
            set;
        }

        [Field]
        public extern string[] DayNames
        {
            get;
            set;
        }

        [Field]
        public extern string[] AbbreviatedDayNames
        {
            get;
            set;
        }

        [Field]
        public extern string[] ShortestDayNames
        {
            get;
            set;
        }

        [Field]
        public extern string[] MonthNames
        {
            get;
            set;
        }

        [Field]
        public extern string[] MonthGenitiveNames
        {
            get;
            set;
        }

        [Field]
        public extern string[] AbbreviatedMonthNames
        {
            get;
            set;
        }

        [Field]
        public extern string[] AbbreviatedMonthGenitiveNames
        {
            get;
            set;
        }

        [Field]
        public extern string MonthDayPattern
        {
            get;
            set;
        }

        [Field]
        [Name("rfc1123Pattern")]
        public extern string RFC1123Pattern
        {
            get;
            set;
        }

        [Field]
        public extern string YearMonthPattern
        {
            get;
            set;
        }

        [Field]
        public extern string RoundtripFormat
        {
            get;
            set;
        }

        public extern object GetFormat(Type formatType);

        public extern object Clone();

        [Field]
        public static extern DateTimeFormatInfo CurrentInfo
        {
            get;
        }

        public extern string GetAbbreviatedDayName(DayOfWeek dayofweek);

        public extern string GetAbbreviatedMonthName(int month);

        public extern string[] GetAllDateTimePatterns();

        public extern string[] GetAllDateTimePatterns(string format);

        public extern string GetDayName(DayOfWeek dayofweek);

        public extern string GetMonthName(int month);

        public extern string GetShortestDayName(DayOfWeek dayOfWeek);
    }
}