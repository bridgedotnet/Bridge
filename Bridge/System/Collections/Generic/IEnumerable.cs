namespace System.Collections.Generic
{
    [Bridge.External]
    [Bridge.Reflectable]
    public interface IEnumerable<out T> : IEnumerable, Bridge.IBridgeClass
    {
        [Bridge.Template("Bridge.getEnumerator({this}, {T})")]
        new IEnumerator<T> GetEnumerator();
    }
}