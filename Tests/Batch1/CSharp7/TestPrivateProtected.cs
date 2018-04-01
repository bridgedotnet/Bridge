using Bridge.Test.NUnit;

namespace Bridge.ClientTest.CSharp7
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "C# private protected - {0}")]
    public class TestPrivateProtected
    {
        private protected int testField = 2;

        private protected int TestMethod()
        {
            return 1;
        }

        private protected int TestProp
        {
            get;
            set;
        }

        [Test]
        public void TestModifiers()
        {
            Assert.AreEqual(2, testField);
            Assert.AreEqual(1, TestMethod());
            Assert.AreEqual(0, TestProp);
        }
    }
}