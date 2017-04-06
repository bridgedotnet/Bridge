using Bridge;

namespace System.Collections.Generic
{
    [External]
    [ExternalInterface]
    [Convention(Type = NotationType.Member, Member = NotationMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IEnumerator<out T> : IBridgeClass, IDisposable, IEnumerator
    {
        new T Current
        {
            get;
        }
    }
}