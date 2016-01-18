using System;
using System.Collections.Generic;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.Collections.Generic
{
    [Category(Constants.MODULE_GENERICDICTIONARY)]
    [TestFixture(TestNameFormat = "GenericDictionary - {0}")]
    public class GenericDictionaryTests
    {
        class TestEqualityComparer : EqualityComparer<string>
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
            Assert.AreEqual(typeof(Dictionary<int, string>).GetClassName(), "Bridge.Dictionary$2$Bridge.Int$String", "FullName should be correct");
            object dict = new Dictionary<int, string>();
            Assert.True(dict is Dictionary<int, string>, "is Dictionary<int,string> should be true");
            Assert.True(dict is IDictionary<int, string>, "is IDictionary<int,string> should be true");
            Assert.True(dict is IEnumerable<KeyValuePair<int, string>>, "is IEnumerable<KeyValuePair<int,string>> should be true");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var d = new Dictionary<int, string>();
            Assert.AreEqual(d.Count, 0, "Count is 0");
            Assert.AreEqual(d.GetEnumerator().GetClassName(), "Bridge.CustomEnumerator", "Enumerator should be Bridge.CustomEnumerator");
            Assert.AreEqual(d.Comparer.GetClassName(), "Bridge.EqualityComparer$1$Object", "Comparer should be Bridge.EqualityComparer$1$Object");
        }

        [Test]
        public void CapacityConstructorWorks()
        {
            var d = new Dictionary<int, string>(10);
            Assert.AreEqual(d.Count, 0);
            Assert.AreEqual(d.GetEnumerator().GetClassName(), "Bridge.CustomEnumerator", "Enumerator should be Bridge.CustomEnumerator");
            Assert.AreEqual(d.Comparer.GetClassName(), "Bridge.EqualityComparer$1$Object", "Comparer should be Bridge.EqualityComparer$1$Object");
        }

        [Test]
        public void CapacityAndEqualityComparerWorks()
        {
            var c = new TestEqualityComparer();
            var d = new Dictionary<string, string>(10, c);
            Assert.AreEqual(d.Count, 0);
            Assert.AreStrictEqual(d.Comparer, c);
        }

        [Test]
        public void EqualityComparerOnlyConstructorWorks()
        {
            var c = new TestEqualityComparer();
            var d = new Dictionary<string, int>(c);
            Assert.AreEqual(d.Count, 0);
            Assert.AreStrictEqual(d.Comparer, c);
        }

        [Test]
        public void CountWorks()
        {
            var d = new Dictionary<int, string>();
            Assert.AreEqual(d.Count, 0);
            d.Add(1, "1");
            Assert.AreEqual(d.Count, 1);
            d.Add(2, "2");
            Assert.AreEqual(d.Count, 2);
        }

        [Test]
        public void KeysWorks()
        {
            var d = new Dictionary<string, string> { { "1", "a" }, { "2", "b" } };
            var keys = d.Keys;
            Assert.True((object)keys is IEnumerable<string>);
            Assert.True((object)keys is ICollection<string>);
            Assert.AreEqual(keys.Count, 2);
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
            Assert.AreEqual(count, 2);
        }

        [Test]
        public void ValuesWorks()
        {
            var d = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };
            var values = d.Values;
            Assert.True((object)values is IEnumerable<string>);
            Assert.True((object)values is ICollection<string>);
            Assert.AreEqual(values.Count, 2);
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
            Assert.AreEqual(count, 2);
        }

        [Test]
        public void IndexerGetterWorksForExistingItems()
        {
            var d = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };
            Assert.AreEqual(d[1], "a");
        }

        [Test]
        public void IndexerSetterWorks()
        {
            var d = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };
            d[2] = "c";
            d[3] = "d";
            Assert.AreEqual(3, d.Count);
            Assert.AreEqual(d[1], "a");
            Assert.AreEqual(d[2], "c");
            Assert.AreEqual(d[3], "d");
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
            Assert.AreEqual(3, d.Count);
            Assert.AreEqual(d[1], "a");
            Assert.AreEqual(d[2], "b");
            Assert.AreEqual(d[3], "c");
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
            Assert.AreEqual(d.Count, 0);
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
                    Assert.AreEqual(kvp.Value, "a");
                }
                else if (kvp.Key == "2")
                {
                    Assert.AreEqual(kvp.Value, "b");
                }
                else
                {
                    Assert.Fail("Invalid key " + kvp.Key);
                }
                count++;
            }
            Assert.AreEqual(count, 2);
        }

        [Test]
        public void RemoveWorks()
        {
            var d = new Dictionary<int, string> { { 1, "a" }, { 2, "b" } };
            Assert.AreStrictEqual(d.Remove(2), true);
            Assert.AreStrictEqual(d.Remove(3), false);
            Assert.AreEqual(d.Count, 1);
            Assert.AreEqual(d[1], "a");
        }

        [Test]
        public void TryGetValueWithIntKeysWorks()
        {
            var d = new Dictionary<string, int> { { "a", 1 }, { "b", 2 } };
            int i;

            Assert.True(d.TryGetValue("a", out i));
            Assert.AreEqual(i, 1);
            Assert.False(d.TryGetValue("c", out i));
            Assert.AreEqual(i, 0);
        }

        [Test]
        public void TryGetValueWithObjectKeysWorks()
        {
            var d = new Dictionary<string, object> { { "a", 1 }, { "b", "X" } };
            object o;

            Assert.True(d.TryGetValue("a", out o));
            Assert.AreEqual(o, 1);
            Assert.False(d.TryGetValue("c", out o));
            Assert.AreStrictEqual(o, null);
        }

        [Test]
        public void CanUseCustomComparer()
        {
            var d = new Dictionary<string, int>(new TestEqualityComparer()) { { "a", 1 }, { "b", 2 } };
            d["a2"] = 100;
            Assert.AreEqual(d["a3"], 100);
            Assert.AreEqual(d.Count, 2);
        }
    }
}
