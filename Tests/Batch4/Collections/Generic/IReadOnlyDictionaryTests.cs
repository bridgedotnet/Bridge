// #1626
//using Bridge.Test.NUnit;
//using System;
//using System.Collections;
//using System.Collections.Generic;

//namespace Bridge.ClientTest.Batch4.Collections.Generic
//{
//    [TestFixture]
//    public class IReadOnlyDictionaryTests
//    {
//        private class MyReadOnlyDictionary : IReadOnlyDictionary<int, string>
//        {
//            private Dictionary<int, string> _backingDictionary;

//            public MyReadOnlyDictionary()
//                : this(new Dictionary<int, string>())
//            {
//            }

//            public MyReadOnlyDictionary(IDictionary<int, string> initialValues)
//            {
//                _backingDictionary = new Dictionary<int, string>(initialValues);
//            }

//            public string this[int key]
//            {
//                get
//                {
//                    return _backingDictionary[key];
//                }
//            }

//            public new ICollection<int> Keys
//            {
//                get
//                {
//                    return _backingDictionary.Keys;
//                }
//            }

//            public ICollection<string> Values
//            {
//                get
//                {
//                    return _backingDictionary.Values;
//                }
//            }

//            public bool ContainsKey(int key)
//            {
//                return _backingDictionary.ContainsKey(key);
//            }

//            public bool TryGetValue(int key, out string value)
//            {
//                return _backingDictionary.TryGetValue(key, out value);
//            }

//            public int Count
//            {
//                get
//                {
//                    return _backingDictionary.Count;
//                }
//            }

//            public IEnumerator<KeyValuePair<int, string>> GetEnumerator()
//            {
//                return _backingDictionary.GetEnumerator();
//            }

//            IEnumerator IEnumerable.GetEnumerator()
//            {
//                return _backingDictionary.GetEnumerator();
//            }
//        }

//        [Test]
//        public void TypePropertiesAreCorrect()
//        {
//            Assert.AreEqual(typeof(IReadOnlyDictionary<object, object>).FullName, "Bridge.IReadOnlyDictionary", "FullName should be correct");
//            Assert.True(typeof(IReadOnlyDictionary<object, object>).IsInterface, "IsInterface should be true");

//            var interfaces = typeof(IReadOnlyDictionary<object, object>).GetInterfaces();
//            Assert.AreEqual(interfaces.Length, 1, "Interfaces length");
//            Assert.AreEqual(interfaces[0], typeof(IEnumerable<KeyValuePair<object, object>>), "Interfaces");
//        }

//        // TODO Fix test NEWCI Run client tests to see the test errors
//        [Test]
//        public void ClassImplementsInterfaces()
//        {
//            Assert.True((object)new MyReadOnlyDictionary() is IReadOnlyDictionary<int, string>);
//        }

//        // TODO Fix test NEWCI Run client tests to see the test errors
//        [Test]
//        public void CountWorks()
//        {
//            var d = new MyReadOnlyDictionary();
//            Assert.AreEqual(d.Count, 0);

//            var d2 = new MyReadOnlyDictionary(new Dictionary<int, string> { { 3, "c" } });
//            Assert.AreEqual(d2.Count, 1);
//        }

//        // TODO Fix test NEWCI Run client tests to see the test errors
//        [Test]
//        public void KeysWorks()
//        {
//            var d = new MyReadOnlyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });
//            var actualKeys = new int[] { 3, 6, 9 };

//            var keys = d.Keys;
//            Assert.True(keys is IEnumerable<int>);
//            int i = 0;

//            foreach (var key in keys)
//            {
//                Assert.AreEqual(key, actualKeys[i]);
//                i++;
//            }
//            Assert.AreEqual(i, actualKeys.Length);

//            keys = ((IReadOnlyDictionary<int, string>)d).Keys;
//            Assert.True(keys is IEnumerable<int>);

//            i = 0;
//            foreach (var key in keys)
//            {
//                Assert.AreEqual(key, actualKeys[i]);
//                i++;
//            }
//            Assert.AreEqual(i, actualKeys.Length);
//        }

//        // TODO Fix test NEWCI Run client tests to see the test errors
//        [Test]
//        public void GetItemWorks()
//        {
//            var d = new MyReadOnlyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });
//            var di = (IReadOnlyDictionary<int, string>)d;

//            Assert.AreEqual(d[3], "b");
//            Assert.AreEqual(di[6], "z");

//            try
//            {
//                var x = d[1];
//                Assert.Fail("Should throw");
//            }
//            catch (Exception)
//            {
//            }

//            try
//            {
//                var x = di[1];
//                Assert.Fail("Should throw");
//            }
//            catch (Exception)
//            {
//            }
//        }

//        // TODO Fix test NEWCI Run client tests to see the test errors
//        [Test]
//        public void ValuesWorks()
//        {
//            var d = new MyReadOnlyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });
//            var actualValues = new string[] { "b", "z", "x" };

//            var values = d.Values;
//            int i = 0;

//            Assert.True(values is IEnumerable<int>);
//            foreach (var val in values)
//            {
//                Assert.AreEqual(val, actualValues[i]);
//                i++;
//            }
//            Assert.AreEqual(i, actualValues.Length);

//            values = ((IReadOnlyDictionary<int, string>)d).Values;
//            Assert.True(values is IEnumerable<int>);

//            i = 0;

//            foreach (var val in values)
//            {
//                Assert.AreEqual(val, actualValues[i]);
//                i++;
//            }
//            Assert.AreEqual(i, actualValues.Length);
//        }

//        // TODO Fix test NEWCI Run client tests to see the test errors
//        [Test]
//        public void ContainsKeyWorks()
//        {
//            var d = new MyReadOnlyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });
//            var di = (IReadOnlyDictionary<int, string>)d;

//            Assert.True(d.ContainsKey(6));
//            Assert.True(di.ContainsKey(3));

//            Assert.False(d.ContainsKey(6123));
//            Assert.False(di.ContainsKey(32));
//        }

//        // TODO Fix test NEWCI Run client tests to see the test errors
//        [Test]
//        public void TryGetValueWorks()
//        {
//            var d = new MyReadOnlyDictionary(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });
//            var di = (IReadOnlyDictionary<int, string>)d;

//            string outVal;
//            Assert.True(d.TryGetValue(6, out outVal));
//            Assert.AreEqual(outVal, "z");
//            Assert.True(di.TryGetValue(3, out outVal));
//            Assert.AreEqual(outVal, "b");

//            outVal = "!!!";
//            Assert.False(d.TryGetValue(6123, out outVal));
//            Assert.AreEqual(outVal, null);
//            outVal = "!!!";
//            Assert.False(di.TryGetValue(32, out outVal));
//            Assert.AreEqual(outVal, null);
//        }
//    }
//}