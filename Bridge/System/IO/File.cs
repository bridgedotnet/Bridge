using Bridge;
using Bridge.Internal.Html5;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace System.IO
{
    [FileName("io.js")]
    public static class File
    {
        public static string ReadAllText (string path)
        {
            if (Browser.IsNodeJs)
            {
                var fs = Script.Write<dynamic>(@"require(""fs"")");
                return fs.readFileSync(path).toString();
            }
            else
            {
                dynamic request = Script.Write<dynamic>("new XMLHttpRequest()");
                request.open("GET", path, false);
                request.send(null);
                return request.responseText;
            }
        }

        internal static Bridge.Internal.Html5.ArrayBuffer ReadAllBytesAsBuffer (string path)
        {
            if (Browser.IsNodeJs)
            {
                var fs = Script.Write<dynamic>(@"require(""fs"")");
                return ((ArrayBuffer)fs.readFileSync(path));
            }
            else
            {
                var req = Script.Write<dynamic>("new XMLHttpRequest()");
                req.open("GET", path, false);
                //XHR binary charset opt by Marcus Granado 2006 [http://mgran.blogspot.com]
                req.overrideMimeType("text/plain; charset=binary-data");
                req.send(null);
                if (req.status != 200) throw new IOException($"Status of request to {path} returned status: {(ushort)req.status}");
                string text = ((string)req.responseText);
                var resultArray = new Uint8Array(text.Length);
                text.ToCharArray().ForEach((v, index, array) => resultArray[index] = (byte)(v & byte.MaxValue));
                return resultArray.Buffer;
            }
        }

        public static byte[] ReadAllBytes (string path) =>
            new Uint8Array(ReadAllBytesAsBuffer(path)).ToArray();
    }
}
