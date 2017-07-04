using Bridge;
using System;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
//using System.Security.Permissions;
using System.Threading;
using System.Threading.Tasks;

namespace System.IO
{
    
    
    [Serializable]
    [FileName("io.js")]
    public class MemoryStream : Stream
    {
        private byte[] _buffer;

        private int _origin;

        private int _position;

        private int _length;

        private int _capacity;

        private bool _expandable;

        private bool _writable;

        private bool _exposable;

        private bool _isOpen;

        //[NonSerialized]
        //private Task<int> _lastReadTask;

        private const int MemStreamMaxLength = 2147483647;

        
        public override bool CanRead
        {
            
            get
            {
                return this._isOpen;
            }
        }

        
        public override bool CanSeek
        {
            
            get
            {
                return this._isOpen;
            }
        }

        
        public override bool CanWrite
        {
            
            get
            {
                return this._writable;
            }
        }

        
        public virtual int Capacity
        {
            
            get
            {
                if (!this._isOpen)
                {
                    throw new Exception();
                }
                return this._capacity - this._origin;
            }
            
            set
            {
                if ((long)value < this.Length)
                {
                    throw new ArgumentOutOfRangeException("value"/*, Environment.GetResourceString("ArgumentOutOfRange_SmallCapacity")*/);
                }
                if (!this._isOpen)
                {
                    throw new Exception();
                }
                if (!this._expandable && value != this.Capacity)
                {
                    throw new NotSupportedException();
                }
                if (this._expandable && value != this._capacity)
                {
                    if (value <= 0)
                    {
                        this._buffer = null;
                    }
                    else
                    {
                        byte[] numArray = new byte[value];
                        if (this._length > 0)
                        {
                            Array.Copy(_buffer, 0, numArray, 0, _length);
                        }
                        this._buffer = numArray;
                    }
                    this._capacity = value;
                }
            }
        }

        
        public override long Length
        {
            
            get
            {
                if (!this._isOpen)
                {
                    throw new Exception();
                }
                return (long)(this._length - this._origin);
            }
        }

        
        public override long Position
        {
            
            get
            {
                if (!this._isOpen)
                {
                    throw new Exception();
                }
                return (long)(this._position - this._origin);
            }
            
            set
            {
                if (value < (long)0)
                {
                    throw new ArgumentOutOfRangeException("value"/*, Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum")*/);
                }
                if (!this._isOpen)
                {
                    throw new Exception();
                }
                if (value > 2147483647L)
                {
                    throw new ArgumentOutOfRangeException("value"/*, Environment.GetResourceString("ArgumentOutOfRange_StreamLength")*/);
                }
                this._position = this._origin + (int)value;
            }
        }

        
        public MemoryStream() : this(0)
        {
        }

        
        public MemoryStream(int capacity)
        {
            if (capacity < 0)
            {
                throw new ArgumentOutOfRangeException("capacity"/*, Environment.GetResourceString("ArgumentOutOfRange_NegativeCapacity")*/);
            }
            this._buffer = new byte[capacity];
            this._capacity = capacity;
            this._expandable = true;
            this._writable = true;
            this._exposable = true;
            this._origin = 0;
            this._isOpen = true;
        }

        
        public MemoryStream(byte[] buffer) : this(buffer, true)
        {
        }

        
        public MemoryStream(byte[] buffer, bool writable)
        {
            if (buffer == null)
            {
                throw new ArgumentNullException("buffer"/*, Environment.GetResourceString("ArgumentNull_Buffer")*/);
            }
            this._buffer = buffer;
            int length = (int)buffer.Length;
            int num = length;
            this._capacity = length;
            this._length = num;
            this._writable = writable;
            this._exposable = false;
            this._origin = 0;
            this._isOpen = true;
        }

        
        public MemoryStream(byte[] buffer, int index, int count) : this(buffer, index, count, true, false)
        {
        }

        
        public MemoryStream(byte[] buffer, int index, int count, bool writable) : this(buffer, index, count, writable, false)
        {
        }

        
        public MemoryStream(byte[] buffer, int index, int count, bool writable, bool publiclyVisible)
        {
            if (buffer == null)
            {
                throw new ArgumentNullException("buffer"/*, Environment.GetResourceString("ArgumentNull_Buffer")*/);
            }
            if (index < 0)
            {
                throw new ArgumentOutOfRangeException("index"/*, Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum")*/);
            }
            if (count < 0)
            {
                throw new ArgumentOutOfRangeException("count"/*, Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum")*/);
            }
            if ((int)buffer.Length - index < count)
            {
                throw new ArgumentException(/*Environment.GetResourceString("Argument_InvalidOffLen")*/);
            }
            this._buffer = buffer;
            int num = index;
            int num1 = num;
            this._position = num;
            this._origin = num1;
            int num2 = index + count;
            num1 = num2;
            this._capacity = num2;
            this._length = num1;
            this._writable = writable;
            this._exposable = publiclyVisible;
            this._expandable = false;
            this._isOpen = true;
        }

        
        //public override Task CopyToAsync(Stream destination, int bufferSize, CancellationToken cancellationToken)
        //{
        //    Task completedTask;
        //    if (destination == null)
        //    {
        //        throw new ArgumentNullException("destination");
        //    }
        //    if (bufferSize <= 0)
        //    {
        //        throw new ArgumentOutOfRangeException("bufferSize"/*, Environment.GetResourceString("ArgumentOutOfRange_NeedPosNum")*/);
        //    }
        //    if (!this.CanRead && !this.CanWrite)
        //    {
        //        throw new ObjectDisposedException(null, Environment.GetResourceString("ObjectDisposed_StreamClosed"));
        //    }
        //    if (!destination.CanRead && !destination.CanWrite)
        //    {
        //        throw new ObjectDisposedException("destination", Environment.GetResourceString("ObjectDisposed_StreamClosed"));
        //    }
        //    if (!this.CanRead)
        //    {
        //        throw new NotSupportedException(Environment.GetResourceString("NotSupported_UnreadableStream"));
        //    }
        //    if (!destination.CanWrite)
        //    {
        //        throw new NotSupportedException(Environment.GetResourceString("NotSupported_UnwritableStream"));
        //    }
        //    if (base.GetType() != typeof(MemoryStream))
        //    {
        //        return base.CopyToAsync(destination, bufferSize, cancellationToken);
        //    }
        //    if (cancellationToken.IsCancellationRequested)
        //    {
        //        return Task.FromCancellation(cancellationToken);
        //    }
        //    int num = this._position;
        //    int num1 = this.InternalEmulateRead(this._length - this._position);
        //    MemoryStream memoryStream = destination as MemoryStream;
        //    if (memoryStream == null)
        //    {
        //        return destination.WriteAsync(this._buffer, num, num1, cancellationToken);
        //    }
        //    try
        //    {
        //        memoryStream.Write(this._buffer, num, num1);
        //        completedTask = Task.CompletedTask;
        //    }
        //    catch (Exception exception)
        //    {
        //        completedTask = Task.FromException(exception);
        //    }
        //    return completedTask;
        //}

        
        protected override void Dispose(bool disposing)
        {
            try
            {
                if (disposing)
                {
                    this._isOpen = false;
                    this._writable = false;
                    this._expandable = false;
                    //this._lastReadTask = null;
                }
            }
            finally
            {
                base.Dispose(disposing);
            }
        }

