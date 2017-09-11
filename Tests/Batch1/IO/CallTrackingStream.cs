// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;

namespace Bridge.ClientTest.IO
{
    public class CallTrackingStream : Stream
    {
        private readonly Dictionary<string, int> _callCounts; // maps names of methods -> how many times they were called

        public CallTrackingStream(Stream inner)
        {
            Debug.Assert(inner != null);

            Inner = inner;
            _callCounts = new Dictionary<string, int>();
        }

        public Stream Inner
        {
            get;
        }

        // Overridden Stream properties

        public override bool CanRead => Read(Inner.CanRead, "CanRead");
        public override bool CanWrite => Read(Inner.CanWrite, "CanWrite");
        public override bool CanSeek => Read(Inner.CanSeek, "CanSeek");
        public override bool CanTimeout => Read(Inner.CanTimeout, "CanTimeout");

        public override long Length => Read(Inner.Length, "Length");

        public override long Position
        {
            get
            {
                return Read(Inner.Position, "Position");
            }
            set
            {
                Update(() => Inner.Position = value, "Position");
            }
        }

        public override int ReadTimeout
        {
            get
            {
                return Read(Inner.ReadTimeout, "ReadTimeout");
            }
            set
            {
                Update(() => Inner.ReadTimeout = value, "ReadTimeout");
            }
        }

        public override int WriteTimeout
        {
            get
            {
                return Read(Inner.WriteTimeout, "WriteTimeout");
            }
            set
            {
                Update(() => Inner.WriteTimeout = value, "WriteTimeout");
            }
        }

        // Arguments we record
        // We can just use regular, auto-implemented properties for these,
        // since we know none of them are going to be called by the framework

        public Stream CopyToAsyncDestination
        {
            get; private set;
        }
        public int CopyToAsyncBufferSize
        {
            get; private set;
        }
        public CancellationToken CopyToAsyncCancellationToken
        {
            get; private set;
        }

        public bool DisposeDisposing
        {
            get; private set;
        }

        public CancellationToken FlushAsyncCancellationToken
        {
            get; private set;
        }

        public byte[] ReadBuffer
        {
            get; private set;
        }
        public int ReadOffset
        {
            get; private set;
        }
        public int ReadCount
        {
            get; private set;
        }

        public byte[] ReadAsyncBuffer
        {
            get; private set;
        }
        public int ReadAsyncOffset
        {
            get; private set;
        }
        public int ReadAsyncCount
        {
            get; private set;
        }
        public CancellationToken ReadAsyncCancellationToken
        {
            get; private set;
        }

        public long SeekOffset
        {
            get; private set;
        }
        public SeekOrigin SeekOrigin
        {
            get; private set;
        }

        public long SetLengthValue
        {
            get; private set;
        }

        public byte[] WriteBuffer
        {
            get; private set;
        }
        public int WriteOffset
        {
            get; private set;
        }
        public int WriteCount
        {
            get; private set;
        }

        public byte[] WriteAsyncBuffer
        {
            get; private set;
        }
        public int WriteAsyncOffset
        {
            get; private set;
        }
        public int WriteAsyncCount
        {
            get; private set;
        }
        public CancellationToken WriteAsyncCancellationToken
        {
            get; private set;
        }

        public byte WriteByteValue
        {
            get; private set;
        }

        // Overridden methods

        // Skip Dispose; it's not accessible to us since the virtual overload is protected

        public override void Flush()
        {
            UpdateCallCount("Flush");
            Inner.Flush();
        }

        public override int Read(byte[] buffer, int offset, int count)
        {
            UpdateCallCount("Read");
            ReadBuffer = buffer;
            ReadOffset = offset;
            ReadCount = count;
            return Inner.Read(buffer, offset, count);
        }

        public override int ReadByte()
        {
            UpdateCallCount("ReadByte");
            return Inner.ReadByte();
        }

        public override long Seek(long offset, SeekOrigin origin)
        {
            UpdateCallCount("Seek");
            SeekOffset = offset;
            SeekOrigin = origin;
            return Inner.Seek(offset, origin);
        }

        public override void SetLength(long value)
        {
            UpdateCallCount("SetLength");
            SetLengthValue = value;
            Inner.SetLength(value);
        }

        public override void Write(byte[] buffer, int offset, int count)
        {
            UpdateCallCount("Write");
            WriteBuffer = buffer;
            WriteOffset = offset;
            WriteCount = count;
            Inner.Write(buffer, offset, count);
        }

        public override void WriteByte(byte value)
        {
            UpdateCallCount("WriteByte");
            WriteByteValue = value;
            Inner.WriteByte(value);
        }

        // Bookkeeping logic

        public int TimesCalled(string member)
        {
            int result;
            _callCounts.TryGetValue(member, out result);
            return result; // not present means we haven't called it yet, so return 0
        }

        // [CallerMemberName] causes the member parameter to be set to the name
        // of the calling member if not specified, e.g. calling this method
        // from SetLength would pass in member with a value of "SetLength"
        private T Read<T>(T property, string member)
        {
            UpdateCallCount(member);
            return property;
        }

        private void Update(Action setter, string member)
        {
            UpdateCallCount(member);
            setter();
        }

        private void UpdateCallCount(string member)
        {
            _callCounts[member] = TimesCalled(member) + 1;
        }
    }
}
