using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Runtime.InteropServices;

namespace System.IO
{
    [Enum(Emit.Value), External]
    public enum FileMode
    {
        /// <summary>
        /// Specifies that the operating system should create a new file. If the file already
        /// exists, it will be overwritten. This requires System.Security.Permissions.FileIOPermissionAccess.Write
        /// permission. FileMode.Create is equivalent to requesting that if the file does
        /// not exist, use System.IO.FileMode.CreateNew; otherwise, use System.IO.FileMode.Truncate.
        /// If the file already exists but is a hidden file, an System.UnauthorizedAccessException
        /// exception is thrown.
        /// </summary>
        Create = 2,
        /// <summary>
        /// Specifies that the operating system should open an existing file. The ability
        /// to open the file is dependent on the value specified by the System.IO.FileAccess
        /// enumeration. A System.IO.FileNotFoundException exception is thrown if the file
        /// does not exist.
        /// </summary>
        Open,
        /// <summary>
        /// Specifies that the operating system should open a file if it exists; otherwise,
        /// a new file should be created. If the file is opened with FileAccess.Read, System.Security.Permissions.FileIOPermissionAccess.Read
        /// permission is required. If the file access is FileAccess.Write, System.Security.Permissions.FileIOPermissionAccess.Write
        /// permission is required. If the file is opened with FileAccess.ReadWrite, both
        /// System.Security.Permissions.FileIOPermissionAccess.Read and System.Security.Permissions.FileIOPermissionAccess.Write
        /// permissions are required.
        /// </summary>
        OpenOrCreate,
        /// <summary>
        /// Specifies that the operating system should open an existing file. When the file
        /// is opened, it should be truncated so that its size is zero bytes. This requires
        /// System.Security.Permissions.FileIOPermissionAccess.Write permission. Attempts
        /// to read from a file opened with FileMode.Truncate cause an System.ArgumentException
        /// exception. 
        /// </summary>
        Truncate,
        /// <summary>
        /// Opens the file if it exists and seeks to the end of the file, or creates a new
        /// file. This requires System.Security.Permissions.FileIOPermissionAccess.Append
        /// permission. FileMode.Append can be used only in conjunction with FileAccess.Write.
        /// Trying to seek to a position before the end of the file throws an System.IO.IOException
        /// exception, and any attempt to read fails and throws a System.NotSupportedException
        /// exception.
        /// </summary>
        Append
    }

    [FileName("io.js")]
    public class FileStream : Stream
    {
        Bridge.Internal.Html5.ArrayBuffer _buffer;
        //string nodePath;
        public FileStream(string path, FileMode mode)
        {
            _buffer = File.ReadAllBytesAsBuffer(path);
        }

        public override bool CanRead => true;

        public override bool CanSeek => false;

        public override bool CanWrite => false;

        public override long Length => _buffer.ByteLength;

        public override long Position { get; set; }

        public override void Flush() { }
        #region [Script(@"...")]
        [Script(@"
            if (buffer == null)
            {
                throw new System.ArgumentNullException(""buffer"");
            }
            if (offset < 0)
            {
                throw new System.ArgumentOutOfRangeException(""offset"");
            }
            if (count < 0)
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
#endregion
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
    }
}
