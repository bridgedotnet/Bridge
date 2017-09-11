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
    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "NullTests - {0}")]
    public class NullTests
    {
        [Test(ExpectedCount = 0)]
        public void TestNullStream_Flush()
        {
            // Neither of these methods should have
            // side effects, so call them twice to
            // make sure they don't throw something
            // the second time around

            Stream.Null.Flush();
            Stream.Null.Flush();
        }

        [Test(ExpectedCount = 0)]
        public static void TestNullStream_Dispose()
        {
            Stream.Null.Dispose();
            Stream.Null.Dispose(); // Dispose shouldn't have any side effects
        }

        [Test]
        public static void TestNullStream_CopyTo()
        {
            Stream source = Stream.Null;

            int originalCapacity = 0;
            var destination = new MemoryStream(originalCapacity);

            source.CopyTo(destination, 12345);
            source.CopyTo(destination, 67890);

            Assert.True(0 == source.Position);
            Assert.True(0 == destination.Position);

            Assert.True(0 == source.Length);
            Assert.True(0 == destination.Length);

            Assert.AreEqual(originalCapacity, destination.Capacity);
        }

        [Test]
        public static void TestNullStream_CopyToAsyncValidation()
        {
            // Since Stream.Null previously inherited its CopyToAsync
            // implementation from the base class, which did check its
            // arguments, we have to make sure it validates them as
            // well for compat.

            var disposedStream = new MemoryStream();
            disposedStream.Dispose();

            var readOnlyStream = new MemoryStream(new byte[1], writable: false);

            Assert.Throws<ArgumentNullException>(() => Stream.Null.CopyTo(null));
            Assert.Throws<ArgumentNullException>(() => Stream.Null.CopyTo(null, -123)); // Should check if destination == null first
            Assert.Throws<ArgumentOutOfRangeException>(() => Stream.Null.CopyTo(Stream.Null, 0)); // 0 shouldn't be a valid buffer size
            Assert.Throws<ArgumentOutOfRangeException>(() => Stream.Null.CopyTo(Stream.Null, -123));
            Assert.Throws<Exception>(() => Stream.Null.CopyTo(disposedStream));
            Assert.Throws<NotSupportedException>(() => Stream.Null.CopyTo(readOnlyStream));
        }

        [Test]
        public static void TestNullStream_Read()
        {
            var data = NullStream_ReadWriteData;

            foreach (var item in data)
            {
                byte[] buffer = (byte[])item[0];
                int offset = (int)item[1];
                int count = (int)item[2];

                byte[] copy = buffer?.ToArray();
                Stream source = Stream.Null;

                int read = source.Read(buffer, offset, count);
                Assert.AreEqual(0, read);
                Assert.AreEqual(copy, buffer); // Make sure Read doesn't modify the buffer
                Assert.True(0 == source.Position);

                read = source.Read(buffer, offset, count);
                Assert.AreEqual(0, read);
                Assert.AreEqual(copy, buffer);
                Assert.True(0 == source.Position);
            }
        }

        [Test]
        public static void TestNullStream_ReadByte()
        {
            Stream source = Stream.Null;

            int data = source.ReadByte();
            Assert.AreEqual(-1, data);
            Assert.True(0 == source.Position);
        }

        [Test]
        public static void TestNullStream_Write()
        {
            var data = NullStream_ReadWriteData;

            foreach (var item in data)
            {
                byte[] buffer = (byte[])item[0];
                int offset = (int)item[1];
                int count = (int)item[2];
                byte[] copy = buffer?.ToArray();
                Stream source = Stream.Null;

                source.Write(buffer, offset, count);
                Assert.AreEqual(copy, buffer); // Make sure Write doesn't modify the buffer
                Assert.True(0 == source.Position);

                source.Write(buffer, offset, count);
                Assert.AreEqual(copy, buffer);
                Assert.True(0 == source.Position);
            }
        }

        [Test]
        public static void TestNullStream_WriteByte()
        {
            Stream source = Stream.Null;

            source.WriteByte(3);
            Assert.True(0 == source.Position);
        }

        [Test]
        public static void TestNullTextReader()
        {
            var data = NullReaders;

            foreach (var item in data)
            {
                TextReader input = (TextReader)item[0];

                StreamReader sr = input as StreamReader;

                if (sr != null)
                    Assert.True(sr.EndOfStream, "EndOfStream property didn't return true");
                input.ReadLine();
                input.Dispose();

                input.ReadLine();
                if (sr != null)
                    Assert.True(sr.EndOfStream, "EndOfStream property didn't return true");
                input.Read();
                input.Peek();
                input.Read(new char[2], 0, 2);
                input.ReadToEnd();
                input.Dispose();
            }
        }

        [Test(ExpectedCount = 0)]
        public static void TextNullTextWriter()
        {
            var data = NullWriters;

            foreach (var item in data)
            {
                TextWriter output = (TextWriter)item[0];

                output.Flush();
                output.Dispose();

                output.WriteLine(decimal.MinValue);
                output.WriteLine(Math.PI);
                output.WriteLine();
                output.Flush();
                output.Dispose();
            }
        }

        public static IEnumerable<object[]> NullReaders
        {
            get
            {
                yield return new object[] { TextReader.Null };
                yield return new object[] { StreamReader.Null };
                yield return new object[] { StringReader.Null };
            }
        }

        public static IEnumerable<object[]> NullWriters
        {
            get
            {
                yield return new object[] { TextWriter.Null };
                yield return new object[] { StreamWriter.Null };
                yield return new object[] { StringWriter.Null };
            }
        }

        public static IEnumerable<object[]> NullStream_ReadWriteData
        {
            get
            {
                yield return new object[] { new byte[10], 0, 10 };
                yield return new object[] { null, -123, 456 }; // Stream.Null.Read/Write should not perform argument validation
            }
        }
    }
}
