using System;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether the back-casting of an
    /// array results in the same type.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3321 - {0}")]
    public class Bridge3321
    {
        /// <summary>
        /// Test casting and then verifying if the returned type is the expected.
        /// </summary>
        [Test]
        public static void Test2DArrayClone()
        {
            var a = (int[])new int[0].Clone();

            Assert.AreEqual(1, a.Rank, "One dimensional array casted back to an one-dimensional array.");
            Assert.AreEqual(typeof(int), a.GetType().GetElementType(), "Array element's type is the expected one.");

            var n = (int[,])new int[0, 0].Clone();

            Assert.AreEqual(2, n.Rank, "Two dimensional array casted back to a two-dimensional array.");
            Assert.AreEqual(typeof(int), n.GetType().GetElementType(), "2d Array element's type is the expected one.");

            var x = (int[,,])new int[0, 0, 0].Clone();

            Assert.AreEqual(3, x.Rank, "Three dimensional array casted back to a three-dimensional array.");
            Assert.AreEqual(typeof(int), x.GetType().GetElementType(), "3d Array element's type is the expected one.");

            var f = (float[,,])new float[0, 0, 0].Clone();

            Assert.AreEqual(3, f.Rank, "Three dimensional float array casted back to a three-dimensional array.");
            Assert.AreEqual(typeof(float), f.GetType().GetElementType(), "3d float Array element's type is the expected one.");
        }
    }
}