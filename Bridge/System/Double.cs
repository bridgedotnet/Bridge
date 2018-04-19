namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Constructor("Number")]
    [Bridge.Reflectable]
    public struct Double : IComparable, IComparable<Double>, IEquatable<Double>, IFormattable
    {
        private extern Double(int i);

        [Bridge.Template("System.Double.max")]
        public const double MaxValue = 1.7976931348623157E+308;

        [Bridge.Template("System.Double.min")]
        public const double MinValue = -1.7976931348623157E+308;

        [Bridge.InlineConst]
        public const double Epsilon = 4.94065645841247E-324;

        [Bridge.Template("Number.NEGATIVE_INFINITY")]
        public const double NegativeInfinity = -1D / 0D;

        [Bridge.Template("Number.POSITIVE_INFINITY")]
        public const double PositiveInfinity = 1D / 0D;

        [Bridge.Template("Number.NaN")]
        public const double NaN = 0D / 0D;

        [Bridge.Template("System.Double.format({this}, {format})")]
        public extern string Format(string format);

        [Bridge.Template("System.Double.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        public extern string ToString(int radix);

        [Bridge.Template("System.Double.format({this}, {format})")]
        public extern string ToString(string format);

        [Bridge.Template("System.Double.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Bridge.Template(Fn = "System.Double.format")]
        public override extern string ToString();

        [Bridge.Template("System.Double.format({this}, \"G\", {provider})")]
        public extern string ToString(IFormatProvider provider);

        [Bridge.Template("System.Double.parse({s})")]
        public static extern double Parse(string s);

        [Bridge.Template("Bridge.Int.parseFloat({s}, {provider})")]
        public static extern double Parse(string s, IFormatProvider provider);

        [Bridge.Template("System.Double.tryParse({s}, null, {result})")]
        public static extern bool TryParse(string s, out double result);

        [Bridge.Template("System.Double.tryParse({s}, {provider}, {result})")]
        public static extern bool TryParse(string s, IFormatProvider provider, out double result);

        public extern string ToExponential();

        public extern string ToExponential(int fractionDigits);

        public extern string ToFixed();

        public extern string ToFixed(int fractionDigits);

        public extern string ToPrecision();

        public extern string ToPrecision(int precision);

        [Bridge.Template("({d} === Number.POSITIVE_INFINITY)")]
        public static extern bool IsPositiveInfinity(double d);

        [Bridge.Template("({d} === Number.NEGATIVE_INFINITY)")]
        public static extern bool IsNegativeInfinity(double d);

        [Bridge.Template("(Math.abs({d}) === Number.POSITIVE_INFINITY)")]
        public static extern bool IsInfinity(double d);

        [Bridge.Template("isFinite({d})")]
        public static extern bool IsFinite(double d);

        [Bridge.Template("isNaN({d})")]
        public static extern bool IsNaN(double d);

        [Bridge.Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(double other);

        [Bridge.Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Bridge.Template("{this} === {other}")]
        public extern bool Equals(double other);

        [Bridge.Template("System.Double.equals({this}, {other})")]
        public override extern bool Equals(object other);

        [Bridge.Template(Fn = "System.Double.getHashCode")]
        public override extern int GetHashCode();
    }
}