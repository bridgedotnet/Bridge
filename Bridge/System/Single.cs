namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    [Bridge.Constructor("Number")]
    public struct Single : IComparable, IComparable<Single>, IEquatable<Single>, IFormattable
    {
        private extern Single(int i);

        [Bridge.InlineConst]
        public const float MaxValue = (float)3.40282346638528859e+38;

        [Bridge.InlineConst]
        public const float MinValue = (float)-3.40282346638528859e+38;

        [Bridge.InlineConst]
        public const float Epsilon = (float)1.4e-45;

        [Bridge.Template("Number.NaN")]
        public const float NaN = 0f / 0f;

        [Bridge.Template("Number.NEGATIVE_INFINITY")]
        public const float NegativeInfinity = -1f / 0f;

        [Bridge.Template("Number.POSITIVE_INFINITY")]
        public const float PositiveInfinity = 1f / 0f;

        [Bridge.Template("System.Single.format({this}, {format})")]
        public extern string Format(string format);

        [Bridge.Template("System.Single.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        public extern string ToString(int radix);

        [Bridge.Template("System.Single.format({this}, {format})")]
        public extern string ToString(string format);

        [Bridge.Template("System.Single.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Bridge.Template(Fn = "System.Single.format")]
        public override extern string ToString();

        [Bridge.Template("System.Single.format({this}, \"G\", {provider})")]
        public extern string ToString(IFormatProvider provider);

        [Bridge.Template("System.Single.parse({s})")]
        public static extern float Parse(string s);

        [Bridge.Template("System.Single.parse({s}, {provider})")]
        public static extern float Parse(string s, IFormatProvider provider);

        [Bridge.Template("System.Single.tryParse({s}, null, {result})")]
        public static extern bool TryParse(string s, out float result);

        [Bridge.Template("System.Single.tryParse({s}, {provider}, {result})")]
        public static extern bool TryParse(string s, IFormatProvider provider, out float result);

        public extern string ToExponential();

        public extern string ToExponential(int fractionDigits);

        public extern string ToFixed();

        public extern string ToFixed(int fractionDigits);

        public extern string ToPrecision();

        public extern string ToPrecision(int precision);

        [Bridge.Template("({d} === Number.POSITIVE_INFINITY)")]
        public static extern bool IsPositiveInfinity(float d);

        [Bridge.Template("({d} === Number.NEGATIVE_INFINITY)")]
        public static extern bool IsNegativeInfinity(float d);

        [Bridge.Template("(Math.abs({d}) === Number.POSITIVE_INFINITY)")]
        public static extern bool IsInfinity(float d);

        [Bridge.Template("isFinite({d})")]
        public static extern bool IsFinite(float d);

        [Bridge.Template("isNaN({d})")]
        public static extern bool IsNaN(float d);

        [Bridge.Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(float other);

        [Bridge.Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Bridge.Template("{this} === {other}")]
        public extern bool Equals(float other);

        [Bridge.Template("System.Single.equals({this}, {other})")]
        public override extern bool Equals(object other);

        [Bridge.Template(Fn = "System.Single.getHashCode")]
        public override extern int GetHashCode();
    }
}