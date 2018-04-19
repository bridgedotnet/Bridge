namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    [Bridge.Constructor("Number")]
#pragma warning disable CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
    public struct UInt16 : IComparable, IComparable<UInt16>, IEquatable<UInt16>, IFormattable
    {
        private extern UInt16(int i);

        [Bridge.InlineConst]
        [CLSCompliant(false)]
        public const ushort MinValue = 0;

        [Bridge.InlineConst]
        [CLSCompliant(false)]
        public const ushort MaxValue = 65535;

        [Bridge.Template("System.UInt16.parse({s})")]
        [CLSCompliant(false)]
        public static extern ushort Parse(string s);

        [Bridge.Template("System.UInt16.parse({s}, {radix})")]
        [CLSCompliant(false)]
        public static extern ushort Parse(string s, int radix);

        [Bridge.Template("System.UInt16.tryParse({s}, {result})")]
        [CLSCompliant(false)]
        public static extern bool TryParse(string s, out ushort result);

        [Bridge.Template("System.UInt16.tryParse({s}, {result}, {radix})")]
        [CLSCompliant(false)]
        public static extern bool TryParse(string s, out ushort result, int radix);

        public extern string ToString(int radix);

        [Bridge.Template("System.UInt16.format({this}, {format})")]
        public extern string Format(string format);

        [Bridge.Template("System.UInt16.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Bridge.Template("System.UInt16.format({this}, {format})")]
        public extern string ToString(string format);

        [Bridge.Template("System.UInt16.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Bridge.Template("Bridge.compare({this}, {other})")]
        [CLSCompliant(false)]
        public extern int CompareTo(ushort other);

        [Bridge.Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Bridge.Template("{this} === {other}")]
        [CLSCompliant(false)]
        public extern bool Equals(ushort other);

        [Bridge.Template("System.UInt16.equals({this}, {other})")]
        public override extern bool Equals(object other);
    }
#pragma warning restore CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
}