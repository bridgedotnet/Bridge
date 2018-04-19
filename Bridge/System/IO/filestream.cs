// ==++==
//
//   Copyright (c) Microsoft Corporation.  All rights reserved.
//
// ==--==
/*============================================================
**
** Class:  FileStream
**
** <OWNER>Microsoft</OWNER>
**
**
** Purpose: Exposes a Stream around a file, with full
** synchronous and asychronous support, and buffering.
**
**
===========================================================*/
/*
 * https://github.com/Microsoft/referencesource/blob/master/mscorlib/system/io/filestream.cs
 */

using System.Runtime.InteropServices;
using System.Threading.Tasks;

/*
 * FileStream supports different modes of accessing the disk - async mode
 * and sync mode.  They are two completely different codepaths in the
 * sync & async methods (ie, Read/Write vs. BeginRead/BeginWrite).  File
 * handles in NT can be opened in only sync or overlapped (async) mode,
 * and we have to deal with this pain.  Stream has implementations of
 * the sync methods in terms of the async ones, so we'll
 * call through to our base class to get those methods when necessary.
 *
 * Also buffering is added into FileStream as well. Folded in the
 * code from BufferedStream, so all the comments about it being mostly
 * aggressive (and the possible perf improvement) apply to FileStream as
 * well.  Also added some buffering to the async code paths.
 *
 * Class Invariants:
 * The class has one buffer, shared for reading & writing.  It can only be
 * used for one or the other at any point in time - not both.  The following
 * should be true:
 *   0 <= _readPos <= _readLen < _bufferSize
 *   0 <= _writePos < _bufferSize
 *   _readPos == _readLen && _readPos > 0 implies the read buffer is valid,
 *     but we're at the end of the buffer.
 *   _readPos == _readLen == 0 means the read buffer contains garbage.
 *   Either _writePos can be greater than 0, or _readLen & _readPos can be
 *     greater than zero, but neither can be greater than zero at the same time.
 *
 */

namespace System.IO
{
    [Bridge.External]
    [Bridge.Namespace(false)]
    internal class FileReader
    {
        public extern FileReader();

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern void ReadAsArrayBuffer(object file);

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public readonly string Result;

        [Bridge.Convention(Bridge.Notation.LowerCase)]
        public Action OnLoad;

        [Bridge.Convention(Bridge.Notation.LowerCase)]
        public Action<object> OnError;
    }

    [Bridge.Reflectable]
    [Bridge.Convention]
    public class FileStream : Stream
    {
        private string name;
        byte[] _buffer;

        public FileStream(string path, FileMode mode)
        {
            this.name = path;
        }

        internal FileStream(byte[] buffer, string name)
        {
            this._buffer = buffer;
            this.name = name;
        }

        internal static Task<FileStream> FromFile(object file)
        {
            var completer = new System.Threading.Tasks.TaskCompletionSource<FileStream>();
            var fileReader = new FileReader();
            /*@
            fileReader.onload = function () {
                completer.setResult(new System.IO.FileStream.ctor(fileReader.result, file.name));
            };
            */
            fileReader.OnError = (e) =>
            {
                completer.SetException(new SystemException(e.As<dynamic>().target.error.As<string>()));
            };
            fileReader.ReadAsArrayBuffer(file);

            return completer.Task;
        }

        public override bool CanRead
        {
            get
            {
                return true;
            }
        }

        public override bool CanWrite
        {
            get
            {
                return false;
            }
        }

        public override bool CanSeek
        {
            get
            {
                return false;
            }
        }

        public virtual bool IsAsync
        {
            get
            {
                return false;
            }
        }

        public String Name
        {
            get
            {
                return name;
            }
        }

        public override long Length
        {
            get
            {
                return this.GetInternalBuffer().ToDynamic().byteLength;
            }
        }

        public override long Position
        {
            get;
            set;
        }

        public override void Flush()
        {
        }

        public override long Seek(long offset, SeekOrigin origin)
        {
            throw new NotImplementedException();
        }

        public override void SetLength(long value)
        {
            throw new NotImplementedException();
        }

        public override void Write(byte[] buffer, int offset, int count)
        {
            throw new NotImplementedException();
        }

