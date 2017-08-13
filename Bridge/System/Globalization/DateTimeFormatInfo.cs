using Bridge;

namespace System.Globalization
{
    [External]
    [Reflectable]
    public sealed class DateTimeFormatInfo : IFormatProvider, ICloneable, IBridgeClass
    {
        public extern DateTimeFormatInfo();

        [Convention(Notation.LowerCamelCase)] //[Field]
        public static extern DateTimeFormatInfo InvariantInfo
        {
            get;
        }

        [Name("amDesignator")]
        public extern string AMDesignator
        {
            get;
            set;
        }

        [Name("pmDesignator")]
        public extern string PMDesignator
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string DateSeparator
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string TimeSeparator
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string UniversalSortableDateTimePattern
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string SortableDateTimePattern
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string FullDateTimePattern
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string LongDatePattern
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string ShortDatePattern
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string LongTimePattern
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string ShortTimePattern
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern int FirstDayOfWeek
        public extern DayOfWeek FirstDayOfWeek
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string[] DayNames
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string[] AbbreviatedDayNames
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string[] ShortestDayNames
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string[] MonthNames
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string[] MonthGenitiveNames
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string[] AbbreviatedMonthNames
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string[] AbbreviatedMonthGenitiveNames
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string MonthDayPattern
        {
            get;
            set;
        }

        [Name("rfc1123Pattern")]
        public extern string RFC1123Pattern
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string YearMonthPattern
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string RoundtripFormat
        {
            get;
            set;
        }

        public extern object GetFormat(Type formatType);

        public extern object Clone();

        [Convention(Notation.LowerCamelCase)] //[Field]
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