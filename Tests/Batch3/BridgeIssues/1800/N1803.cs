using System;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1803 - {0}")]
    public class Bridge1803
    {
        public class Test1
        {
            public const string s = "Const";
            public static List<string> GetList()
            {
                return new List<string> { s };
            }
        }

        public class Test2
        {
            public static int s = 1;
            public static List<int> GetList()
            {
                return new List<int> { s };
            }
        }

        public class Test3
        {
            public int s = 1;
            public List<int> GetList()
            {
                return new List<int> { s };
            }
        }

        [Test]
        public void TestCollectionInitializerWithStaticMember()
        {
            var list1 = Test1.GetList();
            var list2 = Test2.GetList();
            var list3 = new Test3().GetList();

            Assert.AreEqual(1, list1.Count);
            Assert.AreEqual("Const", list1[0]);

            Assert.AreEqual(1, list2.Count);
            Assert.AreEqual(1, list2[0]);

            Assert.AreEqual(1, list3.Count);
            Assert.AreEqual(1, list3[0]);
        }
    }
}