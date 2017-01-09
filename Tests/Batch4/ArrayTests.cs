using Bridge.Test;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch4
{
    [TestFixture(TestNameFormat = "ArrayTests - {0}")]
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
        public void TypePropertiesAreCorrect_SPI_1546()
        {
            // #1546
            Assert.AreEqual(typeof(Object), typeof(Array).BaseType, "BaseType of Array should be object");
        }

        [Test]
        public void TypePropertiesAreCorrect_SPI_1548()
        {
            Assert.AreEqual("Array", typeof(int[]).FullName, "FullName should be Array");
            Assert.True(typeof(Array).IsClass, "IsClass should be true");
            Assert.True(typeof(int[]).IsClass, "IsClass should be true");

            var interfaces = typeof(int[]).GetInterfaces();
            Assert.AreEqual(6, interfaces.Length, "Interface count should be 6");
            Assert.True(interfaces.Contains(typeof(IEnumerable<int>)), "Interfaces should contain IEnumerable<int>");
            Assert.True(interfaces.Contains(typeof(ICollection<int>)), "Interfaces should contain ICollection<int>");
            Assert.True(interfaces.Contains(typeof(IList<int>)), "Interfaces should contain IList<int>");
            // #1626
            //Assert.True(interfaces.Contains(typeof(IReadOnlyCollection<int>)), "Interfaces should contain IReadOnlyCollection<int>");
            //Assert.True(interfaces.Contains(typeof(IReadOnlyList<int>)), "Interfaces should contain IReadOnlyList<int>");

            object arr = new[] { 1, 2, 3 };
            Assert.True(arr is Array, "is Array should be true");
            Assert.True(arr is int[], "is int[] should be true");
            Assert.True(arr is IList<int>, "is IList<int> should be true");
            Assert.True(arr is ICollection<int>, "is ICollection<int> should be true");
            // #1626
            //Assert.True(arr is IReadOnlyList<int>, "is IReadOnlyList<int> should be true");
            //Assert.True(arr is IReadOnlyCollection<int>, "is IReadOnlyCollection<int> should be true");
            Assert.True(arr is IEnumerable<int>, "is IEnumerable<int> should be true");
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
            Assert.AreEqual(arr2, arr);
        }

        [Test]
        public void ConcatWorks()
        {
            var arr = new[] { "a", "b" };
            Assert.AreEqual(new[] { "a", "b", "c" }, arr.Concat("c"));
            Assert.AreEqual(new[] { "a", "b", "c", "d" }, arr.Concat("c", "d"));
            Assert.AreEqual(new[] { "a", "b" }, arr);
        }

        [Test]
        public void ContainsWorks()
        {
            var arr = new[] { "x", "y" };
            Assert.True(arr.Contains("x"));
            Assert.False(arr.Contains("z"));
        }

        // TODO Fix test NEWCI Run client tests to see the test errors
        [Test]
        public void ContainsUsesEqualsMethod()
        {
            C[] arr = new[] { new C(1), new C(2), new C(3) };
            Assert.True(arr.Contains(new C(2)));
            Assert.False(arr.Contains(new C(4)));
        }

        // Not C# API
        //[Test]
        //public void EveryWithArrayItemFilterCallbackWorks()
        //{
        //    Assert.True(new[] { 1, 2, 3 }.Every(x => x > 0));
        //    Assert.False(new[] { 1, 2, 3 }.Every(x => x > 1));
        //}

        // Not C# API
        //[Test]
        //public void EveryWithArrayFilterCallbackWorks()
        //{
        //    var arr = new[] { 1, 2, 3 };
        //    Assert.True(arr.Every((x, i, a) => a == arr && x == i + 1));
        //    Assert.False(arr.Every((x, i, a) => x > 1));
        //}

        // Not C# API
        //[Test]
        //public void ExtractWithoutCountWorks()
        //{
        //    Assert.AreEqual(new[] { "a", "b", "c", "d" }.Extract(2), new[] { "c", "d" });
        //}

        // Not C# API
        //[Test]
        //public void ExtractWithCountWorks()
        //{
        //    Assert.AreEqual(new[] { "a", "b", "c", "d" }.Extract(1, 2), new[] { "b", "c" });
        //}

        [Test]
        public void SliceWithoutEndWorks()
        {
            Assert.AreEqual(new[] { "c", "d" }, new[] { "a", "b", "c", "d" }.Slice(2));
        }

        [Test]
        public void SliceWithEndWorks()
        {
            Assert.AreEqual(new[] { "b", "c" }, new[] { "a", "b", "c", "d" }.Slice(1, 3));
        }

        // Not C# API
        //[Test]
        //public void FilterWithArrayItemFilterCallbackWorks()
        //{
        //    Assert.AreEqual(new[] { 1, 2, 3, 4 }.Filter(x => x > 1 && x < 4), new[] { 2, 3 });
        //}

        // Not C# API
        //[Test]
        //public void FilterWithArrayFilterCallbackWorks()
        //{
        //    var arr = new[] { -1, 1, 4, 3 };
        //    Assert.AreEqual(arr.Filter((x, i, a) => a == arr && x == i), new[] { 1, 3 });
        //}

        [Test]
        public void ForeachWithArrayItemCallbackWorks()
        {
            string result = "";
            Array.ForEach(new[] { "a", "b", "c" }, s => result += s);
            Assert.AreEqual("abc", result);
        }

        // Not C# API
        //[Test]
        //public void ForeachWithArrayCallbackWorks()
        //{
        //    string result = "";
        //    new[] { "a", "b", "c" }.ForEach((s, i, a) => result += s + i);
        //    Assert.AreEqual(result, "a0b1c2");
        //}

        [Test]
        public void IndexOfWithoutStartIndexWorks()
        {
            Assert.AreEqual(1, new[] { "a", "b", "c", "b" }.IndexOf("b"));
        }

        // TODO Fix test NEWCI Run client tests to see the test errors
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

        // TODO Fix test NEWCI Run client tests to see the test errors
        [Test]
        public void IndexOfWithStartIndexUsesEqualsMethod()
        {
            var arr = new[] { new C(1), new C(2), new C(3), new C(2) };
            Assert.AreEqual(3, Array.IndexOf(arr, new C(2), 2));
        }

        [Test]
        public void JoinWithoutDelimiterWorks()
        {
            Assert.AreEqual("a,b,c,b", new[] { "a", "b", "c", "b" }.Join());
        }

        [Test]
        public void JoinWithDelimiterWorks()
        {
            Assert.AreEqual("a|b|c|b", new[] { "a", "b", "c", "b" }.Join("|"));
        }

        // Not C# API
        //[Test]
        //public void MapWithArrayItemMapCallbackWorks()
        //{
        //    Assert.AreEqual(new[] { "a", "b", "c", "b" }.Map(s => s + "X" + s), new[] { "aXa", "bXb", "cXc", "bXb" });
        //}

        // Not C# API
        //[Test]
        //public void MapWithArrayMapCallbackWorks()
        //{
        //    Assert.AreEqual(new[] { "a", "b", "c", "b" }.Map((s, i, a) => s + i), new[] { "a0", "b1", "c2", "b3" });
        //}

        [Test]
        public void ReverseWorks()
        {
            var arr = new[] { 1, 3, 4, 1, 3, 2 };
            arr.Reverse();
            Assert.AreEqual(new[] { 2, 3, 1, 4, 3, 1 }, arr);
        }

        // Not C# API
        //[Test]
        //public void SomeWithArrayItemFilterCallbackWorks()
        //{
        //    Assert.True(new[] { 1, 2, 3, 4 }.Some(i => i > 1));
        //    Assert.False(new[] { 1, 2, 3, 4 }.Some(i => i > 5));
        //}

        // Not C# API
        //[Test]
        //public void SomeWithArrayFilterCallbackWorks()
        //{
        //    Assert.True(new[] { 1, 1, 6, 2 }.Some((x, i, a) => x == i + 1));
        //    Assert.False(new[] { 2, 1, 6, 2 }.Some((x, i, a) => x == i + 1));
        //}

        [Test]
        public void SortWithDefaultCompareWorks()
        {
            var arr = new[] { 1, 6, 6, 4, 2 };
            Array.Sort(arr);
            Assert.AreEqual(new[] { 1, 2, 4, 6, 6 }, arr);
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
        public void ICollectionAddWorks()
        {
            // #1548
            IList<string> l = new[] { "x", "y", "z" };
            l.Add("a");
            Assert.AreEqual(new[] { "x", "y", "z", "a" }, l);
        }

        [Test]
        public void ICollectionClearWorks_NDN_1548()
        {
            // #1548
            IList<string> l = new[] { "x", "y", "z" };
            l.Clear();
            Assert.AreEqual(new string[0], l);
        }

        [Test]
        public void ICollectionContainsWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            Assert.True(l.Contains("y"));
            Assert.False(l.Contains("a"));
        }

        // TODO Fix test NEWCI Run client tests to see the test errors
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
            // #1548
            IList<string> l = new[] { "x", "y", "z" };
            Assert.True(l.Remove("y"));
            Assert.False(l.Remove("a"));
            Assert.AreEqual(new[] { "x", "z" }, l);
        }

        //[Test]
        //public void IReadOnlyCollectionCountWorks_SPI_1626()
        //{
        //    // #1626
        //    IReadOnlyCollection<string> l = new[] { "x", "y", "z" };
        //    Assert.AreEqual(l.Count, 3);
        //}

        //[Test]
        //public void IReadOnlyCollectionContainsWorks_SPI_1626()
        //{
        //    // #1626
        //    IReadOnlyCollection<string> l = new[] { "x", "y", "z" };
        //    Assert.True(l.Contains("y"));
        //    Assert.False(l.Contains("a"));
        //}

        [Test]
        public void IListIndexingWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            Assert.AreEqual("y", l[1]);
            l[1] = "a";
            Assert.AreEqual(new[] { "x", "a", "z" }, l);
        }

        [Test]
        public void IListIndexOfWorks()
        {
            IList<string> l = new[] { "x", "y", "z" };
            Assert.AreEqual(1, l.IndexOf("y"));
            Assert.AreEqual(-1, l.IndexOf("a"));
        }

        // TODO Fix test NEWCI Run client tests to see the test errors
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
            // #1548
            IList<string> l = new[] { "x", "y", "z" };
            l.Insert(1, "a");
            Assert.AreEqual(new[] { "x", "a", "y", "z" }, l);
        }

        [Test]
        public void IListRemoveAtWorks()
        {
            // #1548
            IList<string> l = new[] { "x", "y", "z" };
            l.RemoveAt(1);
            Assert.AreEqual(new[] { "x", "z" }, l);
        }

        //[Test]
        //public void IReadOnlyListIndexingWorks_SPI_1626()
        //{
        //    // #1626
        //    IReadOnlyList<string> l = new[] { "x", "y", "z" };
        //    Assert.AreEqual(l[1], "y");
        //}

        [Test]
        public void RepeatWorks()
        {
            Assert.AreEqual(new int[0], Array.Repeat(10, 0));
            Assert.AreEqual(new[] { 42, 42, 42 }, Array.Repeat(42, 3));
            Assert.AreEqual(new[] { "X", "X", "X", "X", "X" }, Array.Repeat("X", 5));
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
}
