using Bridge;

namespace System.Globalization
{
    [External]
    [Reflectable]
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

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern DateTimeFormatInfo DateTimeFormat
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public static extern CultureInfo InvariantCulture
        {
            get;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string Name
        {
            get;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string EnglishName
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string NativeName
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public NumberFormatInfo NumberFormat
        {
            get;
            set;
        }

        public extern object GetFormat(Type formatType);

        public extern object Clone();
    }
}