using Bridge.Html5;
using Bridge.Test.NUnit;

//using System.Serialization;

namespace Bridge.ClientTest.Batch4.Serialization
{
#pragma warning disable 649 // CS0649  Field is never assigned to, and will always have its default value null
    [TestFixture(TestNameFormat = "JsonTests - {0}")]
    public class JsonTests
    {
        // #1574
        //[Serializable]
        private class TestClass2
        {
            public int i;

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
    }
#pragma warning restore 649 // CS0649  Field is never assigned to, and will always have its default value null
}