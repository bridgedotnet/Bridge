using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1339 - {0}")]
    public class Bridge1339
    {
        public class FooBase
        {
            public const string Bar = "Str";
        }

        public class Foo1 : FooBase
        {
        }

        public class Foo2 : Foo1
        {
        }

        public class Foo3 : Foo2
        {
            new public const string Bar = "Do";
        }

        public class Foo4 : Foo3
        {
        }

        [Test]
        public static void TestAccessingConstantsFromDerivedClass()
        {
            var s = "ing";

            Assert.AreEqual("String", FooBase.Bar + s);
            Assert.AreEqual("String", Foo1.Bar + s);
            Assert.AreEqual("String", Foo2.Bar + s);

            Assert.AreEqual("Doing", Foo3.Bar + s);
            Assert.AreEqual("Doing", Foo4.Bar + s);
        }
    }
}