using Bridge;

namespace System.Globalization
{
    [External]
    public sealed class CultureInfo : IFormatProvider, ICloneable, IBridgeClass
    {
        public extern CultureInfo(string name);

        [Name("getCultureInfo")]
        public static extern CultureInfo GetCultureInfo(string name);

        [Name("getCultureInfo")]
        public static extern CultureInfo CreateSpecificCulture(string name);

        public static extern CultureInfo[] GetCultures();

        public static extern CultureInfo CurrentCulture
        {
            [Template("{this}.getCurrentCulture()")]
            get;
            [Template("{this}.setCurrentCulture({0})")]
            set;
        }

        [Name(true)] //[Field]
        public extern DateTimeFormatInfo DateTimeFormat
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public static extern CultureInfo InvariantCulture
        {
            get;
        }

        [Name(true)] //[Field]
        public extern string Name
        {
            get;
        }

        [Name(true)] //[Field]
        public extern string EnglishName
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern string NativeName
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public NumberFormatInfo NumberFormat
        {
            get;
            set;
        }

        public extern object GetFormat(Type formatType);

        public extern object Clone();
    }
}