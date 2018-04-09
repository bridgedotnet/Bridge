namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Constructor("Number")]
    [Bridge.Reflectable]
#pragma warning disable CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
    public struct Int16 : IComparable, IComparable<Int16>, IEquatable<Int16>, IFormattable
    {
        private extern Int16(int i);

        [Bridge.InlineConst]
        public const short MinValue = -32768;

        [Bridge.InlineConst]
        public const short MaxValue = 32767;

        [Bridge.Template("System.Int16.parse({s})")]
        public static extern short Parse(string s);

        [Bridge.Template("System.Int16.parse({s}, {radix})")]
        public static extern short Parse(string s, int radix);

        [Bridge.Template("System.Int16.tryParse({s}, {result})")]
        public static extern bool TryParse(string s, out short result);

        [Bridge.Template("System.Int16.tryParse({s}, {result}, {radix})")]
        public static extern bool TryParse(string s, out short result, int radix);

        public extern string ToString(int radix);

        [Bridge.Template("System.Int16.format({this}, {format})")]
        public extern string Format(string format);

        [Bridge.Template("System.Int16.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Bridge.Template("System.Int16.format({this}, {format})")]
        public extern string ToString(string format);

        [Bridge.Template("System.Int16.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Bridge.Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(short other);

        [Bridge.Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Bridge.Template("{this} === {other}")]
        public extern bool Equals(short other);

        [Bridge.Template("System.Int16.equals({this}, {other})")]
        public override extern bool Equals(object other);
    }
#pragma warning restore CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
}