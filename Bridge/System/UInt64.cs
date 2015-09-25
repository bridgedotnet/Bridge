using Bridge;

namespace System
{
    [Ignore]
    [Name("Bridge.Int")]
    [Constructor("Number")]
    public struct UInt64 : IComparable, IComparable<UInt64>, IEquatable<UInt64>, IFormattable
    {
        private UInt64(int i)
        {
        }

        [InlineConst]
        public const ulong MinValue = 0;

        [InlineConst]
        public const ulong MaxValue = 9007199254740991;

        [Template("Bridge.Int.parseInt({s}, 0, 9007199254740991)")]
        public static ulong Parse(string s)
        {
            return 0;
        }

        [Template("Bridge.Int.parseInt({s}, 0, 9007199254740991, {radix})")]
        public static ulong Parse(string s, int radix)
        {
            return 0;
        }

        [Template("Bridge.Int.tryParseInt({s}, {result}, 0, 9007199254740991)")]
        public static bool TryParse(string s, out ulong result)
        {
            result = 0;
            return false;
        }

        [Template("Bridge.Int.tryParseInt({s}, {result}, 0, 9007199254740991, {radix})")]
        public static bool TryParse(string s, out ulong result, int radix)
        {
            result = 0;
            return false;
        }

        public string ToString(int radix)
        {
            return null;
        }

        [Template("Bridge.Int.format({this}, {format})")]
        public string Format(string format)
        {
            return null;
        }

        [Template("Bridge.Int.format({this}, {format}, {provider})")]
        public string Format(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("Bridge.Int.format({this}, {format})")]
        public string ToString(string format)
        {
            return null;
        }

        [Template("Bridge.Int.format({this}, {format}, {provider})")]
        public string ToString(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("Bridge.compare({this}, {other})")]
        public int CompareTo(ulong other)
        {
            return 0;
        }

        [Template("Bridge.compare({this}, {obj})")]
        public int CompareTo(object obj)
        {
            return 0;
        }

        [Template("Bridge.equalsT({this}, {other})")]
        public bool Equals(ulong other)
        {
            return false;
        }
    }
}
