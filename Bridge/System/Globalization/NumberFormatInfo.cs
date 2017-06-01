using Bridge;

namespace System.Globalization
{
    [External]
    [Reflectable]
    public sealed class NumberFormatInfo : IFormatProvider, ICloneable, IBridgeClass
    {
        public extern NumberFormatInfo();

        [Convention(Notation.LowerCamelCase)] //[Field]
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

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string NegativeSign
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string PositiveSign
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string NegativeInfinitySymbol
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string PositiveInfinitySymbol
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string PercentSymbol
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern int[] PercentGroupSizes
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern int PercentDecimalDigits
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string PercentDecimalSeparator
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string PercentGroupSeparator
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern int PercentPositivePattern
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern int PercentNegativePattern
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string CurrencySymbol
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern int[] CurrencyGroupSizes
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern int CurrencyDecimalDigits
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string CurrencyDecimalSeparator
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string CurrencyGroupSeparator
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern int CurrencyPositivePattern
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern int CurrencyNegativePattern
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern int[] NumberGroupSizes
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern int NumberDecimalDigits
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string NumberDecimalSeparator
        {
            get;
            set;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern string NumberGroupSeparator
        {
            get;
            set;
        }

        public extern object GetFormat(Type formatType);

        public extern object Clone();

        [Convention(Notation.LowerCamelCase)] //[Field]
        public static extern NumberFormatInfo CurrentInfo
        {
            get;
        }
    }
}