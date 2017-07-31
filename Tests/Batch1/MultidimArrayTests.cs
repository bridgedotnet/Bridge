using Bridge.Test.NUnit;

using System;
using System.Collections.Generic;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_ARRAY)]
    [TestFixture(TestNameFormat = "MultidimArray - {0}")]
    public class MultidimArrayTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Int32[,]", typeof(int[,]).FullName, "FullName should be Array");
            Assert.True(typeof(int[,]).IsClass, "IsClass should be true");
            object arr = new int[1, 1];
            Assert.True(arr is Array, "is Array should be true");
            Assert.True(arr is int[,], "is int[,] should be true");
        }

        [Test]
        public void LengthWorks()
        {
            var arr = new int[3, 2];
            Assert.AreEqual(arr.Length, 6);
        }

        [Test]
        public void GettingValueByIndexWorks()
        {
            var arr = new[,] { { 1, 2 }, { 3, 4 }, { 5, 6 } };
            Assert.AreEqual(1, arr[0, 0]);
            Assert.AreEqual(2, arr[0, 1]);
            Assert.AreEqual(3, arr[1, 0]);
            Assert.AreEqual(4, arr[1, 1]);
            Assert.AreEqual(5, arr[2, 0]);
            Assert.AreEqual(6, arr[2, 1]);
        }

        [Test]
        public void GetValueWorks()
        {
            var arr = new[,] { { 1, 2 }, { 3, 4 }, { 5, 6 } };
            Assert.AreEqual(1, arr.GetValue(0, 0));
            Assert.AreEqual(2, arr.GetValue(0, 1));
            Assert.AreEqual(3, arr.GetValue(1, 0));
            Assert.AreEqual(4, arr.GetValue(1, 1));
            Assert.AreEqual(5, arr.GetValue(2, 0));
            Assert.AreEqual(6, arr.GetValue(2, 1));
        }

        [Test]
        public void GetValueWorksForUninitializedElement()
        {
            var arr = new int[2, 2];
            Assert.AreStrictEqual(0, arr.GetValue(0, 0));
        }

        [Test]
        public void GetValueByIndexWorksForUninitializedElement()
        {
            var arr = new int[2, 2];
            Assert.AreStrictEqual(0, arr[0, 0]);
        }

        [Test]
        public void SettingValueByIndexWorks()
        {
            var arr = new string[3, 2];
            arr[0, 0] = "a";
            arr[0, 1] = "b";
            arr[1, 0] = "c";
            arr[1, 1] = "d";
            arr[2, 0] = "e";
            arr[2, 1] = "f";
            Assert.AreEqual("a", arr[0, 0]);
            Assert.AreEqual("b", arr[0, 1]);
            Assert.AreEqual("c", arr[1, 0]);
            Assert.AreEqual("d", arr[1, 1]);
            Assert.AreEqual("e", arr[2, 0]);
            Assert.AreEqual("f", arr[2, 1]);
        }

        [Test]
        public void SetValueWorks()
        {
            var arr = new string[3, 2];
            arr.SetValue("a", 0, 0);
            arr.SetValue("b", 0, 1);
            arr.SetValue("c", 1, 0);
            arr.SetValue("d", 1, 1);
            arr.SetValue("e", 2, 0);
            arr.SetValue("f", 2, 1);
            Assert.AreEqual("a", arr[0, 0]);
            Assert.AreEqual("b", arr[0, 1]);
            Assert.AreEqual("c", arr[1, 0]);
            Assert.AreEqual("d", arr[1, 1]);
            Assert.AreEqual("e", arr[2, 0]);
            Assert.AreEqual("f", arr[2, 1]);
        }

        [Test]
        public void GetLengthWorks()
        {
            var arr = new int[,,] { { { 1, 2 }, { 3, 4 }, { 5, 6 } }, { { 7, 8 }, { 9, 10 }, { 11, 12 } }, { { 13, 14 }, { 15, 16 }, { 17, 18 } }, { { 19, 20 }, { 21, 22 }, { 23, 24 } } };
            Assert.AreEqual(arr.GetLength(0), 4);
            Assert.AreEqual(arr.GetLength(1), 3);
            Assert.AreEqual(arr.GetLength(2), 2);
        }

        [Test]
        public void GetLowerBoundWorks()
        {
            var arr = new int[,,] { { { 1, 2 }, { 3, 4 }, { 5, 6 } }, { { 7, 8 }, { 9, 10 }, { 11, 12 } }, { { 13, 14 }, { 15, 16 }, { 17, 18 } }, { { 19, 20 }, { 21, 22 }, { 23, 24 } } };
            Assert.AreEqual(arr.GetLowerBound(0), 0);
            Assert.AreEqual(arr.GetLowerBound(1), 0);
            Assert.AreEqual(arr.GetLowerBound(2), 0);
        }

        [Test]
        public void GetUpperBoundWorks()
        {
            var arr = new int[,,] { { { 1, 2 }, { 3, 4 }, { 5, 6 } }, { { 7, 8 }, { 9, 10 }, { 11, 12 } }, { { 13, 14 }, { 15, 16 }, { 17, 18 } }, { { 19, 20 }, { 21, 22 }, { 23, 24 } } };
            Assert.AreEqual(arr.GetUpperBound(0), 3);
            Assert.AreEqual(arr.GetUpperBound(1), 2);
            Assert.AreEqual(arr.GetUpperBound(2), 1);
        }

        [Test]
        public void ForeachWorks()
        {
            var arr = new int[,,] { { { 1, 2 }, { 3, 4 }, { 5, 6 } }, { { 7, 8 }, { 9, 10 }, { 11, 12 } }, { { 13, 14 }, { 15, 16 }, { 17, 18 } }, { { 19, 20 }, { 21, 22 }, { 23, 24 } } };
            var actual = new List<int>();
            foreach (var i in arr)
            {
                actual.Add(i);
            }
            Assert.AreEqual(new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 }, actual.ToArray());
        }

        [Test]
        public void RankWorks()
        {
            Assert.AreEqual(2, new int[0, 0].Rank);
            Assert.AreEqual(3, new int[0, 0, 0].Rank);
        }

        [Test]
        public void GetValueWithIndexOutOfRangeThrowsAnException()
        {
#pragma warning disable 219, 251
            var arr = new int[2, 3, 4];
            int i = arr[1, 2, 3];
            Assert.Throws(() => i = arr[2, 2, 1]);
            Assert.Throws(() => i = arr[1, 3, 1]);
            Assert.Throws(() => i = arr[1, 2, 4]);
            Assert.Throws(() => i = arr[-1, 0, 0]);
            Assert.Throws(() => i = arr[0, -1, 0]);
            Assert.Throws(() => i = arr[0, 0, -1]);
#pragma warning restore 219, 251
        }

        [Test]
        public void SetValueWithIndexOutOfRangeThrowsAnException()
        {
#pragma warning disable 251
            var arr = new int[2, 3, 4];
            arr[1, 2, 3] = 0;
            Assert.Throws(() => arr[2, 2, 1] = 0);
            Assert.Throws(() => arr[1, 3, 1] = 0);
            Assert.Throws(() => arr[1, 2, 4] = 0);
            Assert.Throws(() => arr[-1, 0, 0] = 0);
            Assert.Throws(() => arr[0, -1, 0] = 0);
            Assert.Throws(() => arr[0, 0, -1] = 0);
#pragma warning restore 251
        }
    }
}