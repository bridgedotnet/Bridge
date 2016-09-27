using Bridge.Html5;
using Bridge.Test;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.Collections.Native
{
    [Category(Constants.MODULE_TYPEDARRAYS)]
    [TestFixture(TestNameFormat = "DataViewTests - {0}")]
    public class DataViewTests
    {
        private DataView GetView(byte[] content)
        {
            var result = new Uint8Array(content.Length);
            for (int i = 0; i < content.Length; i++)
                result[i] = content[i];
            return new DataView(result.Buffer);
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("DataView", typeof(DataView).FullName, "FullName");

            var interfaces = typeof(DataView).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length, "Interface count should be empty");
        }

        [Test]
        public void ArrayBufferOnlyConstructorWorks()
        {
            var b = new Uint8Array(new byte[] { 2, 3, 5 }).Buffer;
            var view = new DataView(b);
            Assert.True((object)view is DataView, "Should be DataView");
            Assert.AreEqual(3, view.GetInt8(1), "StartIndex should be correct");
        }

        [Test]
        public void ArrayBufferAndByteOffsetConstructorWorks()
        {
            var b = new Uint8Array(new byte[] { 2, 3, 5 }).Buffer;
            var view = new DataView(b, 1);
            Assert.True((object)view is DataView, "Should be DataView");
            Assert.AreEqual(5, view.GetInt8(1), "StartIndex should be correct");
        }

        [Test]
        public void ArrayBufferAndByteOffsetAndByteLengthConstructorWorks()
        {
            var b = new Uint8Array(new byte[] { 2, 3, 5, 7, 2, 0 }).Buffer;
            var view = new DataView(b, 1, 3);
            Assert.True((object)view is DataView, "Should be DataView");
            Assert.AreEqual(5, view.GetInt8(1), "StartIndex should be correct");
            Assert.Throws(() => view.GetInt8(4), "Length should be correct");
        }

        [Test]
        public void GetInt8Works()
        {
            var b = GetView(new byte[] { 3, 0xfd });
            Assert.AreEqual(3, b.GetInt8(0), "0");
            Assert.AreEqual(-3, b.GetInt8(1), "1");
        }

        [Test]
        public void GetUint8Works()
        {
            var b = GetView(new byte[] { 3, 0xfd });
            Assert.AreEqual(3, b.GetUint8(0), "0");
            Assert.AreEqual(0xfd, b.GetUint8(1), "1");
        }

        [Test]
        public void GetInt16Works()
        {
            var b = GetView(new byte[] { 3, 0xfd, 3, 4, 0xfd, 3 });
            Assert.AreEqual(-765, b.GetInt16(0, true), "0, true");
            Assert.AreEqual(1027, b.GetInt16(2, true), "2, true");
            Assert.AreEqual(1021, b.GetInt16(4, true), "4, true");
            Assert.AreEqual(1021, b.GetInt16(0, false), "0, false");
            Assert.AreEqual(772, b.GetInt16(2, false), "2, false");
            Assert.AreEqual(-765, b.GetInt16(4, false), "4, false");
            Assert.AreEqual(1021, b.GetInt16(0), "0, default");
            Assert.AreEqual(772, b.GetInt16(2), "2, default");
            Assert.AreEqual(-765, b.GetInt16(4), "4, default");
        }

        [Test]
        public void GetUint16Works()
        {
            var b = GetView(new byte[] { 3, 0xfd, 3, 4, 0xfd, 3 });
            Assert.AreEqual(64771, b.GetUint16(0, true), "0, true");
            Assert.AreEqual(1027, b.GetUint16(2, true), "2, true");
            Assert.AreEqual(1021, b.GetUint16(4, true), "4, true");
            Assert.AreEqual(1021, b.GetUint16(0, false), "0, false");
            Assert.AreEqual(772, b.GetUint16(2, false), "2, false");
            Assert.AreEqual(64771, b.GetUint16(4, false), "4, false");
            Assert.AreEqual(1021, b.GetUint16(0), "0, default");
            Assert.AreEqual(772, b.GetUint16(2), "2, default");
            Assert.AreEqual(64771, b.GetUint16(4), "4, default");
        }

        [Test]
        public void GetInt32Works()
        {
            var b = GetView(new byte[] { 3, 0, 0, 0xfd, 3, 0, 0, 4, 0xfd, 0, 0, 3 });
            Assert.AreEqual(-50331645, b.GetInt32(0, true), "0, true");
            Assert.AreEqual(67108867, b.GetInt32(4, true), "4, true");
            Assert.AreEqual(50331901, b.GetInt32(8, true), "8, true");
            Assert.AreEqual(50331901, b.GetInt32(0, false), "0, false");
            Assert.AreEqual(50331652, b.GetInt32(4, false), "4, false");
            Assert.AreEqual(-50331645, b.GetInt32(8, false), "8, false");
            Assert.AreEqual(50331901, b.GetInt32(0), "0, default");
            Assert.AreEqual(50331652, b.GetInt32(4), "4, default");
            Assert.AreEqual(-50331645, b.GetInt32(8), "8, default");
        }

        [Test]
        public void GetUint32Works()
        {
            var b = GetView(new byte[] { 3, 0, 0, 0xfd, 3, 0, 0, 4, 0xfd, 0, 0, 3 });
            Assert.AreEqual(4244635651, b.GetUint32(0, true), "0, true");
            Assert.AreEqual(67108867, b.GetUint32(4, true), "4, true");
            Assert.AreEqual(50331901, b.GetUint32(8, true), "8, true");
            Assert.AreEqual(50331901, b.GetUint32(0, false), "0, false");
            Assert.AreEqual(50331652, b.GetUint32(4, false), "4, false");
            Assert.AreEqual(4244635651, b.GetUint32(8, false), "8, false");
            Assert.AreEqual(50331901, b.GetUint32(0), "0, default");
            Assert.AreEqual(50331652, b.GetUint32(4), "4, default");
            Assert.AreEqual(4244635651, b.GetUint32(8), "8, default");
        }

        [Test]
        public void GetFloat32Works()
        {
            var b = GetView(new byte[] { 255, 255, 255, 255, 0, 0, 192, 63, 63, 192, 0, 0 });
            Assert.AreEqual(1.5, b.GetFloat32(4, true), "4, true");
            Assert.AreEqual(1.5, b.GetFloat32(8, false), "8, false");
            Assert.AreEqual(1.5, b.GetFloat32(8), "8, default");
        }

        [Test]
        public void GetFloat64Works()
        {
            var b = GetView(new byte[] { 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 248, 63, 63, 248, 0, 0, 0, 0, 0, 0 });
            Assert.AreEqual(1.5, b.GetFloat64(8, true), "8, true");
            Assert.AreEqual(1.5, b.GetFloat64(16, false), "16, false");
            Assert.AreEqual(1.5, b.GetFloat64(16), "16, default");
        }

        private void SetTest(Action<DataView> populator, byte[] expected)
        {
            var b = new ArrayBuffer(expected.Length);
            var v = new DataView(b);
            populator(v);
            var actual = new List<byte>();
            var ub = new Uint8Array(b);
            for (int i = 0; i < ub.Length; i++)
            {
                actual.Add(ub[i]);
            }

            Assert.AreEqual(expected, actual.ToArray());
        }

        [Test]
        public void SetInt8Works()
        {
            SetTest(v =>
            {
                v.SetInt8(1, 14);
                v.SetInt8(2, -14);
            }, new byte[] { 0, 14, 242 });
        }

        [Test]
        public void SetUint8Works()
        {
            SetTest(v =>
            {
                v.SetUint8(1, 14);
                v.SetUint8(2, 242);
            }, new byte[] { 0, 14, 242 });
        }

        [Test]
        public void SetInt16Works()
        {
            SetTest(v =>
            {
                v.SetInt16(2, -4, false);
                v.SetInt16(4, -4, true);
                v.SetInt16(6, -4);
                v.SetInt16(8, 14, false);
                v.SetInt16(10, 14, true);
                v.SetInt16(12, 14);
            }, new byte[] { 0, 0, 255, 252, 252, 255, 255, 252, 0, 14, 14, 0, 0, 14, 0 });
        }

        [Test]
        public void SetUint16Works()
        {
            SetTest(v =>
            {
                v.SetUint16(2, 35875, false);
                v.SetUint16(4, 35875, true);
                v.SetUint16(6, 35875);
                v.SetUint16(8, 14, false);
                v.SetUint16(10, 14, true);
                v.SetUint16(12, 14);
            }, new byte[] { 0, 0, 140, 35, 35, 140, 140, 35, 0, 14, 14, 0, 0, 14, 0 });
        }

        [Test]
        public void SetInt32Works()
        {
            SetTest(v =>
            {
                v.SetInt32(4, -4, false);
                v.SetInt32(8, -4, true);
                v.SetInt32(12, -4);
                v.SetInt32(16, 14, false);
                v.SetInt32(20, 14, true);
                v.SetInt32(24, 14);
            }, new byte[] { 0, 0, 0, 0, 255, 255, 255, 252, 252, 255, 255, 255, 255, 255, 255, 252, 0, 0, 0, 14, 14, 0, 0, 0, 0, 0, 0, 14, 0, 0 });
        }

        [Test]
        public void SetUint32Works()
        {
            SetTest(v =>
            {
                v.SetUint32(4, 3487568527, false);
                v.SetUint32(8, 3487568527, true);
                v.SetUint32(12, 3487568527);
                v.SetUint32(16, 14, false);
                v.SetUint32(20, 14, true);
                v.SetUint32(24, 14);
            }, new byte[] { 0, 0, 0, 0, 207, 224, 18, 143, 143, 18, 224, 207, 207, 224, 18, 143, 0, 0, 0, 14, 14, 0, 0, 0, 0, 0, 0, 14, 0, 0 });
        }

        [Test]
        public void SetFloat32Works()
        {
            SetTest(v =>
            {
                v.SetFloat32(4, 1.5f, false);
                v.SetFloat32(8, 1.5f, true);
                v.SetFloat32(12, 1.5f);
            }, new byte[] { 0, 0, 0, 0, 63, 192, 0, 0, 0, 0, 192, 63, 63, 192, 0, 0 });
        }

        [Test]
        public void SetFloat64Works()
        {
            SetTest(v =>
            {
                v.SetFloat64(8, 1.5, false);
                v.SetFloat64(16, 1.5, true);
                v.SetFloat64(24, 1.5);
            }, new byte[] { 0, 0, 0, 0, 0, 0, 0, 0, 63, 248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 248, 63, 63, 248, 0, 0, 0, 0, 0, 0 });
        }
    }
}
