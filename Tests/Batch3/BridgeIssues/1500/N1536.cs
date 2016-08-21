using System;
using Bridge.Test;

using System.ComponentModel;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1536 - {0}")]
    public class Bridge1536
    {
        public static string Test()
        {
            return "method";
        }

        public static event Func<string> test;

        public static int Test1()
        {
            return 1;
        }

        public static int test1
        {
            get;
            set;
        }

        [Test]
        public void TestEventNameConflict()
        {
            test += () => "event";

            Assert.AreEqual("method", Bridge1536.Test());
            Assert.AreEqual("event", Bridge1536.test());
        }

        [Test]
        public void TestPropertyNameConflict()
        {
            Bridge1536.test1 = 2;

            Assert.AreEqual(1, Bridge1536.Test1());
            Assert.AreEqual(2, Bridge1536.test1);
        }
    }
}