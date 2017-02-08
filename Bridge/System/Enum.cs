using Bridge;

namespace System
{
    [External]
    //[Name("System.Enum")]
    public abstract class Enum : ValueType, IComparable, IFormattable
    {
        public static extern Enum Parse(Type enumType, string value);

        public static extern Enum Parse(Type enumType, string value, bool ignoreCase);

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

        [Template("System.Enum.toString({this:type}, {this})")]
        public override extern string ToString();

        [Template("System.Enum.format({this:type}, {this}, {format})")]
        public extern string ToString(string format);

        [Template("System.Enum.format({this:type}, {this}, {format})")]
        public extern string ToString(string format, IFormatProvider formatProvider);
    }
}