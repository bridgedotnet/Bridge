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
            get;
            set;
        }

        [Field]
        public extern DateTimeFormatInfo DateTimeFormat
        {
            get;
            set;
        }

        [Field]
        public static extern CultureInfo InvariantCulture
        {
            get;
        }

        [Field]
        public extern string Name
        {
            get;
        }

        [Field]
        public extern string EnglishName
        {
            get;
            set;
        }

        [Field]
        public extern string NativeName
        {
            get;
            set;
        }

        [Field]
        public NumberFormatInfo NumberFormat
        {
            get;
            set;
        }

        public extern object GetFormat(Type formatType);

        public extern object Clone();
    }
}