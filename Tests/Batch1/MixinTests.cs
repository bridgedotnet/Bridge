using Bridge.Test;

#pragma warning disable 626	// CS0626  Method, operator, or accessor 'MixinTests.GlobalWrapper.IsNaN(object)' is marked external and has no attributes on it. Consider adding a DllImport attribute to specify the external implementation.

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_FUNCTIONS)]
    [TestFixture(TestNameFormat = "Mixin - {0}")]
    public class MixinTests
    {
        [External]
        [GlobalMethods]
        private class GlobalWrapper
        {
            public static extern bool IsNaN(object o);
        }

        [Test]
        public void TestGlobalMethods()
        {
            Assert.True(GlobalWrapper.IsNaN("a"));
            Assert.False(GlobalWrapper.IsNaN(3));
        }

        [External]
        [Mixin("System.Byte")]
        private class MixinWrapper
        {
            public static extern byte Parse(string s);
        }

        [Test]
        public void TestMixin()
        {
            Assert.AreEqual(3, MixinWrapper.Parse("3"));
        }
    }
}