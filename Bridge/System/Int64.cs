namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    public struct Int64 : IComparable, IComparable<Int64>, IEquatable<Int64>, IFormattable
    {
        private extern Int64(int i);

        [Bridge.Convention]
        public const long MinValue = -9223372036854775808;

        [Bridge.Convention]
        public const long MaxValue = 9223372036854775807;

        [Bridge.Template("System.Int64.parse({s})")]
        public static extern long Parse(string s);

        [Bridge.Template("System.Int64.tryParse({s}, {result})")]
        public static extern bool TryParse(string s, out long result);

        public extern string ToString(int radix);

        public extern string Format(string format);

        public extern string Format(string format, IFormatProvider provider);

        public extern string ToString(string format);

        public extern string ToString(string format, IFormatProvider provider);

        public extern int CompareTo(long other);

        public extern int CompareTo(object obj);

        public extern bool Equals(long other);

        //[Bridge.Template("System.Int64.lift({value})")]
        public static extern implicit operator long (byte value);

        //[Bridge.Template("System.Int64.lift({value})")]
        [CLSCompliant(false)]
        public static extern implicit operator long (sbyte value);

        //[Bridge.Template("System.Int64.lift({value})")]
        public static extern implicit operator long (short value);

        //[Bridge.Template("System.Int64.lift({value})")]
        [CLSCompliant(false)]
        public static extern implicit operator long (ushort value);

        //[Bridge.Template("System.Int64.lift({value})")]
        public static extern implicit operator long (char value);

        //[Bridge.Template("System.Int64.lift({value})")]
        public static extern implicit operator long (int value);

        //[Bridge.Template("System.Int64.lift({value})")]
        [CLSCompliant(false)]
        public static extern implicit operator long (uint value);

        //[Bridge.Template("System.Int64.lift(Bridge.Int.clip64({value}))")]
        public static extern explicit operator long (float value);

        //[Bridge.Template("System.Int64.lift(Bridge.Int.clip64({value}))")]
        public static extern explicit operator long (double value);

        //[Bridge.Template("System.Int64.lift({value})")]
        [CLSCompliant(false)]
        public static extern explicit operator long (ulong value);

        //[Bridge.Template("System.Int64.clip8({value})")]
        public static extern explicit operator byte (long value);

        //[Bridge.Template("System.Int64.clipu8({value})")]
        [CLSCompliant(false)]
        public static extern explicit operator sbyte (long value);

        //[Bridge.Template("System.Int64.clipu16({value})")]
        public static extern explicit operator char (long value);

        //[Bridge.Template("System.Int64.clip16({value})")]
        public static extern explicit operator short (long value);

        //[Bridge.Template("System.Int64.clipu16({value})")]
        [CLSCompliant(false)]
        public static extern explicit operator ushort (long value);

        //[Bridge.Template("System.Int64.clip32({value})")]
        public static extern explicit operator int (long value);

        //[Bridge.Template("System.Int64.clipu32({value})")]
        [CLSCompliant(false)]
        public static extern explicit operator uint (long value);

        //[Bridge.Template("System.UInt64.lift({value})")]
        [CLSCompliant(false)]
        public static extern explicit operator ulong (long value);

        //[Bridge.Template("System.Int64.toNumber({value})")]
        public static extern explicit operator float (long value);

        //[Bridge.Template("System.Int64.toNumber({value})")]
        public static extern explicit operator double (long value);
    }
}