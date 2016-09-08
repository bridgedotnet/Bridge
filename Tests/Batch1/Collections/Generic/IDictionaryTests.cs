using Bridge.Test;
using System;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.ClientTest.Collections.Generic
{
    [Category(Constants.MODULE_IDICTIONARY)]
    [TestFixture(TestNameFormat = "IDictionary - {0}")]
    public class IDictionaryTests
    {
        private class MyDictionary : IDictionary<int, string>
        {
            private readonly Dictionary<int, string> _backingDictionary;

            public MyDictionary()
                : this(new Dictionary<int, string>())
            {
            }

            public MyDictionary(Dictionary<int, string> initialValues)
            {
                _backingDictionary = initialValues;
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return GetEnumerator();
            }

            public IEnumerator<KeyValuePair<int, string>> GetEnumerator()
            {
                return _backingDictionary.GetEnumerator();
            }

            public string this[int key]
            {
                get { return _backingDictionary[key]; }
                set { _backingDictionary[key] = value; }
            }

            public new ICollection<int> Keys
            {
                get { return _backingDictionary.Keys; }
            }

            public ICollection<string> Values
            {
                get { return _backingDictionary.Values; }
            }

            public int Count { get { return _backingDictionary.Count; } }

            public void Add(int key, string value)
            {
                _backingDictionary.Add(key, value);
            }

            public bool Remove(int key)
            {
                return _backingDictionary.Remove(key);
            }

            public bool ContainsKey(int key)
            {
                return _backingDictionary.ContainsKey(key);
            }

            public bool TryGetValue(int key, out string value)
            {
                return _backingDictionary.TryGetValue(key, out value);
            }

            public void Clear()
            {
                _backingDictionary.Clear();
            }
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Collections.Generic.IDictionary$2[[Object],[Object]]", typeof(IDictionary<object, object>).FullName, "FullName should be correct");
        }

        [Test]
        public void ClassImplementsInterfaces()
        {
            Assert.True((object)new MyDictionary() is IDictionary<int, string>);
        }

        [Test]
        public void CountWorks()
        {
            var d = new MyDictionary();
            Assert.AreEqual(0, d.Count);

            var d2 = new MyDictionary(new Dictionary<int, string> { { 3, "c" } });
            Assert.AreEqual(1, d2.Count);

            var d3 = new MyDictionary();
            Assert.AreEqual(0, d3.Count);
        }

        [Test]
        public void KeysWorks()
        {
            var actualKeys = new int[] { 3, 6, 9 };
            var d = new MyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });
            var keys = d.Keys;
            Assert.True(keys is IEnumerable<int>, "IEnumerable<int>");
            Assert.True(keys is ICollection<int>, "ICollection<int>");

            int i = 0;
            foreach (var key in keys)
            {
                Assert.AreEqual(actualKeys[i], key);
                i++;
            }
            Assert.AreEqual(actualKeys.Length, i);
        }

        [Test]
        public void GetItemWorks()
        {
            var d = new MyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });

            var di2 = (IDictionary<int, string>)d;

            Assert.AreEqual("x", d[9]);
            Assert.AreEqual("z", di2[6]);

            try
            {
                var x = d[1];
                Assert.Fail("Should throw");
            }
            catch (Exception)
            {
            }

            try
            {
                var x = di2[1];
                Assert.Fail("Should throw");
            }
            catch (Exception)
            {
            }
        }

        [Test]
        public void ValuesWorks()
        {
            var actualValues = new string[] { "b", "z", "x" };
            var d2 = new MyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });
            var values = d2.Values;
            Assert.True(values is IEnumerable<string>);

            int i = 0;

            foreach (var val in values)
            {
                Assert.AreEqual(actualValues[i], val);
                i++;
            }
            Assert.AreEqual(actualValues.Length, i);
        }

        [Test]
        public void ContainsKeyWorks()
        {
            var d = new MyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });
            var di2 = (IDictionary<int, string>)d;

            Assert.True(d.ContainsKey(9));
            Assert.True(di2.ContainsKey(3));

            Assert.False(d.ContainsKey(923));
            Assert.False(di2.ContainsKey(353));
        }

        [Test]
        public void TryGetValueWorks()
        {
            var d = new MyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });
            var di2 = (IDictionary<int, string>)d;

            string outVal;

            Assert.True(d.TryGetValue(9, out outVal));
            Assert.AreEqual("x", outVal);

            Assert.True(di2.TryGetValue(3, out outVal));
            Assert.AreEqual("b", outVal);

            outVal = "!!!";
            Assert.False(d.TryGetValue(923, out outVal));
            Assert.AreEqual(null, outVal);

            outVal = "!!!";
            Assert.False(di2.TryGetValue(353, out outVal));
            Assert.AreEqual(null, outVal);
        }

        [Test]
        public void AddWorks()
        {
            var d = new MyDictionary();
            var di = (IDictionary<int, string>)d;

            d.Add(5, "aa");
            Assert.AreEqual("aa", d[5]);
            Assert.AreEqual(1, d.Count);

            di.Add(3, "bb");
            Assert.AreEqual(di[3], "bb");

            string s;
            di.TryGetValue(3, out s);
            Assert.AreEqual("bb", s);
            Assert.AreEqual(2, di.Count);

            try
            {
                d.Add(5, "zz");
                Assert.Fail("Should throw");
            }
            catch (Exception)
            {
            }
        }

        [Test]
        public void ClearWorks()
        {
            var d = new MyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });

            Assert.AreEqual(3, d.Count);
            d.Clear();
            Assert.AreEqual(0, d.Count);
        }

        [Test]
        public void RemoveWorks()
        {
            var d = new MyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" }, { 13, "y" } });
            var di = (IDictionary<int, string>)d;

            Assert.AreStrictEqual(true, d.Remove(6));
            Assert.AreEqual(3, d.Count);
            Assert.False(d.ContainsKey(6));

            Assert.AreStrictEqual(true, di.Remove(3));
            Assert.AreEqual(2, di.Count);
            Assert.False(di.ContainsKey(3));

            Assert.True(di.ContainsKey(13));
        }

        [Test]
        public void SetItemWorks()
        {
            var d = new MyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" }, { 13, "y" } });
            var di = (IDictionary<int, string>)d;

            d[3] = "check";
            Assert.AreEqual("check", d[3]);
            Assert.False(d.ContainsKey(10));

            di[10] = "stuff";
            Assert.AreEqual("stuff", di[10]);
            Assert.True(di.ContainsKey(10));
        }
    }
}