using Bridge;

namespace System
{
    [External]
    [Constructor("Number")]
    public struct Double : IComparable, IComparable<Double>, IEquatable<Double>, IFormattable
    {
        private extern Double(int i);

        [Template("System.Double.max")]
        public const double MaxValue = 1.7976931348623157E+308;

        [Template("System.Double.min")]
        public const double MinValue = -1.7976931348623157E+308;

        [InlineConst]
        public const double Epsilon = 4.94065645841247E-324;

        [Template("Number.NEGATIVE_INFINITY")]
        public static readonly double NegativeInfinity = -1.0 / 0.0;

        [Template("Number.POSITIVE_INFINITY")]
        public static readonly double PositiveInfinity = 1.0 / 0.0;

        [Template("Number.NaN")]
        public static readonly double NaN = 0.0 / 0.0;

        [Template("System.Double.format({this}, {format})")]
        public extern string Format(string format);

        [Template("System.Double.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        public extern string ToString(int radix);

        [Template("System.Double.format({this}, {format})")]
        public extern string ToString(string format);

        [Template("System.Double.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Template("System.Double.format({this}, \"G\")")]
        public override extern string ToString();

        [Template("System.Double.format({this}, \"G\", {provider})")]
        public extern string ToString(IFormatProvider provider);

        [Template("System.Double.parse({s})")]
        public static extern double Parse(string s);

        [Template("Bridge.Int.parseFloat({s}, {provider})")]
        public static extern double Parse(string s, IFormatProvider provider);

        [Template("System.Double.tryParse({s}, null, {result})")]
        public static extern bool TryParse(string s, out double result);

        [Template("System.Double.tryParse({s}, {provider}, {result})")]
        public static extern bool TryParse(string s, IFormatProvider provider, out double result);

        public extern string ToExponential();

        public extern string ToExponential(int fractionDigits);

        public extern string ToFixed();

        public extern string ToFixed(int fractionDigits);

        public extern string ToPrecision();

        public extern string ToPrecision(int precision);

        [Template("({d} === Number.POSITIVE_INFINITY)")]
        public static extern bool IsPositiveInfinity(double d);

        [Template("({d} === Number.NEGATIVE_INFINITY)")]
        public static extern bool IsNegativeInfinity(double d);

        [Template("(Math.abs({d}) === Number.POSITIVE_INFINITY)")]
        public static extern bool IsInfinity(double d);

        [Template("isFinite({d})")]
        public static extern bool IsFinite(double d);

        [Template("isNaN({d})")]
        public static extern bool IsNaN(double d);

        [Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(double other);

        [Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Template("{this} === {other}")]
        public extern bool Equals(double other);

        [Template("System.Double.equals({this}, {other})")]
        public override extern bool Equals(object other);

        [Template("System.Double.getHashCode({this})")]
        public override extern int GetHashCode();
    }
}