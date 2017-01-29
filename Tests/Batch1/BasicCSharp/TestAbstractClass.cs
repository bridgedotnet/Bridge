using Bridge.Test.NUnit;

namespace Bridge.ClientTest.BasicCSharp
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Abstract types - {0}")]
    public class TestAbstractClass
    {
        private abstract class A
        {
            public int Data
            {
                get;
                set;
            }

            public abstract string GetString();
        }

        private class B : A
        {
            public override string GetString()
            {
                Data++;
                return "B";
            }
        }

        private class C : B
        {
            public override string GetString()
            {
                Data--;
                return "C";
            }
        }

        [Test(ExpectedCount = 3)]
        public static void TestB()
        {
            var b = new B();

            Assert.True(b != null, "Instance of B created");
            Assert.AreEqual("B", b.GetString(), "b.GetString() = 'B'");
            Assert.AreEqual(1, b.Data, "b.Data = 1");
        }

        [Test(ExpectedCount = 3)]
        public static void TestC()
        {
            var c = new C();

            Assert.True(c != null, "Instance of C created");
            Assert.AreEqual("C", c.GetString(), "c.GetString() = 'C'");
            Assert.AreEqual(-1, c.Data, "c.Data = -1");
        }

        [Test(ExpectedCount = 6)]
        public static void TestBC()
        {
            A b = new B();

            Assert.True(b != null, "Instance of B created as instance of A");
            Assert.AreEqual("B", b.GetString(), "b.GetString() = 'B'");
            Assert.AreEqual(1, b.Data, "b.Data = 1");

            A c = new C();
            Assert.True(c != null, "Instance of C created as instance of A");
            Assert.AreEqual("C", c.GetString(), "c.GetString() = 'C'");
            Assert.AreEqual(-1, c.Data, "c.Data = -1");
        }
    }
}