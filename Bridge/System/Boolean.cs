using System.Runtime.CompilerServices;

namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    public struct Boolean : IComparable, IComparable<bool>, IEquatable<bool>
    {
        [Bridge.InlineConst]
        internal const int True = 1;

        [Bridge.InlineConst]
        internal const int False = 0;

        [Bridge.Template("System.Boolean.trueString")]
        public static readonly string TrueString = "True";

        [Bridge.Template("System.Boolean.falseString")]
        public static readonly string FalseString = "False";

        [Bridge.Template("false")]
        private extern Boolean(DummyTypeUsedToAddAttributeToDefaultValueTypeConstructor _);

        [Bridge.Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(bool other);

        [Bridge.Template("{this} === {other}")]
        public extern bool Equals(bool other);

        [Bridge.Template("System.Boolean.parse({value})")]
        public static extern bool Parse(string value);

        [Bridge.Template("System.Boolean.tryParse({value}, {result})")]
        public static extern bool TryParse(string value, out bool result);

        [Bridge.Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(object obj);

        [Bridge.Template(Fn = "System.Boolean.toString")]
        public override extern string ToString();
    }
}