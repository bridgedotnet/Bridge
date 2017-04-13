using Bridge;

namespace System.Collections
{
    [External]
    [Convention(Target = ConventionTarget.Member, Member = ConventionMember.Method, Notation = Notation.LowerCamelCase)]
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