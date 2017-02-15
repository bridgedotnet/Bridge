using Bridge;

namespace System
{
    [External]
    [Constructor("Number")]
#pragma warning disable CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
    public struct Int16 : IComparable, IComparable<Int16>, IEquatable<Int16>, IFormattable
    {
        private extern Int16(int i);

        [InlineConst]
        public const short MinValue = -32768;

        [InlineConst]
        public const short MaxValue = 32767;

        [Template("System.Int16.parse({s})")]
        public static extern short Parse(string s);

        [Template("System.Int16.parse({s}, {radix})")]
        public static extern short Parse(string s, int radix);

        [Template("System.Int16.tryParse({s}, {result})")]
        public static extern bool TryParse(string s, out short result);

        [Template("System.Int16.tryParse({s}, {result}, {radix})")]
        public static extern bool TryParse(string s, out short result, int radix);

        public extern string ToString(int radix);

        [Template("System.Int16.format({this}, {format})")]
        public extern string Format(string format);

        [Template("System.Int16.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Template("System.Int16.format({this}, {format})")]
        public extern string ToString(string format);

        [Template("System.Int16.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(short other);

        [Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Template("{this} === {other}")]
        public extern bool Equals(short other);

        [Template("System.Int16.equals({this}, {other})")]
        public override extern bool Equals(object other);
    }
#pragma warning restore CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
}