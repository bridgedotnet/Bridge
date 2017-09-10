// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Bridge.ClientTest.IO
{
    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "BufferedStream_Stream - {0}")]
    public class BufferedStream_Stream
    {
        private Stream CreateStream()
        {
            return new BufferedStream(new MemoryStream());
        }

        [Test]
        public void CopyToTest()
        {
            byte[] data = Enumerable.Range(0, 1000).Select(i => (byte)(i % 256)).ToArray();

            Stream ms = CreateStream();
            ms.Write(data, 0, data.Length);
            ms.Position = 0;

            var ms2 = new MemoryStream();
            ms.CopyTo(ms2);

            Assert.AreEqual(data, ms2.ToArray());
        }

        [Test]
        public void UnderlyingStreamThrowsExceptions()
        {
            var stream = new BufferedStream(new ThrowsExceptionStream());

            Assert.Throws(() => stream.Read(new byte[1], 0, 1));

            Assert.Throws(() => stream.Write(new byte[10000], 0, 10000));

            stream.WriteByte(1);
            Assert.Throws(() => stream.Flush());
        }

        [Test]
        public void CopyToTest_RequiresFlushingOfWrites()
        {
            byte[] data = Enumerable.Range(0, 1000).Select(i => (byte)(i % 256)).ToArray();

            var manualReleaseStream = new MemoryStream();
            var src = new BufferedStream(manualReleaseStream);
            src.Write(data, 0, data.Length);
            src.Position = 0;

            var dst = new MemoryStream();

            data[0] = 42;
            src.WriteByte(42);
            dst.WriteByte(42);

            src.CopyTo(dst);

            Assert.AreEqual(data, dst.ToArray());
        }

        [Test]
        public void CopyToTest_ReadBeforeCopy_CopiesAllData()
        {
            byte[] data = Enumerable.Range(0, 1000).Select(i => (byte)(i % 256)).ToArray();

            var wrapped = new MemoryStream();
            wrapped.Write(data, 0, data.Length);
            wrapped.Position = 0;
            var src = new BufferedStream(wrapped, 100);

            src.ReadByte();

            var dst = new MemoryStream();
            src.CopyTo(dst);

            var expected = new byte[data.Length - 1];
            Array.Copy(data, 1, expected, 0, expected.Length);
            Assert.AreEqual(expected, dst.ToArray());
        }
    }

    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "BufferedStream_StreamMethods - {0}")]
    public class BufferedStream_StreamMethods : StreamMethods
    {
        protected override Stream CreateStream()
        {
            return new BufferedStream(new MemoryStream());
        }

        protected override Stream CreateStream(int bufferSize)
        {
            return new BufferedStream(new MemoryStream(), bufferSize);
        }

        [Test]
        public void ReadByte_ThenRead_EndOfStreamCorrectlyFound()
        {
            using (var s = new BufferedStream(new MemoryStream(new byte[] { 1, 2 }), 2))
            {
                Assert.AreEqual(1, s.ReadByte());
                Assert.AreEqual(2, s.ReadByte());
                Assert.AreEqual(-1, s.ReadByte());

                Assert.AreEqual(0, s.Read(new byte[1], 0, 1));
                Assert.AreEqual(0, s.Read(new byte[1], 0, 1));
            }
        }
    }

    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "BufferedStream_TestLeaveOpen - {0}")]
    public class BufferedStream_TestLeaveOpen : TestLeaveOpen
    {
        protected override Stream CreateStream()
        {
            return new BufferedStream(new MemoryStream());
        }
    }

    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "StreamWriterWithBufferedStream_CloseTests - {0}")]
    public class StreamWriterWithBufferedStream_CloseTests : CloseTests
    {
        protected override Stream CreateStream()
        {
            return new BufferedStream(new MemoryStream());
        }
    }

    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "StreamWriterWithBufferedStream_FlushTests - {0}")]
    public class StreamWriterWithBufferedStream_FlushTests : FlushTests
    {
        protected override Stream CreateStream()
        {
            return new BufferedStream(new MemoryStream());
        }

        [Test]
        public void WriteAfterRead_NonSeekableStream_Throws()
        {
            var wrapped = new WrappedMemoryStream(canRead: true, canWrite: true, canSeek: false, data: new byte[] { 1, 2, 3, 4, 5 });
            var s = new BufferedStream(wrapped);

            s.Read(new byte[3], 0, 3);
            Assert.Throws<NotSupportedException>(() => s.Write(new byte[10], 0, 10));
        }
    }

    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "StreamWriterWithBufferedStream_WriteTests - {0}")]
    public class StreamWriterWithBufferedStream_WriteTests : WriteTests
    {
        protected override Stream CreateStream()
        {
            return new BufferedStream(new MemoryStream());
        }
    }

    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "StreamReaderWithBufferedStream_Tests - {0}")]
    public class StreamReaderWithBufferedStream_Tests : StreamReaderTests
    {
        protected override Stream CreateStream()
        {
            return new BufferedStream(new MemoryStream());
        }

        protected override Stream GetSmallStream()
        {
            byte[] testData = new byte[] { 72, 69, 76, 76, 79 };
            return new BufferedStream(new MemoryStream(testData));
        }

        protected override Stream GetLargeStream()
        {
            byte[] testData = new byte[] { 72, 69, 76, 76, 79 };
            List<byte> data = new List<byte>();
            for (int i = 0; i < 1000; i++)
            {
                data.AddRange(testData);
            }

            return new BufferedStream(new MemoryStream(data.ToArray()));
        }
    }

    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "BinaryWriterWithBufferedStream_Tests - {0}")]
    public class BinaryWriterWithBufferedStream_Tests : BinaryWriterTests
    {
        protected override Stream CreateStream()
        {
            return new BufferedStream(new MemoryStream());
        }

        [Test]
        public override void BinaryWriter_FlushTests()
        {
            // [] Check that flush updates the underlying stream
            using (Stream memstr2 = CreateStream())
            using (BinaryWriter bw2 = new BinaryWriter(memstr2))
            {
                string str = "HelloWorld";
                int expectedLength = str.Length + 1; // 1 for 7-bit encoded length
                bw2.Write(str);
                Assert.True(expectedLength == memstr2.Length);
                bw2.Flush();
                Assert.True(expectedLength == memstr2.Length);
            }

            // [] Flushing a closed writer may throw an exception depending on the underlying stream
            using (Stream memstr2 = CreateStream())
            {
                BinaryWriter bw2 = new BinaryWriter(memstr2);
                bw2.Dispose();
                Assert.Throws<Exception>(() => bw2.Flush());
            }
        }
    }

    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "BinaryWriterWithBufferedStream_WriteByteCharTests - {0}")]
    public class BinaryWriterWithBufferedStream_WriteByteCharTests : BinaryWriter_WriteByteCharTests
    {
        protected override Stream CreateStream()
        {
            return new BufferedStream(new MemoryStream());
        }
    }

    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "BinaryWriterWithBufferedStream_WriteTests - {0}")]
    public class BinaryWriterWithBufferedStream_WriteTests : BinaryWriter_WriteTests
    {
        protected override Stream CreateStream()
        {
            return new BufferedStream(new MemoryStream());
        }
    }

    internal sealed class ThrowsExceptionStream : MemoryStream
    {
        public override int Read(byte[] buffer, int offset, int count)
        {
            throw new InvalidOperationException("Exception from Read");
        }

        public override void Write(byte[] buffer, int offset, int count)
        {
            throw new InvalidOperationException("Exception from Write");
        }

        public override void Flush()
        {
            throw new InvalidOperationException("Exception from Flush");
        }
    }

    public class BufferedStream_NS17
    {
        protected Stream CreateStream()
        {
            return new BufferedStream(new MemoryStream());
        }

        public void EndCallback(IAsyncResult ar)
        {
        }

        [Test]
        public void BeginEndReadTest()
        {
            Stream stream = CreateStream();
            IAsyncResult result = stream.BeginRead(new byte[1], 0, 1, new AsyncCallback(EndCallback), new object());
            stream.EndRead(result);
        }

        [Test]
        public void BeginEndWriteTest()
        {
            Stream stream = CreateStream();
            IAsyncResult result = stream.BeginWrite(new byte[1], 0, 1, new AsyncCallback(EndCallback), new object());
            stream.EndWrite(result);
        }
    }
}
