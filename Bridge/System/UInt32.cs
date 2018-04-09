namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    [Bridge.Constructor("Number")]
#pragma warning disable CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
    public struct UInt32 : IComparable, IComparable<UInt32>, IEquatable<UInt32>, IFormattable
    {
        private extern UInt32(int i);

        [Bridge.InlineConst]
        [CLSCompliant(false)]
        public const uint MinValue = 0;

        [Bridge.InlineConst]
        [CLSCompliant(false)]
        public const uint MaxValue = 4294967295;

        [Bridge.Template("System.UInt32.parse({s})")]
        [CLSCompliant(false)]
        public static extern uint Parse(string s);

        [Bridge.Template("System.UInt32.parse({s}, {radix})")]
        [CLSCompliant(false)]
        public static extern uint Parse(string s, int radix);

        [Bridge.Template("System.UInt32.tryParse({s}, {result})")]
        [CLSCompliant(false)]
        public static extern bool TryParse(string s, out uint result);

        [Bridge.Template("System.UInt32.tryParse({s}, {result}, {radix})")]
        [CLSCompliant(false)]
        public static extern bool TryParse(string s, out uint result, int radix);

        public extern string ToString(int radix);

        [Bridge.Template("System.UInt32.format({this}, {format})")]
        public extern string Format(string format);

        [Bridge.Template("System.UInt32.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Bridge.Template("System.UInt32.format({this}, {format})")]
        public extern string ToString(string format);

        [Bridge.Template("System.UInt32.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Bridge.Template("Bridge.compare({this}, {other})")]
        [CLSCompliant(false)]
        public extern int CompareTo(uint other);

        [Bridge.Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Bridge.Template("{this} === {other}")]
        [CLSCompliant(false)]
        public extern bool Equals(uint other);

        [Bridge.Template("System.UInt32.equals({this}, {other})")]
        public override extern bool Equals(object other);
    }
#pragma warning restore CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
}