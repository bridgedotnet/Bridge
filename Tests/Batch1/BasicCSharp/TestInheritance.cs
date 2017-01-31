using Bridge.Test.NUnit;

namespace Bridge.ClientTest.BasicCSharp
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Static overloads - {0}")]
    public class TestInheritance
    {
        private class A
        {
            public int X
            {
                get;
                set;
            }

            public A(int x)
            {
                this.X = x;
            }

            public int HandleNumber(int i)
            {
                return i;
            }

            public string HandleString(string s)
            {
                return s;
            }
        }

        private class B : A
        {
            public int Y
            {
                get;
                set;
            }

            public B(int x, int y)
                : base(x)
            {
                this.Y = y;
            }

            public new int HandleNumber(int i)
            {
                return i * 100;
            }
        }

        [Test(ExpectedCount = 4)]
        public static void TestA()
        {
            var a = new A(10);

            Assert.True(a != null, "Instance of A created");
            Assert.AreEqual(10, a.X, "a.X = 10");
            Assert.AreEqual(100, a.HandleNumber(100), "a.HandleNumber(100) = 100");
            Assert.AreEqual("Hundred", a.HandleString("Hundred"), "a.HandleString('Hundred') = 'Hundred'");
        }

        [Test(ExpectedCount = 5)]
        public static void TestB()
        {
            var b = new B(10, 20);

            Assert.True(b != null, "Instance of B created");
            Assert.AreEqual(10, b.X, "b.X = 10");
            Assert.AreEqual(20, b.Y, "b.Y = 20");
            Assert.AreEqual(100, b.HandleNumber(1), "b.HandleNumber(1) = 100");
            Assert.AreEqual("Hundred", b.HandleString("Hundred"), "b.HandleString('Hundred') = 'Hundred'");
        }

        [Test(ExpectedCount = 4)]
        public static void TestAB()
        {
            A b = new B(10, 20);

            Assert.True(b != null, "Instance of B created as A type");
            Assert.AreEqual(10, b.X, "b.X = 10");
            Assert.AreEqual(10, b.HandleNumber(10), "b.HandleNumber(10) = 10");
            Assert.AreEqual("Hundred", b.HandleString("Hundred"), "b.HandleString('Hundred') = 'Hundred'");
        }
    }
}