using Bridge;

namespace System
{
    [External]
    [Constructor("")]
    public struct Nullable<T> where T : struct
    {
        [Template("{0}")]
        public Nullable(T value)
        {
        }

        public bool HasValue
        {
            [Template("Bridge.Nullable.hasValue({this})")]
            get
            {
                return false;
            }
        }

        public T Value
        {
            [Template("Bridge.Nullable.getValue({this})")]
            get
            {
                return default(T);
            }
        }

        [Template("Bridge.Nullable.getValueOrDefault({this})")]
        public T GetValueOrDefault()
        {
            return default(T);
        }

        [Template("Bridge.Nullable.getValueOrDefault({this}, {0})")]
        public T GetValueOrDefault(T defaultValue)
        {
            return default(T);
        }

        public static implicit operator T?(T value)
        {
            return null;
        }

        [Template("Bridge.Nullable.getValue({this})")]
        public static explicit operator T(T? value)
        {
            return default(T);
        }
    }
}
