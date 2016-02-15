using Bridge;

namespace System
{
    [External]
    [Name("Number")]
    [Constructor("Number")]
    public struct Double : IComparable, IComparable<Double>, IEquatable<Double>, IFormattable
    {
        private Double(int i)
        {
        }

        [Name("MAX_VALUE")]
        public static readonly double MaxValue = 0;

        [Name("MIN_VALUE")]
        public static readonly double MinValue = 0;

        [InlineConst]
        public const double Epsilon = 4.94065645841247E-324;

        [Name("NEGATIVE_INFINITY")]
        public static readonly double NegativeInfinity = 0;

        [Name("POSITIVE_INFINITY")]
        public static readonly double PositiveInfinity = 0;

        [Name("NaN")]
        public static readonly double NaN = 0;

        [Template("Bridge.Int.format({this}, {format})")]
        public string Format(string format)
        {
            return null;
        }

        [Template("Bridge.Int.format({this}, {format}, {provider})")]
        public string Format(string format, IFormatProvider provider)
        {
            return null;
        }

        public string ToString(int radix)
        {
            return null;
        }

        [Template("Bridge.Int.format({this}, {format})")]
        public string ToString(string format)
        {
            return null;
        }

        [Template("Bridge.Int.format({this}, {format}, {provider})")]
        public string ToString(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("Bridge.Int.format({this}, 'G')")]
        public override string ToString()
        {
            return null;
        }

        [Template("Bridge.Int.format({this}, 'G', {provider})")]
        public string ToString(IFormatProvider provider)
        {
            return null;
        }

        [Template("Bridge.Int.parseFloat({s})")]
        public static double Parse(string s)
        {
            return 0;
        }

        [Template("Bridge.Int.parseFloat({s}, {provider})")]
        public static double Parse(string s, IFormatProvider provider)
        {
            return 0;
        }

        [Template("Bridge.Int.tryParseFloat({s}, null, {result})")]
        public static bool TryParse(string s, out double result)
        {
            result = 0;
            return false;
        }

        [Template("Bridge.Int.tryParseFloat({s}, {provider}, {result})")]
        public static bool TryParse(string s, IFormatProvider provider, out double result)
        {
            result = 0;
            return false;
        }

        public string ToExponential()
        {
            return null;
        }

        public string ToExponential(int fractionDigits)
        {
            return null;
        }

        public string ToFixed()
        {
            return null;
        }

        public string ToFixed(int fractionDigits)
        {
            return null;
        }

        public string ToPrecision()
        {
            return null;
        }

        public string ToPrecision(int precision)
        {
            return null;
        }

        [Template("({d} === Number.POSITIVE_INFINITY)")]
        public static bool IsPositiveInfinity(double d)
        {
            return false;
        }

        [Template("({d} === Number.NEGATIVE_INFINITY)")]
        public static bool IsNegativeInfinity(double d)
        {
            return false;
        }

        [Template("(Math.abs({d}) === Number.POSITIVE_INFINITY)")]
        public static bool IsInfinity(double d)
        {
            return false;
        }

        [Template("isFinite({d})")]
        public static bool IsFinite(double d)
        {
            return false;
        }

        [Template("isNaN({d})")]
        public static bool IsNaN(double d)
        {
            return false;
        }

        [Template("Bridge.compare({this}, {other})")]
        public int CompareTo(double other)
        {
            return 0;
        }

        [Template("Bridge.compare({this}, {obj})")]
        public int CompareTo(object obj)
        {
            return 0;
        }

        [Template("Bridge.equalsT({this}, {other})")]
        public bool Equals(double other)
        {
            return false;
        }
    }
}