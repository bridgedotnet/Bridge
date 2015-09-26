using Bridge;
namespace System.Globalization
{
    [Namespace("Bridge")]
    public sealed class CultureInfo : IFormatProvider, ICloneable, IBridgeClass
    {
        public CultureInfo(string name)
        {
        }

        public static CultureInfo GetCultureInfo(string name)
        {
            return null;
        }

        public static CultureInfo[] GetCultures()
        {
            return null;
        }

        public static CultureInfo CurrentCulture
        {
            get;
            set;
        }

        [FieldProperty]
        public DateTimeFormatInfo DateTimeFormat
        {
            get;
            set;
        }

        [FieldProperty]
        public static CultureInfo InvariantCulture
        {
            get
            {
                return null;
            }
        }

        [FieldProperty]
        public string Name
        {
            get
            {
                return null;
            }
        }

        [FieldProperty]
        public string EnglishName
        {
            get;
            set;
        }

        [FieldProperty]
        public string NativeName
        {
            get;
            set;
        }

        [FieldProperty]
        public NumberFormatInfo NumberFormat
        {
            get;
            set;
        }

        public object GetFormat(Type formatType)
        {
            return null;
        }

        public object Clone()
        {
            return null;
        }
    }
}
