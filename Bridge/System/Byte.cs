using Bridge;

namespace System
{
    [External]
    [Constructor("Number")]
#pragma warning disable CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
    public struct Byte : IComparable, IComparable<Byte>, IEquatable<Byte>, IFormattable
    {
        private extern Byte(int i);

        [InlineConst]
        public const byte MinValue = 0;

        [InlineConst]
        public const byte MaxValue = 255;

        [Template("System.Byte.parse({s})")]
        public static extern byte Parse(string s);

        [Template("System.Byte.parse({s}, {radix})")]
        public static extern byte Parse(string s, int radix);

        [Template("System.Byte.tryParse({s}, {result})")]
        public static extern bool TryParse(string s, out byte result);

        [Template("System.Byte.tryParse({s}, {result}, {radix})")]
        public static extern bool TryParse(string s, out byte result, int radix);

        public extern string ToString(int radix);

        [Template("System.Byte.format({this}, {format})")]
        public extern string Format(string format);

        [Template("System.Byte.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Template("System.Byte.format({this}, {format})")]
        public extern string ToString(string format);

        [Template("System.Byte.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(byte other);

        [Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Template("{this} === {other}")]
        public extern bool Equals(byte other);

        [Template("System.Byte.equals({this}, {other})")]
        public override extern bool Equals(object other);
    }
#pragma warning restore CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
}