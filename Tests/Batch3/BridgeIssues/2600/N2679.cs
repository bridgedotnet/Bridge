using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2679 - {0}")]
    public class Bridge2679
    {
        [Reflectable(true)]
        public class Test1
        {
            public Test1(int value)
            {
                Value = value;
            }

            public int Value { get; private set; }
        }

        [Reflectable(true)]
        public class Test2<T>
        {
            public Test2(T value)
            {
                Value = value;
            }

            public T Value { get; private set; }
        }

        [Test]
        public static void TestTypeNameHandling()
        {
            var obj1 = new Test1(1);
            var obj2 = new Test2<int>(2);

            var json1 = Json.Serialize(obj1, new JsonSettings { TypeNameHandling = true });
            Assert.AreEqual("{\"$type\":\""+ typeof(Test1).AssemblyQualifiedName + "\",\"Value\":1}", json1);

            var json2 = Json.Serialize(obj2, new JsonSettings { TypeNameHandling = true });
            Assert.AreEqual("{\"$type\":\"" + typeof(Test2<int>).AssemblyQualifiedName + "\",\"Value\":2}", json2);
        }
    }
}