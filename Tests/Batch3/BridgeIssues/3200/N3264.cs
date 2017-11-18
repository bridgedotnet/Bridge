using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Alias to the generic type, specializing it.
    using MyTest = Bridge3264_Ext.Root.MyTest<string>;

    /// <summary>
    /// This test consists in checking whether Bridge can handle type aliases
    /// for types implementing generic template support (C# generics).
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3264 - {0}")]
    public class Bridge3264
    {
        /// <summary>
        /// Just check whether bridge could output the type instantiation.
        /// </summary>
        [Test]
        public static void TestGenericAlias()
        {
            var test = new MyTest();
            Assert.NotNull(test, "Instantiate type aliased to a generic type.");
        }
    }
}

namespace Bridge3264_Ext
{
    using Bridge;

    /// <summary>
    /// Defines a "pseudo-external" type to be addressed by the corresponding
    /// test via one alias specializing of it.
    /// </summary>
    public static class Root
    {
        public class MyTest<T>
        {
        }
    }
}