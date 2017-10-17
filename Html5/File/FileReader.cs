using System;
using System.IO;
using System.Threading.Tasks;

namespace Bridge.Html5
{
    [External]
    [Namespace(false)]
    public class FileReader : EventTarget
    {
        public extern FileReader();
        public extern void ReadAsArrayBuffer(Blob blob);
        public extern void ReadAsText(Blob blob, string label = default(string));
        public extern void ReadAsDataURL(Blob blob);
        public extern void Abort();

        public const ushort EMPTY = 0;
        public const ushort LOADING = 1;
        public const ushort DONE = 2;

        public readonly ushort ReadyState;
        public readonly Union<string, ArrayBuffer> Result;
        public readonly Error Error;

        [Convention(Notation.LowerCase)]
        public Action<Event> OnLoadStart;
        [Convention(Notation.LowerCase)]
        public Action<ProgressEvent<FileReader>> OnProgress;
        [Convention(Notation.LowerCase)]
        public Action<Event> OnAbort;
        [Convention(Notation.LowerCase)]
        public Action<Event> OnError;
        [Convention(Notation.LowerCase)]
        public Action<Event> OnLoad;
        [Convention(Notation.LowerCase)]
        public Action<Event> OnLoadEnd;
    }
}