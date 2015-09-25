using Bridge;

namespace System.Globalization
{
    [Namespace("Bridge")]
    [Ignore]
    public sealed class NumberFormatInfo : IFormatProvider, ICloneable, IBridgeClass
    {
        public NumberFormatInfo()
        {
        }

        [FieldProperty]
        public static NumberFormatInfo InvariantInfo
        {
            get
            {
                return null;
            }
        }

        [Name("nanSymbol")]
        [FieldProperty]
        public string NaNSymbol
        {
            get;
            set;
        }

        [FieldProperty]
        public string NegativeSign
        {
            get;
            set;
        }

        [FieldProperty]
        public string PositiveSign
        {
            get;
            set;
        }

        [FieldProperty]
        public string NegativeInfinitySymbol
        {
            get;
            set;
        }

        [FieldProperty]
        public string PositiveInfinitySymbol
        {
            get;
            set;
        }

        [FieldProperty]
        public string PercentSymbol
        {
            get;
            set;
        }

        [FieldProperty]
        public int[] PercentGroupSizes
        {
            get;
            set;
        }

        [FieldProperty]
        public int PercentDecimalDigits
        {
            get;
            set;
        }

        [FieldProperty]
        public string PercentDecimalSeparator
        {
            get;
            set;
        }

        [FieldProperty]
        public string PercentGroupSeparator
        {
            get;
            set;
        }

        [FieldProperty]
        public int PercentPositivePattern
        {
            get;
            set;
        }

        [FieldProperty]
        public int PercentNegativePattern
        {
            get;
            set;
        }

        [FieldProperty]
        public string CurrencySymbol
        {
            get;
            set;
        }

        [FieldProperty]
        public int[] CurrencyGroupSizes
        {
            get;
            set;
        }

        [FieldProperty]
        public int CurrencyDecimalDigits
        {
            get;
            set;
        }

        [FieldProperty]
        public string CurrencyDecimalSeparator
        {
            get;
            set;
        }

        [FieldProperty]
        public string CurrencyGroupSeparator
        {
            get;
            set;
        }

        [FieldProperty]
        public int CurrencyPositivePattern
        {
            get;
            set;
        }

        [FieldProperty]
        public int CurrencyNegativePattern
        {
            get;
            set;
        }

        [FieldProperty]
        public int[] NumberGroupSizes
        {
            get;
            set;
        }

        [FieldProperty]
        public int NumberDecimalDigits
        {
            get;
            set;
        }

        [FieldProperty]
        public string NumberDecimalSeparator
        {
            get;
            set;
        }

        [FieldProperty]
        public string NumberGroupSeparator
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

        [FieldProperty]
        public static NumberFormatInfo CurrentInfo
        {
            get
            {
                return null;
            }
        }
    }
}
