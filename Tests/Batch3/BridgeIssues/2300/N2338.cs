using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2338 - {0}")]
    public class Bridge2338
    {
        class Bar : Exception
        {
        }

        static Type Foo<T>(T value)
        {
            Type type = value.GetType();
            return type;
        }

        [Test]
        public static void TestGenericGetType()
        {
            var bar = new Bar();
            var type = Foo<Exception>(bar);
            Assert.AreEqual("Bar", type.Name);

            byte b = 1;
            type = Foo<byte>(b);
            Assert.AreEqual("Byte", type.Name);

            char c = '1';
            type = Foo<char>(c);
            Assert.AreEqual("Char", type.Name);

            object o = new object();
            type = Foo<object>(o);
            Assert.AreEqual("Object", type.Name);
        }
    }
}