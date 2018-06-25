namespace System.Collections.Generic
{
    [Bridge.External]
    [Bridge.Reflectable]
    [Bridge.Convention(Target = Bridge.ConventionTarget.Member, Member = Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    public interface IList<T> : ICollection<T>
    {
        T this[int index]
        {
            [Bridge.Template("System.Array.getItem({this}, {index}, {T})")]
            get;
            [Bridge.Template("System.Array.setItem({this}, {index}, {value}, {T})")]
            set;
        }

        [Bridge.Template("System.Array.indexOf({this}, {item}, 0, null, {T})")]
        int IndexOf(T item);

        [Bridge.Template("System.Array.insert({this}, {index}, {item}, {T})")]
        void Insert(int index, T item);

        [Bridge.Template("System.Array.removeAt({this}, {index}, {T})")]
        void RemoveAt(int index);
    }
}