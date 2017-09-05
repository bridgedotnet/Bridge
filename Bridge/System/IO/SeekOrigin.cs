using Bridge;

namespace System.IO
{
    [Reflectable]
    [FileName("system\\IO\\io.js")]
    [Convention]
    public enum SeekOrigin
    {
        Begin,
        Current,
        End
    }
}