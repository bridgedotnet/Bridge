using Bridge.Test;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_FUNCTIONS)]
    [TestFixture(TestNameFormat = "Arguments - {0}")]
    public class ArgumentsTests
    {
        [ExpandParams]
        private void LengthHelper0(params object[] args)
        {
            Assert.AreEqual(Arguments.Length, 0);
        }

        [ExpandParams]
        private void LengthHelper1(params object[] args)
        {
            Assert.AreEqual(Arguments.Length, 1);
        }

        [ExpandParams]
        private void LengthHelper2(params object[] args)
        {
            Assert.AreEqual(Arguments.Length, 2);
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
            Assert.AreEqual(GetArgumentHelper(0, "x", "y"), 0);
            Assert.AreEqual(GetArgumentHelper(1, "x", "y"), "x");
            Assert.AreEqual(GetArgumentHelper(2, "x", "y"), "y");
        }

        [Test]
        public void ToArrayWorks()
        {
            Assert.AreEqual(ToArrayHelper(), new object[0]);
            Assert.AreEqual(ToArrayHelper("x"), new object[] { "x" });
            Assert.AreEqual(ToArrayHelper("x", 1), new object[] { "x", 1 });
        }

        [Test]
        public void ToArrayOfTWorks()
        {
            Assert.AreEqual(ToArrayHelper<string>(), new object[0]);
            Assert.AreEqual(ToArrayHelper<string>("x"), new[] { "x" });
            Assert.AreEqual(ToArrayHelper<string>("x", "y"), new[] { "x", "y" });
        }
    }
}