        private bool EnsureCapacity(int value)
        {
            if (value < 0)
            {
                throw new IOException(/*Environment.GetResourceString("IO.IO_StreamTooLong")*/);
            }
            if (value <= this._capacity)
            {
                return false;
            }
            int num = value;
            if (num < 256)
            {
                num = 256;
            }
            if (num < this._capacity * 2)
            {
                num = this._capacity * 2;
            }
            if (this._capacity * 2 > 2147483591)
            {
                num = (value > 2147483591 ? value : 2147483591);
            }
            this.Capacity = num;
            return true;
        }

        private void EnsureWriteable()
        {
            if (!this.CanWrite)
            {
                throw new NotSupportedException();
            }
        }

        
        public override void Flush()
        {
        }

        
        
        
        //public override Task FlushAsync(CancellationToken cancellationToken)
        //{
        //    Task completedTask;
        //    if (cancellationToken.IsCancellationRequested)
        //    {
        //        return Task.FromCancellation(cancellationToken);
        //    }
        //    try
        //    {
        //        this.Flush();
        //        completedTask = Task.CompletedTask;
        //    }
        //    catch (Exception exception)
        //    {
        //        completedTask = Task.FromException(exception);
        //    }
        //    return completedTask;
        //}

        public virtual byte[] GetBuffer()
        {
            if (!this._exposable)
            {
                throw new Exception();
            }
            return this._buffer;
        }

