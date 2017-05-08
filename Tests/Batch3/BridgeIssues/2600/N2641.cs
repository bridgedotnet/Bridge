using System;
using System.Text.RegularExpressions;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2641 - {0}")]
    public class Bridge2641
    {
        [Reflectable]
        public class Class1
        {
            public int Field1;
            public int field2;
        }

        [Test]
        public static void TestJsonCamelCaseForFields()
        {
            var c = new Class1 { Field1 = 1, field2 = 2 };
            var json = Bridge.Json.Serialize(c, new JsonSettings { CamelCasePropertyNames = true });
            Assert.AreEqual("{\"field1\":1,\"field2\":2}", json);
            var deserialized = Bridge.Json.Deserialize<Class1>(json, new JsonSettings { CamelCasePropertyNames = true });
            Assert.AreEqual(1, deserialized.Field1);
            Assert.AreEqual(2, deserialized.field2);

            json = Bridge.Json.Serialize(c);
            Assert.AreEqual("{\"Field1\":1,\"field2\":2}", json);
            deserialized = Bridge.Json.Deserialize<Class1>(json);
            Assert.AreEqual(1, deserialized.Field1);
            Assert.AreEqual(2, deserialized.field2);
        }
    }
}