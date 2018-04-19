// ==++==
//
//   Copyright (c) Microsoft Corporation.  All rights reserved.
//
// ==--==
/*============================================================
**
** Class:  Stream
**
** <OWNER>gpaperin</OWNER>
**
**
** Purpose: Abstract base class for all Streams.  Provides
** default implementations of asynchronous reads & writes, in
** terms of the synchronous reads & writes (and vice versa).
**
**
===========================================================*/
/*
 * https://github.com/Microsoft/referencesource/blob/master/mscorlib/system/io/stream.cs
 */

using System;
using System.Runtime;
using System.Runtime.InteropServices;
using System.Security.Permissions;
using System.Diagnostics.Contracts;
using System.Reflection;

namespace System.IO
{
    public abstract class Stream : IDisposable
    {
        public static readonly Stream Null = new NullStream();

        //We pick a value that is the largest multiple of 4096 that is still smaller than the large object heap threshold (85K).
        // The CopyTo/CopyToAsync buffer is short-lived and is likely to be collected at Gen0, and it offers a significant
        // improvement in Copy performance.
        private const int _DefaultCopyBufferSize = 81920;

        public abstract bool CanRead
        {
            [Pure]
            get;
        }

        // If CanSeek is false, Position, Seek, Length, and SetLength should throw.
        public abstract bool CanSeek
        {
            [Pure]
            get;
        }

        [ComVisible(false)]
        public virtual bool CanTimeout
        {
            [Pure]
            get
            {
                return false;
            }
        }

        public abstract bool CanWrite
        {
            [Pure]
            get;
        }

        public abstract long Length
        {
            get;
        }

        public abstract long Position
        {
            get;
            set;
        }

        [ComVisible(false)]
        public virtual int ReadTimeout
        {
            get
            {
                Contract.Ensures(Contract.Result<int>() >= 0);
                throw new InvalidOperationException();
            }
            set
            {
                throw new InvalidOperationException();
            }
        }

        [ComVisible(false)]
        public virtual int WriteTimeout
        {
            get
            {
                Contract.Ensures(Contract.Result<int>() >= 0);
                throw new InvalidOperationException();
            }
            set
            {
                throw new InvalidOperationException();
            }
        }

        // Reads the bytes from the current stream and writes the bytes to
        // the destination stream until all bytes are read, starting at
        // the current position.
        public void CopyTo(Stream destination)
        {
            if (destination == null)
                throw new ArgumentNullException("destination");
            if (!CanRead && !CanWrite)
                throw new Exception();
            if (!destination.CanRead && !destination.CanWrite)
                throw new Exception("destination");
            if (!CanRead)
                throw new NotSupportedException();
            if (!destination.CanWrite)
                throw new NotSupportedException();
            Contract.EndContractBlock();

            InternalCopyTo(destination, _DefaultCopyBufferSize);
        }

        public void CopyTo(Stream destination, int bufferSize)
        {
            if (destination == null)
                throw new ArgumentNullException("destination");
            if (bufferSize <= 0)
                throw new ArgumentOutOfRangeException("bufferSize");
            if (!CanRead && !CanWrite)
                throw new Exception();
            if (!destination.CanRead && !destination.CanWrite)
                throw new Exception("destination");
            if (!CanRead)
                throw new NotSupportedException();
            if (!destination.CanWrite)
                throw new NotSupportedException();
            Contract.EndContractBlock();

            InternalCopyTo(destination, bufferSize);
        }

        private void InternalCopyTo(Stream destination, int bufferSize)
        {
            Contract.Requires(destination != null);
            Contract.Requires(CanRead);
            Contract.Requires(destination.CanWrite);
            Contract.Requires(bufferSize > 0);

            byte[] buffer = new byte[bufferSize];
            int read;
            while ((read = Read(buffer, 0, buffer.Length)) != 0)
                destination.Write(buffer, 0, read);
        }


