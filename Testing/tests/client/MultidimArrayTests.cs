using System;
using System.Collections.Generic;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_ARRAY)]
    [TestFixture(TestNameFormat = "MultidimArray - {0}")]
    public class MultidimArrayTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(int[,]).GetClassName(), "Array", "FullName should be Array");
            object arr = new int[1, 1];
            Assert.True(arr is Array, "is Array should be true");
            Assert.True(arr is int[,], "is int[,] should be true");
        }

        [Test]
        public void LengthWorks()
        {
            var arr = new int[3, 2];
            Assert.AreEqual(6, arr.Length);
        }

        [Test]
        public void GetValueWorksForUninitializedElement()
        {
            var arr = new int[2, 2];
            Assert.AreStrictEqual(arr.GetValue(0, 0), 0);
        }

        [Test]
        public void GetValueByIndexWorksForUninitializedElement()
        {
            var arr = new int[2, 2];
            Assert.AreStrictEqual(arr[0, 0], 0);
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
            Assert.AreEqual(arr[0, 0], "a");
            Assert.AreEqual(arr[0, 1], "b");
            Assert.AreEqual(arr[1, 0], "c");
            Assert.AreEqual(arr[1, 1], "d");
            Assert.AreEqual(arr[2, 0], "e");
            Assert.AreEqual(arr[2, 1], "f");
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
            Assert.AreEqual(arr[0, 0], "a");
            Assert.AreEqual(arr[0, 1], "b");
            Assert.AreEqual(arr[1, 0], "c");
            Assert.AreEqual(arr[1, 1], "d");
            Assert.AreEqual(arr[2, 0], "e");
            Assert.AreEqual(arr[2, 1], "f");
        }


        private int[,] SetUpArray(params object[] values)
        {
            var arr = new int[values.Length, 2];

            for (int i = 0; i < values.Length; i++)
            {
                var v = values[i] as int[];
                arr.SetValue(v[0], i, 0);
                arr.SetValue(v[1], i, 1);
            }

            return arr;
        }

        [Test]
        public void GetValueWorks()
        {
            var arr = SetUpArray(new object[] { new int[] { 1, 2 }, new int[] { 3, 4 }, new int[] { 5, 6 } });
            Assert.AreEqual(arr.GetValue(0, 0), 1);
            Assert.AreEqual(arr.GetValue(0, 1), 2);
            Assert.AreEqual(arr.GetValue(1, 0), 3);
            Assert.AreEqual(arr.GetValue(1, 1), 4);
            Assert.AreEqual(arr.GetValue(2, 0), 5);
            Assert.AreEqual(arr.GetValue(2, 1), 6);
        }

        [Test]
        public void GettingValueByIndexWorks()
        {
            var arr = SetUpArray(new object[] { new int[] { 1, 2 }, new int[] { 3, 4 }, new int[] { 5, 6 } });
            Assert.AreEqual(arr[0, 0], 1);
            Assert.AreEqual(arr[0, 1], 2);
            Assert.AreEqual(arr[1, 0], 3);
            Assert.AreEqual(arr[1, 1], 4);
            Assert.AreEqual(arr[2, 0], 5);
            Assert.AreEqual(arr[2, 1], 6);
        }

        // TODO [Array] Multidimensional initializer does not compile #354 All the tests below
        //[Test]
        //public void GetLengthWorks()
        //{
        //    var arr = new int[,,] { { { 1, 2 }, { 3, 4 }, { 5, 6 } }, { { 7, 8 }, { 9, 10 }, { 11, 12 } }, { { 13, 14 }, { 15, 16 }, { 17, 18 } }, { { 19, 20 }, { 21, 22 }, { 23, 24 } } };
        //    Assert.AreEqual(arr.GetLength(0), 4);
        //    Assert.AreEqual(arr.GetLength(1), 3);
        //    Assert.AreEqual(arr.GetLength(2), 2);
        //}

        //[Test]
        //public void GetLowerBoundWorks()
        //{
        //    var arr = new int[,,] { { { 1, 2 }, { 3, 4 }, { 5, 6 } }, { { 7, 8 }, { 9, 10 }, { 11, 12 } }, { { 13, 14 }, { 15, 16 }, { 17, 18 } }, { { 19, 20 }, { 21, 22 }, { 23, 24 } } };
        //    Assert.AreEqual(arr.GetLowerBound(0), 0);
        //    Assert.AreEqual(arr.GetLowerBound(1), 0);
        //    Assert.AreEqual(arr.GetLowerBound(2), 0);
        //}

        //[Test]
        //public void GetUpperBoundWorks()
        //{
        //    var arr = new int[,,] { { { 1, 2 }, { 3, 4 }, { 5, 6 } }, { { 7, 8 }, { 9, 10 }, { 11, 12 } }, { { 13, 14 }, { 15, 16 }, { 17, 18 } }, { { 19, 20 }, { 21, 22 }, { 23, 24 } } };
        //    Assert.AreEqual(arr.GetUpperBound(0), 3);
        //    Assert.AreEqual(arr.GetUpperBound(1), 2);
        //    Assert.AreEqual(arr.GetUpperBound(2), 1);
        //}

        //[Test]
        //public void ForeachWorks()
        //{
        //    var arr = new int[,,] { { { 1, 2 }, { 3, 4 }, { 5, 6 } }, { { 7, 8 }, { 9, 10 }, { 11, 12 } }, { { 13, 14 }, { 15, 16 }, { 17, 18 } }, { { 19, 20 }, { 21, 22 }, { 23, 24 } } };
        //    var actual = new List<int>();
        //    foreach (var i in arr)
        //    {
        //        actual.Add(i);
        //    }
        //    Assert.AreEqual(actual, new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 });
        //}

        [Test]
        public void RankWorks()
        {
            Assert.AreEqual(new int[0, 0].Rank, 2);
            Assert.AreEqual(new int[0, 0, 0].Rank, 3);
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
