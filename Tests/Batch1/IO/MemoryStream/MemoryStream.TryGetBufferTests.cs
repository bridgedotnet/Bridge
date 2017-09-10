// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.IO;

namespace Bridge.ClientTest.IO
{
    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "MemoryStream_TryGetBufferTests - {0}")]
    public class MemoryStream_TryGetBufferTests
    {
        [Test]
        public static void TryGetBuffer_Constructor_AlwaysReturnsTrue()
        {
            var stream = new MemoryStream();

            ArraySegment<byte> segment;
            Assert.True(stream.TryGetBuffer(out segment));

            Assert.NotNull(segment.Array);
            Assert.AreEqual(0, segment.Offset);
            Assert.AreEqual(0, segment.Count);
        }

        [Test]
        public static void TryGetBuffer_Constructor_Int32_AlwaysReturnsTrue()
        {
            var stream = new MemoryStream(512);

            ArraySegment<byte> segment;
            Assert.True(stream.TryGetBuffer(out segment));

            Assert.AreEqual(512, segment.Array.Length);
            Assert.AreEqual(0, segment.Offset);
            Assert.AreEqual(0, segment.Count);
        }

        [Test]
        public static void TryGetBuffer_Constructor_ByteArray_AlwaysReturnsFalse()
        {
            var stream = new MemoryStream(new byte[512]);

            ArraySegment<byte> segment;
            Assert.False(stream.TryGetBuffer(out segment));
        }

        [Test]
        public static void TryGetBuffer_Constructor_ByteArray_Bool_AlwaysReturnsFalse()
        {
            var stream = new MemoryStream(new byte[512], writable: true);

            ArraySegment<byte> segment;
            Assert.False(stream.TryGetBuffer(out segment));
        }

        [Test]
        public static void TryGetBuffer_Constructor_ByteArray_Int32_Int32_AlwaysReturnsFalse()
        {
            var stream = new MemoryStream(new byte[512], index: 0, count: 512);

            ArraySegment<byte> segment;
            Assert.False(stream.TryGetBuffer(out segment));
        }

        [Test]
        public static void TryGetBuffer_Constructor_ByteArray_Int32_Int32_Bool_AlwaysReturnsFalse()
        {
            var stream = new MemoryStream(new byte[512], index: 0, count: 512, writable: true);

            ArraySegment<byte> segment;
            Assert.False(stream.TryGetBuffer(out segment));
        }

        [Test]
        public static void TryGetBuffer_Constructor_ByteArray_Int32_Int32_Bool_Bool_FalseAsPubliclyVisible_ReturnsFalse()
        {
            var stream = new MemoryStream(new byte[512], index: 0, count: 512, writable: true, publiclyVisible: false);

            ArraySegment<byte> segment;
            Assert.False(stream.TryGetBuffer(out segment));
        }

        [Test]
        public static void TryGetBuffer_Constructor_ByteArray_Int32_Int32_Bool_Bool_TrueAsPubliclyVisible_ReturnsTrue()
        {
            var stream = new MemoryStream(new byte[512], index: 0, count: 512, writable: true, publiclyVisible: true);

            ArraySegment<byte> segment;
            Assert.True(stream.TryGetBuffer(out segment));

            Assert.NotNull(segment.Array);
            Assert.AreEqual(512, segment.Array.Length);
            Assert.AreEqual(0, segment.Offset);
            Assert.AreEqual(512, segment.Count);
        }

        [Test]
        public static void TryGetBuffer_Constructor_ByteArray_AlwaysReturnsEmptyArraySegment()
        {
            var data = GetArraysVariedBySize();
            foreach (var objectse in data)
            {
                byte[] array = (byte[])objectse[0];
                var stream = new MemoryStream(array);

                ArraySegment<byte> result;
                Assert.False(stream.TryGetBuffer(out result));

                // publiclyVisible = false;
                Assert.True(default(ArraySegment<byte>).Equals(result));
            }
        }

        [Test]
        public static void TryGetBuffer_Constructor_ByteArray_Bool_AlwaysReturnsEmptyArraySegment()
        {
            var data = GetArraysVariedBySize();
            foreach (var objectse in data)
            {
                byte[] array = (byte[])objectse[0];
                var stream = new MemoryStream(array, writable: true);

                ArraySegment<byte> result;
                Assert.False(stream.TryGetBuffer(out result));

                // publiclyVisible = false;
                Assert.True(default(ArraySegment<byte>).Equals(result));
            }
        }

        [Test]
        public static void TryGetBuffer_Constructor_ByteArray_Int32_Int32_AlwaysReturnsEmptyArraySegment()
        {
            var data = GetArraysVariedByOffsetAndLength();
            foreach (var objectse in data)
            {
                ArraySegment<byte> array = (ArraySegment<byte>)objectse[0];
                var stream = new MemoryStream(array.Array, index: array.Offset, count: array.Count);

                ArraySegment<byte> result;
                Assert.False(stream.TryGetBuffer(out result));

                // publiclyVisible = false;
                Assert.True(default(ArraySegment<byte>).Equals(result));
            }
        }

        [Test]
        public static void TryGetBuffer_Constructor_ByteArray_Int32_Int32_Bool_AlwaysReturnsEmptyArraySegment()
        {
            var data = GetArraysVariedByOffsetAndLength();
            foreach (var objectse in data)
            {
                ArraySegment<byte> array = (ArraySegment<byte>)objectse[0];
                var stream = new MemoryStream(array.Array, index: array.Offset, count: array.Count, writable: true);

                ArraySegment<byte> result;
                Assert.False(stream.TryGetBuffer(out result));

                // publiclyVisible = false;
                Assert.True(default(ArraySegment<byte>).Equals(result));
            }
        }

        [Test]
        public static void TryGetBuffer_Constructor_ByteArray_Int32_Int32_Bool_Bool_FalseAsPubliclyVisible_ReturnsEmptyArraySegment()
        {
            var data = GetArraysVariedByOffsetAndLength();
            foreach (var objectse in data)
            {
                ArraySegment<byte> array = (ArraySegment<byte>)objectse[0];
                var stream = new MemoryStream(array.Array, index: array.Offset, count: array.Count, writable: true, publiclyVisible: false);

                ArraySegment<byte> result;
                Assert.False(stream.TryGetBuffer(out result));

                // publiclyVisible = false;
                Assert.True(default(ArraySegment<byte>).Equals(result));
            }
        }

        [Test]
        public static void TryGetBuffer_Constructor_AlwaysReturnsOffsetSetToZero()
        {
            var stream = new MemoryStream();

            ArraySegment<byte> result;
            Assert.True(stream.TryGetBuffer(out result));

            Assert.AreEqual(0, result.Offset);

        }

        [Test]
        public static void TryGetBuffer_Constructor_Int32_AlwaysReturnsOffsetSetToZero()
        {
            var stream = new MemoryStream(512);

            ArraySegment<byte> result;
            Assert.True(stream.TryGetBuffer(out result));

            Assert.AreEqual(0, result.Offset);
        }

        [Test]
        public static void TryGetBuffer_Constructor_ByteArray_Int32_Int32_Bool_Bool_ValueAsIndexAndTrueAsPubliclyVisible_AlwaysReturnsOffsetSetToIndex()
        {
            var data = GetArraysVariedByOffsetAndLength();
            foreach (var objectse in data)
            {
                ArraySegment<byte> array = (ArraySegment<byte>)objectse[0];
                var stream = new MemoryStream(array.Array, index: array.Offset, count: array.Count, writable: true, publiclyVisible: true);

                ArraySegment<byte> result;
                Assert.True(stream.TryGetBuffer(out result));

                Assert.AreEqual(array.Offset, result.Offset);
            }
        }

        [Test]
        public static void TryGetBuffer_Constructor_ByDefaultReturnsCountSetToZero()
        {
            var stream = new MemoryStream();

            ArraySegment<byte> result;
            Assert.True(stream.TryGetBuffer(out result));

            Assert.AreEqual(0, result.Count);
        }

        [Test]
        public static void TryGetBuffer_Constructor_ReturnsCountSetToWrittenLength()
        {
            var data = GetArraysVariedBySize();
            foreach (var objectse in data)
            {
                byte[] array = (byte[])objectse[0];
                var stream = new MemoryStream();
                stream.Write(array, 0, array.Length);

                ArraySegment<byte> result;
                Assert.True(stream.TryGetBuffer(out result));

                Assert.AreEqual(array.Length, result.Count);
            }
        }

        [Test]
        public static void TryGetBuffer_Constructor_Int32_ByDefaultReturnsCountSetToZero()
        {
            var stream = new MemoryStream(512);

            ArraySegment<byte> result;
            Assert.True(stream.TryGetBuffer(out result));

            Assert.AreEqual(0, result.Offset);
        }

        [Test]
        public static void TryGetBuffer_Constructor_Int32_ReturnsCountSetToWrittenLength()
        {
            var data = GetArraysVariedBySize();
            foreach (var objectse in data)
            {
                byte[] array = (byte[])objectse[0];
                var stream = new MemoryStream(512);
                stream.Write(array, 0, array.Length);

                ArraySegment<byte> result;
                Assert.True(stream.TryGetBuffer(out result));

                Assert.AreEqual(array.Length, result.Count);
            }
        }

        [Test]
        public static void TryGetBuffer_Constructor_ByteArray_Int32_Int32_Bool_Bool_ValueAsCountAndTrueAsPubliclyVisible_AlwaysReturnsCountSetToCount()
        {
            var data = GetArraysVariedByOffsetAndLength();
            foreach (var objectse in data)
            {
                ArraySegment<byte> array = (ArraySegment<byte>)objectse[0];
                var stream = new MemoryStream(array.Array, index: array.Offset, count: array.Count, writable: true, publiclyVisible: true);

                ArraySegment<byte> result;
                Assert.True(stream.TryGetBuffer(out result));

                Assert.AreEqual(array.Count, result.Count);
            }
        }

        [Test]
        public static void TryGetBuffer_Constructor_ReturnsArray()
        {
            var stream = new MemoryStream();

            ArraySegment<byte> result;
            Assert.True(stream.TryGetBuffer(out result));

            Assert.NotNull(result.Array);
        }

        [Test]
        public static void TryGetBuffer_Constructor_MultipleCallsReturnsSameArray()
        {
            var stream = new MemoryStream();

            ArraySegment<byte> result1;
            ArraySegment<byte> result2;
            Assert.True(stream.TryGetBuffer(out result1));
            Assert.True(stream.TryGetBuffer(out result2));

            Assert.AreDeepEqual(result1.Array, result2.Array);
        }

        [Test]
        public static void TryGetBuffer_Constructor_Int32_MultipleCallsReturnSameArray()
        {
            var stream = new MemoryStream(512);

            ArraySegment<byte> result1;
            ArraySegment<byte> result2;
            Assert.True(stream.TryGetBuffer(out result1));
            Assert.True(stream.TryGetBuffer(out result2));

            Assert.AreDeepEqual(result1.Array, result2.Array);
        }

        [Test]
        public static void TryGetBuffer_Constructor_Int32_WhenWritingPastCapacity_ReturnsDifferentArrays()
        {
            var stream = new MemoryStream(512);

            ArraySegment<byte> result1;
            Assert.True(stream.TryGetBuffer(out result1));

            // Force the stream to resize the underlying array
            stream.Write(new byte[1024], 0, 1024);

            ArraySegment<byte> result2;
            Assert.True(stream.TryGetBuffer(out result2));

            Assert.AreNotDeepEqual(result1.Array, result2.Array);
        }

        [Test]
        public static void TryGetBuffer_Constructor_ByteArray_Int32_Int32_Bool_Bool_ValueAsBufferAndTrueAsPubliclyVisible_AlwaysReturnsArraySetToBuffer()
        {
            var data = GetArraysVariedByOffsetAndLength();
            foreach (var objectse in data)
            {
                ArraySegment<byte> array = (ArraySegment<byte>)objectse[0];
                var stream = new MemoryStream(array.Array, index: array.Offset, count: array.Count, writable: true, publiclyVisible: true);

                ArraySegment<byte> result;
                Assert.True(stream.TryGetBuffer(out result));

                Assert.AreDeepEqual(array.Array, result.Array);
            }
        }

        [Test]
        public static void TryGetBuffer_WhenDisposed_ReturnsTrue()
        {
            var data = GetArraysVariedByOffsetAndLength();
            foreach (var objectse in data)
            {
                ArraySegment<byte> array = (ArraySegment<byte>)objectse[0];
                var stream = new MemoryStream(array.Array, index: array.Offset, count: array.Count, writable: true, publiclyVisible: true);
                stream.Dispose();

                ArraySegment<byte> segment;
                Assert.True(stream.TryGetBuffer(out segment));

                Assert.AreDeepEqual(array.Array, segment.Array);
                Assert.AreEqual(array.Offset, segment.Offset);
                Assert.AreEqual(array.Count, segment.Count);
            }
        }

        [Test]
        public static void TryGetBuffer_WhenDisposed_ReturnsOffsetSetToIndex()
        {
            var data = GetArraysVariedByOffsetAndLength();
            foreach (var objectse in data)
            {
                ArraySegment<byte> array = (ArraySegment<byte>)objectse[0];
                var stream = new MemoryStream(array.Array, index: array.Offset, count: array.Count, writable: true, publiclyVisible: true);
                stream.Dispose();

                ArraySegment<byte> result;
                Assert.True(stream.TryGetBuffer(out result));

                Assert.AreEqual(array.Offset, result.Offset);
            }
        }

        [Test]
        public static void TryGetBuffer_WhenDisposed_ReturnsCountSetToCount()
        {
            var data = GetArraysVariedByOffsetAndLength();
            foreach (var objectse in data)
            {
                ArraySegment<byte> array = (ArraySegment<byte>)objectse[0];
                var stream = new MemoryStream(array.Array, index: array.Offset, count: array.Count, writable: true, publiclyVisible: true);
                stream.Dispose();

                ArraySegment<byte> result;
                Assert.True(stream.TryGetBuffer(out result));

                Assert.AreEqual(array.Count, result.Count);
            }
        }

        [Test]
        public static void TryGetBuffer_WhenDisposed_ReturnsArraySetToBuffer()
        {
            var data = GetArraysVariedByOffsetAndLength();
            foreach (var objectse in data)
            {
                ArraySegment<byte> array = (ArraySegment<byte>)objectse[0];
                var stream = new MemoryStream(array.Array, index: array.Offset, count: array.Count, writable: true, publiclyVisible: true);
                stream.Dispose();

                ArraySegment<byte> result;
                Assert.True(stream.TryGetBuffer(out result));

                Assert.AreDeepEqual(array.Array, result.Array);
            }
        }

        public static IEnumerable<object[]> GetArraysVariedByOffsetAndLength()
        {
            yield return new object[] { new ArraySegment<byte>(new byte[512], 0, 512) };
            yield return new object[] { new ArraySegment<byte>(new byte[512], 1, 511) };
            yield return new object[] { new ArraySegment<byte>(new byte[512], 2, 510) };
            yield return new object[] { new ArraySegment<byte>(new byte[512], 256, 256) };
            yield return new object[] { new ArraySegment<byte>(new byte[512], 512, 0) };
            yield return new object[] { new ArraySegment<byte>(new byte[512], 511, 1) };
            yield return new object[] { new ArraySegment<byte>(new byte[512], 510, 2) };
        }

        public static IEnumerable<object[]> GetArraysVariedBySize()
        {
            yield return new object[] { FillWithData(new byte[0]) };
            yield return new object[] { FillWithData(new byte[1]) };
            yield return new object[] { FillWithData(new byte[2]) };
            yield return new object[] { FillWithData(new byte[254]) };
            yield return new object[] { FillWithData(new byte[255]) };
            yield return new object[] { FillWithData(new byte[256]) };
            yield return new object[] { FillWithData(new byte[511]) };
            yield return new object[] { FillWithData(new byte[512]) };
            yield return new object[] { FillWithData(new byte[513]) };
            yield return new object[] { FillWithData(new byte[1023]) };
            yield return new object[] { FillWithData(new byte[1024]) };
            yield return new object[] { FillWithData(new byte[1025]) };
            yield return new object[] { FillWithData(new byte[2047]) };
            yield return new object[] { FillWithData(new byte[2048]) };
            yield return new object[] { FillWithData(new byte[2049]) };
        }

        private static byte[] FillWithData(byte[] buffer)
        {
            for (int i = 0; i < buffer.Length; i++)
            {
                buffer[i] = unchecked((byte)i);
            }

            return buffer;
        }
    }
}
