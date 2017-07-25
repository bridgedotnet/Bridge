using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest
{
    public class ArrayTests
    {
        [Category(Constants.MODULE_ARRAY)]
        [TestFixture(TestNameFormat = "Array - Set1 {0}")]
        public class ArrayTestsSet1
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
                Assert.True(arr is IReadOnlyCollection<int>, "#1626 is IReadOnlyCollection<int> should be true");
                Assert.True(arr is IReadOnlyList<int>, "#1626 is IReadOnlyList<int> should be true");

                Assert.AreEqual("System.Int32[]", typeof(int[]).FullName, "FullName should be Array");
                Assert.True(typeof(Array).IsClass, "IsClass should be true");
                Assert.True(typeof(int[]).IsClass, "IsClass should be true");

                var interfaces = typeof(int[]).GetInterfaces();
                Assert.AreEqual(7, interfaces.Length, "Interface count should be 7");
                Assert.True(interfaces.Contains(typeof(IEnumerable<int>)), "Interfaces should contain IEnumerable<int>");
                Assert.True(interfaces.Contains(typeof(ICollection<int>)), "Interfaces should contain ICollection<int>");
                Assert.True(interfaces.Contains(typeof(IList<int>)), "Interfaces should contain IList<int>");
                Assert.True(interfaces.Contains(typeof(IReadOnlyCollection<int>)), "Interfaces should contain IReadOnlyCollection<int>");
                // #1626
                //Assert.True(interfaces.Contains(typeof(IReadOnlyList<int>)), "Interfaces should contain IReadOnlyList<int>");
            }

            [Test]
            public void ArrayCanBeAssignedToTheCollectionInterfaces_SPI_1547()
            {
                // #1547
                Assert.True(typeof(IEnumerable<int>).IsAssignableFrom(typeof(int[])));
                Assert.True(typeof(ICollection<int>).IsAssignableFrom(typeof(int[])));
                Assert.True(typeof(IList<int>).IsAssignableFrom(typeof(int[])));
            }

            [Test]
            public void CreateWithNegativeLenghtShouldThrow()
            {
                int size = -1;
                Assert.Throws<ArgumentOutOfRangeException>(() =>
                {
                    var a = new int[size];
                });

                long lsize = -1;
                Assert.Throws<ArgumentOutOfRangeException>(() =>
                {
                    var a = new int[lsize];
                });
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
                Assert.AreDeepEqual(arr2, arr);
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
            public void CopyToSameBoundWorks()
            {
                var l = new string[] { "0", "1", "2" };

                var a1 = new string[3];
                l.CopyTo(a1, 0);

                Assert.AreEqual("0", a1[0], "Element 0");
                Assert.AreEqual("1", a1[1], "Element 1");
                Assert.AreEqual("2", a1[2], "Element 2");
            }

            [Test]
            public void CopyToOffsetBoundWorks()
            {
                var l = new string[] { "0", "1", "2" };

                var a2 = new string[5];
                l.CopyTo(a2, 1);

                Assert.AreEqual(null, a2[0], "Element 0");
                Assert.AreEqual("0", a2[1], "Element 1");
                Assert.AreEqual("1", a2[2], "Element 2");
                Assert.AreEqual("2", a2[3], "Element 3");
                Assert.AreEqual(null, a2[4], "Element 4");
            }

            [Test]
            public void CopyToIllegalBoundWorks()
            {
                var l = new string[] { "0", "1", "2" };

                Assert.Throws<ArgumentNullException>(() => { l.CopyTo(null, 0); }, "null");

                var a1 = new string[2];
                Assert.Throws<ArgumentException>(() => { l.CopyTo(a1, 0); }, "Short array");

                var a2 = new string[3];
                Assert.Throws<ArgumentException>(() => { l.CopyTo(a2, 1); }, "Start index 1");
                Assert.Throws<ArgumentOutOfRangeException>(() => { l.CopyTo(a2, -1); }, "Negative start index");
                Assert.Throws<ArgumentException>(() => { l.CopyTo(a2, 3); }, "Start index 3");
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
                Assert.AreDeepEqual(new[] { 2, 3, 1, 4, 3, 1 }, arr);
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
                Assert.AreDeepEqual(new[] { 1, 2, 4, 6, 6 }, arr);
            }

            [Test]
            public void Sort1Works()
            {
                var arr = new[] { 1, 6, 6, 4, 2 };
                Array.Sort(arr);
                Assert.AreDeepEqual(new[] { 1, 2, 4, 6, 6 }, arr);
            }

            [Test]
            public void Sort2Works()
            {
                var arr = new[] { 1, 6, 6, 4, 2 };
                Array.Sort(arr, 2, 3);
                Assert.AreDeepEqual(new[] { 1, 6, 2, 4, 6 }, arr);
            }

            [Test]
            public void Sort3Works()
            {
                var arr = new[] { 1, 2, 6, 3, 6, 7 };
                Array.Sort(arr, 2, 3, new TestReverseComparer());
                Assert.AreDeepEqual(new[] { 1, 2, 6, 6, 3, 7 }, arr);
            }

            [Test]
            public void Sort4Works()
            {
                var arr = new[] { 1, 6, 6, 4, 2 };
                Array.Sort(arr, new TestReverseComparer());
                Assert.AreDeepEqual(new[] { 6, 6, 4, 2, 1 }, arr);
            }

            [Test]
            public void SortExceptionsWorks()
            {
                int[] arr1 = null;

                Assert.Throws(() => { Array.Sort(arr1); });
            }

            [Test]
            public void SortWithCompareCallbackWorks()
            {
                var arr = new[] { 1, 6, 6, 4, 2 };
                Array.Sort(arr, Comparer<int>.Create((x, y) => y - x));
                Assert.AreEqual(new[] { 6, 6, 4, 2, 1 }, arr);
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
            public void ICollectionIsReadOnlyWorks()
            {
                ICollection<string> l = new[] { "x", "y", "z" };
                Assert.True(l.IsReadOnly);
            }

            [Test]
            public void ICollectionAddWorks()
            {
                IList<string> l = new[] { "x", "y", "z" };
                Assert.Throws<NotSupportedException>(() => l.Add("a"));
                Assert.AreDeepEqual(new[] { "x", "y", "z" }, l);
            }

            [Test]
            public void ICollectionClearWorks()
            {
                IList<string> l = new[] { "x", "y", "z" };
                Assert.Throws<NotSupportedException>(() => l.Clear());
                Assert.AreDeepEqual(new[] { "x", "y", "z" }, l);
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
            public void ICollectionCopyToSameBoundWorks()
            {
                ICollection<string> l = new string[] { "0", "1", "2" };

                var a1 = new string[3];
                l.CopyTo(a1, 0);

                Assert.AreEqual("0", a1[0], "Element 0");
                Assert.AreEqual("1", a1[1], "Element 1");
                Assert.AreEqual("2", a1[2], "Element 2");
            }

            [Test]
            public void ICollectionCopyToOffsetBoundWorks()
            {
                ICollection<string> l = new string[] { "0", "1", "2" };

                var a2 = new string[5];
                l.CopyTo(a2, 1);

                Assert.AreEqual(null, a2[0], "Element 0");
                Assert.AreEqual("0", a2[1], "Element 1");
                Assert.AreEqual("1", a2[2], "Element 2");
                Assert.AreEqual("2", a2[3], "Element 3");
                Assert.AreEqual(null, a2[4], "Element 4");
            }

            [Test]
            public void ICollectionCopyToIllegalBoundWorks()
            {
                ICollection<string> l = new string[] { "0", "1", "2" };

                Assert.Throws<ArgumentNullException>(() => { l.CopyTo(null, 0); }, "null");

                var a1 = new string[2];
                Assert.Throws<ArgumentException>(() => { l.CopyTo(a1, 0); }, "Short array");

                var a2 = new string[3];
                Assert.Throws<ArgumentException>(() => { l.CopyTo(a2, 1); }, "Start index 1");
                Assert.Throws<ArgumentOutOfRangeException>(() => { l.CopyTo(a2, -1); }, "Negative start index");
                Assert.Throws<ArgumentException>(() => { l.CopyTo(a2, 3); }, "Start index 3");
            }

            [Test]
            public void ICollectionRemoveWorks()
            {
                IList<string> l = new[] { "x", "y", "z" };
                Assert.Throws<NotSupportedException>(() => l.Remove("y"));
                Assert.AreDeepEqual(new[] { "x", "y", "z" }, l);
            }

            [Test]
            public void IReadOnlyCollectionCountWorks_SPI_1626()
            {
                // #1626
                IReadOnlyCollection<string> l = new[] { "x", "y", "z" };
                Assert.AreEqual(l.Count, 3);
            }

            [Test]
            public void IReadOnlyCollectionContainsWorks_SPI_1626()
            {
                // #1626
                IReadOnlyCollection<string> l = new[] { "x", "y", "z" };
                Assert.True(l.Contains("y"));
                Assert.False(l.Contains("a"));
            }

            [Test]
            public void IListIsReadOnlyWorks()
            {
                IList<string> l = new[] { "x", "y", "z" };
                Assert.True(l.IsReadOnly);
            }

            [Test]
            public void IListIndexingWorks()
            {
                IList<string> l = new[] { "x", "y", "z" };
                Assert.AreEqual("y", l[1]);
                l[1] = "a";
                Assert.AreDeepEqual(new[] { "x", "a", "z" }, l);
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
                Assert.Throws<NotSupportedException>(() => l.Insert(1, "a"));
                Assert.AreDeepEqual(new[] { "x", "y", "z" }, l);
            }

            [Test]
            public void IListRemoveAtWorks()
            {
                IList<string> l = new[] { "x", "y", "z" };
                Assert.Throws<NotSupportedException>(() => l.RemoveAt(1));
                Assert.AreDeepEqual(new[] { "x", "y", "z" }, l);
            }

            [Test]
            public void IReadOnlyListIndexingWorks_SPI_1626()
            {
                // #1626
                IReadOnlyList<string> l = new[] { "x", "y", "z" };
                Assert.AreEqual(l[1], "y");
            }

            [Test]
            public void ClearWorks()
            {
                var arr1 = new byte[] { 10, 11, 12, 13 };
                Array.Clear(arr1, 2, 2);
                Assert.AreEqual(new byte[] { 10, 11, 0, 0 }, arr1);

                var arr2 = new int[] { 10, 11, 12, 13 };
                Array.Clear(arr2, 0, 4);
                Assert.AreEqual(new int[] { 0, 0, 0, 0 }, arr2);

                var arr3 = new string[] { "A", "B", "C", "D" };
                Array.Clear(arr3, 3, 1);
                Assert.AreEqual(new string[] { "A", "B", "C", null }, arr3);
            }

            [Test]
            public void CopyWithDifferentArraysWorks()
            {
                var arr1 = new[] { 1, 2, 3, 4 };
                var arr2 = new[] { 9, 8, 7, 6 };
                Array.Copy(arr1, arr2, 2);
                Assert.AreEqual(new[] { 1, 2, 7, 6 }, arr2);

                var arr3 = new[] { 9, 8, 7, 6 };
                Array.Copy(arr1, 3, arr3, 2, 1);
                Assert.AreEqual(new[] { 9, 8, 4, 6 }, arr3);
            }

            [Test]
            public void CopyWithinArrayWorks()
            {
                var arr1 = new[] { 1, 2, 3, 4 };
                Array.Copy(arr1, 0, arr1, 1, 2);
                Assert.AreEqual(new[] { 1, 1, 2, 4 }, arr1);

                var arr2 = new[] { 1, 2, 3, 4 };
                Array.Copy(arr2, 2, arr2, 1, 2);
                Assert.AreEqual(new[] { 1, 3, 4, 4 }, arr2);
            }
        }

        [Category(Constants.MODULE_ARRAY)]
        [TestFixture(TestNameFormat = "Array - Set2 {0}")]
        public class ArrayTestsSet2
        {
            [Test]
            public static void TestArrayAsIListOfT()
            {
                string[] sa = { "Hello", "There" };
                string s;
                int idx;

                bool b = (sa is IList<string>);
                Assert.True(b);

                IList<string> ils = sa;
                int len = ils.Count;
                Assert.AreEqual(len, 2);

                b = ils.Contains(null);
                Assert.False(b);

                b = ils.Contains("There");
                Assert.True(b);

                idx = ils.IndexOf("There");
                Assert.AreEqual(idx, 1);
                idx = ils.IndexOf(null);
                Assert.AreEqual(idx, -1);

                string[] sa2 = new string[2];
                sa.CopyTo(sa2, 0);
                Assert.AreEqual(sa2[0], sa[0]);
                Assert.AreEqual(sa2[1], sa[1]);

                int[] ia1;
                int[] dst;
                ia1 = new int[] { 1, 2, 3, 4 };
                dst = new int[4];
                ia1.CopyTo(dst, 0);
                Assert.AreEqual(dst, ia1);

                ia1 = new int[] { 1, 2, 3, 4 };
                dst = new int[6];
                ia1.CopyTo(dst, 1);
                Assert.AreEqual(dst, new int[] { 0, 1, 2, 3, 4, 0 });

                IEnumerator<string> e = ils.GetEnumerator();
                b = e.MoveNext();
                Assert.True(b);
                s = e.Current;
                Assert.AreEqual(s, sa[0]);
                b = e.MoveNext();
                Assert.True(b);
                s = e.Current;
                Assert.AreEqual(s, sa[1]);
                b = e.MoveNext();
                Assert.False(b);

                s = ils[1];
                Assert.AreEqual(s, sa[1]);

                ils[1] = "42";
                Assert.AreEqual(sa[1], "42");
            }

            [Test]
            public static void TestTrivials()
            {
                // Check a number of the simple APIs on Array for dimensions up to 4.
                Array a = new int[] { 1, 2, 3 };
                Assert.AreEqual(a.Length, 3);
                Assert.AreEqual(a.GetLength(0), 3);
                Assert.Throws<IndexOutOfRangeException>(() => a.GetLength(-1));
                Assert.Throws<IndexOutOfRangeException>(() => a.GetLength(1));
                Assert.AreEqual(a.GetLowerBound(0), 0);
                Assert.Throws<IndexOutOfRangeException>(() => a.GetLowerBound(1));
                Assert.AreEqual(a.GetUpperBound(0), 2);
                Assert.Throws<IndexOutOfRangeException>(() => a.GetUpperBound(1));
                Assert.AreEqual(a.Rank, 1);
                IList<int> il = a.As<IList<int>>();
                Assert.AreEqual(il.Count, 3);

                Assert.True(il.Contains(1));
                Assert.False(il.Contains(999));
                Assert.AreEqual(il.IndexOf(1), 0);
                Assert.AreEqual(il.IndexOf(999), -1);
                object v = il[0];
                Assert.AreEqual(v, 1);
                v = il[1];
                Assert.AreEqual(v, 2);
                v = il[2];
                Assert.AreEqual(v, 3);

                il[2] = 42;
                Assert.AreEqual(((int[])a)[2], 42);

                Array a2 = new int[,] { { 1, 2, 3 }, { 4, 5, 6 } };
                Assert.AreEqual(a2.GetLength(0), 2);
                Assert.AreEqual(a2.GetLength(1), 3);
                Assert.Throws<IndexOutOfRangeException>(() => a2.GetLength(-1));
                Assert.Throws<IndexOutOfRangeException>(() => a2.GetLength(2));
                Assert.AreEqual(a2.GetLowerBound(0), 0);
                Assert.AreEqual(a2.GetLowerBound(1), 0);
                Assert.Throws<IndexOutOfRangeException>(() => a2.GetLowerBound(2));
                Assert.AreEqual(a2.GetUpperBound(0), 1);
                Assert.AreEqual(a2.GetUpperBound(1), 2);
                Assert.Throws<IndexOutOfRangeException>(() => a2.GetUpperBound(2));
                Assert.AreEqual(a2.Rank, 2);

                Array a3 = new int[2, 3, 4];
                int tracer = 0; // makes it easier to confirm row major ordering
                for (int i = 0; i < 2; i++)
                {
                    for (int j = 0; j < 3; j++)
                    {
                        for (int k = 0; k < 4; k++)
                        {
                            a3.SetValue(tracer++, i, j, k);
                        }
                    }
                }
                Assert.AreEqual(a3.GetLength(0), 2);
                Assert.AreEqual(a3.GetLength(1), 3);
                Assert.AreEqual(a3.GetLength(2), 4);
                Assert.Throws<IndexOutOfRangeException>(() => a3.GetLength(-1));
                Assert.Throws<IndexOutOfRangeException>(() => a3.GetLength(3));
                Assert.AreEqual(a3.GetLowerBound(0), 0);
                Assert.AreEqual(a3.GetLowerBound(1), 0);
                Assert.AreEqual(a3.GetLowerBound(2), 0);
                Assert.Throws<IndexOutOfRangeException>(() => a3.GetLowerBound(3));
                Assert.AreEqual(a3.GetUpperBound(0), 1);
                Assert.AreEqual(a3.GetUpperBound(1), 2);
                Assert.AreEqual(a3.GetUpperBound(2), 3);
                Assert.Throws<IndexOutOfRangeException>(() => a3.GetUpperBound(3));
                Assert.AreEqual(a3.Rank, 3);

                Array a4 = new int[2, 3, 4, 5];

                tracer = 0; // makes it easier to confirm row major ordering
                for (int i = 0; i < 2; i++)
                {
                    for (int j = 0; j < 3; j++)
                    {
                        for (int k = 0; k < 4; k++)
                        {
                            for (int l = 0; l < 5; l++)
                            {
                                a4.SetValue(tracer++, i, j, k, l);
                            }
                        }
                    }
                }
                Assert.AreEqual(a4.GetLength(0), 2);
                Assert.AreEqual(a4.GetLength(1), 3);
                Assert.AreEqual(a4.GetLength(2), 4);
                Assert.AreEqual(a4.GetLength(3), 5);
                Assert.Throws<IndexOutOfRangeException>(() => a4.GetLength(-1));
                Assert.Throws<IndexOutOfRangeException>(() => a4.GetLength(4));
                Assert.AreEqual(a4.GetLowerBound(0), 0);
                Assert.AreEqual(a4.GetLowerBound(1), 0);
                Assert.AreEqual(a4.GetLowerBound(2), 0);
                Assert.AreEqual(a4.GetLowerBound(3), 0);
                Assert.Throws<IndexOutOfRangeException>(() => a4.GetLowerBound(4));
                Assert.AreEqual(a4.GetUpperBound(0), 1);
                Assert.AreEqual(a4.GetUpperBound(1), 2);
                Assert.AreEqual(a4.GetUpperBound(2), 3);
                Assert.AreEqual(a4.GetUpperBound(3), 4);
                Assert.Throws<IndexOutOfRangeException>(() => a4.GetUpperBound(4));
                Assert.AreEqual(a4.Rank, 4);
            }

            public static IEnumerable<object[]> BinarySearchTestData
            {
                get
                {
                    int[] intArray = { 1, 3, 6, 6, 8, 10, 12, 16 };
                    IComparer<int> intComparer = new IntegerComparer();
                    IComparer<int> intGenericComparer = new IntegerComparer();

                    string[] strArray = { null, "aa", "bb", "bb", "cc", "dd", "ee" };
                    IComparer<string> strComparer = new StringComparer();
                    IComparer<string> strGenericComparer = new StringComparer();

                    return new[]
                    {
                    new object[] {intArray, 8, intComparer, intGenericComparer, new Func<int, bool>(i => i == 4)},
                    new object[]
                    {intArray, 99, intComparer, intGenericComparer, new Func<int, bool>(i => i == ~(intArray.Length))},
                    new object[]
                    {intArray, 6, intComparer, intGenericComparer, new Func<int, bool>(i => i == 2 || i == 3)},
                    new object[]
                    {strArray, "bb", strComparer, strGenericComparer, new Func<int, bool>(i => i == 2 || i == 3)},
                    new object[] {strArray, null, strComparer, null, new Func<int, bool>(i => i == 0)},
                };
                }
            }

            public static IEnumerable<object[]> BinarySearchTestDataInRange
            {
                get
                {
                    int[] intArray = { 1, 3, 6, 6, 8, 10, 12, 16 };
                    IComparer<int> intComparer = new IntegerComparer();
                    IComparer<int> intGenericComparer = new IntegerComparer();

                    string[] strArray = { null, "aa", "bb", "bb", "cc", "dd", "ee" };
                    IComparer<string> strComparer = new StringComparer();
                    IComparer<string> strGenericComparer = new StringComparer();

                    return new[]
                    {
                    new object[]
                    {
                        intArray, 0, 8, 99, intComparer, intGenericComparer,
                        new Func<int, bool>(i => i == ~(intArray.Length))
                    },
                    new object[]
                    {intArray, 0, 8, 6, intComparer, intGenericComparer, new Func<int, bool>(i => i == 2 || i == 3)},
                    new object[]
                    {intArray, 1, 5, 16, intComparer, intGenericComparer, new Func<int, bool>(i => i == -7)},
                    new object[]
                    {
                        strArray, 0, strArray.Length, "bb", strComparer, strGenericComparer,
                        new Func<int, bool>(i => i == 2 || i == 3)
                    },
                    new object[]
                    {strArray, 3, 4, "bb", strComparer, strGenericComparer, new Func<int, bool>(i => i == 3)},
                    new object[]
                    {strArray, 4, 3, "bb", strComparer, strGenericComparer, new Func<int, bool>(i => i == -5)},
                    new object[]
                    {strArray, 4, 0, "bb", strComparer, strGenericComparer, new Func<int, bool>(i => i == -5)},
                    new object[] {strArray, 0, 7, null, strComparer, null, new Func<int, bool>(i => i == 0)},
                };
                }
            }

            [Test]
            public static void TestGetAndSetValue()
            {
                int[] idirect = new int[3] { 7, 8, 9 };
                Array a = idirect;

                object seven = a.GetValue(0);
                Assert.AreEqual(7, seven);
                a.SetValue(41, 0);
                Assert.AreEqual(41, idirect[0]);

                object eight = a.GetValue(1);
                Assert.AreEqual(8, eight);
                a.SetValue(42, 1);
                Assert.AreEqual(42, idirect[1]);

                object nine = a.GetValue(2);
                Assert.AreEqual(9, nine);
                a.SetValue(43, 2);
                Assert.AreEqual(43, idirect[2]);

                int[,] idirect2 = new int[,] { { 1, 2, 3 }, { 4, 5, 6 } };
                Array b = idirect2;
                Assert.AreEqual(1, b.GetValue(0, 0));
                Assert.AreEqual(6, b.GetValue(1, 2));
                b.SetValue(42, 1, 2);
                Assert.AreEqual(42, b.GetValue(1, 2));

                int[] nullIndices = null;
                Assert.Throws<ArgumentNullException>(() => b.GetValue(nullIndices));

                int[] tooManyIndices = new int[] { 1, 2, 3, 4 };
                Assert.Throws<ArgumentException>(() => b.GetValue(tooManyIndices));
            }

            [Test]
            public static void TestClear()
            {
                //----------------------------------------------------------
                // Primitives/valuetypes with no gc-ref pointers
                //----------------------------------------------------------
                int[] idirect;
                idirect = new int[] { 7, 8, 9 };

                Array.Clear(idirect, 0, 3);
                Assert.AreEqual(idirect[0], 0);
                Assert.AreEqual(idirect[1], 0);
                Assert.AreEqual(idirect[2], 0);

                idirect = new int[] { 7, 8, 9 };
                Assert.Throws(() => { ((IList<int>)idirect).Clear(); });

                idirect = new int[] { 0x1234567, 0x789abcde, 0x22334455, 0x66778899, 0x11335577, 0x22446688 };
                Array.Clear(idirect, 2, 3);
                Assert.AreEqual(idirect[0], 0x1234567);
                Assert.AreEqual(idirect[1], 0x789abcde);
                Assert.AreEqual(idirect[2], 0);
                Assert.AreEqual(idirect[3], 0);
                Assert.AreEqual(idirect[4], 0);
                Assert.AreEqual(idirect[5], 0x22446688);

                idirect = new int[] { 0x1234567, 0x789abcde, 0x22334455, 0x66778899, 0x11335577, 0x22446688 };
                Array.Clear(idirect, 0, 6);
                Assert.AreEqual(idirect[0], 0);
                Assert.AreEqual(idirect[1], 0);
                Assert.AreEqual(idirect[2], 0);
                Assert.AreEqual(idirect[3], 0);
                Assert.AreEqual(idirect[4], 0);
                Assert.AreEqual(idirect[5], 0);

                idirect = new int[] { 0x1234567, 0x789abcde, 0x22334455, 0x66778899, 0x11335577, 0x22446688 };
                Array.Clear(idirect, 6, 0);
                Assert.AreEqual(idirect[0], 0x1234567);
                Assert.AreEqual(idirect[1], 0x789abcde);
                Assert.AreEqual(idirect[2], 0x22334455);
                Assert.AreEqual(idirect[3], 0x66778899);
                Assert.AreEqual(idirect[4], 0x11335577);
                Assert.AreEqual(idirect[5], 0x22446688);

                idirect = new int[] { 0x1234567, 0x789abcde, 0x22334455, 0x66778899, 0x11335577, 0x22446688 };
                Array.Clear(idirect, 0, 0);
                Assert.AreEqual(idirect[0], 0x1234567);
                Assert.AreEqual(idirect[1], 0x789abcde);
                Assert.AreEqual(idirect[2], 0x22334455);
                Assert.AreEqual(idirect[3], 0x66778899);
                Assert.AreEqual(idirect[4], 0x11335577);
                Assert.AreEqual(idirect[5], 0x22446688);

                //----------------------------------------------------------
                // GC-refs
                //----------------------------------------------------------
                string[] sdirect;

                sdirect = new string[] { "7", "8", "9" };

                Array.Clear(sdirect, 0, 3);
                Assert.Null(sdirect[0]);
                Assert.Null(sdirect[1]);
                Assert.Null(sdirect[2]);

                Assert.Throws(() => { ((IList<string>)sdirect).Clear(); });

                sdirect = new string[] { "0x1234567", "0x789abcde", "0x22334455", "0x66778899", "0x11335577", "0x22446688" };
                Array.Clear(sdirect, 2, 3);
                Assert.AreEqual(sdirect[0], "0x1234567");
                Assert.AreEqual(sdirect[1], "0x789abcde");
                Assert.Null(sdirect[2]);
                Assert.Null(sdirect[3]);
                Assert.Null(sdirect[4]);
                Assert.AreEqual(sdirect[5], "0x22446688");

                sdirect = new string[] { "0x1234567", "0x789abcde", "0x22334455", "0x66778899", "0x11335577", "0x22446688" };
                Array.Clear(sdirect, 0, 6);
                Assert.Null(sdirect[0]);
                Assert.Null(sdirect[1]);
                Assert.Null(sdirect[2]);
                Assert.Null(sdirect[3]);
                Assert.Null(sdirect[4]);
                Assert.Null(sdirect[5]);

                sdirect = new string[] { "0x1234567", "0x789abcde", "0x22334455", "0x66778899", "0x11335577", "0x22446688" };
                Array.Clear(sdirect, 6, 0);
                Assert.AreEqual(sdirect[0], "0x1234567");
                Assert.AreEqual(sdirect[1], "0x789abcde");
                Assert.AreEqual(sdirect[2], "0x22334455");
                Assert.AreEqual(sdirect[3], "0x66778899");
                Assert.AreEqual(sdirect[4], "0x11335577");
                Assert.AreEqual(sdirect[5], "0x22446688");

                sdirect = new string[] { "0x1234567", "0x789abcde", "0x22334455", "0x66778899", "0x11335577", "0x22446688" };
                Array.Clear(sdirect, 0, 0);
                Assert.AreEqual(sdirect[0], "0x1234567");
                Assert.AreEqual(sdirect[1], "0x789abcde");
                Assert.AreEqual(sdirect[2], "0x22334455");
                Assert.AreEqual(sdirect[3], "0x66778899");
                Assert.AreEqual(sdirect[4], "0x11335577");
                Assert.AreEqual(sdirect[5], "0x22446688");

                //----------------------------------------------------------
                // Valuetypes with embedded GC-refs
                //----------------------------------------------------------
                G[] g;
                g = new G[5];
                g[0].x = 7;
                g[0].s = "Hello";
                g[0].z = 8;
                g[1].x = 7;
                g[1].s = "Hello";
                g[1].z = 8;
                g[2].x = 7;
                g[2].s = "Hello";
                g[2].z = 8;
                g[3].x = 7;
                g[3].s = "Hello";
                g[3].z = 8;
                g[4].x = 7;
                g[4].s = "Hello";
                g[4].z = 8;

                Array.Clear(g, 0, 5);
                for (int i = 0; i < g.Length; i++)
                {
                    Assert.AreEqual(g[i].x, 0);
                    Assert.Null(g[i].s);
                    Assert.AreEqual(g[i].z, 0);
                }

                g = new G[5];
                g[0].x = 7;
                g[0].s = "Hello";
                g[0].z = 8;
                g[1].x = 7;
                g[1].s = "Hello";
                g[1].z = 8;
                g[2].x = 7;
                g[2].s = "Hello";
                g[2].z = 8;
                g[3].x = 7;
                g[3].s = "Hello";
                g[3].z = 8;
                g[4].x = 7;
                g[4].s = "Hello";
                g[4].z = 8;

                Array.Clear(g, 2, 3);
                Assert.AreEqual(g[0].x, 7);
                Assert.AreEqual(g[0].s, "Hello");
                Assert.AreEqual(g[0].z, 8);
                Assert.AreEqual(g[1].x, 7);
                Assert.AreEqual(g[1].s, "Hello");
                Assert.AreEqual(g[1].z, 8);
                for (int i = 2; i < 2 + 3; i++)
                {
                    Assert.AreEqual(g[i].x, 0);
                    Assert.Null(g[i].s);
                    Assert.AreEqual(g[i].z, 0);
                }

                //----------------------------------------------------------
                // Range-checks
                //----------------------------------------------------------
                Assert.Throws<ArgumentNullException>(() => Array.Clear<object>(null, 0, 0));

                Assert.Throws<IndexOutOfRangeException>(() => Array.Clear(idirect, -1, 1));

                Assert.Throws<IndexOutOfRangeException>(() => Array.Clear(idirect, 0, 7));

                Assert.Throws<IndexOutOfRangeException>(() => Array.Clear(idirect, 7, 0));

                Assert.Throws<IndexOutOfRangeException>(() => Array.Clear(idirect, 5, 2));

                Assert.Throws<IndexOutOfRangeException>(() => Array.Clear(idirect, 6, 2));

                Assert.Throws<IndexOutOfRangeException>(() => Array.Clear(idirect, 6, 0x7fffffff));
            }

            [Test]
            public static void TestCopy_GCRef()
            {
                string[] s;
                string[] d;

                s = new string[] { "Red", "Green", null, "Blue" };
                d = new string[] { "X", "X", "X", "X" };
                Array.Copy(s, 0, d, 0, 4);
                Assert.AreEqual(d[0], "Red");
                Assert.AreEqual(d[1], "Green");
                Assert.Null(d[2]);
                Assert.AreEqual(d[3], "Blue");

                // With reverse overlap
                s = new string[] { "Red", "Green", null, "Blue" };
                Array.Copy(s, 1, s, 2, 2);
                Assert.AreEqual(s[0], "Red");
                Assert.AreEqual(s[1], "Green");
                Assert.AreEqual(s[2], "Green");
                Assert.Null(s[3]);
            }

            [Test]
            public static void TestCopy_VTToObj()
            {
                // Test the Array.Copy code for value-type arrays => Object[]
                G[] s;
                object[] d;
                s = new G[5];
                d = new object[5];

                s[0].x = 7;
                s[0].s = "Hello0";
                s[0].z = 8;

                s[1].x = 9;
                s[1].s = "Hello1";
                s[1].z = 10;

                s[2].x = 11;
                s[2].s = "Hello2";
                s[2].z = 12;

                s[3].x = 13;
                s[3].s = "Hello3";
                s[3].z = 14;

                s[4].x = 15;
                s[4].s = "Hello4";
                s[4].z = 16;

                Array.Copy(s, 0, d, 0, 5);
                for (int i = 0; i < d.Length; i++)
                {
                    Assert.True(d[i] is G);
                    G g = (G)(d[i]);
                    Assert.AreEqual(g.x, s[i].x);
                    Assert.AreEqual(g.s, s[i].s);
                    Assert.AreEqual(g.z, s[i].z);
                }
            }

            [Test]
            public static void TestCopy_VTWithGCRef()
            {
                // Test the Array.Copy code for value-type arrays with no internal GC-refs.

                G[] s;
                G[] d;
                s = new G[5];
                d = new G[5];

                s[0].x = 7;
                s[0].s = "Hello0";
                s[0].z = 8;

                s[1].x = 9;
                s[1].s = "Hello1";
                s[1].z = 10;

                s[2].x = 11;
                s[2].s = "Hello2";
                s[2].z = 12;

                s[3].x = 13;
                s[3].s = "Hello3";
                s[3].z = 14;

                s[4].x = 15;
                s[4].s = "Hello4";
                s[4].z = 16;

                Array.Copy(s, 0, d, 0, 5);
                for (int i = 0; i < d.Length; i++)
                {
                    Assert.AreEqual(d[i].x, s[i].x);
                    Assert.AreEqual(d[i].s, s[i].s);
                    Assert.AreEqual(d[i].z, s[i].z);
                }

                // With overlap
                Array.Copy(s, 1, s, 2, 3);
                Assert.AreEqual(s[0].x, 7);
                Assert.AreEqual(s[0].s, "Hello0");
                Assert.AreEqual(s[0].z, 8);

                Assert.AreEqual(s[1].x, 9);
                Assert.AreEqual(s[1].s, "Hello1");
                Assert.AreEqual(s[1].z, 10);

                Assert.AreEqual(s[2].x, 9);
                Assert.AreEqual(s[2].s, "Hello1");
                Assert.AreEqual(s[2].z, 10);

                Assert.AreEqual(s[3].x, 11);
                Assert.AreEqual(s[3].s, "Hello2");
                Assert.AreEqual(s[3].z, 12);

                Assert.AreEqual(s[4].x, 13);
                Assert.AreEqual(s[4].s, "Hello3");
                Assert.AreEqual(s[4].z, 14);
            }

            [Test]
            public static void TestCopy_VTNoGCRef()
            {
                // Test the Array.Copy code for value-type arrays with no internal GC-refs.

                int[] s;
                int[] d;
                s = new int[] { 0x12345678, 0x22334455, 0x778899aa };
                d = new int[3];

                // Value-type to value-type array copy.
                Array.Copy(s, 0, d, 0, 3);
                Assert.AreEqual(d[0], 0x12345678);
                Assert.AreEqual(d[1], 0x22334455);
                Assert.AreEqual(d[2], 0x778899aa);

                s = new int[] { 0x12345678, 0x22334455, 0x778899aa, 0x55443322, 0x33445566 };
                // Value-type to value-type array copy (in place, with overlap)
                Array.Copy(s, 3, s, 2, 2);
                Assert.AreEqual(s[0], 0x12345678);
                Assert.AreEqual(s[1], 0x22334455);
                Assert.AreEqual(s[2], 0x55443322);
                Assert.AreEqual(s[3], 0x33445566);
                Assert.AreEqual(s[4], 0x33445566);

                s = new int[] { 0x12345678, 0x22334455, 0x778899aa, 0x55443322, 0x33445566 };
                // Value-type to value-type array copy (in place, with reverse overlap)
                Array.Copy(s, 2, s, 3, 2);
                Assert.AreEqual(s[0], 0x12345678);
                Assert.AreEqual(s[1], 0x22334455);
                Assert.AreEqual(s[2], 0x778899aa);
                Assert.AreEqual(s[3], 0x778899aa);
                Assert.AreEqual(s[4], 0x55443322);
            }

            [Test]
            public static void TestFind()
            {
                int[] ia = { 7, 8, 9 };
                bool b;

                // Exists included here since it's a trivial wrapper around FindIndex
                b = Array.Exists<int>(ia, i => i == 8);
                Assert.True(b);

                b = Array.Exists<int>(ia, i => i == -1);
                Assert.False(b);

                int[] results;
                results = Array.FindAll<int>(ia, i => (i % 2) != 0);
                Assert.AreEqual(results.Length, 2);
                Assert.True(Array.Exists<int>(results, i => i == 7));
                Assert.True(Array.Exists<int>(results, i => i == 9));

                string[] sa = { "7", "8", "88", "888", "9" };
                string elem;
                elem = Array.Find<String>(sa, s => s.StartsWith("8"));
                Assert.AreEqual(elem, "8");

                elem = Array.Find<String>(sa, s => s == "X");
                Assert.Null(elem);

                ia = new int[] { 40, 41, 42, 43, 44, 45, 46, 47, 48, 49 };
                int idx;
                idx = Array.FindIndex<int>(ia, i => i >= 43);
                Assert.AreEqual(idx, 3);

                idx = Array.FindIndex<int>(ia, i => i == 99);
                Assert.AreEqual(idx, -1);

                idx = Array.FindIndex<int>(ia, 3, i => i == 43);
                Assert.AreEqual(idx, 3);

                idx = Array.FindIndex<int>(ia, 4, i => i == 43);
                Assert.AreEqual(idx, -1);

                idx = Array.FindIndex<int>(ia, 1, 3, i => i == 43);
                Assert.AreEqual(idx, 3);

                idx = Array.FindIndex<int>(ia, 1, 2, i => i == 43);
                Assert.AreEqual(idx, -1);

                sa = new string[] { "7", "8", "88", "888", "9" };
                elem = Array.FindLast<String>(sa, s => s.StartsWith("8"));
                Assert.AreEqual(elem, "888");

                elem = Array.FindLast<String>(sa, s => s == "X");
                Assert.Null(elem);

                ia = new int[] { 40, 41, 42, 43, 44, 45, 46, 47, 48, 49 };
                idx = Array.FindLastIndex<int>(ia, i => i >= 43);
                Assert.AreEqual(idx, 9);

                idx = Array.FindLastIndex<int>(ia, i => i == 99);
                Assert.AreEqual(idx, -1);

                idx = Array.FindLastIndex<int>(ia, 3, i => i == 43);
                Assert.AreEqual(idx, 3);

                idx = Array.FindLastIndex<int>(ia, 2, i => i == 43);
                Assert.AreEqual(idx, -1);

                idx = Array.FindLastIndex<int>(ia, 5, 3, i => i == 43);
                Assert.AreEqual(idx, 3);

                idx = Array.FindLastIndex<int>(ia, 5, 2, i => i == 43);
                Assert.AreEqual(idx, -1);
            }

            [Test]
            public static void TestForEach()
            {
                int[] intArray = new int[] { 2, 3, 4 };
                int sum = 0;

                Action<int> action = new Action<int>((i) => { sum += i; });

                Array.ForEach(intArray, action);
                Assert.AreEqual(9, sum);
            }

            [Test]
            public static void TestGetEnumerator()
            {
                int[] i = { 7, 8, 9 };

                IEnumerator ie = i.GetEnumerator();
                bool b;
                object v;

                b = ie.MoveNext();
                Assert.True(b);
                v = ie.Current;
                Assert.AreEqual(v, 7);

                b = ie.MoveNext();
                Assert.True(b);
                v = ie.Current;
                Assert.AreEqual(v, 8);

                b = ie.MoveNext();
                Assert.True(b);
                v = ie.Current;
                Assert.AreEqual(v, 9);

                b = ie.MoveNext();
                Assert.False(b);

                ie.Reset();
                b = ie.MoveNext();
                Assert.True(b);
                v = ie.Current;
                Assert.AreEqual(v, 7);
            }

            [Test]
            public static void TestIndexOf()
            {
                Array a;

                a = new int[] { 7, 7, 8, 8, 9, 9 };
                int idx;
                idx = Array.LastIndexOf(a, 8);
                Assert.AreEqual(idx, 3);

                idx = Array.LastIndexOf(a, 8, 3);
                Assert.AreEqual(idx, 3);

                idx = Array.IndexOf(a, 8, 4);
                Assert.AreEqual(idx, -1);

                idx = Array.IndexOf(a, 9, 2, 3);
                Assert.AreEqual(idx, 4);

                idx = Array.IndexOf(a, 9, 2, 2);
                Assert.AreEqual(idx, -1);

                int[] ia = (int[])a;
                idx = Array.IndexOf<int>(ia, 8);
                Assert.AreEqual(idx, 2);

                idx = Array.IndexOf<int>(ia, 8, 3);
                Assert.AreEqual(idx, 3);

                idx = Array.IndexOf<int>(ia, 8, 4);
                Assert.AreEqual(idx, -1);

                idx = Array.IndexOf<int>(ia, 9, 2, 3);
                Assert.AreEqual(idx, 4);

                idx = Array.IndexOf<int>(ia, 9, 2, 2);
                Assert.AreEqual(idx, -1);

                a = new string[] { null, null, "Hello", "Hello", "Goodbye", "Goodbye", null, null };
                idx = Array.IndexOf(a, null);
                Assert.AreEqual(idx, 0);
                idx = Array.IndexOf(a, "Hello");
                Assert.AreEqual(idx, 2);
                idx = Array.IndexOf(a, "Goodbye");
                Assert.AreEqual(idx, 4);
                idx = Array.IndexOf(a, "Nowhere");
                Assert.AreEqual(idx, -1);
                idx = Array.IndexOf(a, "Hello", 3);
                Assert.AreEqual(idx, 3);
                idx = Array.IndexOf(a, "Hello", 4);
                Assert.AreEqual(idx, -1);
                idx = Array.IndexOf(a, "Goodbye", 2, 3);
                Assert.AreEqual(idx, 4);
                idx = Array.IndexOf(a, "Goodbye", 2, 2);
                Assert.AreEqual(idx, -1);

                string[] sa = (string[])a;
                idx = Array.IndexOf<String>(sa, null);
                Assert.AreEqual(idx, 0);
                idx = Array.IndexOf<String>(sa, "Hello");
                Assert.AreEqual(idx, 2);
                idx = Array.IndexOf<String>(sa, "Goodbye");
                Assert.AreEqual(idx, 4);
                idx = Array.IndexOf<String>(sa, "Nowhere");
                Assert.AreEqual(idx, -1);
                idx = Array.IndexOf<String>(sa, "Hello", 3);
                Assert.AreEqual(idx, 3);
                idx = Array.IndexOf<String>(sa, "Hello", 4);
                Assert.AreEqual(idx, -1);
                idx = Array.IndexOf<String>(sa, "Goodbye", 2, 3);
                Assert.AreEqual(idx, 4);
                idx = Array.IndexOf<String>(sa, "Goodbye", 2, 2);
                Assert.AreEqual(idx, -1);
            }

            [Test]
            public static void TestLastIndexOf()
            {
                Array a;

                a = new int[] { 7, 7, 8, 8, 9, 9 };
                int idx;
                idx = Array.LastIndexOf(a, 8);
                Assert.AreEqual(idx, 3);

                idx = Array.LastIndexOf(a, 8, 3);
                Assert.AreEqual(idx, 3);

                idx = Array.LastIndexOf(a, 8, 1);
                Assert.AreEqual(idx, -1);

                idx = Array.LastIndexOf(a, 7, 3, 3);
                Assert.AreEqual(idx, 1);

                idx = Array.LastIndexOf(a, 7, 3, 2);
                Assert.AreEqual(idx, -1);

                int[] ia = (int[])a;
                idx = Array.LastIndexOf<int>(ia, 8);
                Assert.AreEqual(idx, 3);

                idx = Array.LastIndexOf<int>(ia, 8, 3);
                Assert.AreEqual(idx, 3);

                idx = Array.LastIndexOf<int>(ia, 8, 1);
                Assert.AreEqual(idx, -1);

                idx = Array.LastIndexOf<int>(ia, 7, 3, 3);
                Assert.AreEqual(idx, 1);

                idx = Array.LastIndexOf<int>(ia, 7, 3, 2);
                Assert.AreEqual(idx, -1);

                a = new string[] { null, null, "Hello", "Hello", "Goodbye", "Goodbye", null, null };
                idx = Array.LastIndexOf(a, null);
                Assert.AreEqual(idx, 7);
                idx = Array.LastIndexOf(a, "Hello");
                Assert.AreEqual(idx, 3);
                idx = Array.LastIndexOf(a, "Goodbye");
                Assert.AreEqual(idx, 5);
                idx = Array.LastIndexOf(a, "Nowhere");
                Assert.AreEqual(idx, -1);
                idx = Array.LastIndexOf(a, "Hello", 3);
                Assert.AreEqual(idx, 3);
                idx = Array.LastIndexOf(a, "Hello", 2);
                Assert.AreEqual(idx, 2);
                idx = Array.LastIndexOf(a, "Goodbye", 7, 3);
                Assert.AreEqual(idx, 5);
                idx = Array.LastIndexOf(a, "Goodbye", 7, 2);
                Assert.AreEqual(idx, -1);

                string[] sa = (string[])a;
                idx = Array.LastIndexOf<String>(sa, null);
                Assert.AreEqual(idx, 7);
                idx = Array.LastIndexOf<String>(sa, "Hello");
                Assert.AreEqual(idx, 3);
                idx = Array.LastIndexOf<String>(sa, "Goodbye");
                Assert.AreEqual(idx, 5);
                idx = Array.LastIndexOf<String>(sa, "Nowhere");
                Assert.AreEqual(idx, -1);
                idx = Array.LastIndexOf<String>(sa, "Hello", 3);
                Assert.AreEqual(idx, 3);
                idx = Array.LastIndexOf<String>(sa, "Hello", 2);
                Assert.AreEqual(idx, 2);
                idx = Array.LastIndexOf<String>(sa, "Goodbye", 7, 3);
                Assert.AreEqual(idx, 5);
                idx = Array.LastIndexOf<String>(sa, "Goodbye", 7, 2);
                Assert.AreEqual(idx, -1);
            }

            [Test]
            public static void TestResize()
            {
                int[] i;

                i = new int[] { 1, 2, 3, 4, 5 };
                Array.Resize<int>(ref i, 7);
                Assert.AreEqual(i.Length, 7);
                Assert.AreEqual(i[0], 1);
                Assert.AreEqual(i[1], 2);
                Assert.AreEqual(i[2], 3);
                Assert.AreEqual(i[3], 4);
                Assert.AreEqual(i[4], 5);
                Assert.AreEqual(i[5], default(int));
                Assert.AreEqual(i[6], default(int));

                i = new int[] { 1, 2, 3, 4, 5 };
                Array.Resize<int>(ref i, 3);
                Assert.AreEqual(i.Length, 3);
                Assert.AreEqual(i[0], 1);
                Assert.AreEqual(i[1], 2);
                Assert.AreEqual(i[2], 3);

                i = null;
                Array.Resize<int>(ref i, 3);
                Assert.AreEqual(i.Length, 3);
                Assert.AreEqual(i[0], default(int));
                Assert.AreEqual(i[1], default(int));
                Assert.AreEqual(i[2], default(int));
            }

            [Test]
            public static void TestReverse()
            {
                int[] i;

                i = new int[] { 1, 2, 3, 4, 5 };
                Array.Reverse((Array)i);
                Assert.AreEqual(i[0], 5);
                Assert.AreEqual(i[1], 4);
                Assert.AreEqual(i[2], 3);
                Assert.AreEqual(i[3], 2);
                Assert.AreEqual(i[4], 1);

                i = new int[] { 1, 2, 3, 4, 5 };
                Array.Reverse((Array)i, 2, 3);
                Assert.AreEqual(i[0], 1);
                Assert.AreEqual(i[1], 2);
                Assert.AreEqual(i[2], 5);
                Assert.AreEqual(i[3], 4);
                Assert.AreEqual(i[4], 3);

                string[] s;

                s = new string[] { "1", "2", "3", "4", "5" };
                Array.Reverse((Array)s);
                Assert.AreEqual(s[0], "5");
                Assert.AreEqual(s[1], "4");
                Assert.AreEqual(s[2], "3");
                Assert.AreEqual(s[3], "2");
                Assert.AreEqual(s[4], "1");

                s = new string[] { "1", "2", "3", "4", "5" };
                Array.Reverse((Array)s, 2, 3);
                Assert.AreEqual(s[0], "1");
                Assert.AreEqual(s[1], "2");
                Assert.AreEqual(s[2], "5");
                Assert.AreEqual(s[3], "4");
                Assert.AreEqual(s[4], "3");
            }

            [Test]
            public static void TestSort()
            {
                IComparer<int> icomparer = new IntegerComparer();

                TestSortHelper<int>(new int[] { }, 0, 0, icomparer);
                TestSortHelper<int>(new int[] { 5 }, 0, 1, icomparer);
                TestSortHelper<int>(new int[] { 5, 2 }, 0, 2, icomparer);

                TestSortHelper<int>(new int[] { 5, 2, 9, 8, 4, 3, 2, 4, 6 }, 0, 9, icomparer);
                TestSortHelper<int>(new int[] { 5, 2, 9, 8, 4, 3, 2, 4, 6 }, 3, 4, icomparer);
                TestSortHelper<int>(new int[] { 5, 2, 9, 8, 4, 3, 2, 4, 6 }, 3, 6, icomparer);

                IComparer<string> scomparer = new StringComparer();
                TestSortHelper<String>(new string[] { }, 0, 0, scomparer);
                TestSortHelper<String>(new string[] { "5" }, 0, 1, scomparer);
                TestSortHelper<String>(new string[] { "5", "2" }, 0, 2, scomparer);

                TestSortHelper<String>(new string[] { "5", "2", null, "8", "4", "3", "2", "4", "6" }, 0, 9, scomparer);
                TestSortHelper<String>(new string[] { "5", "2", null, "8", "4", "3", "2", "4", "6" }, 3, 4, scomparer);
                TestSortHelper<String>(new string[] { "5", "2", null, "8", "4", "3", "2", "4", "6" }, 3, 6, scomparer);
            }

            private static void TestSortHelper<T>(T[] array, int index, int length, IComparer<T> comparer)
            {
                T[] control = SimpleSort<T>(array, index, length, comparer);

                {
                    T[] spawn2 = (T[])(array.Clone());
                    Array.Sort<T>(spawn2, index, length, comparer);
                    Assert.True(ArraysAreEqual<T>((T[])spawn2, control, comparer));
                }
            }

            private static T[] SimpleSort<T>(T[] a, int index, int length, IComparer<T> comparer)
            {
                T[] result = (T[])(a.Clone());
                if (length < 2)
                    return result;

                for (int i = index; i < index + length - 1; i++)
                {
                    T tmp = result[i];
                    for (int j = i + 1; j < index + length; j++)
                    {
                        if (comparer.Compare(tmp, result[j]) > 0)
                        {
                            result[i] = result[j];
                            result[j] = tmp;
                            tmp = result[i];
                        }
                    }
                }
                return result;
            }

            private static bool ArraysAreEqual<T>(T[] a, T[] b, IComparer<T> comparer)
            {
                // If the same instances were passed, this is unlikely what the test intended.
                Assert.False(Object.ReferenceEquals(a, b));

                if (a.Length != b.Length)
                    return false;
                for (int i = 0; i < a.Length; i++)
                {
                    if (0 != comparer.Compare(a[i], b[i]))
                        return false;
                }
                return true;
            }

            [Test]
            public static void TestTrueForAll()
            {
                int[] ia;
                bool b;

                ia = new int[] { 1, 2, 3, 4, 5 };

                b = Array.TrueForAll<int>(ia, i => i > 0);
                Assert.True(b);

                b = Array.TrueForAll<int>(ia, i => i == 3);
                Assert.False(b);

                ia = new int[0];
                b = Array.TrueForAll<int>(ia, i => false);
                Assert.True(b);
            }

            private struct G
            {
                public int x;
                public string s;
                public int z;
            }

            private class IntegerComparer : IComparer<int>, IEqualityComparer
            {
                public int Compare(int x, int y)
                {
                    return x - y;
                }

                bool IEqualityComparer.Equals(object x, object y)
                {
                    return ((int)x) == ((int)y);
                }

                public int GetHashCode(object obj)
                {
                    return ((int)obj) >> 2;
                }
            }

            private class StringComparer : IComparer<string>
            {
                public int Compare(string x, string y)
                {
                    if (x == y)
                        return 0;
                    if (x == null)
                        return -1;
                    if (y == null)
                        return 1;
                    return x.CompareTo(y);
                }
            }

            [Test]
            public static void TestSetValueCasting()
            {
                int[] indices = { 1 };
                {
                    // null -> default(null)
                    S[] a = new S[3];
                    a[1].X = 0x22222222;
                    //a.SetValue(null, indices);
                    //Assert.AreEqual(a[1].X, 0);
                }

                {
                    // T -> Nullable<T>
                    Nullable<int>[] a = new Nullable<int>[3];
                    a.SetValue(42, indices);
                    Nullable<int> ni = a[1];
                    Assert.AreEqual(ni.HasValue, true);
                    Assert.AreEqual(ni.Value, 42);
                }

                {
                    // null -> Nullable<T>
                    Nullable<int>[] a = new Nullable<int>[3];
                    Nullable<int> orig = 42;
                    a[1] = orig;
                    a.SetValue(null, indices);
                    Nullable<int> ni = a[1];
                    Assert.AreEqual(ni.HasValue, false);
                }

                {
                    // primitive widening
                    int[] a = new int[3];
                    a.SetValue((short)42, indices);
                    Assert.AreEqual(a[1], 42);
                }

                {
                    // widening from enum to primitive
                    int[] a = new int[3];
                    a.SetValue(E1.MinusTwo, indices);
                    Assert.AreEqual(a[1], -2);
                }
            }

            private enum E1 : sbyte
            {
                MinusTwo = -2
            }

            private struct S
            {
                public int X;
            }

            [Test]
            public static void TestValueTypeToReferenceCopy()
            {
                {
                    int[] s = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
                    object[] d = new object[10];

                    Array.Copy(s, 2, d, 5, 3);

                    Assert.AreEqual(d[0], null);
                    Assert.AreEqual(d[1], null);
                    Assert.AreEqual(d[2], null);
                    Assert.AreEqual(d[3], null);
                    Assert.AreEqual(d[4], null);
                    Assert.AreEqual(d[5], 2);
                    Assert.AreEqual(d[6], 3);
                    Assert.AreEqual(d[7], 4);
                    Assert.AreEqual(d[8], null);
                    Assert.AreEqual(d[9], null);
                }

                {
                    int[] s = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
                    object[] d = new IEquatable<int>[10];

                    Array.Copy(s, 2, d, 5, 3);

                    Assert.AreEqual(d[0], null);
                    Assert.AreEqual(d[1], null);
                    Assert.AreEqual(d[2], null);
                    Assert.AreEqual(d[3], null);
                    Assert.AreEqual(d[4], null);
                    Assert.AreEqual(d[5], 2);
                    Assert.AreEqual(d[6], 3);
                    Assert.AreEqual(d[7], 4);
                    Assert.AreEqual(d[8], null);
                    Assert.AreEqual(d[9], null);
                }

                {
                    Nullable<int>[] s = { 0, 1, 2, default(Nullable<int>), 4, 5, 6, 7, 8, 9 };
                    object[] d = new object[10];

                    Array.Copy(s, 2, d, 5, 3);

                    Assert.AreEqual(d[0], null);
                    Assert.AreEqual(d[1], null);
                    Assert.AreEqual(d[2], null);
                    Assert.AreEqual(d[3], null);
                    Assert.AreEqual(d[4], null);
                    Assert.AreEqual(d[5], 2);
                    Assert.AreEqual(d[6], null);
                    Assert.AreEqual(d[7], 4);
                    Assert.AreEqual(d[8], null);
                    Assert.AreEqual(d[9], null);
                }

                return;
            }

            [Test]
            public static void TestReferenceToValueTypeCopy()
            {
                const int cc = unchecked((int)0xcccccccc);

                {
                    object[] s = new object[10];
                    for (int i = 0; i < s.Length; i++)
                        s[i] = i;

                    int[] d = new int[10];
                    for (int i = 0; i < d.Length; i++)
                        d[i] = cc;

                    Array.Copy(s, 2, d, 5, 3);
                    Assert.AreEqual(d[0], cc);
                    Assert.AreEqual(d[1], cc);
                    Assert.AreEqual(d[2], cc);
                    Assert.AreEqual(d[3], cc);
                    Assert.AreEqual(d[4], cc);
                    Assert.AreEqual(d[5], 2);
                    Assert.AreEqual(d[6], 3);
                    Assert.AreEqual(d[7], 4);
                    Assert.AreEqual(d[8], cc);
                    Assert.AreEqual(d[9], cc);
                }

                {
                    object[] s = new IEquatable<int>[10];
                    for (int i = 0; i < s.Length; i++)
                        s[i] = i;

                    int[] d = new int[10];
                    for (int i = 0; i < d.Length; i++)
                        d[i] = cc;

                    Array.Copy(s, 2, d, 5, 3);
                    Assert.AreEqual(d[0], cc);
                    Assert.AreEqual(d[1], cc);
                    Assert.AreEqual(d[2], cc);
                    Assert.AreEqual(d[3], cc);
                    Assert.AreEqual(d[4], cc);
                    Assert.AreEqual(d[5], 2);
                    Assert.AreEqual(d[6], 3);
                    Assert.AreEqual(d[7], 4);
                    Assert.AreEqual(d[8], cc);
                    Assert.AreEqual(d[9], cc);
                }

                {
                    object[] s = new IEquatable<int>[10];
                    for (int i = 0; i < s.Length; i++)
                        s[i] = i;
                    s[1] = new NotInt32();
                    s[5] = new NotInt32();

                    int[] d = new int[10];
                    for (int i = 0; i < d.Length; i++)
                        d[i] = cc;

                    Array.Copy(s, 2, d, 5, 3);
                    Assert.AreEqual(d[0], cc);
                    Assert.AreEqual(d[1], cc);
                    Assert.AreEqual(d[2], cc);
                    Assert.AreEqual(d[3], cc);
                    Assert.AreEqual(d[4], cc);
                    Assert.AreEqual(d[5], 2);
                    Assert.AreEqual(d[6], 3);
                    Assert.AreEqual(d[7], 4);
                    Assert.AreEqual(d[8], cc);
                    Assert.AreEqual(d[9], cc);
                }

                {
                    object[] s = new object[10];
                    for (int i = 0; i < s.Length; i++)
                        s[i] = i;
                    s[4] = null;

                    Nullable<int>[] d = new Nullable<int>[10];
                    for (int i = 0; i < d.Length; i++)
                        d[i] = cc;

                    Array.Copy(s, 2, d, 5, 3);
                    Assert.True(d[0].HasValue && d[0].Value == cc);
                    Assert.True(d[1].HasValue && d[1].Value == cc);
                    Assert.True(d[2].HasValue && d[2].Value == cc);
                    Assert.True(d[3].HasValue && d[3].Value == cc);
                    Assert.True(d[4].HasValue && d[4].Value == cc);
                    Assert.True(d[5].HasValue && d[5].Value == 2);
                    Assert.True(d[6].HasValue && d[6].Value == 3);
                    Assert.True(!d[7].HasValue);
                    Assert.True(d[8].HasValue && d[8].Value == cc);
                    Assert.True(d[9].HasValue && d[9].Value == cc);
                }

                return;
            }

            private class NotInt32 : IEquatable<int>
            {
                public bool Equals(int other)
                {
                    throw new NotImplementedException();
                }
            }

            private class B1
            {
            }

            private class D1 : B1
            {
            }

            private class B2
            {
            }

            private class D2 : B2
            {
            }

            private interface I1
            {
            }

            private interface I2
            {
            }

            [Test]
            public static void TestArrayConstructionMultidimArrays()
            {
                // This C# initialization syntax generates some peculiar looking IL.
                // Initializations of this form are handled specially on Desktop and
                // in .NET Native by UTC.
                int[,,,] arr = new int[,,,]
                {
                {{{1, 2, 3}, {1, 2, 3}}, {{1, 2, 3}, {1, 2, 3}}},
                {{{1, 2, 3}, {1, 2, 3}}, {{1, 2, 3}, {1, 2, 3}}}
                };
                Assert.NotNull(arr);
                Assert.AreEqual(arr.GetValue(0, 0, 0, 0), 1);
                Assert.AreEqual(arr.GetValue(0, 0, 0, 1), 2);
                Assert.AreEqual(arr.GetValue(0, 0, 0, 2), 3);
            }
        }
    }
}