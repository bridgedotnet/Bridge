using Bridge;
using System.Runtime.CompilerServices;

namespace System
{
    [External]
    [Reflectable]
    public struct Boolean : IComparable, IComparable<bool>, IEquatable<bool>
    {
        [InlineConst]
        internal const int True = 1;

        [InlineConst]
        internal const int False = 0;

        [Template("System.Boolean.trueString")]
        public static readonly string TrueString = "True";

        [Template("System.Boolean.falseString")]
        public static readonly string FalseString = "False";

        [Template("false")]
        private extern Boolean(DummyTypeUsedToAddAttributeToDefaultValueTypeConstructor _);

        [Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(bool other);

        [Template("{this} === {other}")]
        public extern bool Equals(bool other);

        [Template("System.Boolean.parse({value})")]
        public static extern bool Parse(string value);

        [Template("System.Boolean.tryParse({value}, {result})")]
        public static extern bool TryParse(string value, out bool result);

        [Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(object obj);

        [Template(Fn = "System.Boolean.toString")]
        public override extern string ToString();
    }
}