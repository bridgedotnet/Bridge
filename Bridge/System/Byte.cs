using Bridge;

namespace System
{
    [Ignore]
    [Name("Bridge.Int")]
    [Constructor("Number")]
    public struct Byte : IComparable, IComparable<Byte>, IEquatable<Byte>, IFormattable
    {
        private Byte(int i)
        {
        }

        [InlineConst]
        public const byte MinValue = 0;

        [InlineConst]
        public const byte MaxValue = 255;

        [Template("Bridge.Int.parseInt({s}, 0, 255)")]
        public static byte Parse(string s)
        {
            return 0;
        }

        [Template("Bridge.Int.parseInt({s}, 0, 255, {radix})")]
        public static byte Parse(string s, int radix)
        {
            return 0;
        }

        [Template("Bridge.Int.tryParseInt({s}, {result}, 0, 255)")]
        public static bool TryParse(string s, out byte result)
        {
            result = 0;
            return false;
        }

        [Template("Bridge.Int.tryParseInt({s}, {result}, 0, 255, {radix})")]
        public static bool TryParse(string s, out byte result, int radix)
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
        public int CompareTo(byte other)
        {
            return 0;
        }

        [Template("Bridge.compare({this}, {obj})")]
        public int CompareTo(object obj)
        {
            return 0;
        }

        [Template("Bridge.equalsT({this}, {other})")]
        public bool Equals(byte other)
        {
            return false;
        }
    }
}
