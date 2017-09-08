using Bridge;

namespace System.IO
{
    [Reflectable]
    [FileName("system\\io\\io.js")]
    [Convention]
    public enum SeekOrigin
    {
        Begin,
        Current,
        End
    }
}