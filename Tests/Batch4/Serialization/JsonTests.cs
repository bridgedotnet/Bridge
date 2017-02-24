using Bridge.Html5;
using Bridge.Test.NUnit;

//using System.Serialization;

namespace Bridge.ClientTest.Batch4.Serialization
{
    [TestFixture(TestNameFormat = "JsonTests - {0}")]
    public class JsonTests
    {
        // #1574
        //[Serializable]
        private class TestClass1
        {
            [Name(false)]
            public int i;
        }

        // #1574
        //[Serializable]
        private class TestClass2
        {
            [Name(false)]
            public int i;

            [Name(false)]
            public string s;
        }

        [Test]
        public void NonGenericParseWorks_SPI_1574()
        {
            // #1574
            // Test restructure to keep assertion count correct (prevent uncaught test exception)
            TestClass2 o = null;
            TestHelper.Safe(() => o = (TestClass2)Bridge.Html5.JSON.Parse("{ \"i\": 3, \"s\": \"test\" }"));

            int i = 0;
            TestHelper.Safe(() => i = o.i);
            Assert.AreEqual(3, i);

            string vs = null;
            TestHelper.Safe(() => vs = o.s);
            Assert.AreEqual("test", vs);
        }

        [Test]
        public void GenericParseWorks()
        {
            var o = (TestClass2)Bridge.Html5.JSON.Parse("{ \"i\": 3, \"s\": \"test\" }");
            Assert.AreEqual(3, o.i);
            Assert.AreEqual("test", o.s);
        }

        // TODO Fix test NEWCI Run client tests to see the test errors
        [Test]
        public void NonGenericParseWithCallbackWorks_SPI_1574()
        {
            // #1574
            // Test restructure to keep assertion count correct (prevent uncaught test exception)

            TestClass2 o = null;

            TestHelper.Safe(() => o = (TestClass2)Bridge.Html5.JSON.Parse("{ \"i\": 3, \"s\": \"test\" }", (s, x) =>
            {
                ((TestClass2)x).i = 100;
                return x;
            }));

            int i = 0;
            TestHelper.Safe(() => i = o.i);
            Assert.AreEqual(100, i);

            string vs = null;
            TestHelper.Safe(() => vs = o.s);
            Assert.AreEqual("test", vs);
        }

        // TODO Fix test NEWCI Run client tests to see the test errors
        [Test]
        public void GenericParseWithCallbackWorks_SPI_1574()
        {
            // #1574
            // Test restructure to keep assertion count correct (prevent uncaught test exception)
            TestClass2 o = null;
            TestHelper.Safe(() => o = (TestClass2)Bridge.Html5.JSON.Parse("{ \"i\": 3, \"s\": \"test\" }", (s, x) =>
            {
                ((TestClass2)x).i = 100;
                return x;
            }));

            int i = 0;
            TestHelper.Safe(() => i = o.i);
            Assert.AreEqual(100, i);

            string vs = null;
            TestHelper.Safe(() => vs = o.s);
            Assert.AreEqual("test", vs);
        }

        [Test]
        public void StringifyWorks()
        {
            Assert.AreEqual("{\"i\":3}", Bridge.Html5.JSON.Stringify(new TestClass1
            {
                i = 3
            }));
        }

        [Test]
        public void StringifyWithSerializableMembersArrayWorks()
        {
            Assert.AreEqual("{\"i\":3}", Bridge.Html5.JSON.Stringify(new TestClass2
            {
                i = 3,
                s = "test"
            }, new[] { "i" }));
        }

        [Test]
        public void StringifyWithSerializableMembersArrayAndIntentCountWorks()
        {
            Assert.AreEqual("{\n    \"i\": 3\n}", Bridge.Html5.JSON.Stringify(new TestClass2
            {
                i = 3,
                s = "test"
            }, new[] { "i" }, 4));
        }

        [Test]
        public void StringifyWithSerializableMembersArrayAndIntentTextWorks()
        {
            Assert.AreEqual("{\n    \"i\": 3\n}", Bridge.Html5.JSON.Stringify(new TestClass2
            {
                i = 3,
                s = "test"
            }, new[] { "i" }, "    "));
        }

        [Test]
        public void StringifyWithCallbackWorks()
        {
            Assert.AreEqual("{\"i\":3}", Bridge.Html5.JSON.Stringify(new TestClass2
            {
                i = 3,
                s = "test"
            }, (key, value) => key == "s" ? Script.Undefined : value));
        }

        [Test]
        public void StringifyWithCallbackAndIndentCountWorks()
        {
            Assert.AreEqual("{\n    \"i\": 3\n}", Bridge.Html5.JSON.Stringify(new TestClass2
            {
                i = 3,
                s = "test"
            }, (key, value) => key == "s" ? Script.Undefined : value, 4));
        }

        [Test]
        public void StringifyWithCallbackAndIndentTextWorks()
        {
            Assert.AreEqual("{\n    \"i\": 3\n}", Bridge.Html5.JSON.Stringify(new TestClass2
            {
                i = 3,
                s = "test"
            }, (key, value) => key == "s" ? Script.Undefined : value, "    "));
        }
    }
}