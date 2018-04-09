namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Constructor("Number")]
    [Bridge.Reflectable]
#pragma warning disable CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
    public struct Int32 : IComparable, IComparable<Int32>, IEquatable<Int32>, IFormattable
    {
        private extern Int32(int i);

        [Bridge.InlineConst]
        public const int MinValue = -2147483648;

        [Bridge.InlineConst]
        public const int MaxValue = 2147483647;

        [Bridge.Template("System.Int32.parse({s})")]
        public static extern int Parse(string s);

        [Bridge.Template("System.Int32.parse({s}, {radix})")]
        public static extern int Parse(string s, int radix);

        [Bridge.Template("System.Int32.tryParse({s}, {result})")]
        public static extern bool TryParse(string s, out int result);

        [Bridge.Template("System.Int32.tryParse({s}, {result}, {radix})")]
        public static extern bool TryParse(string s, out int result, int radix);

        public extern string ToString(int radix);

        [Bridge.Template("System.Int32.format({this}, {format})")]
        public extern string Format(string format);

        [Bridge.Template("System.Int32.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Bridge.Template("System.Int32.format({this}, {format})")]
        public extern string ToString(string format);

        [Bridge.Template("System.Int32.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Bridge.Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(int other);

        [Bridge.Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Bridge.Template("{this} === {other}")]
        public extern bool Equals(int other);

        [Bridge.Template("System.Int32.equals({this}, {other})")]
        public override extern bool Equals(object other);
    }
#pragma warning restore CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
}