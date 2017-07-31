using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;

namespace Bridge.ClientTest.Collections.Generic
{
    [Category(Constants.MODULE_GENERICDICTIONARY)]
    [TestFixture(TestNameFormat = "GenericDictionary - {0}")]
    public class GenericDictionaryTests
    {
        private class TestEqualityComparer : EqualityComparer<string>
        {
            public override bool Equals(string x, string y)
            {
                return x[0] == y[0];
            }

            public override int GetHashCode(string obj)
            {
                return obj[0];
            }
        }

        [Test]
        public void TestPerformance()
        {
            var dict = new Dictionary<string, int>();

            var key = new String('x', 10000);
            dict[key] = 123;

            var timer = Stopwatch.StartNew();
            for (var i = 0; i < 100000; i++)
            {
                var f = dict[key];
            }
            timer.Stop();

            Assert.True(timer.ElapsedMilliseconds < 3000, "Performance shoud be faster than 3000ms, actual = " + timer.ElapsedMilliseconds);
        }

        [Test]
        public void TestOrder()
        {
            Dictionary<int, string> data = new Dictionary<int, string>();

            data.Add(30, "a");
            data.Add(10, "c");
            data.Add(20, "b");

            string actualOutput = "";
            string expectedOutput = "30 10 20 ";

            foreach (int k in data.Keys)
            {
                actualOutput += k.ToString() + " ";
            }

            Assert.AreEqual(expectedOutput, actualOutput);
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Collections.Generic.Dictionary`2[[System.Int32, mscorlib],[System.String, mscorlib]]", typeof(Dictionary<int, string>).FullName, "FullName should be correct");
            Assert.True(typeof(Dictionary<int, string>).IsClass, "IsClass should be true");
            object dict = new Dictionary<int, string>();
            Assert.True(dict is Dictionary<int, string>, "is Dictionary<int,string> should be true");
            // #1626
            Assert.True(dict is IDictionary<int, string>, "is IDictionary<int,string> should be true");
            Assert.True(dict is IEnumerable, "is IEnumerable should be true");
            Assert.True(dict is IEnumerable<KeyValuePair<int, string>>, "is IEnumerable<KeyValuePair<int,string>> should be true");
            Assert.True(dict is IReadOnlyDictionary<int, string>, "is IReadOnlyDictionary<int,string> should be true");
            Assert.True(dict is IReadOnlyCollection<KeyValuePair<int, string>>, "is IReadOnlyCollection<KeyValuePair<int, string>> should be true");
        }

        [Test]
        public void DefaultConstructorWorks_SPI_1549()
        {
            var d = new Dictionary<int, string>();
            Assert.AreEqual(0, d.Count);
            Assert.AreEqual(0, d.Count, "Count is 0");
            Assert.AreEqual("Bridge.CustomEnumerator", d.GetEnumerator().GetType().FullName, "Enumerator");
            Assert.AreEqual("System.Collections.Generic.EqualityComparer`1[[System.Int32, mscorlib]]", d.Comparer.GetType().FullName, "Comparer");

            // #1549
            Assert.AreStrictEqual(EqualityComparer<int>.Default, d.Comparer);
        }

        [Test]
        public void CapacityConstructorWorks_SPI_1549()
        {
            var d = new Dictionary<int, string>(10);
            Assert.AreEqual(0, d.Count);
            Assert.AreEqual("Bridge.CustomEnumerator", d.GetEnumerator().GetType().FullName, "Enumerator");
            Assert.AreEqual("System.Collections.Generic.EqualityComparer`1[[System.Int32, mscorlib]]", d.Comparer.GetType().FullName, "Comparer");

            // #1549
            Assert.AreStrictEqual(EqualityComparer<int>.Default, d.Comparer);
        }

        [Test]
        public void CapacityAndEqualityComparerWorks()
        {
            var c = new TestEqualityComparer();
            var d = new Dictionary<string, string>(10, c);
            Assert.AreEqual(0, d.Count);

            Assert.AreStrictEqual(c, d.Comparer);
        }

