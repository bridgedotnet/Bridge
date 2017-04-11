using Bridge;

namespace System
{
    [External]
    //[Name("System.UInt64")]
    //[Constructor("System.UInt64")]
    public struct UInt64 : IComparable, IComparable<UInt64>, IEquatable<UInt64>, IFormattable
    {
        private extern UInt64(int i);

        [Convention]
        public const ulong MinValue = 0;

        [Convention]
        public const ulong MaxValue = 18446744073709551615;

        [Template("System.UInt64.parse({s})")]
        public static extern ulong Parse(string s);

        [Template("System.UInt64.tryParse({s}, {result})")]
        public static extern bool TryParse(string s, out ulong result);

        public extern string ToString(int radix);

        public extern string Format(string format);

        public extern string Format(string format, IFormatProvider provider);

        public extern string ToString(string format);

        public extern string ToString(string format, IFormatProvider provider);

        public extern int CompareTo(ulong other);

        public extern int CompareTo(object obj);

        public extern bool Equals(ulong other);

        //[Template("System.UInt64.lift({value})")]
        public static extern implicit operator ulong (byte value);

        //[Template("System.UInt64.lift({value})")]
        public static extern implicit operator ulong (sbyte value);

        //[Template("System.UInt64.lift({value})")]
        public static extern implicit operator ulong (short value);

        //[Template("System.UInt64.lift({value})")]
        public static extern implicit operator ulong (ushort value);

        //[Template("System.UInt64.lift({value})")]
        public static extern implicit operator ulong (char value);

        //[Template("System.UInt64.lift({value})")]
        public static extern implicit operator ulong (int value);

        //[Template("System.UInt64.lift({value})")]
        public static extern implicit operator ulong (uint value);

        //[Template("System.UInt64.lift(Bridge.Int.clipu64({value}))")]
        public static extern explicit operator ulong (float value);

        //[Template("System.UInt64.lift(Bridge.Int.clipu64({value}))")]
        public static extern explicit operator ulong (double value);

        //[Template("System.Int64.lift({value})")]
        //public static extern explicit operator ulong(long value);

        //[Template("System.Int64.clip8({value})")]
        public static extern explicit operator byte (ulong value);

        //[Template("System.Int64.clipu8({value})")]
        public static extern explicit operator sbyte (ulong value);

        //[Template("System.Int64.clipu16({value})")]
        public static extern explicit operator char (ulong value);

        //[Template("System.Int64.clip16({value})")]
        public static extern explicit operator short (ulong value);

        //[Template("System.Int64.clipu16({value})")]
        public static extern explicit operator ushort (ulong value);

        //[Template("System.Int64.clip32({value})")]
        public static extern explicit operator int (ulong value);

        //[Template("System.Int64.clipu32({value})")]
        public static extern explicit operator uint (ulong value);

        //[Template("System.UInt64.lift({value})")]
        //public static extern explicit operator long(ulong value);

        //[Template("System.UInt64.toNumber({value})")]
        public static extern explicit operator float (ulong value);

        //[Template("System.UInt64.toNumber({value})")]
        public static extern explicit operator double (ulong value);
    }
}