        internal int InternalEmulateRead(int count)
        {
            if (!this._isOpen)
            {
                throw new Exception();
            }
            int num = this._length - this._position;
            if (num > count)
            {
                num = count;
            }
            if (num < 0)
            {
                num = 0;
            }
            this._position = this._position + num;
            return num;
        }

        internal byte[] InternalGetBuffer()
        {
            return this._buffer;
        }

        [FriendAccessAllowed]
        internal void InternalGetOriginAndLength(out int origin, out int length)
        {
            if (!this._isOpen)
            {
                throw new Exception();
            }
            origin = this._origin;
            length = this._length;
        }

        internal int InternalGetPosition()
        {
            if (!this._isOpen)
            {
                throw new Exception();
            }
            return this._position;
        }

        internal int InternalReadInt32()
        {
            if (!this._isOpen)
            {
                throw new Exception();
            }
            int num = this._position + 4;
            int num1 = num;
            this._position = num;
            int num2 = num1;
            if (num2 > this._length)
            {
                this._position = this._length;
                throw new IOException();
            }
            return this._buffer[num2 - 4] | this._buffer[num2 - 3] << 8 | this._buffer[num2 - 2] << 16 | this._buffer[num2 - 1] << 24;
        }

        
        public override int Read(/*[In]*/[Out] byte[] buffer, int offset, int count)
        {
            if (buffer == null)
            {
                throw new ArgumentNullException("buffer"/*, Environment.GetResourceString("ArgumentNull_Buffer")*/);
            }
            if (offset < 0)
            {
                throw new ArgumentOutOfRangeException("offset"/*, Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum")*/);
            }
            if (count < 0)
            {
                throw new ArgumentOutOfRangeException("count"/*, Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum")*/);
            }
            if ((int)buffer.Length - offset < count)
            {
                throw new ArgumentException(/*Environment.GetResourceString("Argument_InvalidOffLen")*/);
            }
            if (!this._isOpen)
            {
                throw new Exception();
            }
            int num = this._length - this._position;
            if (num > count)
            {
                num = count;
            }
            if (num <= 0)
            {
                return 0;
            }
            if (num > 8)
            {
                Array.Copy(_buffer, _position, buffer, offset, num);
            }
            else
            {
                int num1 = num;
                while (true)
                {
                    int num2 = num1 - 1;
                    num1 = num2;
                    if (num2 < 0)
                    {
                        break;
                    }
                    buffer[offset + num1] = this._buffer[this._position + num1];
                }
            }
            this._position = this._position + num;
            return num;
        }

        
        
        
        //public override Task<int> ReadAsync(byte[] buffer, int offset, int count, CancellationToken cancellationToken)
        //{
        //    Task<int> task;
        //    Task<int> task1;
        //    if (buffer == null)
        //    {
        //        throw new ArgumentNullException("buffer", Environment.GetResourceString("ArgumentNull_Buffer"));
        //    }
        //    if (offset < 0)
        //    {
        //        throw new ArgumentOutOfRangeException("offset", Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
        //    }
        //    if (count < 0)
        //    {
        //        throw new ArgumentOutOfRangeException("count", Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
        //    }
        //    if ((int)buffer.Length - offset < count)
        //    {
        //        throw new ArgumentException(Environment.GetResourceString("Argument_InvalidOffLen"));
        //    }
        //    if (cancellationToken.IsCancellationRequested)
        //    {
        //        return Task.FromCancellation<int>(cancellationToken);
        //    }
        //    try
        //    {
        //        int num = this.Read(buffer, offset, count);
        //        Task<int> task2 = this._lastReadTask;
        //        if (task2 == null || task2.Result != num)
        //        {
        //            Task<int> task3 = Task.FromResult<int>(num);
        //            task = task3;
        //            this._lastReadTask = task3;
        //            task1 = task;
        //        }
        //        else
        //        {
        //            task1 = task2;
        //        }
        //        task = task1;
        //    }
        //    catch (OperationCanceledException operationCanceledException)
        //    {
        //        task = Task.FromCancellation<int>(operationCanceledException);
        //    }
        //    catch (Exception exception)
        //    {
        //        task = Task.FromException<int>(exception);
        //    }
        //    return task;
        //}

        
        public override int ReadByte()
        {
            if (!this._isOpen)
            {
                throw new Exception();
            }
            if (this._position >= this._length)
            {
                return -1;
            }
            byte[] numArray = this._buffer;
            int num = this._position;
            this._position = num + 1;
            return numArray[num];
        }

        
        public override long Seek(long offset, SeekOrigin loc)
        {
            if (!this._isOpen)
            {
                throw new Exception();
            }
            if (offset > (long)2147483647)
            {
                throw new ArgumentOutOfRangeException("offset"/*, Environment.GetResourceString("ArgumentOutOfRange_StreamLength")*/);
            }
            switch (loc)
            {
                case SeekOrigin.Begin:
                    {
                        int num = this._origin + (int)offset;
                        if (offset < (long)0 || num < this._origin)
                        {
                            throw new IOException(/*Environment.GetResourceString("IO.IO_SeekBeforeBegin")*/);
                        }
                        this._position = num;
                        break;
                    }
                case SeekOrigin.Current:
                    {
                        int num1 = this._position + (int)offset;
                        if ((long)this._position + offset < (long)this._origin || num1 < this._origin)
                        {
                            throw new IOException(/*Environment.GetResourceString("IO.IO_SeekBeforeBegin")*/);
                        }
                        this._position = num1;
                        break;
                    }
                case SeekOrigin.End:
                    {
                        int num2 = this._length + (int)offset;
                        if ((long)this._length + offset < (long)this._origin || num2 < this._origin)
                        {
                            throw new IOException(/*Environment.GetResourceString("IO.IO_SeekBeforeBegin")*/);
                        }
                        this._position = num2;
                        break;
                    }
                default:
                    {
                        throw new ArgumentException(/*Environment.GetResourceString("Argument_InvalidSeekOrigin")*/);
                    }
            }
            return (long)this._position;
        }

        
        public override void SetLength(long value)
        {
            if (value < (long)0 || value > (long)2147483647)
            {
                throw new ArgumentOutOfRangeException("value"/*, Environment.GetResourceString("ArgumentOutOfRange_StreamLength")*/);
            }
            this.EnsureWriteable();
            if (value > (long)(2147483647 - this._origin))
            {
                throw new ArgumentOutOfRangeException("value"/*, Environment.GetResourceString("ArgumentOutOfRange_StreamLength")*/);
            }
            int num = this._origin + (int)value;
            if (!this.EnsureCapacity(num) && num > this._length)
            {
                Array.Clear(this._buffer, this._length, num - this._length);
            }
            this._length = num;
            if (this._position > num)
            {
                this._position = num;
            }
        }

        
        public virtual byte[] ToArray()
        {
            byte[] numArray = new byte[this._length - this._origin];
            Array.Copy(_buffer, _origin, numArray, 0, _length - _origin);
            return numArray;
        }

        
        public virtual bool TryGetBuffer(out ArraySegment<byte> buffer)
        {
            if (!this._exposable)
            {
                buffer = new ArraySegment<byte>();
                return false;
            }
            buffer = new ArraySegment<byte>(this._buffer, this._origin, this._length - this._origin);
            return true;
        }

        
        public override void Write(byte[] buffer, int offset, int count)
        {
            if (buffer == null)
            {
                throw new ArgumentNullException("buffer"/*, Environment.GetResourceString("ArgumentNull_Buffer")*/);
            }
            if (offset < 0)
            {
                throw new ArgumentOutOfRangeException("offset"/*, Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum")*/);
            }
            if (count < 0)
            {
                throw new ArgumentOutOfRangeException("count"/*, Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum")*/);
            }
            if ((int)buffer.Length - offset < count)
            {
                throw new ArgumentException(/*Environment.GetResourceString("Argument_InvalidOffLen")*/);
            }
            if (!this._isOpen)
            {
                throw new Exception();
            }
            this.EnsureWriteable();
            int num = this._position + count;
            if (num < 0)
            {
                throw new IOException(/*Environment.GetResourceString("IO.IO_StreamTooLong")*/);
            }
            if (num > this._length)
            {
                bool flag = this._position > this._length;
                if (num > this._capacity && this.EnsureCapacity(num))
                {
                    flag = false;
                }
                if (flag)
                {
                    Array.Clear(this._buffer, this._length, num - this._length);
                }
                this._length = num;
            }
            if (count > 8 || buffer == this._buffer)
            {
                Array.Copy(buffer, offset, _buffer, _position, count);
            }
            else
            {
                int num1 = count;
                while (true)
                {
                    int num2 = num1 - 1;
                    num1 = num2;
                    if (num2 < 0)
                    {
                        break;
                    }
                    this._buffer[this._position + num1] = buffer[offset + num1];
                }
            }
            this._position = num;
        }

        
        
        
        //public override Task WriteAsync(byte[] buffer, int offset, int count, CancellationToken cancellationToken)
        //{
        //    Task completedTask;
        //    if (buffer == null)
        //    {
        //        throw new ArgumentNullException("buffer", Environment.GetResourceString("ArgumentNull_Buffer"));
        //    }
        //    if (offset < 0)
        //    {
        //        throw new ArgumentOutOfRangeException("offset", Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
        //    }
        //    if (count < 0)
        //    {
        //        throw new ArgumentOutOfRangeException("count", Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
        //    }
        //    if ((int)buffer.Length - offset < count)
        //    {
        //        throw new ArgumentException(Environment.GetResourceString("Argument_InvalidOffLen"));
        //    }
        //    if (cancellationToken.IsCancellationRequested)
        //    {
        //        return Task.FromCancellation(cancellationToken);
        //    }
        //    try
        //    {
        //        this.Write(buffer, offset, count);
        //        completedTask = Task.CompletedTask;
        //    }
        //    catch (OperationCanceledException operationCanceledException)
        //    {
        //        completedTask = Task.FromCancellation<VoidTaskResult>(operationCanceledException);
        //    }
        //    catch (Exception exception)
        //    {
        //        completedTask = Task.FromException(exception);
        //    }
        //    return completedTask;
        //}

        
        public override void WriteByte(byte value)
        {
            if (!this._isOpen)
            {
                throw new Exception();
            }
            this.EnsureWriteable();
            if (this._position >= this._length)
            {
                int num = this._position + 1;
                bool flag = this._position > this._length;
                if (num >= this._capacity && this.EnsureCapacity(num))
                {
                    flag = false;
                }
                if (flag)
                {
                    Array.Clear(this._buffer, this._length, this._position - this._length);
                }
                this._length = num;
            }
            byte[] numArray = this._buffer;
            int num1 = this._position;
            this._position = num1 + 1;
            numArray[num1] = value;
        }

        
        public virtual void WriteTo(Stream stream)
        {
            if (stream == null)
            {
                throw new ArgumentNullException("stream"/*, Environment.GetResourceString("ArgumentNull_Stream")*/);
            }
            if (!this._isOpen)
            {
                throw new Exception();
            }
            stream.Write(this._buffer, this._origin, this._length - this._origin);
        }
    }
}