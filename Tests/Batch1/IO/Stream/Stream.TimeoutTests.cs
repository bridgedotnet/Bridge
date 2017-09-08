// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Bridge.ClientTest.IO
{
    public sealed class NopStream : Stream
    {
        public override bool CanRead
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


        public override bool CanWrite
        {
            get
            {
                return false;
            }
        }

        public override long Length
        {
            get
            {
                throw new NotSupportedException();
            }
        }


        public override long Position
        {
            get
            {
                throw new NotSupportedException();
            }
            set
            {
                throw new NotSupportedException();
            }
        }

        public override void Flush()
        {
        }
        public override long Seek(long offset, SeekOrigin origin)
        {
            throw new NotSupportedException();
        }
        public override void SetLength(long value)
        {
            throw new NotSupportedException();
        }
        public override int Read(byte[] buffer, int offset, int count)
        {
            return 0;
        }
        public override void Write(byte[] buffer, int offset, int count)
        {
        }

    }

    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "TimeoutTests - {0}")]
    public class TimeoutTests
    {
        [Test]
        public static void TestReadTimeoutCustomStream()
        {
            TestReadTimeout(new NopStream());
        }

        [Test]
        public static void TestReadTimeoutMemoryStream()
        {
            TestReadTimeout(new MemoryStream());
        }


        private static void TestReadTimeout(Stream stream)
        {
            Assert.Throws<InvalidOperationException>(() => { var t = stream.ReadTimeout; });

            Assert.Throws<InvalidOperationException>(() => stream.ReadTimeout = 500);
        }
        [Test]
        public static void TestWriteTimeoutCustomStream()
        {
            TestWriteTimeout(new NopStream());
        }

        [Test]
        public static void TestWriteTimeoutMemoryStream()
        {
            TestWriteTimeout(new MemoryStream());
        }

        private static void TestWriteTimeout(Stream stream)
        {
            Assert.Throws<InvalidOperationException>(() => { var t = stream.WriteTimeout; });
            Assert.Throws<InvalidOperationException>(() => stream.WriteTimeout = 500);
        }

        [Test]
        public static void TestCanTimeoutCustomStream()
        {
            TestCanTimeout(new NopStream());
        }

        [Test]
        public static void TestCanTimeoutMemoryStream()
        {
            TestCanTimeout(new MemoryStream());
        }

        private static void TestCanTimeout(System.IO.Stream stream)
        {
            Assert.False(stream.CanTimeout, "Expected CanTimeout to return false");
        }
    }

}
