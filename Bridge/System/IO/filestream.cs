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
using System;
using System.Security.Permissions;
using System.Threading;
using System.Runtime.InteropServices;
using Bridge;
using Bridge.Internal.Html5;
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
    [External]
    [Namespace(false)]
    internal class FileReader
    {
        public extern FileReader();

        [Convention(Notation.LowerCamelCase)]
        public extern void ReadAsArrayBuffer(Bridge.Internal.Html5.File file);

        [Convention(Notation.LowerCamelCase)]
        public readonly ArrayBuffer Result;

        [Convention(Notation.LowerCase)]
        public Action OnLoad;

        [Convention(Notation.LowerCase)]
        public Action<object> OnError;
    }

    [Reflectable]
    [FileName("system\\IO\\io.js")]
    [Convention]
    public class FileStream : Stream
    {
        private string name;
        ArrayBuffer _buffer;

        public FileStream(string path, FileMode mode)
        {
            this._buffer = FileStream.ReadBytes(path);
            this.name = path;
        }

        internal FileStream(ArrayBuffer buffer, string name)
        {
            this._buffer = buffer;
            this.name = name;
        }

        internal static Task<FileStream> FromFile(Bridge.Internal.Html5.File file)
        {
            var completer = new System.Threading.Tasks.TaskCompletionSource<FileStream>();
            var fileReader = new FileReader();
            fileReader.OnLoad = () =>
            {
                completer.SetResult(new FileStream(fileReader.Result, file.Name));
            };
            fileReader.OnError = (e) =>
            {
                completer.SetException(new ErrorException(e.As<dynamic>().target.error.As<string>()));
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
                return _buffer.ByteLength;
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

            if ((this.Length - offset) < count)
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

            var byteBuffer = new Uint8Array(this._buffer);
            if (num > 8)
            {
                for (var n = 0; n < num; n++)
                {
                    buffer[n + offset] = byteBuffer[(int)(this.Position + n)];
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
                    buffer[offset + num1] = byteBuffer[(int)(this.Position + num1)];
                }
            }
            this.Position += num;
            return (int)num;
        }

        internal static ArrayBuffer ReadBytes(string path)
        {
            if (Script.IsNode)
            {
                var fs = Script.Write<dynamic>(@"require(""fs"")");
                return ((ArrayBuffer)fs.readFileSync(path));
            }
            else
            {
                var req = new XMLHttpRequest();
                req.Open("GET", path, false);
                req.OverrideMimeType("text/plain; charset=binary-data");
                req.Send(null);
                if (req.Status != 200)
                {
                    throw new IOException($"Status of request to {path} returned status: {req.Status}");
                }
                string text = req.ResponseText;
                var resultArray = new Uint8Array(text.Length);
                text.ToCharArray().ForEach((v, index, array) => resultArray[index] = (byte)(v & byte.MaxValue));
                return resultArray.Buffer;
            }
        }
    }
}
