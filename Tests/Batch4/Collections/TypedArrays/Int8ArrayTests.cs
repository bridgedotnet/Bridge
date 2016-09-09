using Bridge.Html5;
using Bridge.Test;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch4.Collections.TypedArrays
{
    [TestFixture(TestNameFormat = "Int8ArrayTests - {0}")]
    public class Int8ArrayTests
    {
        private void AssertContent(Int8Array actual, int[] expected, string message)
        {
            if (actual.Length != expected.Length)
            {
                Assert.Fail(message + ": Expected length " + expected.Length + ", actual: " + actual.Length);
                return;
            }
            for (int i = 0; i < expected.Length; i++)
            {
                if (actual[i] != expected[i])
                {
                    Assert.Fail(message + ": Position " + i + ": expected " + expected[i] + ", actual: " + actual[i]);
                    return;
                }
            }
            Assert.True(true, message);
        }

        [Test]
        public void TypePropertiesAreCorrect_SPI_1559()
        {
            Assert.AreEqual("Int8Array", typeof(Int8Array).FullName, "FullName");

            var interfaces = typeof(Int8Array).GetInterfaces();
            Assert.AreEqual(1, interfaces.Length, "Interface count should be 5");
            Assert.True(interfaces.Contains(typeof(IEnumerable<sbyte>)), "Interfaces should contain IEnumerable<sbyte>");
            Assert.False(interfaces.Contains(typeof(ICollection<sbyte>)), "Interfaces should contain ICollection<sbyte>");
            Assert.False(interfaces.Contains(typeof(IList<sbyte>)), "Interfaces should contain IList<sbyte>");
            // Not JS API
            //Assert.True(interfaces.Contains(typeof(IReadOnlyCollection<sbyte>)), "Interfaces should contain IReadOnlyCollection<sbyte>");
            //Assert.True(interfaces.Contains(typeof(IReadOnlyList<sbyte>)), "Interfaces should contain IReadOnlyList<sbyte>");

            object arr = new Int8Array(0);
            Assert.True(arr is Int8Array, "Is Int8Array");
            Assert.True(arr is IEnumerable<sbyte>, "Is IEnumerable<sbyte>");
            Assert.False(arr is ICollection<sbyte>, "Is ICollection<sbyte>");
            Assert.False(arr is IList<sbyte>, "Is IList<sbyte>");
            // Not JS API
            //Assert.True(arr is IReadOnlyCollection<sbyte>, "Is IReadOnlyCollection<sbyte>");
            //Assert.True(arr is IReadOnlyList<sbyte>, "Is IReadOnlyList<sbyte>");
        }

        [Test]
        public void LengthConstructorWorks()
        {
            var arr = new Int8Array(13);
            Assert.True((object)arr is Int8Array, "is Int8Array");
            Assert.AreEqual(13, arr.Length, "Length");
        }

        [Test]
        public void ConstructorFromIntWorks()
        {
            var source = new sbyte[] { 3, 8, 4 };
            var arr = new Int8Array(source);
            Assert.True((object)arr != (object)source, "New object");
            Assert.True((object)arr is Int8Array, "is Int8Array");
            AssertContent(arr, new[] { 3, 8, 4 }, "content");
        }

        [Test]
        public void CopyConstructorWorks()
        {
            var source = new Int8Array(new sbyte[] { 3, 8, 4 });
            var arr = new Int8Array(source);
            Assert.True(arr != source, "New object");
            Assert.True((object)arr is Int8Array, "is Int8Array");
            AssertContent(arr, new[] { 3, 8, 4 }, "content");
        }

        [Test]
        public void ArrayBufferConstructorWorks()
        {
            var buf = new ArrayBuffer(80);
            var arr = new Int8Array(buf);
            Assert.True((object)arr is Int8Array);
            Assert.True(arr.Buffer == buf, "buffer");
            Assert.AreEqual(80, arr.Length, "length");
        }

        [Test]
        public void ArrayBufferWithOffsetConstructorWorks()
        {
            var buf = new ArrayBuffer(80);
            var arr = new Int8Array(buf, 16);
            Assert.True((object)arr is Int8Array);
            Assert.True(arr.Buffer == buf, "buffer");
            Assert.AreEqual(64, arr.Length, "length");
        }

        [Test]
        public void ArrayBufferWithOffsetAndLengthConstructorWorks()
        {
            var buf = new ArrayBuffer(80);
            var arr = new Int8Array(buf, 16, 12);
            Assert.True((object)arr is Int8Array);
            Assert.True(arr.Buffer == buf, "buffer");
            Assert.AreEqual(12, arr.Length, "length");
        }

        // Not JS API
        //[Test]
        //public void InstanceBytesPerElementWorks()
        //{
        //    Assert.AreEqual(new Int8Array(0).BytesPerElement, 1);
        //}

        [Test]
        public void StaticBytesPerElementWorks()
        {
            Assert.AreEqual(1, Int8Array.BYTES_PER_ELEMENT);
        }

        [Test]
        public void LengthWorks()
        {
            var arr = new Int8Array(13);
            Assert.AreEqual(13, arr.Length, "Length");
        }

        [Test]
        public void IndexingWorks()
        {
            var arr = new Int8Array(3);
            arr[1] = 42;
            AssertContent(arr, new[] { 0, 42, 0 }, "Content");
            Assert.AreEqual(42, arr[1], "[1]");
        }

        [Test]
        public void SetInt8ArrayWorks()
        {
            var arr = new Int8Array(4);
            arr.Set(new Int8Array(new sbyte[] { 3, 6, 7 }));
            AssertContent(arr, new[] { 3, 6, 7, 0 }, "Content");
        }

        [Test]
        public void SetInt8ArrayWithOffsetWorks()
        {
            var arr = new Int8Array(6);
            arr.Set(new Int8Array(new sbyte[] { 3, 6, 7 }), 2);
            AssertContent(arr, new[] { 0, 0, 3, 6, 7, 0 }, "Content");
        }

        [Test]
        public void SetNormalArrayWorks()
        {
            var arr = new Int8Array(4);
            arr.Set(new sbyte[] { 3, 6, 7 });
            AssertContent(arr, new[] { 3, 6, 7, 0 }, "Content");
        }

        [Test]
        public void SetNormalArrayWithOffsetWorks()
        {
            var arr = new Int8Array(6);
            arr.Set(new sbyte[] { 3, 6, 7 }, 2);
            AssertContent(arr, new[] { 0, 0, 3, 6, 7, 0 }, "Content");
        }

        [Test]
        public void SubarrayWithBeginWorks()
        {
            var source = new Int8Array(10);
            var arr = source.SubArray(3);
            Assert.False(arr == source, "Should be a new array");
            Assert.True(arr.Buffer == source.Buffer, "Should be the same buffer");
            Assert.AreEqual(3, arr.ByteOffset, "ByteOffset should be correct");
        }

        [Test]
        public void SubarrayWithBeginAndEndWorks()
        {
            var source = new Int8Array(10);
            var arr = source.SubArray(3, 7);
            Assert.False(arr == source, "Should be a new array");
            Assert.True(arr.Buffer == source.Buffer, "Should be the same buffer");
            Assert.AreEqual(3, arr.ByteOffset, "ByteOffset should be correct");
            Assert.AreEqual(4, arr.Length, "Length should be correct");
        }

        [Test]
        public void BufferPropertyWorks()
        {
            var buf = new ArrayBuffer(100);
            var arr = new Int8Array(buf);
            Assert.True(arr.Buffer == buf, "Should be correct");
        }

        [Test]
        public void ByteOffsetPropertyWorks()
        {
            var buf = new ArrayBuffer(100);
            var arr = new Int8Array(buf, 32);
            Assert.AreEqual(32, arr.ByteOffset, "Should be correct");
        }

        [Test]
        public void ByteLengthPropertyWorks()
        {
            var arr = new Int8Array(23);
            Assert.AreEqual(23, arr.ByteLength, "Should be correct");
        }

        [Test]
        public void IndexOfWorks()
        {
            var arr = new Int8Array(new sbyte[] { 3, 6, 2, 9, 5 });
            Assert.AreEqual(3, arr.IndexOf(9), "9");
            Assert.AreEqual(-1, arr.IndexOf(1), "1");
        }

        // Not JS API
        [Test]
        public void ContainsWorks()
        {
            var arr = new Int8Array(new sbyte[] { 3, 6, 2, 9, 5 });
            Assert.True(arr.Contains(9), "9");
            Assert.False(arr.Contains(1), "1");
        }

        // #SPI
        [Test]
        public void ForeachWorks_SPI_1401()
        {
            var arr = new Int8Array(new sbyte[] { 3, 6, 2, 9, 5 });
            var l = new List<int>();
            // #1401
            foreach (var i in arr)
            {
                l.Add(i);
            }
            Assert.AreEqual(l.ToArray(), new[] { 3, 6, 2, 9, 5 });
        }

        // #SPI
        [Test]
        public void GetEnumeratorWorks_SPI_1401()
        {
            var arr = new Int8Array(new sbyte[] { 3, 6, 2, 9, 5 });
            var l = new List<int>();
            // #1401
            var enm = arr.GetEnumerator();
            while (enm.MoveNext())
            {
                l.Add(enm.Current);
            }
            Assert.AreEqual(l.ToArray(), new[] { 3, 6, 2, 9, 5 });
        }

        [Test]
        public void IEnumerableGetEnumeratorWorks()
        {
            var arr = (IEnumerable<sbyte>)new Int8Array(new sbyte[] { 3, 6, 2, 9, 5 });
            var l = new List<int>();
            var enm = arr.GetEnumerator();
            while (enm.MoveNext())
            {
                l.Add(enm.Current);
            }
            Assert.AreEqual(new[] { 3, 6, 2, 9, 5 }, l.ToArray());
        }

        [Test]
        public void ICollectionMethodsWork_SPI_1559()
        {
            // #1559
            var coll = (ICollection<sbyte>)new Int8Array(new sbyte[] { 3, 6, 2, 9, 5 });
            Assert.AreEqual(5, coll.Count, "Count");
            Assert.True(coll.Contains(6), "Contains(6)");
            Assert.False(coll.Contains(1), "Contains(1)");
            Assert.Throws<NotSupportedException>(() => coll.Add(2), "Add");
            Assert.Throws<NotSupportedException>(() => coll.Clear(), "Clear");
            Assert.Throws<NotSupportedException>(() => coll.Remove(2), "Remove");
        }

        [Test]
        public void IListMethodsWork_SPI_1559()
        {
            // #1559
            var list = (IList<sbyte>)new Int8Array(new sbyte[] { 3, 6, 2, 9, 5 });
            Assert.AreEqual(1, list.IndexOf(6), "IndexOf(6)");
            Assert.AreEqual(-1, list.IndexOf(1), "IndexOf(1)");
            Assert.AreEqual(9, list[3], "Get item");
            list[3] = 4;
            Assert.AreEqual(4, list[3], "Set item");

            Assert.Throws<NotSupportedException>(() => list.Insert(2, 2), "Insert");
            Assert.Throws<NotSupportedException>(() => list.RemoveAt(2), "RemoveAt");
        }

        // Not JS API
        //[Test]
        //public void IReadOnlyCollectionMethodsWork()
        //{
        //    var coll = (IReadOnlyCollection<sbyte>)new Int8Array(new sbyte[] { 3, 6, 2, 9, 5 });
        //    Assert.AreEqual(coll.Count, 5, "Count");
        //    Assert.True(coll.Contains(6), "Contains(6)");
        //    Assert.False(coll.Contains(1), "Contains(1)");
        //}

        // Not JS API
        //[Test]
        //public void IReadOnlyListMethodsWork()
        //{
        //    var list = (IReadOnlyList<sbyte>)new Int8Array(new sbyte[] { 3, 6, 2, 9, 5 });
        //    Assert.AreEqual(list[3], 9, "Get item");
        //}
    }
}
