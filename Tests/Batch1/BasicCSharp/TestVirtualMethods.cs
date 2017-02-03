using Bridge.Test.NUnit;

namespace Bridge.ClientTest.BasicCSharp
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Virtual methods - {0}")]
    public class TestVirtualMethods
    {
        private class A
        {
            public virtual string Test()
            {
                return "A";
            }
        }

        private class B : A
        {
            public string TestA()
            {
                return base.Test();
            }

            public override string Test()
            {
                return "B";
            }
        }

        [Test(ExpectedCount = 7)]
        public static void TestB()
        {
            var a = new A();

            Assert.True(a != null, "Instance of A created");
            Assert.AreEqual("A", a.Test(), "a.Test() = 'A'");

            var b = new B();

            Assert.True(b != null, "Instance of B created");
            Assert.AreEqual("B", b.Test(), "b.Test() = 'B'");
            Assert.AreEqual("A", b.TestA(), "b.TestA() = 'A'");

            A c = new B();

            Assert.True(c != null, "Instance of C created");
            Assert.AreEqual("B", c.Test(), "c.Test() = 'B'");
        }
    }
}