namespace System.Collections
{
    [Bridge.External]
    [Bridge.Reflectable]
    public interface IEnumerable : Bridge.IBridgeClass
    {
        [Bridge.Template("Bridge.getEnumerator({this})")]
        IEnumerator GetEnumerator();
    }
}