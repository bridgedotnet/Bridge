using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

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

        private class Foo
        {
            public int V;
        }

        private class TestData
        {
            public List<string> Dinosaurs
            {
                get
                {
                    List<string> dinosaurs = new List<string>();

                    dinosaurs.Add("Compsognathus");
                    dinosaurs.Add("Amargasaurus");
                    dinosaurs.Add("Oviraptor");
                    dinosaurs.Add("Velociraptor");
                    dinosaurs.Add("Deinonychus");
                    dinosaurs.Add("Dilophosaurus");
                    dinosaurs.Add("Gallimimus");
                    dinosaurs.Add("Triceratops");

                    return dinosaurs;
                }
            }

            public List<int> Numbers3
            {
                get
                {
                    return new List<int>(new int[] { 1, 2, 3});
                }
            }

            public Predicate<string> EndsWithSaurus
            {
                get
                {
                    Predicate<string> p = s => s.ToLower().EndsWith("saurus");
                    return p;
                }
            }

            public Predicate<string> HasLettersAorO
            {
                get
                {
                    Predicate<string> p = s => s.ToLower().Any(x => x == 'a' || x == 'o');
                    return p;
                }
            }

            public Predicate<string> StartsWithLetter5
            {
                get
                {
                    Predicate<string> p = s => s.StartsWith("5");
                    return p;
                }
            }

            public Predicate<string> StartsWithLetterD
            {
                get
                {
                    Predicate<string> p = s => s.ToLower().StartsWith("d");
                    return p;
                }
            }

            public Predicate<int> Equals2
            {
                get
                {
                    Predicate<int> p = i => i == 2;
                    return p;
                }
            }

            public Predicate<int> Equals7
            {
                get
                {
                    Predicate<int> p = i => i == 7;
                    return p;
                }
            }

            public Predicate<int> LessThan3
            {
                get
                {
                    Predicate<int> p = i => i < 3;
                    return p;
                }
            }
        }

        private class Entity
        {
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            // #1294
            Assert.AreEqual("System.Collections.Generic.List`1[[System.Int32, mscorlib]]", typeof(List<int>).FullName, "FullName");
            Assert.True(typeof(List<int>).IsClass, "IsClass should be true");
            object list = new List<int>();
            Assert.True(list is List<int>, "is int[] should be true");
            Assert.True(list is IList<int>, "is IList<int> should be true");
            Assert.True(list is ICollection<int>, "is ICollection<int> should be true");
            Assert.True(list is IEnumerable<int>, "is IEnumerable<int> should be true");
            Assert.True(list is IReadOnlyCollection<int>, "is IReadOnlyCollection<int> should be true");
            Assert.True(list is IReadOnlyList<int>, "is IReadOnlyList<int> should be true");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var l = new List<int>();
            Assert.AreEqual(0, l.Count);
        }

        [Test]
        public void ConstructorWithCapacityWorks()
        {
            var l = new List<int>(12);
            Assert.AreEqual(0, l.Count);
        }

        // Not C# API
        //[Test]
        //public void ParamArrayConstructorWorks()
        //{
        //    var l = new List<int>(1, 4, 7, 8);
        //    Assert.AreEqual(l, new[] { 1, 4, 7, 8 });

        //    var arr = new[] { 4, 7, 8 };
        //    l = new List<int>(1, arr);
        //    Assert.AreEqual(l, new[] { 1, 4, 7, 8 });
        //}

        [Test]
        public void ConstructingFromArrayWorks()
        {
            var arr = new[] { 1, 4, 7, 8 };
            var l = new List<int>(arr);
            Assert.False((object)l == (object)arr);
            Assert.AreDeepEqual(arr, l.ToArray());
        }

        [Test]
        public void ConstructingFromListWorks()
        {
            var arr = new List<int>(new[] { 1, 4, 7, 8 });
            var l = new List<int>(arr);
            Assert.False((object)l == (object)arr);
            Assert.AreDeepEqual(new[] { 1, 4, 7, 8 }, l.ToArray());
        }

        [Test]
        public void ConstructingFromIEnumerableWorks()
        {
            var enm = (IEnumerable<int>)new List<int>(new[] { 1, 4, 7, 8 });
            var l = new List<int>(enm);
            Assert.False((object)l == (object)enm);
            Assert.AreEqual(new[] { 1, 4, 7, 8 }, l.ToArray());
        }

        [Test]
        public void AsReadonlyWorks()
        {
            var data = new TestData();

            var numbers = data.Numbers3;

            var ro = numbers.AsReadOnly();
            Assert.AreEqual("ReadOnlyCollection`1", ro.GetType().Name);
            Assert.True(((IList)ro).IsReadOnly);
            Assert.AreEqual(1, ro[0]);
            Assert.AreEqual(2, ro[1]);
            Assert.AreEqual(3, ro[2]);
            Assert.AreEqual(3, ro.Count);
            // TODO
            //Assert.Throws<NotSupportedException>(() => { ((IList)ro)[0] = 7;  });

            Assert.False(((IList)numbers).IsReadOnly);
            numbers[0] = 7;
            Assert.AreEqual(7, numbers[0]);
            Assert.AreEqual(7, ro[0]);
        }

        [Test]
        public void CountWorks()
        {
            Assert.AreEqual(0, new List<string>().Count);
            Assert.AreEqual(1, new List<string> { "x" }.Count);
            Assert.AreEqual(2, new List<string> { "x", "y" }.Count);
        }

        [Test]
        public void IndexingWorks()
        {
            Assert.AreEqual("x", new List<string> { "x", "y" }[0]);
            Assert.AreEqual("y", new List<string> { "x", "y" }[1]);
        }

        [Test]
        public void ForeachWorks()
        {
            string result = "";
            foreach (var s in new List<string> { "x", "y" })
            {
                result += s;
            }
            Assert.AreEqual("xy", result);
        }

        [Test]
        public void GetEnumeratorWorks()
        {
            var e = new List<string> { "x", "y" }.GetEnumerator();
            Assert.True(e.MoveNext());
            Assert.AreEqual("x", e.Current);
            Assert.True(e.MoveNext());
            Assert.AreEqual("y", e.Current);
            Assert.False(e.MoveNext());
        }

        [Test]
        public void AddWorks()
        {
            var l = new List<string> { "x", "y" };
            l.Add("a");
            Assert.AreEqual(new[] { "x", "y", "a" }, l.ToArray());
        }

        [Test]
        public void AddRangeWorks()
        {
            var l = new List<string> { "x", "y" };
            l.AddRange(new[] { "a", "b", "c" });
            Assert.AreEqual(new[] { "x", "y", "a", "b", "c" }, l.ToArray());
        }

        [Test]
        public void BinarySearch1Works()
        {
            var arr = new List<int> { 1, 2, 3, 3, 4, 5 };

            Assert.AreEqual(2, arr.BinarySearch(3));
            Assert.True(arr.BinarySearch(6) < 0);
        }

        // Not C# API
        //[Test]
        //public void BinarySearch2Works()
        //{
        //    var arr = new List<int> { 1, 2, 3, 3, 4, 5 };

        //    Assert.AreEqual(3, arr.BinarySearch(3, 2, 3));
        //    Assert.True(arr.BinarySearch(2, 2, 4) < 0);
        //}

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

            Assert.AreEqual(2, arr.BinarySearch(3, new TestReverseComparer()));
            Assert.AreEqual(-1, arr.BinarySearch(6, new TestReverseComparer()));
        }

        [Test]
        public void BinarySearch4Works()
        {
            var arr = new List<int> { 1, 2, 3, 3, 4, 5 };

            Assert.AreEqual(3, arr.BinarySearch(3, 2, 3, new TestReverseComparer()));
            Assert.True(arr.BinarySearch(3, 2, 4, new TestReverseComparer()) < 0);
        }

        // Not C# API
        //[Test]
        //public void CloneWorks()
        //{
        //    var l1 = new List<string> { "x", "y" };
        //    var l2 = l1.Clone();
        //    Assert.False(l1 == l2);
        //    Assert.AreEqual(l1, l2);
        //}

        [Test]
        public void ClearWorks()
        {
            var l = new List<string> { "x", "y" };
            l.Clear();
            Assert.AreEqual(l.Count, 0);
        }

        [Test]
        public void ConcatWorks()
        {
            var list = new List<string> { "a", "b" };
            Assert.AreEqual(new[] { "a", "b", "c" }, list.Concat(new[] { "c" }).ToArray());
            Assert.AreEqual(new[] { "a", "b", "c", "d" }, list.Concat(new List<string>() { "c", "d" }).ToArray());
            Assert.AreEqual(new[] { "a", "b" }, list.ToArray());
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
        public void CopyToMethodSameBound()
        {
            var l = new List<string> { "0", "1", "2" };

            var a1 = new string[3];
            l.CopyTo(a1, 0);

            Assert.AreEqual("0", a1[0], "Element 0");
            Assert.AreEqual("1", a1[1], "Element 1");
            Assert.AreEqual("2", a1[2], "Element 2");
        }

        [Test]
        public void CopyToMethodOffsetBound()
        {
            var l = new List<string> { "0", "1", "2" };

            var a2 = new string[5];
            l.CopyTo(a2, 1);

            Assert.AreEqual(null, a2[0], "Element 0");
            Assert.AreEqual("0", a2[1], "Element 1");
            Assert.AreEqual("1", a2[2], "Element 2");
            Assert.AreEqual("2", a2[3], "Element 3");
            Assert.AreEqual(null, a2[4], "Element 4");
        }

        [Test]
        public void CopyToMethodIllegalBound()
        {
            var l = new List<string> { "0", "1", "2" };

            Assert.Throws<ArgumentNullException>(() => { l.CopyTo(null, 0); }, "null");

            var a1 = new string[2];
            Assert.Throws<ArgumentException>(() => { l.CopyTo(a1, 0); }, "Short array");

            var a2 = new string[3];
            Assert.Throws<ArgumentException>(() => { l.CopyTo(a2, 1); }, "Start index 1");
            Assert.Throws<ArgumentOutOfRangeException>(() => { l.CopyTo(a2, -1); }, "Negative start index");
            Assert.Throws<ArgumentException>(() => { l.CopyTo(a2, 3); }, "Start index 3");
        }


        // Not C# API
        //[Test]
        //public void EveryWithListItemFilterCallbackWorks()
        //{
        //    Assert.True(new List<int> { 1, 2, 3 }.Every(x => (int)x > 0));
        //    Assert.False(new List<int> { 1, 2, 3 }.Every(x => (int)x > 1));
        //}

        // Not C# API
        //[Test]
        //public void EveryWithListFilterCallbackWorks()
        //{
        //    var list = new List<int> { 1, 2, 3 };
        //    Assert.True(list.Every((x, i, a) => a == list && (int)x == i + 1));
        //    Assert.False(list.Every((x, i, a) => (int)x > 1));
        //}

        // Not C# API
        //[Test]
        //public void ExtractWithoutCountWorks()
        //{
        //    Assert.AreEqual(new List<string> { "a", "b", "c", "d" }.Extract(2), new[] { "c", "d" });
        //}

        // Not C# API
        //[Test]
        //public void ExtractWithCountWorks()
        //{
        //    Assert.AreEqual(new List<string> { "a", "b", "c", "d" }.Extract(1, 2), new[] { "b", "c" });
        //}

        // Not C# API
        //[Test]
        //public void SliceWithoutEndWorks()
        //{
        //    Assert.AreEqual(new[] { "c", "d" }, new List<string> { "a", "b", "c", "d" }.Slice(2).ToArray());
        //}

        // Not C# API
        //[Test]
        //public void SliceWithEndWorks()
        //{
        //    Assert.AreEqual(new[] { "b", "c" }, new List<string> { "a", "b", "c", "d" }.Slice(1, 3).ToArray());
        //}

        [Test]
        public void ForeachWithListItemCallbackWorks()
        {
            string result = "";
            new List<string> { "a", "b", "c" }.ForEach(s => result += s);
            Assert.AreEqual("abc", result);
        }

        // Not C# API
        //[Test]
        //public void FilterWithListItemFilterCallbackWorks()
        //{
        //    Assert.AreEqual(new List<int> { 1, 2, 3, 4 }.Filter(x => (int)x > 1 && (int)x < 4), new[] { 2, 3 });
        //}

        // Not C# API
        //[Test]
        //public void FilterWithListFilterCallbackWorks()
        //{
        //    var list = new List<int> { -1, 1, 4, 3 };
        //    Assert.AreEqual(list.Filter((x, i, a) => a == list && (int)x == i), new[] { 1, 3 });
        //}

        // #SPI
        //[Test]
        //public void ForeachWithListItemCallbackWorks_SPI_1627()
        //{
        //    string result = "";
        //    // #1627
        //    new List<string> { "a", "b", "c" }.ForEach(s => result += s);
        //    Assert.AreEqual(result, "abc");
        //}

        // Not C# API
        //[Test]
        //public void ForeachWithListCallbackWorks()
        //{
        //    string result = "";
        //    new List<string> { "a", "b", "c" }.ForEach((s, i, a) => result += (string)s + i);
        //    Assert.AreEqual(result, "a0b1c2");
        //}

        [Test]
        public void IndexOfWithoutStartIndexWorks()
        {
            Assert.AreEqual(1, new[] { "a", "b", "c", "b" }.IndexOf("b"));
        }

        [Test]
        public void IndexOfWithoutStartIndexUsesEqualsMethod()
        {
            List<C> l = new List<C> { new C(1), new C(2), new C(3) };
            Assert.AreEqual(1, l.IndexOf(new C(2)));
            Assert.AreEqual(-1, l.IndexOf(new C(4)));
        }

        [Test]
        public void IndexOfWithStartIndexWorks()
        {
            Assert.AreEqual(3, new List<string> { "a", "b", "c", "b" }.IndexOf("b", 2));
        }

        [Test]
        public void IndexOfWithStartIndexUsesEqualsMethod()
        {
            Assert.AreEqual(3, new List<C> { new C(1), new C(2), new C(3), new C(2) }.IndexOf(new C(2), 2));
        }

        [Test]
        public void InsertWorks()
        {
            var l = new List<string> { "x", "y" };
            l.Insert(1, "a");
            Assert.AreEqual(new[] { "x", "a", "y" }, l.ToArray());
        }

        [Test]
        public void InsertRangeWorks()
        {
            var l = new List<string> { "x", "y" };
            l.InsertRange(1, new[] { "a", "b" });
            Assert.AreEqual(new[] { "x", "a", "b", "y" }, l.ToArray());

            l.InsertRange(0, new[] { "q", "q" });
            Assert.AreEqual(new[] { "q", "q", "x", "a", "b", "y" }, l.ToArray());
        }

        // Not C# API
        //[Test]
        //public void JoinWithoutDelimiterWorks()
        //{
        //    Assert.AreEqual("a,b,c,b", new List<string> { "a", "b", "c", "b" }.Join());
        //}

        // Not C# API
        //[Test]
        //public void JoinWithDelimiterWorks()
        //{
        //    Assert.AreEqual("a|b|c|b", new List<string> { "a", "b", "c", "b" }.Join("|"));
        //}

        // Not C# API
        //[Test]
        //public void MapWithListItemMapCallbackWorks()
        //{
        //    Assert.AreEqual(new List<string> { "a", "b", "c", "b" }.Map(s => s + "X" + s), new[] { "aXa", "bXb", "cXc", "bXb" });
        //}

        // Not C# API
        //[Test]
        //public void MapWithListMapCallbackWorks()
        //{
        //    Assert.AreEqual(new List<string> { "a", "b", "c", "b" }.Map((s, i, a) => (string)s + i), new[] { "a0", "b1", "c2", "b3" });
        //}

        [Test]
        public void RemoveWorks()
        {
            var list = new List<string> { "a", "b", "c", "a" };
            Assert.True(list.Remove("a"));
            Assert.AreEqual(new[] { "b", "c", "a" }, list.ToArray());
        }

        [Test]
        public void RemoveReturnsFalseIfTheElementWasNotFound()
        {
            var list = new List<string> { "a", "b", "c", "a" };
            Assert.False(list.Remove("d"));
            Assert.AreEqual(new[] { "a", "b", "c", "a" }, list.ToArray());
        }

        [Test]
        public void RemoveCanRemoveNullItem()
        {
            var list = new List<string> { "a", null, "c", null };
            Assert.True(list.Remove(null));
            Assert.AreEqual(new[] { "a", "c", null }, list.ToArray());
        }

        [Test]
        public void RemoveCanRemoveNullItemFromEmptyList_N3149()
        {
            // #3149
            var listOfInts = new List<Entity>();

            var removed = listOfInts.Remove(null);
            Assert.AreEqual(0, listOfInts.Count);
            Assert.False(removed);

            var ent = new Entity();
            listOfInts.Add(ent);
            Assert.AreEqual(1, listOfInts.Count);

            removed = listOfInts.Remove(ent);
            Assert.AreEqual(0, listOfInts.Count);
            Assert.True(removed);

            removed = listOfInts.Remove(null);
            Assert.AreEqual(0, listOfInts.Count);
            Assert.False(removed);
        }

        [Test]
        public void RemoveUsesEqualsMethod()
        {
            var list = new List<C> { new C(1), new C(2), new C(3) };
            list.Remove(new C(2));
            Assert.AreEqual(2, list.Count);
            Assert.AreEqual(1, list[0].i);
            Assert.AreEqual(3, list[1].i);
        }

        [Test]
        public void RemoveAtWorks()
        {
            var list = new List<string> { "a", "b", "c", "a" };
            list.RemoveAt(1);
            Assert.AreEqual(new[] { "a", "c", "a" }, list.ToArray());
        }

        [Test]
        public void TrueForAllWorks()
        {
            var data = new TestData();
            var dinosaurs = data.Dinosaurs;

            Assert.False(dinosaurs.TrueForAll(data.EndsWithSaurus));
            Assert.True(dinosaurs.TrueForAll(data.HasLettersAorO));
            Assert.Throws<ArgumentNullException>(() => { dinosaurs.TrueForAll(null); });
        }

        [Test]
        public void FindWorks()
        {
            var data = new TestData();

            var dinosaurs = data.Dinosaurs;
            Assert.AreEqual("Amargasaurus", dinosaurs.Find(data.EndsWithSaurus));
            Assert.AreEqual("Deinonychus", dinosaurs.Find(data.StartsWithLetterD));
            Assert.AreEqual(null, dinosaurs.Find(data.StartsWithLetter5));

            var numbers = data.Numbers3;
            Assert.AreEqual(0, numbers.Find(data.Equals7));
            Assert.AreEqual(2, numbers.Find(data.Equals2));

            Assert.Throws<ArgumentNullException>(() => { dinosaurs.Find(null); });
        }

        [Test]
        public void FindLastWorks()
        {
            var data = new TestData();
            var dinosaurs = data.Dinosaurs;

            Assert.AreEqual("Dilophosaurus", dinosaurs.FindLast(data.EndsWithSaurus));
            Assert.AreEqual("Triceratops", dinosaurs.FindLast(data.HasLettersAorO));
            Assert.AreEqual(null, dinosaurs.FindLast(data.StartsWithLetter5));

            var numbers = data.Numbers3;
            Assert.AreEqual(0, numbers.FindLast(data.Equals7));
            Assert.AreEqual(2, numbers.FindLast(data.LessThan3));

            Assert.Throws<ArgumentNullException>(() => { dinosaurs.FindLast(null); });
        }

        [Test]
        public void FindAllWorks()
        {
            var data = new TestData();
            var dinosaurs = data.Dinosaurs;

            List<string> sublist = dinosaurs.FindAll(data.EndsWithSaurus);
            Assert.AreEqual(2, sublist.Count);
            Assert.AreEqual("Amargasaurus", sublist[0]);
            Assert.AreEqual("Dilophosaurus", sublist[1]);

            sublist = dinosaurs.FindAll(data.StartsWithLetter5);
            Assert.AreEqual(0, sublist.Count);

            Assert.Throws<ArgumentNullException>(() => { dinosaurs.FindAll(null); });
        }

        [Test]
        public void ExistsWorks()
        {
            var data = new TestData();
            var dinosaurs = data.Dinosaurs;

            Assert.True(dinosaurs.Exists(data.EndsWithSaurus));
            Assert.False(dinosaurs.Exists(data.StartsWithLetter5));
            Assert.True(dinosaurs.Exists(data.StartsWithLetterD));

            Assert.Throws<ArgumentNullException>(() => { dinosaurs.Exists(null); });
        }

        [Test]
        public void RemoveAllWorks_N3092()
        {
            // #3092
            var data = new TestData();
            var dinosaurs = data.Dinosaurs;

            Assert.AreEqual(8, dinosaurs.Count);
            Assert.AreEqual(2, dinosaurs.RemoveAll(data.EndsWithSaurus));
            Assert.AreEqual(6, dinosaurs.Count);
            Assert.False(dinosaurs.Exists(data.EndsWithSaurus));

            Assert.Throws<ArgumentNullException>(() => { dinosaurs.RemoveAll(null); });
        }

        [Test]
        public void RemoveRangeWorks()
        {
            var list = new List<string> { "a", "b", "c", "d" };
            list.RemoveRange(1, 2);
            Assert.AreEqual(new[] { "a", "d" }, list.ToArray());
        }

        [Test]
        public void ReverseWorks()
        {
            var list = new List<int> { 1, 3, 4, 1, 3, 2 };
            list.Reverse();
            Assert.AreEqual(new[] { 2, 3, 1, 4, 3, 1 }, list.ToArray());
        }

        // Not C# API
        //[Test]
        //public void SomeWithListItemFilterCallbackWorks()
        //{
        //    Assert.True(new List<int> { 1, 2, 3, 4 }.Some(i => (int)i > 1));
        //    Assert.False(new List<int> { 1, 2, 3, 4 }.Some(i => (int)i > 5));
        //}

        // Not C# API
        //[Test]
        //public void SomeWithListFilterCallbackWorks()
        //{
        //    Assert.True(new List<int> { 1, 1, 6, 2 }.Some((x, i, a) => (int)x == i + 1));
        //    Assert.False(new List<int> { 2, 1, 6, 2 }.Some((x, i, a) => (int)x == i + 1));
        //}

        [Test]
        public void SortWithDefaultCompareWorks()
        {
            var list = new List<int> { 1, 6, 6, 4, 2 };
            list.Sort();
            Assert.AreEqual(new[] { 1, 2, 4, 6, 6 }, list.ToArray());
        }

        [Test]
        public void SortWithCompareCallbackWorks()
        {
            var list = new List<int> { 1, 6, 6, 4, 2 };
            list.Sort((x, y) => (int)y - (int)x);
            Assert.AreEqual(new[] { 6, 6, 4, 2, 1 }, list.ToArray());
        }

        [Test]
        public void SortWithIComparerWorks()
        {
            var list = new List<int> { 1, 6, 6, 4, 2 };
            list.Sort(new TestReverseComparer());
            Assert.AreEqual(new[] { 6, 6, 4, 2, 1 }, list.ToArray());
        }

        [Test]
        public static void SortWithComparisonWorks_N3126()
        {
            // #3126
            var list = new List<Foo>();

            list.Add(new Foo() { V = 3 });
            list.Add(new Foo() { V = 1 });
            list.Add(new Foo() { V = 2 });

            list.Sort((a, b) =>
            {
                return a.V.CompareTo(b.V);
            });

            Assert.AreEqual(1, list[0].V);
            Assert.AreEqual(2, list[1].V);
            Assert.AreEqual(3, list[2].V);

            Assert.Throws<ArgumentNullException>(() =>
            {
                var l = new List<int>();

                Comparison<int> c = null;
                l.Sort(c);
            });
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
            Assert.AreEqual("xy", result);
        }

        [Test]
        public void IEnumerableGetEnumeratorWorks()
        {
            var l = (IEnumerable<string>)new List<string> { "x", "y" };
            var e = l.GetEnumerator();
            Assert.True(e.MoveNext());
            Assert.AreEqual("x", e.Current);
            Assert.True(e.MoveNext());
            Assert.AreEqual("y", e.Current);
            Assert.False(e.MoveNext());
        }

        [Test]
        public void ICollectionCountWorks()
        {
            IList<string> l = new List<string> { "x", "y", "z" };
            Assert.AreEqual(3, l.Count);
        }

        [Test]
        public void ICollectionAddWorks()
        {
            IList<string> l = new List<string> { "x", "y", "z" };
            l.Add("a");
            Assert.AreEqual(new[] { "x", "y", "z", "a" }, ((List<string>)l).ToArray());
        }

        [Test]
        public void ICollectionClearWorks()
        {
            IList<string> l = new List<string> { "x", "y", "z" };
            l.Clear();
            Assert.AreEqual(new string[0], ((List<string>)l).ToArray());
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
            Assert.AreEqual(new[] { "x", "z" }, ll.ToArray());
        }

        [Test]
        public void ICollectionRemoveCanRemoveNullItem()
        {
            IList<string> list = new List<string> { "a", null, "c", null };
            Assert.True(list.Remove(null));
            Assert.AreEqual(new[] { "a", "c", null }, list.ToArray());
        }

        [Test]
        public void ICollectionRemoveUsesEqualsMethod()
        {
            IList<C> list = new List<C> { new C(1), new C(2), new C(3) };
            list.Remove(new C(2));
            Assert.AreEqual(2, list.Count);
            Assert.AreEqual(1, list[0].i);
            Assert.AreEqual(3, list[1].i);
        }

        [Test]
        public void IListIndexingWorks()
        {
            IList<string> l = new List<string> { "x", "y", "z" };
            Assert.AreEqual("y", l[1]);
            l[1] = "a";
            Assert.AreEqual(new[] { "x", "a", "z" }, ((List<string>)l).ToArray());
        }

        [Test]
        public void IListIndexOfWorks()
        {
            IList<string> l = new List<string> { "x", "y", "z" };
            Assert.AreEqual(1, l.IndexOf("y"));
            Assert.AreEqual(-1, l.IndexOf("a"));
        }

        [Test]
        public void IListIndexOfUsesEqualsMethod()
        {
            IList<C> l = new List<C> { new C(1), new C(2), new C(3) };
            Assert.AreEqual(1, l.IndexOf(new C(2)));
            Assert.AreEqual(-1, l.IndexOf(new C(4)));
        }

        [Test]
        public void IListInsertWorks()
        {
            IList<string> l = new List<string> { "x", "y", "z" };
            l.Insert(1, "a");
            Assert.AreEqual(new[] { "x", "a", "y", "z" }, l.ToArray());
        }

        [Test]
        public void IListRemoveAtWorks()
        {
            IList<string> l = new List<string> { "x", "y", "z" };
            l.RemoveAt(1);
            Assert.AreEqual(new[] { "x", "z" }, l.ToArray());
        }

        [Test]
        public void IListNonGenericAddWorks_N2925()
        {
            IList l = new List<string> { "x", "y", "z" };
            // #2925
            var index = l.Add("a");

            Assert.AreEqual(new[] { "x", "y", "z", "a" }, ((List<string>)l).ToArray());
            Assert.AreEqual(3, index);
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
            Assert.AreEqual(new[] { "a", "b" }, actual);
        }

        [Test]
        public void IReadOnlyCollectionCountWorks()
        {
            IReadOnlyCollection<string> l = new List<string> { "x", "y", "z" };
            Assert.AreEqual(3, l.Count);
        }

        [Test]
        public void IReadOnlyCollectionGetEnumeratorWorks()
        {
            var l = (IReadOnlyCollection<string>)new List<string> { "x", "y" };
            var e = l.GetEnumerator();
            Assert.True(e.MoveNext());
            Assert.AreEqual("x", e.Current);
            Assert.True(e.MoveNext());
            Assert.AreEqual("y", e.Current);
            Assert.False(e.MoveNext());
        }

        [Test]
        public void IReadOnlyListIndexingWorks()
        {
            IReadOnlyList<string> l = new List<string> { "x", "y", "z" };
            Assert.AreEqual("y", l[1]);
        }

        [Test]
        public void IReadOnlyListCountWorks()
        {
            IReadOnlyList<string> l = new List<string> { "x", "y", "z" };
            Assert.AreEqual(3, l.Count);
        }

        [Test]
        public void IReadOnlyListGetEnumeratorWorks()
        {
            var l = (IReadOnlyList<string>)new List<string> { "x", "y" };
            var e = l.GetEnumerator();
            Assert.True(e.MoveNext());
            Assert.AreEqual("x", e.Current);
            Assert.True(e.MoveNext());
            Assert.AreEqual("y", e.Current);
            Assert.False(e.MoveNext());
        }
    }
}