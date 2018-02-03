using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3390 - {0}")]
    public class Bridge3390
    {
        [Test]
        public static void TestTernaryAssigmnment()
        {
            string msg = (true) ? msg = "left" : msg = "right";
            Assert.AreEqual("left", msg, "true condition of inline if binds as expected.");

            string msg2 = (false) ? msg2 = "left" : msg2 = "right";
            Assert.AreEqual("right", msg2, "false condition of inline if binds as expected.");

            string msg3 = (false) ? msg3 = "left" : ((false) ? msg3 = "middle" : msg3 = "right");
            Assert.AreEqual("right", msg3, "false condition on chained inline if binds as expected.");

            string msg4 = (false) ? msg4 = "left" : ((true) ? msg4 = "middle" : msg4 = "right");
            Assert.AreEqual("middle", msg4, "true condition of chained inline if binds as expected.");
        }
    }
}