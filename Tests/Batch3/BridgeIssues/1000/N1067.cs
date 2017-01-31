using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1067 - {0}")]
    public class Bridge1067
    {
        [Test]
        public static void TestInlinePopertyWithValue()
        {
            var dict1 = new MyDictionary1();
            var dict2 = new MyDictionary2();
            Assert.Null(dict1["getAccessor"]);
            Assert.Null(dict1["setAccessor"]);
            Assert.Null(dict2["getAccessor"]);
            Assert.Null(dict2["setAccessor"]);
        }

        private class MyDictionary1 : Dictionary<int, int>
        {
            public new int this[int key]
            {
                [External]
                [Name("getAccessor")]
                get
                {
                    return 1;
                }
                [External]
                [Name("setAccessor")]
                set
                {
                }
            }
        }

        private class MyDictionary2 : Dictionary<int, int>
        {
            [External]
            public new int this[int key]
            {
                [Name("getAccessor")]
                get
                {
                    return 1;
                }
                [Name("setAccessor")]
                set
                {
                }
            }
        }
    }
}