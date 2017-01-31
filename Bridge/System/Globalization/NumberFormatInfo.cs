using Bridge;

namespace System.Globalization
{
    [External]
    public sealed class NumberFormatInfo : IFormatProvider, ICloneable, IBridgeClass
    {
        public extern NumberFormatInfo();

        [Field]
        public static extern NumberFormatInfo InvariantInfo
        {
            get;
        }

        [Name("nanSymbol")]
        [Field]
        public extern string NaNSymbol
        {
            get;
            set;
        }

        [Field]
        public extern string NegativeSign
        {
            get;
            set;
        }

        [Field]
        public extern string PositiveSign
        {
            get;
            set;
        }

        [Field]
        public extern string NegativeInfinitySymbol
        {
            get;
            set;
        }

        [Field]
        public extern string PositiveInfinitySymbol
        {
            get;
            set;
        }

        [Field]
        public extern string PercentSymbol
        {
            get;
            set;
        }

        [Field]
        public extern int[] PercentGroupSizes
        {
            get;
            set;
        }

        [Field]
        public extern int PercentDecimalDigits
        {
            get;
            set;
        }

        [Field]
        public extern string PercentDecimalSeparator
        {
            get;
            set;
        }

        [Field]
        public extern string PercentGroupSeparator
        {
            get;
            set;
        }

        [Field]
        public extern int PercentPositivePattern
        {
            get;
            set;
        }

        [Field]
        public extern int PercentNegativePattern
        {
            get;
            set;
        }

        [Field]
        public extern string CurrencySymbol
        {
            get;
            set;
        }

        [Field]
        public extern int[] CurrencyGroupSizes
        {
            get;
            set;
        }

        [Field]
        public extern int CurrencyDecimalDigits
        {
            get;
            set;
        }

        [Field]
        public extern string CurrencyDecimalSeparator
        {
            get;
            set;
        }

        [Field]
        public extern string CurrencyGroupSeparator
        {
            get;
            set;
        }

        [Field]
        public extern int CurrencyPositivePattern
        {
            get;
            set;
        }

        [Field]
        public extern int CurrencyNegativePattern
        {
            get;
            set;
        }

        [Field]
        public extern int[] NumberGroupSizes
        {
            get;
            set;
        }

        [Field]
        public extern int NumberDecimalDigits
        {
            get;
            set;
        }

        [Field]
        public extern string NumberDecimalSeparator
        {
            get;
            set;
        }

        [Field]
        public extern string NumberGroupSeparator
        {
            get;
            set;
        }

        public extern object GetFormat(Type formatType);

        public extern object Clone();

        [Field]
        public static extern NumberFormatInfo CurrentInfo
        {
            get;
        }
    }
}