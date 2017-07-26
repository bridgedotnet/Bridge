using Bridge.Test.NUnit;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_HTML5)]
    [TestFixture(TestNameFormat = "JSON - {0}")]
    public class JsonTests
    {
        // #1574
        //[Serializable]
        [ObjectLiteral]
        private class TestClass1
        {
            public int i;
        }

        // #1574
        //[Serializable]
        [ObjectLiteral]
        private class TestClass2
        {
            public int i;
            public string s;
        }

        [ObjectLiteral]
        private class TestClass3
        {
            public int i;
            public string s;

            public int Inc()
            {
                return ++i;
            }

            public static int Inc(int i)
            {
                return ++i;
            }
        }

        [ObjectLiteral(ObjectCreateMode.Constructor)]
        private class TestClass4
        {
            public int i;
            public string s;

            public int Inc()
            {
                return ++i;
            }

            public static int Inc(int i)
            {
                return ++i;
            }
        }

#pragma warning disable CS0626 // Method, operator, or accessor is marked external and has no attributes on it

        [Template("Bridge.isPlainObject({o})")]
        public static extern bool IsPlainObject(object o);

#pragma warning restore CS0626 // Method, operator, or accessor is marked external and has no attributes on it

        [Test]
        public void NonGenericParseWorks()
        {
            var o = (TestClass2)Bridge.Html5.JSON.Parse("{ \"i\": 3, \"s\": \"test\" }");
            Assert.AreEqual(3, o.i);
            Assert.AreEqual("test", o.s);
            Assert.True(IsPlainObject(o), "IsPlainObject");
        }

        [Test]
        public void GenericParseWorks()
        {
            var o = (TestClass2)Bridge.Html5.JSON.Parse("{ \"i\": 3, \"s\": \"test\" }");
            Assert.AreEqual(3, o.i);
            Assert.AreEqual("test", o.s);
            Assert.True(IsPlainObject(o), "IsPlainObject");
        }

        [Test]
        public void NonGenericParseWithCallbackWorks()
        {
            var o = (TestClass2)Bridge.Html5.JSON.Parse("{ \"i\": 3, \"s\": \"test\" }", (s, x) => { if (s == "i") return 100; return x; });
            Assert.AreEqual(100, o.i);
            Assert.AreEqual("test", o.s);
            Assert.True(IsPlainObject(o), "IsPlainObject");
        }

        [Test]
        public void GenericParseWithCallbackWorks()
        {
            var o = (TestClass2)Bridge.Html5.JSON.Parse("{ \"i\": 3, \"s\": \"test\" }", (s, x) => { if (s == "i") return 100; return x; });
            Assert.AreEqual(100, o.i);
            Assert.AreEqual("test", o.s);
            Assert.True(IsPlainObject(o), "IsPlainObject");
        }

        [Test]
        public void NonGenericParseWorks3()
        {
            var o = (TestClass3)Bridge.Html5.JSON.Parse("{ \"i\": 3, \"s\": \"test\" }");
            Assert.AreEqual(3, o.i);
            Assert.AreEqual("test", o.s);
            Assert.AreEqual(4, o.Inc());
            Assert.AreEqual(11, TestClass3.Inc(10));
            Assert.True(IsPlainObject(o), "IsPlainObject");
        }

        [Test]
        public void GenericParseWorks3()
        {
            var o = (TestClass3)Bridge.Html5.JSON.Parse("{ \"i\": 3, \"s\": \"test\" }");
            Assert.AreEqual(3, o.i);
            Assert.AreEqual("test", o.s);
            Assert.AreEqual(4, o.Inc());
            Assert.AreEqual(11, TestClass3.Inc(10));
            Assert.True(IsPlainObject(o), "IsPlainObject");
        }

        [Test]
        public void NonGenericParseWithCallbackWorks3()
        {
            var o = (TestClass3)Bridge.Html5.JSON.Parse("{ \"i\": 3, \"s\": \"test\" }", (s, x) => { if (s == "i") return 100; return x; });
            Assert.AreEqual(100, o.i);
            Assert.AreEqual("test", o.s);
            Assert.AreEqual(101, o.Inc());
            Assert.AreEqual(11, TestClass3.Inc(10));
            Assert.True(IsPlainObject(o), "IsPlainObject");
        }

        [Test]
        public void GenericParseWithCallbackWorks3()
        {
            var o = (TestClass3)Bridge.Html5.JSON.Parse("{ \"i\": 3, \"s\": \"test\" }", (s, x) => { if (s == "i") return 100; return x; });
            Assert.AreEqual(100, o.i);
            Assert.AreEqual("test", o.s);
            Assert.AreEqual(101, o.Inc());
            Assert.AreEqual(11, TestClass3.Inc(10));
            Assert.True(IsPlainObject(o), "IsPlainObject");
        }

        [Test]
        public void NonGenericParseWorks4()
        {
            var o = (TestClass4)Bridge.Html5.JSON.Parse("{ \"i\": 3, \"s\": \"test\" }");
            Assert.AreEqual(3, o.i);
            Assert.AreEqual("test", o.s);
            Assert.AreEqual(4, o.Inc());
            Assert.AreEqual(11, TestClass4.Inc(10));
            Assert.True(IsPlainObject(o), "IsPlainObject");
        }

        [Test]
        public void GenericParseWorks4()
        {
            var o = (TestClass4)Bridge.Html5.JSON.Parse("{ \"i\": 3, \"s\": \"test\" }");
            Assert.AreEqual(3, o.i);
            Assert.AreEqual("test", o.s);
            Assert.AreEqual(4, o.Inc());
            Assert.AreEqual(11, TestClass4.Inc(10));
            Assert.True(IsPlainObject(o), "IsPlainObject");
        }

        [Test]
        public void NonGenericParseWithCallbackWorks4()
        {
            var o = (TestClass4)Bridge.Html5.JSON.Parse("{ \"i\": 3, \"s\": \"test\" }", (s, x) => { if (s == "i") return 100; return x; });
            Assert.AreEqual(100, o.i);
            Assert.AreEqual("test", o.s);
            Assert.AreEqual(101, o.Inc());
            Assert.AreEqual(11, TestClass4.Inc(10));
            Assert.True(IsPlainObject(o), "IsPlainObject");
        }

        [Test]
        public void GenericParseWithCallbackWorks4()
        {
            var o = (TestClass4)Bridge.Html5.JSON.Parse("{ \"i\": 3, \"s\": \"test\" }", (s, x) => { if (s == "i") return 100; return x; });
            Assert.AreEqual(100, o.i);
            Assert.AreEqual("test", o.s);
            Assert.AreEqual(101, o.Inc());
            Assert.AreEqual(11, TestClass4.Inc(10));
            Assert.True(IsPlainObject(o), "IsPlainObject");
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

        [Test]
        public void StringifyWithSerializableMembersArrayWorks3()
        {
            Assert.AreEqual("{\"i\":3}", Bridge.Html5.JSON.Stringify(new TestClass3 { i = 3, s = "test" }, new[] { "i" }));
        }

        [Test]
        public void StringifyWithSerializableMembersArrayAndIntentCountWorks3()
        {
            Assert.AreEqual("{\n    \"i\": 3\n}", Bridge.Html5.JSON.Stringify(new TestClass3 { i = 3, s = "test" }, new[] { "i" }, 4));
        }

        [Test]
        public void StringifyWithSerializableMembersArrayAndIntentTextWorks3()
        {
            Assert.AreEqual("{\n    \"i\": 3\n}", Bridge.Html5.JSON.Stringify(new TestClass3 { i = 3, s = "test" }, new[] { "i" }, "    "));
        }

        [Test]
        public void StringifyWithCallbackWorks3()
        {
            Assert.AreEqual("{\"i\":3}", Bridge.Html5.JSON.Stringify(new TestClass3 { i = 3, s = "test" }, (key, value) => key == "s" ? Script.Undefined : value));
        }

        [Test]
        public void StringifyWithCallbackAndIndentCountWorks3()
        {
            Assert.AreEqual("{\n    \"i\": 3\n}", Bridge.Html5.JSON.Stringify(new TestClass3 { i = 3, s = "test" }, (key, value) => key == "s" ? Script.Undefined : value, 4));
        }

        [Test]
        public void StringifyWithCallbackAndIndentTextWorks3()
        {
            Assert.AreEqual("{\n    \"i\": 3\n}", Bridge.Html5.JSON.Stringify(new TestClass3 { i = 3, s = "test" }, (key, value) => key == "s" ? Script.Undefined : value, "    "));
        }

        [Test]
        public void StringifyWithSerializableMembersArrayWorks4()
        {
            Assert.AreEqual("{\"i\":3}", Bridge.Html5.JSON.Stringify(new TestClass4 { i = 3, s = "test" }, new[] { "i" }));
        }

        [Test]
        public void StringifyWithSerializableMembersArrayAndIntentCountWorks4()
        {
            Assert.AreEqual("{\n    \"i\": 3\n}", Bridge.Html5.JSON.Stringify(new TestClass4 { i = 3, s = "test" }, new[] { "i" }, 4));
        }

        [Test]
        public void StringifyWithSerializableMembersArrayAndIntentTextWorks4()
        {
            Assert.AreEqual("{\n    \"i\": 3\n}", Bridge.Html5.JSON.Stringify(new TestClass4 { i = 3, s = "test" }, new[] { "i" }, "    "));
        }

        [Test]
        public void StringifyWithCallbackWorks4()
        {
            Assert.AreEqual("{\"i\":3}", Bridge.Html5.JSON.Stringify(new TestClass4 { i = 3, s = "test" }, (key, value) => key == "s" ? Script.Undefined : value));
        }

        [Test]
        public void StringifyWithCallbackAndIndentCountWorks4()
        {
            Assert.AreEqual("{\n    \"i\": 3\n}", Bridge.Html5.JSON.Stringify(new TestClass4 { i = 3, s = "test" }, (key, value) => key == "s" ? Script.Undefined : value, 4));
        }

        [Test]
        public void StringifyWithCallbackAndIndentTextWorks4()
        {
            Assert.AreEqual("{\n    \"i\": 3\n}", Bridge.Html5.JSON.Stringify(new TestClass4 { i = 3, s = "test" }, (key, value) => key == "s" ? Script.Undefined : value, "    "));
        }
    }
}