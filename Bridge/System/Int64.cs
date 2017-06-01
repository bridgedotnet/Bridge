using Bridge;

namespace System
{
    [External]
    [Reflectable]
    public struct Int64 : IComparable, IComparable<Int64>, IEquatable<Int64>, IFormattable
    {
        private extern Int64(int i);

        [Convention]
        public const long MinValue = -9223372036854775808;

        [Convention]
        public const long MaxValue = 9223372036854775807;

        [Template("System.Int64.parse({s})")]
        public static extern long Parse(string s);

        [Template("System.Int64.tryParse({s}, {result})")]
        public static extern bool TryParse(string s, out long result);

        public extern string ToString(int radix);

        public extern string Format(string format);

        public extern string Format(string format, IFormatProvider provider);

        public extern string ToString(string format);

        public extern string ToString(string format, IFormatProvider provider);

        public extern int CompareTo(long other);

        public extern int CompareTo(object obj);

        public extern bool Equals(long other);

        //[Template("System.Int64.lift({value})")]
        public static extern implicit operator long (byte value);

        //[Template("System.Int64.lift({value})")]
        public static extern implicit operator long (sbyte value);

        //[Template("System.Int64.lift({value})")]
        public static extern implicit operator long (short value);

        //[Template("System.Int64.lift({value})")]
        public static extern implicit operator long (ushort value);

        //[Template("System.Int64.lift({value})")]
        public static extern implicit operator long (char value);

        //[Template("System.Int64.lift({value})")]
        public static extern implicit operator long (int value);

        //[Template("System.Int64.lift({value})")]
        public static extern implicit operator long (uint value);

        //[Template("System.Int64.lift(Bridge.Int.clip64({value}))")]
        public static extern explicit operator long (float value);

        //[Template("System.Int64.lift(Bridge.Int.clip64({value}))")]
        public static extern explicit operator long (double value);

        //[Template("System.Int64.lift({value})")]
        public static extern explicit operator long (ulong value);

        //[Template("System.Int64.clip8({value})")]
        public static extern explicit operator byte (long value);

        //[Template("System.Int64.clipu8({value})")]
        public static extern explicit operator sbyte (long value);

        //[Template("System.Int64.clipu16({value})")]
        public static extern explicit operator char (long value);

        //[Template("System.Int64.clip16({value})")]
        public static extern explicit operator short (long value);

        //[Template("System.Int64.clipu16({value})")]
        public static extern explicit operator ushort (long value);

        //[Template("System.Int64.clip32({value})")]
        public static extern explicit operator int (long value);

        //[Template("System.Int64.clipu32({value})")]
        public static extern explicit operator uint (long value);

        //[Template("System.UInt64.lift({value})")]
        public static extern explicit operator ulong (long value);

        //[Template("System.Int64.toNumber({value})")]
        public static extern explicit operator float (long value);

        //[Template("System.Int64.toNumber({value})")]
        public static extern explicit operator double (long value);
    }
}