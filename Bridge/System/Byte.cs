namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Constructor("Number")]
    [Bridge.Reflectable]
#pragma warning disable CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
    public struct Byte : IComparable, IComparable<Byte>, IEquatable<Byte>, IFormattable
    {
        private extern Byte(int i);

        [Bridge.InlineConst]
        public const byte MinValue = 0;

        [Bridge.InlineConst]
        public const byte MaxValue = 255;

        [Bridge.Template("System.Byte.parse({s})")]
        public static extern byte Parse(string s);

        [Bridge.Template("System.Byte.parse({s}, {radix})")]
        public static extern byte Parse(string s, int radix);

        [Bridge.Template("System.Byte.tryParse({s}, {result})")]
        public static extern bool TryParse(string s, out byte result);

        [Bridge.Template("System.Byte.tryParse({s}, {result}, {radix})")]
        public static extern bool TryParse(string s, out byte result, int radix);

        public extern string ToString(int radix);

        [Bridge.Template("System.Byte.format({this}, {format})")]
        public extern string Format(string format);

        [Bridge.Template("System.Byte.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Bridge.Template("System.Byte.format({this}, {format})")]
        public extern string ToString(string format);

        [Bridge.Template("System.Byte.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Bridge.Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(byte other);

        [Bridge.Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Bridge.Template("{this} === {other}")]
        public extern bool Equals(byte other);

        [Bridge.Template("System.Byte.equals({this}, {other})")]
        public override extern bool Equals(object other);
    }
#pragma warning restore CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
}