        // Stream used to require that all cleanup logic went into Close(),
        // which was thought up before we invented IDisposable.  However, we
        // need to follow the IDisposable pattern so that users can write
        // sensible subclasses without needing to inspect all their base
        // classes, and without worrying about version brittleness, from a
        // base class switching to the Dispose pattern.  We're moving
        // Stream to the Dispose(bool) pattern - that's where all subclasses
        // should put their cleanup starting in V2.
        public virtual void Close()
        {
            /* These are correct, but we'd have to fix PipeStream & NetworkStream very carefully.
            Contract.Ensures(CanRead == false);
            Contract.Ensures(CanWrite == false);
            Contract.Ensures(CanSeek == false);
            */

            Dispose(true);
        }

        public void Dispose()
        {
            /* These are correct, but we'd have to fix PipeStream & NetworkStream very carefully.
            Contract.Ensures(CanRead == false);
            Contract.Ensures(CanWrite == false);
            Contract.Ensures(CanSeek == false);
            */

            Close();
        }


        protected virtual void Dispose(bool disposing)
        {
            // Note: Never change this to call other virtual methods on Stream
            // like Write, since the state on subclasses has already been
            // torn down.  This is the last code to run on cleanup for a stream.
        }

        public abstract void Flush();

        [HostProtection(ExternalThreading = true)]
        public virtual IAsyncResult BeginRead(byte[] buffer, int offset, int count, AsyncCallback callback, Object state)
        {
            Contract.Ensures(Contract.Result<IAsyncResult>() != null);
            return BeginReadInternal(buffer, offset, count, callback, state, serializeAsynchronously: false);
        }

        [HostProtection(ExternalThreading = true)]
        internal IAsyncResult BeginReadInternal(byte[] buffer, int offset, int count, AsyncCallback callback, Object state, bool serializeAsynchronously)
        {
            Contract.Ensures(Contract.Result<IAsyncResult>() != null);
            if (!CanRead) __Error.ReadNotSupported();

            return BlockingBeginRead(buffer, offset, count, callback, state);
        }

        public virtual int EndRead(IAsyncResult asyncResult)
        {
            if (asyncResult == null)
                throw new ArgumentNullException("asyncResult");
            Contract.Ensures(Contract.Result<int>() >= 0);
            Contract.EndContractBlock();

            return BlockingEndRead(asyncResult);
        }

        public virtual IAsyncResult BeginWrite(byte[] buffer, int offset, int count, AsyncCallback callback, Object state)
        {
            Contract.Ensures(Contract.Result<IAsyncResult>() != null);
            return BeginWriteInternal(buffer, offset, count, callback, state, serializeAsynchronously: false);
        }

        [HostProtection(ExternalThreading = true)]
        internal IAsyncResult BeginWriteInternal(byte[] buffer, int offset, int count, AsyncCallback callback, Object state, bool serializeAsynchronously)
        {
            Contract.Ensures(Contract.Result<IAsyncResult>() != null);
            if (!CanWrite) __Error.WriteNotSupported();
            return BlockingBeginWrite(buffer, offset, count, callback, state);
        }

        public virtual void EndWrite(IAsyncResult asyncResult)
        {
            if (asyncResult == null)
                throw new ArgumentNullException("asyncResult");
            Contract.EndContractBlock();

            BlockingEndWrite(asyncResult);
        }

        public abstract long Seek(long offset, SeekOrigin origin);

        public abstract void SetLength(long value);

        public abstract int Read([In, Out] byte[] buffer, int offset, int count);

        // Reads one byte from the stream by calling Read(byte[], int, int).
        // Will return an unsigned byte cast to an int or -1 on end of stream.
        // This implementation does not perform well because it allocates a new
        // byte[] each time you call it, and should be overridden by any
        // subclass that maintains an internal buffer.  Then, it can help perf
        // significantly for people who are reading one byte at a time.
        public virtual int ReadByte()
        {
            Contract.Ensures(Contract.Result<int>() >= -1);
            Contract.Ensures(Contract.Result<int>() < 256);

            byte[] oneByteArray = new byte[1];
            int r = Read(oneByteArray, 0, 1);
            if (r == 0)
                return -1;
            return oneByteArray[0];
        }

