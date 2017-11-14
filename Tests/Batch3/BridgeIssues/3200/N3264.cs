using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    using MyTest = Bridge3264_Ext.Root.MyTest<string>;

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3264 - {0}")]
    public class Bridge3264
    {
        [Test]
        public static void TestGenericAlias()
        {
            var test = new MyTest();
            Assert.NotNull(test);
        }
    }
}

namespace Bridge3264_Ext
{
    using Bridge;

    public static class Root
    {
        public class MyTest<T>
        {
        }
    }
}