        // #NoSupport
        //[Test]
        //public void JsDictionaryConstructorWorks()
        //{
        //    var orig = JsDictionary<string, int>.GetDictionary(new
        //    {
        //        a = 1,
        //        b = 2
        //    });
        //    var d = new Dictionary<string, int>(orig);
        //    Assert.False((object)d == (object)orig);
        //    Assert.AreEqual(d.Count, 2);
        //    Assert.AreEqual(d["a"], 1);
        //    Assert.AreEqual(d["b"], 2);
        //    Assert.AreStrictEqual(d.Comparer, EqualityComparer<string>.Default);
        //}

        // #NoSupport
        //[Test]
        //public void JsDictionaryAndEqualityComparerConstructorWorks()
        //{
        //    var c = new TestEqualityComparer();
        //    var orig = JsDictionary<string, int>.GetDictionary(new
        //    {
        //        a = 1,
        //        b = 2
        //    });
        //    var d = new Dictionary<string, int>(orig, c);
        //    Assert.False((object)d == (object)orig);
        //    Assert.AreEqual(d.Count, 2);
        //    Assert.AreEqual(d["a"], 1);
        //    Assert.AreEqual(d["b"], 2);
        //    Assert.AreStrictEqual(d.Comparer, c);
        //}

        [Test]
        public void CopyConstructorWorks_SPI_1549()
        {
            var orig = new Dictionary<string, int>();
            orig["a"] = 1;
            orig["b"] = 2;

            var d = new Dictionary<string, int>(orig);
            var d2 = new Dictionary<string, int>(d);
            Assert.False((object)d == (object)d2);
            Assert.AreEqual(2, d2.Count);
            Assert.AreEqual(1, d2["a"]);
            Assert.AreEqual(2, d2["b"]);

            // #1549
            Assert.AreStrictEqual(EqualityComparer<string>.Default, d2.Comparer);
        }

        [Test]
        public void EqualityComparerOnlyConstructorWorks()
        {
            var c = new TestEqualityComparer();
            var d = new Dictionary<string, int>(c);
            Assert.AreEqual(0, d.Count);
            Assert.AreStrictEqual(c, d.Comparer);
        }

        [Test]
        public void ConstructorWithBothDictionaryAndEqualityComparerWorks()
        {
            var c = new TestEqualityComparer();
            var orig = new Dictionary<string, int>();
            orig["a"] = 1;
            orig["b"] = 2;

            var d = new Dictionary<string, int>(orig);
            var d2 = new Dictionary<string, int>(d, c);
            Assert.False((object)d == (object)d2);
            Assert.AreEqual(2, d2.Count);
            Assert.AreEqual(1, d2["a"]);
            Assert.AreEqual(2, d2["b"]);
            Assert.AreStrictEqual(c, d2.Comparer);
        }

        [Test]
        public void CountWorks()
        {
            var d = new Dictionary<int, string>();
            Assert.AreEqual(0, d.Count);
            d.Add(1, "1");
            Assert.AreEqual(1, d.Count);
            d.Add(2, "2");
            Assert.AreEqual(2, d.Count);
        }

        [Test]
        public void KeysWorks()
        {
            var d = new Dictionary<string, string> { { "1", "a" }, { "2", "b" } };

            var keys = d.Keys;

            Assert.True((object)keys is ICollection<string>);
            Assert.True((object)keys is IEnumerable<string>);
            Assert.True((object)keys is IEnumerable);
            Assert.AreEqual(2, keys.Count);
            Assert.True(keys.Contains("1"));
            Assert.True(keys.Contains("2"));
            Assert.False(keys.Contains("a"));

            int count = 0;
            foreach (var key in d.Keys)
            {
                if (key != "1" && key != "2")
                {
                    Assert.Fail("Unexpected key " + key);
                }
                count++;
            }
            Assert.AreEqual(2, count);
        }

