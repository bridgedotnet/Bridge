//Not C# API
using Bridge.Test;
using System.Collections;
using System.Collections.Generic;
using Bridge.Collections;
using Bridge.Collections.Generic;

namespace Bridge.ClientTest.Batch4.Collections
{
    [TestFixture(TestNameFormat = "JsDictionaryTests - {0}")]
    public class JsDictionaryTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(JsDictionary).FullName, "Object");
            Assert.True(typeof(JsDictionary).IsClass);
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var d = new JsDictionary();
            Assert.True(d != null);
            Assert.AreEqual(d.Count, 0);
        }

        [Test]
        public void NameValuePairsConstructorWorks()
        {
            var d = new JsDictionary("a", "valueA", "b", 134);
            Assert.AreEqual(d.Count, 2);
            Assert.AreEqual(d["a"], "valueA");
            Assert.AreEqual(d["b"], 134);
        }

        [Test]
        public void KeysWorks()
        {
            var d = JsDictionary.GetDictionary(new
            {
                a = "valueA",
                b = 134
            });
            var keys = d.Keys;
            Assert.True(keys.Contains("a"));
            Assert.True(keys.Contains("b"));
        }

        [Test]
        public void IndexingWorks()
        {
            var d = JsDictionary.GetDictionary(new
            {
                a = "valueA",
                b = 134
            });
            Assert.AreEqual(d["a"], "valueA");
            Assert.AreEqual(d["b"], 134);
        }

        [Test]
        public void ClearWorks()
        {
            var d = JsDictionary.GetDictionary(new
            {
                a = "valueA",
                b = 134
            });
            d.Clear();
            Assert.AreEqual(d.Count, 0);
        }

        [Test]
        public void ContainsKeyWorks()
        {
            var d = JsDictionary.GetDictionary(new
            {
                a = "valueA",
                b = 134
            });
            Assert.True(d.ContainsKey("a"));
            Assert.False(d.ContainsKey("c"));
        }

        [Test]
        public void GetDictionaryWorks()
        {
            var obj = new
            {
                a = "valueA",
                b = 134
            };
            var d = JsDictionary.GetDictionary(obj);
            Assert.AreStrictEqual(d, obj);
            Assert.AreEqual(2, d.Keys.Count);
            Assert.AreEqual(d["a"], "valueA");
            Assert.AreEqual(d["b"], 134);
        }

        [Test]
        public void GetEnumeratorWorks()
        {
            var d = JsDictionary.GetDictionary(Script.ToPlainObject(new
            {
                a = "valueA",
                b = 134
            }));
            var d2 = new JsDictionary();
            foreach (var kvp in d)
            {
                d2[kvp.Key] = kvp.Value;
            }
            Assert.AreEqual(d, d2);
        }

        [Test]
        public void RemoveWorks()
        {
            var d = JsDictionary.GetDictionary(new
            {
                a = "valueA",
                b = 134
            });
            d.Remove("a");
            Assert.AreEqual(d.Keys, new[] { "b" });
        }

        [Test]
        public void ConvertingToGenericReturnsSameInstance()
        {
            var d = JsDictionary.GetDictionary(new
            {
                a = "valueA",
                b = 134
            });
            var d2 = (JsDictionary<string, object>)d;
            Assert.AreStrictEqual(d2, d);
        }

        [Test]
        public void ConvertingFromGenericReturnsSameInstance()
        {
            var d = JsDictionary<string, object>.GetDictionary(new
            {
                a = "valueA",
                b = 134
            });
            var d2 = (JsDictionary)d;
            Assert.AreStrictEqual(d2, d);
        }

        [Test]
        public void CollectionInitializerWorks()
        {
            var d = new JsDictionary { { "a", "valueA" }, { "b", 134 } };
            Assert.AreEqual(d["a"], "valueA");
            Assert.AreEqual(d["b"], 134);
        }
    }
}
