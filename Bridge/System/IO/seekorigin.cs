/*
 * https://github.com/Microsoft/referencesource/blob/master/mscorlib/system/io/seekorigin.cs
 */


using Bridge;

namespace System.IO
{
    /// <summary>
    /// Provides seek reference points.  To seek to the end of a stream, call stream.Seek(0, SeekOrigin.End).
    /// </summary>
    [Reflectable]
    [FileName("system/io/io.js")]
    [Convention]
    public enum SeekOrigin
    {
        Begin,
        Current,
        End
    }
}
