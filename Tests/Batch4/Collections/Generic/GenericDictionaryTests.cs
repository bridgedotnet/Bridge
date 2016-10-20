using Bridge.Test;
using System;
using System.Collections.Generic;
using Bridge.Collections.Generic;

namespace Bridge.ClientTest.Batch4.Collections.Generic
{
    [TestFixture(TestNameFormat = "GenericDictionaryTests - {0}")]
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
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Collections.Generic.Dictionary$2[[System.Int32, mscorlib],[String]]", typeof(Dictionary<int, string>).FullName, "FullName should be correct");
            Assert.True(typeof(Dictionary<int, string>).IsClass, "IsClass should be true");
            object dict = new Dictionary<int, string>();
            Assert.True(dict is Dictionary<int, string>, "is Dictionary<int,string> should be true");
            // #1626
            //Assert.True(dict is IReadOnlyDictionary<int, string>, "is IReadOnlyDictionary<int,string> should be true");
            Assert.True(dict is IDictionary<int, string>, "is IDictionary<int,string> should be true");
            Assert.True(dict is IEnumerable<KeyValuePair<int, string>>, "is IEnumerable<KeyValuePair<int,string>> should be true");
        }

        [Test]
        public void DefaultConstructorWorks_SPI_1549()
        {
            var d = new Dictionary<int, string>();
            Assert.AreEqual(0, d.Count);

            // #1549
            Assert.AreStrictEqual(EqualityComparer<int>.Default, d.Comparer);
        }

        [Test]
        public void CapacityConstructorWorks_SPI_1549()
        {
            var d = new Dictionary<int, string>(10);
            Assert.AreEqual(0, d.Count);

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

        [Test]
        public void JsDictionaryConstructorWorks()
        {
            var orig = JsDictionary<string, int>.GetDictionary(new
            {
                a = 1,
                b = 2
            });
            var d = new Dictionary<string, int>(orig);
            Assert.False((object)d == (object)orig);
            Assert.AreEqual(d.Count, 2);
            Assert.AreEqual(d["a"], 1);
            Assert.AreEqual(d["b"], 2);
            Assert.AreStrictEqual(d.Comparer, EqualityComparer<string>.Default);
        }

        [Test]
        public void JsDictionaryAndEqualityComparerConstructorWorks()
        {
            var c = new TestEqualityComparer();
            var orig = JsDictionary<string, int>.GetDictionary(new
            {
                a = 1,
                b = 2
            });
            var d = new Dictionary<string, int>(orig, c);
            Assert.False((object)d == (object)orig);
            Assert.AreEqual(d.Count, 2);
            Assert.AreEqual(d["a"], 1);
            Assert.AreEqual(d["b"], 2);
            Assert.AreStrictEqual(d.Comparer, c);
        }

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
            Assert.True((object)keys is IEnumerable<string>);
            Assert.True((object)keys is ICollection<string>);
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

        [Test(ExpectedCount = 0)]
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

        [Test(ExpectedCount = 0)]
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
    }
}
