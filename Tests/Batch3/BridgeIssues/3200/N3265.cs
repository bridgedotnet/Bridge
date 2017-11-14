using Bridge;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    using MyTest = Bridge3265_Ext.Root.MyTest<string>;

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3265 - {0}")]
    public class Bridge3265
    {
        [Test]
        public static void TestGenericAlias()
        {
            MyTest test = new MyTest();
            test.SetValue("Hello world!");
            var val = test.GetValue();
            Assert.AreEqual("Hello world!", val);
        }
    }
}

namespace Bridge3265_Ext
{
    public static class Root
    {
        [IgnoreGeneric]
        public class MyTest<T>
        {
            [Template("{}")]
            public extern MyTest();

            [Template("{this}.val = {0}")]
            public extern void SetValue(T val);

            [Template("{this}.val")]
            public extern T GetValue();
        }
    }
}