// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace Bridge.ClientTest.IO
{
    /// <summary>Provides a stream whose implementation is supplied by delegates.</summary>
    internal sealed class DelegateStream : Stream
    {
        private readonly Func<bool> _canReadFunc;
        private readonly Func<bool> _canSeekFunc;
        private readonly Func<bool> _canWriteFunc;
        private readonly Action _flushFunc = null;
        private readonly Func<long> _lengthFunc;
        private readonly Func<long> _positionGetFunc;
        private readonly Action<long> _positionSetFunc;
        private readonly Func<byte[], int, int, int> _readFunc;
        private readonly Func<long, SeekOrigin, long> _seekFunc;
        private readonly Action<long> _setLengthFunc;
        private readonly Action<byte[], int, int> _writeFunc;

        public DelegateStream(
            Func<bool> canReadFunc = null,
            Func<bool> canSeekFunc = null,
            Func<bool> canWriteFunc = null,
            Action flushFunc = null,
            Func<CancellationToken, Task> flushAsyncFunc = null,
            Func<long> lengthFunc = null,
            Func<long> positionGetFunc = null,
            Action<long> positionSetFunc = null,
            Func<byte[], int, int, int> readFunc = null,
            Func<byte[], int, int, CancellationToken, Task<int>> readAsyncFunc = null,
            Func<long, SeekOrigin, long> seekFunc = null,
            Action<long> setLengthFunc = null,
            Action<byte[], int, int> writeFunc = null,
            Func<byte[], int, int, CancellationToken, Task> writeAsyncFunc = null)
        {
            _canReadFunc = canReadFunc ?? (() => false);
            _canSeekFunc = canSeekFunc ?? (() => false);
            _canWriteFunc = canWriteFunc ?? (() => false);

            _flushFunc = flushFunc ?? (() => { });

            _lengthFunc = lengthFunc ?? (() => { throw new NotSupportedException(); });
            _positionSetFunc = positionSetFunc ?? (_ => { throw new NotSupportedException(); });
            _positionGetFunc = positionGetFunc ?? (() => { throw new NotSupportedException(); });

            if (readAsyncFunc != null && readFunc == null)
                throw new InvalidOperationException("If reads are supported, must provide a synchronous read implementation");
            _readFunc = readFunc;

            _seekFunc = seekFunc ?? ((_, __) => { throw new NotSupportedException(); });
            _setLengthFunc = setLengthFunc ?? (_ => { throw new NotSupportedException(); });

            if (writeAsyncFunc != null && writeFunc == null)
                throw new InvalidOperationException("If writes are supported, must provide a synchronous write implementation");
            _writeFunc = writeFunc;
        }

        public override bool CanRead
        {
            get
            {
                return _canReadFunc();
            }
        }
        public override bool CanSeek
        {
            get
            {
                return _canSeekFunc();
            }
        }
        public override bool CanWrite
        {
            get
            {
                return _canWriteFunc();
            }
        }

        public override void Flush()
        {
            _flushFunc();
        }

        public override long Length
        {
            get
            {
                return _lengthFunc();
            }
        }
        public override long Position
        {
            get
            {
                return _positionGetFunc();
            }
            set
            {
                _positionSetFunc(value);
            }
        }

        public override int Read(byte[] buffer, int offset, int count)
        {
            return _readFunc(buffer, offset, count);
        }

        public override long Seek(long offset, SeekOrigin origin)
        {
            return _seekFunc(offset, origin);
        }
        public override void SetLength(long value)
        {
            _setLengthFunc(value);
        }

        public override void Write(byte[] buffer, int offset, int count)
        {
            _writeFunc(buffer, offset, count);
        }
    }
}
