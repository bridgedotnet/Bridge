using Bridge;

namespace System
{
    [External]
    [Reflectable]
#pragma warning disable CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
    public abstract class Enum : ValueType, IComparable, IFormattable
    {
        public static extern Object Parse(Type enumType, string value);

        public static extern Object Parse(Type enumType, string value, bool ignoreCase);

        public static extern string ToString(Type enumType, Enum value);

        public static extern Array GetValues(Type enumType);

        [Template("Bridge.compare({this}, {target})")]
        public extern int CompareTo(object target);

        public static extern string Format(Type enumType, object value, string format);

        public static extern string GetName(Type enumType, object value);

        public static extern string[] GetNames(Type enumType);

        [Template("System.Enum.hasFlag({this}, {flag})")]
        public extern bool HasFlag(Enum flag);

        public static extern bool IsDefined(Type enumType, object value);

        [Template("System.Enum.tryParse({TEnum}, {value}, {result})")]
        public static extern bool TryParse<TEnum>(string value, out TEnum result) where TEnum : struct;

        [Template("System.Enum.tryParse({TEnum}, {value}, {result}, {ignoreCase})")]
        public static extern bool TryParse<TEnum>(string value, bool ignoreCase, out TEnum result) where TEnum : struct;

        [Template("System.Enum.toString({this:type}, {this})", Fn = "System.Enum.toStringFn({this:type})")]
        public override extern string ToString();

        [Template("System.Enum.format({this:type}, {this}, {format})")]
        public extern string ToString(string format);

        [Template("System.Enum.equals({this}, {other}, {this:type})")]
        public override extern bool Equals(object other);

        [Template("System.Enum.format({this:type}, {this}, {format})")]
        public extern string ToString(string format, IFormatProvider formatProvider);
    }
#pragma warning restore CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
}