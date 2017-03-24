using Bridge;

namespace System.Globalization
{
    [External]
    public sealed class NumberFormatInfo : IFormatProvider, ICloneable, IBridgeClass
    {
        public extern NumberFormatInfo();

        [Name(true)] //[Field]
        public static extern NumberFormatInfo InvariantInfo
        {
            get;
        }

        [Name("nanSymbol")]
        public extern string NaNSymbol
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern string NegativeSign
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern string PositiveSign
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern string NegativeInfinitySymbol
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern string PositiveInfinitySymbol
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern string PercentSymbol
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern int[] PercentGroupSizes
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern int PercentDecimalDigits
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern string PercentDecimalSeparator
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern string PercentGroupSeparator
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern int PercentPositivePattern
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern int PercentNegativePattern
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern string CurrencySymbol
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern int[] CurrencyGroupSizes
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern int CurrencyDecimalDigits
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern string CurrencyDecimalSeparator
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern string CurrencyGroupSeparator
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern int CurrencyPositivePattern
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern int CurrencyNegativePattern
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern int[] NumberGroupSizes
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern int NumberDecimalDigits
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern string NumberDecimalSeparator
        {
            get;
            set;
        }

        [Name(true)] //[Field]
        public extern string NumberGroupSeparator
        {
            get;
            set;
        }

        public extern object GetFormat(Type formatType);

        public extern object Clone();

        [Name(true)] //[Field]
        public static extern NumberFormatInfo CurrentInfo
        {
            get;
        }
    }
}