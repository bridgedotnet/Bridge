using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#156 - {0}")]
    public class Bridge156
    {
        public static int[] MyArray = new int[5];
        public static int[,] My2DArray = new int[5, 5];

        [Test]
        public static void TestArrayIndexOutOfRangeException()
        {
            var lowIndex = -1;

            Assert.AreEqual(0, Bridge156.MyArray[0]);
            Assert.AreEqual(0, Bridge156.MyArray[4]);

            Assert.Throws<IndexOutOfRangeException>(() =>
            {
                var v = Bridge156.MyArray[5];
            });
            Assert.Throws<IndexOutOfRangeException>(() =>
            {
                var v = Bridge156.MyArray[lowIndex];
            });

            Assert.AreEqual(0, Bridge156.My2DArray[0, 0]);
            Assert.AreEqual(0, Bridge156.My2DArray[0, 4]);
            Assert.AreEqual(0, Bridge156.My2DArray[4, 0]);
            Assert.AreEqual(0, Bridge156.My2DArray[4, 4]);

            Assert.Throws<IndexOutOfRangeException>(() =>
            {
                var v = Bridge156.My2DArray[5, 4];
            });
            Assert.Throws<IndexOutOfRangeException>(() =>
            {
                var v = Bridge156.My2DArray[4, 5];
            });
            Assert.Throws<IndexOutOfRangeException>(() =>
            {
                var v = Bridge156.My2DArray[5, 5];
            });
            Assert.Throws<IndexOutOfRangeException>(() =>
            {
                var v = Bridge156.My2DArray[lowIndex, 4];
            });
            Assert.Throws<IndexOutOfRangeException>(() =>
            {
                var v = Bridge156.My2DArray[4, lowIndex];
            });
            Assert.Throws<IndexOutOfRangeException>(() =>
            {
                var v = Bridge156.My2DArray[lowIndex, lowIndex];
            });
        }

        [Test]
        public static void Test1DArrayIndexOutOfRangeExceptionIndexAsVariable()
        {
            var index = -2;
            var a = new int[] { 1, 2, 3 };

            Assert.Throws<IndexOutOfRangeException>(() =>
            {
                var v = a[index++];
            });

            Assert.AreEqual(1, a[++index]);
            Assert.AreEqual(2, a[++index]);
            Assert.AreEqual(3, a[++index]);

            Assert.Throws<IndexOutOfRangeException>(() =>
            {
                var v = a[++index];
            });
        }

        [Test]
        public static void Test2DArrayIndexOutOfRangeExceptionIndexAsVariable()
        {
            var index = -2;
            var a = new int[,]
            {
                { 1, 2, 3 },
                { 11, 12, 13 }
            };

            Assert.Throws<IndexOutOfRangeException>(() =>
            {
                var v = a[1, index++];
            });

            Assert.AreEqual(11, a[1, ++index]);
            Assert.AreEqual(12, a[1, ++index]);
            Assert.AreEqual(13, a[1, ++index]);

            Assert.Throws<IndexOutOfRangeException>(() =>
            {
                var v = a[1, ++index];
            });
        }
    }
}