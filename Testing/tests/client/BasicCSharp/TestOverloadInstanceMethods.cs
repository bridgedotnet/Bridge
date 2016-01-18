using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BasicCSharp
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Instance overloads - {0}")]
    public class TestOverloadInstanceMethods
    {
        private class Instance
        {
            public string Foo(int x)
            {
                return "Foo(int x)";
            }

            public string Foo(string s)
            {
                return "Foo(string s)";
            }

            public string Foo(double d)
            {
                return "Foo(double d)";
            }

            public string Foo(int x, int y)
            {
                return "Foo(int x, int y)";
            }

            public string Foo(int x, double y)
            {
                return "Foo(int x, double y)";
            }

            public string Foo(double x, int y)
            {
                return "Foo(double x, int y)";
            }

            public char FooReturnType(int x)
            {
                return 'C';
            }

            public string FooReturnType(double d)
            {
                return "string FooReturnType(double d)";
            }

            public string FooOptionalParameters(int x, int y = 5)
            {
                return "FooOptionalParameters(int x, int y = 5)";
            }

            public string FooOptionalParameters(int x)
            {
                return "FooOptionalParameters(int x)";
            }

            public string FooMultipleOptionalParameters(int x, int y = 5, int z = 10)
            {
                return "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)";
            }

            public string FooMultipleOptionalParameters(int x, int y = 5)
            {
                return "FooMultipleOptionalParameters(int x, int y = 5)";
            }

            public string FooNamedArgument(int x)
            {
                return "FooNamedArgument(int x)";
            }

            public string FooNamedArgument(double d)
            {
                return "FooNamedArgument(double d)";
            }
        }

        [Test(ExpectedCount = 17)]
        public static void TestInstance()
        {
            var i = new Instance();

            Assert.True(i != null, "i created");
            Assert.AreEqual(i.Foo(1), "Foo(int x)", "Instance Foo(int x)");
            Assert.AreEqual(i.Foo("string"), "Foo(string s)", "Instance Foo(string s)");
            Assert.AreEqual(i.Foo(1.1), "Foo(double d)", "Instance Foo(double d)");
            Assert.AreEqual(i.Foo(1, 2), "Foo(int x, int y)", "Instance Foo(int x, int y)");
            Assert.AreEqual(i.Foo(1, 1.1), "Foo(int x, double y)", "Instance Foo(int x, double y)");
            Assert.AreEqual(i.Foo(1.1, 1), "Foo(double x, int y)", "Instance Foo(double x, int y)");

            Assert.AreEqual(i.FooReturnType(1), 'C', "Instance char FooReturnType(int y)");
            Assert.AreEqual(i.FooReturnType(1.1), "string FooReturnType(double d)", "Instance string FooReturnType(double d)");

            Assert.AreEqual(i.FooOptionalParameters(1), "FooOptionalParameters(int x)", "Instance FooOptionalParameters(int x)");
            Assert.AreEqual(i.FooOptionalParameters(1, 2), "FooOptionalParameters(int x, int y = 5)", "Instance FooOptionalParameters(int x, int y = 5)");

            Assert.AreEqual(i.FooMultipleOptionalParameters(1, 2), "FooMultipleOptionalParameters(int x, int y = 5)", "Instance FooMultipleOptionalParameters(int x, int y = 5)");
            Assert.AreEqual(i.FooMultipleOptionalParameters(1, z: 2), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            Assert.AreEqual(i.FooMultipleOptionalParameters(1, 2, 3), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            Assert.AreEqual(i.FooMultipleOptionalParameters(1, z: 2, y: 3), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");

            Assert.AreEqual(i.FooNamedArgument(x: 1), "FooNamedArgument(int x)", "Static FooNamedArgument(int x)");
            Assert.AreEqual(i.FooNamedArgument(d: 1), "FooNamedArgument(double d)", "Static FooNamedArgument(double d)");
        }
    }
}
