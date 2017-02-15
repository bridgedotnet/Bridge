using Bridge.Test.NUnit;
using Stuff = System.ComponentModel;

namespace Bridge.ClientTest.CSharp6
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "NameOf - {0}")]
    public class TestNameOf
    {
        private class C
        {
            public static string Method1(string x, int y)
            {
                return nameof(x);
            }

            public static string Method1(string x, string Y)
            {
                return nameof(Y);
            }

            public string Method2(int z)
            {
                return nameof(z);
            }

            public string f<T>() => nameof(T);
        }

        [Test]
        public static void TestBasic()
        {
            var c = new C();

            Assert.AreEqual("C", nameof(C));
            Assert.AreEqual("Method1", nameof(C.Method1));
            Assert.AreEqual("Method2", nameof(C.Method2));
            Assert.AreEqual("Method1", nameof(c.Method1));
            Assert.AreEqual("Method2", nameof(c.Method2));
            Assert.AreEqual("x", C.Method1("", 0));
            Assert.AreEqual("Y", C.Method1("", ""));
            Assert.AreEqual("z", c.Method2(0));
            Assert.AreEqual("Stuff", nameof(Stuff));
            Assert.AreEqual("f", nameof(c.f));
            Assert.AreEqual("T", c.f<int>());
            Assert.AreEqual("CSharp6", nameof(Bridge.ClientTest.CSharp6));
        }
    }
}