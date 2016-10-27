using Bridge;

namespace System
{
    [External]
    public struct Nullable<T> where T : struct
    {
        [Template("{0}")]
        public extern Nullable(T value);

        public extern bool HasValue
        {
            [Template("System.Nullable.hasValue({this})")]
            get;
        }

        public extern T Value
        {
            [Template("System.Nullable.getValue({this})")]
            get;
        }

        [Template("System.Nullable.getValueOrDefault({this}, {T:default})")]
        public extern T GetValueOrDefault();

        [Template("System.Nullable.getValueOrDefault({this}, {0})")]
        public extern T GetValueOrDefault(T defaultValue);

        public static extern implicit operator T? (T value);

        [Template("System.Nullable.getValue({this})")]
        public static extern explicit operator T(T? value);

        [Template("System.Nullable.equalsT({this}, {other})")]
        public override extern bool Equals(object other);

        [Template("System.Nullable.getHashCode({this})")]
        public override extern int GetHashCode();

        [Template("System.Nullable.toString({this})")]
        public override extern string ToString();
    }
}