        public abstract void Write(byte[] buffer, int offset, int count);

        // Writes one byte from the stream by calling Write(byte[], int, int).
        // This implementation does not perform well because it allocates a new
        // byte[] each time you call it, and should be overridden by any
        // subclass that maintains an internal buffer.  Then, it can help perf
        // significantly for people who are writing one byte at a time.
        public virtual void WriteByte(byte value)
        {
            byte[] oneByteArray = new byte[1];
            oneByteArray[0] = value;
            Write(oneByteArray, 0, 1);
        }

        public static Stream Synchronized(Stream stream)
        {
            if (stream == null)
                throw new ArgumentNullException("stream");
            Contract.Ensures(Contract.Result<Stream>() != null);
            Contract.EndContractBlock();

            return stream;
        }

        internal IAsyncResult BlockingBeginRead(byte[] buffer, int offset, int count, AsyncCallback callback, Object state)
        {
            Contract.Ensures(Contract.Result<IAsyncResult>() != null);

            // To avoid a race with a stream's position pointer & generating ----
            // conditions with internal buffer indexes in our own streams that
            // don't natively support async IO operations when there are multiple
            // async requests outstanding, we will block the application's main
            // thread and do the IO synchronously.
            // This can't perform well - use a different approach.
            SynchronousAsyncResult asyncResult;
            try
            {
                int numRead = Read(buffer, offset, count);
                asyncResult = new SynchronousAsyncResult(numRead, state);
            }
            catch (IOException ex)
            {
                asyncResult = new SynchronousAsyncResult(ex, state, isWrite: false);
            }

            if (callback != null)
            {
                callback(asyncResult);
            }

            return asyncResult;
        }

        internal static int BlockingEndRead(IAsyncResult asyncResult)
        {
            Contract.Ensures(Contract.Result<int>() >= 0);

            return SynchronousAsyncResult.EndRead(asyncResult);
        }

        internal IAsyncResult BlockingBeginWrite(byte[] buffer, int offset, int count, AsyncCallback callback, Object state)
        {
            Contract.Ensures(Contract.Result<IAsyncResult>() != null);

            // To avoid a race with a stream's position pointer & generating ----
            // conditions with internal buffer indexes in our own streams that
            // don't natively support async IO operations when there are multiple
            // async requests outstanding, we will block the application's main
            // thread and do the IO synchronously.
            // This can't perform well - use a different approach.
            SynchronousAsyncResult asyncResult;
            try
            {
                Write(buffer, offset, count);
                asyncResult = new SynchronousAsyncResult(state);
            }
            catch (IOException ex)
            {
                asyncResult = new SynchronousAsyncResult(ex, state, isWrite: true);
            }

            if (callback != null)
            {
                callback(asyncResult);
            }

            return asyncResult;
        }

        internal static void BlockingEndWrite(IAsyncResult asyncResult)
        {
            SynchronousAsyncResult.EndWrite(asyncResult);
        }

        [Serializable]
        private sealed class NullStream : Stream
        {
            internal NullStream()
            {
            }

            public override bool CanRead
            {
                [Pure]
                get
                {
                    return true;
                }
            }

            public override bool CanWrite
            {
                [Pure]
                get
                {
                    return true;
                }
            }

            public override bool CanSeek
            {
                [Pure]
                get
                {
                    return true;
                }
            }

            public override long Length
            {
                get
                {
                    return 0;
                }
            }

            public override long Position
            {
                get
                {
                    return 0;
                }
                set
                {
                }
            }

            protected override void Dispose(bool disposing)
            {
                // Do nothing - we don't want NullStream singleton (static) to be closable
            }

            public override void Flush()
            {
            }