        private byte[] GetInternalBuffer()
        {
            if (this._buffer == null)
            {
                this._buffer = FileStream.ReadBytes(this.name);

            }

            return this._buffer;
        }

        internal async Task EnsureBufferAsync()
        {
            if (this._buffer == null)
            {
                this._buffer = await FileStream.ReadBytesAsync(this.name);
            }
        }

        public override int Read([In, Out] byte[] buffer, int offset, int count)
        {
            if (buffer == null)
            {
                throw new System.ArgumentNullException("buffer");
            }

            if (offset < 0)
            {
                throw new System.ArgumentOutOfRangeException("offset");
            }

            if (count < 0)
            {
                throw new System.ArgumentOutOfRangeException("count");
            }

            if ((buffer.Length - offset) < count)
            {
                throw new System.ArgumentException();
            }

            var num = this.Length - this.Position;
            if (num > count)
            {
                num = count;
            }

            if (num <= 0)
            {
                return 0;
            }
            
            var byteBuffer = Bridge.Script.Write<dynamic>("new Uint8Array(this.GetInternalBuffer())");
            if (num > 8)
            {
                for (var n = 0; n < num; n++)
                {
                    buffer[n + offset] = Bridge.Script.Write<dynamic>("byteBuffer[this.Position.add(System.Int64(n))]");
                }
            }
            else
            {
                var num1 = num;
                while (true)
                {
                    var num2 = num1 - 1;
                    num1 = num2;
                    if (num2 < 0)
                    {
                        break;
                    }
                    buffer[offset + num1] = Bridge.Script.Write<dynamic>("byteBuffer[this.Position.add(num1)]");
                }
            }
            this.Position += num;
            return (int)num;
        }

        internal static byte[] ReadBytes(string path)
        {
            if (Bridge.Script.IsNode)
            {
                var fs = Bridge.Script.Write<dynamic>(@"require(""fs"")");
                return Bridge.Script.Write<dynamic>("Bridge.cast(fs.readFileSync(path), ArrayBuffer)");
            }
            else
            {
                var req = Bridge.Script.Write<dynamic>("new XMLHttpRequest()");
                req.open("GET", path, false);
                req.overrideMimeType("text/plain; charset=x-user-defined");
                req.send(null);
                if (Bridge.Script.Write<bool>("req.status !== 200"))
                {
                    throw new IOException("Status of request to " + path + " returned status: " + req.status);
                }

                string text = req.responseText;
                var resultArray = Bridge.Script.Write<dynamic>("new Uint8Array(text.length)");
                text.ToCharArray().ForEach((v, index, array) => resultArray[index] = (byte)(v & byte.MaxValue));
                return resultArray.buffer;
            }
        }

        internal static Task<byte[]> ReadBytesAsync(string path)
        {
            var tcs = new TaskCompletionSource<byte[]>();

            if (Bridge.Script.IsNode)
            {
                var fs = Bridge.Script.Write<dynamic>(@"require(""fs"")");
                fs.readFile(path, new Action<object, byte[]>((err, data) => {
                    if (err != null)
                    {
                        throw new IOException();
                    }

                    tcs.SetResult(data);
                }));
            }
            else
            {
                var req = Bridge.Script.Write<dynamic>("new XMLHttpRequest()");
                req.open("GET", path, true);
                req.overrideMimeType("text/plain; charset=binary-data");
                req.send(null);

                /*@
                req.onreadystatechange = function () {
                */
                    if (Bridge.Script.Write<bool>("req.readyState !== 4"))
                    {
                        Bridge.Script.Write("return;");
                    }

                    if (Bridge.Script.Write<bool>("req.status !== 200"))
                    {
                        throw new IOException("Status of request to " + path + " returned status: " + req.status);
                    }

                    string text = req.responseText;
                    var resultArray = Bridge.Script.Write<dynamic>("new Uint8Array(text.length)");
                    text.ToCharArray().ForEach((v, index, array) => resultArray[index] = (byte)(v & byte.MaxValue));
                    tcs.SetResult(resultArray.buffer);
                /*@
                };
                */
            }

            return tcs.Task;
        }
    }
}
