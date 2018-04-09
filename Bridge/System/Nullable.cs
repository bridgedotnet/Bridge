namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    public struct Nullable<T> where T : struct
    {
        [Bridge.Template("{0}")]
        public extern Nullable(T value);

        public extern bool HasValue
        {
            [Bridge.Template("System.Nullable.hasValue({this})")]
            get;
        }

        public extern T Value
        {
            [Bridge.Template("System.Nullable.getValue({this})")]
            get;
        }

        [Bridge.Template("System.Nullable.getValueOrDefault({this}, {T:default})")]
        public extern T GetValueOrDefault();

        [Bridge.Template("System.Nullable.getValueOrDefault({this}, {0})")]
        public extern T GetValueOrDefault(T defaultValue);

        public static extern implicit operator T? (T value);

        [Bridge.Template("System.Nullable.getValue({this})")]
        public static extern explicit operator T(T? value);

        [Bridge.Template("System.Nullable.equalsT({this}, {other})")]
        public override extern bool Equals(object other);

        [Bridge.Template("System.Nullable.getHashCode({this}, {T:GetHashCode})", Fn = "System.Nullable.getHashCodeFn({T:GetHashCode})")]
        public override extern int GetHashCode();

        [Bridge.Template("System.Nullable.toString({this}, {T:ToString})", Fn = "System.Nullable.toStringFn({T:ToString})")]
        public override extern string ToString();
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    public static class Nullable
    {
        public static extern int Compare<T>(Nullable<T> n1, Nullable<T> n2) where T : struct;

        public static extern bool Equals<T>(Nullable<T> n1, Nullable<T> n2) where T : struct;

        public static extern Type GetUnderlyingType(Type nullableType);
    }
}