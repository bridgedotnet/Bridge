using System;
using System.Collections;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2345 - {0}")]
    public class Bridge2345
    {
        public struct Struct1
        {
        }

        [Test]
        public static void TestArrayAsIList()
        {
            int[] a = new int[10];
            IList list = a;
            list[0] = null;

            Assert.AreEqual(0, (int)list[0]);
            // Expected InvalidCastException will be fixed as part of another issue
            Assert.Throws<ArgumentException>(() => list[0] = "string");
            Assert.Throws<ArgumentException>(() => list[0] = new object());
            Assert.Throws<ArgumentException>(() => list[0] = new Struct1());

            Assert.Throws<ArgumentException>(() => list[0] = false);
            Assert.Throws<ArgumentException>(() => list[0] = 1.5);

            list[0] = 1;
            Assert.AreEqual(1, list[0]);
        }

        [Test]
        public static void TestByteArrayAsIList()
        {
            byte[] a = new byte[10];
            IList list = a;

            // Expected InvalidCastException will be fixed as part of another issue
            Assert.Throws<ArgumentException>(() => list[0] = "string");
            Assert.Throws<ArgumentException>(() => list[0] = new object());
            Assert.Throws<ArgumentException>(() => list[0] = new Struct1());

            Assert.Throws<ArgumentException>(() => list[0] = Byte.MaxValue + 1);
            Assert.Throws<ArgumentException>(() => list[0] = -1);

            list[0] = (byte)1;
            Assert.AreEqual(1, list[0]);
        }

        [Test]
        public static void TestLongArrayAsIList()
        {
            long[] a = new long[10];
            IList list = a;

            list[0] = null;
            Assert.True(list[0] is long);
            Assert.True((long)list[0] == 0L);

            list[0] = 1;
            Assert.True(list[0] is long);
            Assert.True((long)list[0] == 1L);

            // Expected InvalidCastException will be fixed as part of another issue
            Assert.Throws<ArgumentException>(() => list[0] = "string");
            Assert.Throws<ArgumentException>(() => list[0] = new object());
            Assert.Throws<ArgumentException>(() => list[0] = new Struct1());

            Assert.Throws<ArgumentException>(() => list[0] = false);
        }

        [Test]
        public static void TestDecimalArrayAsIList()
        {
            decimal[] a = new decimal[10];
            IList list = a;

            list[0] = null;
            Assert.True(list[0] is decimal);
            Assert.True((decimal)list[0] == 0m);

            list[0] = 1m;
            Assert.True(list[0] is decimal);
            Assert.True((decimal)list[0] == 1m);

            // Expected InvalidCastException will be fixed as part of another issue
            //Assert.Throws<ArgumentException>(() => list[0] = 1);
            Assert.Throws<ArgumentException>(() => list[0] = "string");
            Assert.Throws<ArgumentException>(() => list[0] = new object());
            Assert.Throws<ArgumentException>(() => list[0] = new Struct1());
            Assert.Throws<ArgumentException>(() => list[0] = false);
        }

        [Test]
        public static void TestStructArrayAsIList()
        {
            Struct1[] a = new Struct1[10];
            IList list = a;
            list[0] = null;

            Assert.NotNull(a[0]);
            // Expected InvalidCastException will be fixed as part of another issue
            Assert.Throws<ArgumentException>(() => list[0] = "string");
            Assert.Throws<ArgumentException>(() => list[0] = new object());
            Assert.Throws<ArgumentException>(() => list[0] = false);
            Assert.Throws<ArgumentException>(() => list[0] = -1);
            //list[0] = new Struct1();
            //Assert.True(list[0].Equals(new Struct1()));
        }

        [Test]
        public static void TestStringArrayAsIList()
        {
            string[] a = new string[10];
            IList list = a;
            list[0] = null;

            Assert.Null(a[0]);

            // Expected InvalidCastException will be fixed as part of another issue
            Assert.Throws<ArgumentException>(() => list[0] = new object());
            Assert.Throws<ArgumentException>(() => list[0] = new Struct1());
            Assert.Throws<ArgumentException>(() => list[0] = false);

            list[0] = "test";
            Assert.AreEqual("test", list[0]);
        }
    }
}