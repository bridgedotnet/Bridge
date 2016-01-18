using Bridge;
using Bridge.Linq;
using Bridge.Test;
using Bridge.ClientTest;

using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.Collections.Generic
{
    [Category(Constants.MODULE_LIST)]
    [TestFixture(TestNameFormat = "List - {0}")]
    public class ListTests
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
            Assert.AreEqual(typeof(List<int>).GetClassName(), "Bridge.List$1$Bridge.Int", "GetClassName()");
            object list = new List<int>();
            Assert.True(list is List<int>, "is int[] should be true");
            Assert.True(list is IList<int>, "is IList<int> should be true");
            Assert.True(list is ICollection<int>, "is ICollection<int> should be true");
            Assert.True(list is IEnumerable<int>, "is IEnumerable<int> should be true");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var l = new List<int>();
            Assert.AreEqual(l.Count, 0);
        }

        [Test]
        public void ConstructorWithCapacityWorks()
        {
            var l = new List<int>(12);
            Assert.AreEqual(l.Count, 0);
        }

        [Test]
        public void ConstructingFromArrayWorks()
        {
            var arr = new[] { 1, 4, 7, 8 };
            var l = new List<int>(arr);
            Assert.False((object)l == (object)arr);
            Assert.AreDeepEqual(l.ToArray(), arr);
        }

        [Test]
        public void ConstructingFromListWorks()
        {
            var arr = new List<int>(new[] { 1, 4, 7, 8 });
            var l = new List<int>(arr);
            Assert.False((object)l == (object)arr);
            Assert.AreDeepEqual(l, arr);
        }

        [Test]
        public void ConstructingFromIEnumerableWorks()
        {
            var enm = (IEnumerable<int>)new List<int>(new[] { 1, 4, 7, 8 });
            var l = new List<int>(enm);
            Assert.False((object)l == (object)enm);
            Assert.AreDeepEqual(l.ToArray(), new[] { 1, 4, 7, 8 });
        }

        [Test]
        public void CountWorks()
        {
            Assert.AreEqual(new List<string>().Count, 0);
            Assert.AreEqual(new List<string> { "x" }.Count, 1);
            Assert.AreEqual(new List<string> { "x", "y" }.Count, 2);
        }

        [Test]
        public void IndexingWorks()
        {
            Assert.AreEqual(new List<string> { "x", "y" }[0], "x");
            Assert.AreEqual(new List<string> { "x", "y" }[1], "y");
        }

        [Test]
        public void ForeachWorks()
        {
            string result = "";
            foreach (var s in new List<string> { "x", "y" })
            {
                result += s;
            }
            Assert.AreEqual(result, "xy");
        }

        [Test]
        public void GetEnumeratorWorks()
        {
            var e = new List<string> { "x", "y" }.GetEnumerator();
            Assert.True(e.MoveNext());
            Assert.AreEqual(e.Current, "x");
            Assert.True(e.MoveNext());
            Assert.AreEqual(e.Current, "y");
            Assert.False(e.MoveNext());
        }

        [Test]
        public void AddWorks()
        {
            var l = new List<string> { "x", "y" };
            l.Add("a");
            Assert.AreDeepEqual(l.ToArray(), new[] { "x", "y", "a" });
        }

        [Test]
        public void AddRangeWorks()
        {
            var l = new List<string> { "x", "y" };
            l.AddRange(new[] { "a", "b", "c" });
            Assert.AreDeepEqual(l.ToArray(), new[] { "x", "y", "a", "b", "c" });
        }

        [Test]
        public void BinarySearch1Works()
        {
            var arr = new List<int> { 1, 2, 3, 3, 4, 5 };

            Assert.AreEqual(arr.BinarySearch(3), 2);
            Assert.True(arr.BinarySearch(6) < 0);
        }

        [Test]
        public void BinarySearch2Works()
        {
            var arr = new List<int> { 1, 2, 3, 3, 4, 5 };

            Assert.AreEqual(arr.BinarySearch(3, 2, 3), 3);
            Assert.True(arr.BinarySearch(2, 2, 4) < 0);
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
            var arr = new List<int> { 1, 2, 3, 3, 4, 5 };

            Assert.AreEqual(arr.BinarySearch(3, new TestReverseComparer()), 2);
            Assert.AreEqual(arr.BinarySearch(6, new TestReverseComparer()), -1);
        }

        [Test]
        public void BinarySearch4Works()
        {
            var arr = new List<int> { 1, 2, 3, 3, 4, 5 };

            Assert.AreEqual(arr.BinarySearch(3, 2, 3, new TestReverseComparer()), 3);
            Assert.True(arr.BinarySearch(3, 2, 4, new TestReverseComparer()) < 0);
        }

        [Test]
        public void ClearWorks()
        {
            var l = new List<string> { "x", "y" };
            l.Clear();
            Assert.AreEqual(0, l.Count);
        }


        [Test]
        public void ContainsWorks()
        {
            var list = new List<string> { "x", "y" };
            Assert.True(list.Contains("x"));
            Assert.False(list.Contains("z"));
        }

        [Test]
        public void ContainsUsesEqualsMethod()
        {
            List<C> l = new List<C> { new C(1), new C(2), new C(3) };
            Assert.True(l.Contains(new C(2)));
            Assert.False(l.Contains(new C(4)));
        }

        [Test]
        public void SliceWithoutEndWorks()
        {
            Assert.AreDeepEqual(new List<string> { "a", "b", "c", "d" }.Slice(2).ToArray(), new[] { "c", "d" });
        }

        [Test]
        public void SliceWithEndWorks()
        {
            Assert.AreDeepEqual(new List<string> { "a", "b", "c", "d" }.Slice(1, 3).ToArray(), new[] { "b", "c" });
        }

        [Test]
        public void ForeachWithListItemCallbackWorks()
        {
            string result = "";
            new List<string> { "a", "b", "c" }.ForEach(s => result += s);
            Assert.AreEqual(result, "abc");
        }

        [Test]
        public void ForeachWithListCallbackWorks()
        {
            string result = "";
            new List<string> { "a", "b", "c" }.ForEach((s, i) => result += s + i);
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
            List<C> l = new List<C> { new C(1), new C(2), new C(3) };
            Assert.AreEqual(l.IndexOf(new C(2)), 1);
            Assert.AreEqual(l.IndexOf(new C(4)), -1);
        }

        [Test]
        public void IndexOfWithStartIndexWorks()
        {
            Assert.AreEqual(new List<string> { "a", "b", "c", "b" }.IndexOf("b", 2), 3);
        }

        [Test]
        public void IndexOfWithStartIndexUsesEqualsMethod()
        {
            Assert.AreEqual(new List<C> { new C(1), new C(2), new C(3), new C(2) }.IndexOf(new C(2), 2), 3);
        }

        [Test]
        public void InsertWorks()
        {
            var l = new List<string> { "x", "y" };
            l.Insert(1, "a");
            Assert.AreDeepEqual(l.ToArray(), new[] { "x", "a", "y" });
        }

        [Test]
        public void InsertRangeWorks()
        {
            var l = new List<string> { "x", "y" };

            l.InsertRange(1, new[] { "a", "b" });
            Assert.AreDeepEqual(l.ToArray(), new[] { "x", "a", "b", "y" });

            l.InsertRange(0, new[] { "q", "q" });
            Assert.AreDeepEqual(l.ToArray(), new[] { "q", "q", "x", "a", "b", "y" });
        }

        [Test]
        public void JoinWithoutDelimiterWorks()
        {
            Assert.AreEqual(new List<string> { "a", "b", "c", "b" }.Join(), "a,b,c,b");
        }

        [Test]
        public void JoinWithDelimiterWorks()
        {
            Assert.AreEqual(new List<string> { "a", "b", "c", "b" }.Join("|"), "a|b|c|b");
        }

        [Test]
        public void RemoveWorks()
        {
            var list = new List<string> { "a", "b", "c", "a" };
            Assert.True(list.Remove("a"));
            Assert.AreDeepEqual(list.ToArray(), new[] { "b", "c", "a" });
        }

        [Test]
        public void RemoveReturnsFalseIfTheElementWasNotFound()
        {
            var list = new List<string> { "a", "b", "c", "a" };
            Assert.False(list.Remove("d"));
            Assert.AreDeepEqual(list.ToArray(), new[] { "a", "b", "c", "a" });
        }

        [Test]
        public void RemoveCanRemoveNullItem()
        {
            var list = new List<string> { "a", null, "c", null };
            Assert.True(list.Remove(null));
            Assert.AreDeepEqual(list.ToArray(), new[] { "a", "c", null });
        }

        [Test]
        public void RemoveUsesEqualsMethod()
        {
            var list = new List<C> { new C(1), new C(2), new C(3) };
            list.Remove(new C(2));
            Assert.AreEqual(list.Count, 2);
            Assert.AreEqual(list[0].i, 1);
            Assert.AreEqual(list[1].i, 3);
        }

        [Test]
        public void RemoveAtWorks()
        {
            var list = new List<string> { "a", "b", "c", "a" };
            list.RemoveAt(1);
            Assert.AreDeepEqual(list.ToArray(), new[] { "a", "c", "a" });
        }

        [Test]
        public void RemoveRangeWorks()
        {
            var list = new List<string> { "a", "b", "c", "d" };
            list.RemoveRange(1, 2);
            Assert.AreDeepEqual(list.ToArray(), new[] { "a", "d" });
        }

        [Test]
        public void ReverseWorks()
        {
            var list = new List<int> { 1, 3, 4, 1, 3, 2 };
            list.Reverse();
            Assert.AreDeepEqual(list.ToArray(), new[] { 2, 3, 1, 4, 3, 1 });
        }

        [Test]
        public void SortWithDefaultCompareWorks()
        {
            var list = new List<int> { 1, 6, 6, 4, 2 };
            list.Sort();
            Assert.AreDeepEqual(list.ToArray(), new[] { 1, 2, 4, 6, 6 });
        }

        [Test]
        public void SortWithCompareCallbackWorks()
        {
            var list = new List<int> { 1, 6, 6, 4, 2 };
            list.Sort((x, y) => (int)y - (int)x);
            Assert.AreDeepEqual(list.ToArray(), new[] { 6, 6, 4, 2, 1 });
        }

        [Test]
        public void SortWithIComparerWorks()
        {
            var list = new List<int> { 1, 6, 6, 4, 2 };
            list.Sort(new TestReverseComparer());
            Assert.AreDeepEqual(list.ToArray(), new[] { 6, 6, 4, 2, 1 });
        }

        [Test]
        public void ForeachWhenCastToIEnumerableWorks()
        {
            IEnumerable<string> list = new List<string> { "x", "y" };
            string result = "";
            foreach (var s in list)
            {
                result += s;
            }
            Assert.AreEqual(result, "xy");
        }

        [Test]
        public void IEnumerableGetEnumeratorWorks()
        {
            var l = (IEnumerable<string>)new List<string> { "x", "y" };
            var e = l.GetEnumerator();
            Assert.True(e.MoveNext());
            Assert.AreEqual(e.Current, "x");
            Assert.True(e.MoveNext());
            Assert.AreEqual(e.Current, "y");
            Assert.False(e.MoveNext());
        }

        [Test]
        public void ICollectionCountWorks()
        {
            IList<string> l = new List<string> { "x", "y", "z" };
            Assert.AreEqual(l.Count, 3);
        }

        [Test]
        public void ICollectionAddWorks()
        {
            IList<string> l = new List<string> { "x", "y", "z" };
            l.Add("a");
            Assert.AreDeepEqual(((List<string>)l).ToArray(), new[] { "x", "y", "z", "a" });
        }

        [Test]
        public void ICollectionClearWorks()
        {
            IList<string> l = new List<string> { "x", "y", "z" };
            l.Clear();
            Assert.AreDeepEqual(((List<string>)l).ToArray(), new string[0]);
        }

        [Test]
        public void ICollectionContainsWorks()
        {
            IList<string> l = new List<string> { "x", "y", "z" };
            Assert.True(l.Contains("y"));
            Assert.False(l.Contains("a"));
        }

        [Test]
        public void ICollectionContainsUsesEqualsMethod()
        {
            IList<C> l = new List<C> { new C(1), new C(2), new C(3) };
            Assert.True(l.Contains(new C(2)));
            Assert.False(l.Contains(new C(4)));
        }

        [Test]
        public void ICollectionRemoveWorks()
        {
            ICollection<string> l = new List<string> { "x", "y", "z" };
            Assert.True(l.Remove("y"));
            Assert.False(l.Remove("a"));

            var ll = l as List<string>;
            Assert.AreDeepEqual(ll.ToArray(), new[] { "x", "z" });
        }

        [Test]
        public void ICollectionRemoveCanRemoveNullItem()
        {
            IList<string> list = new List<string> { "a", null, "c", null };
            Assert.True(list.Remove(null));
            Assert.AreDeepEqual(((List<string>)list).ToArray(), new[] { "a", "c", null });
        }

        [Test]
        public void ICollectionRemoveUsesEqualsMethod()
        {
            IList<C> list = new List<C> { new C(1), new C(2), new C(3) };
            list.Remove(new C(2));
            Assert.AreEqual(list.Count, 2);
            Assert.AreEqual(list[0].i, 1);
            Assert.AreEqual(list[1].i, 3);
        }

        [Test]
        public void IListIndexingWorks()
        {
            IList<string> l = new List<string> { "x", "y", "z" };
            Assert.AreEqual(l[1], "y");
            l[1] = "a";
            Assert.AreDeepEqual(((List<string>)l).ToArray(), new[] { "x", "a", "z" });
        }

        [Test]
        public void IListIndexOfWorks()
        {
            IList<string> l = new List<string> { "x", "y", "z" };
            Assert.AreEqual(l.IndexOf("y"), 1);
            Assert.AreEqual(l.IndexOf("a"), -1);
        }

        [Test]
        public void IListIndexOfUsesEqualsMethod()
        {
            IList<C> l = new List<C> { new C(1), new C(2), new C(3) };
            Assert.AreEqual(l.IndexOf(new C(2)), 1);
            Assert.AreEqual(l.IndexOf(new C(4)), -1);
        }

        [Test]
        public void IListInsertWorks()
        {
            IList<string> l = new List<string> { "x", "y", "z" };
            l.Insert(1, "a");
            Assert.AreDeepEqual(((List<string>)l).ToArray(), new[] { "x", "a", "y", "z" });
        }

        [Test]
        public void IListRemoveAtWorks()
        {
            IList<string> l = new List<string> { "x", "y", "z" };
            l.RemoveAt(1);
            Assert.AreDeepEqual(((List<string>)l).ToArray(), new[] { "x", "z" });
        }

        [Test]
        public void ToArrayWorks()
        {
            var l = new List<string>();
            l.Add("a");
            l.Add("b");
            var actual = l.ToArray();
            Assert.False(ReferenceEquals(l, actual));
            Assert.True(actual is Array);
            Assert.AreDeepEqual(actual, new[] { "a", "b" });
        }
    }
}
