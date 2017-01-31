using Bridge.Test.NUnit;

namespace Bridge.ClientTest.BasicCSharp
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Static overloads - {0}")]
    public class TestOverloadStaticMethods
    {
        private class Static
        {
            public static string Foo(int x)
            {
                return "Foo(int x)";
            }

            public static string Foo(string s)
            {
                return "Foo(string s)";
            }

            public static string Foo(double d)
            {
                return "Foo(double d)";
            }

            public static string Foo(int x, int y)
            {
                return "Foo(int x, int y)";
            }

            public static string Foo(int x, double y)
            {
                return "Foo(int x, double y)";
            }

            public static string Foo(double x, int y)
            {
                return "Foo(double x, int y)";
            }

            public static char FooReturnType(int x)
            {
                return 'C';
            }

            public static string FooReturnType(double d)
            {
                return "string FooReturnType(double d)";
            }

            public static string FooOptionalParameters(int x, int y = 5)
            {
                return "FooOptionalParameters(int x, int y = 5)";
            }

            public static string FooOptionalParameters(int x)
            {
                return "FooOptionalParameters(int x)";
            }

            public static string FooMultipleOptionalParameters(int x, int y = 5, int z = 10)
            {
                return "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)";
            }

            public static string FooMultipleOptionalParameters(int x, int y = 5)
            {
                return "FooMultipleOptionalParameters(int x, int y = 5)";
            }

            public static string FooNamedArgument(int x)
            {
                return "FooNamedArgument(int x)";
            }

            public static string FooNamedArgument(double d)
            {
                return "FooNamedArgument(double d)";
            }
        }

        [Test(ExpectedCount = 16)]
        public static void TestStatic()
        {
            Assert.AreEqual("Foo(int x)", Static.Foo(1), "Static Foo(int x)");
            Assert.AreEqual("Foo(string s)", Static.Foo("string"), "Static Foo(string s)");
            Assert.AreEqual("Foo(double d)", Static.Foo(1.1), "Static Foo(double d)");
            Assert.AreEqual("Foo(int x, int y)", Static.Foo(1, 2), "Static Foo(int x, int y)");
            Assert.AreEqual("Foo(int x, double y)", Static.Foo(1, 1.1), "Static Foo(int x, double y)");
            Assert.AreEqual("Foo(double x, int y)", Static.Foo(1.1, 1), "Static Foo(double x, int y)");

            Assert.AreEqual('C', Static.FooReturnType(1), "Static char FooReturnType(int y)");
            Assert.AreEqual("string FooReturnType(double d)", Static.FooReturnType(1.1), "Static string FooReturnType(double d)");

            Assert.AreEqual("FooOptionalParameters(int x)", Static.FooOptionalParameters(1), "Static FooOptionalParameters(int x)");
            Assert.AreEqual("FooOptionalParameters(int x, int y = 5)", Static.FooOptionalParameters(1, 2), "Static FooOptionalParameters(int x, int y = 5)");

            Assert.AreEqual("FooMultipleOptionalParameters(int x, int y = 5)", Static.FooMultipleOptionalParameters(1, 2), "Static FooMultipleOptionalParameters(int x, int y = 5)");
            Assert.AreEqual("FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", Static.FooMultipleOptionalParameters(1, z: 2), "Static FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            Assert.AreEqual("FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", Static.FooMultipleOptionalParameters(1, 2, 3), "Static FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            Assert.AreEqual("FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", Static.FooMultipleOptionalParameters(1, z: 2, y: 3), "Static FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");

            Assert.AreEqual("FooNamedArgument(int x)", Static.FooNamedArgument(x: 1), "Static FooNamedArgument(int x)");
            Assert.AreEqual("FooNamedArgument(double d)", Static.FooNamedArgument(d: 1), "Static FooNamedArgument(double d)");
        }
    }
}