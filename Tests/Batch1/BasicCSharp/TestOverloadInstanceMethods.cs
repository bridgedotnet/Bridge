using Bridge.Test.NUnit;

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
            Assert.AreEqual("Foo(int x)", i.Foo(1), "Instance Foo(int x)");
            Assert.AreEqual("Foo(string s)", i.Foo("string"), "Instance Foo(string s)");
            Assert.AreEqual("Foo(double d)", i.Foo(1.1), "Instance Foo(double d)");
            Assert.AreEqual("Foo(int x, int y)", i.Foo(1, 2), "Instance Foo(int x, int y)");
            Assert.AreEqual("Foo(int x, double y)", i.Foo(1, 1.1), "Instance Foo(int x, double y)");
            Assert.AreEqual("Foo(double x, int y)", i.Foo(1.1, 1), "Instance Foo(double x, int y)");

            Assert.AreEqual('C', i.FooReturnType(1), "Instance char FooReturnType(int y)");
            Assert.AreEqual("string FooReturnType(double d)", i.FooReturnType(1.1), "Instance string FooReturnType(double d)");

            Assert.AreEqual("FooOptionalParameters(int x)", i.FooOptionalParameters(1), "Instance FooOptionalParameters(int x)");
            Assert.AreEqual("FooOptionalParameters(int x, int y = 5)", i.FooOptionalParameters(1, 2), "Instance FooOptionalParameters(int x, int y = 5)");

            Assert.AreEqual("FooMultipleOptionalParameters(int x, int y = 5)", i.FooMultipleOptionalParameters(1, 2), "Instance FooMultipleOptionalParameters(int x, int y = 5)");
            Assert.AreEqual("FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", i.FooMultipleOptionalParameters(1, z: 2), "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            Assert.AreEqual("FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", i.FooMultipleOptionalParameters(1, 2, 3), "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            Assert.AreEqual("FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", i.FooMultipleOptionalParameters(1, z: 2, y: 3), "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");

            Assert.AreEqual("FooNamedArgument(int x)", i.FooNamedArgument(x: 1), "Static FooNamedArgument(int x)");
            Assert.AreEqual("FooNamedArgument(double d)", i.FooNamedArgument(d: 1), "Static FooNamedArgument(double d)");
        }
    }
}