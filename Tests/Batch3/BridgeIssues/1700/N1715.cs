using System;
using System.Collections;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1715 - {0}")]
    public class Bridge1715
    {
        private class MyList : IEnumerable
        {
            public static string buffer;

            public void Add(int i)
            {
                buffer += "Add(" + i + ");";
            }

            public void Add(int i, int j)
            {
                buffer += "Add(" + i + ", " + j +");";
            }

            public MyList()
            {
            }

            public IEnumerator GetEnumerator()
            {
                throw new Exception();
            }
        }

        [Test]
        public void TestCollectionInitializerWithAdd()
        {
            MyList.buffer = string.Empty;

            var list = new MyList() { 1, { 2, 3 } };

            Assert.AreEqual("Add(1);Add(2, 3);", MyList.buffer);
        }
    }
}