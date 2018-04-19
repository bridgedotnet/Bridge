namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    public struct UInt64 : IComparable, IComparable<UInt64>, IEquatable<UInt64>, IFormattable
    {
        private extern UInt64(int i);

        [CLSCompliant(false)]
        public const ulong MinValue = 0;

        [CLSCompliant(false)]
        public const ulong MaxValue = 18446744073709551615;

        [Bridge.Template("System.UInt64.parse({s})")]
        [CLSCompliant(false)]
        public static extern ulong Parse(string s);

        [Bridge.Template("System.UInt64.tryParse({s}, {result})")]
        [CLSCompliant(false)]
        public static extern bool TryParse(string s, out ulong result);

        public extern string ToString(int radix);

        public extern string Format(string format);

        public extern string Format(string format, IFormatProvider provider);

        public extern string ToString(string format);

        public extern string ToString(string format, IFormatProvider provider);

        [CLSCompliant(false)]
        public extern int CompareTo(ulong other);

        public extern int CompareTo(object obj);

        [CLSCompliant(false)]
        public extern bool Equals(ulong other);

        [CLSCompliant(false)]
        public static extern implicit operator ulong (byte value);

        [CLSCompliant(false)]
        public static extern implicit operator ulong (sbyte value);

        [CLSCompliant(false)]
        public static extern implicit operator ulong (short value);

        [CLSCompliant(false)]
        public static extern implicit operator ulong (ushort value);

        [CLSCompliant(false)]
        public static extern implicit operator ulong (char value);

        [CLSCompliant(false)]
        public static extern implicit operator ulong (int value);

        [CLSCompliant(false)]
        public static extern implicit operator ulong (uint value);

        [CLSCompliant(false)]
        public static extern explicit operator ulong (float value);

        [CLSCompliant(false)]
        public static extern explicit operator ulong (double value);

        [CLSCompliant(false)]
        public static extern explicit operator byte (ulong value);

        [CLSCompliant(false)]
        public static extern explicit operator sbyte (ulong value);

        [CLSCompliant(false)]
        public static extern explicit operator char (ulong value);

        [CLSCompliant(false)]
        public static extern explicit operator short (ulong value);

        [CLSCompliant(false)]
        public static extern explicit operator ushort (ulong value);

        [CLSCompliant(false)]
        public static extern explicit operator int (ulong value);

        [CLSCompliant(false)]
        public static extern explicit operator uint (ulong value);

        [CLSCompliant(false)]
        public static extern explicit operator float (ulong value);

        [CLSCompliant(false)]
        public static extern explicit operator double (ulong value);
    }
}