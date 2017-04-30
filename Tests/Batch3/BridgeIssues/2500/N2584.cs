using System;
using System.Diagnostics.CodeAnalysis;
using System.Reflection;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2584 - {0}")]
    public class Bridge2584
    {
        [Reflectable]
        private class Class1
        {
#pragma warning disable 169
#pragma warning disable 0649
            public int field1;
            protected int field2;
            private int field3;
            internal int field4;

            public static int s_field1;
            protected static int s_field2;
            private static int s_field3;
            internal static int s_field4;
#pragma warning restore 169
#pragma warning restore 0649
        }

        [Test]
        public static void TestBindingFlags()
        {
            var fields = typeof(Class1).GetFields(BindingFlags.Public | BindingFlags.Instance);
            Assert.AreEqual(1, fields.Length);
            Assert.AreEqual("field1", fields[0].Name);

            fields = typeof(Class1).GetFields(BindingFlags.NonPublic | BindingFlags.Static);
            Assert.AreEqual(3, fields.Length);
            Assert.AreEqual("s_field2", fields[0].Name);
            Assert.AreEqual("s_field3", fields[1].Name);
            Assert.AreEqual("s_field4", fields[2].Name);

            fields = typeof(Class1).GetFields();
            Assert.AreEqual(2, fields.Length);

            fields = typeof(Class1).GetFields(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static);
            Assert.AreEqual(8, fields.Length);

            var field = typeof(Class1).GetField("FIELD1", BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase);
            Assert.NotNull(field);
            Assert.AreEqual("field1", field.Name);

            field = typeof(Class1).GetField("FIELD1", BindingFlags.Public | BindingFlags.Instance);
            Assert.Null(field);
        }
    }
}