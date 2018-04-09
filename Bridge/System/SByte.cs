namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    [Bridge.Constructor("Number")]
#pragma warning disable CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
    public struct SByte : IComparable, IComparable<SByte>, IEquatable<SByte>, IFormattable
    {
        private extern SByte(int i);

        [Bridge.InlineConst]
        [CLSCompliant(false)]
        public const sbyte MinValue = -128;

        [Bridge.InlineConst]
        [CLSCompliant(false)]
        public const sbyte MaxValue = 127;

        [Bridge.Template("System.SByte.parse({s})")]
        [CLSCompliant(false)]
        public static extern sbyte Parse(string s);

        [Bridge.Template("System.SByte.parse({s}, {radix})")]
        [CLSCompliant(false)]
        public static extern sbyte Parse(string s, int radix);

        [Bridge.Template("System.SByte.tryParse({s}, {result})")]
        [CLSCompliant(false)]
        public static extern bool TryParse(string s, out sbyte result);

        [Bridge.Template("System.SByte.tryParse({s}, {result}, {radix})")]
        [CLSCompliant(false)]
        public static extern bool TryParse(string s, out sbyte result, int radix);

        public extern string ToString(int radix);

        [Bridge.Template("System.SByte.format({this}, {format})")]
        public extern string Format(string format);

        [Bridge.Template("System.SByte.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Bridge.Template("System.SByte.format({this}, {format})")]
        public extern string ToString(string format);

        [Bridge.Template("System.SByte.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Bridge.Template("Bridge.compare({this}, {other})")]
        [CLSCompliant(false)]
        public extern int CompareTo(sbyte other);

        [Bridge.Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Bridge.Template("{this} === {other}")]
        [CLSCompliant(false)]
        public extern bool Equals(sbyte other);

        [Bridge.Template("System.SByte.equals({this}, {other})")]
        public override extern bool Equals(object other);
    }
#pragma warning restore CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
}