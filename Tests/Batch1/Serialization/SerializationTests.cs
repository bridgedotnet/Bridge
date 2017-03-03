﻿using System;
using System.Collections.Generic;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_SERIALIZATION)]
    [TestFixture]
    public class SerializationTests
    {
        #region Test data

        public enum E1
        {
            Item1,
            Item2,
            Item3
        }

        [Reflectable]
        public class ClassWithFields
        {
            public byte[] byteArrayField = new byte[] {1,2,3};
            public Guid guidField = Guid.NewGuid();
            public Type typeField = typeof(SerializationTests);
            public char charField = 'a';
            public long longField;
            public ulong ulongField;
            public decimal decimalField;
            public DateTime dateField = new DateTime(2010, 6, 10, 12, 0, 0, 0);
            public E1 enumField;
            public int[] arrayField = new[] {1, 2, 3};
            public IList<E1> listField = new List<E1> {E1.Item1, E1.Item2, E1.Item3};

            public IDictionary<string, E1> dictField = new Dictionary<string, E1>
            {
                ["i1"] = E1.Item1,
                ["i2"] = E1.Item2,
                ["i3"] = E1.Item3
            };
        }

        [Reflectable]
        public class Class1
        {
            public SubClass1 Sub1
            {
                get; set;
            }

            public SubClass2 Sub2
            {
                get; set;
            }
        }

        [Reflectable]
        public class SubClass1
        {
            public Class1 Owner
            {
                get; set;
            }

            public List<E1> List1
            {
                get; set;
            }
        }

        [Reflectable]
        public class SubClass2
        {
            public Class1 Owner
            {
                get; set;
            }

            public List<char> List1
            {
                get; set;
            }
        }

        #endregion Test data

        [Test]
        public static void ByteArrayWorks()
        {
            byte[] arr = new byte[] {1, 2, 3};
            Assert.AreEqual("\"" + System.Convert.ToBase64String(arr) + "\"", JSON.Serialize(arr));
        }

        [Test]
        public static void GuidWorks()
        {
            var guid = Guid.NewGuid();
            Assert.AreEqual("\"" + guid.ToString() + "\"", JSON.Serialize(guid));
        }

        [Test]
        public static void TypeWorks()
        {
            Assert.AreEqual("\"" + typeof(System.Collections.Generic.List<string>).FullName + "\"", JSON.Serialize(typeof(System.Collections.Generic.List<string>)));
        }

        [Test]
        public static void CharWorks()
        {
            char c = 'a';
            Assert.AreEqual("\"a\"", JSON.Serialize(c));
        }

        [Test]
        public static void Int64Works()
        {
            long value = long.MaxValue;
            Assert.AreEqual(long.MaxValue.ToDynamic().toNumber(), JSON.Serialize(value));

            value = long.MinValue;
            Assert.AreEqual(long.MinValue.ToDynamic().toNumber(), JSON.Serialize(value));
        }

        [Test]
        public static void UInt64Works()
        {
            ulong value = ulong.MaxValue;
            Assert.AreEqual(ulong.MaxValue.ToDynamic().toNumber(), JSON.Serialize(value));

            value = ulong.MinValue;
            Assert.AreEqual(ulong.MinValue.ToDynamic().toNumber(), JSON.Serialize(value));
        }

        [Test]
        public static void DecimalWorks()
        {
            decimal value = decimal.MaxValue;
            Assert.AreEqual(decimal.MaxValue.ToDynamic().toFloat(), JSON.Serialize(value));

            value = decimal.MinValue;
            Assert.AreEqual(decimal.MinValue.ToDynamic().toFloat(), JSON.Serialize(value));

            value = decimal.MinusOne;
            Assert.AreEqual(decimal.MinusOne.ToDynamic().toFloat(), JSON.Serialize(value));

            value = decimal.One;
            Assert.AreEqual(decimal.One.ToDynamic().toFloat(), JSON.Serialize(value));

            value = decimal.Zero;
            Assert.AreEqual(decimal.Zero.ToDynamic().toFloat(), JSON.Serialize(value));
        }

        [Test]
        public static void DateTimeWorks()
        {
            DateTime dt = new DateTime(2010, 6, 10, 12, 0, 0, 0);
            var s = JSON.Serialize(dt);
            Assert.AreEqual(Html5.JSON.Stringify(dt), s, "Result: " + s);
        }

        [Test]
        public static void ArrayWorks()
        {
            int[] intArr = new[] {1, 2, 3};
            Assert.AreEqual("[1,2,3]", JSON.Serialize(intArr));

            long[] longArr = new[] {1L, 2, 3L};
            Assert.AreEqual("[1,2,3]", JSON.Serialize(longArr));

            E1[] enumArr = new[] { E1.Item1, E1.Item2, E1.Item3 };
            Assert.AreEqual("[\"Item1\",\"Item2\",\"Item3\"]", JSON.Serialize(enumArr));
        }

        [Test]
        public static void EnumWorks()
        {
            Assert.AreEqual("\"Item1\"", JSON.Serialize(E1.Item1));
        }

        [Test]
        public static void IListWorks()
        {
            var list = new List<E1> {E1.Item1, E1.Item2, E1.Item3};
            Assert.AreEqual("[\"Item1\",\"Item2\",\"Item3\"]", JSON.Serialize(list));
        }

        [Test]
        public static void IDictionaryWorks()
        {
            var dict = new Dictionary<string, E1>
            {
                ["i1"] = E1.Item1,
                ["i2"] = E1.Item2,
                ["i3"] = E1.Item3
            };

            Assert.AreEqual("{\"i1\":\"Item1\",\"i2\":\"Item2\",\"i3\":\"Item3\"}", JSON.Serialize(dict));
        }

        [Test]
        public static void TypeWithFieldWorks()
        {
            var c = new ClassWithFields();
            dynamic raw = JSON.Plain(c);

            Assert.AreEqual(System.Convert.ToBase64String(c.byteArrayField), raw.byteArrayField, "#1");
            Assert.AreEqual(c.guidField.ToString(), raw.guidField, "#2");
            Assert.AreEqual(typeof(SerializationTests).FullName, raw.typeField, "#3");
            Assert.AreEqual("a", raw.charField, "#4");
            Assert.AreEqual(0, raw.longField, "#5");
            Assert.AreEqual(0, raw.ulongField, "#6");
            Assert.AreEqual(0, raw.decimalField, "#7");
            Assert.NotNull(raw.dateField, "#8");
            Assert.AreEqual(((dynamic)c.dateField).toJSON(), raw.dateField, "#9 " + raw.dateField);
            Assert.AreEqual("Item1", raw.enumField, "#10");
            Assert.AreEqual(new int[] {1,2,3}, raw.arrayField, "#11");
            Assert.AreEqual(new string[] {"Item1", "Item2", "Item3"}, raw.listField, "#12");
            Assert.AreDeepEqual(Script.ToPlainObject(new {i1 = "Item1", i2 = "Item2", i3 = "Item3" }), raw.dictField, "#12");
        }

        [Test]
        public static void ComplexPropertiesWorks()
        {
            var c = new Class1();

            c.Sub1 = new SubClass1
            {
                Owner = c,
                List1 = new List<E1>
                {
                    E1.Item1,
                    E1.Item2,
                    E1.Item3
                }
            };

            c.Sub2 = new SubClass2
            {
                Owner = c,
                List1 = new List<char>
                {
                    'a',
                    'b',
                    'c'
                }
            };

            string json = JSON.Serialize(c);
            Assert.AreEqual("{\"Sub1\":{\"List1\":[\"Item1\",\"Item2\",\"Item3\"]},\"Sub2\":{\"List1\":[\"a\",\"b\",\"c\"]}}", json);
        }
    }
}