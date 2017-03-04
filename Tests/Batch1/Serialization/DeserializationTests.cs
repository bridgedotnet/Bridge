using System;
using System.Collections.Generic;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_SERIALIZATION)]
    [TestFixture]
    public class DeserializationTests
    {
        #region Test data

        public enum E1
        {
            Item1,
            Item2,
            Item3
        }

        [Reflectable]
        public class ClassWithFieldsAndNoInit
        {
            public byte[] byteArrayField;
            public Guid guidField;
            public Type typeField;
            public char charField;
            public long longField;
            public ulong ulongField;
            public decimal decimalField;
            public DateTime dateField;
            public E1 enumField;
            public int[] arrayField;
            public IList<E1> listField;
            public IDictionary<string, E1> dictField;
        }

        [Reflectable]
        public class ClassWithFields
        {
            public byte[] byteArrayField = new byte[] { 1, 2, 3 };
            public Guid guidField = Guid.NewGuid();
            public Type typeField = typeof(SerializationTests);
            public char charField = 'a';
            public long longField;
            public ulong ulongField;
            public decimal decimalField;
            public DateTime dateField = new DateTime(2010, 6, 10, 12, 0, 0, 0);
            public E1 enumField;
            public int[] arrayField = new[] { 1, 2, 3 };
            public IList<E1> listField = new List<E1> { E1.Item1, E1.Item2, E1.Item3 };

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

        [Reflectable]
        public class Class2
        {
            public int IntProp
            {
                get;
                set;
            }
        }

        [Reflectable]
        public class Class3
        {
            public string StringProp
            {
                get;
                set;
            }
        }

        [Reflectable]
        interface INamedEntity
        {
            string Name { get; set; }
        }

        [Reflectable]
        class Person : INamedEntity
        {
            public Guid Id { get; set; }
            public string Name { get; set; }
            public Address Address { get; set; }

            public Person(Guid id, string name, string city, string street)
            {
                this.Id = id;
                this.Name = name;
                this.Address = new Address()
                {
                    City = city,
                    Street = street
                };
            }

            public override string ToString()
            {
                return string.Format("{0} {1} {2} {3}",
                    Id, Name, Address.Street, Address.City);
            }
        }

        [Reflectable]
        public class Address
        {
            public string City { get; set; }
            public string Street { get; set; }
        }

        #endregion Test data

        [Test]
        public static void ByteArrayWorks()
        {
            byte[] arr = new byte[] { 1, 2, 3 };
            Assert.AreEqual(arr, Json.Deserialize<byte[]>("\"" + System.Convert.ToBase64String(arr) + "\""));
        }

        [Test]
        public static void GuidWorks()
        {
            var guid = Guid.NewGuid();
            Assert.AreEqual(guid.ToByteArray(), Json.Deserialize<Guid>("\"" + guid + "\"").ToByteArray());
        }

        [Test]
        public static void TypeWorks()
        {
            Assert.AreEqual(typeof(System.Collections.Generic.List<string>), Json.Deserialize<Type>("\"" + typeof(System.Collections.Generic.List<string>).FullName + "\""));
        }

        [Test]
        public static void CharWorks()
        {
            Assert.AreEqual('a', Json.Deserialize<char>("\"a\""));
        }

        [Test]
        public static void Int64Works()
        {
            long value = long.MaxValue.ToDynamic().toNumber();
            int intValue = long.MaxValue.ToDynamic().toNumber();
            Assert.True(value == Json.Deserialize<long>(intValue));

            value = long.MinValue;
            Assert.True(value == Json.Deserialize<long>(long.MinValue.ToString()));
        }

        [Test]
        public static void UInt64Works()
        {
            ulong value = ulong.MaxValue.ToDynamic().toNumber();
            int intValue = ulong.MaxValue.ToDynamic().toNumber();
            Assert.True(value == Json.Deserialize<ulong>(intValue));

            value = ulong.MinValue;
            Assert.True(value == Json.Deserialize<ulong>(ulong.MinValue.ToString()));
        }

        [Test]
        public static void DecimalWorks()
        {
            Assert.True(decimal.MinusOne == Json.Deserialize<decimal>(-1));
            Assert.True(decimal.One == Json.Deserialize<decimal>("1"));
            Assert.True(decimal.Zero == Json.Deserialize<decimal>(0));
        }

        [Test]
        public static void DateTimeWorks()
        {
            DateTime dt = new DateTime(2010, 6, 10, 12, 0, 0, 0);
            DateTime jsonDt = Json.Deserialize<DateTime>("\"2010-06-10T09:00:00.000\"");
            Assert.AreEqual(dt.Year, jsonDt.Year);
            Assert.AreEqual(dt.Month, jsonDt.Month);
            Assert.AreEqual(dt.Day, jsonDt.Day);
        }

        [Test]
        public static void ArrayWorks()
        {
            int[] intArr = new[] {1, 2, 3};
            Assert.AreEqual(intArr, Json.Deserialize<int[]>("[1,2,3]"));

            long[] longArr = new[] {1L, 2, 3L};
            long[] jsonLongArr = Json.Deserialize<long[]>("[1,2,3]");
            Assert.AreEqual(longArr.Length, jsonLongArr.Length);
            Assert.True(longArr[0] == jsonLongArr[0]);
            Assert.True(longArr[1] == jsonLongArr[1]);
            Assert.True(longArr[2] == jsonLongArr[2]);

            E1[] enumArr = new[] { E1.Item1, E1.Item2, E1.Item3 };
            Assert.AreEqual(enumArr, Json.Deserialize<E1[]>("[\"Item1\",\"Item2\",\"Item3\"]"));
        }

        [Test]
        public static void ComplexArrayWorks()
        {
            var c1 = CreateComplex(E1.Item1, E1.Item2, E1.Item3, 'a', 'b', 'c');
            var c2 = CreateComplex(E1.Item3, E1.Item1, E1.Item2, 'c', 'a', 'b');

            var a = new Class1[] { c1, c2 };

            string json = Json.Serialize(a);
            var deserialized = Json.Deserialize<Class1[]>(json);

            Assert.NotNull(deserialized, "#1");
            Assert.AreEqual("Bridge.ClientTest.DeserializationTests+Class1[]", deserialized.GetType().FullName, "#2");
            Assert.AreEqual(deserialized.Length, deserialized.Length, "#3");
            Assert.NotNull(deserialized[0], "#4");
            Assert.NotNull(deserialized[1], "#5");

            var dc1 = deserialized[0];
            AssertComplex(dc1, E1.Item1, E1.Item2, E1.Item3, 'a', 'b', 'c');

            var dc2 = deserialized[1];
            AssertComplex(dc2, E1.Item3, E1.Item1, E1.Item2, 'c', 'a', 'b');
        }

        [Test]
        public static void EnumWorks()
        {
            Assert.AreEqual(E1.Item1, Json.Deserialize<E1>("\"Item1\""));
        }

        [Test]
        public static void IListWorks()
        {
            var list = new List<E1> {E1.Item1, E1.Item2, E1.Item3};
            var jsonList = Json.Deserialize<List<E1>>("[\"Item1\",\"Item2\",\"Item3\"]");
            Assert.AreEqual(list.Count, jsonList.Count);
            Assert.True(list[0] == jsonList[0]);
            Assert.True(list[1] == jsonList[1]);
            Assert.True(list[2] == jsonList[2]);
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

            var jsonDict =
                Json.Deserialize<Dictionary<string, E1>>("{\"i1\":\"Item1\",\"i2\":\"Item2\",\"i3\":\"Item3\"}");

            Assert.AreEqual(dict.Count, jsonDict.Count);
            Assert.AreEqual(dict["i1"], jsonDict["i1"]);
            Assert.AreEqual(dict["i2"], jsonDict["i2"]);
            Assert.AreEqual(dict["i3"], jsonDict["i3"]);
        }

        [Test]
        public static void TypeWithFieldWorks()
        {
            var c = new ClassWithFields();
            string json = Json.Serialize(c);
            var jsonC = Json.Deserialize<ClassWithFieldsAndNoInit>(json);

            Assert.AreEqual(c.byteArrayField, jsonC.byteArrayField, "#1");
            Assert.AreEqual(c.guidField.ToByteArray(), jsonC.guidField.ToByteArray(), "#2");
            Assert.AreEqual(c.typeField, jsonC.typeField, "#3");
            Assert.AreEqual(c.charField, jsonC.charField, "#4");
            Assert.AreEqual(c.longField.ToString(), jsonC.longField.ToString(), "#5");
            Assert.AreEqual(c.ulongField.ToString(), jsonC.ulongField.ToString(), "#6");
            Assert.AreEqual(c.decimalField.ToString(), jsonC.decimalField.ToString(), "#7");
            Assert.AreEqual(c.dateField.ToString(), jsonC.dateField.ToString(), "#8");
            Assert.AreEqual(c.enumField, jsonC.enumField, "#9");
            Assert.AreEqual(c.arrayField, jsonC.arrayField, "#10");
            Assert.AreEqual(c.listField.Count, jsonC.listField.Count, "#11");
            Assert.AreEqual(c.listField[0], jsonC.listField[0], "#12");
            Assert.AreEqual(c.listField[1], jsonC.listField[1], "#13");
            Assert.AreEqual(c.listField[2], jsonC.listField[2], "#14");
            Assert.AreEqual(c.dictField.Count, jsonC.dictField.Count, "#15");
            Assert.AreEqual(c.dictField["i1"], jsonC.dictField["i1"], "#16");
            Assert.AreEqual(c.dictField["i2"], jsonC.dictField["i2"], "#17");
            Assert.AreEqual(c.dictField["i3"], jsonC.dictField["i3"], "#18");
        }

        [Test]
        public static void ComplexPropertiesWorks()
        {
            var c = CreateComplex(E1.Item1, E1.Item2, E1.Item3, 'a', 'b', 'c');

            string json = Json.Serialize(c);
            var jsonC = Json.Deserialize<Class1>(json);

            AssertComplex(jsonC, E1.Item1, E1.Item2, E1.Item3, 'a', 'b', 'c');
        }

        public static Class1 CreateComplex(E1 item1, E1 item2, E1 item3, char l1, char l2, char l3)
        {
            var c = new Class1();

            c.Sub1 = new SubClass1
            {
                Owner = c,
                List1 = new List<E1>
                {
                    item1,
                    item2,
                    item3
                }
            };

            c.Sub2 = new SubClass2
            {
                Owner = c,
                List1 = new List<char>
                {
                    l1,
                    l2,
                    l3
                }
            };

            return c;
        }

        public static void AssertComplex(Class1 c, E1 item1, E1 item2, E1 item3, char l1, char l2, char l3)
        {
            Assert.NotNull(c, "ac #1");
            Assert.NotNull(c.Sub1, "ac #2");

            //Cycle references are ignored during serialization therefore deserialization will not restore it
            //Assert.NotNull(c.Sub1.Owner, "ac #3");
            //Assert.True(c.Sub1.Owner == c, "ac #4");

            Assert.NotNull(c.Sub2, "ac #5");

            //Cycle references are ignored during serialization therefore deserialization will not restore it
            //Assert.NotNull(c.Sub2.Owner, "ac #6");
            //Assert.True(c.Sub2.Owner == c, "ac #7");

            Assert.True((object)c.Sub1 is SubClass1, "ac #8");
            Assert.True((object)c.Sub2 is SubClass2, "ac #9");
            Assert.True((object)c.Sub1.List1 is List<E1>, "ac #10");
            Assert.True((object)c.Sub2.List1 is List<char>, "ac #11");
            Assert.AreEqual(3, c.Sub1.List1.Count, "ac #12");
            Assert.AreEqual(3, c.Sub2.List1.Count, "ac #13");

            Assert.AreEqual(item1, c.Sub1.List1[0], "ac #14");
            Assert.AreEqual(item2, c.Sub1.List1[1], "ac #15");
            Assert.AreEqual(item3, c.Sub1.List1[2], "ac #16");

            Assert.AreEqual(l1, c.Sub2.List1[0], "ac #17");
            Assert.AreEqual(l2, c.Sub2.List1[1], "ac #18");
            Assert.AreEqual(l3, c.Sub2.List1[2], "ac #19");
        }

        [Test]
        public static void CamelCaseSettingWorks()
        {
            var json = "{\"intProp\":10}";
            var deserialized = Bridge.Json.Deserialize<Class2>(json, new JsonSettings {CamelCasePropertyNames = true});
            Assert.AreEqual(10, deserialized.IntProp);

            json = "{\"IntProp\":10}";
            deserialized = Bridge.Json.Deserialize<Class2>(json);
            Assert.AreEqual(10, deserialized.IntProp);
        }

        [Test]
        public static void IgnoreNullValueWorks()
        {
            var json = "{}";
            var deserialized = Bridge.Json.Deserialize<Class3>(json);
            Assert.Null(deserialized.StringProp);

            json = "{\"StringProp\":null}";
            deserialized = Bridge.Json.Deserialize<Class3>(json);
            Assert.Null(deserialized.StringProp);

            var jsonSettings = new JsonSettings() { IgnoreNullValue = true };

            json = "{}";
            deserialized = Bridge.Json.Deserialize<Class3>(json, jsonSettings);
            Assert.Null(deserialized.StringProp);

            json = "{\"StringProp\":null}";
            deserialized = Bridge.Json.Deserialize<Class3>(json, jsonSettings);
            Assert.Null(deserialized.StringProp);
        }

        [Test]
        public static void AnonymousTypesWorks()
        {
            var v = new { Amount = 108, Message = "Hello" };
            var json = "{\"Amount\":108,\"Message\":\"Hello\"}";

            var item = Bridge.Json.Deserialize(json, v);
            Assert.AreEqual(108, item.Amount);
            Assert.AreEqual("Hello", item.Message);

            var dynItem = Bridge.Json.Deserialize<dynamic>(json);
            Assert.AreEqual(108, (int)dynItem.Amount);
            Assert.AreEqual("Hello", (string)dynItem.Message);
        }

        [Test]
        public static void TypeNameHandlingWorks()
        {
            var persons = new[]
            {
                new Person(
                    Guid.Parse("{CEADF3CA-0EB4-43F3-A813-1266E16498AC}"),
                    "John", "New-York", "Fifth Avenue"
                ),
                new Person(
                    Guid.Parse("{64F09E69-39FE-4D9C-BDB3-108CA2CCFAD9}"),
                    "Mary", "London", "St Mary Axe"
                )
            };

            var serialized = Bridge.Json.Serialize(persons, new JsonSettings { TypeNameHandling = true });
            var entities = Bridge.Json.Deserialize<INamedEntity[]>(serialized, new JsonSettings { TypeNameHandling = true });

            Assert.AreEqual(persons.Length, entities.Length);

            Assert.True(entities[0] is Person);
            Assert.True(entities[1] is Person);

            var entity = (Person)entities[0];
            Assert.AreEqual(persons[0].Name, entities[0].Name);
            Assert.True(persons[0].Id == entity.Id);
            Assert.NotNull(entity.Address);
            Assert.True((object)entity.Address is Address);
            Assert.AreEqual(persons[0].Address.City, entity.Address.City);
            Assert.AreEqual(persons[0].Address.Street, entity.Address.Street);

            entity = (Person)entities[1];
            Assert.AreEqual(persons[1].Name, entities[1].Name);
            Assert.True(persons[1].Id == entity.Id);
            Assert.NotNull(entity.Address);
            Assert.True((object)entity.Address is Address);
            Assert.AreEqual(persons[1].Address.City, entity.Address.City);
            Assert.AreEqual(persons[1].Address.Street, entity.Address.Street);
        }
    }
}