using Bridge;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    using MyTest = Bridge3265_Ext.Root.MyTest<string>;

    /// <summary>
    /// The test here consists in cheching whether member templates for generic
    /// types are considered during Bridge translation.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3265 - {0}")]
    public class Bridge3265
    {
        /// <summary>
        /// Creates an instance of the aliased class and checks if the value
        /// set can be fetched afterwards from client-side.
        /// </summary>
        [Test]
        public static void TestGenericAlias()
        {
            MyTest test = new MyTest();
            test.SetValue("Hello world!");
            var val = test.GetValue();
            Assert.AreEqual("Hello world!", val, "Generics by alias, member value set, is correctly fetched.");
        }
    }
}

namespace Bridge3265_Ext
{
    /// <summary>
    /// This class denotes an external class to the application, from an
    /// external namespace.
    /// </summary>
    public static class Root
    {
        /// <summary>
        /// Class with generics, defining templates for its members.
        /// </summary>
        /// <typeparam name="T"></typeparam>
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