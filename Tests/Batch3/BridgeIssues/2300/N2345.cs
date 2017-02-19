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
            Assert.Throws<ArgumentException>(() => list[0] = false);
            Assert.Throws<ArgumentException>(() => list[0] = 1.5);
        }

        [Test]
        public static void TestByteArrayAsIList()
        {
            byte[] a = new byte[10];
            IList list = a;

            Assert.Throws<ArgumentException>(() => list[0] = Byte.MaxValue + 1);
            Assert.Throws<ArgumentException>(() => list[0] = -1);
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
        }

        [Test]
        public static void TestDecimalArrayAsIList()
        {
            decimal[] a = new decimal[10];
            IList list = a;

            list[0] = null;
            Assert.True(list[0] is decimal);
            Assert.True((decimal)list[0] == 0L);

            list[0] = 1;
            Assert.True(list[0] is decimal);
            Assert.True((decimal)list[0] == 1L);
        }

        [Test]
        public static void TestStructrrayAsIList()
        {
            Struct1[] a = new Struct1[10];
            IList list = a;
            list[0] = null;

            Assert.NotNull(a[0]);
            Assert.Throws<ArgumentException>(() => list[0] = "test");
            Assert.Throws<ArgumentException>(() => list[0] = -1);
        }
    }
}