        [Test]
        public void ValuesWorks()
        {
            var d = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };
            var values = d.Values;
            Assert.True((object)values is IEnumerable<string>);
            Assert.True((object)values is ICollection<string>);
            Assert.AreEqual(2, values.Count);
            Assert.True(values.Contains("a"));
            Assert.True(values.Contains("b"));
            Assert.False(values.Contains("1"));

            int count = 0;
            foreach (var value in d.Values)
            {
                if (value != "a" && value != "b")
                {
                    Assert.Fail("Unexpected key " + value);
                }
                count++;
            }
            Assert.AreEqual(2, count);
        }

        [Test]
        public void IndexerGetterWorksForExistingItems()
        {
            var d = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };
            Assert.AreEqual("a", d[1]);
        }

        [Test]
        public void IndexerSetterWorks()
        {
            var d = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };
            d[2] = "c";
            d[3] = "d";
            Assert.AreEqual(d.Count, 3);
            Assert.AreEqual("a", d[1]);
            Assert.AreEqual("c", d[2]);
            Assert.AreEqual("d", d[3]);
        }

        [Test(Name = "GenericDictionary - {0}", ExpectedCount = 0)]
        public void IndexerGetterThrowsForNonExistingItems()
        {
            var d = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };
            try
            {
                var x = d[10];
                Assert.True(false);
            }
            catch (KeyNotFoundException)
            {
            }
        }

        [Test]
        public void AddWorks()
        {
            var d = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };
            d.Add(3, "c");
            Assert.AreEqual(d.Count, 3);
            Assert.AreEqual("a", d[1]);
            Assert.AreEqual("b", d[2]);
            Assert.AreEqual("c", d[3]);
        }

        [Test(Name = "GenericDictionary - {0}", ExpectedCount = 0)]
        public void AddThrowsIfItemAlreadyExists()
        {
            var d = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };
            try
            {
                d.Add(2, "b");
                Assert.True(false);
            }
            catch (ArgumentException)
            {
            }
        }

        [Test]
        public void ClearWorks()
        {
            var d = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };
            d.Clear();
            Assert.AreEqual(0, d.Count);
        }

        [Test]
        public void ContainsKeyWorks()
        {
            var d = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };
            Assert.True(d.ContainsKey(1));
            Assert.False(d.ContainsKey(3));
        }

        [Test]
        public void EnumeratingWorks()
        {
            var d = new Dictionary<string, string> { { "1", "a" }, { "2", "b" } };
            int count = 0;
            foreach (var kvp in d)
            {
                if (kvp.Key == "1")
                {
                    Assert.AreEqual("a", kvp.Value);
                }
                else if (kvp.Key == "2")
                {
                    Assert.AreEqual("b", kvp.Value);
                }
                else
                {
                    Assert.Fail("Invalid key " + kvp.Key);
                }
                count++;
            }
            Assert.AreEqual(2, count);
        }

        [Test]
        public void RemoveWorks()
        {
            var d = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };
            Assert.AreStrictEqual(true, d.Remove(2));
            Assert.AreStrictEqual(false, d.Remove(3));
            Assert.AreEqual(1, d.Count);
            Assert.AreEqual("a", d[1]);
        }

        [Test]
        public void TryGetValueWithIntKeysWorks()
        {
            var d = new Dictionary<string, int> { { "a", 1 }, { "b", 2 } };
            int i;

            Assert.True(d.TryGetValue("a", out i));
            Assert.AreEqual(1, i);
            Assert.False(d.TryGetValue("c", out i));
            Assert.AreEqual(0, i);
        }

        [Test]
        public void TryGetValueWithObjectKeysWorks()
        {
            var d = new Dictionary<string, object> { { "a", 1 }, { "b", "X" } };
            object o;

            Assert.True(d.TryGetValue("a", out o));
            Assert.AreEqual(1, o);
            Assert.False(d.TryGetValue("c", out o));
            Assert.AreStrictEqual(null, o);
        }

        [Test]
        public void CanUseCustomComparer()
        {
            var d = new Dictionary<string, int>(new TestEqualityComparer()) { { "a", 1 }, { "b", 2 } };
            d["a2"] = 100;
            Assert.AreEqual(100, d["a3"]);
            Assert.AreEqual(2, d.Count);
        }

        [Test]
        public void DictionaryAsIEnumerableWorks()
        {
            var container = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };
            var d = container as IEnumerable<KeyValuePair<int, string>>;


            // IEnumerable<KeyValuePair<TKey, TValue>>

            var en = d.GetEnumerator();

            var el = en.Current;
            Assert.AreEqual(0, el.Key, "Enumerable initial key");
            Assert.AreEqual(null, el.Value, "Enumerable initial value");
            Assert.True(en.MoveNext(), "Enumerable MoveNext true");
            el = en.Current;
            Assert.AreEqual(1, el.Key, "Enumerable first key");
            Assert.AreEqual("a", el.Value, "Enumerable first value");
            Assert.True(en.MoveNext(), "Enumerable MoveNext true");
            el = en.Current;
            Assert.AreEqual(2, el.Key, "Enumerable second key");
            Assert.AreEqual("b", el.Value, "Enumerable second value");
            Assert.False(en.MoveNext(), "Enumerable MoveNext false");
        }

        [Test]
        public void DictionaryAsICollectionWorks()
        {
            var container = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };
            var d = container as ICollection<KeyValuePair<int, string>>;


            // IEnumerable<KeyValuePair<TKey, TValue>>

            var en = d.GetEnumerator();

            var el = en.Current;
            Assert.AreEqual(0, el.Key, "Enumerable initial key");
            Assert.AreEqual(null, el.Value, "Enumerable initial value");
            Assert.True(en.MoveNext(), "Enumerable MoveNext true");
            el = en.Current;
            Assert.AreEqual(1, el.Key, "Enumerable first key");
            Assert.AreEqual("a", el.Value, "Enumerable first value");
            Assert.True(en.MoveNext(), "Enumerable MoveNext true");
            el = en.Current;
            Assert.AreEqual(2, el.Key, "Enumerable second key");
            Assert.AreEqual("b", el.Value, "Enumerable second value");
            Assert.False(en.MoveNext(), "Enumerable MoveNext false");


            // ICollection<T>

            Assert.AreEqual(2, d.Count, "Count");
            Assert.False(d.IsReadOnly, "IsReadOnly");

            d.Add(new KeyValuePair<int, string>(3, "c"));
            Assert.AreEqual(3, d.Count, "ICollection<KeyValuePair> Count after Add(3)");
            Assert.AreEqual("c", container[3], "ICollection<KeyValuePair> Getter[3] after Add(3)");
            Assert.Throws<ArgumentException>(() => { d.Add(new KeyValuePair<int, string>(1, "d")); }, "ICollection<KeyValuePair> Add(1) should fail");

            Assert.True(d.Remove(new KeyValuePair<int, string>(3, "c")), "ICollection<KeyValuePair> Remove(3)");
            Assert.AreEqual(2, d.Count, "ICollection<KeyValuePair> Count after Remove(3)");
            Assert.AreEqual("a", container[1], "ICollection<KeyValuePair> Getter[1] after Remove(3)");
            Assert.AreEqual("b", container[2], "ICollection<KeyValuePair> Getter[2] after Remove(3)");

            var cta = new KeyValuePair<int, string>[3];
            d.CopyTo(cta, 0);

            Assert.AreEqual(1, cta[0].Key, "ICollection<KeyValuePair> CopyTo Getter[0] Key");
            Assert.AreEqual("a", cta[0].Value, "ICollection<KeyValuePair> CopyTo Getter[0] Value");

            Assert.AreEqual(2, cta[1].Key, "ICollection<KeyValuePair> CopyTo Getter[1] Key");
            Assert.AreEqual("b", cta[1].Value, "ICollection<KeyValuePair> CopyTo Getter[1] Value");

            Assert.AreEqual(0, cta[2].Key, "ICollection<KeyValuePair> CopyTo Getter[2] Key");
            Assert.AreEqual(null, cta[2].Value, "ICollection<KeyValuePair> CopyTo Getter[2] Value");

            Assert.True(d.Contains(new KeyValuePair<int, string>(1, "a")), "ICollection<KeyValuePair> Contains(1, \"a\")");
            Assert.True(d.Contains(new KeyValuePair<int, string>(2, "b")), "ICollection<KeyValuePair> Contains(2, \"b\")");
            Assert.False(d.Contains(new KeyValuePair<int, string>(1, "b")), "ICollection<KeyValuePair> Contains(1, \"b\")");
            Assert.False(d.Contains(new KeyValuePair<int, string>(3, "a")), "ICollection<KeyValuePair> Contains(3, \"a\")");
            Assert.False(d.Contains(new KeyValuePair<int, string>(0, "a")), "ICollection<KeyValuePair> Contains(0, \"a\")");

            d.Clear();
            Assert.AreEqual(0, d.Count, "ICollection<KeyValuePair> Count after Clear");
            Assert.Throws<KeyNotFoundException>(() => { var a = container[1]; }, "ICollection<KeyValuePair> Getter[1] should fail after clear");
        }

        [Test]
        public void DictionaryAsIDictionaryWorks()
        {
            IDictionary<int, string> d = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };

            // IDictionary<TKey, TValue>
            Assert.AreEqual("a", d[1], "Getter[1]");
            Assert.Throws<KeyNotFoundException>(() => { var r = d[3]; }, "Getter[3] should fail");

            d[1] = "aa";
            Assert.AreEqual("aa", d[1], "Getter[1] after setter");
            d[3] = "cc";
            Assert.AreEqual("cc", d[3], "Getter[3] after setter");

            Assert.True(d.Remove(3), "Remove(3)");
            Assert.AreEqual(2, d.Count, "Count after Remove(3)");
            Assert.AreEqual("aa", d[1], "Getter[1] after Remove(3)");
            Assert.AreEqual("b", d[2], "Getter[2] after Remove(3)");

            Assert.False(d.Remove(4), "Remove(4)");
            Assert.AreEqual(2, d.Count, "Count after Remove(4)");
            Assert.AreEqual("aa", d[1], "Getter[1] after Remove(4)");
            Assert.AreEqual("b", d[2], "Getter[2] after Remove(4)");

            Assert.True(d.Remove(1), "Remove(1)");
            Assert.AreEqual(1, d.Count, "Count after Remove(1)");
            Assert.AreEqual("b", d[2], "Getter[2] after Remove(1)");

            Assert.True(d.Remove(2), "Remove(2)");
            Assert.AreEqual(0, d.Count, "Count after Remove(2)");

            d.Add(2, "b");
            Assert.AreEqual(1, d.Count, "Count after Add(2)");
            Assert.AreEqual("b", d[2], "Getter[1] after Add(2)");

            d.Add(1, "a");
            Assert.AreEqual(2, d.Count, "Count after Add(1)");
            Assert.AreEqual("a", d[1], "Getter[1] after Add(1)");

            Assert.Throws<ArgumentException>(() => { d.Add(2, "c"); }, "Add(2) should fail");

            var keys = d.Keys;
            Assert.True((object)keys is ICollection<int>, "Keys is ICollection<int>");
            Assert.True((object)keys is IEnumerable<int>, "Keys is IEnumerable<int>");
            Assert.True((object)keys is IEnumerable, "Keys is IEnumerable");

            int count = 0;
            foreach (var key in d.Keys)
            {
                Assert.True(key == 1 || key == 2, "Expected key " + key);
                count++;
            }
            Assert.AreEqual(2, count, "Keys count");

            var values = d.Values;
            Assert.True((object)values is ICollection<string>, "Values is ICollection<string>");
            Assert.True((object)values is IEnumerable<string>, "Values is IEnumerable<string>");
            Assert.True((object)values is IEnumerable, "Values is IEnumerable");

            count = 0;
            foreach (var value in d.Values)
            {
                Assert.True(value == "a" || value == "b", "Expected value " + value);
                count++;
            }
            Assert.AreEqual(2, count, "Values count");

            Assert.True(d.ContainsKey(1), "ContainsKey(1)");
            Assert.False(d.ContainsKey(3), "ContainsKey(3)");

            string v;

            Assert.True(d.TryGetValue(2, out v), "TryGetValue(2)");
            Assert.AreEqual("b", v, "TryGetValue(2) value");
            Assert.False(d.TryGetValue(0, out v), "TryGetValue(0)");
            Assert.AreEqual(null, v, "TryGetValue(0) value");


            // IEnumerable<KeyValuePair<TKey, TValue>>

            var en = d.GetEnumerator();

            // #2541
            var el = en.Current;
            Assert.AreEqual(0, el.Key, "Enumerable initial key");
            Assert.AreEqual(null, el.Value, "Enumerable initial value");
            Assert.True(en.MoveNext(), "Enumerable MoveNext true");
            el = en.Current;
            Assert.AreEqual(2, el.Key, "Enumerable first key");
            Assert.AreEqual("b", el.Value, "Enumerable first value");
            Assert.True(en.MoveNext(), "Enumerable MoveNext true");
            el = en.Current;
            Assert.AreEqual(1, el.Key, "Enumerable second key");
            Assert.AreEqual("a", el.Value, "Enumerable second value");
            Assert.False(en.MoveNext(), "Enumerable MoveNext false");


            // ICollection<T>

            Assert.AreEqual(2, d.Count, "Count");
            Assert.False(d.IsReadOnly, "IsReadOnly");

            d.Add(new KeyValuePair<int, string>(3, "c"));
            Assert.AreEqual(3, d.Count, "ICollection<KeyValuePair> Count after Add(3)");
            Assert.AreEqual("c", d[3], "ICollection<KeyValuePair> Getter[3] after Add(3)");
            Assert.Throws<ArgumentException>(() => { d.Add(new KeyValuePair<int, string>(1, "d")); }, "ICollection<KeyValuePair> Add(1) should fail");

            Assert.True(d.Remove(new KeyValuePair<int, string>(3, "c")), "ICollection<KeyValuePair> Remove(3)");
            Assert.AreEqual(2, d.Count, "ICollection<KeyValuePair> Count after Remove(3)");
            Assert.AreEqual("a", d[1], "ICollection<KeyValuePair> Getter[1] after Remove(3)");
            Assert.AreEqual("b", d[2], "ICollection<KeyValuePair> Getter[2] after Remove(3)");

            var cta = new KeyValuePair<int, string>[3];
            d.CopyTo(cta, 0);

            Assert.AreEqual(2, cta[0].Key, "ICollection<KeyValuePair> CopyTo Getter[0] Key");
            Assert.AreEqual("b", cta[0].Value, "ICollection<KeyValuePair> CopyTo Getter[0] Value");

            Assert.AreEqual(1, cta[1].Key, "ICollection<KeyValuePair> CopyTo Getter[1] Key");
            Assert.AreEqual("a", cta[1].Value, "ICollection<KeyValuePair> CopyTo Getter[1] Value");

            Assert.AreEqual(0, cta[2].Key, "ICollection<KeyValuePair> CopyTo Getter[2] Key");
            Assert.AreEqual(null, cta[2].Value, "ICollection<KeyValuePair> CopyTo Getter[2] Value");

            Assert.True(d.Contains(new KeyValuePair<int, string>(1, "a")), "ICollection<KeyValuePair> Contains(1, \"a\")");
            Assert.True(d.Contains(new KeyValuePair<int, string>(2, "b")), "ICollection<KeyValuePair> Contains(2, \"b\")");
            Assert.False(d.Contains(new KeyValuePair<int, string>(1, "b")), "ICollection<KeyValuePair> Contains(1, \"b\")");
            Assert.False(d.Contains(new KeyValuePair<int, string>(3, "a")), "ICollection<KeyValuePair> Contains(3, \"a\")");
            Assert.False(d.Contains(new KeyValuePair<int, string>(0, "a")), "ICollection<KeyValuePair> Contains(0, \"a\")");

            d.Clear();
            Assert.AreEqual(0, d.Count, "ICollection<KeyValuePair> Count after Clear");
            Assert.Throws<KeyNotFoundException>(() => { var a = d[1]; }, "ICollection<KeyValuePair> Getter[1] should fail after clear");
        }

        [Test]
        public void DictionaryAsIReadOnlyDictionaryWorks()
        {
            IReadOnlyDictionary<int, string> d = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };

            // IReadOnlyDictionary<TKey, TValue>
            Assert.AreEqual("a", d[1], "Getter[1]");
            Assert.Throws<KeyNotFoundException>(() => { var r = d[3]; }, "Getter[3] should fail");

            var keys = d.Keys;
            Assert.True((object)keys is IEnumerable<int>, "Keys is IEnumerable<int>");
            Assert.True((object)keys is IEnumerable, "Keys is IEnumerable");

            int count = 0;
            foreach (var key in d.Keys)
            {
                Assert.True(key == 1 || key == 2, "Expected key " + key);
                count++;
            }
            Assert.AreEqual(2, count, "Keys count");

            var values = d.Values;
            Assert.True((object)values is IEnumerable<string>, "Values is IEnumerable<string>");
            Assert.True((object)values is IEnumerable, "Values is IEnumerable");

            count = 0;
            foreach (var value in d.Values)
            {
                Assert.True(value == "a" || value == "b", "Expected value " + value);
                count++;
            }
            Assert.AreEqual(2, count, "Values count");

            Assert.True(d.ContainsKey(1), "ContainsKey(1)");
            Assert.False(d.ContainsKey(3), "ContainsKey(3)");

            string v;

            Assert.True(d.TryGetValue(2, out v), "TryGetValue(2)");
            Assert.AreEqual("b", v, "TryGetValue(2) value");
            Assert.False(d.TryGetValue(0, out v), "TryGetValue(0)");
            Assert.AreEqual(null, v, "TryGetValue(0) value");

            // IReadOnlyCollection<KeyValuePair<TKey, TValue>>

            Assert.AreEqual(2, d.Count, "Count");

            // IEnumerable<KeyValuePair<TKey, TValue>>

            var en = d.GetEnumerator();

            var el = en.Current;
            Assert.AreEqual(0, el.Key, "Enumerable initial key");
            Assert.AreEqual(null, el.Value, "Enumerable initial value");
            Assert.True(en.MoveNext(), "Enumerable MoveNext true");
            el = en.Current;
            Assert.AreEqual(1, el.Key, "Enumerable first key");
            Assert.AreEqual("a", el.Value, "Enumerable first value");
            Assert.True(en.MoveNext(), "Enumerable MoveNext true");
            el = en.Current;
            Assert.AreEqual(2, el.Key, "Enumerable second key");
            Assert.AreEqual("b", el.Value, "Enumerable second value");
            Assert.False(en.MoveNext(), "Enumerable MoveNext false");
        }

        [Test]
        public void DictionaryAsIReadOnlyCollectionWorks()
        {
            IReadOnlyCollection<KeyValuePair<int, string>> d = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };

            // IReadOnlyCollection<KeyValuePair<TKey, TValue>>

            Assert.AreEqual(2, d.Count, "Count");

            // IEnumerable<KeyValuePair<TKey, TValue>>

            var en = d.GetEnumerator();

            var el = en.Current;
            Assert.AreEqual(0, el.Key, "Enumerable initial key");
            Assert.AreEqual(null, el.Value, "Enumerable initial value");
            Assert.True(en.MoveNext(), "Enumerable MoveNext true");
            el = en.Current;
            Assert.AreEqual(1, el.Key, "Enumerable first key");
            Assert.AreEqual("a", el.Value, "Enumerable first value");
            Assert.True(en.MoveNext(), "Enumerable MoveNext true");
            el = en.Current;
            Assert.AreEqual(2, el.Key, "Enumerable second key");
            Assert.AreEqual("b", el.Value, "Enumerable second value");
            Assert.False(en.MoveNext(), "Enumerable MoveNext false");
        }
    }
}