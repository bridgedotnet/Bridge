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
            Assert.AreEqual(0, Bridge156.MyArray[4]);
            Assert.Throws<IndexOutOfRangeException>(() =>
            {
                var v = Bridge156.MyArray[5];
            });

            Assert.AreEqual(0, Bridge156.My2DArray[4,4]);
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
        }
    }
}