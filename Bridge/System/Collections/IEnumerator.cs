using Bridge;

namespace System.Collections
{
    [External]
    [Convention(Type = NotationType.Member, Member = NotationMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IEnumerator : IBridgeClass
    {
        object Current
        {
            get;
        }

        bool MoveNext();

        void Reset();
    }
}