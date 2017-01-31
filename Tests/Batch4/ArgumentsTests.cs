using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch4
{
    [TestFixture(TestNameFormat = "ArgumentsTests - {0}")]
    public class ArgumentsTests
    {
        [ExpandParams]
        private void LengthHelper0(params object[] args)
        {
            Assert.AreEqual(0, Arguments.Length);
        }

        [ExpandParams]
        private void LengthHelper1(params object[] args)
        {
            Assert.AreEqual(1, Arguments.Length);
        }

        [ExpandParams]
        private void LengthHelper2(params object[] args)
        {
            Assert.AreEqual(2, Arguments.Length);
        }

        [ExpandParams]
        private object GetArgumentHelper(int index, params object[] args)
        {
            return Arguments.GetArgument(index);
        }

        [ExpandParams]
        private object ToArrayHelper(params object[] args)
        {
            return Arguments.ToArray();
        }

        [ExpandParams]
        private object ToArrayHelper<T>(params object[] args)
        {
            return Arguments.ToArray<T>(1); // first argument will be generic type
        }

        [Test]
        public void LengthWorks()
        {
            LengthHelper0();
            LengthHelper1(4);
            LengthHelper2(6, "x");
        }

        [Test]
        public void GetArgumentWorks()
        {
            Assert.AreEqual(0, GetArgumentHelper(0, "x", "y"));
            Assert.AreEqual("x", GetArgumentHelper(1, "x", "y"));
            Assert.AreEqual("y", GetArgumentHelper(2, "x", "y"));
        }

        [Test]
        public void ToArrayWorks()
        {
            Assert.AreEqual(new object[0], ToArrayHelper());
            Assert.AreEqual(new object[] { "x" }, ToArrayHelper("x"));
            Assert.AreEqual(new object[] { "x", 1 }, ToArrayHelper("x", 1));
        }

        [Test]
        public void ToArrayOfTWorks()
        {
            Assert.AreEqual(new object[0], ToArrayHelper<string>());
            Assert.AreEqual(new[] { "x" }, ToArrayHelper<string>("x"));
            Assert.AreEqual(new[] { "x", "y" }, ToArrayHelper<string>("x", "y"));
        }
    }
}