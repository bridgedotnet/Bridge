using Bridge.Html5;
using Bridge.Test.NUnit;

using System.Text;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1391 - {0}")]
    public class Bridge1391
    {
        private static StringBuilder builder;

        public static StringBuilder Builder
        {
            get
            {
                return builder ?? (builder = new StringBuilder());
            }
        }

        private class Foo
        {
            static Foo()
            {
                Builder.Append("Foo");
            }
        }

        private class Bar
        {
            private static int i = Init();

            private static int Init()
            {
                Builder.Append("Bar");
                return 0;
            }
        }

        [Test]
        public static void TestStaticCtorOrder()
        {
            Builder.Clear();

            // Now, types with no Ready/Autorun methods intialized on-demand (when first time accessing the type)
            Foo f = new Foo();
            Bar b = new Bar();
            Assert.AreEqual("FooBar", builder.ToString());
        }
    }

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1391 - {0}")]
    public class Bridge1391Ready
    {
        [Test]
        public static void TestStaticCtorOrderForClassHavingReady()
        {
            // Now, types with no Ready/Autorun methods intialized on-demand (when first time accessing the type)
            // However, classes with [Ready] initializes on Ready
            var r = Script.Get<string>("Bridge.$N1391Result");
            Assert.AreEqual("FooReadyBarReady", r, "Bridge.$N1391Result");
            Assert.AreEqual("FooReadyBarReady", Bridge1391ToRunInitializationOnReady.Builder.ToString(), "Current builder's state");
        }
    }

    public class Bridge1391ToRunInitializationOnReady
    {
        private static StringBuilder builder;

        public static StringBuilder Builder
        {
            get
            {
                return builder ?? (builder = new StringBuilder());
            }
        }

        private class FooReady
        {
            static FooReady()
            {
                Builder.Append("FooReady");
            }
        }

        private class BarReady
        {
            private static int i = InitReady();

            private static int InitReady()
            {
                Builder.Append("BarReady");
                return 0;
            }
        }

        [Ready]
        public static void RunMe()
        {
            Builder.Clear();

            // Now, types with no Ready/Autorun methods intialized on-demand (when first time accessing the type)
            // However, classes with [Ready] initializes on Ready
            FooReady f = new FooReady();
            BarReady b = new BarReady();

            var r = Builder.ToString();
            Script.Write("Bridge.$N1391Result = {0}", r);
        }
    }
}