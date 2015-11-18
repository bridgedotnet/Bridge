using Bridge;

namespace System
{
    [External]
    [Name("Number")]
    [Constructor("Number")]
    public struct Single : IComparable, IComparable<Single>, IEquatable<Single>, IFormattable
    {
        private Single(int i)
        {
        }

        [InlineConst]
        public const float MaxValue = (float)3.40282346638528859e+38;

        [InlineConst]
        public const float MinValue = (float)-3.40282346638528859e+38;

        [InlineConst]
        public const float Epsilon = (float)1.4e-45;

        [Name("NaN")]
        public static readonly float NaN = 0;

        [Name("NEGATIVE_INFINITY")]
        public static readonly float NegativeInfinity = 0;

        [Name("POSITIVE_INFINITY")]
        public static readonly float PositiveInfinity = 0;

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

        [Template("Bridge.Int.parseFloat({s})")]
        public static float Parse(string s)
        {
            return 0;
        }

        [Template("Bridge.Int.parseFloat({s}, {provider})")]
        public static float Parse(string s, IFormatProvider provider)
        {
            return 0;
        }

        [Template("Bridge.Int.tryParseFloat({s}, null, {result})")]
        public static bool TryParse(string s, out float result)
        {
            result = 0;
            return false;
        }

        [Template("Bridge.Int.tryParseFloat({s}, {provider}, {result})")]
        public static bool TryParse(string s, IFormatProvider provider, out float result)
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
        public static bool IsPositiveInfinity(float d)
        {
            return false;
        }

        [Template("({d} === Number.NEGATIVE_INFINITY)")]
        public static bool IsNegativeInfinity(float d)
        {
            return false;
        }

        [Template("(Math.abs({d}) === Number.POSITIVE_INFINITY)")]
        public static bool IsInfinity(float d)
        {
            return false;
        }

        [Template("isFinite({d})")]
        public static bool IsFinite(float d)
        {
            return false;
        }

        [Template("isNaN({d})")]
        public static bool IsNaN(float d)
        {
            return false;
        }

        [Template("Bridge.compare({this}, {other})")]
        public int CompareTo(float other)
        {
            return 0;
        }

        [Template("Bridge.compare({this}, {obj})")]
        public int CompareTo(object obj)
        {
            return 0;
        }

        [Template("Bridge.equalsT({this}, {other})")]
        public bool Equals(float other)
        {
            return false;
        }
    }
}
