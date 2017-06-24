using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Runtime.InteropServices;

namespace System.IO
{
    [FileName("io.js")]
    public class FileStream : Stream
    {
        Bridge.Internal.Html5.ArrayBuffer _buffer;
        //string nodePath;
        public FileStream(string path, FileMode mode)
        {
            if (Browser.IsNodeJs)
            {
                var fs = Script.Write<dynamic>(@"require(""fs"")");
                _buffer = fs.readFileSync(path);
                //nodePath = path;
            }
            else
            {
                dynamic request = Script.Write<dynamic>("new XMLHttpRequest()");
                request.open("GET", path);
                request.send(null);
                request.responseType = "ArrayBuffer";
                _buffer = request.response;
            }
        }

        public override bool CanRead => true;

        public override bool CanSeek => false;

        public override bool CanWrite => /*nodePath != null*/false;

        public override long Length => _buffer.ByteLength;

        public override long Position { get; set; }

        public override void Flush()
        {
            throw new NotImplementedException();
        }

        [Script(@"
            if (buffer == null)
            {
                throw new System.ArgumentNullException(""buffer"");
            }
            if (offset< 0)
            {
                throw new System.ArgumentOutOfRangeException(""offset"");
            }
            if (count< 0)
            {
                throw new System.ArgumentOutOfRangeException(""count"");
            }
            if (this.Length.sub(System.Int64(offset)).lt(System.Int64(count)))
            {
    throw new System.ArgumentException();
}
            if (!this._isOpen)
            {
    throw new System.Exception();
}
var num = this.Length.sub(this.Position);
            if (num.gt(System.Int64(count)))
            {
    num = System.Int64(count);
}
            if (num.lte(System.Int64(0)))
            {
    return 0;
}
            if (num.gt(System.Int64(8)))
            {
    for (var n = 0; System.Int64(n).lt(num); n = (n + 1) | 0)
    {
        buffer[System.Array.index(((n + offset) | 0), buffer)] = this._buffer[System.Array.index(System.Int64.toNumber(this.Position.add(System.Int64(n))), this._buffer)];
    }
}
            else
            {
    var num1 = num;
    while (true)
    {
        var num2 = num1.sub(System.Int64(1));
        num1 = num2;
        if (num2.lt(System.Int64(0)))
        {
            break;
        }
        buffer[System.Array.index(System.Int64.toNumber(System.Int64(offset).add(num1)), buffer)] = this._buffer[System.Array.index(System.Int64.toNumber(this.Position.add(num1)), this._buffer)];
    }
}
            this.Position = this.Position.add(num);
            return System.Int64.clip32(num);")]
        public override extern int Read([Out] byte[] buffer, int offset, int count);

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

        [Name("System.IO.Filestream2")]
        private class FileStream2 : Stream
        {
            public override bool CanRead => true;

            public override bool CanSeek => false   ;
                 
            public override bool CanWrite => Browser.IsNodeJs;

            public override long Length => throw new NotImplementedException();

            public override long Position { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

            public override void Flush()
            {
                throw new NotImplementedException();
            }

            public override int Read([Out] byte[] buffer, int offset, int count)
            {
                throw new NotImplementedException();
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
        }
    }
}
