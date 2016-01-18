using Bridge;
using Bridge.Linq;
using Bridge.Test;
using Bridge.ClientTest;

using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;


namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_ARRAY)]
    [TestFixture(TestNameFormat = "Array - {0}")]
    public class ArrayTests
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
            Assert.AreEqual(new int[0].Length, 0);
            Assert.AreEqual(new[] { "x" }.Length, 1);
            Assert.AreEqual(new[] { "x", "y" }.Length, 2);
        }

        [Test]
        public void RankIsOne()
        {
            Assert.AreEqual(new int[0].Rank, 1);
        }

        [Test]
        public void GetLengthWorks()
        {
            Assert.AreEqual(new int[0].GetLength(0), 0);
            Assert.AreEqual(new[] { "x" }.GetLength(0), 1);
            Assert.AreEqual(new[] { "x", "y" }.GetLength(0), 2);
        }

        [Test]
        public void GetLowerBound()
        {
            Assert.AreEqual(new int[0].GetLowerBound(0), 0);
            Assert.AreEqual(new[] { "x" }.GetLowerBound(0), 0);
            Assert.AreEqual(new[] { "x", "y" }.GetLowerBound(0), 0);
        }

        [Test]
        public void GetUpperBoundWorks()
        {
            Assert.AreEqual(new int[0].GetUpperBound(0), -1);
            Assert.AreEqual(new[] { "x" }.GetUpperBound(0), 0);
            Assert.AreEqual(new[] { "x", "y" }.GetUpperBound(0), 1);
        }

        [Test]
        public void GettingValueByIndexWorks()
        {
            Assert.AreEqual(new[] { "x", "y" }[0], "x");
            Assert.AreEqual(new[] { "x", "y" }[1], "y");
        }

        [Test]
        public void GetValueWorks()
        {
            Assert.AreEqual(new[] { "x", "y" }.GetValue(0), "x");
            Assert.AreEqual(new[] { "x", "y" }.GetValue(1), "y");
        }

        [Test]
        public void SettingValueByIndexWorks()
        {
            var arr = new string[2];
            arr[0] = "x";
            arr[1] = "y";
            Assert.AreEqual(arr[0], "x");
            Assert.AreEqual(arr[1], "y");
        }

        [Test]
        public void SetValueWorks()
        {
            var arr = new string[2];
            arr.SetValue("x", 0);
            arr.SetValue("y", 1);
            Assert.AreEqual(arr[0], "x");
            Assert.AreEqual(arr[1], "y");
        }

        [Test]
        public void ForeachWorks()
        {
            string result = "";
            foreach (var s in new[] { "x", "y" })
            {
                result += s;
            }
            Assert.AreEqual(result, "xy");
        }

        [Test]
        public void CloneWorks()
        {
            var arr = new[] { "x", "y" };
            var arr2 = arr.Clone();
            Assert.False(arr == arr2);
            Assert.AreDeepEqual(arr, arr2);
        }

        [Test]
        public void ConcatWorks()
        {
            var arr = new[] { "a", "b" };
            Assert.AreDeepEqual(arr.Concat("c"), new[] { "a", "b", "c" });
            Assert.AreDeepEqual(arr.Concat("c", "d"), new[] { "a", "b", "c", "d" });
            Assert.AreDeepEqual(arr, new[] { "a", "b" });
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
            Assert.AreDeepEqual(new[] { "a", "b", "c", "d" }.Slice(2), new[] { "c", "d" });
            Assert.AreDeepEqual(new[] { "a", "b", "c", "d" }.Slice(1, 3), new[] { "b", "c" });
        }

        [Test]
        public void ForeachWithArrayItemCallbackWorks()
        {
            string result = "";
            new[] { "a", "b", "c" }.ForEach(s => result += s);
            Assert.AreEqual(result, "abc");
        }

        [Test]
        public void ForeachWithArrayCallbackWorks()
        {
            string result = "";
            new[] { "a", "b", "c" }.ForEach((s, i) => result += s + i);
            Assert.AreEqual(result, "a0b1c2");
        }

        [Test]
        public void IndexOfWithoutStartIndexWorks()
        {
            Assert.AreEqual(new[] { "a", "b", "c", "b" }.IndexOf("b"), 1);
        }

        [Test]
        public void IndexOfWithoutStartIndexUsesEqualsMethod()
        {
            var arr = new[] { new C(1), new C(2), new C(3) };
            Assert.AreEqual(arr.IndexOf(new C(2)), 1);
            Assert.AreEqual(arr.IndexOf(new C(4)), -1);
        }

        [Test]
        public void IndexOfWithStartIndexWorks()
        {
            Assert.AreEqual(new[] { "a", "b", "c", "b" }.IndexOf("b", 2), 3);
        }

        [Test]
        public void JoinWithoutDelimiterWorks()
        {
            Assert.AreEqual(new[] { "a", "b", "c", "b" }.Join(","), "a,b,c,b");

            Assert.AreEqual(new[] { "a", "b", "c", "b" }.Join("|"), "a|b|c|b");
        }

        [Test]
        public void ReverseWorks()
        {
            var arr = new[] { 1, 3, 4, 1, 3, 2 };
            arr.Reverse();
            Assert.AreDeepEqual(arr, new[] { 2, 3, 1, 4, 3, 1 });
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

            Assert.AreEqual(Array.BinarySearch(arr, 3), 2);
            Assert.True(Array.BinarySearch(arr, 6) < 0);
        }

        [Test]
        public void BinarySearch2Works()
        {
            var arr = new[] { 1, 2, 3, 3, 4, 5 };

            Assert.AreEqual(Array.BinarySearch(arr, 3, 2, 3), 3);
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

            Assert.AreEqual(Array.BinarySearch(arr, 3, new TestReverseComparer()), 2);
            Assert.AreEqual(Array.BinarySearch(arr, 6, new TestReverseComparer()), -1);
        }

        [Test]
        public void BinarySearch4Works()
        {
            var arr = new[] { 1, 2, 3, 3, 4, 5 };

            Assert.AreEqual(Array.BinarySearch(arr, 3, 2, 3, new TestReverseComparer()), 3);
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
            Assert.AreDeepEqual(arr, new[] { 1, 2, 4, 6, 6 });
        }

        [Test]
        public void Sort1Works()
        {
            var arr = new[] { 1, 6, 6, 4, 2 };
            Array.Sort(arr);
            Assert.AreDeepEqual(arr, new[] { 1, 2, 4, 6, 6 });
        }

        [Test]
        public void Sort2Works()
        {
            var arr = new[] { 1, 6, 6, 4, 2 };
            Array.Sort(arr, 2, 3);
            Assert.AreDeepEqual(arr, new[] { 1, 6, 2, 4, 6 });
        }

        [Test]
        public void Sort3Works()
        {
            var arr = new[] { 1, 2, 6, 3, 6, 7 };
            Array.Sort(arr, 2, 3, new TestReverseComparer());
            Assert.AreDeepEqual(arr, new[] { 1, 2, 6, 6, 3, 7 });
        }

        [Test]
        public void Sort4Works()
        {
            var arr = new[] { 1, 6, 6, 4, 2 };
            Array.Sort(arr, new TestReverseComparer());
            Assert.AreDeepEqual(arr, new[] { 6, 6, 4, 2, 1 });
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
            Assert.AreEqual(result, "xy");
        }

        [Test]
        public void ICollectionCountWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            Assert.AreEqual(l.Count, 3);
        }

        [Test]
        public void ICollectionAddWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            l.Add("a");
            Assert.AreDeepEqual(l, new[] { "x", "y", "z", "a" });
        }

        [Test]
        public void ICollectionClearWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            l.Clear();
            Assert.AreDeepEqual(l, new string[0]);
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
            Assert.True(l.Remove("y"));
            Assert.False(l.Remove("a"));
            Assert.AreDeepEqual(l, new[] { "x", "z" });
        }

        [Test]
        public void IListIndexingWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            Assert.AreEqual(l[1], "y");
            l[1] = "a";
            Assert.AreDeepEqual(l, new[] { "x", "a", "z" });
        }

        [Test]
        public void IListIndexOfWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            Assert.AreEqual(l.IndexOf("y"), 1);
            Assert.AreEqual(l.IndexOf("a"), -1);
        }

        [Test]
        public void IListIndexOfUsesEqualsMethod()
        {
            var arr = new[] { new C(1), new C(2), new C(3) };
            Assert.AreEqual(arr.IndexOf(new C(2)), 1);
            Assert.AreEqual(arr.IndexOf(new C(4)), -1);
        }

        [Test]
        public void IListInsertWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            l.Insert(1, "a");
            Assert.AreDeepEqual(l, new[] { "x", "a", "y", "z" });
        }

        [Test]
        public void IListRemoveAtWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            l.RemoveAt(1);
            Assert.AreDeepEqual(l, new[] { "x", "z" });
        }
    }
}
