using Bridge;

namespace System
{
    [External]
    //[Name("System.UInt32")]
    [Constructor("Number")]
#pragma warning disable CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
    public struct UInt32 : IComparable, IComparable<UInt32>, IEquatable<UInt32>, IFormattable
    {
        private extern UInt32(int i);

        [InlineConst]
        public const uint MinValue = 0;

        [InlineConst]
        public const uint MaxValue = 4294967295;

        [Template("System.UInt32.parse({s})")]
        public static extern uint Parse(string s);

        [Template("System.UInt32.parse({s}, {radix})")]
        public static extern uint Parse(string s, int radix);

        [Template("System.UInt32.tryParse({s}, {result})")]
        public static extern bool TryParse(string s, out uint result);

        [Template("System.UInt32.tryParse({s}, {result}, {radix})")]
        public static extern bool TryParse(string s, out uint result, int radix);

        public extern string ToString(int radix);

        [Template("System.UInt32.format({this}, {format})")]
        public extern string Format(string format);

        [Template("System.UInt32.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Template("System.UInt32.format({this}, {format})")]
        public extern string ToString(string format);

        [Template("System.UInt32.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(uint other);

        [Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Template("{this} === {other}")]
        public extern bool Equals(uint other);

        [Template("System.UInt32.equals({this}, {other})")]
        public override extern bool Equals(object other);
    }
#pragma warning restore CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
}