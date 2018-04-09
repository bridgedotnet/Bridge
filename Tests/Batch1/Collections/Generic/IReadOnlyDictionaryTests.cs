// #1626
using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.ClientTest.Collections.Generic
{
    [Category(Constants.MODULE_ICOLLECTION)]
    [TestFixture(TestNameFormat = "IReadOnlyDictionary - {0}")]
    public class IReadOnlyDictionaryTests
    {
        private class MyReadOnlyDictionary : IReadOnlyDictionary<int, string>
        {
            private Dictionary<int, string> _backingDictionary;

            public MyReadOnlyDictionary()
                : this(new Dictionary<int, string>())
            {
            }

            public MyReadOnlyDictionary(IDictionary<int, string> initialValues)
            {
                _backingDictionary = new Dictionary<int, string>(initialValues);
            }

            public string this[int key]
            {
                get
                {
                    return _backingDictionary[key];
                }
            }

            public IEnumerable<int> Keys
            {
                get
                {
                    return _backingDictionary.Keys;
                }
            }

            public IEnumerable<string> Values
            {
                get
                {
                    return _backingDictionary.Values;
                }
            }

            public bool ContainsKey(int key)
            {
                return _backingDictionary.ContainsKey(key);
            }

            public bool TryGetValue(int key, out string value)
            {
                return _backingDictionary.TryGetValue(key, out value);
            }

            public int Count
            {
                get
                {
                    return _backingDictionary.Count;
                }
            }

            public IEnumerator<KeyValuePair<int, string>> GetEnumerator()
            {
                return _backingDictionary.GetEnumerator();
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return _backingDictionary.GetEnumerator();
            }
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Collections.Generic.IReadOnlyDictionary`2[[System.Object, mscorlib],[System.Object, mscorlib]]", typeof(IReadOnlyDictionary<object, object>).FullName, "FullName should be correct");
            Assert.True(typeof(IReadOnlyDictionary<object, object>).IsInterface, "IsInterface should be true");

            var interfaces = typeof(IReadOnlyDictionary<int, string>).GetInterfaces();
            Assert.AreEqual(3, interfaces.Length, "Interfaces length");
            Assert.AreEqual(typeof(IReadOnlyCollection<KeyValuePair<int, string>>).FullName, interfaces[0].FullName, "Interfaces IReadOnlyCollection<KeyValuePair<int, string>>");
            Assert.AreEqual(typeof(IEnumerable<KeyValuePair<int, string>>).FullName, interfaces[1].FullName, "Interfaces IEnumerable<KeyValuePair<int, string>>");
            Assert.AreEqual(typeof(IEnumerable).FullName, interfaces[2].FullName, "Interfaces IEnumerable");
        }

        [Test]
        public void ClassImplementsInterfaces()
        {
            Assert.True((object)new MyReadOnlyDictionary() is IReadOnlyDictionary<int, string>);
        }

        [Test]
        public void CountWorks()
        {
            var d = new MyReadOnlyDictionary();
            Assert.AreEqual(0, d.Count);

            var d2 = new MyReadOnlyDictionary(new Dictionary<int, string> { { 3, "c" } });
            Assert.AreEqual(1, d2.Count);
        }

        [Test]
        public void KeysWorks()
        {
            var d = new MyReadOnlyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });
            var actualKeys = new int[] { 3, 6, 9 };

            var keys = d.Keys;
            Assert.True(keys is IEnumerable<int>);
            int i = 0;

            foreach (var key in keys)
            {
                Assert.AreEqual(actualKeys[i], key);
                i++;
            }
            Assert.AreEqual(actualKeys.Length, i);

            keys = ((IReadOnlyDictionary<int, string>)d).Keys;
            Assert.True(keys is IEnumerable<int>);

            i = 0;
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
            var d = new MyReadOnlyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });
            var di = (IReadOnlyDictionary<int, string>)d;

            Assert.AreEqual("b", d[3]);
            Assert.AreEqual("z", di[6]);

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
                var x = di[1];
                Assert.Fail("Should throw");
            }
            catch (Exception)
            {
            }
        }

        [Test]
        public void ValuesWorks()
        {
            var d = new MyReadOnlyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });
            var actualValues = new string[] { "b", "z", "x" };

            var values = d.Values;
            int i = 0;

            Assert.True(values is IEnumerable<string>);
            foreach (var val in values)
            {
                Assert.AreEqual(actualValues[i], val);
                i++;
            }
            Assert.AreEqual(actualValues.Length, i);

            values = ((IReadOnlyDictionary<int, string>)d).Values;
            Assert.True(values is IEnumerable<string>);

            i = 0;

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
            var d = new MyReadOnlyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });
            var di = (IReadOnlyDictionary<int, string>)d;

            Assert.True(d.ContainsKey(6));
            Assert.True(di.ContainsKey(3));

            Assert.False(d.ContainsKey(6123));
            Assert.False(di.ContainsKey(32));
        }

        [Test]
        public void TryGetValueWorks()
        {
            var d = new MyReadOnlyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });
            var di = (IReadOnlyDictionary<int, string>)d;

            string outVal;
            Assert.True(d.TryGetValue(6, out outVal));
            Assert.AreEqual("z", outVal);
            Assert.True(di.TryGetValue(3, out outVal));
            Assert.AreEqual("b", outVal);

            outVal = "!!!";
            Assert.False(d.TryGetValue(6123, out outVal));
            Assert.AreEqual(null, outVal);
            outVal = "!!!";
            Assert.False(di.TryGetValue(32, out outVal));
            Assert.AreEqual(null, outVal);
        }

        public class Person
        {
            public string Name
            {
                get; set;
            }
            public int Age
            {
                get; set;
            }

            public IReadOnlyDictionary<string, object> ToDict()
            {
                return new Dictionary<string, object>
                {
                    {nameof(Name), Name},
                    {nameof(Age), Age}
                };
            }
        }

        [Test]
        public void UsersTestCase_1626_Works()
        {
            var p = new Person() { Name = "Donald", Age = 27 };

            var d = p.ToDict();

            Assert.AreEqual("Donald", d["Name"]);
            Assert.AreEqual(27, d["Age"]);
        }
    }
}