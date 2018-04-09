using Bridge.Test.NUnit;

#pragma warning disable 626    // CS0626  Method, operator, or accessor 'MixinTests.GlobalWrapper.IsNaN(object)' is marked external and has no attributes on it. Consider adding a DllImport attribute to specify the external implementation.

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_FUNCTIONS)]
    [TestFixture(TestNameFormat = "Mixin - {0}")]
    public class MixinTests
    {
        [External]
        [GlobalMethods]
        [Convention(Target = ConventionTarget.Member, Notation = Notation.CamelCase)]
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
        [Convention(Target = ConventionTarget.Member, Notation = Notation.CamelCase)]
        private class MixinWrapper
        {
            public static extern byte Parse(string s);
        }

        [Test]
        public void TestMixin()
        {
            Assert.AreEqual(3, MixinWrapper.Parse("3"));
        }

        [Mixin("_$$.fn")]
        public static class MyStaticMethods1
        {
            public static int GetTen()
            {
                return 10;
            }
        }

        [Mixin("_$$.fn")]
        public static class MyStaticMethods2
        {
            public static int GetTwenty()
            {
                return 20;
            }
        }

        [Init(InitPosition.Top)]
        private static void GlobalInit()
        {
            Script.Write("var _$$ = { fn: { } };");
        }

        [Test]
        public void TestMixin_N3156()
        {
            // #3156

            Assert.AreEqual(10, MyStaticMethods1.GetTen());
            Assert.AreEqual(10, Script.Write<int>("_$$.fn.GetTen()"));

            Assert.AreEqual(20, MyStaticMethods2.GetTwenty());
            Assert.AreEqual(20, Script.Write<int>("_$$.fn.GetTwenty()"));
        }
    }
}