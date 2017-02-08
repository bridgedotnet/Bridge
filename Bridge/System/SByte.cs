using Bridge;

namespace System
{
    [External]
    //[Name("System.SByte")]
    [Constructor("Number")]
#pragma warning disable CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
    public struct SByte : IComparable, IComparable<SByte>, IEquatable<SByte>, IFormattable
    {
        private extern SByte(int i);

        [InlineConst]
        public const sbyte MinValue = -128;

        [InlineConst]
        public const sbyte MaxValue = 127;

        [Template("System.SByte.parse({s})")]
        public static extern sbyte Parse(string s);

        [Template("System.SByte.parse({s}, {radix})")]
        public static extern sbyte Parse(string s, int radix);

        [Template("System.SByte.tryParse({s}, {result})")]
        public static extern bool TryParse(string s, out sbyte result);

        [Template("System.SByte.tryParse({s}, {result}, {radix})")]
        public static extern bool TryParse(string s, out sbyte result, int radix);

        public extern string ToString(int radix);

        [Template("System.SByte.format({this}, {format})")]
        public extern string Format(string format);

        [Template("System.SByte.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Template("System.SByte.format({this}, {format})")]
        public extern string ToString(string format);

        [Template("System.SByte.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(sbyte other);

        [Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Template("{this} === {other}")]
        public extern bool Equals(sbyte other);

        [Template("System.SByte.equals({this}, {other})")]
        public override extern bool Equals(object other);
    }
#pragma warning restore CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
}