using System;
using System.Runtime.CompilerServices;
using Bridge;
using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_SERIALIZATION)]
    [TestFixture]
	public class JsonTests
    {
		[ObjectLiteral]
		class TestClass1
        {
#pragma warning disable 414
			public int i;
#pragma warning restore 414
		}

		[ObjectLiteral]
		class TestClass2
        {
			public int i;
			public string s;
		}

		[Test]
		public void NonGenericParseWorks() {
			var o = (TestClass2)JSON.Parse("{ \"i\": 3, \"s\": \"test\" }");
			Assert.AreEqual(o.i, 3);
			Assert.AreEqual(o.s, "test");
		}

		[Test]
		public void GenericParseWorks() {
			var o = JSON.Parse<TestClass2>("{ \"i\": 3, \"s\": \"test\" }");
			Assert.AreEqual(o.i, 3);
			Assert.AreEqual(o.s, "test");
		}

		[Test]
		public void NonGenericParseWithCallbackWorks() {
			var o = (TestClass2)JSON.Parse("{ \"i\": 3, \"s\": \"test\" }", (s, x) => { if (s == "i") return 100; return x;});
			Assert.AreEqual(o.i, 100);
			Assert.AreEqual(o.s, "test");
		}

		[Test]
		public void GenericParseWithCallbackWorks() {
			var o = JSON.Parse<TestClass2>("{ \"i\": 3, \"s\": \"test\" }", (s, x) => { if (s == "i") return 100; return x; });
			Assert.AreEqual(o.i, 100);
			Assert.AreEqual(o.s, "test");
		}

		[Test]
		public void StringifyWorks() {
			Assert.AreEqual(JSON.Stringify(new TestClass1 { i = 3 }), "{\"i\":3}");
		}

		[Test]
		public void StringifyWithSerializableMembersArrayWorks() {
			Assert.AreEqual(JSON.Stringify(new TestClass2 { i = 3, s = "test" }, new[] { "i" }), "{\"i\":3}");
		}

		[Test]
		public void StringifyWithSerializableMembersArrayAndIntentCountWorks() {
			Assert.AreEqual(JSON.Stringify(new TestClass2 { i = 3, s = "test" }, new[] { "i" }, 4), "{\n    \"i\": 3\n}");
		}

		[Test]
		public void StringifyWithSerializableMembersArrayAndIntentTextWorks() {
			Assert.AreEqual(JSON.Stringify(new TestClass2 { i = 3, s = "test" }, new[] { "i" }, "    "), "{\n    \"i\": 3\n}");
		}

		[Test]
		public void StringifyWithCallbackWorks() {
			Assert.AreEqual(JSON.Stringify(new TestClass2 { i = 3, s = "test" }, (key, value) => key == "s" ? Script.Undefined : value), "{\"i\":3}");
		}

		[Test]
		public void StringifyWithCallbackAndIndentCountWorks() {
			Assert.AreEqual(JSON.Stringify(new TestClass2 { i = 3, s = "test" }, (key, value) => key == "s" ? Script.Undefined : value, 4), "{\n    \"i\": 3\n}");
		}

		[Test]
		public void StringifyWithCallbackAndIndentTextWorks() {
			Assert.AreEqual(JSON.Stringify(new TestClass2 { i = 3, s = "test" }, (key, value) => key == "s" ? Script.Undefined : value, "    "), "{\n    \"i\": 3\n}");
		}
	}
}
