using Bridge;

namespace System.Collections.Generic
{
    [External]
    [Reflectable]
    [ExternalInterface]
    [Convention(Target = ConventionTarget.Member, Member = ConventionMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IEnumerator<out T> : IBridgeClass, IDisposable, IEnumerator
    {
        new T Current
        {
            get;
        }
    }
}