using System;
using System.Reflection;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2052 - {0}")]
    [Reflectable]
    public class Bridge2052
    {
        [Test]
        public static void TestArrayCreateInstance()
        {
            Array my1DArray = Array.CreateInstance(typeof(int), 5);
            for (int i = my1DArray.GetLowerBound(0); i <= my1DArray.GetUpperBound(0); i++)
            {
                my1DArray.SetValue(i + 1, i);
            }

            Assert.AreEqual(typeof(int[]), my1DArray.GetType());
            Assert.AreEqual(5, my1DArray.Length);
            Assert.AreEqual(1, my1DArray[0]);
            Assert.AreEqual(5, my1DArray[4]);

            Array my2DArray = Array.CreateInstance(typeof(string), 2, 3);
            for (int i = my2DArray.GetLowerBound(0); i <= my2DArray.GetUpperBound(0); i++)
            {
                for (int j = my2DArray.GetLowerBound(1); j <= my2DArray.GetUpperBound(1); j++)
                {
                    my2DArray.SetValue("abc" + i + j, i, j);
                }
            }

            Assert.AreEqual(typeof(string[,]), my2DArray.GetType());
            Assert.AreEqual(2, my2DArray.Rank);
            Assert.AreEqual(1, my2DArray.GetUpperBound(0));
            Assert.AreEqual(2, my2DArray.GetUpperBound(1));
            Assert.AreEqual("abc00", my2DArray.GetValue(0, 0));
            Assert.AreEqual("abc12", my2DArray.GetValue(1, 2));

            Array my3DArray = Array.CreateInstance(typeof(object), 2, 3, 4);
            for (int i = my3DArray.GetLowerBound(0); i <= my3DArray.GetUpperBound(0); i++)
            {
                for (int j = my3DArray.GetLowerBound(1); j <= my3DArray.GetUpperBound(1); j++)
                {
                    for (int k = my3DArray.GetLowerBound(2); k <= my3DArray.GetUpperBound(2); k++)
                    {
                        my3DArray.SetValue("abc" + i + j + k, i, j, k);
                    }
                }
            }

            Assert.AreEqual(typeof(object[,,]), my3DArray.GetType());
            Assert.AreEqual(3, my3DArray.Rank);
            Assert.AreEqual(1, my3DArray.GetUpperBound(0));
            Assert.AreEqual(2, my3DArray.GetUpperBound(1));
            Assert.AreEqual(3, my3DArray.GetUpperBound(2));
            Assert.AreEqual("abc000", my3DArray.GetValue(0, 0, 0));
            Assert.AreEqual("abc123", my3DArray.GetValue(1, 2, 3));

            int[] myLengthsArray = new int[4] { 2, 3, 4, 5 };
            Array my4DArray = Array.CreateInstance(typeof(string), myLengthsArray);
            for (int i = my4DArray.GetLowerBound(0); i <= my4DArray.GetUpperBound(0); i++)
            {
                for (int j = my4DArray.GetLowerBound(1); j <= my4DArray.GetUpperBound(1); j++)
                {
                    for (int k = my4DArray.GetLowerBound(2); k <= my4DArray.GetUpperBound(2); k++)
                    {
                        for (int l = my4DArray.GetLowerBound(3); l <= my4DArray.GetUpperBound(3); l++)
                        {
                            int[] myIndicesArray = new int[4] { i, j, k, l };
                            my4DArray.SetValue(Convert.ToString(i) + j + k + l, myIndicesArray);
                        }
                    }
                }
            }

            Assert.AreEqual(typeof(string[,,,]), my4DArray.GetType());
            Assert.AreEqual(4, my4DArray.Rank);
            Assert.AreEqual(1, my4DArray.GetUpperBound(0));
            Assert.AreEqual(2, my4DArray.GetUpperBound(1));
            Assert.AreEqual(3, my4DArray.GetUpperBound(2));
            Assert.AreEqual(4, my4DArray.GetUpperBound(3));
            Assert.AreEqual("0000", my4DArray.GetValue(0, 0, 0, 0));
            Assert.AreEqual("1234", my4DArray.GetValue(1, 2, 3, 4));
        }

        [Test]
        public static void TestArrayCreateInstanceShouldThrow()
        {
            Assert.Throws<ArgumentNullException>(() => { Array.CreateInstance(null, 5); });
            Assert.Throws<ArgumentNullException>(() => { Array.CreateInstance(null, 2, 3); });
            Assert.Throws<ArgumentNullException>(() => { Array.CreateInstance(null, 2, 3, 4); });
            Assert.Throws<ArgumentNullException>(() => { Array.CreateInstance(null, new int[4] { 2, 3, 4, 5 }); });
            Assert.Throws<ArgumentNullException>(() => { Array.CreateInstance(typeof(int), null); });

            Assert.Throws<ArgumentOutOfRangeException>(() => { Array.CreateInstance(typeof(int), -1); });
            Assert.Throws<ArgumentOutOfRangeException>(() => { Array.CreateInstance(typeof(int), 2, -1); });
            Assert.Throws<ArgumentOutOfRangeException>(() => { Array.CreateInstance(typeof(int), 2, 3, -1); });
            Assert.Throws<ArgumentOutOfRangeException>(() => { Array.CreateInstance(typeof(int), new int[4] { 2, 3, 4, -1 }); });
        }
    }
}