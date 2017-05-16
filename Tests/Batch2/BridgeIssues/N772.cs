using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch2.BridgeIssues
{
    // Bridge[#772]
    // "useTypedArray" bridge.json option is true in this project
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#772 - " + Constants.BATCH_NAME + " {0}")]
    public class N772
    {
        private class C
        {
            public readonly int i;

            public C(int i)
            {
                this.i = i;
            }

            public override bool Equals(object o)
            {
                return o is C && i == ((C)o).i;
            }

            public override int GetHashCode()
            {
                return i;
            }
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            object arr = new[] { 1, 2, 3 };
            Assert.True(arr is Array, "is Array should be true");
            Assert.True(arr is int[], "is int[] should be true");
            Assert.True(arr is ICollection, "is ICollection should be true");
            Assert.True(arr is IEnumerable, "is IEnumerable should be true");
            Assert.True(arr is ICloneable, "is ICloneable should be true");
            Assert.True(arr is ICollection<int>, "is ICollection<int> should be true");
            Assert.True(arr is IEnumerable<int>, "is IEnumerable<int> should be true");
            Assert.True(arr is IList<int>, "is IList<int> should be true");
        }

        [Test]
        public void LengthWorks()
        {
            Assert.AreEqual(0, new int[0].Length);
            Assert.AreEqual(1, new[] { "x" }.Length);
            Assert.AreEqual(2, new[] { "x", "y" }.Length);
        }

        [Test]
        public void RankIsOne()
        {
            Assert.AreEqual(1, new int[0].Rank);
        }

        [Test]
        public void GetLengthWorks()
        {
            Assert.AreEqual(0, new int[0].GetLength(0));
            Assert.AreEqual(1, new[] { "x" }.GetLength(0));
            Assert.AreEqual(2, new[] { "x", "y" }.GetLength(0));
        }

        [Test]
        public void GetLowerBound()
        {
            Assert.AreEqual(0, new int[0].GetLowerBound(0));
            Assert.AreEqual(0, new[] { "x" }.GetLowerBound(0));
            Assert.AreEqual(0, new[] { "x", "y" }.GetLowerBound(0));
        }

        [Test]
        public void GetUpperBoundWorks()
        {
            Assert.AreEqual(-1, new int[0].GetUpperBound(0));
            Assert.AreEqual(0, new[] { "x" }.GetUpperBound(0));
            Assert.AreEqual(1, new[] { "x", "y" }.GetUpperBound(0));
        }

        [Test]
        public void GettingValueByIndexWorks()
        {
            Assert.AreEqual("x", new[] { "x", "y" }[0]);
            Assert.AreEqual("y", new[] { "x", "y" }[1]);
        }

        [Test]
        public void GetValueWorks()
        {
            Assert.AreEqual("x", new[] { "x", "y" }.GetValue(0));
            Assert.AreEqual("y", new[] { "x", "y" }.GetValue(1));
        }

        [Test]
        public void SettingValueByIndexWorks()
        {
            var arr = new string[2];
            arr[0] = "x";
            arr[1] = "y";
            Assert.AreEqual("x", arr[0]);
            Assert.AreEqual("y", arr[1]);
        }

        [Test]
        public void SetValueWorks()
        {
            var arr = new string[2];
            arr.SetValue("x", 0);
            arr.SetValue("y", 1);
            Assert.AreEqual("x", arr[0]);
            Assert.AreEqual("y", arr[1]);
        }

        [Test]
        public void ForeachWorks()
        {
            string result = "";
            foreach (var s in new[] { "x", "y" })
            {
                result += s;
            }
            Assert.AreEqual("xy", result);
        }

        [Test]
        public void CloneWorks()
        {
            var arr = new[] { "x", "y" };
            var arr2 = arr.Clone();
            Assert.False(arr == arr2);
            Assert.AreEqual(arr2, arr);
        }

        [Test]
        public void ConcatWorks()
        {
            var arr = new[] { "a", "b" };
            Assert.AreDeepEqual(new[] { "a", "b", "c" }, arr.Concat("c"));
            Assert.AreDeepEqual(new[] { "a", "b", "c", "d" }, arr.Concat("c", "d"));
            Assert.AreDeepEqual(new[] { "a", "b" }, arr);
        }

        [Test]
        public void ContainsWorks()
        {
            var arr = new[] { "x", "y" };
            Assert.True(arr.Contains("x"));
            Assert.False(arr.Contains("z"));
        }

        [Test]
        public void ContainsUsesEqualsMethod()
        {
            C[] arr = new[] { new C(1), new C(2), new C(3) };
            Assert.True(arr.Contains(new C(2)));
            Assert.False(arr.Contains(new C(4)));
        }

        [Test]
        public void AllWithArrayItemFilterCallbackWorks()
        {
            Assert.True(new[] { 1, 2, 3 }.All(x => x > 0));
            Assert.False(new[] { 1, 2, 3 }.All(x => x > 1));
        }

        [Test]
        public void SliceWithoutEndWorks()
        {
            Assert.AreDeepEqual(new[] { "c", "d" }, new[] { "a", "b", "c", "d" }.Slice(2));
            Assert.AreDeepEqual(new[] { "b", "c" }, new[] { "a", "b", "c", "d" }.Slice(1, 3));
        }

        [Test]
        public void ForeachWithArrayItemCallbackWorks()
        {
            string result = "";
            new[] { "a", "b", "c" }.ForEach(s => result += s);
            Assert.AreEqual("abc", result);
        }

        [Test]
        public void IndexOfWithoutStartIndexWorks()
        {
            Assert.AreEqual(1, new[] { "a", "b", "c", "b" }.IndexOf("b"));
        }

        [Test]
        public void IndexOfWithoutStartIndexUsesEqualsMethod()
        {
            var arr = new[] { new C(1), new C(2), new C(3) };
            Assert.AreEqual(1, Array.IndexOf(arr, new C(2)));
            Assert.AreEqual(-1, Array.IndexOf(arr, new C(4)));
        }

        [Test]
        public void IndexOfWithStartIndexWorks()
        {
            Assert.AreEqual(3, new[] { "a", "b", "c", "b" }.IndexOf("b", 2));
        }

        [Test]
        public void JoinWithoutDelimiterWorks()
        {
            Assert.AreEqual("a,b,c,b", new[] { "a", "b", "c", "b" }.Join(","));

            Assert.AreEqual("a|b|c|b", new[] { "a", "b", "c", "b" }.Join("|"));
        }

        [Test]
        public void ReverseWorks()
        {
            var arr = new[] { 1, 3, 4, 1, 3, 2 };
            arr.Reverse();
            Assert.AreEqual(new[] { 2, 3, 1, 4, 3, 1 }, arr);
        }

        [Test]
        public void AnyWithArrayItemFilterCallbackWorks()
        {
            Assert.True(new[] { 1, 2, 3, 4 }.Any(i => i > 1));
            Assert.False(new[] { 1, 2, 3, 4 }.Any(i => i > 5));
        }

        [Test]
        public void BinarySearch1Works()
        {
            var arr = new[] { 1, 2, 3, 3, 4, 5 };

            Assert.AreEqual(2, Array.BinarySearch(arr, 3));
            Assert.True(Array.BinarySearch(arr, 6) < 0);
        }

        [Test]
        public void BinarySearch2Works()
        {
            var arr = new[] { 1, 2, 3, 3, 4, 5 };

            Assert.AreEqual(3, Array.BinarySearch(arr, 3, 2, 3));
            Assert.True(Array.BinarySearch(arr, 2, 2, 4) < 0);
        }

        private class TestReverseComparer : IComparer<int>
        {
            public int Compare(int x, int y)
            {
                return x == y ? 0 : (x > y ? -1 : 1);
            }
        }

        [Test]
        public void BinarySearch3Works()
        {
            var arr = new[] { 1, 2, 3, 3, 4, 5 };

            Assert.AreEqual(2, Array.BinarySearch(arr, 3, new TestReverseComparer()));
            Assert.AreEqual(-1, Array.BinarySearch(arr, 6, new TestReverseComparer()));
        }

        [Test]
        public void BinarySearch4Works()
        {
            var arr = new[] { 1, 2, 3, 3, 4, 5 };

            Assert.AreEqual(3, Array.BinarySearch(arr, 3, 2, 3, new TestReverseComparer()));
            Assert.True(Array.BinarySearch(arr, 3, 2, 4, new TestReverseComparer()) < 0);
        }

        [Test]
        public void BinarySearchExceptionsWorks()
        {
            int[] arr1 = null;
            var arr2 = new[] { 1, 2, 3, 3, 4, 5 };

            Assert.Throws(() => { Array.BinarySearch(arr1, 1); });
            Assert.Throws(() => { Array.BinarySearch(arr2, -1, 1, 1); });
            Assert.Throws(() => { Array.BinarySearch(arr2, 1, 6, 1); });
        }

        [Test]
        public void SortWithDefaultCompareWorks()
        {
            var arr = new[] { 1, 6, 6, 4, 2 };
            arr.JsSort();
            Assert.AreEqual(new[] { 1, 2, 4, 6, 6 }, arr);
        }

        [Test]
        public void Sort1Works()
        {
            var arr = new[] { 1, 6, 6, 4, 2 };
            Array.Sort(arr);
            Assert.AreEqual(new[] { 1, 2, 4, 6, 6 }, arr);
        }

        [Test]
        public void Sort2Works()
        {
            var arr = new[] { 1, 6, 6, 4, 2 };
            Array.Sort(arr, 2, 3);
            Assert.AreEqual(new[] { 1, 6, 2, 4, 6 }, arr);
        }

        [Test]
        public void Sort3Works()
        {
            var arr = new[] { 1, 2, 6, 3, 6, 7 };
            Array.Sort(arr, 2, 3, new TestReverseComparer());
            Assert.AreEqual(new[] { 1, 2, 6, 6, 3, 7 }, arr);
        }

        [Test]
        public void Sort4Works()
        {
            var arr = new[] { 1, 6, 6, 4, 2 };
            Array.Sort(arr, new TestReverseComparer());
            Assert.AreEqual(new[] { 6, 6, 4, 2, 1 }, arr);
        }

        [Test]
        public void SortExceptionsWorks()
        {
            int[] arr1 = null;

            Assert.Throws(() => { Array.Sort(arr1); });
        }

        [Test]
        public void ForeachWhenCastToIListWorks()
        {
            IList<string> list = new[] { "x", "y" };
            string result = "";
            foreach (var s in list)
            {
                result += s;
            }
            Assert.AreEqual("xy", result);
        }

        [Test]
        public void ICollectionCountWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            Assert.AreEqual(3, l.Count);
        }

        [Test]
        public void ICollectionAddWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            Assert.Throws<NotSupportedException>(() => { l.Add("a"); });
        }

        [Test]
        public void ICollectionClearWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            Assert.Throws<NotSupportedException>(() => { l.Clear(); });
        }

        [Test]
        public void ICollectionContainsWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            Assert.True(l.Contains("y"));
            Assert.False(l.Contains("a"));
        }

        [Test]
        public void ICollectionContainsUsesEqualsMethod()
        {
            IList<C> l = new[] { new C(1), new C(2), new C(3) };
            Assert.True(l.Contains(new C(2)));
            Assert.False(l.Contains(new C(4)));
        }

        [Test]
        public void ICollectionRemoveWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            Assert.Throws<NotSupportedException>(() => { l.Remove("y"); });
        }

        [Test]
        public void IListIndexingWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            Assert.AreEqual("y", l[1]);
            l[1] = "a";
            Assert.AreEqual(new[] { "x", "a", "z" }, l.ToArray());
        }

        [Test]
        public void IListIndexOfWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            Assert.AreEqual(1, l.IndexOf("y"));
            Assert.AreEqual(-1, l.IndexOf("a"));
        }

        [Test]
        public void IListIndexOfUsesEqualsMethod()
        {
            var arr = new[] { new C(1), new C(2), new C(3) };
            Assert.AreEqual(1, Array.IndexOf(arr, new C(2)));
            Assert.AreEqual(-1, Array.IndexOf(arr, new C(4)));
        }

        [Test]
        public void IListInsertWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            Assert.Throws<NotSupportedException>(() => { l.Insert(1, "a"); });
        }

        [Test]
        public void IListRemoveAtWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            Assert.Throws<NotSupportedException>(() => { l.RemoveAt(1); });
        }

        [Test(ExpectedCount = 10)]
        public static void TestUseCase()
        {
            //These arrays depend on "useTypedArray" bridge.json option
            var byteArray = new byte[1];
            var sbyteArray = new sbyte[2];
            var shortArray = new short[3];
            var ushortArray = new ushort[4];
            var intArray = new int[5];
            var uintArray = new uint[6];
            var floatArray = new float[7];
            var doubleArray = new double[8];

            //These arrays do not depend on "useTypedArray" bridge.json option
            var stringArray = new string[9];
            var decimalArray = new decimal[10];

            byteArray[0] = 1;
            sbyteArray[0] = 2;
            shortArray[0] = 3;
            ushortArray[0] = 4;
            intArray[0] = 5;
            uintArray[0] = 6;
            floatArray[0] = 7;
            doubleArray[0] = 8;

            stringArray[0] = "9";
            decimalArray[0] = 10m;

            Assert.AreEqual(1, byteArray[0], "get byteArray[0]");
            Assert.AreEqual(2, sbyteArray[0], "get sbyteArray[0]");
            Assert.AreEqual(3, shortArray[0], "get shortArray[0]");
            Assert.AreEqual(4, ushortArray[0], "get ushortArray[0]");
            Assert.AreEqual(5, intArray[0], "get intArray[0]");
            Assert.AreEqual(6, uintArray[0], "get uintArray[0]");
            Assert.AreEqual(7, floatArray[0], "get floatArray[0]");
            Assert.AreEqual(8, doubleArray[0], "get doubleArray[0]");

            Assert.AreEqual("9", stringArray[0], "get stringArray[0]");
            Assert.AreEqual(10m, decimalArray[0], "get decimalArray[0]");
        }
    }
}