            [HostProtection(ExternalThreading = true)]
            public override IAsyncResult BeginRead(byte[] buffer, int offset, int count, AsyncCallback callback, Object state)
            {
                if (!CanRead) __Error.ReadNotSupported();

                return BlockingBeginRead(buffer, offset, count, callback, state);
            }

            public override int EndRead(IAsyncResult asyncResult)
            {
                if (asyncResult == null)
                    throw new ArgumentNullException("asyncResult");
                Contract.EndContractBlock();

                return BlockingEndRead(asyncResult);
            }

            [HostProtection(ExternalThreading = true)]
            public override IAsyncResult BeginWrite(byte[] buffer, int offset, int count, AsyncCallback callback, Object state)
            {
                if (!CanWrite) __Error.WriteNotSupported();

                return BlockingBeginWrite(buffer, offset, count, callback, state);
            }

            public override void EndWrite(IAsyncResult asyncResult)
            {
                if (asyncResult == null)
                    throw new ArgumentNullException("asyncResult");
                Contract.EndContractBlock();

                BlockingEndWrite(asyncResult);
            }

            public override int Read([In, Out] byte[] buffer, int offset, int count)
            {
                return 0;
            }

            public override int ReadByte()
            {
                return -1;
            }

            public override void Write(byte[] buffer, int offset, int count)
            {
            }

            public override void WriteByte(byte value)
            {
            }

            public override long Seek(long offset, SeekOrigin origin)
            {
                return 0;
            }

            public override void SetLength(long length)
            {
            }
        }


        /// <summary>Used as the IAsyncResult object when using asynchronous IO methods on the base Stream class.</summary>
        internal sealed class SynchronousAsyncResult : IAsyncResult
        {

            private readonly Object _stateObject;
            private readonly bool _isWrite;
            //private ManualResetEvent _waitHandle;
            private Exception _exceptionInfo;

            private bool _endXxxCalled;
            private Int32 _bytesRead;

            internal SynchronousAsyncResult(Int32 bytesRead, Object asyncStateObject)
            {
                _bytesRead = bytesRead;
                _stateObject = asyncStateObject;
                //_isWrite = false;
            }

            internal SynchronousAsyncResult(Object asyncStateObject)
            {
                _stateObject = asyncStateObject;
                _isWrite = true;
            }

            internal SynchronousAsyncResult(Exception ex, Object asyncStateObject, bool isWrite)
            {
                _exceptionInfo = ex;
                _stateObject = asyncStateObject;
                _isWrite = isWrite;
            }

            public bool IsCompleted
            {
                // We never hand out objects of this type to the user before the synchronous IO completed:
                get
                {
                    return true;
                }
            }

            /*public WaitHandle AsyncWaitHandle {
                get {
                    return LazyInitializer.EnsureInitialized(ref _waitHandle, () => new ManualResetEvent(true));
                }
            }*/

            public Object AsyncState
            {
                get
                {
                    return _stateObject;
                }
            }

            public bool CompletedSynchronously
            {
                get
                {
                    return true;
                }
            }

            internal void ThrowIfError()
            {
                if (_exceptionInfo != null)
                    throw _exceptionInfo;
            }

            internal static Int32 EndRead(IAsyncResult asyncResult)
            {

                SynchronousAsyncResult ar = asyncResult as SynchronousAsyncResult;
                if (ar == null || ar._isWrite)
                    __Error.WrongAsyncResult();

                if (ar._endXxxCalled)
                    __Error.EndReadCalledTwice();

                ar._endXxxCalled = true;

                ar.ThrowIfError();
                return ar._bytesRead;
            }

            internal static void EndWrite(IAsyncResult asyncResult)
            {

                SynchronousAsyncResult ar = asyncResult as SynchronousAsyncResult;
                if (ar == null || !ar._isWrite)
                    __Error.WrongAsyncResult();

                if (ar._endXxxCalled)
                    __Error.EndWriteCalledTwice();

                ar._endXxxCalled = true;

                ar.ThrowIfError();
            }
        }   // class SynchronousAsyncResult
    }
}
